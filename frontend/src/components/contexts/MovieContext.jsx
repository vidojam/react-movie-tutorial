import {createContext, useState, usecontext, useEffect} from 'react';

const MovieContext = createContext();

export const useMovieContext = () => useContext();

export const MovieProvider = ({children}) => {
    const [favorites, setFavorites] = useState([]);

    useEffect(() => {
        const storedFavs = localStorage.getItem('favorites');
        
        if (storedFavs) setFavorites(JSON.parse(storedFavs))
    }, []);

    useEffect(() => {
            localStorage.setItem('favorites', JSON.stringify(favorites));
    }, [favorites]);

    const addFavorite = (movie) => {        
            setFavorites (prev=>[...prev, movie]); 
    }

    const isFavorite = (movieid) => {
        return favorites.some(movie => movie.id === movieid);
    }

    const   removeFromFavorites = (movieid) => {
        setFavorites(prev => prev.filter (movie => movie.id !== movieid));
    }

    const value = {
        favorites,
        addFavorite,
        isFavorite,
        removeFromFavorites,
    }

    return (
        <MovieContext.Provider value={value}>
            {children}
        </MovieContext.Provider>
    );
}