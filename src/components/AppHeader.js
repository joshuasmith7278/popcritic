import React,{useState, useEffect} from 'react';
import ReactDOM, { render } from 'react-dom';
import { redirect, useNavigate, useLocation} from 'react-router-dom';
import GitHubIcon from '@mui/icons-material/GitHub';
import { getMovies } from './ExpressAPI';







const container = {
    display:'flex',
    flexDirection:'row',
    width:'100%',
    backgroundColor:'#202020',
    height:60,
    padding: 10
   
}

const headerContainer = {
    marginLeft:"15px",
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
    fontSize:17,
    color:'white'
}

const userDisp = {
    display:'flex',
    flexDirection:"row",
    justifyContent:"center",
    hidden:true,
    marginRight:"20px",
    paddingLeft:"8px"
}

const userPic = {
    height:"40px",
    paddingLeft:"8px"
}

const signOutBttn = {
    width:130,
    height:30,
    borderRadius:8,
    margin:10,
    marginRight:10
}








let focusStatus = false;

const DisplaySearchBar = (user) => {
    console.log("Header Component Renders")
    const [username, setUsername] = useState()

    const navigate = useNavigate();

    useEffect(()=>{
        document.getElementById('userDisp').hidden = true;
    }, [])
   
    console.log(user.user.length)
    useEffect(()=>{
        if(user.user.length === 1){
           setUsername(user.user[0].NAME)
           
        }

    }, [user])



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
        navigate('/search', {state : {searchQuery: event.target.value}})
    }

    const userIcon = () => {
        navigate('/user', {state : {user: user}})
    }

    console.log(user)

    return(

        <div style={container} >

            <div style={headerContainer}>
                <img src='./header.png' style={myLogoImg} onClick={() => setShouldRedirect(true)}/>
                <h1 style={headerTitle}>PopCritic</h1>
            </div>

            <div id='userDisp' style={userDisp} onClick={userIcon}>
                <img style={userPic} src='./pengy.png'/>
                <h3 style={userInfo} id='userName'>{username}</h3>    
            </div>

            <div style={searchContainer}>
                <a href='https://github.com/joshuasmith7278' style={ghLink}>
                    <GitHubIcon fontSize='large'/>
                </a>
                <input autoFocus={focusStatus} type="text" placeholder='Search Movies' style={input} id='searchBox' onClick={()=> setSearchRedirect(true)} onChange={goToHandleSearch}/>

                <div id='signInDiv'>

                </div>

                <div id='signOutDiv'>

                </div>

            </div>

        </div>
        
        
    );


}

export default DisplaySearchBar;