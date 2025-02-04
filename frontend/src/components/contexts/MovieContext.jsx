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

    return (
        <MovieContext.Provider value={{}}>
            {children}
        </MovieContext.Provider>
    );
}