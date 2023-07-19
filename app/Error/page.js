import ExploreOther from "@/components/ExploreOther";
import Link from "next/link";
import React from "react";

export default function page() {
  return (
    <>
      <div class="flex h-[calc(100vh-80px)] items-center justify-center p-5  w-full">
        <div class="text-center">
          <div class="inline-flex rounded-full bg-yellow-100 p-4">
            <div class="rounded-full stroke-[#c6a372] bg-yellow-200 p-4">
              <svg
                class="w-16 h-16"
                viewBox="0 0 28 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.0002 9.33337V14M14.0002 18.6667H14.0118M25.6668 14C25.6668 20.4434 20.4435 25.6667 14.0002 25.6667C7.55684 25.6667 2.3335 20.4434 2.3335 14C2.3335 7.55672 7.55684 2.33337 14.0002 2.33337C20.4435 2.33337 25.6668 7.55672 25.6668 14Z"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
            </div>
          </div>
          <h1 class="mt-5 text-[36px] font-mont font-bold text-slate-800 lg:text-[60px]">
            Product not found
          </h1>
          <p class="text-slate-600 mt-5 font-mont lg:text-xl">
            Sorry, the product you are looking for isn't available or <br />
            has been removed.
          </p>
          <div className="mt-10">
            <Link
              href="/"
              class="sm:w-full mt-10 lg:w-auto my-2 border rounded-xl py-4 px-8 text-center bg-[#D4B78F] hover:bg-[#a37b44b5] text-white "
            >
              Back to Homepage
            </Link>
          </div>
        </div>
      </div>
      <div className="mt-20">
        <ExploreOther />
      </div>
    </>
  );
}
