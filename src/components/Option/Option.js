import React from 'react';
import './Option.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Option = ({ option, correctAnswer, id }) => {

    const clickedButton = () =>{
        if( correctAnswer === option ){
            toast("Right Answere!");
            return;
        }
        else{
            toast("Wrong Answere");
        }
    }

    // console.log(option)
    return (
        
        <div onClick={clickedButton}>
            <label  className="label flex justify-between items-center cursor-pointer text-center text-white rounded-md  hover:bg-blue-500 bg-slate-400 w-3/4 mx-auto px-4 md:px-8 my-4">
                <span className=" text-sm text-left md:text-xl px-2 md:px-5">{option}</span> 
                <input type="radio" name='radio-6' className=" text-slate-50 w-6 h-6 checked:bg-blue-500 " checked />
            </label>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Option;