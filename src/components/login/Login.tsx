import React, { useState} from 'react'
import './Login.css'

const Login = () => {

  const [loginName, setLoginName] = useState('');
  const [loginPassword, setLoginPassword] = useState('')
  const submitLoginHandler = (e:any) => { 
    e.preventDefault();
    alert(`LoggedIn Successfully  ${loginName} 😀`)
    setLoginName('')
    setLoginPassword('')
    
  }
  return (
    <div className='login-wrapper'>
    <div className='loginContainer'>
        <form
          className='login-form'
          onSubmit={submitLoginHandler}>
          <h1>Login Form</h1>
          <input onChange={(e) => setLoginName(e.target.value)}
            value={ loginName}
            type='text' placeholder='Enter UserName/Email..' />          
          <input type='password'
            onChange={(e) => setLoginPassword(e.target.value)}
            value={ loginPassword}autoComplete='off' placeholder='Enter Password..' />
       
        <button className ="loginButton" type='submit'>LogIn</button>
      </form>
      
      </div>
      </div>
  )
}

export default Login