import { ActionTypes } from "../constans/action-types";

const initialCartItems = [];
const initialCartCount = initialCartItems.reduce(
  (count, item) => count + item.quantity,
  0
);

const initialState = {
  cartItems: initialCartItems,
  cartCount: initialCartCount,
};

export const productReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.ADD_TO_CART:
      const id = payload.id;
      const existingItem = state.cartItems.find((item) => item.id === id);

      if (existingItem) {
        return {
          ...state,
          cartItems: state.cartItems.map((item) =>
            item.id === id ? { ...item, quantity: item.quantity + 1 } : item
          ),
          cartCount: state.cartCount + 1,
        };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, { ...payload, quantity: 1 }],
          cartCount: state.cartCount + 1,
        };
      }
    case ActionTypes.INCREASE_QUANTITY:
      return {
        ...state,
        cartItems: state.cartItems.map((item) =>
          item.id === payload.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        ),
        cartCount: state.cartCount + 1,
      };

    case ActionTypes.DECREASE_QUANTITY:
      return {
        ...state,
        cartItems: state.cartItems.map((item) =>
          item.id === payload.id && item.quantity > 1
            ? { ...item, quantity: item.quantity - 1 }
            : item
        ),
        cartCount: state.cartCount - 1,
      };

    case ActionTypes.REMOVE_ITEM:
      const removedItem = state.cartItems.find(
        (item) => item.id === payload.id
      );
      const removedItemQuantity = removedItem ? removedItem.quantity : 0;
      return {
        ...state,
        cartItems: state.cartItems.filter((item) => item.id !== payload.id),
        cartCount: state.cartCount - removedItemQuantity,
      };

    case ActionTypes.TO_EMPTY_CART:
      return {
        ...state,
        cartItems: [],
        cartCount: 0,
      };
    default:
      return state;
  }
};

