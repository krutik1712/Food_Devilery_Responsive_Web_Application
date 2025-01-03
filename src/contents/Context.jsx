import { createContext, useState } from "react";
import { food_list } from "../assets/frontend_assets/assets";

export const Context = createContext(null);

const ContextProvider = (props) => {
    const [cartItems, setCartItems] = useState({});

    const addToCart = (itemId) => {
        setCartItems((prev) => ({
            ...prev,
            [itemId]: prev[itemId] ? prev[itemId] + 1 : 1,
        }));
    };

    const removeFromCart = (itemId) => {
        setCartItems((prev) => {
            if (prev[itemId] > 1) {
                return { ...prev, [itemId]: prev[itemId] - 1 };
            }
            const updatedCart = { ...prev };
            delete updatedCart[itemId];
            return updatedCart;
        });
    };

    const contextVal = {
        food_list,
        cartItems,
        addToCart,
        removeFromCart,
    };

    return (
        <Context.Provider value={contextVal}>
            {props.children}
        </Context.Provider>
    );
};

export default ContextProvider;