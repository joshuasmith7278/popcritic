import React, {useEffect, useState} from 'react';
import ReactDOM from 'react-dom';
import DisplaySearchBar from '../components/header';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import {getMovies} from '../components/axios'
import ListPage from '../components/ListPage';

const searchPageCont = {
    padding:"10px"
}


function Search() {
    console.log("Search Page Renders")

    const [searchValue, setSearchValue] = useState([""])
    const [searchResults, setSearchResults] = useState([""])
    const location = useLocation();
      
      useEffect(()=>{
        getMovies().then(json=>{
           
            setSearchResults(json)
        })
        setSearchValue(" ")

        
      }, [])

      useEffect(()=>{
        if(location.state != null){
            setSearchResults(location.state.query);
            setSearchValue(location.state.value);

        }
       

      }, [location.state]);


    
        //
   


    


    const resultsTitle = {
        color:"gold",
        paddingLeft :"10px"
    }


   
  
    console.log(searchResults)

    
    return(
        <div >
            
            <div style={searchPageCont}>
                <h1 style={resultsTitle}>Search Results For {searchValue}</h1>

                <div id='searchResList'>
                   <ListPage searchResults={searchResults}/>
                   
                    



                </div>


            </div>
            

           
            

            
        
        </div>
    );
    
    
    

}

export default Search;