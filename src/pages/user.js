import React, {useState, useEffect} from 'react';
import { useLocation } from 'react-router-dom';
import UserReviews from '../components/UserComponents/UserReviews';
import { getLikesByUID, getRevByRID, getRevFromUID } from '../components/ExpressAPI';
import '../css/UserPage.css'
import UserLikes from '../components/UserComponents/UserLikes';




const Users = (userN) => {

    const [user, setUser] = useState({
        name:"",
        email:"",
        join_date:null,
        avatar:"",
        uid:null
    });

    const [name, setName] = useState();

    const [reviews, setReviews] = useState([]);
    const [likes, setLikes] = useState([]);


    




    const location = useLocation();

    /*
    useEffect(()=>{
        if(location.state != null){
            setUser(location.state.user)
        }
        if(user != null && user.user.length === 1){
            setName(user.user[0].NAME)
            
        }
       

    }, [location.state])
    */


    useEffect(()=>{
        if(userN.user.user.length === 1){
            setUser({
                name:userN.user.user[0].NAME,
                email:userN.user.user[0].EMAIL,
                join_date:new Date(userN.user.user[0].JOIN_DATE).toISOString().slice(0, 19).replace('T', ' '),
                uid:userN.user.user[0].USER_ID
            })
            console.log(userN.user.user[0])

        }
    }, [userN])


    useEffect(()=>{
        if(user.uid != null){
            getRevFromUID(user.uid).then(json => setReviews(json))
            getLikesByUID(user.uid).then(json=> setLikes(json))
        }
    }, [user])


    


    
    
    

    
   


    return(
        <div className='userContainer'>
            <div className='userPage' >
                <h2 className='userTitle'>Profile</h2>
                <h2 className='profileText'>Name: {user.name}</h2>
                <h2 className='profileText'>Email: {user.email}</h2>
                <h2 className='profileText'>Join Date: {user.join_date}</h2>
                <h2 className='profileText'>Avatar: Pengy</h2>
                <h2 className='profileText'>UID: {user.uid}</h2>

            </div>
            <div className='userPage'>
                <h2 className='userTitle'>Your Reviews</h2>
                <UserReviews reviews={reviews} />
            </div>
            <div className='userPage'>
                <h2 className='userTitle'>Your Likes</h2>
                <UserLikes likes={likes} />
            </div>

        </div>
        
    );

    

}

export default Users;