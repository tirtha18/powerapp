import React from 'react';

export default function Notes() {
  return (
    <div className="h-full w-full bg-black text-white">
      <div>
        <div className="h-96 w-full bg-black">
          <div className="flex px-10 py-64 h-full ">
            <p className="text-4xl">Your notes go here!</p>
          </div>
        </div>
        <div className="bg-white px-8 py-20 mx-10 rounded-3xl">
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8 px-12 sm:px-0">
            <button className="bg-red-500 rounded-3xl h-44 hover:scale-105 duration-200 text-white items-center font-bold text-xl">
              <div className="justify-center">First Semester</div>
            </button>
            <button className="bg-yellow-400 rounded-3xl h-44  hover:scale-105 duration-200 text-white items-center font-bold text-xl">
              <div className="justify-center">Second Semester</div>
            </button>
            <button className="bg-green-500 rounded-3xl h-44  hover:scale-105 duration-200 text-white items-center font-bold text-xl">
              <div className="justify-center">Third Semester</div>
            </button>
            <button className="bg-purple-500 rounded-3xl h-44  hover:scale-105 duration-200 text-white items-center font-bold text-xl">
              <div className="justify-center">Fourth Semester</div>
            </button>
            <button className="bg-blue-500 rounded-3xl h-44 hover:scale-105 duration-200 text-white items-center font-bold text-xl">
              <div className="justify-center">Fifth Semester</div>
            </button>
            <button className="bg-orange-400 rounded-3xl h-44 hover:scale-105 duration-200 text-white items-center font-bold text-xl">
              <div className="justify-center">Sixth Semester</div>
            </button>
            <button className="bg-indigo-500 rounded-3xl h-44 hover:scale-105 duration-200 text-white items-center font-bold text-xl">
              <div className="justify-center">Seventh Semester</div>
            </button>
            <button className="bg-pink-500 rounded-3xl h-44 hover:scale-105 duration-200 text-white items-center font-bold text-xl">
              <div className="justify-center">Eighth Semester</div>
            </button>
          </div>
        </div>
        <div className="h-96 w-full bg-black">
          
        </div>
      </div>
    </div>
  );
}
