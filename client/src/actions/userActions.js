import axios from "axios";
import {
  CREATE_USER,
  GET_USERS,
  GET_USER,
  GET_ERRORS,
  UPDATE_USER,
  DELETE_USER
} from "./dataTypes";

// CREATE USER
export const addUser = userData => dispatch => {
    axios
      .post("/api/users", userData)
      .then(res =>
        dispatch({
          type: CREATE_USER,
          payload: res.data
        })
      )
      .catch(err =>
        dispatch({
          type: GET_ERRORS,
          payload: err.response.data
        })
      );
};

// UPDATE USER
export const updateUser = (userData, id) => dispatch => {
  axios
    .put(`/api/users/${id}`, userData)
    .then(res =>
      dispatch({
        type: UPDATE_USER,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

// GET USERS
export const getUsers = () => dispatch => {
  axios
    .get("/api/users")
    .then(res =>
      dispatch({
        type: GET_USERS,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_USERS,
        payload: null
      })
    );
};



// GET USER
export const getUser = id => dispatch => {
  axios
    .get(`/api/users/${id}`)
    .then(res =>
      dispatch({
        type: GET_USER,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_USER,
        payload: null
      })
    );
};

// DELETE USER
export const deleteUser = id => dispatch => {
  axios
    .delete(`/api/users/${id}`)
    .then(res =>
      dispatch({
        type: DELETE_USER,
        payload: id
      })
    )
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};
