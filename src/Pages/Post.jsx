import React, { useState } from "react";
import "../Styles/Post.css";
import {useNavigate} from "react-router-dom"
import Sidenav from "../Components/Sidenav";
import { useEffect } from "react";

function Post() {
    const navigate = useNavigate()

    const [image, setImage] = useState(null);
    const [caption, setCaption] = useState("");
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");
  

    useEffect(()=>{
        
      const checkGateWay=localStorage.getItem("isLoggedIn")
    if(checkGateWay !=="true"){
      navigate('/')}
      
    
        

    },[])

    
    

    const handlePost = async (e) => {
        e.preventDefault();

        if (!image) {
            setMessage("Please select an image");
            return;
        }

        try {
            setLoading(true);
            setMessage("");

            const formData = new FormData();

            formData.append("image", image);
            formData.append("caption", caption);
            formData.append("postId", userId);

            const response = await fetch(
                "https://connecthub-backend-2.onrender.com/post/post",
                {
                    method: "POST",
                    

                    body: formData
                }
            );

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message);
                return
            }

            setMessage(data.message);

            // Clear form
            setImage(null)
            setCaption("");
            
        

             navigate("/home");

        } catch (err) {

            setMessage(err.message);

        } finally {

            setLoading(false);
            

        }
    };

    return (
        <>
        <Sidenav/>
        <div className="post-page">

            <div className="post-card">

                <div className="post-header">
                    <i className="bi bi-plus-circle"></i>

                    <div>
                        <h2>Create Post</h2>
                        <p>Share something with your people</p>
                    </div>
                </div>


                <form onSubmit={handlePost}>

                    {/* Image */}
                    <div className="image-upload">

                        <label htmlFor="postImage">

                            <i className="bi bi-image"></i>

                            <span>
                                {image
                                    ? image.name
                                    : "Choose an image"}
                            </span>

                        </label>

                        <input
                            id="postImage"
                            type="file"
                            accept="image/*"
                            onChange={(e) => {
                                setImage(e.target.files[0]);
                            }}
                        />

                    </div>


                    {/* Caption */}
                    <div className="caption-box">

                        <textarea
                            placeholder="Write something..."
                            value={caption}
                            onChange={(e) => {
                                setCaption(e.target.value);
                            }}
                        ></textarea>

                    </div>


                    {/* Message */}
                    {message && (
                        <p className="post-message">
                            {message}
                        </p>
                    )}


                    {/* Button */}
                    <button
                        type="submit"
                        disabled={loading}
                    >

                        {loading ? (
                            <>
                                <span className="spinner-border spinner-border-sm me-2"></span>
                                Uploading...
                            </>
                        ) : (
                            <>
                                <i className="bi bi-send-fill"></i>
                                Post
                            </>
                        )}

                    </button>

                </form>

            </div>

        </div>
        </>
    );
}

export default Post;