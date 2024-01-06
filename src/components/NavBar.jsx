import React from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { useState } from 'react';
import Powlogo from "../images/unilogo.png";
import { Link } from 'react-router-dom';

export default function NavBar() {
    const [nav, setNav] = useState(false);
    const [home, sethome] = useState(true);
    const [dashboard, setdashboard] = useState(false);
    const [syllabus, setsyllabus] = useState(false);
    const [notes, setnotes] = useState(false);
    const [placements, setplacements] = useState(false);
    const [contacts, setcontacts] = useState(false);
    const [feedback, setfeedback] = useState(false);
    const links = [
        {
            id: 1,
            link: 'home',
            routes: '/'
        },
        {
            id: 2,
            link: 'dashboard',
            routes: '/dashboard'
        },
        {
            id: 3,
            link: 'syllabus',
            routes: '/syllabus'
        },
        {
            id: 4,
            link: 'notes',
            routes: '/notes'
        },
        {
            id: 5,
            link: 'placements',
            routes: '/placements'
        },
        {
            id: 6,
            link: 'contacts',
            routes: '/contacts'
        },
        {
            id: 7,
            link: 'feedback',
            routes: '/feedback'
        },
    ];
    const homeclick = () => {
        sethome(!home);
    }
    const dashboardclick = () => {
        setdashboard(!dashboard);
    }
    const syllabusclick = () => {
        setsyllabus(!syllabus);
    }
    const notesclick = () => {
        setnotes(!notes);
    }
    const placementsclick = () => {
        setplacements(!placements);
    }
    const contactclick = () => {
        setcontacts(!contacts);
    }
    const feedbackclick = () => {
        setfeedback(!feedback);
    }

    return (
        <div className="flex justify-between items-center w-full h-24 px-4 text-white bg-black fixed z-10">
            <div className="w-20 py-4 hover:scale-110  duration-300">
                <img className="mt-1" src={Powlogo} alt="a"></img>
            </div>
            <ul className="hidden md:flex">
                <li key={1} className="py-6 px-4 cursor-pointer capitalize font-medium text-gray-200 hover:scale-105 duration-200"
                    onClick={() => {
                        !home && homeclick();
                        dashboard && dashboardclick();
                        syllabus && syllabusclick();
                        notes && notesclick();
                        placements && placementsclick();
                        contacts && contactclick();
                        feedback && feedbackclick();
                    }}>
                    <Link to='/'>
                        <span className={`hover:bg-gradient-to-r from-indigo-600 to-pink-500 px-2 py-1.5 rounded-3xl duration-200 ${home ? 'bg-gradient-to-r from-indigo-600 to-pink-500' : ''}`}>
                            Home
                        </span>
                    </Link>
                </li>
                <li key={2} className="py-6 px-4 cursor-pointer capitalize font-medium text-gray-200 hover:scale-105 duration-200"
                    onClick={() => {
                        home && homeclick();
                        !dashboard && dashboardclick();
                        syllabus && syllabusclick();
                        notes && notesclick();
                        placements && placementsclick();
                        contacts && contactclick();
                        feedback && feedbackclick();
                    }}>
                    <Link to='/dashboard'>
                        <span className={`hover:bg-gradient-to-r from-indigo-600 to-pink-500 px-2 py-1.5 rounded-3xl duration-200 ${dashboard ? 'bg-gradient-to-r from-indigo-600 to-pink-500' : ''}`}>
                            Dashboard
                        </span>
                    </Link>
                </li>
                <li key={3} className="py-6 px-4 cursor-pointer capitalize font-medium text-gray-200 hover:scale-105 duration-200"
                    onClick={() => {
                        home && homeclick();
                        dashboard && dashboardclick();
                        !syllabus && syllabusclick();
                        notes && notesclick();
                        placements && placementsclick();
                        contacts && contactclick();
                        feedback && feedbackclick();
                    }}>
                    <Link to='/syllabus'>
                        <span className={`hover:bg-gradient-to-r from-indigo-600 to-pink-500 px-2 py-1.5 rounded-3xl duration-200 ${syllabus ? 'bg-gradient-to-r from-indigo-600 to-pink-500' : ''}`}>
                            syllabus
                        </span>
                    </Link>
                </li>
                <li key={4} className="py-6 px-4 cursor-pointer capitalize font-medium text-gray-200 hover:scale-105 duration-200"
                    onClick={() => {
                        home && homeclick();
                        dashboard && dashboardclick();
                        syllabus && syllabusclick();
                        !notes && notesclick();
                        placements && placementsclick();
                        contacts && contactclick();
                        feedback && feedbackclick();
                    }}>
                    <Link to='/notes'>
                        <span className={`hover:bg-gradient-to-r from-indigo-600 to-pink-500 px-2 py-1.5 rounded-3xl duration-200 ${notes ? 'bg-gradient-to-r from-indigo-600 to-pink-500' : ''}`}>
                            notes
                        </span>
                    </Link>
                </li>
                <li key={5} className="py-6 px-4 cursor-pointer capitalize font-medium text-gray-200 hover:scale-105 duration-200"
                    onClick={() => {
                        home && homeclick();
                        dashboard && dashboardclick();
                        syllabus && syllabusclick();
                        notes && notesclick();
                        !placements && placementsclick();
                        contacts && contactclick();
                        feedback && feedbackclick();
                    }}>
                    <Link to='/placements'>
                        <span className={`hover:bg-gradient-to-r from-indigo-600 to-pink-500 px-2 py-1.5 rounded-3xl duration-200 ${placements ? 'bg-gradient-to-r from-indigo-600 to-pink-500' : ''}`}>
                            placements
                        </span>
                    </Link>
                </li>
                <li key={6} className="py-6 px-4 cursor-pointer capitalize font-medium text-gray-200 hover:scale-105 duration-200"
                    onClick={() => {
                        home && homeclick();
                        dashboard && dashboardclick();
                        syllabus && syllabusclick();
                        notes && notesclick();
                        placements && placementsclick();
                        !contacts && contactclick();
                        feedback && feedbackclick();
                    }}>
                    <Link to='/contacts'>
                        <span className={`hover:bg-gradient-to-r from-indigo-600 to-pink-500 px-2 py-1.5 rounded-3xl duration-200 ${contacts ? 'bg-gradient-to-r from-indigo-600 to-pink-500' : ''}`}>
                            contacts
                        </span>
                    </Link>
                </li>
                <li key={7} className="py-6 px-4 cursor-pointer capitalize font-medium text-gray-200 hover:scale-105 duration-200"
                    onClick={() => {
                        home && homeclick();
                        dashboard && dashboardclick();
                        syllabus && syllabusclick();
                        notes && notesclick();
                        placements && placementsclick();
                        contacts && contactclick();
                        !feedback && feedbackclick();
                    }}>
                    <Link to='/feedback'>
                        <span className={`hover:bg-gradient-to-r from-indigo-600 to-pink-500 px-2 py-1.5 rounded-3xl duration-200 ${feedback ? 'bg-gradient-to-r from-indigo-600 to-pink-500' : ''}`}>
                            feedback
                        </span>
                    </Link>
                </li>
            </ul>
            <div onClick={() => setNav(!nav)} className="py-6 cursor-pointer pr-4 z-10 text-gray-500 md:hidden">
                {!nav ? <FaBars size={30}/> : <FaTimes size={30}/>}
            </div>
            {nav && (
                <ul className="flex flex-col justify-centre items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to bg-gray-950">
                    {links.map(({ id, link, routes }) => (
                        <li key={id} className="px-4 cursor-pointer capitalize text-3xl py-6" onClick={() => setNav(!nav)}>
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
