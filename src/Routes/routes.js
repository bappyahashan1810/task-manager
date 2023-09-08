import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import Creation from "../Pages/Creation/Creation";
import AddMember from "../Pages/AddMember/AddMember";
import DisplayTask from "../Pages/DisplayTask/DisplayTask";
import Dashboard from "../Pages/Dashboard/Dashboard";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <DisplayTask></DisplayTask>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/creation',
                element: <Creation></Creation>
            },
            {
                path: '/addmember',
                element: <AddMember></AddMember>
            },
            {
                path: '/dashboard',
                element: <Dashboard></Dashboard>
            }
        ]
    }
])