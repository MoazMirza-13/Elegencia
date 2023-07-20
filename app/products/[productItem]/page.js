"use client";
import { Helmet } from "react-helmet";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/actions/productActions";
import Navbar from "@/components/NavProducts";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Reviews from "@/components/Reviews";
import ExploreOther from "@/components/ExploreOther";
import { motion as m } from "framer-motion";
import { useEffect } from "react";
import { productsData } from "@/components/productsData";
import { useRouter } from "next/navigation";

export default function page() {
  const router = useRouter();

  const pathname = usePathname();
  const productItem = pathname.replace("/products/", "");
  const product = productsData.find((item) => item.id === productItem);

  if (!product) {
    return router.push("/Error");
  }

  useEffect(() => {
    const scrollToTop = () => {
      window.scrollTo(0, 90);
    };

    scrollToTop();
  }, []);

  const dispatch = useDispatch();

  const handleAddToCart = () => {
    const productToAdd = {
      id: product.id,
      name: product.name,
      price: product.price,
      quantity: 1,
      img: product.img,
    };
    dispatch(addToCart(productToAdd));
  };

  return (
    <>
      <Helmet>
        <title>Elegencia : {product.name}</title>
      </Helmet>
      <Navbar />
      <div className="flex flex-col lg:flex-row  items-center gap-12  md:gap-24 lg:gap-20 xl:gap-[12rem] max-w-[80%] m-auto mt-[10rem] md:mt-[12rem]">
        <Image priority src={product.img} alt="img" />

        <m.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 1,
            delay: 0.4,
            type: "spring",
            stiffness: 300,
          }}
          className="flex flex-col gap-8 md:gap-4 xl:gap-8"
        >
          <h1 className="font-playfair font-semibold text-4xl">
            {product.name}
          </h1>
          <p className="font-mont font-semibold text-base">${product.price}</p>
          <p className="text-[#888888] font-mont md:text-sm xl:text-base">
            {product.description}
          </p>
          <div className="flex justify-center  md:justify-start">
            <button
              onClick={handleAddToCart}
              className="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-[#C6A372] transition duration-300 ease-out border-2 border-[#C6A372] rounded-full shadow-md group "
            >
              <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-[#C6A372] group-hover:translate-x-0 ease">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  ></path>
                </svg>
              </span>
              <span className="absolute flex items-center justify-center w-full h-full text-[#C6A372] transition-all duration-300 transform group-hover:translate-x-full ease">
                Add To Cart
              </span>
              <span className="relative invisible"> Add To Cart</span>
            </button>
          </div>
        </m.div>
      </div>
      <Reviews />
      <div className="mt-28">
        <ExploreOther />
      </div>
    </>
  );
}
