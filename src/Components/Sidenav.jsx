
import React from "react";
import { Link } from "react-router-dom";
import "../Styles/Sidenav.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Sidenav() {

  const navigate = useNavigate()

  const profileId= localStorage.getItem("userId")
    
  const [showLogoutPopup, setShowLogoutPopup] = useState(false)



  function Logout(e){
    e.preventDefault()
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("userId")
    navigate('/')
    }

  
    function openLogoutPopup() {
    setShowLogoutPopup(true)
    }

   function closeLogoutPopup() {
   setShowLogoutPopup(false)
    }


  




  return (
    <>
    <aside className="side-navbar">

      {/* Brand */}
      <div className="side-brand">
        <div className="side-logo">
          <i className="bi bi-chat-heart-fill"></i>
        </div>

        <h2>
          CONNECT<span>HUB</span>
        </h2>
      </div>

      {/* Navigation */}
      <nav className="side-menu">

        <Link to="/home" className="side-menu-item active">
          <i className="bi bi-house-door-fill"></i>
          <span>Home</span>
        </Link>

        <Link to="/about" className="side-menu-item">
          <i className="bi bi-globe"></i>
          <span>About</span>
        </Link>

            <Link to="/Post" className="side-menu-item">
          <i className="bi bi-plus-lg"></i>
          <span>Create </span>
        </Link>




        <Link to={`/profile/${profileId}`} className="side-menu-item">
          <i className="bi bi-person-circle"></i>
          <span>Profile</span>
        </Link>

      </nav>

      {/* Bottom Section */}
      <div className="side-bottom" onClick={(e)=>openLogoutPopup(e)}>

     

        <button
          type="button"
          className="logout-btn"
        >
          <i  className="bi bi-box-arrow-right"></i>
          <span >Logout</span>
        </button>

      </div>

    </aside>


    {showLogoutPopup && (
    <div className="logout-overlay">

        <div className="logout-popup">

            <div className="logout-icon">
                <i className="bi bi-box-arrow-right"></i>
            </div>

            <h3>Logout?</h3>

            <p>
                Are you sure you want to logout from ConnectHub?
            </p>

            <div className="logout-actions">

                <button
                    className="cancel-logout"
                    onClick={closeLogoutPopup}
                >
                    Cancel
                </button>

                <button
                    className="confirm-logout"
                    onClick={Logout}
                >
                    Logout
                </button>

            </div>

        </div>

    </div>
)}

</>
  );
}

export default Sidenav;
