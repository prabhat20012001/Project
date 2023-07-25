import React, { useState } from "react";
import { Link } from "react-router-dom";
import { logo } from "../../assets";
import { doctorLogin } from "../../assets";

function DoctorsLogin() {
  const [showLogin, setShowLogin] = useState(true);

  const toggleForm = () => {
    setShowLogin(!showLogin);
  };

  return (
    <main className="flex md:flex-row flex-col justify-center items-center md:items-stretch h-screen">
      <aside className="md:w-1/2 hidden md:flex justify-center items-center bg-primary-200 bg-[url(../images/right-bar.jpg)] bg-right bg-no-repeat bg-contain">
        <img src={doctorLogin} alt="" className="block object-cover w-[648px]" />
      </aside>

      <div className="md:w-1/2 flex justify-center items-center px-4">
        <div className="sm:w-[440px] w-full">
          <div className="sm:w-[320px] w-full mx-auto mb-12">
            <Link to="/">
              <img src={logo} alt="Logo" className="block object-cover w-full" />
            </Link>
          </div>

          <div className="flex justify-between gap-5 mb-10">
            <button className="btn-transparent" onClick={toggleForm}>
              LOGIN
            </button>
            <button className="btn-primary" onClick={toggleForm}>
              SIGN UP
            </button>
          </div>

          {/* Login Form */}
          {showLogin && (
            <form action="javascript:void()" className="mb-8">
              <label htmlFor="username" className="mb-5 block">
                <input
                  type="text"
                  id="username"
                  name="username"
                  placeholder="Email or Mobile Number"
                  className="form-input"
                />
              </label>
              <label htmlFor="password">
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Password"
                  className="form-input"
                />
                <a href="#" className="text-right block mb-10 text-primary-100">
                  Forgot Password?
                </a>
              </label>
              <div className="text-center">
                <button className="btn-primary !w-fit !px-28">LOGIN</button>
              </div>
            </form>
          )}

          {/* Sign Up Form */}
          {!showLogin && (
            <form action="javascript:void()" className="mb-4 md:mb-8">
              <label htmlFor="name">
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Name"
                  className="form-input"
                />
              </label>
              <label htmlFor="email">
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email"
                  className="form-input"
                />
              </label>
              <label htmlFor="gender">
                <select name="gender" id="gender" className="form-input">
                  <option>Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </label>
              <label htmlFor="mobile">
                <input
                  type="tel"
                  id="mobile"
                  name="mobile"
                  placeholder="Mobile Number"
                  className="form-input"
                />
              </label>
              <div className="text-center flex gap-2 flex-col justify-center items-center w-64 mx-auto lg:mt-4">
                <button className="btn-primary !w-full">CREATE ACCOUNT</button>
                <button className="btn-transparent !w-full">
                  SIGN UP WITH GOOGLE
                </button>
              </div>
            </form>
          )}

          <p className="text-center">
            Don't have an account yet.
            <a href="#" className="text-primary-100">
              Sign Up
            </a>
          </p>
        </div>
      </div>
    </main>
  );
}

export default DoctorsLogin;
