"use client";

import Image from "next/image";
import slider1Images from "../app/modules/slider1Images.module";
import { Element } from "react-scroll";
import { motion as m } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, EffectCoverflow, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import "swiper/css/autoplay";
import "swiper/swiper.min.css";
import "swiper/swiper-bundle.css";

export default function AfterHero() {
  return (
    <Element name="explore">
      <div className="max-w-[90%] m-auto mt-14">
        <m.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
            delay: 0.8,
            type: "spring",
            stiffness: 200,
          }}
          className="max-w-[95%] m-auto flex flex-col items-end"
        >
          <h1 className="font-mont md:font-semibold text-xl">New Furniture</h1>
          <h1 className="font-playfair xl:font-semibold text-[2rem] lg:text-5xl xl:text-6xl lg:leading-[4.563rem] md:leading-[3.3rem] leading-[3rem]">
            JUST ARRIVED
          </h1>
        </m.div>
        <div>
          <div className="lg:flex hidden justify-between relative lg:top-[14.5rem] xl:top-[21.5rem]">
            <m.button
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 1 }}
              transition={{ duration: 0.4, delay: 0 }}
              onClick={() => swiper.slidePrev()}
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
              transition={{ duration: 0.4, delay: 0 }}
              onClick={() => swiper.slideNext()}
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
          <div className="lg:px-[3rem] lg:pb-[3rem]">
            <Swiper
              className="mt-5 md:mt-0  md:max-w-[99%] max-w-[95%]"
              modules={[Navigation, Pagination, EffectCoverflow, Autoplay]}
              initialSlide={2}
              slidesPerView={3}
              effect="coverflow"
              centeredSlides={true}
              loop={true}
              coverflowEffect={{
                rotate: 4,
                stretch: 0,
                depth: 100,
                modifier: 2.5,
              }}
              autoplay={{ delay: 2000, disableOnInteraction: false }}
              pagination={{
                dynamicBullets: true,
                clickable: true,
              }}
              navigation={{
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
              }}
              onSwiper={(swiper) => (window.swiper = swiper)}
            >
              {slider1Images.map((image, index) => (
                <SwiperSlide key={index}>
                  <Image priority src={image} alt="sliderImg" />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </Element>
  );
}
