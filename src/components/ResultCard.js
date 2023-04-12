import React, {useContext} from 'react'
import { GlobalContext } from '../context/GlobalState'

const ResultCard = ({movie}) => {
  //with help of this we have access to movie list that we add
  const {addMovieToWatchList,addMovietoWatched, watchlist, watched} = useContext(GlobalContext)

  //this is used to find the movie
  let storedMovie = watchlist.find(o => o.id === movie.id);

  //if the movie is in watched list we dont ant to add it again through 
  //add movies icon
 let storedMovieWatched = watched.find(o => o.id === movie.id)


  //if we have a movie stored also if there is a movie 
  //in watched we will not be able to add it again
  //and we will disable the button
  //below we are checking both the conditions
   const watchlistDisbaled = 
   storedMovie ? true : 
   storedMovieWatched ? true : false;
 

   const watchedDisabled = 
   storedMovieWatched ? true : false

   return (
    <div className='result-card'>
      <div className='poster-wrapper'>

      {/* //if we are able to find the movie and there is movie_path than we 
      can attach image to it */}
        {movie.poster_path ? (
            <img 
                src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                alt={`${movie.title} Poster`}
            />
        ) : (
            <div className='filler-poster'></div>
        )}
      </div>
      <div className='info'>
        <div className='header'>
            <h3 className='title'>{movie.title}</h3>
            <h4 className='release-date'>
            {movie.release_date ? movie.release_date.substring(0,4) : '-'}
          </h4>
        </div>
        <div className='controls'>
            
            <button 
            disabled={watchlistDisbaled} 
            className='btn' 
            onClick={()=>addMovieToWatchList(movie)}>
               Add to WatchList
            </button>

            <button 
            disabled={watchedDisabled} 
            className='btn' 
            onClick={()=>addMovietoWatched(movie)}>
               Add to Watched
            </button>

        </div>
      </div>
    </div>
  )
}

export default ResultCard
