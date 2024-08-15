import React from "react";
import Tabsection from "../components/Tabsection";
import NewProducts from "../components/newArrival/NewProducts";
import { newProducts } from "../data/newProducts";

function NewArrival() {
  return (
    <>
      <div>
        <div>
          <img src="./Freshdesigns.jpg" alt="" />
        </div>
        <div className=" flex justify-center text-xs gap-3 sm:gap-10 sm:text-lg pt-5  pb-2 border-b-2">
          <button>WOMEN</button>
          <button>MEN</button>
          <button>GIRLS</button>
          <button>BOYS</button>
          <button>BEAUTY</button>
          <button>HOME</button>
        </div>
        <Tabsection />
        <div className="flex pt-3 justify-around grid-cols-2 sm:grid-cols-4 flex-wrap ">
          {newProducts.map((val) => {
            return <NewProducts image={val.image} rs={val.rs} />;
          })}
        </div>
      </div>
    </>
  );
}

export default NewArrival;
