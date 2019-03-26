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

export const addPlant = function(item) {
  return axios
    .post("/api/plants/register", item)
    .then(res.json(item))
    .then(console.log(item, "Plant added to DB..."))
    .catch(err => console.log(err));
};

export const deleteItem = id => dispatch => {
  axios.delete(`/api/plants/${id}`).then(res =>
    dispatch({
      type: DELETE_ITEM,
      payload: id
    })
  );
};

export const setItemsLoading = () => {
  return {
    type: ITEMS_LOADING
  };
};
