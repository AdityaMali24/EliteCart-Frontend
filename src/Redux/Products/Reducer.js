const initialState = {
  products: [],
  product: {},
  success: false,
  error: null,
  isLoading: false,
};
console.log(initialState)

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_PRODUCTS_PENDING":
      return {
        ...state,
        isLoading: true,
      };
    case "GET_PRODUCTS_SUCCESS":
      return {
        ...state,
        isLoading: false,
        products: action.payload,
      };
    case "GET_PRODUCTS_FAILED":
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    case "GET_SINGLE_PRODUCT_PENDING":
      return {
        ...state,
        isLoading: true,
      };
    case "GET_SINGLE_PRODUCT_SUCCESS":
      return {
        ...state,
        isLoading: false,
        product: action.payload,
      };
    case "GET_SINGLE_PRODUCT_FAILED":
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default productsReducer;