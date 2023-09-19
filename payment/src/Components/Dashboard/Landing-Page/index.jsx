import React from "react";

import Nav from "../Navbar/Nav";
import img1 from "../assets/py3.png";
import "./index.css"
import Card from "../UI/Card/Card";
import Card2 from "../UI/Card/Card2";
import Circle from "../UI/Circle/Circle";

const HomePage = () => {
  return (
    <div className=" overflow-auto h-screen w-full bg-[#2A1F85]   lg:overflow-hidden">
      <Nav></Nav>
      <div className="flex h-full relative">
        <div className="hidden sm:block w-8/12 ">
          <div className="hidden lg:block lingkaran absolute bottom-0 left-0  rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 outline outline-offset-8  outline-purple-600"></div>
          <div className="circle1">
            <Circle />
          </div>
          <div className="card2">
            <Card></Card>
          </div>
          <div className="card1">
            <Card></Card>
          </div>
          <div></div>
        </div>
        <div className=" w-full bg-[#2A1F85] flex flex-col items-center  sm:w-4/12  justify-center h-full px-10">
          <div>
            <h4 className="text-left text-sm flex text-green-400 font-semibold">
              <span className="pr-2">
                <img className="w-5" src={img1} alt="" />
              </span>
              STAR SAVING YOUR MONEY SMARTLY
            </h4>
            <h1 className=" w-full text-6xl  pt-5 font-semibold md:w-3/4 text-white text-left">
              Payments have never been easier
            </h1>
            <div className=" md:hidden card3 pt-4">
              <Card2></Card2>
            </div>
            <p className="text-left pt-5 text-white">
              Discover the easiest and smartest way to manage your personal finances. Save, analyse, invest, withdraw, send, and receive money all over world with no limit.
            </p>
            <div className="flex  pt-5 gap-4">
              <button className="bg-blue-500 opacity-60 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-full">
                Get Started
              </button>{" "}
              <button className="  bg-inherit  text-gray-200 font-bold py-2 px-3 rounded inline-flex items-center">
                <svg
                  className="fill-current w-4 h-4 mr-2 "
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
                </svg>
                <span>Download app</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
