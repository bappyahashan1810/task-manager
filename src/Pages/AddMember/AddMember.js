import React, { useEffect, useState } from 'react';

const AddMember = () => {

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const group = form.group.value;
        const groupmember = form.groupmember.value;
        const email = form.email.value;
        const newGroup = { group, groupmember, email };
        const savedData = JSON.parse(localStorage.getItem('group'));
        let blankdata = [];
        if (!savedData) {
            blankdata.push(newGroup);
            localStorage.setItem('group', JSON.stringify(blankdata));
            console.log(blankdata);
        }
        else {
            blankdata.push(...savedData, newGroup);
            localStorage.setItem('group', JSON.stringify(blankdata));
        }
        console.log(blankdata);


    }


    return (
        <div className="hero min-h-screen bg-base-200 mt-16">
            <div className="hero-content">

                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleSubmit}>

                        <div className="card-body w-full">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Group Name</span>
                                </label>
                                <input type="text" name='group' placeholder="group name" className="input input-bordered w-full" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Group Member Name</span>
                                </label>
                                <input type="groupmember" name='groupmember' placeholder="group member name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control mt-6">
                                <button type='submit' className="btn btn-primary">Submit</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddMember;