import React from "react";
import productOne from "../assets/image-product-1.jpg";
import thumbnailOne from "../assets/image-product-1-thumbnail.jpg";
import thumbnailTwo from "../assets/image-product-2-thumbnail.jpg";
import thumbnailThree from "../assets/image-product-3-thumbnail.jpg";
import thumbnailFour from "../assets/image-product-4-thumbnail.jpg";

export default function LeftSide() {
  return (
    <div className="flex flex-col items-center">
      <div className="flex justify-center mb-4">
        <img
          src={productOne}
          alt="Product"
          className="w-2/3 h-auto rounded-lg"
        />
      </div>
      <div className="flex space-x-10">
        <img
          src={thumbnailOne}
          alt="Thumbnail 1"
          className="w-16 h-16 mr-2 rounded-md cursor-pointer"
        />
        <img
          src={thumbnailTwo}
          alt="Thumbnail 2"
          className="w-16 h-16 mr-2 rounded-md cursor-pointer"
        />
        <img
          src={thumbnailThree}
          alt="Thumbnail 3"
          className="w-16 h-16 mr-2 rounded-md cursor-pointer"
        />
        <img
          src={thumbnailFour}
          alt="Thumbnail 4"
          className="w-16 h-16 rounded-md cursor-pointer"
        />
      </div>
    </div>
  );
}
