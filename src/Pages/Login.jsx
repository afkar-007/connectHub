import { useState,useEffect } from "react"
import { Link, useNavigate } from "react-router-dom"
import '../Styles/Login.css'

function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [showPassword, setShowPassword] = useState(false)
    const [error,setError]=useState("")
    const emailPattern = /^[^\s@]+@gmail\.com$/

    const navigate = useNavigate()




       useEffect(()=>{
     
            const gateway = localStorage.getItem("isLoggedIn")
    
            if(gateway==="true"){
                navigate('/home')
            }
    
        },[])

    async function handleLogin(e) {
        
    
        e.preventDefault()

           if(email.trim()===""){
    return setError("E-mail cannot be empty")
  }

  
  if(email.length<3){
    return setError("E-mail name atlest have 3 characters")
  }

  if(!email.includes("@gmail.com")){
    return setError("E-mail doesn't have @gmail.com ")
  }
  if(!emailPattern.test(email.trim())){
    return setError("Enter a valid Gmail address")
  }

    if(email.length<13){
    return setError("E-mail name atlest have 3 characters")
  }

  if(password.trim()===""){
    return setError("Password cannot be empty")
  }
  if(password.length<4){
    return setError("Password have atleast 4 characters")

  }

  const user ={
    email:email,
    password:password
  }





  const response = await fetch("http://localhost:3000/users/Login",{
    method:"POST",
    headers:{
          'Content-Type': 'application/json'
    },
    body:JSON.stringify(user)
  })

  const data = await response.json()
  
  if(!response.ok){
   
   return setError(data.message)
   
  }


   

  if(response.ok){
    localStorage.setItem("isLoggedIn",true);
    localStorage.setItem("userId",data.id)
    setError("")
    
    
    alert(data.message)
    navigate('/home')
    
    
   
    
   
  }







        

       
    }

    return (
        <div className="login-page">

            <div className="login-card">

                {/* LEFT SIDE */}
                <div className="login-brand">

                    <div className="brand-logo">
                        C<span>H</span>
                    </div>

                    <h1>ConnectHub</h1>

                    <p>
                        Connect. Chat. Share.
                    </p>

                    <div className="brand-line"></div>

                    <small>
                        Your people. Your world. One place.
                    </small>

                </div>

                {/* RIGHT SIDE */}
                <div className="login-form-container">

                    <div className="login-heading">
                        <span>WELCOME BACK</span>
                        <h2>Login</h2>
                        <p>
                            Sign in to continue to ConnectHub
                        </p>
                    </div>

                    <form onSubmit={handleLogin}>

                        {/* EMAIL */}
                        <div className="input-group">

                            <label>Email</label>

                            <div className="input-box">

                                <i className="bi bi-envelope"></i>

                                <input
                                    type="email"
                                    className="inputLogin"
                                    
                                    placeholder="Enter your email"
                                    value={email}
                                    onChange={(e) =>
                                        setEmail(e.target.value)
                                    }
                                    
                                />

                            </div>

                        </div>

                        {/* PASSWORD */}
                        <div className="input-group">

                            <label>Password</label>

                            <div className="input-box">

                                <i className="bi bi-lock"></i>

                                <input
                                className="inputLogin"
                                    type={
                                        showPassword
                                            ? "text"
                                            : "password"
                                    }
                                    placeholder="Enter your password"
                                    value={password}
                                    onChange={(e) =>
                                        setPassword(e.target.value)
                                    }
                                    
                                />

                                <button
                                    type="button"
                                    className="password-button"
                                    onClick={() =>
                                        setShowPassword(!showPassword)
                                    }
                                >
                                    <i
                                        className={
                                            showPassword
                                                ? "bi bi-eye-slash"
                                                : "bi bi-eye"
                                        }
                                    ></i>
                                </button>
 
                            </div>

                        </div>

                        {/* OPTIONS */}
                        <div className="login-options">

                            <label className="remember">
                                <input type="checkbox" />
                                <span>Remember me</span>
                            </label>

                          

                        </div>
                        <p className="loginError">{error}</p>

                        {/* LOGIN BUTTON */}
                        <button
                            type="submit"
                            className="login-button"
                        >
                            <span>LOGIN</span>
                            <i className="bi bi-arrow-right"></i>
                        </button>

                    </form>

                    {/* REGISTER */}
                    <div className="register-text">
                        Don't have an account?

                        <Link to="/register">
                            Create account
                        </Link>
                    </div>

                </div>

            </div>

        </div>
    )
}

export default Login