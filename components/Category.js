"use client";
import { useState } from "react";
import { motion as m } from "framer-motion";
import { useSearchParams } from "next/navigation";

export default function Category({ setActiveCategoryProp }) {
  const searchParams = useSearchParams();
  const category = searchParams.get("category");
  const [activeCategory, setActiveCategory] = useState(category || "Bedroom");

  const ScrollToTop = () => {
    window.scrollTo(0, 0);
  };

  const handleClickCategory = (category) => {
    ScrollToTop();
    setActiveCategory(category);
    setActiveCategoryProp(category);
  };

  const categories = [
    "Modern Sofa",
    "Decent Table",
    "Bedroom",
    "Simple Solid Sofa",
    "Kitchen",
    "Family Hall",
    "Comfy Sofa",
    "Wide Table",
    "Modern Bedroom",
    "Simple Soft Sofa",
    "Small Kitchen",
    "T.V Hall",
    "Luna Table",
  ];

  return (
    <>
      <m.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-[#FFFFF0] flex flex-col gap-6 md:p-2 lg:p-[0.9rem] p-2 pt-6   sm:text-start xl:w-[28.563rem] lg:w-[23.563rem] md:w-[19.563rem] w-[32rem] sm:w-[31rem]"
      >
        <h1 className="font-mont font-bold text-sm pl-2">Categories</h1>
        <ul className="font-semibold font-mont flex flex-col gap-6">
          {categories.map((categoryName) => (
            <li
              key={categoryName}
              onClick={() => handleClickCategory(categoryName)}
              className={`${
                activeCategory === categoryName
                  ? "bg-[#d4b78fb3] text-white"
                  : ""
              } flex items-center gap-2 p-2 rounded-md cursor-pointer`}
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_32_246)">
                  <path
                    d="M7.00008 12.8333C10.2217 12.8333 12.8334 10.2217 12.8334 7.00001C12.8334 3.77834 10.2217 1.16667 7.00008 1.16667C3.77842 1.16667 1.16675 3.77834 1.16675 7.00001C1.16675 10.2217 3.77842 12.8333 7.00008 12.8333Z"
                    stroke="#C48842"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
                <g clipPath="url(#clip1_32_246)">
                  <path
                    d="M7 11C9.20914 11 11 9.20914 11 7C11 4.79086 9.20914 3 7 3C4.79086 3 3 4.79086 3 7C3 9.20914 4.79086 11 7 11Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_32_246">
                    <rect width="14" height="14" fill="white" />
                  </clipPath>
                  <clipPath id="clip1_32_246">
                    <rect
                      width="8"
                      height="8"
                      fill="white"
                      transform="translate(3 3)"
                    />
                  </clipPath>
                </defs>
              </svg>
              {categoryName}
            </li>
          ))}
        </ul>
      </m.div>
    </>
  );
}
