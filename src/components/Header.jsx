import React, { useEffect } from "react";
import { Netflix_logo } from "../constant";
import { Netflix_icon } from "../constant";
import { SUPPORTED_LANGUAGES } from "../constant";
import { auth } from "../utils/firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { addUser, removeUser } from "../utils/userSlice";
import { onAuthStateChanged } from "firebase/auth";
import { toggleShowGptSearch } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector((store) => (store.gpt.showGptSearch));

  // Gpt Toggle Button
  const handleGptSearh = () => {
    dispatch(toggleShowGptSearch());
  };
  // Gpt language selection
  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  const handleSign = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid,
            email,
            displayName,
            photoURL,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <div className="login-header absolute top-0 h-20 inset-0 z-20 flex flex-row bg-gradient-to-b from-black">
      <div className="w-1/6 scale-[0.8] ">
        <img src={Netflix_logo} alt="Netflix Logo" />
      </div>
      {user && (
        <div className="w-5/6 text-white flex flex-row justify-between px-8 ">
          <div className="flex flex-row justify-center items-center list-none space-x-4">
            <li>Home</li>
            <li>Tv Shows</li>
            <li>Movies</li>
            <li>New & Popular</li>
            <li>My List</li>
            <li>Browse by Languages</li>
          </div>
          <div className="flex flex-row justify-center items-center space-x-4 list-none">

          {showGptSearch && 
          (<select
              className=" p-2 m-2 bg-gray-900 bg-opacity-100 text-white"
              onChange={handleLanguageChange}
            >
              {SUPPORTED_LANGUAGES.map((lang) => (
                <option key={lang.identifier} value={lang.identifier}>
                  {lang.name}
                </option>
              ))}
            </select>)}

            <li
              onClick={handleGptSearh}
              className=" cursor-pointer bg-purple-600 p-2 rounded-lg text-lg font-bold"
            >
              {showGptSearch ? "Home Page" : "GPT Search"}
            </li>
            <button onClick={handleSign}>
              <img src={user?.photoURL} alt="usericon" className="w-[45px]" />
              Sign out
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
