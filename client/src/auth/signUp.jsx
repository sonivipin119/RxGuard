
import React, { useState } from 'react';
import './signUp.css';
function Signup() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setlastName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({ firstName, lastName, username, email, password, confirmPassword });
  };

  return (
    <center className="signContainer">
      <form className="formSign" onSubmit={handleSubmit}>
        <div className='title'>
          <h2>Create Your Account</h2>
          <p>Join us and get started right away</p>
        </div>

        <div className="nameFields">
          <input type="text" className="inputNames" id="firstName" value={firstName} onChange={(e) => setFirstName(e.target.value)} placeholder="First Name" />
          <input type="text" className="inputNames" id="lastName" value={lastName} onChange={(e) => setlastName(e.target.value)} placeholder="Last Name" />
        </div>
        <input type="text" className="fields" id="username" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" />
        <input type="email" className="fields" id="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
        <input type="password" className="fields" id="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
        <input type="password" className="fields" id="confirmPassword" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} placeholder="Confirm Password" />
        <div className='userType'>
          <span className='headUser'>User Type:</span>
          <label htmlFor="doctor" class="users">
          <input type="radio" id="doctor" name="userType" value="doctor" />
          Doctor</label>
          <label htmlFor="patient" class="users">
          <input type="radio" id="patient" name="userType" value="patient" />
          Patient</label>
          <label htmlFor="pharmacist" class="users">
          <input type="radio" id="pharmacist" name="userType" value="pharmacist" />
          Pharmacist</label>
        </div>
        <label class="termIcon">
          <input type="checkbox" id="terms" name="terms" />
          <span>I agree to the &nbsp;  
          <a href='#' class="link">Term And Conditions</a></span>
        </label>
        <input type="submit" className="fields submitBtn" />
      </form>
      <div className='logInLink'>
        <span className='logInHead'>Already have an account?</span> <a href="#"class="link">Log In</a>
      </div>
    </center>
  );
}

export default Signup;