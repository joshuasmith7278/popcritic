import { BrowserRouter, Routes, Route} from "react-router-dom";
import Home from './pages/home';
import Movie from './pages/movie';
import Search from './pages/search';
import Users from './pages/user';
import AddMovie from "./pages/addMovie";


const PageRoutes = () => {
    return(
        <div>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/movie" element={<Movie />} />
                <Route path="/search" element={<Search />} />
                <Route path="/user" element={<Users />} />
                <Route path="/addmovie" element={<AddMovie />} />
            </Routes>
        </div>
            
    
    );
}

export default PageRoutes;