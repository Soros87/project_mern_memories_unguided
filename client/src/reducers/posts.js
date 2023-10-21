
import { FETCH_ALL, CREATE, UPDATE, DELETE, LIKE } from '../constants/actionTypes';

//function below is a reducer - a function that is able to process our message, our Action. A reducer takes the existing state and applies the message on it. The end result is a new state.
export default (posts = [],action) => {
  switch (action.type) {
    case FETCH_ALL:
      //payload comes from posts.js in ../src/action
      return action.payload

    case CREATE:
      return [...posts,action.payload]

    case UPDATE:
    case LIKE:
      return posts.map((post) => (post._id === action.payload._id ? action.payload : post))

    case DELETE:
      return posts.filter((post)=> post._id!==action.payload)

    default:
      return posts

  }
}