import React from 'react';
import { Link } from 'react-router-dom';

const Tipic = ({topic}) => {
    const { name, logo, total } = topic;
    return (
        <div className="card card-compact w-full bg-slate-200 shadow-xl">
            <figure><img className='h-72' src={logo} alt="Shoes" /></figure>
            <div className="lg:flex lg:justify-around py-10 px-8 items-center">
                <h2 className="text-xl font-bold mr-7 mb-5">{name}</h2>
                <h3 className="text-xl font-bold mr-7 mb-5">Quiz: {total}</h3>
                <div className="">
                <Link to = "/">
                <button className="btn btn-primary w-full mb-5 hover:bg-blue-600">Start Practice </button>
                </Link>
                </div>
            </div>
        </div>
    );
};

export default Tipic;