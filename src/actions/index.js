// {
//     type:"ADD_MOVIES"
//  movies: [m1,m2,m3]

import { data } from "../data"

// }
// {
//     type:"DECCREASE_COUNT"
    
// }

//  action type
export const ADD_MOVIES='ADD_MOVIES' //add action for favourate list
export const ADD_TO_FAVOURITE='ADD_TO_FAVOURITE'// add action for favourate  list
export const REMOVE_FROM_FAVOURITE='REMOVE_FROM_FAVOURITE'// add action for unfavourate  list
export const SET_SHOW_FAVOURITES='SET_SHOW_FAVOURITES'// add action show favourate agr yetrue hota screen par fav list dikehgi other wise fmovie list


// when we disppatch add_movie acction we simpy calll addmovies gunction
//  and also import in app .js 
export function addMovies(movies)// this function are called action creator bc they almatly create an action
{
   
   return {
    type:ADD_MOVIES,
    movies
   }
}

export function addFavourite(movie)// this function are called action creator bc they almatly create an action
{
   
   return {
    type:ADD_TO_FAVOURITE,
    movie
   }
}


export function removeFromFavourite(movie)// this function are called action creator bc they almatly create an action
{
   
   return {
    type:REMOVE_FROM_FAVOURITE,
    movie
   }
}


export function setShowFavourites(val)// this function are called action creator bc they almatly create an action
{
   
   return {
    type:SET_SHOW_FAVOURITES,
    val
   }
}