import React from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { useState } from 'react';
import Powlogo from "../images/unilogo.png";
import { Link } from 'react-router-dom'; 

export default function NavBar() {
    const [nav, setNav] = useState(false);
    const links = [
        {
            id: 1,
            link: 'home',
            routes: '/'
        },
        {
            id: 2,
            link: 'syllabus',
            routes: '/syllabus'
        },
        {
            id: 3,
            link: 'notes',
            routes: '/notes'
        },
        {
            id: 4,
            link: 'placements',
            routes: '/placements'
        },
        {
            id: 5,
            link: 'contacts',
            routes: '/contacts'
        },
        {
            id: 6,
            link: 'feedback',
            routes: '/feedback'
        },
    ];

    return (
        <div className="flex justify-between items-center w-full h-20 px-4 text-white bg-black fixed">
            <div className="w-20 py-4 mt-5 hover:scale-110 duration-300">
                <img src={Powlogo} alt="a"></img>
            </div>
            <ul className="hidden md:flex">
                {links.map(({ id, link, routes }) => (
                    <li key={id} className="py-6 px-4 cursor-pointer capitalize font-medium text-gray-200 hover:scale-105 duration-200">
                        <Link to={routes}>
                            <span className="hover:bg-gradient-to-r from-indigo-600 to-pink-500 px-2 py-1.5 rounded-3xl duration-200">
                                {link}
                            </span>
                        </Link>
                    </li>
                ))}
            </ul>
            <div onClick={() => setNav(!nav)} className="py-6 cursor-pointer pr-4 z-10 text-gray-500 md:hidden">
                {!nav ? <FaBars size={30}/> : <FaTimes size={30}/>}
            </div>
            {nav && (
                <ul className="flex flex-col justify-between items-center w-full h-screen px-4 text-white bg-black z-10">
                    {links.map(({ id, link, routes }) => (
                        <li key={id} className="px-4 cursor-pointer capitalize text-4xl py-6" onClick={() => setNav(!nav)}>
                            <Link to={routes}>
                            <span className="hover:bg-gradient-to-r from-indigo-600 to-pink-500 px-2 py-1.5 rounded-3xl duration-200">
                                {link}
                            </span>
                        </Link>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};
