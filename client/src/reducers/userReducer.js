import { 
    CREATE_USER,
    GET_USER,
    GET_USERS,
    DELETE_USER,
    UPDATE_USER

} from "../actions/dataTypes";

const initialState = {
  users: [],
  user: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_USERS:
      return {
        ...state,
        users: action.payload
      };
    case GET_USER:
      return {
        ...state,
        user: action.payload
      };
    case UPDATE_USER:
      return {
        ...state,
        user: action.payload
      };
    case CREATE_USER:
      return {
        ...state,
        users: [action.payload, ...state.users]
      };
    case DELETE_USER:
      return {
        ...state,
        posts: state.users.filter(user => user._id !== action.payload)
      };
    default:
      return state;
  }
}
