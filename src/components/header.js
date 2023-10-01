import React,{useState, useEffect} from 'react';
import ReactDOM, { render } from 'react-dom';
import { redirect, useNavigate, useLocation} from 'react-router-dom';
import GitHubIcon from '@mui/icons-material/GitHub';
import ListPage from './ListPage'
import Login from './Login';
import Search from '../pages/search';
import { getMovies } from './axios';







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

const DisplaySearchBar = () => {
    console.log("Header Component Renders")

    const navigate = useNavigate();

    let location = useLocation();

    const [loggedIn, setLoggedIn] = useState(false);



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
        

        //document.getElementById("searchResList").innerHTML = <ListPage searchResults={resultsArray} />;

       
      

        

        
        
    }

    return(

        <div style={container} >

            <div style={headerContainer}>
                <img src='./header.png' style={myLogoImg} onClick={() => setShouldRedirect(true)}/>
                <h1 style={headerTitle}>PopCritic</h1>
            </div>

            <div id="loginStatus">

            </div>


            <div style={searchContainer}>

                <a href='https://github.com/joshuasmith7278' style={ghLink}>
                    <GitHubIcon fontSize='large'/>
                </a>
                
            
                <input autoFocus={focusStatus} type="text" placeholder='Search Movies' style={input} id='searchBox' onClick={()=> setSearchRedirect(true)} onChange={goToHandleSearch}/>

                <Login setLoggedIn={setLoggedIn}/>

                

            </div>

        </div>
        
        
    );


}

export default DisplaySearchBar;