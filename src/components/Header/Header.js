import React from 'react';
import background from '../../top.png'

const Header = () => {
    return (
        <div>
            <div className='w-full h-72' style={{ backgroundImage: `url(${background})`, backgroundSize:'cover', backgroundRepeat: 'no-repeat'}}>
            <h1 className='text-5xl text-black font-bold py-10 hover:text-indigo-800'>Simple Question & Answere Library</h1>
            </div>
        </div>
    );
};

export default Header;