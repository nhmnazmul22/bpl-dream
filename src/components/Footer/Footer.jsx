import React from "react";
import Container from "../Layout/Container";
import FooterLogo from "../../assets/logo-footer.png";
const Footer = () => {
  return (
    <section className="bg-[#06091A] pt-56 pb-10 ">
      <Container>
        <div>
          <figure className="mx-auto w-[150px] h-auto">
            <img src={FooterLogo} alt="Logo" className="w-full h-full" />
          </figure>
          <div className="grid grid-cols-12 gap-y-5 md:gap-5 items-start mt-10 ">
            <div className="col-span-12 md:col-span-4 max-w-xs space-y-2">
              <h4 className="text-white font-semibold text-lg">About Us</h4>
              <p className="text-gray-600 text-base">
                We are a passionate team dedicated to providing the best
                services to our customers.
              </p>
            </div>
            <div className="col-span-12 md:col-span-3 space-y-2">
              <h4 className="text-white font-semibold text-lg">Quick Links</h4>
              <ul className="list-disc ms-8 space-y-4 text-gray-600">
                <li>
                  <a href="/">Home</a>
                </li>
                <li>
                  <a href="/">Services</a>
                </li>
                <li>
                  <a href="/">About</a>
                </li>
                <li>
                  <a href="/">Contact</a>
                </li>
              </ul>
            </div>
            <div className="col-span-12 md:col-span-5 space-y-3">
              <h4 className="text-white font-semibold text-lg">Subscribe</h4>
              <p className="text-gray-600">
                Subscribe to our newsletter for the latest updates.
              </p>
              <div className="flex justify-between items-center h-[50px]">
                <input
                  type="text"
                  placeholder="Enter your email"
                  className="input h-full flex-1 rounded-s-2xl rounded-e-none focus-within:outline-0 focus-within:border-0"
                />
                <button className="btn border-0 h-full bg-[#E7FE29] inset-shadow-md  rounded-s-none rounded-e-2xl bg-linear-to-r from-pink-500 from-5% to-yellow-500 px-8">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
        <hr className="my-10 " />
        <div className="">
          <p className="text-center text-gray-600">
            @2024 Your Company All Rights Reserved.
          </p>
        </div>
      </Container>
    </section>
  );
};

export default Footer;
