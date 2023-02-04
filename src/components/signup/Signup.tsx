import React, { useState} from 'react'
import './SignUp.css'

const SignUp = () => {
const[signUpUserName,setSignupUserName]=useState('')
const[signUpEmail,setSignUpEmail]=useState('')
const[signUpMobile,setSignUpMobile]=useState('')
const[signUpPassword,setSignUpPassword]=useState('')

  const submitSignupHandler = (e:any) => { 
    e.preventDefault();
    alert(`Successfully Details Submitted for ${signUpUserName} 😀`)
    setSignupUserName('')
    setSignUpEmail('')
    setSignUpMobile('')
    setSignUpPassword('')
    
  }
  return (
    <div className='signup-wrapper'>
    <div className='signupContainer'>     
        <form
          className='signup-form'
          onSubmit={submitSignupHandler}>
          <h1 className='signup-heading'>SignUp Form</h1>
          <input onChange={(e) => setSignupUserName(e.target.value)}
            value={ signUpUserName}
            type='text' placeholder='Enter UserName..' /> 
          <input onChange={(e) => setSignUpEmail(e.target.value)}
            value={ signUpEmail}
            type='text' placeholder='Enter Email..' />  
          <input onChange={(e) => setSignUpMobile(e.target.value)}
            value={ signUpMobile}
            type='text' placeholder='Enter Mobile No..' />  
          <input type='password'
            onChange={(e) => setSignUpPassword(e.target.value)}
            value={ signUpPassword}autoComplete='off' placeholder='Enter Password..' />
       
        <button className ="signupButton" type='submit'>SignUp</button>
      </form>
     
     </div>
    </div>
  )
}

export default SignUp

