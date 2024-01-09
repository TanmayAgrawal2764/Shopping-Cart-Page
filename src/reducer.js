const reducer = (state, action) => {
  if (action.type === "CLEAR_CART") {
  }
  if (action.type === "REMOVE") {
  }

  if (action.type === "INCREASE") {
  }
  if (action.type === "DECREASE") {
  }
  if (action.type === "GET_TOTALS") {
  }
  if (action.type === "LOADING") {
    return {
      ...state,
      loading: true,
    };
  }
  if (action.type === "DISPLAY_ITEMS") {
    return {
      ...state,
      loading: false,
      cart: action.payload,
    };
  }
  if (action.type === "TOGGLE_AMOUNT") {
  }
  throw new Error("No matching action type");
};

export default reducer;
