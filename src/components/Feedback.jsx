import React from 'react'

export default function Feedback() {
  return (
    <div name="Feedback" className="w-full h-screen bg-gradient-to-b from-black to-gray-950 text-white overflow-auto">
        <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full my-20">
            <div className="pb-8">
                <p className="text-4xl font-bold inline border-b-4 border-gray-500 ">Feedback</p>
                <p className="py-6">Have any Feedback? Submit here!</p>
            </div>
            <div className="flex justify-center items-center">
                <form action = "https://getform.io/f/a305886b-e31c-4f88-a3fa-79972b308ae6" className="flex flex-col w-full md:w-1/2" method="POST">
                    <input
                    type="text"
                    name="name"
                    placeholder="Enter your name"
                    className="p-2 bg-transparent border-2 rounded-md text-white focus-outline-none"
                    >
                    </input>
                    <input
                    type="text"
                    name="email"
                    placeholder="Enter your email"
                    className="p-2 bg-transparent border-2 rounded-md text-white focus-outline-none my-4">
                    </input>
                    <textarea
                    placeholder="Enter your feedback!"
                    name="message"
                    rows="10"
                    className="p-2 bg-transparent border-2 rounded-md text-white focus-outline-none">
                    </textarea>
                    <button className="text-white bg-gradient-to-r from-indigo-600 to-pink-500 mx-auto flex items-center rounded-xl hover:scale-110 duration-300 px-6 py-2 my-6">
                        Submit
                    </button>
                </form>
            </div>
        </div>
    </div>
  )
}
