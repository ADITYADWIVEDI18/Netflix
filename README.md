# NetflixGPT

A Netflix-inspired movie browsing app that uses the TMDB API to fetch movie data and the OpenAI GPT API to suggest movies based on search queries. Built with React, TailwindCSS, Firebase for authentication, and Redux for state management.

## 🚀 Features

- **Authentication**: Sign Up, Sign In, and Sign Out functionality with Firebase.
- **Browse Movies**: Browse popular movies, view "now playing" lists, and access detailed information.
- **Trailer Video**: Watch trailers embedded within the main movie view.
- **NetflixGPT Search**: Search for movies with GPT-powered suggestions using the OpenAI API.
- **Responsive Design**: Fully responsive with TailwindCSS.
- **Multi-language Support**: Bonus feature for language versatility.
- **Environment Variables**: Secure handling of API keys and secrets.

## 🛠 Tech Stack

- **Frontend**: React, TailwindCSS, React Router, Redux Toolkit
- **Backend**: Firebase Authentication, TMDB API, OpenAI API
- **Deployment**: Vercel / Firebase Hosting

## 📸 Screenshots

![Main View]<img src="(https://github.com/user-attachments/assets/4ce94164-851d-4754-9a55-82eed541cbd3)" />
![Sign In Page] <img src="(https://github.com/user-attachments/assets/586d9058-780a-48a1-8037-5451d1de6e56)" />
![Browse Page]<img src="(https://github.com/user-attachments/assets/f29d8096-e798-4146-ae22-d070aa6bca08)" />

## 📌 Project Journey

The development of this app included various steps and features, which are outlined below:

### Initial Setup

1. **Create React App**: Initialized the project using Create React App.
2. **Configured TailwindCSS**: Set up TailwindCSS for styling.

### UI & Routing

3. **Header**: Added a responsive header for navigation.
4. **Routing**: Configured React Router for navigating different app pages.

### Authentication

5. **Login Form**: Created a login form with form validation.
6. **Sign Up Form**: Created a sign-up form with form validation.
7. **useRef Hook**: Used `useRef` for handling input references in forms.
8. **Firebase Setup**: Configured Firebase for user authentication.
9. **Deploy to Production**: Deployed the app to a production environment (e.g., Vercel or Firebase).

### User Actions

10. **Create Sign-Up User Account**: Implemented user registration with Firebase.
11. **Sign In API**: Integrated Firebase authentication for user sign-in.
12. **Redux Store with `userSlice`**: Created a Redux slice to manage user state.
13. **Sign Out**: Implemented sign-out functionality.
14. **Update Profile**: Allowed users to update their display name and profile picture.

### Bug Fixes

15. **Profile Update Fix**: Fixed issue where `displayName` and profile picture were not updating correctly.
16. **Login Redirect**: Redirected users to the login page if they attempt to access `/browse` without logging in, and vice-versa.

### State & API Integration

17. **Unsubscribe `onAuthStateChanged`**: Unsubscribed from Firebase’s `onAuthStateChanged` callback after user state update.
18. **Constants File**: Added hardcoded values to a constants file for easier maintenance.
19. **TMDB API Registration**: Registered with TMDB API and created an app to get the access token.
20. **Fetch Now Playing Movies**: Created a custom hook to fetch the "Now Playing" movies list from TMDB API.
21. **Create `movieSlice`**: Created a Redux slice to manage movie data in the store.
22. **Trailer Video Fetch**: Retrieved trailer videos for selected movies from TMDB API.
23. **Update Store with Trailer Video Data**: Updated Redux store with trailer video information.

### UI Enhancements

24. **Main Container Styling**: Used TailwindCSS to style the main container with a trailer background, autoplay, and mute features.
25. **Secondary Component**: Built secondary components for movie lists and card displays.
26. **Movie List and Cards**: Displayed movie lists and individual movie cards using TMDB's image CDN.
27. **Enhanced Browse Page**: Styled the browse page using TailwindCSS.

### Custom Hooks & Search Functionality

28. **Custom Hook `usePopularMovies`**: Built a custom hook to fetch and display popular movies.
29. **GPT Search Page**: Created a page with a GPT-powered search bar.
30. **GPT Search API Call**: Integrated OpenAI’s GPT API to provide movie suggestions.
31. **Fetch `gptMoviesSuggestions` from TMDB**: Retrieved GPT-generated movie suggestions and stored them in Redux.

### Code & Performance Optimization

32. **Reuse Movie List Component**: Reused the Movie List component for displaying GPT-based suggestions.
33. **Memoization**: Improved performance by memoizing components.
34. **Environment Variables**: Added `.env` file for storing API keys and other sensitive data.
35. **Git Ignore `.env`**: Updated `.gitignore` to exclude `.env` file from version control.
36. **Responsive Design**: Made the site fully responsive with TailwindCSS.

## 🎬 App Features Summary

1. **Login / Sign Up**: User authentication with Firebase.
2. **Sign In / Sign Up Form**: Redirect to Browse Page after successful authentication.
3. **Browse (after authentication)**: Main browsing page with a trailer video in the background.
4. **Header**: Navigation header with links and sign-out option.
5. **Main Movie Trailer**: Background trailer with title and description.
6. **Movie Suggestions**: GPT-powered movie suggestions based on search queries.
7. **Movie Lists**: Displays lists of movies such as "Now Playing" and "Popular".
8. **NetflixGPT Search Bar**: Search bar with GPT-powered suggestions.
9. **Multi-language Support**: Multi-language feature for an international user experience.

## 📜 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## 📬 Contact

For any inquiries, please contact [your-email@example.com](mailto:your-email@example.com).
