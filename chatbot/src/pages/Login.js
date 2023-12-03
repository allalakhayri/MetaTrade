import React from 'react'
import './login.css'

const Login = () => {
  return (
    <div className='container'>
      <div className='form'>
      <form>
        <a href="#" className='Log'>Rgister</a>
        
      <label>
       <input type="text" name="FirstName" placeholder='nom'/>
       <input type="text" name="SecondName" placeholder='prenom'/>
       <input type="email" name="email" placeholder='Email'/>
       <input type="password" name="password" placeholder='password'/>

     </label>
     <label>
      
      <input type="password" name="pass" placeholder='Mot de passe'/>
     </label>
     <input type="submit" value="Submit" /><br/>
     <span><a href="#">Forgot Password?</a></span>
   </form>
    </div>
    </div>
  )
}

export default Login
