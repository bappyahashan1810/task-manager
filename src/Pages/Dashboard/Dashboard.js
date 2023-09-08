import React, { useState } from 'react';

const Dashboard = () => {
    const [worked, setWorked] = useState([]);
    const tasks = JSON.parse(localStorage.getItem('task'));
    const teams = JSON.parse(localStorage.getItem('group'));

    // const 
    return (
        <div className='mt-20'>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Task Title</th>
                            <th>Group Name</th>
                            <th>Status</th>
                            <th>Due Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            tasks.map((task, index) => <tr key={index} className='hover'>
                                <th>{index + 1}</th>
                                <td>{task.title}</td>
                                <td>{task.email}</td>
                                <td>{task.mark}</td>
                                <td>{task.date}</td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Dashboard;