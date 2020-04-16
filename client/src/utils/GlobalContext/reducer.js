export const reducer = (state, action) => {
  switch (action.type) {
    case "LOGIN_USER":
      return {
        ...state,
        user: {
          ...state.user,
          ...action.payload,
        },
      };
    case "LOGOUT_USER": {
      return {
        ...state,
        user: {},
      };
    }
    case "CART_ADD_SERVICE":
      console.log("REDUCER", action);
      if (state.cart.filter((s) => s._id === action.payload._id).length) {
        return state;
      }
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
    case "CART_REMOVE_SERVICE_BY_ID":
      console.log("REDUCER", action);
      return {
        ...state,
        cart: state.cart.filter((s) => s._id !== action.payload),
      };
  }
};
