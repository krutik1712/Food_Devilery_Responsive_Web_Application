import React from 'react';
import '../components/ExploreMenu.css';
import { menu_list } from '../assets/frontend_assets/assets';

export default function ExploreMenu({ category, setCategory }) {
    return (
        <div className="flex flex-col gap-5" id='explore_menu'>
            <h1 className="text-[#262626] font-semibold text-3xl">Explore our menu</h1>
            <p className="w-full text-[#262626]">
                Choose from a diverse menu featuring a delectable array of dishes crafted with the finest ingredients
                and culinary expertise. Our mission is to satisfy your cravings and elevate your dining experience, one
                delicious meal at a time.
            </p>
            <div className="flex items-center justify-start gap-8 my-5 overflow-x-auto hide-scrollbar">
                {menu_list.map((item, index) => (
                    <div
                        key={index}
                        onClick={() => setCategory((prev) => (prev === item.menu_name ? "All" : item.menu_name))}
                        className="flex flex-col cursor-pointer items-center"
                    >
                        <div className='w-28 lg:w-40'>
                            <img
                                src={item.menu_image}
                                alt={item.menu_name}
                                className={`w-full object-cover transition-all rounded-full duration-200 ease-in-out ${category === item.menu_name ? "border-4 border-[#ff4929] p-0.5" : "border border-transparent brightness-50"}`}
                            />
                        </div>
                        <p className={`mt-3 text-lg ${category === item.menu_name ? "text-[#262626]" : "text-[#74747483]"}`}>
                            {item.menu_name}
                        </p>
                    </div>
                ))}
            </div>
            <hr className="my-3 h-0.5 bg-[#e2e2e2] border-none" />
        </div>
    );
}