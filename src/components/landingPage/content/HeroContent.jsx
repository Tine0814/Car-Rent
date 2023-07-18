import React, { useState } from "react";
import jeep from "../../../assets/img/jeep.png";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import SearchIcon from "@mui/icons-material/Search";

const HeroContent = () => {
  const [isInputFocused, setIsInputFocused] = useState(false);
  return (
    <>
      <div className="h-screen relative  flex items-center justify-center text-textPrimary overflow-x-hidden p-10 text-[15px]">
        <div className="bg-primary w-[200px] h-[200px] rounded-full absolute -left-32 top-5"></div>
        <div className="bg-primary w-[40px] h-[40px] rounded-full absolute left-20 top-64"></div>
        <div className="bg-primary w-[700px] h-[700px] rounded-full absolute -right-[9rem] -top-20"></div>
        <div className="m-20 px-20 max-w-[1200px] w-full relative mt-[12rem]">
          <div className="relative bg-secondary shadow-lg w-[380px] p-5">
            <h1 className="text-[25px] font-bold ">Make your Trip</h1>
            <p className=" text-textSecondary mb-7">
              Rent car to move from local hosts
              <br /> in 180+ countries.
            </p>
            <form action="">
              <div className="mb-5">
                <label htmlFor="" className="block  uppercase font-bold mb-5">
                  Where you from
                </label>
                <div className="relative">
                  <input
                    type="text"
                    className="w-full h-[30px] rounded-md border border-borderColor py-5 px-10 focus:border-none  focus:outline-none focus:ring-1  focus:ring-primary"
                  />
                  <div className="absolute text-primary  top-[50%] translate-y-[-50%] left-2">
                    <LocationOnIcon />
                  </div>
                </div>
              </div>
              <div className="mb-5">
                <label htmlFor="" className="block  uppercase font-bold mb-5">
                  Where you go
                </label>
                <div className="relative">
                  <input
                    type="text"
                    className="w-full h-[30px] rounded-md border border-borderColor py-5 px-10 focus:border-none  focus:outline-none focus:ring-1  focus:ring-primary"
                  />
                  <div className="absolute text-primary  top-[50%] translate-y-[-50%] left-2">
                    <LocationOnIcon />
                  </div>
                </div>
              </div>
              <div className="flex justify-between gap-4 mb-5">
                <div>
                  <label htmlFor="" className="block  uppercase font-bold mb-5">
                    Journey Date
                  </label>
                  <input
                    type="date"
                    className="w-[160px] h-[30px] rounded-md border border-borderColor p-5  focus:border-none  focus:outline-none focus:ring-1  focus:ring-primary"
                  />
                </div>
                <div>
                  <label htmlFor="" className="block  uppercase font-bold mb-5">
                    Return Date
                  </label>
                  <input
                    type="date"
                    className="w-[160px] h-[30px] rounded-md border border-borderColor p-5  focus:border-none  focus:outline-none focus:ring-1  focus:ring-primary"
                  />
                </div>
              </div>
              <button className="w-full p-3 flex gap-4 justify-center bg-buttonColor shadow-md rounded-md text-white font-bold uppercase">
                <SearchIcon />
                Search Vehicle
              </button>
            </form>
          </div>
          <div className="absolute bottom-0 right-0">
            <img src={jeep} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroContent;
