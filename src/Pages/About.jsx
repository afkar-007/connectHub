import React from "react"
import Sidenav from "../Components/Sidenav"
import "../Styles/About.css"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

function About() {
    const Navigate =useNavigate()

useEffect(()=>{
 const checkGateWay=localStorage.getItem("isLoggedIn")
    if(checkGateWay !=="true"){
      Navigate('/')
      
    }
},[])
    
    return (
        <div className="connecthub-layout">

            {/* SIDEBAR */}
            <Sidenav />

            {/* MAIN CONTENT */}
            <main className="about-main">

                <section className="about-hero">

                    <div className="about-content">

                        <span className="about-badge">
                            <i className="bi bi-stars"></i>
                            ABOUT CONNECTHUB
                        </span>

                        <h1>
                            Connect.
                            <span> like,comment.</span>
                        </h1>

                        <p>
                            ConnectHub is a modern social platform designed to
                            bring people together, share moments and stay
                            connected with the people who matter.
                        </p>

                    </div>

                    <div className="about-logo">
                        <div className="logo-circle">
                            <i className="bi bi-people-fill"></i>
                        </div>
                    </div>

                </section>


                {/* FEATURES */}

                <section className="about-features">

                    <div className="about-card">

                        <div className="about-icon">
                            <i className="bi bi-person-plus-fill"></i>
                        </div>

                        <h3>Connect</h3>

                        <p>
                            Find people, discover new connections and build
                            your own social circle.
                        </p>

                    </div>


                    <div className="about-card">

                        <div className="about-icon">
                            <i className="bi bi-chat-dots-fill"></i>
                        </div>

                        <h3>Chat</h3>

                        <p>
                            Stay connected with your friends and have meaningful
                            conversations anytime.
                        </p>

                    </div>


                    <div className="about-card">

                        <div className="about-icon">
                            <i className="bi bi-image-fill"></i>
                        </div>

                        <h3>Share</h3>

                        <p>
                            Share your thoughts, photos and moments with your
                            community.
                        </p>

                    </div>

                </section>


                {/* MISSION */}

                <section className="about-mission">

                    <div className="mission-icon">
                        <i className="bi bi-heart-fill"></i>
                    </div>

                    <div>
                        <h2>Our Mission</h2>

                        <p>
                            ConnectHub aims to create a simple and enjoyable
                            place where people can connect, communicate and
                            share their everyday moments.
                        </p>
                    </div>

                </section>


                {/* FOOTER */}

                <footer className="about-footer">
                    <p>
                        © 2026 ConnectHub. Connect with your world.
                    </p>
                </footer>

            </main>

        </div>
    )
}

export default About