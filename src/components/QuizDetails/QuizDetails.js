import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Quiz from '../Quiz/Quiz';

const QuizDetails = () => {
    const quizDetails = useLoaderData();
    const questionData= quizDetails.data.questions;
    console.log(questionData)
    // console.log(quizDetails.data)
    return (
        <div className='container mx-auto md:w-2/3  mt-8 justify-center items-center'>
            <h1 className='text-3xl font-bold my-4'>Quiz of {quizDetails.data.name}</h1>
            <div className='my-18'>
                {
                    questionData.map(questions => <Quiz questions={questions}></Quiz>)
                }
                
            </div>
        </div>
    );
};

export default QuizDetails;