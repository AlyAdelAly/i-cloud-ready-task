import { createContext, useEffect, useState } from "react";

const carts = JSON.parse(localStorage.getItem("states"))?.carts;

export const Context = createContext();

const ContextProvider = (props) => {
  const [cart, setCart] = useState(carts ? carts : []);
  const [showCartAlert, setShowCartAlert] = useState(false);
  const [showKitchenAlert, setShowKitchenAlert] = useState(false);
  const [showMesaage, setShowMessage] = useState(false);

  const increaseItem = (item) => {
    item.quantity += 1
    setCart([...cart])
  }

  const decreaseItem = (item) => {
    item.quantity -= 1
    if (item.quantity) {
      setCart([...cart])
    } else {
      const updatedCart = cart.filter((i) => i.key !== item.key);
      setCart([...updatedCart]);
    }
  }

  const addToCart = (name, price) => {
    const indexItem = cart.findIndex((item) => item.name === name);
    if (indexItem >= 0) {
      cart[indexItem].quantity += 1;
      setCart([...cart]);
    } else {
      setCart([
        ...cart,
        {
          name: name,
          quantity: 1,
          key: cart.length,
          price: price,
        },
      ]);
    }
  };

  const removeFromCart = (name) => {
    setCart(currItem => {
      return currItem.filter(item => item.name !== name)
    })
  }


  const cartState = {
    carts: cart,
  };

  useEffect(() => {
    localStorage.setItem("states", JSON.stringify(cartState));
  }, []);

  return (
    <Context.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        increaseItem,
        decreaseItem,
        showCartAlert,
        setShowCartAlert,
        showKitchenAlert,
        setShowKitchenAlert,
        showMesaage,
        setShowMessage
      }}>
      {props.children}
    </Context.Provider>
  );
};

export default ContextProvider;