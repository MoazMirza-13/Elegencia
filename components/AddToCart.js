"use client";

import ReactModal from "react-modal";
import { BsPlusCircle } from "react-icons/bs";
import { MdCancel } from "react-icons/md";
import { AiOutlineMinusCircle } from "react-icons/ai";
import Image from "next/image";
import { motion as m } from "framer-motion";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useMemo, useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
import ClipLoader from "react-spinners/ClipLoader";

import {
  increaseQuantity,
  decreaseQuantity,
  removeItem,
  emptyCart,
} from "../app/redux/actions/productActions";

export default function AddToCart({ isopen, onclose }) {
  const router = useRouter();
  const cartItems = useSelector((state) => state.allProducts.cartItems);
  const dispatch = useDispatch();

  const handleIncreaseQuantity = (item) => {
    dispatch(increaseQuantity(item));
  };

  const handleDecreaseQuantity = (item) => {
    if (item.quantity === 1) {
      dispatch(removeItem(item));
    } else {
      dispatch(decreaseQuantity(item));
    }
  };

  const handleRemoveItem = (item) => {
    dispatch(removeItem(item));
  };
  const handleEmptyCart = () => {
    dispatch(emptyCart());
  };
  const calculateSubtotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  const calculateTotal = () => {
    return calculateSubtotal() + calculateShipping();
  };

  const calculateShipping = () => {
    return cartItems.length > 0 ? 50 : 0;
  };

  const subtotal = useMemo(() => calculateSubtotal(), [cartItems]);
  const total = useMemo(() => calculateTotal(), [cartItems]);

  const [checkoutMode, setCheckoutMode] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleCheckout = () => {
    if (cartItems.length === 0) {
      toast.error("Nothing to Checkout!", {
        position: "top-right",
        autoClose: 1500,
        onClose: () => {
          onclose();
          router.push("/products");
        },
      });
    } else {
      setLoading(true);

      setTimeout(() => {
        setLoading(false);
        setCheckoutMode(true);
      }, 1500);
    }
  };

  const validationSchema = Yup.object({
    firstName: Yup.string().required("First name is required"),
    lastName: Yup.string().required("Last name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    streetAddress: Yup.string().required("Street address is required"),
    city: Yup.string().required("City is required"),
    region: Yup.string().required("State / Province is required"),
    postalCode: Yup.string().required("ZIP / Postal code is required"),
  });

  const handleProceed = (values) => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      toast.success("Order placed Successfully!", {
        position: "top-right",
        autoClose: 2000,
        onClose: () => {
          onclose();
          router.push("/products");
        },
      });
      if (validationSchema.isValidSync(values)) {
        handleEmptyCart();
      }
    }, 1500);
  };

  return (
    <>
      <ReactModal
        isOpen={isopen}
        onRequestClose={onclose}
        style={{
          overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            zIndex: 999,
          },
          content: {
            zIndex: 1000,
            padding: 0,
          },
        }}
      >
        <div className="flex bg-[#F5F5F5] flex-col justify-between lg:flex-row gap-12 lg:gap-0">
          <div className="min-w-[70%] xl:min-w-[70%]i lg:min-w-[69%] ">
            <div className="max-w-[85%] m-auto py-8">
              <button onClick={onclose}>
                <MdCancel className="text-[#C6A372] text-4xl" />
              </button>
            </div>
            <div className="flex flex-col gap-6">
              {checkoutMode && cartItems.length !== 0 && (
                <div className=" min-w-[70%] m-auto">
                  <m.h1
                    initial={{ opacity: 0, x: "15%" }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: 0.4,
                      type: "spring",
                      stiffness: 200,
                      delay: 0.3,
                    }}
                    className=" font-mont font-semibold text-xl text-center lg:text-start"
                  >
                    SUMMARY
                  </m.h1>
                </div>
              )}
              {!checkoutMode && cartItems.length !== 0 && (
                <m.div
                  initial={{ opacity: 0, x: -60 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: 0.3,
                    type: "spring",
                    stiffness: 200,
                  }}
                  className="flex xl:gap-[20rem] lg:gap-[13rem] max-w-[70%] m-auto"
                >
                  <h1 className="font-mont font-semibold text-center lg:text-start">
                    Products
                  </h1>
                  <div className="lg:flex xl:gap-[8rem] gap-16 hidden ">
                    <h1 className="font-mont font-semibold">QUANTITY</h1>
                    <h1 className="font-mont font-semibold">TOTAL</h1>
                  </div>
                </m.div>
              )}
              {/*  */}
              <div className="flex justify-center">
                <hr className="bg-[#D9D9D9] md:w-[36.25rem] xl:w-[47.25rem] lg:w-[38.25rem] w-[12.25rem]  h-[0.188rem] rounded-full" />
              </div>
            </div>

            {cartItems.length === 0 ? (
              <m.h1
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.4,
                  delay: 0.4,
                  type: "spring",
                  stiffness: 500,
                }}
                className=" font-mont font-medium pt-10 text-xl text-center"
              >
                Your Cart Is Empty
              </m.h1>
            ) : (
              <>
                {checkoutMode ? (
                  <div className="border-b border-gray-900/10 max-w-[75%] m-auto p-4 lg:pb-24">
                    <h2 className="text-base font-semibold leading-7 text-gray-900 text-center">
                      Your Information
                    </h2>
                    <Formik
                      initialValues={{
                        firstName: "",
                        lastName: "",
                        email: "",
                        streetAddress: "",
                        city: "",
                        region: "",
                        postalCode: "",
                      }}
                      validationSchema={validationSchema}
                      onSubmit={handleProceed}
                    >
                      <Form className=" mt-[1.5rem] grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-6">
                        <m.div
                          initial={{ opacity: 0, x: 40 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{
                            duration: 0.8,
                            type: "spring",
                            stiffness: 200,
                            delay: 0.7,
                          }}
                          className="sm:col-span-3"
                        >
                          <label
                            htmlFor="firstName"
                            id="first-name"
                            className="block text-sm font-medium leading-6 text-gray-900"
                          >
                            First name
                          </label>
                          <div className="">
                            <Field
                              type="text"
                              name="firstName"
                              id="first-name"
                              autoComplete="given-name"
                              className="block  w-[80%] rounded-md border-0 p-[0.47rem] text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 outline-[#D4B78F] focus:ring-inset focus:ring-[#D4B78F]  sm:text-sm sm:leading-6"
                            />
                            <ErrorMessage
                              name="firstName"
                              component="div"
                              className="text-red-500"
                            />
                          </div>
                        </m.div>

                        <m.div
                          initial={{ opacity: 0, x: -40 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{
                            duration: 0.8,
                            type: "spring",
                            stiffness: 200,
                            delay: 0.9,
                          }}
                          className="sm:col-span-3"
                        >
                          <label
                            htmlFor="lastName"
                            id="last-name"
                            className="block text-sm font-medium leading-6 text-gray-900"
                          >
                            Last name
                          </label>
                          <div className="">
                            <Field
                              type="text"
                              name="lastName"
                              id="last-name"
                              autoComplete="family-name"
                              className="block  w-[80%] rounded-md border-0 p-[0.47rem] text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 outline-[#D4B78F] focus:ring-inset focus:ring-[#D4B78F] sm:text-sm sm:leading-6"
                            />
                            <ErrorMessage
                              name="lastName"
                              component="div"
                              className="text-red-500"
                            />
                          </div>
                        </m.div>

                        <m.div
                          initial={{ opacity: 0, y: -30 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{
                            duration: 0.8,
                            type: "spring",
                            stiffness: 200,
                            delay: 1.1,
                          }}
                          className="sm:col-span-4"
                        >
                          <label
                            htmlFor="email"
                            id="email"
                            className="block text-sm font-medium leading-6 text-gray-900"
                          >
                            Email address
                          </label>
                          <div className="">
                            <Field
                              id="email"
                              name="email"
                              type="email"
                              autoComplete="email"
                              className="block  w-[80%] rounded-md border-0 p-[0.47rem] text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 outline-[#D4B78F] focus:ring-inset focus:ring-[#D4B78F] sm:text-sm sm:leading-6"
                            />
                            <ErrorMessage
                              name="email"
                              component="div"
                              className="text-red-500"
                            />
                          </div>
                        </m.div>

                        <m.div
                          initial={{ opacity: 0, y: 30 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{
                            duration: 0.8,
                            type: "spring",
                            stiffness: 200,
                            delay: 1.3,
                          }}
                          className="col-span-full"
                        >
                          <label
                            htmlFor=" streetAddress"
                            id="street-address"
                            className="block text-sm font-medium leading-6 text-gray-900"
                          >
                            Street address
                          </label>
                          <div className="">
                            <Field
                              type="text"
                              name="streetAddress"
                              id="street-address"
                              autoComplete="street-address"
                              className="block  w-[80%] rounded-md border-0 p-[0.47rem] text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 outline-[#D4B78F] focus:ring-inset focus:ring-[#D4B78F] sm:text-sm sm:leading-6"
                            />
                            <ErrorMessage
                              name="streetAddress"
                              component="div"
                              className="text-red-500"
                            />
                          </div>
                        </m.div>

                        <m.div
                          initial={{ opacity: 0, x: -40 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{
                            duration: 0.5,
                            type: "spring",
                            stiffness: 200,
                            delay: 1.5,
                          }}
                          className="sm:col-span-2 sm:col-start-1"
                        >
                          <label
                            htmlFor="city"
                            id="city"
                            className="block text-sm font-medium leading-6 text-gray-900"
                          >
                            City
                          </label>
                          <div className="">
                            <Field
                              type="text"
                              name="city"
                              id="city"
                              autoComplete="address-level2"
                              className="block  w-[80%] rounded-md border-0 p-[0.47rem] text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 outline-[#D4B78F] focus:ring-inset focus:ring-[#D4B78F] sm:text-sm sm:leading-6"
                            />
                            <ErrorMessage
                              name="city"
                              component="div"
                              className="text-red-500"
                            />
                          </div>
                        </m.div>

                        <m.div
                          initial={{ opacity: 0, y: 30 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{
                            duration: 0.8,
                            type: "spring",
                            stiffness: 200,
                            delay: 1.7,
                          }}
                          className="sm:col-span-2"
                        >
                          <label
                            htmlFor="region"
                            id="region"
                            className="block text-sm font-medium leading-6 text-gray-900"
                          >
                            State / Province
                          </label>
                          <div className="">
                            <Field
                              type="text"
                              name="region"
                              id="region"
                              autoComplete="address-level1"
                              className="block  w-[80%] rounded-md border-0 p-[0.47rem] text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 outline-[#D4B78F] focus:ring-inset focus:ring-[#D4B78F] sm:text-sm sm:leading-6"
                            />
                            <ErrorMessage
                              name="region"
                              component="div"
                              className="text-red-500"
                            />
                          </div>
                        </m.div>

                        <m.div
                          initial={{ opacity: 0, x: 40 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{
                            duration: 0.5,
                            type: "spring",
                            stiffness: 200,
                            delay: 1.9,
                          }}
                          className="sm:col-span-2"
                        >
                          <label
                            htmlFor="postalCode"
                            id="postal-code"
                            className="block text-sm font-medium leading-6 text-gray-900"
                          >
                            ZIP / Postal code
                          </label>
                          <div className="">
                            <Field
                              type="text"
                              name="postalCode"
                              id="postal-code"
                              autoComplete="postal-code"
                              className="block  w-[80%] rounded-md border-0 p-[0.47rem] text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 outline-[#D4B78F] focus:ring-inset focus:ring-[#D4B78F] sm:text-sm sm:leading-6"
                            />
                            <ErrorMessage
                              name="postalCode"
                              component="div"
                              className="text-red-500"
                            />
                          </div>
                        </m.div>

                        <div className="flex justify-center md:w-[215px] w-[156px]">
                          <button
                            type="submit"
                            className="w-[37rem] h-[3rem] mt-4 bg-[#D4B78F] hover:bg-[#A37B44] shadow-md rounded-lg text-white text-center"
                          >
                            {loading ? (
                              <span className="flex justify-center">
                                Proceeding...
                                <span />
                                <span className="hidden md:block">
                                  <ClipLoader
                                    className="relative top-[7%] left-[22px] "
                                    color="#000000"
                                    size={15}
                                  />
                                </span>
                              </span>
                            ) : (
                              <span>
                                Payment to Proceed
                                <span />
                              </span>
                            )}
                          </button>
                        </div>
                      </Form>
                    </Formik>
                  </div>
                ) : (
                  <ul className="max-w-[70%] flex flex-col gap-6 m-auto pt-12">
                    {cartItems.map((item) => (
                      <li
                        key={item.id}
                        className="flex xl:gap-[6rem] md:gap-10 items-center flex-col lg:flex-row gap-4"
                      >
                        <Image
                          priority
                          width={128}
                          height={100}
                          src={item.img}
                          alt="Product Image"
                        />
                        <span className="font-mont flex flex-col gap-6 text-lg text-center">
                          {item.name}
                          <span className="font-mont flex flex-col gap-6 text-lg">
                            ${item.price}
                          </span>
                        </span>
                        <div className="flex gap-4">
                          <button onClick={() => handleIncreaseQuantity(item)}>
                            <BsPlusCircle className="text-[#888888] text-2xl" />
                          </button>
                          <button className="cursor-default border-2 border-gray-500 border-opacity-50 w-[3.524rem] h-[1.632rem] font-mont font-semibold text-xs">
                            {item.quantity}
                          </button>
                          <button onClick={() => handleDecreaseQuantity(item)}>
                            <AiOutlineMinusCircle className="text-[#888888] text-2xl" />
                          </button>
                        </div>
                        <span className="font-mont font-semibold text-sm">
                          ${item.price * item.quantity}
                        </span>
                        <button onClick={() => handleRemoveItem(item)}>
                          <MdCancel className="text-2xl hidden lg:block" />
                        </button>
                        <hr className="bg-[#D9D9D9] md:w-[35.25rem] w-[13.25rem] sm:w-[25.25rem] h-[0.188rem] rounded-full lg:hidden" />
                      </li>
                    ))}
                    <hr className="bg-[#D9D9D9]  xl:w-[49.25rem] h-[0.188rem] rounded-full hidden lg:block" />
                  </ul>
                )}
              </>
            )}
          </div>
          <div className="bg-[#D4B78F] p-8 lg:pt-[6.8rem] pt-8 lg:pb-[10.4rem] text-white flex flex-col gap-6 lg:gap-10">
            <h1 className=" font-mont font-semibold text-xl">SUMMARY</h1>
            <hr className=" lg:w-[12i2.875rem] h-[0.188rem] rounded-full bg-[#A37B44]" />
            <div className="flex flex-col gap-8">
              <div className="flex justify-between">
                <h1 className="font-mont font-medium text-sm">Subtotal</h1>
                <p className="font-mont font-medium text-sm">${subtotal}</p>
              </div>
              <div className="flex justify-between">
                <h1 className="font-mont font-medium text-sm">Shippping</h1>
                <p className="font-mont font-medium text-sm">
                  ${calculateShipping()}
                </p>
              </div>
              <hr className=" lg:w-[12i2.875rem] h-[0.188rem] rounded-full bg-[#A37B44]" />
              <div className="flex justify-between">
                <h1 className="font-mont font-medium ">Total</h1>
                <p className="font-mont font-medium ">${total}</p>
              </div>
            </div>
            <div className="flex flex-col gap-4 items-center">
              {checkoutMode ? (
                <div className="rounded-md lg:w-[13.875rem] xl:w-[18.875rem] w-[12.875rem] text-[#FFFFFF] font-medium font-mont h-[2.375rem] text-sm"></div>
              ) : (
                <button
                  onClick={handleCheckout}
                  className="bg-[#A37B44] hover:bg-[#ab8144] rounded-md lg:w-[13.875rem] xl:w-[18.875rem] w-[12.875rem] h-[2.375rem] text-[#FFFFFF] font-medium font-mont text-sm"
                >
                  {loading ? (
                    <span>
                      Checking out...
                      <span />
                      <ClipLoader
                        className="relative top-[7%] left-[22px]"
                        color="#000000"
                        size={15}
                      />
                    </span>
                  ) : (
                    <span>
                      Checkout
                      <span />
                    </span>
                  )}
                </button>
              )}

              <Link href="./products">
                <button className=" font-medium font-mont text-sm">
                  Continue Shopping
                </button>
              </Link>
            </div>
            <hr className=" lg:w-[12i2.875rem] h-[0.188rem] rounded-full bg-[#A37B44]" />
          </div>
        </div>
      </ReactModal>
    </>
  );
}
