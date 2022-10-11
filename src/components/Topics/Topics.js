import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Topic from '../Topic/Topic';


const Topics = () => {
    const topicsData = useLoaderData();
    const topics = topicsData.data;
    return (
        <div className='container mx-auto grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 lg:w-8/12  gap-8 my-36'>
                {
                    topics.map(topic => <Topic
                            topic = {topic}
                            key={topic.id}
                        ></Topic>)
                }
            </div>
    );
};

export default Topics;