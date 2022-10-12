
import Option from '../Option/Option';
import { EyeIcon } from '@heroicons/react/24/solid';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const Quiz = ({ questions, index }) => {
    
    const { options, question, correctAnswer } = questions;

    
        const HandleShowRightAns = () =>{
            if(correctAnswer){
                toast(correctAnswer);
            }
        }
           
  
        const clickedButton = (option) =>{
            if( correctAnswer === option ){
                toast("Right Answere!");
                return;
            }
            else{
                toast("Wrong Answere");
            }
        }
   
    return (
        <div className=' mx-auto w-full text-xl py-10 mb-28 text-left md:text-center bg-slate-200 shadow-lg'>
            <div className='flex px-3 sm:px-3 md:px-10 justify-between md:text-2xl pb-12'>
                {
                    <h3 className="w-3/4"><span className='font-bold'>Que-{index + 1}. </span> {question}</h3>
                    
                }
                <EyeIcon onClick={HandleShowRightAns} className='w-8 h-8 text-blue-500'></EyeIcon>
                <ToastContainer></ToastContainer>
            </div>
            <div>
                {
                    options.map((option, index) => <Option 
                        key={option.id} 
                        option = {option}
                        correctAnswer = {correctAnswer}
                        index = {index}
                        clickedButton = {clickedButton}
                        ></Option>)
                }
                
            </div>
        </div>
    );
};

export default Quiz;