const fs = require('fs');
const path = require('path');

// Read .env file
const envPath = path.join(__dirname, '.env');
const envExamplePath = path.join(__dirname, '.env.example');

if (!fs.existsSync(envPath)) {
  console.log('❌ .env file not found!');
  console.log('📋 Please create a .env file based on .env.example');
  console.log('💡 Run: cp .env.example .env');
  process.exit(1);
}

// Parse .env file
const envContent = fs.readFileSync(envPath, 'utf8');
const envVars = {};

envContent.split('\n').forEach(line => {
  if (line.trim() && !line.startsWith('#')) {
    const [key, value] = line.split('=');
    if (key && value) {
      envVars[key.trim()] = value.trim();
    }
  }
});

// Check if OMDB_API_KEY exists
if (!envVars.OMDB_API_KEY) {
  console.log('❌ OMDB_API_KEY not found in .env file!');
  console.log('📋 Please add your OMDB API key to the .env file');
  process.exit(1);
}

// Generate environment files
const environmentContent = `export const environment = {
  production: false,
  omdbApiKey: '${envVars.OMDB_API_KEY}'
};`;

const environmentProdContent = `export const environment = {
  production: true,
  omdbApiKey: '${envVars.OMDB_API_KEY}'
};`;

// Write environment files
const envDir = path.join(__dirname, 'src', 'environments');
if (!fs.existsSync(envDir)) {
  fs.mkdirSync(envDir, { recursive: true });
}

fs.writeFileSync(path.join(envDir, 'environment.ts'), environmentContent);
fs.writeFileSync(path.join(envDir, 'environment.prod.ts'), environmentProdContent);

console.log('✅ Environment files generated successfully!');
console.log('📝 Generated:');
console.log('   - src/environments/environment.ts');
console.log('   - src/environments/environment.prod.ts');
console.log('🔑 API Key configured from .env file');
