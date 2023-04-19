import React from 'react';

const slideImages = [
  {
    url: 'https://miro.medium.com/max/400/1*nP2C50GK4_-ly_R_mq3juQ.png',
    caption: 'GraphQL'
  },
  {
    url:
      'https://download.logo.wine/logo/Amazon_Web_Services/Amazon_Web_Services-Logo.wine.png',
    caption: 'AWS'
  },
  {
    url: 'https://i.stack.imgur.com/kyKz5.png',
    caption: 'React'
  }
];

export default function SliderComponent() {
  return (
    <>
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
