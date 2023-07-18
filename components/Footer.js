import { Element } from "react-scroll";
import ScrollUpButton from "react-scroll-up";
import { motion as m } from "framer-motion";
export default function Footer() {
  return (
    <>
      <Element name="contact us">
        <div className=" bg-[#D4B78F] md:pt-12 p-8 px-4 md:px-12  pb-4">
          <div className="max-w-[85%] m-auto flex flex-col gap-6  items-center sm:items-start justify-center sm:justify-start text-center sm:text-start">
            <m.h1
              initial={{ opacity: 0, x: 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.4,
                type: "spring",
                stiffness: 120,
                delay: 0.5,
              }}
              className="font-playfair text-lg font-bold tracking-widest"
            >
              ELEGENCIA
            </m.h1>
            <div className="flex justify-between sm:w-full  ">
              <m.div
                initial={{ opacity: 0, x: -50, y: -35 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.4,
                  type: "spring",
                  stiffness: 120,
                  delay: 1.5,
                }}
                className="flex flex-col gap-2 md:gap-4"
              >
                <h1 className="font-mont font-bold text-sm">Address</h1>
                <ul className="font-mont text-sm flex flex-col gap-[0.4rem] text-[#2b2b2b]">
                  <li>Canada</li>
                  <li>Toronto</li>
                  <li>+12324557890</li>
                </ul>
              </m.div>
              <m.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.4,
                  type: "spring",
                  stiffness: 120,
                  delay: 1,
                }}
                className="flex flex-col gap-2 md:gap-4"
              >
                <h1 className="font-mont font-bold text-sm">Help</h1>
                <ul className="font-mont text-sm flex flex-col gap-[0.4rem] text-[#2b2b2b]">
                  <li>Shipping</li>
                  <li>Returns</li>
                  <li>Sizing</li>
                </ul>
              </m.div>

              <m.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.4,
                  type: "spring",
                  stiffness: 120,
                  delay: 1,
                }}
                className="flex-col gap-4 hidden sm:flex"
              >
                <h1 className="font-mont font-bold text-sm">Shop</h1>
                <ul className="font-mont text-sm flex flex-col gap-[0.4rem] text-[#2b2b2b]">
                  <li>All Products</li>
                  <li>Bedroom</li>
                  <li>Dinning Room</li>
                </ul>
              </m.div>
              <m.div
                initial={{ opacity: 0, x: 50, y: -35 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.4,
                  type: "spring",
                  stiffness: 120,
                  delay: 1.5,
                }}
                className="flex-col gap-4 hidden sm:flex"
              >
                <h1 className="font-mont font-bold text-sm">Legal Stuff</h1>
                <ul className="font-mont text-sm flex flex-col gap-[0.4rem] text-[#2b2b2b]">
                  <li>Shipping & Delivery</li>
                  <li>Terms & Conditions</li>
                  <li>Privacy & Policy</li>
                </ul>
              </m.div>
            </div>
            {/*  */}
            <m.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, type: "spring", stiffness: 120 }}
              className="flex flex-col gap-2 md:gap-4 sm:hidden"
            >
              <h1 className="font-mont font-bold text-sm">Shop</h1>
              <ul className="font-mont text-sm flex flex-col gap-[0.4rem] text-[#2b2b2b]">
                <li>All Products</li>
                <li>Bedroom</li>
                <li>Dinning Room</li>
              </ul>
            </m.div>
            <m.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, type: "spring", stiffness: 120 }}
              className="flex flex-col gap-2 md:gap-4 sm:hidden"
            >
              <h1 className="font-mont font-bold text-sm">Legal Stuff</h1>
              <ul className="font-mont text-sm flex flex-col gap-[0.4rem] text-[#2b2b2b]">
                <li>Shipping & Delivery</li>
                <li>Terms & Conditions</li>
                <li>Privacy & Policy</li>
              </ul>
            </m.div>
            {/*  */}
          </div>

          <div className="flex flex-col gap-8 pt-6">
            <hr className="border border-1 border-gray-600" />
            <m.p
              initial={{ opacity: 0, x: -80 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.4,
                type: "spring",
                stiffness: 120,
                delay: 1.7,
              }}
              className="font-mont font-medium text-center text-xs text-[#646464]"
            >
              Copyright 2023, ELEGENCIA, All rights reserved
            </m.p>
          </div>
        </div>
        <ScrollUpButton showUnder={500} duration={2400} easing="easeInOutQuint">
          <m.div
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 1 }}
            transition={{ duration: 0.3, delay: 0 }}
            className="fixed right-0 xl:right-[2rem] lg:right-[0.6rem]  bottom-[4rem] "
          >
            <svg
              className="w-[1.5rem] md:w-auto"
              width="44"
              height="44"
              viewBox="0 0 44 44"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <m.path
                initial={{ opacity: 0, pathLength: 0 }}
                animate={{ opacity: 1, pathLength: 1 }}
                transition={{ duration: 2 }}
                d="M40.2955 21.9797C40.2955 11.8639 32.095 3.66351 21.9793 3.66351C11.8635 3.66351 3.66309 11.8639 3.66309 21.9797C3.66309 32.0955 11.8635 40.2959 21.9793 40.2959C32.095 40.2959 40.2955 32.0955 40.2955 21.9797Z"
                fill="#E1B373"
                stroke="#2B2B2B"
                strokeWidth="1.75835"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <m.path
                initial={{ opacity: 0, pathLength: 0 }}
                animate={{ opacity: 1, pathLength: 1 }}
                transition={{ duration: 2 }}
                d="M29.3057 21.9795L21.9792 14.653L14.6527 21.9795"
                stroke="#2B2B2B"
                strokeWidth="1.75835"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <m.path
                initial={{ opacity: 0, pathLength: 0 }}
                animate={{ opacity: 1, pathLength: 1 }}
                transition={{ duration: 2 }}
                d="M21.9794 29.3057V14.6527"
                stroke="#2B2B2B"
                strokeWidth="1.75835"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </m.div>
        </ScrollUpButton>
      </Element>
    </>
  );
}
