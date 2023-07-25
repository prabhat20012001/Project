import React from "react";
import { Link } from "react-router-dom";
import { logo } from "../../assets";
import { login } from "../../assets";

function PatientLogin() {
  return (
    <main class="flex md:flex-row flex-col justify-center items-center md:items-stretch h-screen">
      <aside class="md:w-1/2 hidden md:flex justify-center items-center bg-primary-200 bg-[url(../images/right-bar.jpg)] bg-right bg-no-repeat bg-contain">
        <img src={login} alt="" class="block object-cover w-[648px]" />
      </aside>

      <div class="md:w-1/2 flex justify-center items-center px-4">
        <div class="sm:w-[440px] w-full">
          <div class="sm:w-[320px] w-full mx-auto mb-12">
            <Link to="/">
              <img src={logo} alt="Logo" class="block object-cover w-full" />
            </Link>
          </div>

          <div class="flex justify-between gap-5 mb-10">
            <Link to={LoginUrl} class="btn-transparent">
              LOGIN
            </Link>
            <Link to={SignUpUrl} class="btn-primary">
              SIGN UP
            </Link>
          </div>

          {/* Login Form */}
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

export default PatientLogin;
