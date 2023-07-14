import React from "react";

const NavComponent = () => {
  return (
    <div>
      <nav className="fixed w-full flex justify-evenly text-white text-[12px] ">
        <div>
          <ul className="uppercase flex gap-10  p-6">
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
          <h1 className="text-[20px] p-2">
            <a href="">Turbo.</a>
          </h1>
        </div>
        <div>
          <ul className="uppercase flex gap-10 p-6">
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
      </nav>
    </div>
  );
};

export default NavComponent;
