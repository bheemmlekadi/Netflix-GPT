import React, { useState } from 'react'

import Header from './Header'

const Login = () => {
    const [isSignInForm,setIsSignInForm] =useState(true);

  const toggleSignInForm=()=>{
    setIsSignInForm(!isSignInForm);

  }

  return (
    <>
    <Header/>
    <div>
     <img className="absolute" src="https://assets.nflxext.com/ffe/siteui/vlv3/5e16108c-fd30-46de-9bb8-0b4e1bbbc509/29d8d7d7-83cc-4b5f-aa9b-6fd4f68bfaa6/IN-en-20240205-popsignuptwoweeks-perspective_alpha_website_medium.jpg" alt="logo"/>
     </div>
       <form className='w-3/12 absolute p-2  bg-black my-36 mx-auto right-0 left-0 rounded-lg text-white bg-opacity-100' >
        <h1 className='font-bold font-3xl py-4'>{isSignInForm?"Sign Up":"Sign In"}</h1>
        {!isSignInForm &&(<input type="text" placeholder='Full Name' className='p-4 my-4 w-full bg-gray-700 rounded-sm'/>)}
        <input type="text" placeholder='Email Address' className='p-4 my-4 w-full bg-gray-700 rounded-sm'/>
        <input type="text" placeholder='Password' className='p-4 my-4 w-full  bg-gray-700 rounded-sm'/>
        <button className='p-4 my-6 bg-red-700 w-full rounded-lg'>Sign In</button>
        <p className='py-4 cursor-pointer' onClick={toggleSignInForm}>
          {isSignInForm? "New to Netflix? Sign Ip Now":"Already registered? Sign In Now"}</p>
       </form>
    
        </>
  )
}

export default Login