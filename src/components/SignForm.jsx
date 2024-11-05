import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { checkValidData } from "../utils/validate";
import { auth } from "../utils/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile
} from "firebase/auth";
import { addUser } from "../utils/userSlice";
import { useDispatch } from "react-redux";
import { Netflix_icon } from "../constant";

const SignForm = () => {
  // States of the form component
  const [isLoginForm, setIsLoginForm] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);
  const [name, setName] = useState(""); // State for name
  const [email, setEmail] = useState(""); // State for email
  const [password, setPassword] = useState(""); // State for password

  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Toggle Function
  const toggleForm = () => {
    setIsLoginForm(!isLoginForm);
    // Resetting the inputs when toggling forms
    setName("");
    setEmail("");
    setPassword("");
  };

  // Handle function after submitting
  const handleButtonClick = () => {
    // Check Validation
    const message = checkValidData(email, password);
    setErrorMsg(message);
    if (message) return;

    // Proceed to Sign in / Sign Up
    if (!isLoginForm) {
      // Sign up logic
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name,
            photoURL: Netflix_icon,
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL
                })
              );
              navigate("/browse");
            })
            .catch((error) => {
              setErrorMsg(error.message);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMsg("Sign In error " + errorCode + ": " + errorMessage);
        });
    } else {
      // Sign in logic
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;

          navigate("/browse");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMsg("Sign In error " + errorCode + "-" + errorMessage);
        });
    }
  };

  return (
    <div className="login-form absolute inset-0 z-20 flex justify-center items-center overflow-hidden">
      <div className=" w-[90%] sm:w-[80%] md:w-[28em] h-full mt-48 text-white bg-black bg-opacity-65 p-8 rounded ">
        {/* Form */}
        <form
          onSubmit={(e) => e.preventDefault()}
          className="space-y-4 p-6 flex flex-col justify-center "
        >
          <h1 className="font-bold text-4xl mb-6">
            {isLoginForm ? "Sign In" : "Sign Up"}
          </h1>
          <div className="flex flex-col w-full">
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)} // Update email state on change
              type="text"
              className="p-3 rounded bg-black bg-opacity-40 font-semibold border-gray-400 border-[0.5px] text-white outline-none"
              placeholder="Email or mobile number"
            />
          </div>

          {!isLoginForm && (
            <div className="flex flex-col w-full">
              <input
                value={name}
                onChange={(e) => setName(e.target.value)} // Update name state on change
                type="text"
                className="p-3 rounded bg-black bg-opacity-40 font-semibold border-gray-400 border-[0.5px] text-white outline-none"
                placeholder="Full Name"
              />
            </div>
          )}

          <div className="flex flex-col w-full">
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)} // Update password state on change
              type="text"
              className="p-3 rounded bg-black bg-opacity-40 font-semibold border-gray-400 border-[0.5px] text-white outline-none"
              placeholder="Password"
            />
          </div>

          {/* Error Message Highlighter */}
          <div>
            <p className="text-normal text-red-500">{errorMsg}</p>
          </div>

          <button
            className="mt-4 w-full p-2 bg-red-600 rounded font-semibold text-white hover:bg-red-500"
            onClick={handleButtonClick}
          >
            {isLoginForm ? "Sign In" : "Sign Up"}
          </button>
        </form>

        {/* Footer */}
        <footer className="mt-4 text-center text-gray-400">
          <span onClick={toggleForm} className="cursor-pointer">
            {isLoginForm ? (
              <>
                New to Netflix?{" "}
                <span className="text-white underline">Sign up now</span>
              </>
            ) : (
              <>
                Already registered?{" "}
                <span className="text-white underline">Sign in now</span>
              </>
            )}
          </span>
        </footer>
      </div>
    </div>
  );
};

export default SignForm;
