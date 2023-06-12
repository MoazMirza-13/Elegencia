"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  EffectCoverflow,
  Autoplay,
  Scrollbar,
} from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import "swiper/css/autoplay";
import "swiper/swiper.min.css";
import "swiper/swiper-bundle.css";
// slider#1
import sliderImg1 from "../public/after-hero-slider/image 8.png";
import sliderImg2 from "../public/after-hero-slider/image 9.png";
import sliderImg3 from "../public/after-hero-slider/image 11.png";
import sliderImg4 from "../public/after-hero-slider/image 10.png";
import sliderImg5 from "../public/after-hero-slider/image 15.png";
import sliderImg6 from "../public/after-hero-slider/image 18.png";
import sliderImg7 from "../public/after-hero-slider/image 17.png";
import sliderImg8 from "../public/after-hero-slider/image 14.png";
import sliderImg9 from "../public/after-hero-slider/image 19.png";
// slider#2
import slider_2Img1 from "../public/best-selling-slider/image 20.png";
import slider_2Img2 from "../public/best-selling-slider/image 24.png";
import slider_2Img3 from "../public/best-selling-slider/image 22.png";
import slider_2Img4 from "../public/best-selling-slider/image 25.png";
import slider_2Img5 from "../public/best-selling-slider/image 26.png";
import slider_2Img6 from "../public/best-selling-slider/image 23.png";
import slider_2Img7 from "../public/best-selling-slider/image 21.png";
import slider_2Img8 from "../public/best-selling-slider/image 27.png";
import slider_2Img9 from "../public/best-selling-slider/image 28.png";
// explore-category
import categoryImg1 from "../public/explore-category/Rectangle 82.png";
import categoryImg2 from "../public/explore-category/Rectangle 83.png";
import categoryImg3 from "../public/explore-category/image 24.png";
import categoryImg4 from "../public/explore-category/Rectangle 85.png";
import categoryImg5 from "../public/explore-category/Rectangle 86.png";
import categoryImg6 from "../public/explore-category/Rectangle 87.png";
// testimonilas
import testimonialImg1 from "../public/home-testimonials/image 34.png";
import testimonialImg2 from "../public/home-testimonials/image 35.png";
import testimonialImg3 from "../public/home-testimonials/image 36.png";
import testimonialImg4 from "../public/home-testimonials/image 37.png";
import testimonialImg5 from "../public/home-testimonials/image 30.png";
import testimonialImg6 from "../public/home-testimonials/image 31.png";
// importing css styles
import heroBg from "../app/modules/bg_image.module.css";
import btn from "../app/modules/btn.module.css";

