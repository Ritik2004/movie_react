import React,{useContext} from 'react'
import { GlobalContext } from '../context/GlobalState'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faTimes, faEyeSlash } from '@fortawesome/free-solid-svg-icons'


const MovieControls = ({movie, type}) => {

  const {removeMovieFromWatchlist, addMovietoWatched, moveToWatchList,removeFromWatched} =  useContext(GlobalContext);

  return (
    <div className='inner-card-controls'>
      {type === "watchlist" && (
        <>
            <button className='ctrl-btn'
            onClick={()=>addMovietoWatched(movie)}>
            <FontAwesomeIcon icon={faEye} />
            </button>

            <button className='ctrl-btn'
            onClick={()=>removeMovieFromWatchlist(movie.id)}>
            <FontAwesomeIcon icon={faTimes} />
            </button>
        </>
      )}
      {type === "watched" && (
        <>
        <button className='ctrl-btn' onClick={()=>moveToWatchList(movie)}>
            <FontAwesomeIcon icon={faEyeSlash} />
            </button>

            <button className='ctrl-btn' onClick={()=>removeFromWatched(movie.id)}>
            <FontAwesomeIcon icon={faTimes} />
            </button>
        </>
      )}
    </div>
  )
}

export default MovieControls
