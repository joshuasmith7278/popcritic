import React,{useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import { useNavigate} from 'react-router-dom';
import GitHubIcon from '@mui/icons-material/GitHub';
import {GoogleLogin, GoogleOAuthProvider} from '@react-oauth/google';
import Users from '../pages/user.js';


const container = {
    display:'flex',
    flexDirection:'row',
    width:'100%',
    backgroundColor:'#202020',
    height:60,
    padding: 10
   
}

const headerContainer = {
    display:'flex',
    flex:4
  
    
}

const headerTitle = {
    color:'white',
    alignSelf:'center',
    paddingBottom:5
}

const myLogoImg = {
    marginRight: 20,
    borderRadius:'50%',
    border: '2px solid white'


}

const searchContainer = {
    display:'flex',
    alignItems:'center',
    
    flex:1,
    

}

const input = {
    backgroundColor:'#383838',
    borderRadius:'15px'
    
}

const ghLink = {
    padding:15
}





function DisplaySearchBar(){

    const [shouldRedirect, setShouldRedirect] = useState(false);
        const navigate = useNavigate();
        useEffect( () => {
            if(shouldRedirect === true) navigate("/");
        }, [shouldRedirect] );

    

    const responseMessage = (response) =>{
        Users(response);
        navigate("/");
        console.log(response);
    }

    const errorMessage = (error) =>{
        console.log(error);
    }

    return(

        <div style={container} >

            <div style={headerContainer}>
                <img src='./header.png' style={myLogoImg} onClick={() => setShouldRedirect(true)}/>
                <h1 style={headerTitle}>PopCritic</h1>
            </div>


            <div style={searchContainer}>

                <a href='https://github.com/joshuasmith7278' style={ghLink}>
                    <GitHubIcon fontSize='large'/>
                </a>
                
                <input type="text" placeholder='Search Movies' style={input}/>
                <GoogleLogin  onError={errorMessage} onSuccess={responseMessage}/>

            </div>

        </div>
        
    );
}

export default DisplaySearchBar;