export const initialState = {
  cart: [],
  user: {
    billingAddress: [],
    shippingAddress: [],
  },
  serviceIds: function () {
    return this.cart.map((s) => s._id);
  },
  cartTotal: function () {
    return this.cart.reduce((previous, current) => previous + current.price, 0);
  },
};
