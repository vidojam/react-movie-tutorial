import MovieCard from "../components/MovieCard";
import useState from "react";
import "./css/Home.css";


function Home() {

    const [searchQuery, setSearchQuery] = useState("");

  const movies = [
    { id: 1, title: "The Shawshank Redemption", year: 1994 },
    { id: 2, title: "Love Story", year: 1990 },
    { id: 3, title: "Deception", year: 1954 },
    { id: 4, title: "Mobi Dick", year: 1965 },

  ];

  const handleSearch = (e) => {
    e.preventDfault()
    alert(searchQuery)
    setSearchQuery("------")
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