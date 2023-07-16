"use client";

import heroBg from "../app/modules/bg_image.module.css";
import btn from "../app/modules/btn.module.css";
import { motion as m } from "framer-motion";
import Link from "next/link";
import { Element } from "react-scroll";
import { Link as ScrollLink } from "react-scroll";

export default function Herosection() {
  return (
    <Element name="home">
      <div
        className={`${heroBg["bg-image"]} rounded-tl-none rounded-tr-none rounded-br-3xl rounded-bl-3xl`}
      >
        <div className="lg:pt-[13rem] md:pt-[9rem] pt-28  h-screen max-w-[84%] m-auto flex flex-col lg::gap-8 md:gap-[1.3rem] gap-12">
          <m.h1
            initial={{ x: -30, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="font-playfair md:font-semibold text-4xl lg:text-5xl xl:text-6xl lg:leading-[4.563rem] md:leading-[3.3rem] leading-[3rem] text-center md:text-start"
          >
            Discover Timeless <br />
            Elegance for Your Home
          </m.h1>
          <m.p
            initial={{ y: 18, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="font-mont md:text-xl md:block hidden lg:hidden tracking-wider "
          >
            Uncover Exceptional Furniture Pieces <br /> Crafted with Precision
            and Style
          </m.p>
          <m.p
            initial={{ y: 18, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="font-mont md:text-xl lg:block hidden tracking-wider "
          >
            Uncover Exceptional Furniture Pieces Crafted with Precision and
            Style
          </m.p>
          <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
            <Link href="./products">
              <m.button
                initial={{ opacity: 0, x: 40 }}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 1 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className={`${btn["btn-1"]} font-semibold text-xl border border-solid border-gray-700 md:border-none`}
              >
                Shop Now
              </m.button>
            </Link>
            <ScrollLink
              to="explore"
              smooth={true}
              delay={150}
              duration={1600}
              offset={-50}
            >
              <m.button
                initial={{ opacity: 0, x: -40 }}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 1 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className={`${btn["btn-2"]} font-semibold text-xl `}
              >
                Explore
              </m.button>
            </ScrollLink>
          </div>
        </div>
      </div>
    </Element>
  );
}
