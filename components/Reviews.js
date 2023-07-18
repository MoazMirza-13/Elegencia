"use client";

import { useState } from "react";
import ReactModal from "react-modal";
import { motion as m } from "framer-motion";
import btn from "../app/modules/btn.module.css";

export default function Reviews() {
  const [reviews, setReviews] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [name, setName] = useState("");
  const [review, setReview] = useState("");

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleReviewChange = (event) => {
    setReview(event.target.value);
  };

  const handleReviewSubmit = (event) => {
    event.preventDefault();
    if (name && review) {
      const newReview = { name, review };
      setReviews([...reviews, newReview]);
      setName("");
      setReview("");
      closeModal();
    }
  };

  return (
    <>
      <div
        id="reviews-container"
        className="md:max-w-[50%] max-w-[80%] m-auto items-center justify-center flex flex-col gap-8 mt-[10rem]"
      >
        <m.h1
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, type: "spring", stiffness: 300 }}
          className="font-playfair lg:font-semibold md:text-5xl text-[1.5rem] md:leading-[4.563rem] leading-[1.5rem] sm:leading-[2rem]"
        >
          Reviews
        </m.h1>
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-6">
            <h1 className="font-playfair font-medium text-lg">
              Amanda Collins
            </h1>
            <p className="text-[#888888] text-sm lg:text-base">
              "Absolutely delighted with my purchase from Elegencia! I recently
              bought the Lucid Side Table and it has exceeded all my
              expectations. The craftsmanship and attention to detail are
              exceptional"
            </p>
          </div>
          <div className="flex flex-col gap-6">
            <h1 className="font-playfair font-medium text-lg">Bruce Wayne</h1>
            <p className="text-[#888888] text-sm lg:text-base">
              "Absolutely delighted with my purchase from Elegencia! I recently
              bought the Lucid Side Table and it has exceeded all my
              expectations. The craftsmanship and attention to detail are
              exceptional"
            </p>
          </div>
          <div className="flex flex-col gap-6">
            <h1 className="font-playfair font-medium text-lg">
              Amanda Collins
            </h1>
            <p className="text-[#888888] text-sm lg:text-base">
              "Absolutely delighted with my purchase from Elegencia! I recently
              bought the Lucid Side Table and it has exceeded all my
              expectations. The craftsmanship and attention to detail are
              exceptional"
            </p>
          </div>
          <div className="flex flex-col gap-6">
            <h1 className="font-playfair font-medium text-lg">Mr. White</h1>
            <p className="text-[#888888] text-sm lg:text-base">
              "Absolutely delighted with my purchase from Elegencia! I recently
              bought the Lucid Side Table and it has exceeded all my
              expectations. The craftsmanship and attention to detail are
              exceptional"
            </p>
          </div>
          {reviews.map((review, index) => (
            <div key={index} className="flex flex-col gap-6">
              <h1 className="font-playfair font-medium text-lg">
                {review.name}
              </h1>
              <p className="text-[#888888] text-sm lg:text-base">
                {review.review}
              </p>
            </div>
          ))}
        </div>
        <div className="ml-auto hidden lg:block">
          <m.button
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 1 }}
            transition={{ duration: 0.4, delay: 0 }}
            onClick={openModal}
            className={`${btn["btn-6"]} text-white  font-semibold`}
          >
            Write a Review
          </m.button>
        </div>
      </div>
      <ReactModal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        style={{
          overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            zIndex: 999,
          },
          content: {
            maxWidth: "50%",
            maxHeight: "41.2%",
            margin: "auto",
            zIndex: 1000,
            padding: 0,
          },
        }}
      >
        <div className="flex flex-col gap-6 items-center justify-center nav-bg">
          <h1 className="font-playfair text-white  lg:font-semibold md:text-2xl text-[1.5rem] md:leading-[4.563rem] leading-[1.5rem] sm:leading-[2rem]">
            Write a Review
          </h1>
          <form className="w-full max-w-sm" onSubmit={handleReviewSubmit}>
            <div className="md:flex md:items-center mb-6">
              <div className="md:w-1/3">
                <label className="block text-white font-bold md:text-right mb-1 md:mb-0 pr-4">
                  Name
                </label>
              </div>
              <div className="md:w-2/3">
                <input
                  className="bg-[#F5F5F5] appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-[#C6A372]"
                  type="text"
                  placeholder="Your Name"
                  value={name}
                  onChange={handleNameChange}
                />
              </div>
            </div>
            <div className="md:flex md:items-center mb-6">
              <div className="md:w-1/3">
                <label className="block text-white font-bold md:text-right mb-1 md:mb-0 pr-4">
                  Review
                </label>
              </div>
              <div className="md:w-2/3">
                <textarea
                  rows="3"
                  cols="50"
                  className="bg-[#F5F5F5] appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-[#C6A372]"
                  placeholder="Write Your Review Here"
                  value={review}
                  onChange={handleReviewChange}
                />
              </div>
            </div>
            <div className="md:flex md:items-center">
              <div className="md:w-1/3"></div>
              <div className="md:w-2/3 flex gap-4">
                <button
                  className="shadow bg-[white] hover:bg-[#C6A372] hover:text-white focus:shadow-outline focus:outline-none text-[#C6A372] font-bold py-2 px-4 rounded mb-[0.9rem]"
                  type="submit"
                >
                  Submit
                </button>
                <button
                  className="shadow bg-[white] hover:bg-[#C6A372] hover:text-white focus:shadow-outline focus:outline-none text-[#C6A372] font-bold py-2 px-4 rounded mb-[0.9rem] ml-2"
                  type="button"
                  onClick={closeModal}
                >
                  Cancel
                </button>
              </div>
            </div>
          </form>
        </div>
      </ReactModal>
    </>
  );
}