export default function Home() {
  return (
    <>
      {/* hero-section */}
      <div
        className={`${heroBg["bg-image"]} rounded-tl-none rounded-tr-none rounded-br-3xl rounded-bl-3xl`}
      >
        <div className="lg:pt-[13rem] md:pt-[7rem] pt-28  h-screen max-w-[84%] m-auto flex flex-col lg::gap-8 md:gap-[1.3rem] gap-12">
          <h1 className="font-playfair md:font-semibold text-4xl lg:text-5xl xl:text-6xl lg:leading-[4.563rem] md:leading-[3.3rem] leading-[3rem] text-center md:text-start">
            Discover Timeless <br />
            Elegance for Your Home
          </h1>
          <p className="font-mont md:text-xl md:block hidden lg:hidden tracking-wider ">
            Uncover Exceptional Furniture Pieces <br /> Crafted with Precision
            and Style
          </p>
          <p className="font-mont md:text-xl lg:block hidden tracking-wider ">
            Uncover Exceptional Furniture Pieces Crafted with Precision and
            Style
          </p>
          <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
            <button
              className={`${btn["btn-1"]} font-semibold text-xl border border-solid border-gray-700 md:border-none`}
            >
              Shop Now
            </button>
            <button className={`${btn["btn-2"]} font-semibold text-xl `}>
              Explore
            </button>
          </div>
        </div>
      </div>
      {/* after-hero */}
      {/* <div className="max-w-[90%] m-auto mt-14">
        <div className="max-w-[95%] m-auto flex flex-col items-end">
          <h1 className="font-mont font-semibold text-xl">New Furniture</h1>
          <h1 className="font-playfair font-semibold text-5xl leading-[4.563rem]">
            JUST ARRIVED
          </h1>
        </div>
        <div className="">
          <div className="flex justify-between relative top-[20rem]">
            <button onClick={() => swiper.slidePrev()}>
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
            </button>
            <button onClick={() => swiper.slideNext()}>
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
            </button>
          </div>
          <Swiper
            style={{ padding: "0 3rem 3rem 3rem", maxWidth: "93%" }}
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
            <SwiperSlide>
              <Image src={sliderImg1} alt="sliderImg" />
            </SwiperSlide>
            <SwiperSlide>
              <Image src={sliderImg2} alt="sliderImg" />
            </SwiperSlide>
            <SwiperSlide>
              <Image src={sliderImg3} alt="sliderImg" />
            </SwiperSlide>
            <SwiperSlide>
              <Image src={sliderImg4} alt="sliderImg" />
            </SwiperSlide>
            <SwiperSlide>
              <Image src={sliderImg5} alt="sliderImg" />
            </SwiperSlide>
            <SwiperSlide>
              <Image src={sliderImg6} alt="sliderImg" />
            </SwiperSlide>
            <SwiperSlide>
              <Image src={sliderImg7} alt="sliderImg" />
            </SwiperSlide>
            <SwiperSlide>
              <Image priority={false} src={sliderImg8} alt="sliderImg" />
            </SwiperSlide>
            <SwiperSlide>
              <Image src={sliderImg9} alt="sliderImg" />
            </SwiperSlide>
          </Swiper>
        </div>
      </div> */}
      {/* best selling */}
      {/* <div className="max-w-[84%] m-auto mt-10">
        <div className="flex items-center gap-4">
          <h1 className="font-playfair font-semibold text-5xl leading-[4.563rem]">
            Best Selling Products
          </h1>
          <hr className="w-[38.875rem] h-[0.188rem] bg-[#D4B78F] rounded-full" />
        </div>
        <div className="flex justify-end gap-6 mb-6">
          <button onClick={() => swiper2.slidePrev()}>
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
          </button>
          <button onClick={() => swiper2.slideNext()}>
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
          </button>
        </div>
        <Swiper
          slidesPerView={4}
          spaceBetween={2}
          loop={true}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          onSwiper={(swiper) => (window.swiper2 = swiper)}
        >
          <SwiperSlide>
            <Image alt="slider image" src={slider_2Img1} />
          </SwiperSlide>
          <SwiperSlide>
            <Image priority="true" alt="slider image" src={slider_2Img2} />
          </SwiperSlide>
          <SwiperSlide>
            <Image alt="slider image" src={slider_2Img3} />
          </SwiperSlide>
          <SwiperSlide>
            <Image alt="slider image" src={slider_2Img4} />
          </SwiperSlide>
          <SwiperSlide>
            <Image alt="slider image" src={slider_2Img5} />
          </SwiperSlide>
          <SwiperSlide>
            <Image alt="slider image" src={slider_2Img6} />
          </SwiperSlide>
          <SwiperSlide>
            <Image alt="slider image" src={slider_2Img7} />
          </SwiperSlide>
          <SwiperSlide>
            <Image alt="slider image" src={slider_2Img8} />
          </SwiperSlide>
          <SwiperSlide>
            <Image alt="slider image" src={slider_2Img9} />
          </SwiperSlide>
        </Swiper>
        <div className="flex justify-center mt-10">
          <button
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
          </button>
        </div>
      </div> */}
      {/* category */}
      {/* <div className="max-w-[84%] m-auto mt-10">
        <div className="flex flex-row-reverse items-center gap-4">
          <h1 className="font-playfair font-semibold text-5xl leading-[4.563rem]">
            Explore By Category
          </h1>
          <hr className="w-[38.875rem] h-[0.188rem] bg-[#D4B78F] rounded-full" />
        </div>
        <div className="flex gap-8 mt-8">
          <div className="flex flex-col gap-8">
            <div className="relative group">
              <Image alt="category" src={categoryImg1} className="w-full" />
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-white text-center font-semibold text-xl">
                  Decent Table
                </h3>
              </div>
            </div>
            <div className="relative group">
              <Image alt="category" src={categoryImg3} className="w-full" />
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-white text-center font-semibold text-xl">
                  Simple Solid Sofa
                </h3>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-8">
            <div className="relative group">
              <Image alt="category" src={categoryImg2} className="w-full" />
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-white text-center font-semibold text-xl">
                  Modern Sofa
                </h3>
              </div>
            </div>
            <div className="relative group">
              <Image alt="category" src={categoryImg4} className="w-full" />
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-white text-center font-semibold text-xl">
                  Family Hall
                </h3>
              </div>
            </div>
            <div className="flex gap-8">
              <div className="relative group">
                <Image alt="category" src={categoryImg5} className="w-full" />
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="text-white text-center font-semibold text-xl">
                    Bedroom
                  </h3>
                </div>
              </div>
              <div className="relative group">
                <Image alt="category" src={categoryImg6} className="w-full" />
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="text-white text-center font-semibold text-xl">
                    Kitchen
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-10">
          <button
            className={`${btn["btn-4"]} font-semibold text-xl text-white flex items-center justify-center  gap-[0.2rem]`}
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
        </div>
      </div> */}
      {/* expediency */}
      {/* <div className="bg-[#D4B78F] flex flex-col items-center mt-20 gap-12 p-12">
        <h1 className="font-playfair font-bold text-6xl leading-[4.563rem]">
          Benefits for your expediency
        </h1>
        <div className="flex gap-[16rem]">
          <div className="flex flex-col gap-4 items-center text-center">
            <svg
              width="81"
              height="82"
              viewBox="0 0 81 82"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="0.0427246"
                y="0.463623"
                width="80.6062"
                height="80.6062"
                rx="17.9125"
                fill="#E2DDFF"
              />
              <g clipPath="url(#clip0_95_178)">
                <path
                  d="M32.0739 54.2381C32.061 54.1747 32.0422 54.1122 32.0174 54.0518C31.9926 53.9923 31.9619 53.9348 31.9262 53.8813C31.8905 53.8268 31.8489 53.7762 31.8033 53.7306C31.7577 53.685 31.7071 53.6434 31.6526 53.6077C31.5991 53.572 31.5416 53.5413 31.4811 53.5165C31.4216 53.4917 31.3592 53.4719 31.2958 53.46C31.1679 53.4342 31.036 53.4342 30.9092 53.46C30.8457 53.4719 30.7833 53.4917 30.7228 53.5165C30.6633 53.5413 30.6058 53.572 30.5523 53.6077C30.4978 53.6434 30.4472 53.685 30.4016 53.7306C30.356 53.7762 30.3144 53.8268 30.2787 53.8813C30.2421 53.9348 30.2123 53.9923 30.1875 54.0518C30.1628 54.1122 30.1429 54.1747 30.131 54.2381C30.1181 54.3016 30.1112 54.367 30.1112 54.4314C30.1112 54.4959 30.1181 54.5613 30.131 54.6247C30.1429 54.6882 30.1628 54.7506 30.1875 54.8101C30.2123 54.8706 30.2421 54.928 30.2787 54.9816C30.3144 55.0361 30.356 55.0866 30.4016 55.1322C30.4472 55.1778 30.4978 55.2195 30.5523 55.2552C30.6058 55.2909 30.6633 55.3217 30.7228 55.3465C30.7833 55.3712 30.8457 55.3911 30.9092 55.403C30.9726 55.4158 31.038 55.4228 31.1025 55.4228C31.1669 55.4228 31.2323 55.4158 31.2958 55.403C31.3592 55.3911 31.4216 55.3712 31.4811 55.3465C31.5416 55.3217 31.5991 55.2908 31.6526 55.2552C31.7071 55.2195 31.7577 55.1778 31.8033 55.1322C31.8489 55.0866 31.8905 55.0361 31.9262 54.9816C31.9619 54.928 31.9926 54.8706 32.0174 54.8101C32.0422 54.7506 32.061 54.6882 32.0739 54.6247C32.0868 54.5613 32.0937 54.4959 32.0937 54.4314C32.0937 54.367 32.0868 54.3016 32.0739 54.2381Z"
                  fill="#A37B44"
                />
                <path
                  d="M60.5667 54.5434C60.5629 54.5335 60.5589 54.5237 60.5547 54.514C59.6424 52.3791 57.5027 51.5901 54.9704 52.4549L48.0646 54.3647C47.6653 53.1555 46.6694 52.1266 45.2612 51.604C45.2525 51.6009 45.2438 51.5977 45.2349 51.5947L37.6438 49.0183C37.012 48.2016 35.0329 46.1118 31.3273 46.1118C28.7376 46.1118 26.4468 47.8883 25.1361 49.8247H15.9611C15.4136 49.8247 14.9698 50.2685 14.9698 50.816V63.3134C14.9698 63.8609 15.4136 64.3046 15.9611 64.3046H21.8548C22.4023 64.3046 22.846 63.8609 22.846 63.3134V62.4575H25.6099C26.1574 62.4575 26.6012 62.0138 26.6012 61.4663V61.181C28.2124 61.3216 28.7423 61.6272 30.222 62.4804C31.36 63.1367 33.0799 64.1284 36.1772 65.521C36.1916 65.5274 36.2061 65.5336 36.2207 65.5393C36.8152 65.7732 37.9772 66.1405 39.4099 66.1405C40.4071 66.1405 41.5356 65.9624 42.694 65.4373L57.9583 59.972C57.9855 59.9623 58.0123 59.9514 58.0384 59.9393C59.4973 59.2681 61.6712 57.3765 60.5667 54.5434ZM20.8635 62.322H16.9524V51.8071H20.8635V62.322ZM24.6187 60.4749H22.846V51.8071H24.6187V60.4749ZM57.2463 58.121L41.9888 63.5839C41.9754 63.5887 41.9573 63.5958 41.9441 63.6012C41.9307 63.6066 41.9173 63.6124 41.9041 63.6184C39.7792 64.595 37.7593 64.0103 36.9677 63.7026C33.9759 62.3563 32.3791 61.4356 31.2124 60.7628C29.5903 59.8275 28.8087 59.3766 26.6012 59.1943V51.2106C27.5408 49.6706 29.3629 48.0942 31.3274 48.0942C34.6963 48.0942 36.1238 50.2854 36.1799 50.3738C36.3009 50.5707 36.4869 50.7191 36.7057 50.7933L44.5837 53.4671C45.8419 53.9393 46.5068 55.0168 46.2012 56.0913C46.0602 56.5876 45.7342 56.9991 45.2836 57.2502C44.8369 57.4991 44.3204 57.5607 43.8282 57.4245L34.9472 54.6101C34.425 54.4447 33.8682 54.7337 33.7028 55.2556C33.5374 55.7775 33.8264 56.3346 34.3483 56.5L43.2447 59.3192C43.2541 59.3222 43.2635 59.3251 43.2731 59.3278C43.6282 59.4288 43.9898 59.4787 44.3493 59.4787C45.0072 59.4787 45.658 59.3111 46.2486 58.982C47.1618 58.4732 47.8222 57.6392 48.1081 56.6335C48.1309 56.5533 48.1511 56.473 48.1686 56.3927L55.6113 54.3309C56.6862 53.9637 58.0972 53.8314 58.7255 55.2783C59.3757 56.977 57.6857 57.9115 57.2463 58.121Z"
                  fill="#A37B44"
                />
                <path
                  d="M50.5617 28.43C50.5488 28.3666 50.53 28.3041 50.5042 28.2437C50.4794 28.1842 50.4497 28.1267 50.413 28.0732C50.3773 28.0187 50.3357 27.9681 50.2901 27.9225C50.2445 27.8769 50.1939 27.8353 50.1394 27.7996C50.0859 27.7639 50.0284 27.7332 49.9689 27.7084C49.9085 27.6836 49.846 27.6638 49.7836 27.6519C49.6557 27.6261 49.5239 27.6261 49.396 27.6519C49.3325 27.6638 49.2701 27.6836 49.2106 27.7084C49.1501 27.7332 49.0927 27.7639 49.0391 27.7996C48.9846 27.8353 48.9341 27.8769 48.8885 27.9225C48.8429 27.9681 48.8012 28.0187 48.7655 28.0732C48.7299 28.1267 48.6991 28.1842 48.6743 28.2437C48.6496 28.3041 48.6297 28.3666 48.6178 28.43C48.605 28.4935 48.598 28.5589 48.598 28.6233C48.598 28.6878 48.605 28.7532 48.6178 28.8166C48.6297 28.8801 48.6496 28.9425 48.6743 29.002C48.6991 29.0624 48.7299 29.1199 48.7655 29.1735C48.8012 29.228 48.8429 29.2785 48.8885 29.3241C48.9341 29.3697 48.9846 29.4114 49.0391 29.4471C49.0927 29.4827 49.1501 29.5135 49.2106 29.5383C49.2701 29.563 49.3325 29.5819 49.396 29.5948C49.4594 29.6076 49.5248 29.6146 49.5893 29.6146C49.6537 29.6146 49.7191 29.6076 49.7836 29.5948C49.846 29.5819 49.9085 29.563 49.9689 29.5383C50.0284 29.5135 50.0859 29.4827 50.1394 29.4471C50.1939 29.4114 50.2445 29.3697 50.2901 29.3241C50.3357 29.2785 50.3773 29.228 50.413 29.1735C50.4497 29.1199 50.4794 29.0624 50.5042 29.002C50.53 28.9425 50.5488 28.8801 50.5617 28.8166C50.5746 28.7532 50.5805 28.6878 50.5805 28.6233C50.5805 28.5589 50.5746 28.4935 50.5617 28.43Z"
                  fill="#A37B44"
                />
                <path
                  d="M64.7306 18.7502H58.837C58.2895 18.7502 57.8457 19.194 57.8457 19.7415V20.5973H55.0818C54.5343 20.5973 54.0905 21.0411 54.0905 21.5886V21.8738C52.4794 21.7332 51.9494 21.4277 50.4698 20.5744C49.3318 19.9182 47.6119 18.9265 44.5146 17.5338C44.5002 17.5273 44.4857 17.5213 44.4709 17.5155C43.4627 17.1188 40.8204 16.3383 37.9982 17.6173L34.0094 19.0455L30.6471 15.6834C30.2601 15.2963 29.6324 15.2963 29.2453 15.6834L18.2069 26.7217C17.8499 27.0788 17.7814 27.698 18.2069 28.1236L37.0692 46.9858C37.371 47.2877 38.0778 47.379 38.4711 46.9858L48.5487 36.9084C48.8106 36.931 49.0825 36.9431 49.3644 36.9431C51.9541 36.9431 54.2449 35.1666 55.5554 33.2303H64.7306C65.2781 33.2303 65.7219 32.7865 65.7219 32.2391V19.7415C65.7219 19.194 65.2781 18.7502 64.7306 18.7502ZM29.9461 17.7861L32.2054 20.0454C31.5338 20.4607 30.7574 20.683 29.9461 20.683C29.1348 20.683 28.3584 20.4608 27.6869 20.0454L29.9461 17.7861ZM22.569 29.6819L20.3098 27.4226L22.569 25.1633C22.9844 25.8349 23.2066 26.6113 23.2066 27.4226C23.2066 28.2338 22.9845 29.0103 22.569 29.6819ZM37.7702 44.883L35.5113 42.6241C36.8904 41.773 38.6497 41.773 40.0289 42.6241L37.7702 44.883ZM41.4571 41.1961C39.2667 39.6071 36.2737 39.6071 34.0832 41.1961L23.9971 31.1099C24.7712 30.0453 25.1891 28.7665 25.1891 27.4226C25.1891 26.0785 24.7713 24.7998 23.9971 23.7352L26.2589 21.4736C27.3235 22.2476 28.6022 22.6656 29.9462 22.6656C31.2903 22.6656 32.569 22.2476 33.6336 21.4736L35.7776 23.6176C35.3149 23.6859 34.8638 23.8383 34.4431 24.0727C33.7326 24.4686 33.1751 25.0615 32.828 25.7788C31.7099 25.9859 30.6747 26.5272 29.8627 27.3391C27.6596 29.5423 27.6596 33.1269 29.8628 35.3301C30.9642 36.4316 32.4112 36.9824 33.8582 36.9824C35.3051 36.9824 36.7522 36.4317 37.8537 35.3301C38.5704 34.6134 39.0725 33.7326 39.324 32.7727L42.6708 33.9085C42.2941 35.6539 42.6799 37.4901 43.7209 38.9324L41.4571 41.1961ZM35.4305 31.4508C35.4392 31.454 35.448 31.4572 35.4568 31.4601L37.4389 32.1329C37.2892 32.8084 36.9505 33.4296 36.4519 33.9283C35.0217 35.3582 32.6947 35.3584 31.2647 33.9283C29.8345 32.4982 29.8345 30.1712 31.2647 28.741C31.6096 28.3959 32.0168 28.1262 32.4603 27.9433C32.6433 29.466 33.7397 30.8234 35.4305 31.4508ZM45.1492 37.504C44.7665 36.8805 44.55 36.1689 44.5158 35.4426C44.9907 35.7859 45.5709 36.1222 46.264 36.3891L45.1492 37.504ZM54.0904 31.8439C53.1509 33.3841 51.3288 34.9604 49.3644 34.9604C48.9968 34.9604 48.6523 34.9343 48.3303 34.8877C48.329 34.8875 48.3277 34.8873 48.3264 34.8871C46.1857 34.5761 45.0342 33.3595 44.6546 32.8777C44.6344 32.848 44.5483 32.7353 44.5355 32.7165C44.42 32.5102 44.2307 32.3442 43.9892 32.2623L36.1079 29.5874C34.8502 29.1153 34.1854 28.0383 34.4901 26.9642C34.4903 26.9635 34.4905 26.9628 34.4907 26.9621C34.491 26.9613 34.4912 26.9605 34.4914 26.9597C34.6331 26.465 34.9584 26.0547 35.408 25.8043C35.8547 25.5554 36.371 25.4936 36.8635 25.6301L45.7444 28.4444C46.2664 28.61 46.8235 28.3207 46.9888 27.7989C47.1542 27.277 46.8652 26.7199 46.3433 26.5544L39.2802 24.3162L39.2185 24.2545C39.2179 24.2539 39.2173 24.2532 39.2166 24.2526L35.5599 20.5959L38.7029 19.4705C38.7136 19.4666 38.7266 19.4617 38.7371 19.4575C38.7398 19.4564 38.745 19.4544 38.7476 19.4533C38.761 19.4479 38.7743 19.4421 38.7875 19.4361C40.9123 18.4595 42.9321 19.044 43.7238 19.3519C46.7157 20.6981 48.3126 21.6189 49.4793 22.2917C51.1014 23.2271 51.883 23.6778 54.0904 23.8601V31.8439ZM57.8457 31.2476H56.073V22.5798H57.8457V31.2476ZM63.7394 31.2476H59.8282V20.7327H63.7394V31.2476Z"
                  fill="#A37B44"
                />
              </g>
              <defs>
                <clipPath id="clip0_95_178">
                  <rect
                    width="50.7521"
                    height="50.7521"
                    fill="white"
                    transform="translate(14.9698 15.3909)"
                  />
                </clipPath>
              </defs>
            </svg>

            <h1 className="font-playfair font-bold text-2xl ">
              Payment Method
            </h1>
            <p className="font-mont text-sm">
              We offer flexible payment <br /> options, to make easier.
            </p>
          </div>
          <div className="flex flex-col gap-4 items-center text-center">
            <svg
              width="81"
              height="81"
              viewBox="0 0 81 81"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="0.312988"
                y="0.579834"
                width="80.3739"
                height="80.3738"
                rx="17.9125"
                fill="#FFE2E2"
              />
              <path
                d="M65.248 26.4329L45.5723 15.6288C45.2767 15.4665 44.9182 15.4665 44.6226 15.6288L37.2064 19.7009C37.0499 19.7421 36.9038 19.8208 36.7828 19.9337L24.9473 26.4329C24.6316 26.606 24.4354 26.9375 24.4354 27.2978V40.3649C22.4388 40.9893 20.6092 42.0905 19.0879 43.6122C15.1225 47.5771 14.1115 53.6246 16.5721 58.6603C16.8111 59.1498 17.402 59.353 17.8915 59.1136C18.3814 58.8742 18.5841 58.2834 18.3451 57.7939C16.2545 53.5151 17.1137 48.3769 20.4831 45.0074C22.5903 42.9003 25.3917 41.7397 28.3715 41.7397C31.3513 41.7397 34.1526 42.9003 36.2598 45.0074C38.3666 47.1142 39.5271 49.9156 39.5271 52.8954C39.5271 55.8752 38.3666 58.6765 36.2594 60.7837C32.8899 64.1532 27.7517 65.0123 23.473 62.9217C22.9835 62.6823 22.3926 62.8855 22.1536 63.375C21.9143 63.8649 22.117 64.4557 22.6069 64.6947C24.4412 65.5912 26.4092 66.0268 28.363 66.0268C31.7714 66.0264 35.1343 64.6997 37.6551 62.179C38.811 61.023 39.7245 59.6894 40.3708 58.2398L44.6226 60.5744C44.7706 60.6557 44.934 60.6962 45.0974 60.6962C45.2608 60.6962 45.4247 60.6557 45.5723 60.5744L65.248 49.7706C65.5637 49.5972 65.7598 49.2657 65.7598 48.9057V42.0484C65.7598 41.5034 65.3181 41.0617 64.7731 41.0617C64.2281 41.0617 63.7864 41.5034 63.7864 42.0484V48.3218L46.0872 58.0405V38.684L51.9285 35.4764V40.5611C51.9285 40.9103 52.1127 41.2332 52.413 41.4106C52.5679 41.5019 52.7414 41.5478 52.9152 41.5478C53.0786 41.5478 53.2424 41.5073 53.3908 41.4256L57.6071 39.1049C57.9224 38.9314 58.1178 38.6003 58.1178 38.2407V32.0776L63.7864 28.9652V34.1551C63.7864 34.7001 64.2281 35.1418 64.7731 35.1418C65.3181 35.1418 65.7598 34.7001 65.7598 34.1551V27.2978C65.7598 26.9378 65.5637 26.606 65.248 26.4329ZM45.0974 17.6192L62.723 27.2978L57.1631 30.3509L39.5375 20.6722L45.0974 17.6192ZM45.0974 36.9761L27.4719 27.2978L33.2357 24.1326L50.8616 33.8109L45.0974 36.9761ZM52.9114 32.6855L35.2858 23.0072L37.4874 21.7981L55.1133 31.4763L52.9114 32.6855ZM37.6551 43.6122C35.1752 41.1323 31.8782 39.7667 28.3715 39.7667C27.7081 39.7667 27.0529 39.8156 26.4088 39.9116V28.9652L44.1142 38.6875V58.044L41.0411 56.3566C41.3437 55.2427 41.5002 54.081 41.5002 52.8954C41.5002 49.3887 40.1346 46.0917 37.6551 43.6122ZM56.1448 37.6576L53.9019 38.8921V34.3929L56.1448 33.1615V37.6576Z"
                fill="#A37B44"
              />
              <path
                d="M64.7731 37.1101C64.5137 37.1101 64.2589 37.2157 64.0755 37.3992C63.892 37.5827 63.7864 37.837 63.7864 38.0968C63.7864 38.3562 63.892 38.6106 64.0755 38.7941C64.2589 38.9779 64.5137 39.0832 64.7731 39.0832C65.0325 39.0832 65.2873 38.9779 65.4707 38.7941C65.6542 38.6106 65.7598 38.3562 65.7598 38.0968C65.7598 37.837 65.6542 37.5827 65.4707 37.3992C65.2873 37.2157 65.0325 37.1101 64.7731 37.1101Z"
                fill="#A37B44"
              />
              <path
                d="M25.0536 53.882C25.3061 53.882 25.5589 53.7856 25.7513 53.5933C26.1367 53.2078 26.1367 52.5831 25.7513 52.1976L25.0679 51.5139H30.8995C32.3141 51.5139 33.465 52.6648 33.465 54.0793C33.465 55.4939 32.3141 56.6448 30.8995 56.6448H27.4441C26.8991 56.6448 26.4574 57.0865 26.4574 57.6315C26.4574 58.1761 26.8991 58.6178 27.4441 58.6178H30.8995C33.4022 58.6178 35.4384 56.582 35.4384 54.0793C35.4384 51.5767 33.4022 49.5408 30.8995 49.5408H25.0679L25.7513 48.8571C26.1367 48.4716 26.1367 47.8468 25.7513 47.4614C25.3662 47.0763 24.7414 47.0763 24.356 47.4614L21.9879 49.8295C21.6028 50.2149 21.6028 50.8397 21.9879 51.2252L24.356 53.5929C24.5487 53.7856 24.8012 53.882 25.0536 53.882Z"
                fill="#A37B44"
              />
              <path
                d="M19.7863 62.4695C19.5057 62.4695 19.227 62.35 19.0324 62.1184L19.0304 62.1161C18.6797 61.699 18.7337 61.0769 19.1507 60.7262C19.5677 60.3751 20.1902 60.429 20.541 60.8461C20.8913 61.2635 20.8385 61.8867 20.4215 62.2375C20.2361 62.3932 20.0106 62.4695 19.7863 62.4695Z"
                fill="#A37B44"
              />
            </svg>

            <h1 className="font-playfair font-bold text-2xl ">Return policy</h1>
            <p className="font-mont text-sm">
              You can return a product <br /> within 30 days.
            </p>
          </div>
          <div className="flex flex-col gap-4 items-center text-center">
            <svg
              width="82"
              height="81"
              viewBox="0 0 82 81"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="0.851074"
                width="80.6062"
                height="80.6062"
                rx="17.9125"
                fill="#BBE7FF"
              />
              <path
                d="M41.1542 14.9937C28.8886 14.9937 18.9097 24.9725 18.9097 37.2382C18.9097 38.5975 18.9097 49.1126 18.9097 49.2996C18.9097 51.7528 20.9054 53.7485 23.3586 53.7485H25.0966C25.7088 55.4745 27.3571 56.7145 29.2904 56.7145C31.7436 56.7145 33.7393 54.7187 33.7393 52.2656V40.2041C33.7393 37.751 31.7436 35.7552 29.2904 35.7552C27.3571 35.7552 25.7088 36.9952 25.0966 38.7211H23.3586C22.8386 38.7211 22.3398 38.8116 21.8756 38.9762V37.2382C21.8756 26.608 30.524 17.9596 41.1542 17.9596C51.7844 17.9596 60.4328 26.608 60.4328 37.2382V38.9762C59.9686 38.8116 59.4697 38.7211 58.9498 38.7211H57.2118C56.5996 36.9952 54.9512 35.7552 53.0179 35.7552C50.5648 35.7552 48.569 37.751 48.569 40.2041V52.2656C48.569 54.7187 50.5648 56.7145 53.0179 56.7145C53.4669 56.7145 53.9003 56.647 54.3092 56.5228C53.7545 58.348 52.0562 59.6804 50.052 59.6804H45.348C44.7358 57.9544 43.0875 56.7145 41.1542 56.7145C38.7011 56.7145 36.7053 58.7103 36.7053 61.1634C36.7053 63.6165 38.7011 65.6123 41.1542 65.6123C43.0875 65.6123 44.7358 64.3723 45.348 62.6463H50.052C54.1405 62.6463 57.4668 59.32 57.4668 55.2315V53.7485H58.9498C61.4029 53.7485 63.3987 51.7528 63.3987 49.2996C63.3987 49.1154 63.3987 38.5964 63.3987 37.2382C63.3987 24.9725 53.4198 14.9937 41.1542 14.9937ZM27.8075 40.2041C27.8075 39.3864 28.4727 38.7211 29.2904 38.7211C30.1081 38.7211 30.7734 39.3864 30.7734 40.2041V52.2656C30.7734 53.0833 30.1081 53.7485 29.2904 53.7485C28.4727 53.7485 27.8075 53.0833 27.8075 52.2656V40.2041ZM23.3586 41.6871H24.8415V50.7826H23.3586C22.5409 50.7826 21.8756 50.1173 21.8756 49.2996V43.17C21.8756 42.3523 22.5409 41.6871 23.3586 41.6871ZM41.1542 62.6463C40.3365 62.6463 39.6712 61.9811 39.6712 61.1634C39.6712 60.3457 40.3365 59.6804 41.1542 59.6804C41.9719 59.6804 42.6371 60.3457 42.6371 61.1634C42.6371 61.9811 41.9719 62.6463 41.1542 62.6463ZM54.5009 52.2656C54.5009 53.0833 53.8356 53.7485 53.0179 53.7485C52.2002 53.7485 51.535 53.0833 51.535 52.2656V40.2041C51.535 39.3864 52.2002 38.7211 53.0179 38.7211C53.8356 38.7211 54.5009 39.3864 54.5009 40.2041V52.2656ZM60.4328 49.2996C60.4328 50.1173 59.7675 50.7826 58.9498 50.7826H57.4668V41.6871H58.9498C59.7675 41.6871 60.4328 42.3523 60.4328 43.17V49.2996Z"
                fill="#A37B44"
              />
            </svg>

            <h1 className="font-playfair font-bold text-2xl ">
              Customer Support
            </h1>
            <p className="font-mont text-sm">
              Our customer support <br /> is 24/7.
            </p>
          </div>
        </div>
      </div> */}
      {/* testimonials */}
      {/* <div className="max-w-[90%] m-auto mt-10">
        <div className="flex items-center max-w-[84%] m-auto gap-4">
          <h1 className="font-playfair font-semibold text-5xl leading-[4.563rem]">
            Testimonials
          </h1>
          <hr className="w-[38.875rem] h-[0.188rem] bg-[#D4B78F] rounded-full" />
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
            <div className="flex items-center gap-16 pt-8">
              <div className="flex gap-8">
                <div className="flex items-end">
                  <Image alt="testimonial" src={testimonialImg1} />
                </div>
                <div>
                  <Image alt="testimonial" src={testimonialImg2} />
                </div>
              </div>
              <div className="flex  gap-6 relative ">
                <button
                  onClick={() => swiper3.slidePrev()}
                  className="absolute left-2"
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
                </button>
                <button
                  onClick={() => swiper3.slideNext()}
                  className="absolute left-[45.3rem]"
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
                </button>
              </div>
              <div className="bg-[#D4B78F] w-[40.882rem] h-[16.265rem] p-12 ">
                <div className="flex flex-col gap-12">
                  <h1 className="font-playfair font-medium text-lg">
                    Amanda Collins
                  </h1>
                  <p className=" text-[#888888]">
                    "Absolutely delighted with my purchase from Elegencia! I
                    recently bought the Lucid Side Table and it has exceeded all
                    my expectations. The craftsmanship and attention to detail
                    are exceptional"
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex items-center gap-16 pt-8">
              <div className="flex gap-8">
                <div className="flex items-end">
                  <Image alt="testimonial" src={testimonialImg4} />
                </div>
                <div>
                  <Image alt="testimonial" src={testimonialImg3} />
                </div>
              </div>
              <div className="flex  gap-6 relative ">
                <button
                  onClick={() => swiper3.slidePrev()}
                  className="absolute left-2"
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
                </button>
                <button
                  onClick={() => swiper3.slideNext()}
                  className="absolute left-[45.3rem]"
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
                </button>
              </div>
              <div className="bg-[#D4B78F] w-[40.882rem] h-[16.265rem] p-12 ">
                <div className="flex flex-col gap-12">
                  <h1 className="font-playfair font-medium text-lg">
                    Bruce Wayne
                  </h1>
                  <p className=" text-[#888888]">
                    "Absolutely delighted with my purchase from Elegencia! I
                    recently bought the Lucid Side Table and it has exceeded all
                    my expectations. The craftsmanship and attention to detail
                    are exceptional"
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex items-center gap-16 pt-8">
              <div className="flex gap-8">
                <div className="flex items-end">
                  <Image alt="testimonial" src={testimonialImg5} />
                </div>
                <div>
                  <Image alt="testimonial" src={testimonialImg6} />
                </div>
              </div>
              <div className="flex  gap-6 relative ">
                <button
                  onClick={() => swiper3.slidePrev()}
                  className="absolute left-2"
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
                </button>
                <button
                  onClick={() => swiper3.slideNext()}
                  className="absolute left-[45.3rem]"
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
                </button>
              </div>
              <div className="bg-[#D4B78F] w-[40.882rem] h-[16.265rem] p-12 ">
                <div className="flex flex-col gap-12">
                  <h1 className="font-playfair font-medium text-lg">
                    Amanda Collins
                  </h1>
                  <p className="text-[#888888] ">
                    "Absolutely delighted with my purchase from Elegencia! I
                    recently bought the Lucid Side Table and it has exceeded all
                    my expectations. The craftsmanship and attention to detail
                    are exceptional"
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex items-center gap-16 pt-8">
              <div className="flex gap-8">
                <div className="flex items-end">
                  <Image alt="testimonial" src={testimonialImg4} />
                </div>
                <div>
                  <Image alt="testimonial" src={testimonialImg3} />
                </div>
              </div>
              <div className="flex  gap-6 relative ">
                <button
                  onClick={() => swiper3.slidePrev()}
                  className="absolute left-2"
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
                </button>
                <button
                  onClick={() => swiper3.slideNext()}
                  className="absolute left-[45.3rem]"
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
                </button>
              </div>
              <div className="bg-[#D4B78F] w-[40.882rem] h-[16.265rem] p-12 ">
                <div className="flex flex-col gap-12">
                  <h1 className="font-playfair font-medium text-lg">
                    Bruce Wayne
                  </h1>
                  <p className="text-[#888888] ">
                    "Absolutely delighted with my purchase from Elegencia! I
                    recently bought the Lucid Side Table and it has exceeded all
                    my expectations. The craftsmanship and attention to detail
                    are exceptional"
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex items-center gap-16 pt-8">
              <div className="flex gap-8">
                <div className="flex items-end">
                  <Image alt="testimonial" src={testimonialImg1} />
                </div>
                <div>
                  <Image alt="testimonial" src={testimonialImg2} />
                </div>
              </div>
              <div className="flex  gap-6 relative ">
                <button
                  onClick={() => swiper3.slidePrev()}
                  className="absolute left-2"
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
                </button>
                <button
                  onClick={() => swiper3.slideNext()}
                  className="absolute left-[45.3rem]"
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
                </button>
              </div>
              <div className="bg-[#D4B78F] w-[40.882rem] h-[16.265rem] p-12 ">
                <div className="flex flex-col gap-12">
                  <h1 className="font-playfair font-medium text-lg">
                    Amanda Collins
                  </h1>
                  <p className="text-[#888888] ">
                    "Absolutely delighted with my purchase from Elegencia! I
                    recently bought the Lucid Side Table and it has exceeded all
                    my expectations. The craftsmanship and attention to detail
                    are exceptional"
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex items-center gap-16 pt-8">
              <div className="flex gap-8">
                <div className="flex items-end">
                  <Image alt="testimonial" src={testimonialImg5} />
                </div>
                <div>
                  <Image alt="testimonial" src={testimonialImg6} />
                </div>
              </div>
              <div className="flex  gap-6 relative ">
                <button
                  onClick={() => swiper3.slidePrev()}
                  className="absolute left-2"
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
                </button>
                <button
                  onClick={() => swiper3.slideNext()}
                  className="absolute left-[45.3rem]"
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
                </button>
              </div>
              <div className="bg-[#D4B78F] w-[40.882rem] h-[16.265rem] p-12 ">
                <div className="flex flex-col gap-12">
                  <h1 className="font-playfair font-medium text-lg">
                    Amanda Collins
                  </h1>
                  <p className=" text-[#888888]">
                    "Absolutely delighted with my purchase from Elegencia! I
                    recently bought the Lucid Side Table and it has exceeded all
                    my expectations. The craftsmanship and attention to detail
                    are exceptional"
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
        <div className="flex justify-center mt-10">
          <button
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
          </button>
        </div>
      </div> */}
    </>
  );
}
