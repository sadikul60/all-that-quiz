import { ArrowRightIcon } from '@heroicons/react/24/solid';
import React from 'react';
import { Link } from 'react-router-dom';

const Tipic = ({topic}) => {
    const { id, name, logo, total } = topic;
    // console.log(questions)
    return (
        <div className="card card-compact w-full bg-slate-200 shadow-xl">
            <figure><img className='h-72' src={logo} alt="" /></figure>
            <div className="lg:flex lg:justify-around py-10 px-8 items-center">
                <h2 className="text-lg font-bold mr-7 mb-5">{name}</h2>
                <h3 className="text-lg font-bold mr-7 mb-5">Quiz: {total}</h3>
                <div className="">
                <Link to = {`/quiz/${id}`}>
                <button className="btn btn-primary w-full mb-5 hover:bg-blue-600">Start Practice <ArrowRightIcon className='w-4 h-4 font-bold'></ArrowRightIcon> </button>
                </Link>
                </div>
            </div>
        </div>
    );
};

export default Tipic;