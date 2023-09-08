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
        const mark = form.mark.value;
        console.log(title, date, description, priority, email);
        const addedTask = { title, date, description, priority, email, mark };
        const savedTask = JSON.parse(localStorage.getItem('task'));
        let newTask = [];
        if (!savedTask) {
            newTask.push(addedTask);
            localStorage.setItem('task', JSON.stringify(newTask));
            toast.success('Successfully Added')
        }
        newTask.push(...savedTask, addedTask);
        localStorage.setItem("task", JSON.stringify(newTask));
        toast.success('Successfully Added');

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
                                <input type="text" name='title' placeholder="event title" className="input input-bordered md:w-full " required />

                            </div>
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text font-bold">Task date</span>

                                </label>
                                <input type="date" name='date' placeholder="event date" className="input input-bordered md:w-full " required />

                            </div>
                        </div>
                        <div className='flex justify-evenly items-center mt-[50px] gap-3 md:gap-0'>
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text font-bold">Description</span>

                                </label>
                                <textarea className="textarea textarea-accent" name='description' placeholder="Description" required></textarea>

                            </div>
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text font-bold">priority Level</span>

                                </label>
                                <select name='priority' className="select select-ghost w-full max-w-xs" required>
                                    <option defaultValue={Selection} disabled >Pick the Priority level</option>
                                    <option value='1'>First</option>
                                    <option value='2'>Second</option>
                                    <option value='3'>Third</option>
                                </select>

                            </div>
                        </div>
                        <div className='flex justify-evenly items-center gap-3 md:gap-0 mt-[50px]'>
                            <div className="form-control w-full max-w-xs ">
                                <label className="label">
                                    <span className="label-text font-bold">Assign To</span>
                                </label>
                                <div className='flex text-center items-center '>
                                    <input type="text" name='email' placeholder="assign to" className="input-sm input-bordered md:w-full " required />

                                </div>

                            </div>
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text font-bold">priority Level</span>

                                </label>
                                <select name='mark' className="select select-ghost w-full max-w-xs" required>
                                    <option defaultValue={Selection} disabled >Pick the mark task</option>
                                    <option value='pending'>pending</option>
                                    <option value='progress'>progress</option>
                                    <option value='completed'>completed</option>
                                </select>

                            </div>
                            <div className='form-control w-full max-w-xs'>
                                <input className='btn  bg-[#0084FF]' type="submit" value="Submit" />
                            </div>
                        </div>

                    </div>


                </form>
            </div>
        </div>
    );
};

export default Creation;