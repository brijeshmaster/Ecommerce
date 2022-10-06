import React from "react";
import Product from "./Product";
import Sdata from "./Sdata";

const Gallary = () => {
  

  return (
    <section className="text-gray-600 body-font shadow-lg">
      <div className="container  py-24 mx-auto overflow-hidden">
        <div className="flex flex-wrap  text-center ">
          {Sdata.map((val, index) => (
            <Product
              key={val.id}
              
              category={val.category}
              img={val.img}
              comp={val.comp}
              price={val.price}
          
              
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallary;

