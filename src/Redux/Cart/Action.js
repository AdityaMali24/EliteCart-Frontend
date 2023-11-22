import axios from "axios";

export const addtoCart = (itemId) => {
  return (dispatch) => {
    dispatch({ type: "add_cart_pending" });
    return axios
      .post("http://localhost:8006/cart/add-cart-items/"+itemId)
      .then((res) => {
        dispatch({ type: "add_cart_success", payload: res.data.data });
        return Promise.resolve();
      })
      .catch((error) => {
        dispatch({ type: "add_cart_failed", payload: error.message });
        return Promise.reject();
      });
  };
};

export const getCartItems =()=>{
    return (dispatch) => {
        dispatch({ type: "GET_CART_PENDING" });
        axios
          .get(`http://localhost:8006/cart/get-cart-items`)
          .then((res) => {
            console.log(res.data.data);
            dispatch({ type: "GET_CART_SUCCESS", payload: res.data.data });
          })
          .catch((err) => {
            dispatch({ type: "GET_CART_FAILED", payload: err.message });
          });
      };
}

export const updateQuantity = (id, type) => {
  console.log(type);
  console.log(id)
  return (dispatch) => {
    dispatch({ type: "update_quantity_pending" });
    return axios
      .patch(
        `http://localhost:8006/cart/update-quantity/${id}?updatetype=${type}`
      )
      .then((res) => {
        //console.log(res.data);
        dispatch({ type: "update_quantity_success", payload: res.data.data });
      })
      .catch((error) => {
        dispatch({ type: "update_quantity_failed", payload: error.message });
      });
  };
};

export const removeFromCart = (id) => {
  return (dispatch) => {
    dispatch({ type: "remove_cart_pending" });
    return axios
      .delete(`http://localhost:8006/cart/delete-cart-items/${id}`)
      .then((res) => {
        //console.log(res.data);
        dispatch({ type: "remove_cart_success", payload: res.data.data });
      })
      .catch((error) => {
        dispatch({ type: "remove_cart_failed", payload: error.message });
      });
  };
};