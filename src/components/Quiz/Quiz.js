
import Option from '../Option/Option';


const Quiz = ({ questions }) => {
    const { options, question, correctAnswer, index} = questions;
    console.log(correctAnswer)
   
    return (
        <div className=' mx-auto w-full text-xl py-10 mb-28 text-center bg-slate-200'>
            {
                <h1 className='text-2xl pb-12'>Que:{index} {question}</h1>
            }
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