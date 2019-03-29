import axios from "axios";
import { GET_ITEMS, ADD_ITEM, DELETE_ITEM, ITEMS_LOADING } from "./types";

export const getPlants = () => dispatch => {
  dispatch(setItemsLoading());
  axios.get("/api/plants").then(res =>
    dispatch({
      type: GET_ITEMS,
      payload: res.data
    })
  );
};

export const addPlant = item => dispatch => {
  axios.post("/api/plants/register", item).then(res =>
    dispatch({
      type: ADD_ITEM,
      payload: res.data
    })
  );
};

export const deleteItem = id => dispatch => {
  axios
    .delete(`/api/plants/${id}`)
    .then(res =>
      dispatch({
        type: DELETE_ITEM,
        payload: id
      })
    )
    .then(data => console.log(data))
    .catch(err => console.log(err));
};

export const setItemsLoading = () => {
  return {
    type: ITEMS_LOADING
  };
};
