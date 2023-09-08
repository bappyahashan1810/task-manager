import React from 'react';
import { FcLowPriority } from 'react-icons/fc';

const DisplayTask = () => {
    const tasks = JSON.parse(localStorage.getItem('task'));
    console.log(tasks);
    return (
        <div className='grid md:grid-cols-4 grid-cols-2 gap-4 mx-5 mt-3'>
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
    );
};

export default DisplayTask;