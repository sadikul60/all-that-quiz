
import Option from '../Option/Option';
import { EyeIcon } from '@heroicons/react/24/solid';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Quiz = ({ questions, index }) => {
    console.log(questions)
    const { options, question, correctAnswer } = questions;

 
    
        const clickedButton = () =>{
            if(correctAnswer){
                toast(correctAnswer);
            }
        }
           
  

    
    
   
    return (
        <div className=' mx-auto w-full text-xl py-10 mb-28 text-center bg-slate-200 shadow-lg'>
            <div className='flex px-10 justify-between text-2xl pb-12'>
                {
                    <h3 className="w-3/4"><span className='font-bold'>Que-{index + 1}. </span> {question}</h3>
                    
                }
                <EyeIcon onClick={clickedButton} className='w-8 h-8 text-blue-500'></EyeIcon>
                <ToastContainer></ToastContainer>
            </div>
            <div>
                {
                    options.map((option, index) => <Option 
                        key={option.id} 
                        option = {option}
                        correctAnswer = {correctAnswer}
                        index = {index}
                        ></Option>)
                }
            </div>
        </div>
    );
};

export default Quiz;