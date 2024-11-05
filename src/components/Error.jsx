import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white p-6">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-red-600 mb-4">404</h1>
        <h2 className="text-3xl font-semibold mb-2">Page Not Found</h2>
        <p className="text-lg text-gray-400 mb-6">
          Oops! The page you are looking for does not exist.
        </p>
        <Link to="/" className="inline-block">
          <button className="px-6 py-3 bg-red-600 text-white font-semibold text-lg rounded hover:bg-red-700 transition duration-300 ease-in-out">
            Go Back to Home
          </button>
        </Link>
      </div>
      <div className="mt-8">
        <img
          src="https://media.giphy.com/media/l2JhpjWPccQhsAMfu/giphy.gif"
          alt="Lost in Space"
          className="w-72 md:w-96 rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
};

export default Error;
