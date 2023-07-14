import React from "react";
import heroBg from "../../../assets/img/building.jpg";

const HeroContent = () => {
  return (
    <>
      <div className="h-screen flex items-center justify-center flex-col gap-5 text-center text-white">
        <div className="absolute top-0 w-full h-[450px] bg-primary mix-blend-overlay z-[-1]"></div>
        <div className="flex justify-center items-center flex-col gap-6">
          <h1 className="text-[40px]">
            Welcome <span className="font-bold">Turbo</span>
          </h1>
          <p className="text-[15px] w-[650px] text-[#e1dddd]">
            Looking to rent a car for an upcoming vacation or business trip? in
            TURBO, we make renting <br />a car seamless so you can get ringt on
            your way
          </p>
        </div>
        <div className="flex gap-5">
          <div>
            <div>12,460</div>
            <div>User Access</div>
          </div>
          <div>
            <div>8,960</div>
            <div>Cars</div>
          </div>
          <div>
            <div>10,360</div>
            <div>Reviews</div>
          </div>
        </div>
        <div className="text-black">Cars</div>
      </div>
    </>
  );
};

export default HeroContent;
