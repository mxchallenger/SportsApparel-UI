import React from 'react';

const CartContext = React.createContext();

function cartReducer(state, action) {
  switch (action.type) {
    case 'delete': {
      return {
        ...state,
        products: state.products.filter((product) => product.title !== action.product.title)
      };
    }
    case 'add': {
      return {
        ...state,
        products: [...state.products, action.product]
      };
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

function CartProvider({ children }) {
  const initialProducts = {
    products: [
      {
        id: null,
        title: 'Sport Shoes',
        price: 49.99,
        description: 'Sporty shoes for sporty people',
        quantity: 2
      },
      {
        id: null,
        title: 'Sport Shorts',
        price: 39.99,
        description: 'Sporty shorts for sporty people',
        quantity: 5
      }
    ],
    setProducts: () => { }
  };
  const [state, dispatch] = React.useReducer(cartReducer, initialProducts);

  const value = { state, dispatch };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
}

function useCart() {
  const context = React.useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCartDispatch must be used within a CartProvider');
  }
  return context;
}

export { CartProvider, useCart };
