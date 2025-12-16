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
import Dashboard from "../components/Layouts/Dashboard";
import Profile from "../pages/Dashboard/Profile/Profile";
import MyLoans from "../pages/Dashboard/MyLoans/MyLoans";
import AddLoan from "../pages/Dashboard/AddLoan/AddLoan";
import ManageLoans from "../pages/Dashboard/ManageLoans/ManageLoans";
import UpdateLoan from "../pages/Dashboard/UpdateLoan/UpdateLoan";
import PendingLoans from "../pages/Dashboard/PendingLoans/PendingLoans";
import ApprovedLoans from "../pages/Dashboard/ApprovedLoans/ApprovedLoans";
import PaymentSuccess from "../pages/Dashboard/PaymentSuccess/PaymentSuccess";
import PaymentCancel from "../pages/Dashboard/PaymentCancel/PaymentCancel";
import AllLoan from "../pages/Dashboard/AllLoan/AllLoan";

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
				path: "/apply/:loanId",
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

	// Dashboar Routes
	{
		path: "dashboard",
		element: (
			<PrivetRoute>
				<Dashboard />
			</PrivetRoute>
		),
		children: [
			{
				index: true,
				Component: Profile,
			},
			{
				path: "profile",
				Component: Profile,
			},
			{
				path: "my-loans",
				Component: MyLoans,
			},
			{
				path: "add-loan",
				element: <AddLoan />,
			},
			{
				path: "update-loan/:loanId",
				element: <UpdateLoan />,
			},
			{
				path: "manage-loans",
				element: <ManageLoans />,
			},
			{
				path: "pending-loans",
				element: <PendingLoans />,
			},
			{
				path: "approved-loans",
				element: <ApprovedLoans />,
			},
			{
				path: "payment-success",
				element: <PaymentSuccess />,
			},
			{
				path: "payment-cancel",
				element: <PaymentCancel />,
			},
			{
				path: "all-loan",
				element: <AllLoan />,
			},
		],
	},
]);
