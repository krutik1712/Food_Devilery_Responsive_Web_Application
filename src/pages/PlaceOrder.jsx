import React, { useContext } from 'react';
import { Context } from '../contents/Context';

export default function PlaceOrder() {
  const { cartItems, food_list } = useContext(Context);

  // Define delivery charge and discount
  const deliveryCharge = 50; // Flat delivery charge
  const discountPercentage = 10; // 10% discount

  // Calculate total price
  const totalPrice = food_list.reduce((total, item) => {
    if (cartItems[item.id] > 0) {
      return total + item.price * cartItems[item.id];
    }
    return total;
  }, 0);

  // Calculate discount
  const discount = (totalPrice * discountPercentage) / 100;

  // Calculate final price
  const finalPrice = totalPrice + deliveryCharge - discount;

  return (
    <form className="container mx-auto mt-20 px-6 py-10 grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* Delivery Information Section */}
      <div className="bg-white shadow-md rounded-lg p-8">
        <p className="text-2xl font-bold text-[#ff4929] mb-6">Delivery Information</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <input
            type="text"
            placeholder="First Name"
            className="border border-gray-300 rounded-lg px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-[#ff4929]"
            required
          />
          <input
            type="text"
            placeholder="Last Name"
            className="border border-gray-300 rounded-lg px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-[#ff4929]"
            required
          />
        </div>
        <input
          type="email"
          placeholder="Email Address"
          className="border border-gray-300 rounded-lg px-4 py-3 w-full mb-6 focus:outline-none focus:ring-2 focus:ring-[#ff4929]"
          required
        />
        <input
          type="text"
          placeholder="Street"
          className="border border-gray-300 rounded-lg px-4 py-3 w-full mb-6 focus:outline-none focus:ring-2 focus:ring-[#ff4929]"
          required
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <input
            type="text"
            placeholder="City"
            className="border border-gray-300 rounded-lg px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-[#ff4929]"
            required
          />
          <input
            type="text"
            placeholder="State"
            className="border border-gray-300 rounded-lg px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-[#ff4929]"
            required
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <input
            type="text"
            placeholder="Pin Code"
            className="border border-gray-300 rounded-lg px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-[#ff4929]"
            required
          />
          <input
            type="text"
            placeholder="Country"
            className="border border-gray-300 rounded-lg px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-[#ff4929]"
            required
          />
        </div>
        <input
          type="text"
          placeholder="Phone Number"
          className="border border-gray-300 rounded-lg px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-[#ff4929]"
          required
        />
      </div>

      {/* Order Summary Section */}
      <div className="bg-white shadow-md rounded-lg p-8">
        <p className="text-2xl font-bold text-[#ff4929] mb-6">Order Summary</p>
        <div className="w-full space-y-4 text-lg font-medium">
          <p className='flex justify-between'>Total Items: {Object.values(cartItems).reduce((a, b) => a + b, 0)}</p>
          <ul className="list-disc list-inside">
            {food_list
              .filter((item) => cartItems[item.id] > 0)
              .map((item) => (
                <li key={item.id} className="text-gray-700">
                  {item.name} - {cartItems[item.id]} x Rs. {item.price.toFixed(2)}
                </li>
              ))}
          </ul>
          <p className="text-gray-600">Subtotal: Rs. {totalPrice.toFixed(2)}</p>
          <p className="text-gray-600">Delivery Charges: Rs. {deliveryCharge.toFixed(2)}</p>
          <p className="text-gray-600">Discount ({discountPercentage}%): -Rs. {discount.toFixed(2)}</p>
          <div className="border-t-2 border-gray-200 pt-4">
            <p className="text-[#ff4929] text-xl font-bold">
              Final Price: Rs. {finalPrice.toFixed(2)}
            </p>
          </div>
        </div>
        <div className="mt-8 flex justify-center">
          <button
            type="submit"
            className="bg-[#ff4929] text-white py-3 px-12 rounded-full font-semibold text-sm lg:text-xl hover:bg-[#ff2c19] shadow-lg transition-transform transform hover:scale-105"
          >
            Proceed to Payment
          </button>
        </div>
      </div>
    </form>
  );
}
