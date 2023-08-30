import { BrowserRouter, Routes, Route} from "react-router-dom";
import Home from './pages/home';
import Movie from './pages/movie';
import Search from './pages/search';
import Users from './pages/user';


const PageRoutes = () => {
    return(
        <div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/movie" element={<Movie />} />
                <Route path="/search" element={<Search />} />
                <Route path="/user" element={<Users />} />
            </Routes>
        </div>
            
    
    );
}

export default PageRoutes;