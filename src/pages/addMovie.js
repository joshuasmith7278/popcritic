import React, {useState, useEffect} from 'react';

import '../css/AddMoviePage.css'



function AddMovie(){
    console.log("Add movie page renders")

    return(
        <div>
            <div className='pageContainer'>
                <h1 className='resultsTitle'>Add a movie to the Database</h1>

                <div id='addMovieForm'>
                    <h3 className='resultsTitle'>Movie</h3>
                    <form name='movieForm' className='movieFormStyle'>
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