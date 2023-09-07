import React, { useContext } from 'react';
import playvideo from '../../assestes/video/login.mp4'
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { Toaster, toast } from 'react-hot-toast';
import { Link } from 'react-router-dom';

const Login = () => {
    const { handlelogin } = useContext(AuthContext);
    const handleSubmit = event => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        handlelogin(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                toast.success("Successfully Login");
                form.reset();
            })
            .catch(error => console.error(error));
    }
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <Toaster
                    position="top-center"
                    reverseOrder={false}
                />
                <div className="hero-content flex-col lg:flex-row">
                    <div className="text-center lg:text-left shadow-2xl mb-5">
                        <video className='rounded-md' autoPlay
                            muted loop>
                            <source className='fixed min-h-full max-w-sm' src={playvideo} type='video/mp4'></source>
                            Your browser does not support HTML5 video.
                        </video>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <h1 className="text-4xl mt-3 font-bold bottom-0 text-center">Login now!</h1>
                        <form onSubmit={handleSubmit}>
                            <div className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" name='email' placeholder="email" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" name='password' placeholder="password" className="input input-bordered" />
                                    <label className="label">
                                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                    </label>
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn btn-primary">Login</button>
                                </div>
                            </div>
                            <p className='mb-2 ml-3'>Are you new user?<Link to='/signup' className='text-blue-500'> Create an account</Link></p>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Login;