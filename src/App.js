import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import DisplaySearchBar from './components/AppHeader';
import { postAuth } from './components/ExpressAPI';
import PageRoutes from './routes';
import jwt_decode from "jwt-decode"




function App() {
  const google = window.google;

  const [user, setUser] = useState({});

  function handleCallbackResponse(response){
    
    let userObj = jwt_decode(response.credential)

    postAuth(userObj.email).then(json=>setUser(json))
    document.getElementById('signInDiv').hidden = true;
    document.getElementById('userDisp').hidden = false
    google.accounts.id.initialize({
      callback: handleSignOut
    })


    google.accounts.id.renderButton(
      document.getElementById('signOutDiv'), {
      theme:"outline", size:"medium", text:"Sign Out"
    })
  
  }
  


  function handleSignOut(event){
    setUser({})
  
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
      <DisplaySearchBar user={user}/> 
      <PageRoutes user={user}/>
      

    </div>
  );
}

export default App;
