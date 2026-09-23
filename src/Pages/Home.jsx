import React, { useEffect } from "react";
import "../Styles/Home.css";
import Sidenav from "../Components/Sidenav";
import { useState } from "react";
import { useNavigate } from "react-router-dom";



function Home() {
    const Navigate =useNavigate()

    const [post,setPost]=useState([])
    const [like,setLike]=useState(false)
    
    useEffect(()=>{
      const checkGateWay=localStorage.getItem("isLoggedIn")
    if(checkGateWay !=="true"){
      Navigate('/')}
      
    
        PostFetch()

    },[])

    async function PostFetch() {
     
        const Response = await fetch("https://connecthub-backend-2.onrender.com/post/fetchpost")
        const data = await Response.json()
        setPost(data.posts)
        
    
    }

    if(!post){
        return (<p>fetching posts</p>)
    }








    return (
        <div className="connecthub-home">

            <div className="connecthub-layout">

                {/* ================= SIDEBAR ================= */}
                <Sidenav />

                {/* ================= MAIN ================= */}
                <main className="connect-main">

                    {/* ================= HEADER ================= */}
                    <header className="connect-header">

                        <div>
                            <span className="connect-small-title">
                                CONNECTHUB
                            </span>

                            <h1>
                                Your Feed
                            </h1>
                        </div>

                    </header>


                    {/* ================= POST SECTION ================= */}
                    <section className="posts-section">


                        
                  
                        
                        {post.map((sends) =>
                        <article key={sends._id} className="post-card">

                            {/* POST HEADER */}
                            <div className="post-header">

                                <div className="post-user">

                                    <div className="post-avatar">
                                        {sends.postId.name.charAt(0).toUpperCase()}
                                    </div>
                                
                                    <div>
                                        <h3>
                                            {sends.postId.name}
                                        </h3>

                                        <span>
                                           {sends.createdAt}
                                        </span>
                                    </div>

                                </div>

                                

                            </div>


                            {/* POST IMAGE */}
                            <div className="post-image">

                                <img
                                    src={sends.image}
                                    alt="Post"
                                    onDoubleClick={()=>setLike(true)}
                                />

                            </div>


                            {/* POST ACTIONS */}
                            <div className="post-actions">

                                <div className="post-left-actions">

                                    

                                  

                                </div>

                             

                            </div>


                            {/* LIKES */}
                            <div className="post-likes">
                                
                            </div>


                           
                            {/* CAPTION */}
                            { sends.caption &&
                            <div className="post-caption">
                                

                                <strong>
                                    {sends.postId.name}
                                </strong>

                                <span>
                                    {" "}{sends.caption}
                                </span>

                            </div>
}

                           
                       

                        </article>)}

                    </section>

                </main>

            </div>

        </div>
    );
}

export default Home;