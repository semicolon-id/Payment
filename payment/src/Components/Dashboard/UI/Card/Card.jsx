import React from "react";
import chipCard from "../../assets/chip1.png";
import visa from "../../assets/visa1.png";

const Card = () => {
  return (
    <div>
      <div className="h-60 w-96 flex flex-col bg-sky-500 opacity-90 rounded-2xl p-3 shadow-lg   ">
        <div className="text-lg font-medium text-white text-left pl-1">Platinum</div>
        <div className="pt-2">
          <img className="w-10" src={chipCard} alt="" />
        </div>
        <div className="text-left pl-1 pt-2 text-white">9876 1357 2468 9999</div>
        <div className="flex pl-1  gap-20 w-full pt-2  font-semibold">
          <div className="flex  items-center gap-3">
            <div className="text-xs  text-white">
              VALID
              <br />
              FROM
            </div>
            <div className="text-xs pr-3 font-semibold text-white">
              <h3>08/23</h3>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="text-xs text-white">
              VALID
              <br />
              FROM
            </div>
            <div className="text-xs  text-white ">
              <h3>08/23</h3>
            </div>
          </div>
        </div>
        <div className="flex  items-center justify-between">
          <div className=" text-left text-xl font-bold text-white pt-2">SHIVANSHU MATHUR</div>
          <img className="w-15 h-11 pt-2" src={visa} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Card;