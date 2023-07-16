"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import before_footerImg from "../public/before-footer/Group 31.png";
import btn from "../app/modules/btn.module.css";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { motion as m } from "framer-motion";
import { toast } from "react-toastify";
import ClipLoader from "react-spinners/ClipLoader";

// Define the validation schema
const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email address")
    .required("*Email is required"),
});

export default function BeforeFooter() {
  //state to disable form submission
  const [isToastVisible, setIsToastVisible] = useState(false);
  //state to handle loading
  const [loading, setLoading] = useState(false);

  // Instantiate form hook
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    trigger,
  } = useForm({
    resolver: yupResolver(validationSchema),
    mode: "onBlur", // Trigger validation on blur event
  });

  // Success handler for email subscription
  const handleEmail = () => {
    setLoading(true);
    setIsToastVisible(true);

    setTimeout(() => {
      setLoading(false);
      toast.success("Subscribed to Elegencia!", {
        position: "top-right",
        autoClose: 2000,
        onClose: () => setIsToastVisible(false),
      });
    }, 1500);
  };

  // On form submit, handle email subscription
  const onSubmit = (data) => handleEmail();

  return (
    <>
      <div className="max-w-[84%] m-auto my-52 flex flex-col xl:flex-row gap-8 md:gap-8 lg:gap-4 justify-between items-center  ">
        <m.div
          initial={{ opacity: 0, y: -30, x: -25 }}
          whileInView={{ opacity: 1, y: 0, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col gap-4 items-center text-center"
        >
          <h1 className="font-mont font-medium text-xl text-[#D4B78F]">
            Newsletter
          </h1>
          <h1 className="font-playfair font-semibold text-3xl">
            Dont miss our Daily Updates
          </h1>
          <hr className="bg-[#D4B78F] rounded-full w-[15.688rem] h-[0.25rem]" />
          <p className="font-mont font-medium text-sm text-[#888888]">
            Be the first to discover our latest furniture designs and exclusive
            offers. <br /> Subscribe now for special discounts and stay in the
            loop!
          </p>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="relative flex flex-col"
          >
            <Controller
              control={control}
              name="email"
              defaultValue=""
              rules={{ required: true }}
              render={({ field }) => (
                <input
                  {...field}
                  onBlur={() => trigger("email")}
                  type="email"
                  autoComplete="email"
                  placeholder="Enter your Email Address"
                  className="font-mont font-medium text-sm bg-[#e4cb901a] text-[#C8C8C8] placeholder-[#C8C8C8] outline-none px-[265.558px] py-[1.338rem] lg:pr-[13.597rem]  md:pr-[7.597rem] pr-[4.597rem]  flex-grow lg:pl-[2.409rem] pl-[0.5rem] border border-[#e4cb901a]  border-gray-900 border-opacity-80  rounded-[3.346rem]"
                />
              )}
            />
            {errors.email && (
              <span className="text-red-500 mt-2 ml-7 text-start">
                {errors.email.message}
              </span>
            )}
            {loading ? (
              <ClipLoader
                className="absolute top-[23px] right-[30px]"
                color="#000000"
                size={17}
              />
            ) : (
              <button
                disabled={isToastVisible}
                type="submit"
                className={`${btn["btn-5"]} md:w-[132.29px] w-[85.29px] font-mont font-medium text-sm text-white absolute top-[5px] right-[6px]`}
              >
                Subscribe
              </button>
            )}
          </form>
        </m.div>
        <m.div
          initial={{ opacity: 0, y: -30, x: 25 }}
          whileInView={{ opacity: 1, y: 0, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Image priority src={before_footerImg} alt="img" />
        </m.div>
      </div>
    </>
  );
}
