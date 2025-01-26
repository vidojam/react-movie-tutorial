import MovieCard from "../components/MovieCard";
import { useState, useEffect } from "react";
import { searchMovies, getPopularMovies } from "../services/api";
import "./css/Home.css";


function Home() {

    const [searchQuery, setSearchQuery] = useState("");
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState(null);
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
      const loadPopularMovies = async () => {
        try {
          const popularMovies = await getPopularMovies();
          setMovies(popularMovies);
        }
        
        catch (error) {   
          console.log(err)
          setError=("Error fetching popular movies:");
        }
        finally {
          setLoading(false);
        }
      }
      loadPopularMovies();
    }, []);


  const handleSearch = (e) => {
    e.preventDfault();
    alert(searchQuery);
    setSearchQuery("");
  }

  return (
    <div className="home">
        <form onSubmit={handleSearch} className="search-form">
            <input type="text" 
            placeholder="Search for movies..." 
            className="search-input"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            />
        </form>

        <button type="submit" className="search-button">Search</button>

        <div className="movies-grid">
            {movies.map((movie) => (
                movie.title.toLowerCase().startswith(searchQuery) && <MovieCard 
                movie = {movie} key={movie.id}/>
            )
            )}
        </div>
    </div>
  );    
}

export default Home;