# Movie Search & Watchlist

A modern, responsive Angular application for searching movies and managing your personal watchlist. Built with the latest Angular features, PrimeNG components, and Tailwind CSS styling.

## Features

- **Movie Search**: Search for movies using the OMDB API with real-time results
- **Movie Details**: View detailed information including plot, cast, ratings, and more
- **Watchlist Management**: Add and remove movies from your personal watchlist
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Modern UI**: Clean, professional interface using PrimeNG and Tailwind CSS
- **Error Handling**: Comprehensive error handling with user-friendly messages
- **Toast Notifications**: Real-time feedback for user actions
- **Local Storage**: Persistent watchlist data across browser sessions

## Tech Stack

- **Framework**: Angular 19.2.13
- **UI Library**: PrimeNG with PrimeIcons
- **Styling**: Tailwind CSS with PrimeUI plugin
- **API**: OMDB API (Open Movie Database)
- **State Management**: RxJS with BehaviorSubject
- **Architecture**: Standalone components with modern Angular patterns

## Project Structure

```
src/
├── app/
│   ├── models/           # TypeScript interfaces
│   ├── movies/           # Movie search and details
│   ├── watch-list/       # Watchlist management
│   ├── navigation/       # App navigation
│   └── toast/           # Global notifications
├── styles.css           # Global styles
└── index.html          # App entry point
```

## Getting Started

### Prerequisites

- Node.js (version 18 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd movie-search
```

2. Install dependencies:
```bash
npm install
```

3. **Set up your OMDB API key**:
   - Visit [OMDB API](https://www.omdbapi.com/apikey.aspx) to get your free API key
   - Set up your environment file:
     ```bash
     npm run env:setup
     ```
   - Edit the `.env` file and add your API key:
     ```bash
     OMDB_API_KEY=your_actual_api_key_here
     ```

4. Start the development server:
```bash
ng serve
```

5. Open your browser and navigate to `http://localhost:4200/`

## Usage

### Searching Movies
1. Enter a movie title in the search box on the home page
2. Browse through the search results in the responsive grid
3. Click on any movie card to view detailed information

### Managing Watchlist
1. On the movie details page, click "Add to Watchlist" to save a movie
2. Navigate to the watchlist using the button in the header
3. Remove movies from your watchlist using the "Remove" button on each card
4. Your watchlist is automatically saved to local storage

### Navigation
- **Home**: Search and browse movies
- **Watchlist**: View your saved movies
- **Movie Details**: Detailed view of selected movie

## Key Components

- **MovieListComponent**: Displays search results in a responsive grid
- **MovieDetailsComponent**: Shows detailed movie information
- **WatchListComponent**: Manages and displays saved movies
- **NavigationComponent**: App header with navigation links
- **ToastComponent**: Global notification system

## Services

- **MoviesService**: Handles OMDB API integration and movie data
- **WatchListService**: Manages watchlist state and localStorage persistence
- **ToastService**: Provides centralized notification system

## 🔧 Configuration

### Environment Setup
The application uses a `.env` file to manage your API key securely:

1. **Create your `.env` file**:
   ```bash
   cp .env.example .env
   ```

2. **Add your API key to `.env`**:
   ```bash
   OMDB_API_KEY=your_actual_api_key_here
   ```

3. **Environment files are auto-generated**: 
   - When you run `npm start` or `npm run build`, the environment files are automatically generated from your `.env` file
   - This ensures your API key is never committed to version control

### API Configuration
- The OMDB API key is stored in the `.env` file
- Environment files (`src/environments/`) are auto-generated from `.env`
- Never commit your `.env` file to version control
- Use `.env.example` as a template for required environment variables

## Building for Production

To build the project for production:

```bash
ng build
```

The build artifacts will be stored in the `dist/` directory, optimized for performance and speed.

## Testing

Run unit tests:
```bash
ng test
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests for new functionality
5. Submit a pull request

## License

This project is licensed under the MIT License.

## Acknowledgments

- [OMDB API](https://www.omdbapi.com/) for movie data
- [PrimeNG](https://primeng.org/) for UI components
- [Tailwind CSS](https://tailwindcss.com/) for styling
- [Angular](https://angular.dev/) for the framework
