import React, { useContext } from "react";
import { Context } from "../contents/Context";
import { useNavigate } from "react-router-dom";

export default function Cart() {

  const { cartItems, food_list, removeFromCart } = useContext(Context);

  const navigate = useNavigate()

  return (
    <div className="mt-28 container mx-auto px-4">
      <h1 className="text-3xl font-bold text-[#ff4929] mb-6">Your Order</h1>
      <div className="bg-white shadow-lg rounded-lg p-6">
        <div className="overflow-x-auto">
          <div className="min-w-max grid grid-cols-6 gap-4 text-lg font-semibold text-gray-700 border-b-2 pb-2 mb-4">
            <p className="text-center">Image</p>
            <p className="text-left">Title</p>
            <p className="text-center">Price</p>
            <p className="text-center">Quantity</p>
            <p className="text-center">Total</p>
            <p className="text-center">Remove</p>
          </div>

          {food_list.map((item) => {
            if (cartItems[item.id] > 0) {
              return (
                <div
                  key={item.id}
                  className="min-w-max grid grid-cols-6 gap-4 items-center border-b py-4"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 object-cover rounded-md mx-auto"
                  />
                  <p className="text-lg text-left">{item.name}</p>
                  <p className="text-lg text-center">Rs. {item.price.toFixed(2)}</p>
                  <p className="text-lg text-center">{cartItems[item.id]}</p>
                  <p className="text-lg text-center">
                    Rs. {(item.price * cartItems[item.id]).toFixed(2)}
                  </p>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-500 hover:text-red-700 font-semibold text-center"
                  >
                    X
                  </button>
                </div>
              );
            }
            return null;
          })}
        </div>
      </div>

      <div className="mt-8 flex flex-col md:flex-row justify-between text-lg font-semibold">
        <p>Total Items: {Object.values(cartItems).reduce((a, b) => a + b, 0)}</p>
        <p>
          Total Price: Rs.{" "}
          {food_list.reduce((total, item) => {
            if (cartItems[item.id] > 0) {
              return total + item.price * cartItems[item.id];
            }
            return total;
          }, 0).toFixed(2)}
        </p>
      </div>

      <div className="my-8 flex justify-center">
        <button
          className="bg-[#ff4929] text-white py-3 px-8 rounded-full font-semibold text-xl hover:bg-[#ff2c19] transition duration-300"
          onClick={() => navigate('/order')}
        >
          Checkout
        </button>
      </div>
    </div>
  );
}
