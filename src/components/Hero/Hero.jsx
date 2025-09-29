import React from "react";
import Container from "../Layout/Container";
import BannerImg from "../../assets/banner-main.png";
import BgShadow from "../../assets/bg-shadow.png";

const Hero = () => {
  return (
    <section>
      <Container>
        <div className="bg-[#131313] bg-shadow p-5 rounded-2xl mt-10  min-h-[545px] flex justify-center items-center">
          <div className={`text-center space-y-4`}>
            <figure className="w-[250px] h-[200px] mx-auto">
              <img
                src={BannerImg}
                alt="banner Images"
                className="w-full h-full object-cover"
              />
            </figure>
            <h1 className="text-white text-2xl sm:text-4xl md:text-[40px] font-bold">
              Assemble Your Ultimate Dream 11 Cricket Team
            </h1>
            <p className="text-gray-100 text-xl sm:text-2xl">
              Beyond Boundaries Beyond Limits
            </p>
            <button className="btn border-0  bg-[#E7FE29] ring-2 ring-[#E7FE29] ring-offset-4 ring-offset-[#131313] hover:border-0 hover:ring-4 duration-300 ">
              Claim Free Credit
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
