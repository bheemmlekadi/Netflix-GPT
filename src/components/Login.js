import React, { useState,useRef } from 'react'
import { useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword,signInWithEmailAndPassword,updateProfile } from 'firebase/auth';
import {auth} from '../utils/firebase'
import Header from './Header'
import {checkValidData} from '../utils/validate'

const Login = () => {
    const [isSignInForm,setIsSignInForm] =useState(true);
    const [errorMessage,setErrorMessage] = useState(null);

    const name = useRef(null);
    const email = useRef(null);
    const password = useRef(null);

    const navigate = useNavigate();

  const toggleSignInForm=()=>{
    setIsSignInForm(!isSignInForm);

  }

  const handleButtonClick =() =>{
    

    //validate the form data

 const message = checkValidData(name.current.value,email.current.value,password.current.value);
  setErrorMessage(message);

  if(message) return;

  //sign in sign up logic 

  if(!isSignInForm){
//sign up
createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    updateProfile(user, {
      displayName: name.current.value, photoURL: user.photoURL
    }).then(() => {
      navigate("/browse");

    }).catch((error) => {
     setErrorMessage(error)
    });

  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode,errorMessage);

    setErrorMessage(errorCode+'-'+errorMessage);
    // ..
  });

  }else{
//sign in
signInWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user);
    navigate("/browse");
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode+'-'+errorMessage);
  });
  }


    
  }
  return (
    <>
    <Header/>
    <div>
     <img className="absolute" src="https://assets.nflxext.com/ffe/siteui/vlv3/5e16108c-fd30-46de-9bb8-0b4e1bbbc509/29d8d7d7-83cc-4b5f-aa9b-6fd4f68bfaa6/IN-en-20240205-popsignuptwoweeks-perspective_alpha_website_medium.jpg" alt="logo"/>
     </div>
       <form className='w-3/12 absolute p-2  bg-black my-36 mx-auto right-0 left-0 rounded-lg text-white bg-opacity-100'  >
        <h1 className='font-bold font-3xl py-4'>{isSignInForm?"Sign Up":"Sign In"}</h1>
        {!isSignInForm &&(<input type="text" useRef={name} placeholder='Full Name' className='p-4 my-4 w-full bg-gray-700 rounded-sm'/>)}
        <input ref={email} type="text" name="user-name" placeholder='Email Address' className='p-4 my-4 w-full bg-gray-700 rounded-sm'/>
        <input ref={password} type="password" name="password" placeholder='Password' className='p-4 my-4 w-full  bg-gray-700 rounded-sm'/>
        <p className="error-message text-red-500 font-bold text-lg p-2">{errorMessage}</p>
        <button className='p-4 my-6 bg-red-700 w-full rounded-lg' onClick={handleButtonClick}>Sign In</button>
        <p className='py-4 cursor-pointer' onClick={toggleSignInForm}>
          {isSignInForm? "New to Netflix? Sign Ip Now":"Already registered? Sign In Now"}</p>
       </form>
    
        </>
  )
}

export default Login