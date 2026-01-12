import React from 'react'

const RightCardContent = (props) => {
  return (
          <div className="h-full w-full absolute top-0 left-0 p-8 flex flex-col justify-between">
        <h1 className="bg-white rounded-full h-12 w-12 flex items-center justify-center text-2xl font-semibold">
          {props.h}
        </h1>
        <div>
          <p className="font-medium leading-normal text-white mb-8">
            Neha Jethwani is known for her strong presence on Instagram and
            other social platforms, where she shares fashion-forward looks,
            lifestyle moments, and relatable content.
          </p>
          <div className="flex justify-between">
            <button className="bg-blue-600 text-white font-medium px-8 py-2 rounded-full">
              Explore
            </button>
            <button className="bg-blue-600 text-white font-medium px-4 py-2 rounded-full">
              <i class="ri-arrow-right-line"></i>
            </button>
          </div>
        </div>
      </div>
  )
}

export default RightCardContent
