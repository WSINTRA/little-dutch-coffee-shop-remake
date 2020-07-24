import State from './state/cart-state';
const REMOVE_FROM_CART = "REMOVE_FROM_CART";
const CLOSE_SUCCESS_WINDOW = "CLOSE_SUCCESS_WINDOW";
const ADD_TO_CART = "ADD_TO_CART";

function CartReducer(state=State, action) {

  switch (action.type) {

    case REMOVE_FROM_CART:
      let lastSeenPos = state.cartPos-1;
      let updatedCart = state.cartItems.filter(item=>item.cartIndex !==action.payload)
      return { ...state, cartItems: updatedCart, cartPos: lastSeenPos };

    case CLOSE_SUCCESS_WINDOW:
      let cartItemReset = 0;
      let successClose = false;
      return {
        ...state,
        cartSuccess: successClose,
        cartItemQuantity: cartItemReset,
      };

    case ADD_TO_CART:
      let itemBasket = {
        cartIndex: state.cartPos,
        itemId: action.payload.id,
        itemPrice: action.payload.price,
        itemTitle: action.payload.title,
      };
      let addCartItemQuantity = state.cartItemQuantity + 1;
      let increasedCartPos = state.cartPos + 1;
      return {
        ...state,
        cartSuccess: true,
        cartItems: [...state.cartItems, itemBasket ],
        cartItemQuantity: addCartItemQuantity,
        cartPos: increasedCartPos,
      };

    default:
      return state;
  }
}

export default CartReducer;
