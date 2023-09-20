import React, {useEffect, useState} from 'react';
import ReactDOM from 'react-dom';
import DisplaySearchBar from '../components/header';
import axios from 'axios';

import {getMovies} from '../components/axios'
import ListPage from '../components/ListPage';

const searchPageCont = {
    padding:"10px"
}


function Search() {

    const [movies, setMovies] = useState([])
    const [searchResults, setSearchResults] = useState([])
      
      useEffect(()=>{
        getMovies().then(json=>{
            setMovies(json)
            return json
        }).then(json => {
            setSearchResults(json)
        })
        
        
      }, [])

    console.log("Search Page Renders")
    console.log(searchResults)

    const resultsTitle = {
        color:"gold",
        paddingLeft :"10px"
    }


    
    return(
        <div >
            <DisplaySearchBar movies={movies} setSearchResults={setSearchResults}/>
            
            <div style={searchPageCont}>
                <h1 style={resultsTitle}>Search Results</h1>
                <ListPage searchResults={searchResults}/>

            </div>
            

           
            

            
        
        </div>
    );
    
    
    

}

export default Search;