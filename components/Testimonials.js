"use client";

import Link from "next/link";
import Image from "next/image";
import React from "react";
import btn from "../app/modules/btn.module.css";
import testimonialImg1 from "../public/home-testimonials/image 34.png";
import testimonialImg2 from "../public/home-testimonials/image 35.png";
import testimonialImg3 from "../public/home-testimonials/image 36.png";
import testimonialImg4 from "../public/home-testimonials/image 37.png";
import testimonialImg5 from "../public/home-testimonials/image 30.png";
import testimonialImg6 from "../public/home-testimonials/image 31.png";
import { Element } from "react-scroll";

import { motion as m } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar } from "swiper";
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/swiper.min.css";
import "swiper/swiper-bundle.css";
export default function Testimonials() {
  return (
    <Element name="testimonials">
      <div className="max-w-[85%] md:max-w-[90%]  m-auto mt-10">
        <div className="flex items-center max-w-[84%] m-auto gap-4">
          <m.h1
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="font-playfair lg:font-semibold md:text-5xl text-[1.5rem] md:leading-[4.563rem] leading-[1.5rem] sm:leading-[2rem]"
          >
            Testimonials
          </m.h1>
          <m.div
            initial={{ opacity: 1, width: "0.875rem" }}
            whileInView={{ opacity: 1, width: "38.875rem" }}
            viewport={{ once: true }}
            transition={{ duration: 3, delay: 0.5 }}
          >
            <hr className="w-[38.875rem]i h-[0.388rem] bg-[#D4B78F] rounded-full" />
          </m.div>
        </div>
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          modules={[Scrollbar]}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          scrollbar={{
            hide: false,
          }}
          loop={true}
          onSwiper={(swiper) => (window.swiper3 = swiper)}
        >
          <SwiperSlide>
            <div className="flex items-center lg:gap-8 xl:gap-16 sm:gap-4 md:gap-2 gap-2 pt-8">
              <div className="sm:flex hidden lg:gap-8 sm:gap-4 ">
                <div className="flex items-end">
                  <Image priority alt="testimonial" src={testimonialImg1} />
                </div>
                <div>
                  <Image priority alt="testimonial" src={testimonialImg2} />
                </div>
              </div>

              <div className="flex">
                <m.button
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 1 }}
                  transition={{ duration: 0.2, delay: 0 }}
                  onClick={() => swiper3.slidePrev()}
                  className="pt-8 pr-[0.3rem] hidden md:block"
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
                <div className="bg-[#D4B78F] sm:w-[40.882rem] md:w-[16.882rem] xl:w-[40.882rem] lg:w-[25.882rem] sm:h-[16.265rem] lg:h-[17.265rem] xl:h-[16.265rem] md:h-[16.265rem] lg:p-12  p-8 ">
                  <div className="flex flex-col xl:gap-12 lg:gap-4 gap-2">
                    <h1 className="font-playfair font-medium text-lg">
                      Amanda Collins
                    </h1>
                    <p className=" text-[#888888] text-sm lg::text-base ">
                      "Absolutely delighted with my purchase from Elegencia! I
                      recently bought the Lucid Side Table and it has exceeded
                      all my expectations. The craftsmanship and attention to
                      detail are exceptional"
                    </p>
                  </div>
                </div>
                <m.button
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 1 }}
                  transition={{ duration: 0.2, delay: 0 }}
                  onClick={() => swiper3.slideNext()}
                  className="pt-8 pl-[0.3rem] hidden md:block"
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
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex items-center lg:gap-8 xl:gap-16 sm:gap-4 md:gap-2 gap-2 pt-8">
              <div className="sm:flex hidden lg:gap-8 sm:gap-4 ">
                <div className="flex items-end">
                  <Image priority alt="testimonial" src={testimonialImg4} />
                </div>
                <div>
                  <Image priority alt="testimonial" src={testimonialImg3} />
                </div>
              </div>

              <div className="flex">
                <m.button
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 1 }}
                  transition={{ duration: 0.2, delay: 0 }}
                  onClick={() => swiper3.slidePrev()}
                  className="pt-8 pr-[0.3rem] hidden md:block"
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
                <div className="bg-[#D4B78F] sm:w-[40.882rem] md:w-[16.882rem] xl:w-[40.882rem] lg:w-[25.882rem] sm:h-[16.265rem] lg:h-[17.265rem] xl:h-[16.265rem] md:h-[16.265rem] lg:p-12  p-8 ">
                  <div className="flex flex-col xl:gap-12 lg:gap-4 gap-2">
                    <h1 className="font-playfair font-medium text-lg">
                      Bruce Wayne
                    </h1>
                    <p className=" text-[#888888] text-sm lg::text-base ">
                      "Absolutely delighted with my purchase from Elegencia! I
                      recently bought the Lucid Side Table and it has exceeded
                      all my expectations. The craftsmanship and attention to
                      detail are exceptional"
                    </p>
                  </div>
                </div>
                <m.button
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 1 }}
                  transition={{ duration: 0.2, delay: 0 }}
                  onClick={() => swiper3.slideNext()}
                  className="pt-8 pl-[0.3rem] hidden md:block"
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
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex items-center lg:gap-8 xl:gap-16 sm:gap-4 md:gap-2 gap-2 pt-8">
              <div className="sm:flex hidden lg:gap-8 sm:gap-4 ">
                <div className="flex items-end">
                  <Image priority alt="testimonial" src={testimonialImg5} />
                </div>
                <div>
                  <Image priority alt="testimonial" src={testimonialImg6} />
                </div>
              </div>

              <div className="flex">
                <m.button
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 1 }}
                  transition={{ duration: 0.2, delay: 0 }}
                  onClick={() => swiper3.slidePrev()}
                  className="pt-8 pr-[0.3rem] hidden md:block"
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
                <div className="bg-[#D4B78F] sm:w-[40.882rem] md:w-[16.882rem] xl:w-[40.882rem] lg:w-[25.882rem] sm:h-[16.265rem] lg:h-[17.265rem] xl:h-[16.265rem] md:h-[16.265rem] lg:p-12  p-8 ">
                  <div className="flex flex-col xl:gap-12 lg:gap-4 gap-2">
                    <h1 className="font-playfair font-medium text-lg">
                      Amanda Collins
                    </h1>
                    <p className=" text-[#888888] text-sm lg::text-base ">
                      "Absolutely delighted with my purchase from Elegencia! I
                      recently bought the Lucid Side Table and it has exceeded
                      all my expectations. The craftsmanship and attention to
                      detail are exceptional"
                    </p>
                  </div>
                </div>
                <m.button
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 1 }}
                  transition={{ duration: 0.2, delay: 0 }}
                  onClick={() => swiper3.slideNext()}
                  className="pt-8 pl-[0.3rem] hidden md:block"
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
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex items-center lg:gap-8 xl:gap-16 sm:gap-4 md:gap-2 gap-2 pt-8">
              <div className="sm:flex hidden lg:gap-8 sm:gap-4 ">
                <div className="flex items-end">
                  <Image priority alt="testimonial" src={testimonialImg4} />
                </div>
                <div>
                  <Image priority alt="testimonial" src={testimonialImg3} />
                </div>
              </div>

              <div className="flex">
                <m.button
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 1 }}
                  transition={{ duration: 0.2, delay: 0 }}
                  onClick={() => swiper3.slidePrev()}
                  className="pt-8 pr-[0.3rem] hidden md:block"
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
                <div className="bg-[#D4B78F] sm:w-[40.882rem] md:w-[16.882rem] xl:w-[40.882rem] lg:w-[25.882rem] sm:h-[16.265rem] lg:h-[17.265rem] xl:h-[16.265rem] md:h-[16.265rem] lg:p-12  p-8 ">
                  <div className="flex flex-col xl:gap-12 lg:gap-4 gap-2">
                    <h1 className="font-playfair font-medium text-lg">
                      Bruce Wayne
                    </h1>
                    <p className=" text-[#888888] text-sm lg::text-base ">
                      "Absolutely delighted with my purchase from Elegencia! I
                      recently bought the Lucid Side Table and it has exceeded
                      all my expectations. The craftsmanship and attention to
                      detail are exceptional"
                    </p>
                  </div>
                </div>
                <m.button
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 1 }}
                  transition={{ duration: 0.2, delay: 0 }}
                  onClick={() => swiper3.slideNext()}
                  className="pt-8 pl-[0.3rem] hidden md:block"
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
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex items-center lg:gap-8 xl:gap-16 sm:gap-4 md:gap-2 gap-2 pt-8">
              <div className="sm:flex hidden lg:gap-8 sm:gap-4 ">
                <div className="flex items-end">
                  <Image priority alt="testimonial" src={testimonialImg1} />
                </div>
                <div>
                  <Image priority alt="testimonial" src={testimonialImg2} />
                </div>
              </div>

              <div className="flex">
                <m.button
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 1 }}
                  transition={{ duration: 0.2, delay: 0 }}
                  onClick={() => swiper3.slidePrev()}
                  className="pt-8 pr-[0.3rem] hidden md:block"
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
                <div className="bg-[#D4B78F] sm:w-[40.882rem] md:w-[16.882rem] xl:w-[40.882rem] lg:w-[25.882rem] sm:h-[16.265rem] lg:h-[17.265rem] xl:h-[16.265rem] md:h-[16.265rem] lg:p-12  p-8 ">
                  <div className="flex flex-col xl:gap-12 lg:gap-4 gap-2">
                    <h1 className="font-playfair font-medium text-lg">
                      Amanda Collins
                    </h1>
                    <p className=" text-[#888888] text-sm lg::text-base ">
                      "Absolutely delighted with my purchase from Elegencia! I
                      recently bought the Lucid Side Table and it has exceeded
                      all my expectations. The craftsmanship and attention to
                      detail are exceptional"
                    </p>
                  </div>
                </div>
                <m.button
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 1 }}
                  transition={{ duration: 0.2, delay: 0 }}
                  onClick={() => swiper3.slideNext()}
                  className="pt-8 pl-[0.3rem] hidden md:block"
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
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex items-center lg:gap-8 xl:gap-16 sm:gap-4 md:gap-2 gap-2 pt-8">
              <div className="sm:flex hidden lg:gap-8 sm:gap-4 ">
                <div className="flex items-end">
                  <Image priority alt="testimonial" src={testimonialImg5} />
                </div>
                <div>
                  <Image priority alt="testimonial" src={testimonialImg6} />
                </div>
              </div>

              <div className="flex">
                <m.button
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 1 }}
                  transition={{ duration: 0.2, delay: 0 }}
                  onClick={() => swiper3.slidePrev()}
                  className="pt-8 pr-[0.3rem] hidden md:block"
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
                <div className="bg-[#D4B78F] sm:w-[40.882rem] md:w-[16.882rem] xl:w-[40.882rem] lg:w-[25.882rem] sm:h-[16.265rem] lg:h-[17.265rem] xl:h-[16.265rem] md:h-[16.265rem] lg:p-12  p-8 ">
                  <div className="flex flex-col xl:gap-12 lg:gap-4 gap-2">
                    <h1 className="font-playfair font-medium text-lg">
                      Amanda Collins
                    </h1>
                    <p className=" text-[#888888] text-sm lg::text-base ">
                      "Absolutely delighted with my purchase from Elegencia! I
                      recently bought the Lucid Side Table and it has exceeded
                      all my expectations. The craftsmanship and attention to
                      detail are exceptional"
                    </p>
                  </div>
                </div>
                <m.button
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 1 }}
                  transition={{ duration: 0.2, delay: 0 }}
                  onClick={() => swiper3.slideNext()}
                  className="pt-8 pl-[0.3rem] hidden md:block"
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
            </div>
          </SwiperSlide>
        </Swiper>
        <div className="flex justify-center mt-6 lg:mt-10">
          <Link href="./Reviews">
            <m.button
              initial={{ opacity: 0, x: "-100%" }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0,
                delay: 0.7,
                type: "spring",
                stiffness: 50,
              }}
              className={`${btn["btn-3"]} font-semibold text-xl text-white flex items-center justify-center  gap-[0.2rem]`}
            >
              See All Reviews
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
            </m.button>
          </Link>
        </div>
      </div>
    </Element>
  );
}
