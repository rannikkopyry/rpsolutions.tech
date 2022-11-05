import React from "react";

const slideImages = [
    {
      url: 'https://miro.medium.com/max/400/1*nP2C50GK4_-ly_R_mq3juQ.png',
      caption: 'GraphQL'
    },
    {
      url: 'https://download.logo.wine/logo/Amazon_Web_Services/Amazon_Web_Services-Logo.wine.png',
      caption: 'AWS'
    },
    {
      url: 'https://i.stack.imgur.com/kyKz5.png',
      caption: 'React'
    },
  ];

export default function Slider() {
    return (
        <>
      <div className=" flex items-center min-h-screen justify-center">
        {/* 1. */}
        <div className="w-[200%] h-20 border-t border-b border-gray-600 overflow-hidden relative">
          {/* 2. */}
          <div className="w-[200%] flex items-center h-20 justify-around absolute left-0 animate gap-20 animate">
            {/* 3 */}
            {slideImages.map((slideImage, index)=> (
            <div className="each-slide" key={index}>
              <div style={{'backgroundImage': `url(${slideImage.url})`}}>
                <span>{slideImage.caption}</span>
              </div>
            </div>
          ))} 
            {slideImages.map((slideImage, index)=> (
            <div className="each-slide" key={index}>
              <div style={{'backgroundImage': `url(${slideImage.url})`}}>
                <span>{slideImage.caption}</span>
              </div>
            </div>
          ))} 
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
            0% {
              left: 0;
            }
            100% {
              left: -100%;
            }
          }
          
          .animate {
            animation: scroll 15s linear infinite;
          }
      `}</style>
    </>
    );
  }