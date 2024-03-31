// import React from 'react'
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../Firebase";
import React, { useRef, useState } from "react";


const Signin = () => {

  const [input, setInpt] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  async function signInHandler() {

    const result = await signInWithEmailAndPassword(auth, input, password)
  
      .then(() => {
        alert("Account Created");
        navigate("/home");
      })
      .catch((err) => {
        alert(err.message);
        console.log(err.message);
      });

  }

  return (
    <div>
      <div className='signin_page_sec'>
        <div className='signin_page'>
          <div className="namee">
            <h2>SignIn</h2>
          </div>
          <div className="info">
            <input value={input} placeholder='Emial' type="text" onChange={(e) => {
              setInpt(e.target.value)
            }} />
            <input value={password} placeholder='password' type="password" onChange={(e) => {
              setPassword(e.target.value)
            }} />

          </div>
          <div className='btnn'>
            <button onClick={signInHandler}>SignIn</button>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Signin
