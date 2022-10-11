import React from 'react';

const Blog = () => {
    return (
        <div className='bg-slate-500 w-11/12 sm:w-11/12 md:w-3/4 mx-auto my-20 py-12 rounded-md'>
            <h1 className='text-3xl text-white font-bold underline underline-offset-8 pb-8'>Blog Section</h1>
            <div className='text-start text-white px-8 py-8'>
                <h2 className='text-2xl  font-bold pb-6'>Answere to the Question No-1</h2>
                <p><strong>The purpose of react router: </strong>React Router is a standard library for routing in React. It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL. <br /> <br /> At its heart, React Router is a state container for the current location , or URL. It keeps track of the location and renders different "Route" s as it changes, and it also gives you tools to update the location using  s and the history API.
                </p>
            </div>
            <div className='text-start text-white px-8 py-8'>
                <h2 className='text-2xl  font-bold pb-6'>Answere to the Question No-2</h2>
                <p><strong>React context API is work: </strong>What is Context API? The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.
                </p>
            </div>
            <div className='text-start text-white px-8 py-8'>
                <h2 className='text-2xl  font-bold pb-6'>Answere to the Question No-3</h2>
                <p><strong>React context API is work: </strong>Essentially, useRef is like a “box” that can hold a mutable value in its .current property. You might be familiar with refs primarily as a way to access the DOM. If you pass a ref object to React with, React will set its .current property to the corresponding DOM node whenever that node changes. The useRef Hook allows you to persist values between renders. It can be used to store a mutable value that does not cause a re-render when updated. It can be used to access a DOM element directly.
                </p>
            </div>
        </div>
    );
};

export default Blog;