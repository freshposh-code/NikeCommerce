import React from "react";
import { useState } from "react";
import GoogleButton from "react-google-button";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "./Context/AuthContext";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const { createUser } = UserAuth();
  const { provider } = UserAuth();

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await createUser(email, password);
      navigate("/");
      toast.success(`Welcome to Posh Nikestore`);
    } catch (e) {
      setError(e.message);
      console.log(e.message);
    }
  };
  const handleGoogleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await provider();
      navigate("/");
      toast.success(`Welcome to Posh Nikestore`);
    } catch (e) {
      setError(e.message);
      console.log(e.message);
    }
  };

  return (
    <>
      <section>
        <div className="w-full h-screen">
          <img
            src="https://cdn.pixabay.com/photo/2016/11/19/18/06/feet-1840619__480.jpg"
            alt="img/nike"
            className="h-[100%] w-screen object-cover sm:block hidden"
          />
          <div className="bg-white/30 absolute top-0 left-0 right-0 flex items-center justify-center w-[100%] h-full" />
          <div className="h-[100vh] flex justify-center flex-col sm:m-0 m-2 absolute top-0 right-0 left-0">
            <form
              onSubmit={handleSubmit}
              className="z-[1002] border border-gray-600 justify-center xs:w-[400px] w-[100%] sm:p-4 p-2 m-auto"
            >
              {error ? (
                <p className="text-red-700 text-center">!{error}</p>
              ) : null}
              <div className="flex flex-col py-5">
                <label className="text-gray-600">Your Email</label>
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  placeholder="email"
                  className="border border-gray-500 cursor-pointer w-[100%] py-2 px-2 my-4"
                />
                <label className="text-gray-600">Your Password</label>
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  placeholder="password"
                  className="border border-gray-500 cursor-pointer py-2 px-2 my-4"
                />
                <button className="w-[100%] border border-blue-400 bg-blue-900 bg-gradient-to-b from-blue-500 hover:bg-blue-800 duration-200 text-white py-2">
                  Sign Up
                </button>
                <p className="text-gray-600 text-sm mt-3">
                  Already have an account?{" "}
                  <Link to="/signin">
                    <span className="cursor-pointer text-gray-800">
                      SIGN IN
                    </span>
                  </Link>
                </p>
                <span className="text-center mt-1">
                  ---------- OR ---------
                </span>
                <GoogleButton
                  onClick={handleGoogleSubmit}
                  type="dark"
                  label="Sign up with Google"
                  className="mt-1 flex w-[50%] m-auto"
                />
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default SignUp;
