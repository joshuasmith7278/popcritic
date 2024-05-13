import React, {useState, useEffect} from 'react';
import { useLocation } from 'react-router-dom';
import '../css/Login.css'

const Login = () =>{
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');

    const location = useLocation()

    const onButtonClick = () =>{
        setEmailError('')
        setPasswordError('')

        if('' === email){
            setEmailError("Please enter your email.")
            return
        }

        
        if(!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)){
            setEmailError("Please enter a valid email.")
            return
        }

        if('' === password){
            setPasswordError("Please enter your email.")
            return
        }

        if(password.length < 7){
            setPasswordError("Your password must be 8 characters or longer")
            return
        }




        console.log(email)
        console.log(password)

        //EXPRESSAPI call to backend to check User Auth
       




    }



    return(
        <div className='mainContainer'>
            <div className='titleContainer'>
                <div>Login</div>
            </div>
            <br />
            <div className='inputContainer'>
                <input 
                value={email}
                placeholder='Enter your email here'
                onChange={(ev)=>{setEmail(ev.target.value)}}
                className='inputBox'
                />
                <label className='errorLabel'>{emailError}</label>
            </div>
            <br />
            <div className='inputContainer'>
                <input 
                value={password}
                placeholder='Enter your password here'
                onChange={(ev)=>{setPassword(ev.target.value)}}
                className='inputBox'
                />
                <label className='errorLabel'>{passwordError}</label>
            </div>
            <br />
            <div>
                <input className='inputButton' type='button' onClick={onButtonClick} value={'Log In'}/>
            </div>
        </div>
        

    )


}

export default Login