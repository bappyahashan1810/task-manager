import React from 'react';
import { Toaster, toast } from 'react-hot-toast';

const Creation = () => {
    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const title = form.title.value;
        const date = form.date.value;
        const description = form.description.value;
        const priority = form.priority.value;
        const email = form.email.value;
        console.log(title, date, description, priority, email);
        const addedTask = { title, date, description, priority, email };
        fetch('http://localhost:5000/tasks', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(addedTask)

        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    toast.success("successfully Added")
                }

            })
    }
    return (
        <div className='md:mx-10 mr-3'>
            <Toaster
                position="top-center"
                reverseOrder={false}
            />
            <div className='ml-[31px]'>
                <div>
                    <h3 className='font-bold mt-[34px]'>Add Task</h3>
                </div>
                <form onSubmit={handleSubmit}>

                    <div className='mt-[71px] relative'>
                        <div className='flex justify-evenly items-center gap-3 md:gap-0'>
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text font-bold">Task Title</span>

                                </label>
                                <input type="text" name='title' placeholder="event title" className="input input-bordered md:w-full " />

                            </div>
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text font-bold">Task date</span>

                                </label>
                                <input type="date" name='date' placeholder="event date" className="input input-bordered md:w-full " />

                            </div>
                        </div>
                        <div className='flex justify-evenly items-center mt-[50px] gap-3 md:gap-0'>
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text font-bold">Description</span>

                                </label>
                                <textarea className="textarea textarea-accent" name='description' placeholder="Description"></textarea>

                            </div>
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text font-bold">priority Level</span>

                                </label>
                                <select name='priority' className="select select-ghost w-full max-w-xs">
                                    <option disabled defaultValue={'ok'} selected>Pick the Priority level</option>
                                    <option value='1'>First</option>
                                    <option value='2'>Second</option>
                                    <option value='3'>Third</option>
                                </select>

                            </div>
                        </div>

                    </div>
                    <div className="form-control w-full max-w-xs absolute right-0 bottom-[30%]">
                        <label className="label">
                            <span className="label-text font-bold">Assign To</span>
                        </label>
                        <div className='flex text-center items-center '>
                            <input type="email" name='email' placeholder="assign to" className="input-sm input-bordered md:w-full " />
                            <input className='btn  bg-[#0084FF]' type="submit" value="Submit" />
                        </div>

                    </div>

                </form>
            </div>
        </div>
    );
};

export default Creation;