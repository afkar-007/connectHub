
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";


import '../Styles/Profile.css'
import Sidenav from "../Components/Sidenav";
import { useNavigate } from "react-router-dom";


function Profile() {
  const Navigate =useNavigate()



  useEffect(()=>{
    const checkGateWay=localStorage.getItem("isLoggedIn")
    if(checkGateWay !=="true"){
      Navigate('/')
      
    }

Profile()
PostFetch()
  },[])

  const [profileData,setProfileData]=useState(null)

  const [post,setPost]=useState([])
  

      async function PostFetch() {

        const id=localStorage.getItem("userId")
     
        const Response = await fetch(`https://connecthub-backend-2.onrender.com/post/ownPost/${id}`)
        const data = await Response.json()
        setPost(data.ownPosts)
       
        
      
    }


    if(!post){
        return (<p>fetching posts</p>)
    }




  const {id} = useParams()
  








async function deletePosts(id) {

  const response = await fetch(`https://connecthub-backend-2.onrender.com/post/delete/${id}`,{
    method:"DELETE",
      headers: {
    'Content-Type': 'application/json'}

  })
  const data = await response.json()

  if(response.ok){
    alert(data.message)
    PostFetch()
  }
  
  


}














  

 async function Profile() {

  const Response = await fetch(`https://connecthub-backend-2.onrender.com/users/profile/${id}`)
  const data = await Response.json()
  
  setProfileData(data.profile)
  
 }

 if(!profileData){
  return(
    <div className="loadingdiv">
  <p className="loadingPara">loading</p>
  </div>
 )
 }

 






  return (
                    <>
    <div className="profile-page">

      {/* Sidebar */}
     <Sidenav/>

      {/* Main Content */}
      <main className="profile-content">

        {/* Profile Header */}
        <section className="profile-header">

          {/* Cover */}
          <div className="profile-cover">
          
          </div>

          {/* Profile Information */}
          <div className="profile-info">

           

            <div className="profile-details">

              <div className="profile-name-row">
                <div>
                  <h1>{profileData.name}</h1>
                  <p>{profileData.email}</p>
                </div>

             
              </div>
              <br />
         





              <p className="profile-bio">
                Building connections. Sharing moments.
                <br />
                Welcome to my ConnectHub.
              </p>

            </div>
          </div>


          {/* Statistics */}
        

        </section>


      </main>

    </div>

    <section className="my-posts">

                    <div className="posts-title">

                        <h2>
                            <i className="bi bi-grid-3x3-gap-fill"></i>
                            My Posts
                        </h2>

                    </div>


                    {post.length === 0 ? (

                        <div className="no-posts">

                            <i className="bi bi-camera"></i>

                            <h3>No Posts Yet</h3>

                            <p>
                                When you share a post, it will appear here.
                            </p>

                        </div>

                    ) : (

                        <div className="posts-grid">

                            {post.map((post) => (

                                <div
                                    className="profile-post"
                                    key={post._id}
                                >

                                    {post.image && (

                                        <img
                                            src={post.image}
                                            alt="Post"
                                            className="profPost"
                                        />
                                        

                                    )}

                                    <div className="post-overlay">

                                       

                                    </div>
                                        <button
                                                onClick={() => deletePosts(post._id)}
                                                className="delete-btn"
                                            >
                                                <i className="bi bi-trash"></i>
                                            </button>

                                </div>

                            ))}

                        </div>

                    )}

                </section>
</>
  );
}

export default Profile;
