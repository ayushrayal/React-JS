import React from 'react'
import 'remixicon/fonts/remixicon.css'; // Import the Remix Icon CSS

const RightCardContent = (props) => {
  function buttonClick() {
    console.log("Hello Neha Jethwani...");
  }
  return (
    <div
      id="Content"
      className="h-full w-full absolute top-0 left-0 p-8 flex flex-col justify-between"
      style={{
        background: 'linear-gradient(to bottom, rgba(0,0,0,0.6), rgba(0,0,0,0.25))'
      }}
    >
      <h1 className="bg-white rounded-full h-12 w-12 flex items-center justify-center text-2xl font-semibold">
        {props.h}
      </h1>
      <div>
        <div className="marquee mb-8">
          <div className="marquee__inner">
            <p className="font-medium leading-normal text-white mb-0">
              Neha Jethwani is known for her strong presence on Instagram and
              other social platforms, where she shares fashion-forward looks,
              lifestyle moments, and relatable content.
            </p>
          </div>
        </div>
        <div className="flex justify-between">
          <button onClick={buttonClick} className="text-white font-medium px-8 py-2 rounded-full bg-white/10">
            Explore
          </button>
          <button
            style={{ backgroundColor: props.color || 'gray' }}
            className="text-white font-medium px-4 py-2 rounded-full"
          >
            <i className="ri-arrow-right-line"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default RightCardContent
