import './App.css'
import MovieCard from './components/MovieCard'

  function App() {
  return ( 
  <>
    <MovieCard movie={{title: 'The Dark Knight Film', release_date: '2008'}} />
    <MovieCard movie={{title: 'Joes Film', release_date: '2008'}} />
  </>

 );  
}

export default App;
