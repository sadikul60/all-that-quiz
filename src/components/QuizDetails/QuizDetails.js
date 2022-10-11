import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Quiz from '../Quiz/Quiz';

const QuizDetails = () => {
    const quizDetails = useLoaderData();
    const questionData= quizDetails.data.questions;
 
    return (
        <div className='container mx-auto md:w-2/3  mt-8 justify-center items-center'>
            <h1 className='text-3xl font-bold my-4'>Quiz of {quizDetails.data.name}</h1>
            <div className='my-18'>
                {
                    questionData.map((questions, index) => <Quiz 
                        index={index} 
                        questions={questions} 
                        key={questions.id}
                        ></Quiz>)
                }
                
            </div>
        </div>
    );
};

export default QuizDetails;