import React from "react";
import productOne from "../assets/image-product-1.jpg";
import thumbnailOne from "../assets/image-product-1-thumbnail.jpg";
import thumbnailTwo from "../assets/image-product-2-thumbnail.jpg";
import thumbnailThree from "../assets/image-product-3-thumbnail.jpg";
import thumbnailFour from "../assets/image-product-4-thumbnail.jpg";

export default function LeftSide() {
  return (
    <div>
      <div>
        <img src={productOne} alt="" className="w-1/3 h-1/3" />
      </div>
      <div className="flex">
        <img src={thumbnailOne} alt="" className="w-24 h-24" />
        <img src={thumbnailTwo} alt="" className="w-24 h-24" />
        <img src={thumbnailThree} alt="" className="w-24 h-24" />
        <img src={thumbnailFour} alt="" className="w-24 h-24" />
      </div>
    </div>
  );
}
