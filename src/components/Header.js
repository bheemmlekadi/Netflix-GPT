import React from 'react'
import {auth} from "../utils/firebase"
import {signOut} from "firebase/auth"
import { useNavigate } from 'react-router-dom'

const Header = () => {
  const navigate = useNavigate();
const handleSignOut=()=>{
  signOut(auth).then(() => {
    // Sign-out successful.
    navigate("/");
  }).catch((error) => {
    // An error happened.
    navigate("/error");
  });
}

  return (
    <div className='absolute px-8 py-2 bg-gradient-to-b from-black z-10'>
        <img className="w-44 " src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt="logo"/>
    
      {user && <div className='flex'>
        <img className="w-8 font-bold text-white" src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt="usericon"/>
      <button onClick={handleSignOut}>(Sign Out)</button>
      </div>
        }
    </div>
  )
}

export default Header


//https://assets.nflxext.com/ffe/siteui/vlv3/5e16108c-fd30-46de-9bb8-0b4e1bbbc509/29d8d7d7-83cc-4b5f-aa9b-6fd4f68bfaa6/IN-en-20240205-popsignuptwoweeks-perspective_alpha_website_medium.jpg  --bg login image