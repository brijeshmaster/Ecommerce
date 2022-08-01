import React from "react";

// const Product = ({ comp, img, category, price }) => {
  const Product =({id, comp, img, category, price, handleClick})=>{
    // const{id, comp, img, category, price }=item;
  return (
    <>
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full ">
        <a href="x" className="block relative h-48 rounded overflow-hidden">
          <img
            alt="ecommerce"
            className="object-cover object-center w-full h-full block cursor-pointer "
            src={img}
          />
        </a>
        <div className="mt-4">
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
            {category}
          </h3>
          <h2 className="text-gray-900 title-font text-lg font-medium">
            {comp}
          </h2>
          <p className="mt-1">${price}</p>
          
          <button onClick={() => handleClick(id, comp, img, category, price)} className="text-blue-700 bg-white px-5 py-4 shadow-md rounded-full cursor-pointer font-bold my-3 hover:shadow-xl active:scale-90 transition duration-150" >
          Add to Cart
        </button>
        </div>
      </div>
    </>
  );
};

export default Product;

// import React from "react";

// const Product = ({ img, category, comp, price }) => {
//   return (
//     <>
//       <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
//         <a className="block relative h-48 rounded overflow-hidden">
//           <img
//             alt="ecommerce"
//             className="object-cover object-center w-full h-full block cursor-pointer"
//             src={img}
//           />
//         </a>
//         <div className="mt-4">
//           <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
//             {category}
//           </h3>
//           <h2 className="text-gray-900 title-font text-lg font-medium">
//             {comp}
//           </h2>
//           <p className="mt-1">${price}</p>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Product;
