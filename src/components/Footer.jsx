import React from 'react';
import { frontEndAssets } from '../assets/frontend_assets/assets';
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa6';
import { footerInfo, footerItems, footerItems1, footerItems2 } from '../contents/information';

export default function Footer() {
    return (
        <div className="bg-[#332c2a] text-white px-[6vw] pb-5 pt-20" id='contact'>
            <div className="w-full flex flex-col items-start mb-10">
                <div className="flex items-center mb-4 cursor-pointer">
                    <img
                        src={frontEndAssets.favIcon}
                        alt="Logo"
                        width={25}
                        className="object-contain"
                    />
                    <h1 className="text-3xl font-bold ml-2">tomato.</h1>
                </div>
                <p className="text-sm mb-4 text-[#9f9f9f]">
                    Enjoy hassle-free food delivery with your favorite dishes, delivered fresh to your doorstep. Order now and satisfy your cravings!
                </p>
                <div className="flex gap-4">
                    <FaFacebook className="text-white text-xl hover:text-[#ff4929] cursor-pointer transition-all" />
                    <FaTwitter className="text-white text-xl hover:text-[#ff4929] cursor-pointer transition-all" />
                    <FaInstagram className="text-white text-xl hover:text-[#ff4929] cursor-pointer transition-all" />
                    <FaYoutube className="text-white text-xl hover:text-[#ff4929] cursor-pointer transition-all" />
                </div>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-y-10 gap-x-10 mb-10">
                <div className="flex flex-col items-start">
                    <h2 className="text-lg font-semibold uppercase mb-4">About Us</h2>
                    <ul className="space-y-2">
                        {footerItems.map((item, index) => (
                            <li
                                key={index}
                                className="text-sm hover:text-[#ff4929] cursor-pointer transition-all text-[#9f9f9f]"
                            >
                                {item.title}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="flex flex-col items-start">
                    <h2 className="text-lg font-semibold uppercase mb-4">Contact Us</h2>
                    <ul className="space-y-2">
                        {footerItems1.map((item, index) => (
                            <li
                                key={index}
                                className="text-sm hover:text-[#ff4929] cursor-pointer transition-all text-[#9f9f9f]"
                            >
                                {item.title}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="flex flex-col items-start">
                    <h2 className="text-lg font-semibold uppercase mb-4">Company</h2>
                    <ul className="space-y-2">
                        {footerItems2.map((item, index) => (
                            <li
                                key={index}
                                className="text-sm hover:text-[#ff4929] cursor-pointer transition-all text-[#9f9f9f]"
                            >
                                {item.title}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="flex flex-col items-start">
                    <h2 className="text-lg font-semibold uppercase mb-4">Get in Touch</h2>
                    <ul className="space-y-2">
                        {footerInfo.map((item, index) => (
                            <li
                                key={index}
                                className="text-sm hover:text-[#ff4929] cursor-pointer transition-all text-[#9f9f9f]"
                            >
                                {item.title}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <hr className="my-6 border-t border-white" />
            <p className="text-xs text-center">
                Copyright 2024 © Krutik Vihirgare - All Rights Reserved.
            </p>
        </div>
    );
}