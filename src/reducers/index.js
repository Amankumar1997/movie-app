import { combineReducers } from "redux";
import { ADD_MOVIES ,ADD_TO_FAVOURITE, REMOVE_FROM_FAVOURITE,SET_SHOW_FAVOURITES} from "../actions";

// making state as object
const initialMoviesState={
list:[],// this is for  currnt list
favourates:[],// this is for favrourate list
showFavourites:false
}

//  if we want our app is predictable than we need make pure function
export  function movies(state=initialMoviesState,action)// state is current state and and is action what we want to perform
{
    //  if we change the state
// if(action.type===ADD_MOVIES)
// {
//     return {
//         ...state,// i use spread oprator for 
//         list: action.movies// i want change the list
//     };
// }
// return state;
switch(action.type)
{
    case ADD_MOVIES:
    return {
                ...state,// i use spread oprator for 
                list: action.movies// i want change the list
           , showFavourites:false
            }
    case ADD_TO_FAVOURITE:
        return {
                    ...state,// i use spread oprator for 
                    favourates: [action.movie, ...state.favourates]// i am adding the at the first index and spread all the movie fva
                }

   case REMOVE_FROM_FAVOURITE:
            const filterdArray=state.favourates.filter(
                // filter function return filtred array and not changing tha value of orignal arry 
              movie=>movie.Title!==action.movie.Title
                )
        return {
               ...state,
               favourates:filterdArray
              }


   case SET_SHOW_FAVOURITES:
        return {
              ...state,
              showFavourites:action.val
              }
   default:
        return state;    // if action type does not return any thingwe just return state

}

}

//  creating reducer for search
const intialSearchState={ 
    result:{}
}
export function search(state=intialSearchState,action)
{
    return state;
}



// creating root reducers
const initialRootState={
    movies:initialMoviesState,
    search:intialSearchState
}
// export default function rootReducer(state=initialRootState,action)
// {
//     // movie or serch abhi isme property jo root reducer mein hai
//     return{
//         //  here i can say my movie data is managed by my movie reducer
//                //  yaha hum only moviestate pass krenge naaki aal state
//         movies:movies(state.movies,action),
//         //  here i can say my movie data is managed by my movie reducer
//         //  yaha hum only searchstate pass krenge naaki aal state
//         search:search(state.search,action)
//     }

// }

export default combineReducers({
    movies,
    search
})