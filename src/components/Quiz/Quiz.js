
import Option from '../Option/Option';
import { EyeIcon } from '@heroicons/react/24/solid';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Quiz = ({ questions }) => {
    const { options, question, correctAnswer} = questions;

 
    
        const clickedButton = () =>{
            if(correctAnswer){
                toast(correctAnswer);
            }
        }
           
  

    
    
   
    return (
        <div className=' mx-auto w-full text-xl py-10 mb-28 text-center bg-slate-200'>
            <div className='flex px-10 justify-between text-2xl pb-12'>
                {
                    <li className='w-3/4 list-item list-decimal'>Que: {question}</li>
                    
                }
                <EyeIcon onClick={clickedButton} className='w-8 h-8 text-blue-500'></EyeIcon>
                <ToastContainer></ToastContainer>
            </div>
            <div>
                {
                    options.map(option => <Option 
                        key={option.id} 
                        option = {option}
                        correctAnswer = {correctAnswer}
                        ></Option>)
                }
            </div>
        </div>
    );
};

export default Quiz;