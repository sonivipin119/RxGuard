import React, { useState } from "react";
import "../auth/signUp.css";
function Signup() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({ firstName, lastName, username, email, password, confirmPassword });
  };

  return (
    <center>
    <div className="flex flex-col w-[450px] m-6 justify-center items-center shadow-2xl rounded-xl border  bg-white">
      <form
        className="flex flex-col p-6"
        onSubmit={handleSubmit}
      >
        {/* Title */}
        <div className="mb-4">
          <h2 className="text-2xl text-black font-bold mb-1">Create Your Account</h2>
          <p className="text-gray-500 text-sm">Join us and get started right away</p>
        </div>

        {/* First + Last name */}
        <div className="flex justify-between mb-4 gap-3">
          <input
            type="text"
            id="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            placeholder="First Name"
            className="w-1/2 px-3 py-2 border bg-white border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            required
          />
          <input
            type="text"
            id="lastName"
            value={lastName}
            onChange={(e) => setlastName(e.target.value)}
            placeholder="Last Name"
            className="w-1/2 px-3 py-2 border bg-white border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            required
          />
        </div>

        {/* Username */}
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
          className="w-full mb-4 px-3 py-2 border bg-white border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
          required
        />

        {/* Email */}
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          className="w-full mb-4 px-3 py-2 border bg-white  border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
          required
        />

        {/* Password */}
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          className="w-full mb-4 px-3 py-2 border bg-white border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
          required
        />

        {/* Confirm Password */}
        <input
          type="password"
          id="confirmPassword"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          placeholder="Confirm Password"
          className="w-full mb-4 px-3 py-2 border bg-white border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
          required
        />

        {/* User Type */}
        <div className="flex items-center gap-4 mb-4">
          <span className="font-semibold text-gray-700">User Type:</span>
          <label className="flex items-center gap-1 text-sm text-black">
            <input type="radio" name="userType" value="doctor" className="accent-blue-600 bg-white" required/>
            Doctor
          </label>
          <label className="flex items-center gap-1 text-sm text-black">
            <input type="radio" name="userType" value="patient" className="accent-blue-600" required/>
            Patient
          </label>
          <label className="flex items-center gap-1 text-sm text-black">
            <input type="radio" name="userType" value="pharmacist" className="accent-blue-600" required/>
            Pharmacist
          </label>
        </div>

        {/* Terms */}
        <label className="flex items-start text-sm mb-4 gap-2 text-black">
          <input type="checkbox" id="terms" name="terms" className="mt-1 accent-blue-600" required/>
          <span>
            I agree to the{" "}
            <a href="#" className="text-blue-600 hover:underline">
              Terms and Conditions
            </a>
          </span>
        </label>

        {/* Submit button */}
        <input
          type="submit"
          value="Sign Up"
          className="w-full bg-blue-600 text-white font-semibold py-2 rounded-lg cursor-pointer transition hover:bg-gray-200 hover:text-black"
        />
      </form>

      {/* Already have an account */}
      <div className="text-sm text-gray-900 font-semibold mb-3">
        <span>Already have an account? </span>
        <a href="#" className="font-bold text-blue-600 hover:underline">
          Log In
        </a>
      </div>
    </div>
    </center>
  );
}

export default Signup;
