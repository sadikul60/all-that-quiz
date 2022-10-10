import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import './Navbar.css';

const Navbar = () => {
    const [open, setOpen] = useState(false)
    return (
        <nav className='bg-slate-400 w-full'>
            
            <div className='lg:grid md:grid-cols-2 gap-24 items-center'>

                <div onClick={() => setOpen(!open)} className="h-10 w-10 text-white lg:hidden ml-7">
                    {
                        open ? <XMarkIcon></XMarkIcon> : <Bars3Icon></Bars3Icon>
                    }
                </div>
                
                <h1 className='text-2xl font-bold '>AllThatQuiz</h1>

                <ul className={`text-xl font-bold text-white bg-slate-400 w-full lg:flex justify-end absolute lg:static duration-500 ${open ? 'top-10': 'top-[-220px]'}`}>
                    <li className='mr-12 py-2 px-5 hover:bg-blue-600 w-full'><NavLink to='/'>Home</NavLink></li>
                    <li className='mr-12 py-2 px-5 hover:bg-blue-600 w-full'><NavLink to='/topics'>Topics</NavLink></li>
                    <li className='mr-12 py-2 px-5 hover:bg-blue-600 w-full'><NavLink to='/statistics'>Statistics</NavLink></li>
                    <li className='mr-12 py-2 px-5 hover:bg-blue-600 w-full'><NavLink to='/Blog'>Blog</NavLink></li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;