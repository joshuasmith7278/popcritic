import React, {useEffect, useState} from 'react';
import { useLocation } from 'react-router-dom';
import {searchTMDB} from '../components/ExpressAPI'
import ListPage from '../components/SearchComponents/SearchResults';

const searchPageCont = {
    padding:"10px"
}


function Search() {
    console.log("Search Page Renders")

    const [searchQuery, setSearchQuery] = useState([""])
    const [searchResults, setSearchResults] = useState([""])
    const location = useLocation();
      

    //Get movie data from database through AXIOS API


    //Dont know what this does???????????
  
    useEffect(()=>{
    if(location.state != null){
        setSearchQuery(location.state.searchQuery);
    }
    
    }, [location.state]);



    useEffect(()=>{
        console.log(searchQuery.length)
        if(searchQuery.length > 1){
            console.log("Searching for ----")
            console.log(searchQuery)
            searchTMDB(searchQuery).then(json => setSearchResults(json))


        }

    },[searchQuery])

    


    

    const resultsTitle = {
        color:"gold",
        paddingLeft :"10px"
    }

    console.log("Search Results -----")
    console.log(searchResults)

    
    return(
        <div >
            
            <div style={searchPageCont}>
                <h1 style={resultsTitle}>Search Results For {searchQuery}</h1>

                <div id='searchResList'>
                   <ListPage searchResults={searchResults}/>
                   
                    



                </div>


            </div>
            

           
            

            
        
        </div>
    );
    
    
    

}

export default Search;