import React from "react";

const images = [
    {
        src: "https://i.stack.imgur.com/kyKz5.png"
    },
    {
        src: "https://download.logo.wine/logo/Amazon_Web_Services/Amazon_Web_Services-Logo.wine.png"
    }
]

export default function Slider() {
    return (
      <div className=" flex items-center min-h-screen justify-center">
        {/* 1. */}
        <div className="w-[200%] h-20 border-t border-b border-gray-600 overflow-hidden relative">
          {/* 2. */}
          <div className="w-[200%] flex items-center h-20 justify-around absolute left-0 animate gap-20 animate">
            {/* 3 */}
            {images.map((i) => {
              return (
                <div className="flex justify-center items-start w-[20rem]">
                  <img key={i} src={i}/>
                </div>
              );
            })}
            {images.map((i) => {
              return (
                <div className="flex justify-center items-start w-[20rem]">
                  <img key={i} src={i}/>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }