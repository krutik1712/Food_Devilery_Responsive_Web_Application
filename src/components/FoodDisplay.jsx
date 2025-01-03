import React, { useContext } from 'react';
import { Context } from '../contents/Context';
import FoodItem from './FoodItem';

export default function FoodDisplay({ category }) {
    const { food_list } = useContext(Context);

    return (
        <div className="my-10">
            <h1 className="text-[#262626] font-semibold text-3xl">Top dishes near you</h1>
            <div className="w-full grid md:grid-cols-3 lg:grid-cols-4 gap-4 mt-8" >
                {food_list.map((item, index) => {
                    if (category === "All" || category === item.category) {
                        return (
                            <FoodItem
                                key={index}
                                id={item.id}
                                name={item.name}
                                description={item.description}
                                price={item.price}
                                image={item.image}
                            />
                        );
                    }
                    return null;
                })}
            </div>
        </div>
    );
}
