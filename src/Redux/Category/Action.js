import axios from "axios";

export const getCategory = () => {
  return (dispatch) => {
    dispatch({ type: "get_category_pending" });
    axios
      .get("http://localhost:8006/category/get-categories")
      .then((res) => {
        console.log(res.data);
        dispatch({ type: "get_category_success", payload: res.data.data });
      })
      .catch((error) => {
        dispatch({ type: "get_category_failed", payload: error.message });
      });
  };
};