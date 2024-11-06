# NetflixGPT

![Main View](https://github.com/user-attachments/assets/4ce94164-851d-4754-9a55-82eed541cbd3)
![Sign In Page](https://github.com/user-attachments/assets/586d9058-780a-48a1-8037-5451d1de6e56)
![Browse Page](https://github.com/user-attachments/assets/f29d8096-e798-4146-ae22-d070aa6bca08)
![Gpt Featured Page](![Gpt](https://github.com/user-attachments/assets/37e08e16-4950-468a-82b5-948d5bb92cdf))


A Netflix-inspired movie browsing app that uses the TMDB API to fetch movie data and the OpenAI GPT API to suggest movies based on search queries. Built with React, TailwindCSS, Firebase for authentication, and Redux for state management.

## 🚀 Features

- **Authentication**: Sign Up, Sign In, and Sign Out functionality with Firebase.
- **Browse Movies**: Explore popular movies, view "Now Playing" lists, and access detailed movie information.
- **Trailer Video**: Watch trailers embedded directly in the main movie view.
- **NetflixGPT Search**: GPT-powered search for personalized movie recommendations using the OpenAI API.
- **Responsive Design**: Optimized for all screen sizes using TailwindCSS.
- **Multi-language Support**: Provides an international experience for users (Bonus).
- **Environment Variables**: Secure handling of API keys and secrets.

## 🛠 Tech Stack

- **Frontend**: React, TailwindCSS, React Router, Redux Toolkit
- **Backend**: Firebase Authentication, TMDB API, OpenAI API
- **Deployment**: Vercel / Firebase Hosting

## 📸 Screenshots

| Main View                | Sign In Page               | Browse Page               |
|--------------------------|----------------------------|---------------------------|
| ![Main View](https://github.com/user-attachments/assets/4ce94164-851d-4754-9a55-82eed541cbd3) | ![Sign In Page](https://github.com/user-attachments/assets/586d9058-780a-48a1-8037-5451d1de6e56) | ![Browse Page](https://github.com/user-attachments/assets/f29d8096-e798-4146-ae22-d070aa6bca08) |

## 📌 Project Journey

The development of NetflixGPT involved multiple steps and features, each of which is outlined below:

### Initial Setup

1. **Create React App**: Initialized the project with Create React App.
2. **Configured TailwindCSS**: Set up TailwindCSS for styling.

### UI & Routing

3. **Header**: Added a responsive navigation header.
4. **Routing**: Configured React Router for multi-page navigation.

### Authentication

5. **Login & Sign-Up Forms**: Created forms with validation.
6. **Firebase Setup**: Configured Firebase for user authentication.
7. **Form Handling**: Used `useRef` for handling inputs.
8. **Production Deployment**: Deployed to Vercel/Firebase.

### User Management

9. **User Account Setup**: Implemented sign-up and sign-in functionality with Firebase.
10. **Redux Integration**: Created `userSlice` for user state management.
11. **Sign Out**: Integrated sign-out functionality.
12. **Profile Update**: Enabled profile updates for display name and profile picture.

### Bug Fixes

13. **Profile Sync Fix**: Ensured updates to display name and profile picture.
14. **Redirect Handling**: Redirected unauthenticated users to the login page.

### State Management & API Integration

15. **State Unsubscription**: Unsubscribed from `onAuthStateChanged` after updates.
16. **Constants File**: Centralized constants in a dedicated file.
17. **TMDB API Access**: Set up TMDB API and generated an access token.
18. **Data Fetching for Movies**: Built custom hooks for fetching "Now Playing" movies.
19. **Redux Movie Slice**: Created a Redux slice for movie data.
20. **Trailer Fetching**: Integrated trailer data from TMDB API for main movie view.

### UI Design

21. **Styled Main Container**: Tailored styling for the main container with video background, autoplay, and mute features.
22. **Secondary Components**: Built components for movie lists and cards.
23. **Enhanced Browse Page**: Styled movie cards using TailwindCSS for an improved look.

### GPT Integration & Search

24. **Popular Movies Hook**: Built custom hooks for popular movie fetching.
25. **GPT Search Page**: Created a search bar powered by OpenAI GPT for movie recommendations.
26. **GPT API Integration**: Connected to OpenAI’s API for GPT-based suggestions.

### Optimization

27. **Component Reusability**: Reused Movie List component for GPT-based suggestions.
28. **Memoization**: Optimized performance with memoized components.
29. **Environment Variables**: Secured API keys using `.env` file.
30. **Responsive Design**: Made the site fully responsive using TailwindCSS.

## 🎬 App Features Summary

- **User Authentication**: Sign up, log in, and sign out with Firebase.
- **Movie Browsing**: Access movie lists, trailers, and detailed information.
- **GPT-Powered Search**: Find personalized movie recommendations via OpenAI.
- **Responsive UI**: Optimized for various screen sizes.
- **Multi-language Support**: International experience for broader audience appeal.

## 📜 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## 📬 Contact

For inquiries, please contact [your-email@example.com](mailto:your-email@example.com).

---

This organized structure helps potential users and contributors understand NetflixGPT's functionality, tech stack, and project workflow.
