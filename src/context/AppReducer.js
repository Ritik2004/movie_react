

export default (state, action) => {
    switch(action.type) {
        case "ADD_MOVIE_TO_WATCHLIST":
            return {
                //below code with add movie to existing watchlist
                ...state,
                watchlist: [action.payload, ...state.watchlist]
            };
            //it will return all the movies that does not match the id
         case "REMOVE_MOVIE_FROM_WATCHLIST":
            return {
                ...state,
                watchlist: state.watchlist.filter(
                    (movie)=>movie.id !== action.payload)
            }   

            //here we will first remove movie from watchlist 
            //and then add to watched
            case "ADD_MOVIE_TO_WATCHED":
                return {
                  ...state,
                  watchlist: state.watchlist.filter(
                    (movie)=>movie.id !== action.payload.id)
                ,
                watched: [action.payload, ...state.watched],
                  }
                  //move to watchlist
              case "MOVIE_TO_WATCHLIST":
                return{
                    ...state,
                    watched: state.watched.filter(
                        (movie)=>movie.id !== action.payload.id)
                        ,
                      watchlist : [action.payload, ...state.watchlist] 
                }    
                case "REMOVE_FROM_WATCHED":
                    return {
                        ...state, 
                        watched: state.watched.filter(
                            (movie) => movie.id !== action.payload)
                    }
        default:
            return state
    }
}