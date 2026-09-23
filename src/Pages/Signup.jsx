import React, { useEffect } from 'react'
import { Link } from "react-router-dom"
import '../Styles/Signup.css'
import logo from '../images/logo.png'
import {  useNavigate } from "react-router-dom"

function Signup() {
    const navigate = useNavigate()


    useEffect(()=>{
 
        const gateway = localStorage.getItem("isLoggedIn")

        if(gateway==="true"){
            navigate('/home')
        }

    },[])




  return (
    
        <div className="welcome-page">

            <div className="welcome-card">

                {/* Brand Logo */}
                <div className="brand-logo">
                    <img src={logo} alt="" />
                </div>

                {/* Brand Name */}
                <h1 className="brand-name">
                    CONNECTHUB
                </h1>

                {/* Main Text */}
                <h2 className="welcome-title">
                    Connect. Chat.
                    <br />
                    Share.
                </h2>

                <p className="welcome-subtitle">
                    Your people. Your conversations.
                    <br />
                    All in one place.
                </p>

                {/* Login Button */}
                <Link to="/login" className="login-button">
                    sign in
                </Link>

            </div>

        </div>
  )
}

export default Signup




