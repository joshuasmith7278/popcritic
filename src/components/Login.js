import {GoogleLogin, GoogleOAuthProvider} from '@react-oauth/google';
import { useNavigate } from 'react-router-dom';
import jwt_decode from "jwt-decode";
import { useState } from 'react';
import { getUserByEmail } from './axios';

const cliendID = "582624851900-lchrvtv7tn3f1mo33eai2ml765svdsao.apps.googleusercontent.com";




const Login = ({setLoggedIn}) =>{
    const navigate = useNavigate();
    const [user, setUser] = useState();


    const checkForUser = async (email) =>{
        console.log(email)
        let final = email.trim();
        getUserByEmail(final).then(json=> {
            document.getElementById("loginStatus").innerHTML = (json[0].NAME)
        }
        )
    }

    const onSuccess = (response) =>{
        navigate("/");
        const userObj = jwt_decode(response.credential);
        setUser(userObj);
        setLoggedIn(true)
        
        document.getElementById("loginButton").hidden = true;
        checkForUser(userObj['email'])
        //console.log(userObj);
    }
    
    const onFailure = (error) =>{
        console.log("Login Failed " + error);
    }
    
    


    return(
        <div id="loginButton">
            <GoogleLogin
                clientId={cliendID}
                buttonText="LOG IN"
                onSuccess={onSuccess}
                onFailure={onFailure}
                cookiePolicy={'single_host_origin'}
                isSignedIn={true}

            />

        

        </div>
    )
}

export default Login;
