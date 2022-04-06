import { ADD_MOVIES } from "../actions";

// making state as object
const initialMoviesState={
list:[],
favourate:[],

}

//  if we want our app is predictable than we need make pure function
export default function movies(state=initialMoviesState,action)// state is current state and and is action what we want to perform
{
    //  if we change the state
if(action.type===ADD_MOVIES)
{
    return {
        ...state,// i use spread oprator for 
        list: action.movies// i want change the list
    };
}
return state;

}