// import React from 'react'
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../Firebase";
import React, { useRef } from "react";



const Signup = () => {

    const nameRef = useRef(null);
    const emailRef = useRef(null);
    const passRef = useRef(null);


  const navigate = useNavigate();



  async function signuphandler() {
    const email = emailRef.current.value;
    const name = nameRef.current.value;
    const pass = passRef.current.value;

    const result = await createUserWithEmailAndPassword(auth, email, pass);
    console.log(result);
    if (result) {
      const currentUser = result.user;
      updateProfile(currentUser, {
        displayName: name,
      })
        .then(() => {
          alert("Account Created");
          navigate("/home");
        })
        .catch((err) => {
          alert(err.message);
          console.log(err.message);
        });
    }
    alert("user added");
  }


  return (
    <>
    <h1>Sign up first to see the content</h1>
    <div style={{border: "5px solid red", display: "flex"}}>
        <input type="text" name="" id="" placeholder='Enter Your Name' ref={nameRef}/>
        <input type="text" placeholder='Enter Your Email ID' ref={emailRef}/>
        <input type="text" placeholder='Enter Password'  ref={passRef}/>
    </div> 
    <button
            onClick={() => {
              signuphandler();
            }}
          >
            SignUp
          </button>
          <span><button onClick={()=>{
             navigate("/signin");
          }}>Login</button></span>
    </>
  )
}

export default Signup
