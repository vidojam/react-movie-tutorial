import "../css/Favorites.css";
import { useMovieContext } from "./contexts/MovieContext";
import MovieCard from "./MovieCard";

function Favorites() {
    const {favorites} = useMovieContext();

    if (favorites ) {
        return  
        <div className = "favorites"> 
            <h2>Your Favorites</h2>
            <div className="movies-grid">
            {favorites.map((movie) => (
                // movie.title.toLowerCase().startswith(searchQuery) && 
                <MovieCard movie = {movie} key={movie.id}/>
            ))}
            </div>
       </div>
    }

    return (
        <div className="favorites-empty">
            <h2>No Favorites Yet</h2>
            <p>Start adding favorites to your movies and they will appear here</p>
        </div>
    );
}

export default Favorites;