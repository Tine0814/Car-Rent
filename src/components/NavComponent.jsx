import React from "react";
import useToggle from "../hooks/useToggle";
import MenuIcon from "@mui/icons-material/Menu";

const NavComponent = () => {
  const { value, toggleValue } = useToggle(false);
  return (
    <div>
      <nav className="fixed w-full z-20 p-10">
        <div className="justify-evenly text-textPrimary text-[12px]  hidden lg:flex">
          <div>
            <ul className="uppercase flex gap-10 ">
              <li>
                <a href="">Home</a>
              </li>
              <li>
                <a href="">Cars</a>
              </li>
              <li>
                <a href="">Services</a>
              </li>
              <li>
                <a href="">About</a>
              </li>
            </ul>
          </div>
          <div>
            <h1 className="text-[20px] ">
              <a href="">Turbo.</a>
            </h1>
          </div>
          <div>
            <ul className="uppercase flex gap-10 ">
              <li>
                <a href="">Blog</a>
              </li>
              <li>
                <a href="">Contact</a>
              </li>
              <li>
                <a href="">Login</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="lg:hidden flex" onClick={toggleValue}>
          <MenuIcon style={{ fontSize: "40px" }} />
        </div>
        <div
          className={`${
            value ? "flex" : "hidden"
          } w-[100px] h-[100px] bg-red-200`}
        ></div>
      </nav>
    </div>
  );
};

export default NavComponent;
