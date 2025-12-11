import { createBrowserRouter } from "react-router";
import Root from "../components/Layouts/Root";
import Home from "../pages/Home/Home";
import Login from "../pages/AuthPage/Login/Login";
import Register from "../pages/AuthPage/Register/Register";
import PrivetRoute from "./PrivetRoute";
import AllLoans from "../pages/AllLoans/AllLoans";
import About from "../pages/About/About";
import Contact from "../pages/About/Contact/Contact";
import LoanDetails from "../pages/LoanDetails/LoanDetails";
import Apply from "../pages/Apply/Apply";

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
				Component: Contact,
			},
			{
				path: "/loan-details/:loanId",
				element: (
					<PrivetRoute>
						<LoanDetails />
					</PrivetRoute>
				),
			},
			{
				path: "/apply",
				element: (
					<PrivetRoute>
						<Apply />
					</PrivetRoute>
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
