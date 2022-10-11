import React from 'react';
import './Option.css'

const Option = ({option, correctAnswer}) => {

    const selectOption = () => {

    const clickedButton = () =>{
        if(correctAnswer === option){
            
        }
    }
   }
    // console.log(option)
    return (
        
        <div>
            <label onClick={clickedButton} className=" flex justify-between cursor-pointer text-center text-white rounded-md  hover:bg-blue-500 bg-slate-600 w-3/4 mx-auto justify-center my-4  p-4">
                <span className=" text-xl ">{option}</span> 
                <input type="radio" name="radio-6" className="radio checked:bg-blue-500 text-white" checked />
            </label>
        </div>
    );
};

export default Option;