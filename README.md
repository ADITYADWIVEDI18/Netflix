# NetflixGPT

A Netflix-inspired movie browsing app that uses TMDB API to fetch movie data and OpenAI GPT API to suggest movies based on search queries. Built with React, TailwindCSS, Firebase for authentication, and Redux for state management.

## 🚀 Features

- **Authentication**: Sign Up, Sign In, and Sign Out functionality with Firebase.
- **Browse Movies**: Browse popular movies, now playing, and get detailed information.
- **Trailer Video**: Watch trailers embedded in the main movie view.
- **NetflixGPT Search**: Search for movies with GPT-powered suggestions using OpenAI’s API.
- **Responsive Design**: Fully responsive with TailwindCSS.
- **Multi-language Support** (Bonus).
- **Environment Variables**: Secure handling of API keys and secrets.

## 🛠 Tech Stack

- **Frontend**: React, TailwindCSS, React Router, Redux Toolkit
- **Backend**: Firebase Authentication, TMDB API, OpenAI API
- **Deployment**: Vercel/Firebase Hosting

## 📸 Screenshots

![Main View](![image](https://github.com/user-attachments/assets/4ce94164-851d-4754-9a55-82eed541cbd3))
![Sign Page](![image](https://github.com/user-attachments/assets/586d9058-780a-48a1-8037-5451d1de6e56))
![Browse Page](![image](https://github.com/user-attachments/assets/f29d8096-e798-4146-ae22-d070aa6bca08))

## Project Journey 
Create React App
Configured TailwindCSS
Header
Routing of App
Login Form
Sign up Form
Form Validation
useRef Hook
Firebase Setup
Deploying our app to production
Create SignUp User Account
Implement Sign In user Api
Created Redux Store with userSlice
Implemented Sign out
Update Profile
BugFix: Sign up user displayName and profile picture update
BugFix: if the user is not logged in Redirect /browse to Login Page and vice-versa
Unsubscibed to the onAuthStateChanged callback
Add hardcoded values to the constants file
Regiter TMDB API & create an app & get access token
Get Data from TMDB now playing movies list API
Custom Hook for Now Playing Movies
Create movieSlice
Update Store with movies Data
Planning for MainContauiner & secondary container
Fetch Data for Trailer Video
Update Store with Trailer Video Data
Embedded the Yotube video and make it autoplay and mute
Tailwind Classes to make Main Container look awesome
Build Secondary Component
Build Movie List
build Movie Card
TMDB Image CDN URL
Made the Browsre page amazing with Tailwind CSS
usePopularMovies Custom hook
GPT Search Page
GPT Search Bar
(BONUS) Multi-language Feature in our App)
Get Open AI Api Key
Gpt Search API Call
fetched gptMoviesSuggestions from TMDB
created gptSlice added data
Resused Movie List component to make movie suggestion container
Memoization
Added .env file
Adding .env file to gitignore
Made our Site Responsive
Features
Login/Sign Up
Sign In /Sign up Form
redirect to Browse Page
Browse (after authentication)
Header
Main Movie
Tailer in Background
Title & Description
MovieSuggestions
MovieLists * N
NetflixGPT
Search Bar
Movie Suggestions
