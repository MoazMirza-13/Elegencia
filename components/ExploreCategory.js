"use client";

import Link from "next/link";
import Image from "next/image";
import btn from "../app/modules/btn.module.css";
import categoryImg1 from "../public/explore-category/Rectangle 82.png";
import categoryImg2 from "../public/explore-category/Rectangle 83.png";
import categoryImg3 from "../public/explore-category/image 24.png";
import categoryImg4 from "../public/explore-category/Rectangle 85.png";
import categoryImg5 from "../public/explore-category/Rectangle 86.png";
import categoryImg6 from "../public/explore-category/Rectangle 87.png";
import { Element } from "react-scroll";
import { motion as m } from "framer-motion";
export default function ExploreCategory() {
  return (
    <Element name="categories">
      <div className="md:max-w-[84%] max-w-[79%] m-auto lg:mt-32 mt-24">
        <div className="flex flex-row-reverse items-center gap-4">
          <m.h1
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="font-playfair  lg:font-semibold md:text-5xl text-[1.5rem] md:leading-[4.563rem] leading-[1.5rem] sm:leading-[2rem]"
          >
            Explore By Category
          </m.h1>
          <m.div
            initial={{ opacity: 1, width: "0.875rem" }}
            whileInView={{ opacity: 1, width: "38.875rem" }}
            viewport={{ once: true }}
            transition={{ duration: 3, delay: 0.3 }}
          >
            <hr className="w-[38.875rem]i h-[0.388rem] bg-[#D4B78F] rounded-full" />
          </m.div>
        </div>
        <div className="flex lg:gap-8 gap-2 mt-8">
          <div className="flex flex-col lg:gap-8 gap-4">
            <Link href={`./products?category=Decent Table`}>
              <div className="relative group">
                <Image
                  priority
                  alt="category"
                  src={categoryImg1}
                  className="w-full"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="text-white text-center lg:font-semibold lg:text-xl">
                    Decent Table
                  </h3>
                </div>
              </div>
            </Link>
            <Link href={`./products?category=Simple Solid Sofa`}>
              <div className="relative group">
                <Image
                  priority
                  alt="category"
                  src={categoryImg3}
                  className="w-full"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="text-white text-center lg:font-semibold lg:text-xl">
                    Simple Solid Sofa
                  </h3>
                </div>
              </div>
            </Link>
          </div>
          <div className="flex flex-col lg:gap-8 gap-4">
            <Link href={`./products?category=Modern Sofa`}>
              <div className="relative group">
                <Image
                  priority
                  alt="category"
                  src={categoryImg2}
                  className="w-full"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="text-white text-center lg:font-semibold lg:text-xl">
                    Modern Sofa
                  </h3>
                </div>
              </div>
            </Link>
            <Link href={`./products?category=Family Hall`}>
              <div className="relative group">
                <Image
                  priority
                  alt="category"
                  src={categoryImg4}
                  className="w-full"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="text-white text-center lg:font-semibold lg:text-xl">
                    Family Hall
                  </h3>
                </div>
              </div>
            </Link>
            <div className="flex lg:gap-8 gap-4">
              <Link href={`./products?category=Bedroom`}>
                <div className="relative group">
                  <Image
                    priority
                    alt="category"
                    src={categoryImg5}
                    className="w-full"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <h3 className="text-white text-center lg:font-semibold text-sm sm:text-base lg:text-xl">
                      Bedroom
                    </h3>
                  </div>
                </div>
              </Link>
              <Link href={`./products?category=Kitchen`}>
                <div className="relative group">
                  <Image
                    priority
                    alt="category"
                    src={categoryImg6}
                    className="w-full"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <h3 className="text-white text-center lg:font-semibold lg:text-xl">
                      Kitchen
                    </h3>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
        <m.div
          initial={{ opacity: 0, x: "-100%" }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.2,
            delay: 0.8,
            type: "spring",
            stiffness: 50,
          }}
          className="flex justify-center mt-6 lg:mt-10"
        >
          <Link href="./products">
            <button
              className={`${btn["btn-4"]} w-[260.71px] md:w-[291.71px;] font-semibold text-xl text-white flex items-center justify-center  gap-[0.2rem]`}
            >
              Explore All Categories
              <svg
                width="25"
                height="25"
                viewBox="0 0 25 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.85364 12.0554H19.8536"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12.8536 5.05542L19.8536 12.0554L12.8536 19.0554"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </Link>
        </m.div>
      </div>
    </Element>
  );
}
