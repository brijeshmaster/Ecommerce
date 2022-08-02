import React, { useState } from "react";
import Product from "./Product";
import Sdata from "./Sdata";

const Gallary = () => {
  // const [Cart, setCart] = useState([]);

  // const handleClick = (  comp, img, category, price) => {
  //   console.log( comp, img, category, price);
  // };

  return (
    <section className="text-gray-600 body-font shadow-lg">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-6 text-center ">
          {Sdata.map((val, index) => (
            <Product
              key={val.id}
              // item={val}
              category={val.category}
              img={val.img}
              comp={val.comp}
              price={val.price}
          
              // handleClick={
              //   (item) => {
              //   Cart.push(item)
              //   console.log("cart is g", Cart)}
              //   }
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallary;

{
  /* <Product
key={item.id}
item={item}
handleClick={handleClick} */
}
// img={val.img}
// category={val.category}
// comp={val.comp}
// price={val.price}

{
  /* /> */
}
