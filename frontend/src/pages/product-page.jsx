import React, { useState } from "react";

const ProductPage = () => {
  const [selectedSize, setSelectedSize] = useState("S");
  const [selectedColor, setSelectedColor] = useState("gray");

  const sizes = ["XS", "S", "M", "L"];
  const colors = {
    gray: "bg-gray-300",
    black: "bg-black",
    green: "bg-green-700",
    darkGreen: "bg-green-900",
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex">
        <div className="flex basis-1/2">
          <div className="flex flex-col p-2 space-y-2 mr-2">
            {
              <img
                src={img}
                alt="Thumbnail"
                className="w-16 h-16 rounded-lg cursor-pointer"
              />
            }
            <img
              src="/product1.png"
              alt="Thumbnail"
              className="w-16 h-16 rounded-lg cursor-pointer"
            />
          </div>
          <img
            src="/product1.png"
            alt="Product"
            className="flex-1 rounded-lg"
          />
        </div>

        <div className="w-1/2 pl-8">
          <h1 className="text-3xl font-semibold">Running Shorts</h1>

          <div className="mt-4">
            <span className="font-semibold">Size:</span>
            <div className="flex space-x-2 mt-2">
              {sizes.map((size) => (
                <button
                  key={size}
                  className={`border rounded-md py-2 px-4 ${selectedSize === size ? "bg-black text-white" : ""
                    }`}
                  onClick={() => setSelectedSize(size)}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Color Selection */}
          <div className="mt-4">
            <span className="font-semibold">Color:</span>
            <div className="flex space-x-2 mt-2">
              {Object.entries(colors).map(([color, bgColor]) => (
                <button
                  key={color}
                  className={`w-10 h-10 rounded-full border ${selectedColor === color ? "ring-2 ring-black" : ""
                    } ${bgColor}`}
                  onClick={() => setSelectedColor(color)}
                ></button>
              ))}
            </div>
          </div>

          {/* Price and Add to Cart */}
          <div className="mt-4">
            <span className="text-xl font-semibold">$50.00</span>
            <button className="bg-green-500 text-white rounded-lg py-2 px-6 ml-4">
              Add to Cart
            </button>
          </div>

          {/* Product Description */}
          <div className="mt-4 text-gray-600">
            <p>
              Find stunning women's cocktail dresses and party dresses. Stand
              out in lace and metallic cocktail dresses and party dresses from
              all your favorite brands.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
