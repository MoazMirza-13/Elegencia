"use client";
import { Helmet } from "react-helmet";
import Category from "@/components/Category";
import Nav from "@/components/NavProducts";
import { useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import { motion as m } from "framer-motion";
import ProductCard from "@/components/ProductCard";

export default function page() {
  const searchParams = useSearchParams();
  const category = searchParams.get("category");
  const [activeCategory, setActiveCategory] = useState(category || "Bedroom");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Elegencia : Products</title>
      </Helmet>
      <Nav />
      <m.h1
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, type: "spring", stiffness: 300 }}
        className="font-playfair lg:font-semibold md:text-5xl text-[1.5rem] md:leading-[4.563rem] leading-[1.5rem] sm:leading-[2rem] text-center mt-28 md:mt-24 lg:mt-40"
      >
        Explore By Category
      </m.h1>
      <m.h2
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, type: "spring", stiffness: 300 }}
        className="text-[#888888] font-mont text-sm mt-16 m-auto md:max-w-[43%] lg:max-w-[51%] xl:max-w-[46%] text-center lg:text-start"
      >
        Categories/<span className="text-black">{activeCategory}</span>
      </m.h2>
      <div className="flex xl:max-w-[85%] md:max-w-[93%] max-w-[83%] m-auto mt-12 xl:gap-8 lg:gap-2 sm:gap-4 gap-2">
        <Category setActiveCategoryProp={setActiveCategory} />
        <ProductCard activeCategory={activeCategory} />
      </div>
    </>
  );
}
