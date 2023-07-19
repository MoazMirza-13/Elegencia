import { motion as m } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { productsDataListing } from "./productsData";

export default function ProductCard({ activeCategory }) {
  const filteredProducts = productsDataListing.filter(
    (product) => product.category === activeCategory
  );

  return (
    <>
      <div className="flex gap-4 lg:gap-2 xl:gap-4 flex-wrap justify-center">
        {Array.from({ length: 6 }).map((_, index) => (
          <Link key={index} href={`./products/${filteredProducts[0].id}`}>
            <m.div
              initial={{ opacity: 0, x: -23, y: -50 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.5 }}
              className="xl:max-w-[19rem] lg:max-w-[15rem] sm:max-w-[10rem] max-w-[11rem] bg-white border border-gray-200 rounded-lg shadow nav-bg dark:border-gray-700  hover:shadow-lg text-center sm:text-start"
            >
              <Image
                priority
                className="rounded-t-lg"
                src={filteredProducts[0].img}
                alt="img"
              />

              <div className="xl:p-5 p-3 text-center lg:text-start">
                <h5 className="mb-2 xl:text-2xl lg:text-xl text-lg font-bold tracking-tight text-white">
                  {filteredProducts[0].name}
                </h5>

                <p className="mb-3 font-normal text-xs lg:text-sm text-white hidden sm:block">
                  {filteredProducts[0].description}{" "}
                  <span className="hidden lg:block">
                    {filteredProducts[0].description2}
                  </span>
                </p>
                <div className="flex flex-col lg:flex-row lg:gap-4 gap-2">
                  <button className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-[#C6A372] rounded-lg  focus:ring-4 focus:outline-none hover:bg-[#e4cb7296] justify-center lg:justify-start">
                    {filteredProducts[0].price}$
                  </button>
                  <button className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-[#C6A372] rounded-lg  focus:ring-4 focus:outline-none hover:bg-[#e4cb7296]">
                    Get More Info
                    <svg
                      aria-hidden="true"
                      className="w-4 h-4 ml-2 -mr-1 hidden xl:block"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </button>
                </div>
              </div>
            </m.div>
          </Link>
        ))}
      </div>
    </>
  );
}
