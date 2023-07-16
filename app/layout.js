"use client";
import "./globals.css";

import { Playfair_Display, Montserrat } from "next/font/google";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "@/components/customCss/custom-toastify.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair",
});
const mont = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
});

import Footer from "@/components/Footer";
import BeforeFooter from "@/components/BeforeFooter";

import store from "./redux/store";
import { Provider } from "react-redux";

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={` ${playfair.className} ${mont.className}`}>
      <body>
        <ToastContainer />
        <Provider store={store}>
          {children}
          <BeforeFooter />
          <Footer />
        </Provider>
      </body>
    </html>
  );
}
