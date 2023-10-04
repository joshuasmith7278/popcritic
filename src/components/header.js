import React,{useState, useEffect} from 'react';
import ReactDOM, { render } from 'react-dom';
import { redirect, useNavigate, useLocation} from 'react-router-dom';
import GitHubIcon from '@mui/icons-material/GitHub';
import { getMovies } from './axios';
import jwt_decode from "jwt-decode"


const google = window.google;


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
    borderRadius:'15px',
    fontSize:15,
    color:'white',
    height:25
    
}

const ghLink = {
    padding:15
}

const userInfo = {
    fontSize:20,
    color:'white'
}

const userDisp = {
    display:'flex',
    alignItems:'center',
    margin:60
}

const userPic = {
    height:'70px',
    maxWidth:'75%',
    maxHeight:'75%',
    borderRadius:12,
    margin:5
}

const signOutBttn = {
    width:130,
    height:30,
    borderRadius:8,
    margin:10,
    marginRight:10
}





let focusStatus = false;

const DisplaySearchBar = () => {
    console.log("Header Component Renders")

    const navigate = useNavigate();

    const [user, setUser] = useState({});

    function handleCallbackResponse(response){
      console.log("Encoded JWT Token :" + response.credential)
      let userObj = jwt_decode(response.credential)
      setUser(userObj)
      document.getElementById('signInDiv').hidden = true;
  
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
        }
      )
  
    }, [])


    console.log(user)

    



    //HANDLES HOME ICON INPUT
    const [shouldRedirect, setShouldRedirect] = useState(false); 
    useEffect( () => {
        if(shouldRedirect === true) {
            navigate("/");
            setShouldRedirect(false);
            focusStatus = false;
            
        }
    }, [shouldRedirect] );



    const [searchRedirect, setSearchRedirect] = useState(false);
    useEffect(()=>{
        if(searchRedirect === true){
            navigate("/search")
            setSearchRedirect(false)
            focusStatus = true;
            document.getElementById('searchBox').value = "";
            

        }
    }, [searchRedirect]


    )


    const goToHandleSearch = async (event) =>{
        const res = await getMovies().then(json=> {return json});

        const resultsArray = res.filter(movie => movie.TITLE.includes(event.target.value))
        
        console.log(resultsArray)

        navigate('/search', {state : {query: resultsArray, value: event.target.value}})
        

        //document.getElementById("searchResList").innerHTML = <ListPage searchResults={resultsArray} />
        
    }


    //const logout = loggedIn ? <Logout setLoggedIn={setLoggedIn}/> : <Login setLoggedIn={setLoggedIn}/>

    return(

        <div style={container} >

            <div style={headerContainer}>
                <img src='./header.png' style={myLogoImg} onClick={() => setShouldRedirect(true)}/>
                <h1 style={headerTitle}>PopCritic</h1>
            </div>

           


            <div style={searchContainer}>


                { user &&
                    <div style={userDisp}>
                        <img style={userPic} src={user.picture}></img>
                        <h3 style={userInfo}>{user.given_name}</h3>    
                    </div>
                }


                <a href='https://github.com/joshuasmith7278' style={ghLink}>
                    <GitHubIcon fontSize='large'/>
                </a>
                
            
                <input autoFocus={focusStatus} type="text" placeholder='Search Movies' style={input} id='searchBox' onClick={()=> setSearchRedirect(true)} onChange={goToHandleSearch}/>

                
                <div id='signInDiv'>

                </div>
                {   Object.keys(user).length != 0 &&
                    <button style={signOutBttn} onClick={(e)=>handleSignOut(e)}>Sign Out</button>

                }


                
                

            </div>

        </div>
        
        
    );


}

export default DisplaySearchBar;