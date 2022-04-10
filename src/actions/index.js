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
export const ADD_FAVOURITE='ADD_FAVOURITE'// add action for favourate  list

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
    type:ADD_FAVOURITE,
    movie
   }
}