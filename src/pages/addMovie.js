import React, {useState, useEffect} from 'react';
import ReactDOM from 'react';
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import { Rating } from '@mui/material';
import { getMovies } from '../components/axios';
import DisplaySearchBar from '../components/header';
import ReviewList from '../components/HomeRevDisp';
import { getRevFromMID } from '../components/axios';
import { useLocation } from 'react-router-dom';
import PrevReviews from '../components/PrevReviews';



function AddMovie(){
    console.log("Add movie page renders")

    const pageContainer = {
        padding:"10px"
    }
    

    const resultsTitle = {
        color:"gold",
        paddingLeft :"10px"
    }

    return(
        <div>
            <div style={pageContainer}>
                <h1 style={resultsTitle}>Add a movie to the Database</h1>

                <div id='addMovieForm'>
                    <h3 style={resultsTitle}>Movie</h3>
                    <form name='movieForm' >
                        <input type="text" value="Title" name="name"/>
                        <input type="text" value="Release Date" name="name"/>
                        <textarea>Plot</textarea>
                        <button>Add Movie</button>
                    </form>

                </div>
            </div>
        </div>
    )
}

export default AddMovie;