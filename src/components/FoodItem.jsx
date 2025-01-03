import React, { useContext } from "react";
import { frontEndAssets } from "../assets/frontend_assets/assets";
import { Context } from "../contents/Context";
import { FaPlus } from "react-icons/fa";

export default function FoodItem({ id, name, price, description, image }) {

    const { cartItems, addToCart, removeFromCart } = useContext(Context);

    return (
        <div
            className="w-full mx-auto rounded-[15px] overflow-hidden shadow-[0px_0px_10px_#00000030] transition-all duration-300"
            style={{ animation: "fadeIn2 1s" }}
        >
            <div className="w-full relative">
                <img
                    src={image}
                    alt={`${name} - Food`}
                    className="w-full object-cover"
                />
                <div className="flex items-center gap-3 p-1.5 absolute bottom-4 right-4 bg-white rounded-full shadow-md">
                    {
                        cartItems[id]
                            ?
                            (
                                <>
                                    <img
                                        src={frontEndAssets.remove_icon_red}
                                        onClick={() => removeFromCart(id)}
                                        className="cursor-pointer w-7"
                                        alt="Remove item"
                                    />
                                    <p className="text-lg font-medium">{cartItems[id]}</p>
                                    <img
                                        src={frontEndAssets.add_icon_green}
                                        onClick={() => addToCart(id)}
                                        className="cursor-pointer w-7"
                                        alt="Add more"
                                    />
                                </>
                            )
                            :
                            (
                                <h1
                                    className="cursor-pointer p-1 text-sm flex items-center justify-center"
                                    onClick={() => addToCart(id)}
                                >
                                    <FaPlus />
                                </h1>
                            )
                    }
                </div>
            </div>
            <div className="p-5">
                <div className="flex items-center justify-between mb-2.5">
                    <p className="text-xl font-semibold">{name}</p>
                    <img
                        src={frontEndAssets.rating_starts}
                        className="w-20"
                        alt="Rating stars"
                    />
                </div>
                <p className="text-[#676767] text-sm mb-2.5">{description}</p>
                <p className="text-[#ff4929] text-3xl font-semibold">₹{price}</p>
            </div>
        </div>
    );
}