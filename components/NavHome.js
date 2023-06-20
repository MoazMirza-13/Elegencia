"use client";
import { useEffect, useState } from "react";
import AddToCart from "./AddToCart";
import Link from "next/link";
import { IoMdCart } from "react-icons/io";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { Link as ScrollLink } from "react-scroll";
import { motion as m } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [navBg, setNavBg] = useState(0);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

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
  }, [isOpen]);

  const navLi = [
    { id: "home", title: "Home", offset: -90 },
    { id: "products", title: "Products", offset: -125 },
    { id: "categories", title: "Categories", offset: -60 },
    { id: "testimonials", title: "Testimonials", offset: -60 },
    { id: "contact us", title: "Contact Us" },
  ];
  const navLiMobile = [
    { id: "home", title: "Home", offset: -90 },
    { id: "products", title: "Products", offset: -110 },
    { id: "categories", title: "Categories", offset: -80 },
    { id: "testimonials", title: "Testimonials", offset: -80 },
    { id: "contact us", title: "Contact Us" },
  ];

  return (
    <>
      <nav
        className={` fixed top-0 left-0 right-0 z-50 ${
          navBg > 0 || isOpen ? "nav-bg " : "bg-transparent "
        }`}
      >
        <div className=" sm:max-w-[90%] max-w-[85%] lg:max-w-[85%] m-auto py-5 ">
          <div className=" flex items-center justify-between ">
            <div className=" flex items-center md:hidden">
              <m.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0 }}
                whileHover={{ scale: 1.4 }}
                whileTap={{ scale: 1 }}
                onClick={toggleMenu}
                className="cursor-pointer sm:hidden"
              >
                {isOpen ? (
                  <HiX className="text-3xl" />
                ) : (
                  <HiMenuAlt3 className="text-3xl" />
                )}
              </m.div>
            </div>
            <div className="flex-1 flex sm:justify-between sm:items-stretch justify-center ">
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
              <m.div
                initial={{ opacity: 0, y: -25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0 }}
                className="flex"
              >
                <ul className="sm:flex text-sm lg:text-base xl:text-xl  font-mont hidden items-center gap-4 lg:gap-8">
                  {navLi.map(({ id, title, offset }) => (
                    <li
                      className={`tracking-wide cursor-pointer ${
                        navBg > 0 || isOpen ? "hover:text-white " : ""
                      }`}
                      key={id}
                    >
                      <ScrollLink
                        to={id}
                        smooth={true}
                        delay={200}
                        duration={1900}
                        offset={offset}
                      >
                        {title}
                      </ScrollLink>
                    </li>
                  ))}
                </ul>
              </m.div>

              <m.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0 }}
                whileHover={{ scale: 1.4 }}
                whileTap={{ scale: 1 }}
                className="flex md:gap-8 gap-6"
              >
                <button
                  onClick={handleCart}
                  className="text-3xl hidden sm:block"
                >
                  <IoMdCart />
                </button>
              </m.div>
            </div>

            <m.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0 }}
              whileHover={{ scale: 1.4 }}
              whileTap={{ scale: 1 }}
              className="flex md:gap-8 gap-6 sm:hidden"
            >
              <button onClick={handleCart} className="text-2xl">
                <IoMdCart />
              </button>
            </m.div>
          </div>
        </div>
        {/* mobile */}
        <div className={`${isOpen ? "block " : "hidden"} sm:hidden `}>
          <div className="px-2 pt-10 pb-3 space-y-1 h-screen">
            <ul
              className="flex  font-mont flex-col items-center gap-8"
              onClick={toggleMenu}
            >
              {navLiMobile.map(({ id, title, offset }) => (
                <li className="tracking-wide text-2xl cursor-pointer" key={id}>
                  <ScrollLink
                    onClick={toggleMenu}
                    to={id}
                    smooth={true}
                    delay={200}
                    duration={2300}
                    offset={offset}
                  >
                    {title}
                  </ScrollLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
      {showCart && <AddToCart isopen={showCart} onclose={handleCloseCart} />}
    </>
  );
};

export default Navbar;
