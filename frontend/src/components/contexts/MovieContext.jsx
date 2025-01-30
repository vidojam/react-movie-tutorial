import {createContext, useState, usecontext, useEffect} from 'react';

const MovieContext = createContext();

export const useMovieContext = () => useContext();

export const MovieProvider = ({children}) => {}