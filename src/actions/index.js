// {
//     type:"ADD_MOVIES"
//  movies: [m1,m2,m3]

import { data } from "../data"

// }
// {
//     type:"DECCREASE_COUNT"
    
// }

//  action type
export const ADD_MOVIES='ADD_MOVIES'

// when we disppatch add_movie acction we simpy calll addmovies gunction
//  and also import in app .js 
export function addMovies(movies)// this function are called action creator bc they almatly create an action
{
   
   return {
    type:ADD_MOVIES,
    movies
   }

    

}