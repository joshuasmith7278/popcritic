import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import DisplaySearchBar from './components/header';
import PageRoutes from './routes';
import jwt_decode from "jwt-decode"




function App() {
  const google = window.google;

  const [user, setUser] = useState({});

    function handleCallbackResponse(response){
      console.log("Encoded JWT Token :" + response.credential)
      let userObj = jwt_decode(response.credential)
      setUser(userObj)
      document.getElementById('signInDiv').hidden = true;
      document.getElementById('userDisp').hidden = false;
      document.getElementById('userPicture').src = userObj.picture;
      document.getElementById('userName').innerHTML = userObj.given_name;

  
    }

    function handleSignOut(event){
   
      document.getElementById('signInDiv').hidden = false;
  }

  useEffect(()=>{
    google.accounts.id.initialize({
      client_id: "582624851900-lchrvtv7tn3f1mo33eai2ml765svdsao.apps.googleusercontent.com",
      callback: handleCallbackResponse
  })


  google.accounts.id.renderButton(
    document.getElementById('signInDiv'), {
    theme:"outline", size:"large"
})

  }, [])

  

  console.log("App Renders");
  return (
    <div>
      <DisplaySearchBar /> 
      <PageRoutes />
      

    </div>
  );
}

export default App;
