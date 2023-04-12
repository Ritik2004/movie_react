import React, {createContext, useReducer, useEffect} from "react";
import AppReducer from "./AppReducer";
//initial state
const initialState = {
    watchlist: localStorage.getItem("watchlist")
    //here we get the watch list in parse form if there is data in local storage 
    ? JSON.parse(localStorage.getItem("watchlist")) 
    : [],
    
    watched: localStorage.getItem("watched")
    ? JSON.parse(localStorage.getItem("watched")) 
    : [],
}

//create context
export const GlobalContext = createContext(initialState);

//provider component
export const GlobalProvider = props => {
    const[state, dispatch] = useReducer(AppReducer, initialState);
    //useEffect is triggered when there is a change in state 
    //so when we add movie it will be call
    //movie will be stored in localstorage
    //but when we refresh this localstorage will get removed so we put a 
    //condition above in initial state
    useEffect(()=>{
        //objects are stored in stringify form
         localStorage.setItem('watchlist', JSON.stringify(state.watchlist))
         localStorage.setItem('watched', JSON.stringify(state.watched))
    }, [state])
 
    //actions
    const addMovieToWatchList = movie => {
        dispatch({type: "ADD_MOVIE_TO_WATCHLIST", payload: movie})
    }
    
    const removeMovieFromWatchlist = (id) => {
        dispatch({type: "REMOVE_MOVIE_FROM_WATCHLIST", payload: id})
    }

    const addMovietoWatched = (movie) => {
        dispatch({type: "ADD_MOVIE_TO_WATCHED", payload: movie})
    }
     //MOVE TO WATCHLIST
    const moveToWatchList = (movie) => {
        dispatch({type: "MOVIE_TO_WATCHLIST", payload: movie})
    }
    //REMOVE FROM watched
   const removeFromWatched = (id) => {
       dispatch({type: "REMOVE_FROM_WATCHED", payload: id})
   }

    return (
        <GlobalContext.Provider value={{
        watchlist:state.watchlist,
         watched:state.watched, 
         addMovieToWatchList:addMovieToWatchList,
         removeMovieFromWatchlist:removeMovieFromWatchlist,
         addMovietoWatched:addMovietoWatched,
         moveToWatchList:moveToWatchList,
         removeFromWatched:removeFromWatched
          }}
          >
            {props.children}
        </GlobalContext.Provider>
    )
}