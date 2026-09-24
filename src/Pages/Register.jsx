import React, { useState } from 'react'
import '../Styles/Register.css'
import {useNavigate,Link} from "react-router-dom"

function Register() {
  const navigate = useNavigate()

  const [name,setName]=useState("")
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
  const [confirmPass,setConfirmPassword]=useState("")
  const [error,setError]=useState("")
  const emailPattern = /^[^\s@]+@gmail\.com$/
   const [loading,setLoading]=useState(false)

    const [showPassword, setShowPassword] = useState(false)
    const [showConfirmPassword, setShowConfirmPassword] = useState(false)



 async function register(e) {

  e.preventDefault()
  try{

    setLoading(true)

  if(name.trim()===""){
    return setError("User name cannot be empty")
  }

  if(name.length<3){
    return setError("the username must be at least 3 characters")
  }
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

  if(confirmPass.trim()===""){
    return setError("confirm Password cannot be empty")
  }
  if(confirmPass.length<4){
    return setError("Confirm Password have at least 4 characters")
  }

  if(password !==confirmPass){
    return setError("Password do not match")
  }








  const newUser={
    name:name,
    email:email,
    password:confirmPass
  }

  const response = await fetch("https://connecthub-backend-2.onrender.com/users/Register",{
    method:"POST",
    headers:{'Content-Type': 'application/json'},
    body:JSON.stringify(newUser)
  })

  const data =await response.json()


   if(!response.ok){
    
    return setError(data.message)
  }




  if(response.ok){
    alert(data.message)
    navigate('/login')
  }

 


  setError("")
}catch(err){
  console.log(err);
  
}
finally{
  setLoading(false)
}





 }


  return (
    <>
     <div className="register-page">

      <div className="register-card">

        <div className="register-header">
          <h1>Create Account</h1>

          <p>
            Join ConnectHub and start connecting
          </p>
        </div>


        <div className="register-form">

          {/* Username */}
          <div className="input-group">
            <label>Username</label>

            <input
              type="text"
              placeholder="Enter your username"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>


          {/* Email */}
          <div className="input-group">
            <label>Email</label>

            <input
              type="email"
              placeholder="Enter your valid email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>


          {/* Password */}
          <div className="input-group">
            <label>Password</label>

            <input
              type={showPassword ? "text" : "password"}
              placeholder="Create password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          

              <button
              className='passEye'
                        type="button"
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
                






          {/* Confirm Password */}
          <div className="input-group">
            <label>Confirm Password</label>

            <input
                type={showConfirmPassword ? "text" : "password"}
              placeholder="Confirm your password"
              value={confirmPass}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            
                    <button
                    className='passEye'
                        type="button"
                        onClick={() =>
                            setShowConfirmPassword(
                                !showConfirmPassword
                            )
                        }
                    >
                        <i
                            className={
                                showConfirmPassword
                                    ? "bi bi-eye-slash"
                                    : "bi bi-eye"
                            }
                        ></i>
                    </button>

          </div>


          {/* Error */}
          {error && (
            <p className="register-error">
              {error}
            </p>
          )}


          <button
            className="register-button"
            onClick={(e)=>register(e)}
            disabled={loading}
          >
            {loading? "Registering..." :"Create Account"}
          </button>

        </div>


        <p className="login-text">
          Already have an account?
         <Link to={'/Login'}><span  > Log in</span></Link> 
        </p>

      </div>

    </div>








    
    
    
    </>
  )
}

export default Register