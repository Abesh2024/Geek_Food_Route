// import React from 'react'
import "./Signup.css"
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
                    navigate("/signin");
                })
                .catch((err) => {
                    alert(err.message);
                    console.log(err.message);
                });
        }
        alert("user added");
    }


    return (
        <div id='between-page'>
            <div className="signup-box">
                <h1 >Sign up to the Application</h1>
                <input className='inut-box' type="text" name="" id="" placeholder='Enter Your Name' ref={nameRef} />
                <input className='inut-box' type="text" placeholder='Enter Your Email ID' ref={emailRef} />
                <input className='inut-box' type="text" placeholder='Enter Password' ref={passRef} />
            </div>
            <div id="signup-btn"> 
            <button className='btn-align'
                onClick={() => {
                    signuphandler();
                }}
            >
                SignUp
            </button>
            <span ><button 
            className="btn-align"
            onClick={() => {
                navigate("/signin");
            }}>Login</button></span></div>
        </div>
    )
}

export default Signup
