
import Option from '../Option/Option';


const Quiz = ({ questions }) => {
    const { options, question, correctAnswer, index} = questions;
    console.log(correctAnswer)
   
    return (
        <div className=' mx-auto w-full text-xl py-10 mb-28 text-center bg-slate-200'>
            <div className='flex px-10 justify-between text-2xl pb-12'>
                {
                    <h1>Que:{index} {question}</h1>
                    
                }
            <h1>This</h1>
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