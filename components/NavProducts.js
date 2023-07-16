"use client";
import { useEffect, useState } from "react";
import AddToCart from "./AddToCart";
import Link from "next/link";
import { IoMdCart } from "react-icons/io";
import { motion as m } from "framer-motion";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";

const Navbar = () => {
  const cartCount = useSelector((state) => state.allProducts.cartCount);
  const [showCart, setShowCart] = useState(false);
  const [navBg, setNavBg] = useState(0);

  const handleCart = () => {
    setShowCart(true);
  };

  const handleCloseCart = () => {
    setShowCart(false);
  };

  const handleScroll = () => {
    const position = window.scrollY;
    setNavBg(position > 93);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <nav
        className={` fixed top-0 left-0 right-0 z-50 ${navBg > 0 ? "nav-bg" : "bg-transparent"
          }`}
      >
        <div className=" sm:max-w-[90%] max-w-[85%] lg:max-w-[85%] m-auto py-5 ">
          <div className=" flex items-center justify-between ">
            <div className=" flex items-center md:hidden"></div>
            <div className="flex-1 flex sm:justify-between sm:items-stretch  ">
              <div className="flex-shrink-0 flex items-center">
                <m.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.7, delay: 0 }}
                  className="flex-shrink-0 flex items-center"
                >
                  <Link
                    href="/"
                    className="font-playfair text-lg font-bold tracking-widest"
                  >
                    ELEGENCIA
                  </Link>
                </m.div>
              </div>
            </div>
            <m.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0 }}
              whileHover={{ scale: 1.4 }}
              whileTap={{ scale: 1 }}
              className="flex md:gap-8 gap-6 relative"
            >
              <button onClick={handleCart} className="text-4xl">
                <IoMdCart />
              </button>
              {cartCount > 0 && (
                <div className="absolute top-0 right-0  rounded-full bg-red-500 text-white text-xs w-4 h-4  flex justify-center items-center">
                  {cartCount}
                </div>
              )}
            </m.div>
          </div>
        </div>
      </nav>
      {showCart && <AddToCart isopen={showCart} onclose={handleCloseCart} />}
    </>
  );
};

export default Navbar;
