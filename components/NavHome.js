"use client";
import { useEffect, useState } from "react";
import AddToCart from "./AddToCart";
import Link from "next/link";
import { IoMdCart } from "react-icons/io";
import { Slant as Hamburger } from "hamburger-react";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { Link as ScrollLink } from "react-scroll";
import { motion as m } from "framer-motion";
import { useSelector } from "react-redux";

const Navbar = () => {
  const cartCount = useSelector((state) => state.allProducts.cartCount);

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
    { id: "categories", title: "Categories", offset: -85 },
    { id: "testimonials", title: "Testimonials", offset: -88 },
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
          navBg > 0 || isOpen ? "nav-bg " : "bg-transparent  "
        }`}
      >
        <div className=" sm:max-w-[90%] max-w-[85%] lg:max-w-[85%] m-auto py-5 ">
          <div className=" flex items-center justify-between ">
            <div className=" flex items-center md:hidden">
              <m.div
                initial={{ opacity: 0, x: "-100vw" }}
                animate={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: 3.2,
                  type: "spring",
                  stiffness: 45,
                }}
                className="cursor-pointer sm:hidden"
              >
                <Hamburger size={30} toggled={isOpen} toggle={setIsOpen} />
              </m.div>
            </div>
            <div className="flex-1 flex sm:justify-between sm:items-stretch justify-center ">
              <m.div
                initial={{ opacity: 0, x: "-100vw" }}
                animate={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: 2.8,
                  type: "spring",
                  stiffness: 45,
                }}
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
                initial={{ opacity: 0, y: "-100vw" }}
                animate={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.8,
                  delay: 2.3,
                  type: "spring",
                }}
                className="flex"
              >
                <ul className="sm:flex   xl:text-xl  font-mont hidden items-center gap-4 lg:gap-8">
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
                initial={{ opacity: 0, x: "100vw" }}
                animate={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: 3.4,
                  type: "spring",
                  stiffness: 45,
                }}
                className="flex md:gap-8 gap-6  relative"
              >
                <m.div
                  whileHover={{ scale: 1.4 }}
                  whileTap={{ scale: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <m.button
                    onClick={handleCart}
                    className="text-4xl hidden sm:block"
                  >
                    <IoMdCart />
                  </m.button>
                  {cartCount > 0 && (
                    <div className="absolute top-0 right-0  rounded-full bg-red-500 text-white text-xs w-4 h-4  sm:flex  hidden justify-center items-center">
                      {cartCount}
                    </div>
                  )}
                </m.div>
              </m.div>
            </div>

            <m.div
              initial={{ opacity: 0, x: "100vw" }}
              animate={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: 3.7,
                type: "spring",
                stiffness: 45,
              }}
              className="flex md:gap-8 gap-6 sm:hidden relative"
            >
              <m.div
                whileHover={{ scale: 1.4 }}
                whileTap={{ scale: 1 }}
                transition={{ duration: 0.3 }}
              >
                <m.button onClick={handleCart} className="text-3xl">
                  <IoMdCart />
                </m.button>
                {cartCount > 0 && (
                  <div className="absolute top-0 right-0 sm:hidden flex rounded-full bg-red-500 text-white text-xs w-4 h-4   justify-center items-center">
                    {cartCount}
                  </div>
                )}
              </m.div>
            </m.div>
          </div>
        </div>
        {/* mobile */}
        <m.div className={`${isOpen ? "block " : "hidden"} sm:hidden `}>
          <m.div className="px-2 pt-10 pb-3 space-y-1 h-screen">
            <ul
              className="flex  font-mont flex-col items-centeri pl-6  gap-8"
              onClick={toggleMenu}
            >
              {navLiMobile.map(({ id, title, offset }, index) => (
                <m.li
                  initial={{ opacity: 0, x: "-100%" }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{
                    delay: index * 0.35,
                    type: "spring",
                  }}
                  viewport={{ once: true }}
                  key={id}
                  className="tracking-wide text-2xl cursor-pointer"
                >
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
                </m.li>
              ))}
            </ul>
          </m.div>
        </m.div>
      </nav>
      {showCart && <AddToCart isopen={showCart} onclose={handleCloseCart} />}
    </>
  );
};

export default Navbar;
