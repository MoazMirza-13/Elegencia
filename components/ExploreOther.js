"use client";

import Link from "next/link";
import Image from "next/image";
import { Element } from "react-scroll";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/swiper.min.css";
import "swiper/swiper-bundle.css";
import slider2Images from "../app/modules/slider2Images.module";
import btn from "../app/modules/btn.module.css";
import { motion as m } from "framer-motion";

export default function ExploreOther() {
  return (
    <>
      <Element name="products">
        <div className="md:max-w-[84%] max-w-[79%] m-auto mt-10">
          <div className="flex items-center sm:gap-4 gap-2">
            <m.h1
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="font-playfair lg:font-semibold md:text-5xl text-[1.5rem] md:leading-[4.563rem] leading-[1.5rem] sm:leading-[2rem] "
            >
              Best Selling Products
            </m.h1>
            <m.div
              initial={{ opacity: 1, width: "0.875rem" }}
              whileInView={{ opacity: 1, width: "38.875rem" }}
              viewport={{ once: true }}
              transition={{ duration: 3, delay: 0.5 }}
              className="lg:block hidden"
            >
              <hr className="w-[38.875rem]i h-[0.388rem] bg-[#D4B78F] rounded-full" />
            </m.div>

            <div className="lg:hidden">
              <hr className="w-[5.875rem] h-[0.388rem] bg-[#D4B78F] rounded-full" />
            </div>
          </div>
          <div className="flex justify-end sm:gap-6 gap-2 mb-6">
            <m.button
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 1 }}
              transition={{ duration: 0.2, delay: 0 }}
              onClick={() => swiper2.slidePrev()}
            >
              <svg
                width="50"
                height="50"
                viewBox="0 0 50 50"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M25 45.8334C36.5059 45.8334 45.8333 36.506 45.8333 25C45.8333 13.4941 36.5059 4.16669 25 4.16669C13.4941 4.16669 4.16666 13.4941 4.16666 25C4.16666 36.506 13.4941 45.8334 25 45.8334Z"
                  stroke="#2B2B2B"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M25 16.6667L16.6667 25L25 33.3334"
                  stroke="#2B2B2B"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M33.3333 25H16.6667"
                  stroke="#2B2B2B"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </m.button>
            <m.button
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 1 }}
              transition={{ duration: 0.2, delay: 0 }}
              onClick={() => swiper2.slideNext()}
            >
              <svg
                width="50"
                height="50"
                viewBox="0 0 50 50"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M25 45.8334C36.5059 45.8334 45.8333 36.506 45.8333 25C45.8333 13.4941 36.5059 4.16669 25 4.16669C13.494 4.16669 4.16663 13.4941 4.16663 25C4.16663 36.506 13.494 45.8334 25 45.8334Z"
                  fill="#C6A372"
                  stroke="#2B2B2B"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M25 33.3334L33.3333 25L25 16.6667"
                  stroke="#2B2B2B"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M16.6666 25H33.3333"
                  stroke="#2B2B2B"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </m.button>
          </div>
          <Swiper
            slidesPerView={2}
            spaceBetween={10}
            loop={true}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            breakpoints={{
              768: {
                slidesPerView: 3,
              },
              1024: {
                slidesPerView: 4,
              },
            }}
            onSwiper={(swiper) => (window.swiper2 = swiper)}
          >
            {slider2Images.map((image, index) => (
              <SwiperSlide key={index}>
                <Image priority src={image} alt="sliderimg" />
              </SwiperSlide>
            ))}
          </Swiper>
          <m.div
            initial={{ opacity: 0, x: "-100%" }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.2,
              delay: 0.7,
              type: "spring",
              stiffness: 50,
            }}
            className="flex justify-center lg:mt-10"
          >
            <Link
              href="./products"
              className={`${btn["btn-3"]} font-semibold text-xl text-white flex items-center justify-center  gap-[0.2rem]`}
            >
              Explore All Products
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
            </Link>
          </m.div>
        </div>
      </Element>
    </>
  );
}
