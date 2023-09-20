import React,{useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import { redirect, useNavigate} from 'react-router-dom';
import GitHubIcon from '@mui/icons-material/GitHub';
import {GoogleLogin, GoogleOAuthProvider} from '@react-oauth/google';
import ListPage from './ListPage'





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





let focusStatus = false;
console.log("Header Component Renders")
const DisplaySearchBar = ({movies, setSearchResults}) => {

    const navigate = useNavigate();

    //HANDLES SEARCHBAR INPUT
    /*
    const [search, setSearch] = useState("");

    useEffect(
        ()=>{
            if(search.length != 0) {
                console.log("Handle Search Called")
                HandleSearch(search)
                
            };
        }, [search.length]
    )
    */
    const [focus, setFocus] = useState("");


    //HANDLES HOME ICON INPUT
    const [shouldRedirect, setShouldRedirect] = useState(false); 
    useEffect( () => {
        if(shouldRedirect === true) {
            navigate("/");
            setShouldRedirect(false);
            focusStatus = false
        }
    }, [shouldRedirect] );



    const [searchRedirect, setSearchRedirect] = useState(false);
    useEffect(()=>{
        if(searchRedirect === true){
            navigate("/search")
            focusStatus = true;
            setSearchRedirect(false)
            

        }
    }, [searchRedirect]


    )

    

    const responseMessage = (response) =>{
        navigate("/");
        console.log(response);
    }

    const errorMessage = (error) =>{
        console.log(error);
    }


    const goToHandleSearch = (event) =>{
        if(!event.target.value) return setSearchResults(movies)
        
        const resultsArray = movies.filter(movie => movie.TITLE.includes(event.target.value))


        setSearchResults(resultsArray)
        
    }

    

    /*
    RETURNS
    
    Home icon (redirects if clicked)
    Title

    Github icon (redirects to my github if clicked)
    search input box (on change, search for movie call)
    Google OAuth2 


    */
    console.log("Auto focus :")
    console.log(focusStatus)
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
                
            
                <input autoFocus={focusStatus} type="text" placeholder='Search Movies' style={input} id='searchBox' onClick={()=> setSearchRedirect(true)} onChange={goToHandleSearch}/>

                <GoogleLogin  onError={errorMessage} onSuccess={responseMessage}/>

            </div>

        </div>
        
        
    );


}

export default DisplaySearchBar;