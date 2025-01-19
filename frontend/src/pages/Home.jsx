import MovieCard from "../components/MovieCard";


function Home() {
  const movies = [
    { id: 1, title: "The Shawshank Redemption", year: 1994 },
    { id: 2, title: "Love Story", year: 1990 },
    { id: 3, title: "Deception", year: 1954 },
    { id: 4, title: "Mobi Dick", year: 1965 },

  ];

  return (
    <div className="home">
        <div movies-grid>
            {movies.map(movie=> <MovieCard movie = {movie}/>)}
        </div>
    </div>
  );    
}