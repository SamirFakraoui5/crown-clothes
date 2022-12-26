// here we can put all our function related to cart and we we can use it any place in the code

// function add item to cart
export const addItemToCart = (cartItems, cartitemToAdd) => {
  const existingItem = cartItems.find(
    (cartItem) => cartItem.id === cartitemToAdd.id
  );

  // if the item is existe then we reture the item and incresse the quantity
  if (existingItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === cartitemToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }
  // if it's not existe the we returne the cartItem with quantity proprety 1
  return [...cartItems, { ...cartitemToAdd, quantity: 1 }];
};
