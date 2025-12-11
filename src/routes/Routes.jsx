import { createBrowserRouter } from "react-router";
import Root from "../components/Layouts/Root";
import Home from "../pages/Home/Home";
import Login from "../pages/AuthPage/Login/Login";
import Register from "../pages/AuthPage/Register/Register";
import PrivetRoute from "./PrivetRoute";
import AllLoans from "../pages/AllLoans/AllLoans";
import About from "../pages/About/About";

export const router = createBrowserRouter([
	{
		path: "/",
		Component: Root,
		children: [
			{
				index: true,
				Component: Home,
			},
			{
				path: "/all-loans",
				Component: AllLoans,
			},
			{
				path: "/about",
				Component: About,
			},
			{
				path: "/contact",
				element: (
					<h2 className="text-5xl font-bold text-center py-15">
						Contact
					</h2>
				),
			},
			{
				path: "/login",
				Component: Login,
			},
			{
				path: "/register",
				Component: Register,
			},
		],
	},
]);
