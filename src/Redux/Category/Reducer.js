const initialState = {
  categories: [],
  category: {},
  success: false,
  error: null,
  isLoading: false,
};

const categoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case " get_category_pending":
      return {
        ...state,
        isLoading: true,
      };
    case "get_category_success":
      return {
        ...state,
        isLoading: false,
        categories: action.payload,
      };
    case "get_category_failed":
      return {
        ...state,
        isLoading: false,

        error: action.payload,
      };

    default:
      return state;
  }
};

export default categoryReducer;
