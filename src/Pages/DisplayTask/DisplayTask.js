import React, { useEffect, useState } from 'react';
import { FcLowPriority } from 'react-icons/fc';


const getlocalstorage = () => {
    const local = JSON.parse(localStorage.getItem('task'));
    if (local) {
        return JSON.parse(localStorage.getItem('task'));
    }
    else {
        return [];
    }
}
const DisplayTask = () => {
    const [tasks, setTasks] = useState(getlocalstorage())
    console.log(tasks);
    const handlefilter = (data) => {
        const filterdata = tasks.filter(item => item.mark === data);
        setTasks(filterdata);


    }
    return (
        <div className='grid grid-cols-6 gap-5 mt-20'>
            <div className='col-span-1 text-center space-y-4'>
                <h1 className='font-bold '>Filter By Status</h1>
                <button onClick={() => setTasks(getlocalstorage())} className='btn-sm text-center block'>All</button>
                <button onClick={() => handlefilter('pending')} className='btn-sm text-center block'>pending</button>
                <button onClick={() => handlefilter('progress')} className='btn-sm text-center block'>progress</button>
                <button onClick={() => handlefilter('completed')} className='btn-sm text-center block'>completed</button>

            </div>
            <div className='col-span-5'>
                <div className='grid md:grid-cols-3 grid-cols-2 md:gap-4 gap-2 md:mx-5 mx-3'>
                    {
                        tasks.map((task, index) => <div key={index} className="card w-full bg-base-100 shadow-xl">
                            <div className="card-body">
                                <div className='flex justify-between items-center gap-4'>
                                    <h2 className="card-title">{task.title}</h2>
                                    <p><span className='text-red-500'>Due Date: </span>{task.date}</p>
                                </div>
                                <div className='flex justify-between gap-4'>
                                    <div className='flex items-center '>
                                        <FcLowPriority></FcLowPriority>
                                        <p className='font-bold ml-2'>{task.priority}</p>
                                    </div>
                                    <small>Assign to: {task.email}</small>
                                </div>
                                <p>{task.description}</p>
                                <div className="card-actions justify-between">
                                    <p className={task.mark === 'pending' ? 'text-red-500' : task.mark === 'progress' ? 'text-yellow-500' : task.mark === 'completed' ? 'text-green-500' : ''}>{task.mark}</p>
                                    <button className="btn-sm rounded-md btn-primary">See More</button>
                                </div>
                            </div>
                        </div>)
                    }
                </div>
            </div>
        </div>
    );
};

export default DisplayTask;