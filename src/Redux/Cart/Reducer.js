const initialState = {
  cartitems:[],
  cart:{},
  success: false,
  error: null,
  isLoading: false,
};
console.log(initialState);

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "add_cart_pending":
      return {
        ...state,
        isLoading: true,
      };
    case "add_cart_success":
      return {
        ...state,
        isLoading: false,
        success: true,
      };
    case "add_cart_failed":
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    case "GET_CART_PENDING":
      return {
        ...state,
        isLoading: true,
      };
    case "GET_CART_SUCCESS":
      return {
        ...state,
        isLoading: false,
        cartitems: action.payload,
      };
    case "GET_CART_FAILED":
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
      
      case "update_quantity_pending":
        return {
          ...state,
          isLoading: true,
        };
      case "update_quantity_success":
        return {
          ...state,
          isLoading: false,
          success: true,
        };
      case "update_quantity_failed":
        return {
          ...state,
          isLoading: false,
          error: action.payload,
        };
  
        case "remove_cart_pending":
          return {
            ...state,
            isLoading: true,
          };
        case "remove_cart_success":
          return {
            ...state,
            isLoading: false,
            success: true,
          };
        case "remove_cart_failed":
          return {
            ...state,
            isLoading: false,
            error: action.payload,
          };
          
    default:
      return state;
  }
};
export default cartReducer;     
