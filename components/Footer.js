export default function Footer() {
  return (
    <>
      <div className=" bg-[#D4B78F] pt-12 pl-12 pr-12 pb-4">
        <div className="max-w-[85%] m-auto flex flex-col gap-4">
          <h1 className="font-playfair text-lg font-bold tracking-widest">
            ELEGENCIA
          </h1>
          <div className="flex justify-between">
            <div className="flex flex-col gap-4">
              <h1 className="font-mont font-bold text-sm">Address</h1>
              <ul className="font-mont text-sm flex flex-col gap-[0.4rem] text-[#2b2b2b]">
                <li>Canada</li>
                <li>Toronto</li>
                <li>+12324557890</li>
              </ul>
            </div>
            <div className="flex flex-col gap-4">
              <h1 className="font-mont font-bold text-sm">Help</h1>
              <ul className="font-mont text-sm flex flex-col gap-[0.4rem] text-[#2b2b2b]">
                <li>Shipping</li>
                <li>Returns</li>
                <li>Sizing</li>
              </ul>
            </div>
            <div className="flex flex-col gap-4">
              <h1 className="font-mont font-bold text-sm">Shop</h1>
              <ul className="font-mont text-sm flex flex-col gap-[0.4rem] text-[#2b2b2b]">
                <li>All Products</li>
                <li>Bedroom</li>
                <li>Dinning Room</li>
              </ul>
            </div>
            <div className="flex flex-col gap-4">
              <h1 className="font-mont font-bold text-sm">Legal Stuff</h1>
              <ul className="font-mont text-sm flex flex-col gap-[0.4rem] text-[#2b2b2b]">
                <li>Shipping & Delivery</li>
                <li>Terms & Conditions</li>
                <li>Privacy & Policy</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-8 pt-6">
          <hr className="border border-1 border-gray-600" />
          <p className="font-mont font-medium text-center text-xs text-[#646464]">
            Copyright 2022, ELEGENCIA, All rights reserved
          </p>
        </div>
      </div>
    </>
  );
}