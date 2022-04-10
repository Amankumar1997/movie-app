import { ADD_MOVIES ,ADD_FAVOURITE} from "../actions";

// making state as object
const initialMoviesState={
list:[],// this is for  currnt list
favourates:[],// this is for favrourate list

}

//  if we want our app is predictable than we need make pure function
export default function movies(state=initialMoviesState,action)// state is current state and and is action what we want to perform
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
            }
    case ADD_FAVOURITE:

        return {
                    ...state,// i use spread oprator for 
                    favourates: [action.movie, ...state.favourates]// i am adding the at the first index and spread all the movie fva
                };
     
    default:
        return state;     // if action type does not return any thingwe just return state

}

}