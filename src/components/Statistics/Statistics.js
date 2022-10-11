import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Statistics = () => {
    const [topics, setTopics] = useState([]);
    console.log(topics)
    useEffect(() => {
        axios.get('https://openapi.programming-hero.com/api/quiz')
        .then(data => {
            const topicsLoaded = data.data.data
            const topicData = topicsLoaded.map(topic => {
                const singleTopic = {
                    name: topic.name,
                    total: topic.total
                }
                return singleTopic
            });
            setTopics(topicData);
        })
    },[])

    

    return (
        <div className='bg-slate-300 mt-32 mb-20 py-10 w-3/4 mx-auto'>
            <h1 className='text-2xl font-bold pb-5'>Charts Result</h1>
            <LineChart className='' width={300} height={300} data={topics}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="total" stroke="#8884d8" strokeWidth={2} />
            </LineChart>
        </div>
    );
};

export default Statistics;