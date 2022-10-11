import React from 'react';
import './Option.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Option = ({option, correctAnswer}) => {

    const clickedButton = () =>{
        if(correctAnswer === option){
            toast("Right Answere!");
        }
        else{
            toast("Wrong Answere");
        }
    }

    // console.log(option)
    return (
        
        <div>
            <label onClick={clickedButton} className=" flex justify-between items-center cursor-pointer text-center text-white rounded-md  hover:bg-blue-500 bg-slate-400 w-3/4 mx-auto px-8 my-4  p-4">
                <span className=" text-xl px-5 ">{option}</span> 
                <input type="radio" name="radio-6" className="radio checked:bg-blue-500 text-white" checked />
            </label>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Option;