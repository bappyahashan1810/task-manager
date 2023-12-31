import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { toast } from 'react-hot-toast';

const Navbar = () => {
    const { handlelogout, user } = useContext(AuthContext);
    const handleSignout = () => {
        handlelogout()
            .then(() => {
                toast.success("Logout successfully");
            })
            .catch(error => {
                console.error(error)
                toast.error('Try Again')
            })
    }
    const navItem = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='creation'>Create Task</Link></li>
        <li><Link to='/addmember'>Add Member</Link></li>
        <li><Link to='/dashboard'>DashBoard</Link></li>
        {
            user ? <>
                <li><button onClick={handleSignout} className='btn-sm'>LogOut</button></li>
                <li><Link to='userinfo'>User Info</Link></li>
            </>
                :
                <>
                    <li><Link to='/login'>Login</Link></li>
                    <li><Link to='/signup'>Signup</Link></li>
                </>

        }


    </>

    return (
        <div className=''>
            <div className="navbar bg-orange-500 text-white fixed z-20 top-0">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {
                                navItem
                            }
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl uppercase">Task Manager</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {
                            navItem
                        }
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn">Button</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;