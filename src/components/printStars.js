import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarHalfIcon from '@mui/icons-material/StarHalf';

const starStyle = {
    color:"#DAA520"
}

const printStars = (rating) => {
    if(rating === "5"){
     return(
         <div>
             <StarIcon style={starStyle}/>
             <StarIcon style={starStyle}/>
             <StarIcon style={starStyle}/>
             <StarIcon style={starStyle}/>
             <StarIcon style={starStyle}/>
         </div>
     )
    }
    else if (rating === "4.5"){
     return(
         <div>
             <StarIcon style={starStyle}/>
             <StarIcon style={starStyle}/>
             <StarIcon style={starStyle}/>
             <StarIcon style={starStyle}/>
             <StarHalfIcon style={starStyle}/>            
         </div>
     )
    }
    else if (rating === "4"){
     return(
         <div>
             <StarIcon style={starStyle}/>
             <StarIcon style={starStyle}/>
             <StarIcon style={starStyle}/>
             <StarIcon style={starStyle}/>
             <StarBorderIcon style={starStyle}/>            
         </div>
     )
    }
    else if (rating === "3.5"){
     return(
         <div>
             <StarIcon style={starStyle}/>
             <StarIcon style={starStyle}/>
             <StarIcon style={starStyle}/>
             <StarHalfIcon style={starStyle}/>  
             <StarBorderIcon style={starStyle}/>        
         </div>
     )
    }
    else if (rating === "3"){
     return(
         <div>
             <StarIcon style={starStyle}/>
             <StarIcon style={starStyle}/>
             <StarIcon style={starStyle}/>
             <StarBorderIcon style={starStyle}/>
             <StarBorderIcon style={starStyle}/>
         </div>
     )
    }
    else if (rating === "2.5"){
     return(
         <div>
             <StarIcon style={starStyle}/>
             <StarIcon style={starStyle}/>
             <StarHalfIcon style={starStyle}/>  
             <StarBorderIcon style={starStyle}/>   
             <StarBorderIcon style={starStyle}/>        
         </div>
     )
    }
    else if (rating === "2"){
     return(
         <div>
             <StarIcon style={starStyle}/>
             <StarIcon style={starStyle}/>
             <StarBorderIcon style={starStyle}/>
             <StarBorderIcon style={starStyle}/>
             <StarBorderIcon style={starStyle}/>
         </div>
     )
    }
    else if (rating ==="1.5"){
     return(
         <div>
             <StarIcon style={starStyle}/>
             <StarHalfIcon style={starStyle}/> 
             <StarBorderIcon style={starStyle}/>   
             <StarBorderIcon style={starStyle}/>   
             <StarBorderIcon style={starStyle}/>        
         </div>
     )
    }
    else if (rating === "1"){
     return(
         <div>
             <StarIcon style={starStyle}/>
             <StarBorderIcon style={starStyle}/>
             <StarBorderIcon style={starStyle}/>
             <StarBorderIcon style={starStyle}/>
             <StarBorderIcon style={starStyle}/>
         </div>
     )
    }
    else if (rating === "0.5"){
     return(
         <div>
             <StarHalfIcon style={starStyle}/> 
             <StarBorderIcon style={starStyle}/>  
             <StarBorderIcon style={starStyle}/>   
             <StarBorderIcon style={starStyle}/>   
             <StarBorderIcon style={starStyle}/>        
         </div>
     )
    }
    else {
     return (
         <div>
             <StarBorderIcon style={starStyle}/>
             <StarBorderIcon style={starStyle}/>
             <StarBorderIcon style={starStyle}/>
             <StarBorderIcon style={starStyle}/>
             <StarBorderIcon style={starStyle}/>
         </div>

     )
    }
 }

 export default printStars