import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Header from '../Header/Header';
import Topic from '../Topic/Topic';



const Home = () => {
    const topicsData = useLoaderData();
    const topics = topicsData.data;
    
    return (
        <div>
            <Header></Header>
            <div className='container mx-auto grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 lg:w-8/12 h-auto gap-8 my-20'>
                {
                    topics.map(topic => <Topic
                            topic = {topic}
                            key={topic.id}
                        ></Topic>)
                }
            </div>
        </div>
    );
};

export default Home;