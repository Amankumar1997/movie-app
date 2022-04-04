//  if we want our app is predictable than we need make pure function
export default function movies(state=[],action)// state is current state and and is action what we want to perform
{
    //  if we change the state
if(action.type==='ADD_MOVIES')
{
    return action.movies;
}
return state;

}