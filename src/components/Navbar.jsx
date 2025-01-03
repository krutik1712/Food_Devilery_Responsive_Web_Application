import React, { useState, useRef, useEffect, useContext } from "react";
import { Context } from "../contents/Context";
import { frontEndAssets } from "../assets/frontend_assets/assets";
import { navItems } from "../contents/information";
import { FaHamburger } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { BsBasket3Fill } from "react-icons/bs";
import { Link } from "react-router-dom";

export default function Navbar({ setShowLogin }) {
    const { cartItems } = useContext(Context);
    const [menu, setMenu] = useState("home");
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const searchRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (searchRef.current && !searchRef.current.contains(event.target)) {
                setIsSearchOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    };

    const handleLogout = () => {
        setIsLoggedIn(false);
        alert("You have been logged out");
    };

    return (
        <div className="fixed top-0 left-0 w-full z-50 bg-white shadow-md py-4 px-6 pl-2 md:px-4 lg:px-28 flex items-center justify-between">
            <div className="flex items-center cursor-pointer">
                <img
                    src={frontEndAssets.logo}
                    alt="Logo"
                    width={40}
                    className="md:w-12"
                />
                <Link to="/">
                    <h1
                        className="text-xl md:text-3xl text-[#ff4929] font-bold ml-0.5"
                        onClick={() => setMenu("home")}
                    >
                        tomato.
                    </h1>
                </Link>
            </div>
            <ul className="hidden md:flex items-center gap-8">
                {navItems.map((item, index) => (
                    <Link
                        to={item.location}
                        key={index}
                        className={`cursor-pointer ${menu === item.activeKey
                            ? "pb-1 border-b-2 text-[#ff4929] border-[#ff4929]"
                            : "text-[#7a7a7adc]"
                            }`}
                        onClick={() => {
                            setMenu(item.activeKey);
                            if (item.sectionId) scrollToSection(item.sectionId);
                        }}
                    >
                        {item.title}
                    </Link>
                ))}
            </ul>
            {/* Hamburger Button for Mobile */}
            <div className="md:hidden flex items-center">
                <button
                    className="text-[#ff4929]"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    <FaHamburger />
                </button>
                {/* Mobile Menu */}
                {isMobileMenuOpen && (
                    <ul className="absolute top-16 left-0 w-full bg-white shadow-md flex flex-col items-start px-4 py-2 z-50">
                        {navItems.map((item, index) => (
                            <Link
                                to={item.location}
                                key={index}
                                className="py-2 text-[#7a7a7adc] w-full border-b border-gray-200 text-base"
                                onClick={() => {
                                    setIsMobileMenuOpen(false); // Close menu on selection
                                    setMenu(item.activeKey);
                                    if (item.sectionId) scrollToSection(item.sectionId);
                                }}
                            >
                                {item.title}
                            </Link>
                        ))}
                        {isLoggedIn ? (
                            <button
                                onClick={handleLogout}
                                className="mt-2 w-full border border-[#ff4929] text-[#ff4929] hover:text-white hover:bg-[#ff4929] transition-all duration-500 rounded-md px-4 py-2 text-sm"
                            >
                                Logout
                            </button>
                        ) : (
                            <button
                                onClick={() => setShowLogin(true)}
                                className="mt-2 w-full border border-[#ff4929] text-[#ff4929] hover:text-white hover:bg-[#ff4929] transition-all duration-500 rounded-md px-4 py-2 text-sm"
                            >
                                Sign up
                            </button>
                        )}
                    </ul>
                )}
            </div>
            <div className="flex items-center gap-6">
                <div className="relative" ref={searchRef}>
                    <IoSearch
                        className="text-xl text-[#7a7a7adc] cursor-pointer"
                        onClick={() => setIsSearchOpen(!isSearchOpen)}
                    />
                    {isSearchOpen && (
                        <input
                            type="text"
                            placeholder="Search food..."
                            className="absolute top-8 left-0 border border-gray-300 rounded-md px-4 py-2 w-64 shadow-md focus:outline-none"
                        />
                    )}
                </div>
                <div className="relative">
                    <Link
                        to="/cart"
                        onClick={() => setMenu("cart")}
                        className={`cursor-pointer ${menu === "cart" ? "text-[#ff4929]" : "text-[#7a7a7adc]"} `}
                    >
                        <BsBasket3Fill className="text-lg" />
                    </Link>
                    {Object.values(cartItems).reduce((a, b) => a + b, 0) > 0 && (
                        <div className="absolute px-[6px] py-[2px] bg-[#ff4929] -top-3 -right-3 rounded-full text-white text-[10px] flex items-center justify-center">
                            {Object.values(cartItems).reduce((a, b) => a + b, 0)}
                        </div>
                    )}
                </div>
                {isLoggedIn ? (
                    <button
                        onClick={handleLogout}
                        className="hidden md:block border border-[#ff4929] text-[#ff4929] hover:text-white hover:bg-[#ff4929] transition-all duration-500 rounded-full px-6 py-2 text-xs md:text-base"
                    >
                        Logout
                    </button>
                ) : (
                    <button
                        onClick={() => setShowLogin(true)}
                        className="hidden md:block border border-[#ff4929] text-[#ff4929] hover:text-white hover:bg-[#ff4929] transition-all duration-500 rounded-full px-6 py-2 text-xs md:text-base"
                    >
                        Sign up
                    </button>
                )}
            </div>
        </div>
    );
}