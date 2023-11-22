import axios from "axios";

export const getProducts = () => {
  return (dispatch) => {
    dispatch({ type: "GET_PRODUCTS_PENDING" });
    axios
      .get("http://localhost:8006/products/get-products")
      .then((res) => {
        console.log(res);
        console.log(res.data.data);
        dispatch({ type: "GET_PRODUCTS_SUCCESS", payload: res.data.data });
      })
      .catch((err) => {
        dispatch({ type: "GET_PRODUCTS_FAILED", payload: err.message });
      });
  };
};
export const getSingleProduct = (productid) => {
  console.log(productid);
  return (dispatch) => {
    dispatch({ type: "GET_SINGLE_PRODUCT_PENDING" });
    return axios
      .get(`http://localhost:8006/products/get-single-products/${productid}`)
      .then((res) => {
        console.log(res);
        dispatch({
          type: "GET_SINGLE_PRODUCT_SUCCESS",
          payload: res.data.data,
        });
        return Promise.resolve()
      })
      .catch((err) => {
        dispatch({ type: "GET_SINGLE_PRODUCT_FAILED", payload: err.message });
        return Promise.reject()
      });
  };
};
