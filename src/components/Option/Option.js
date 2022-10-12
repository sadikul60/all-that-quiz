import React, { useState } from 'react';
import './Option.css'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Option = ({ option, clickedButton  }) => {

    const [check, setCheck] = useState(false);
    console.log(check)

    const handleClickedOption = option =>  {
        setCheck(true);
        clickedButton(option);
    }
    

    // console.log(option)
    return (
        
        <div>
            <label  className="label cursor-pointer rounded-md  hover:bg-blue-500 bg-slate-400 my-4 px-4 md:px-8 w-3/4 mx-auto">
                <button onClick={() => handleClickedOption(option)} className='flex justify-between items-center text-center text-white w-full mx-auto '>
                    <span className=" text-sm text-left md:text-xl px-2 md:px-4">{option}</span> 
                    <input type="radio" name='radio-6' className=" text-slate-50 w-6 h-6 checked:bg-blue-500 " checked />
                </button>
            </label>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Option;