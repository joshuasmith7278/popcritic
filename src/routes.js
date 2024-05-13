import { BrowserRouter, Routes, Route} from "react-router-dom";
import Home from './pages/home';
import Movie from './pages/movie';
import Search from './pages/search';
import Users from './pages/user';
import Login from "./pages/login";


const PageRoutes = (user) => {
    return(
        <div>
            <Routes>
                <Route exact path="/" element={<Home user={user}/>} />
                <Route path="/movie" element={<Movie user={user}/>} />
                <Route path="/search" element={<Search user={user}/>} />
                <Route path="/user" element={<Users user={user}/>} />
                <Route path="/login" element={<Login user={user}/>} />
            </Routes>
        </div>
            
    
    );
}

export default PageRoutes;