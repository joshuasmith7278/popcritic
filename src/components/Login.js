import {GoogleLogin, GoogleOAuthProvider} from '@react-oauth/google';
import { useNavigate } from 'react-router-dom';
import jwt_decode from "jwt-decode";
import { useState } from 'react';

const cliendID = "582624851900-lchrvtv7tn3f1mo33eai2ml765svdsao.apps.googleusercontent.com";




const Login = ({setLoggedIn}) =>{
    const navigate = useNavigate();
    const [user, setUser] = useState();

    const onSuccess = (response) =>{
        navigate("/");
        const userObj = jwt_decode(response.credential);
        setUser(userObj);
        setLoggedIn(true)
        document.getElementById("loginStatus").innerHTML = userObj['email']
        document.getElementById("loginButton").hidden = true;
        console.log(userObj);
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
