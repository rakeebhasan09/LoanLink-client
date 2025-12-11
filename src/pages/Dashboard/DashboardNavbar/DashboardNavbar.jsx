import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router";
import useAuth from "../../../hooks/useAuth";
import { Menu, X } from "lucide-react";
import { toast } from "react-toastify";

const DashboardNavbar = ({ handleSidebar, open }) => {
	const { user, logOut } = useAuth();
	const [theme, setTheme] = useState(
		localStorage.getItem("theme") || "light"
	);
	const navigate = useNavigate();

	// Dark mood
	useEffect(() => {
		const html = document.querySelector("html");
		html.setAttribute("data-theme", theme);
		localStorage.setItem("theme", theme);
	}, [theme]);

	const handleTheme = (checked) => {
		setTheme(checked ? "dark" : "light");
	};

	// Logout Handler
	const handleLogout = () => {
		logOut()
			.then(() => {
				toast.success("Logout Successfull.");
				navigate("/");
			})
			.catch((error) => {
				console.log(error);
			});
	};

	return (
		<div className="navbar bg-base-100 shadow-sm dark:border-b dark:border-b-primary">
			<div className="flex-1">
				<div className="flex items-center gap-3">
					{open ? (
						<X
							onClick={handleSidebar}
							size={30}
							className="cursor-pointer lg:hidden"
						/>
					) : (
						<Menu
							onClick={handleSidebar}
							size={30}
							className="cursor-pointer lg:hidden"
						/>
					)}

					{/* Logo */}
					<Link to="/dashboard" className="flex items-center gap-2">
						<div className="hidden sm:flex h-10 w-10 items-center justify-center rounded-xl bg-primary">
							<span className="text-lg text-white font-bold">
								L
							</span>
						</div>
						<span className="text-xl font-bold">
							Loan
							<span className="text-primary">Link</span>
						</span>
					</Link>
				</div>
			</div>
			<div className="flex items-center gap-2">
				{/* Theme Toggler */}
				<div>
					<input
						onChange={(e) => handleTheme(e.target.checked)}
						type="checkbox"
						defaultChecked={
							localStorage.getItem("theme") === "dark"
						}
						className="toggle"
					/>
				</div>
				<div className="dropdown dropdown-end">
					{/* Dropdown */}
					<div
						tabIndex={0}
						role="button"
						className="btn btn-ghost btn-circle avatar"
					>
						<div className="w-10 rounded-full">
							<img
								alt="Tailwind CSS Navbar component"
								src={user?.photoURL}
							/>
						</div>
					</div>
					<ul
						tabIndex="-1"
						className="menu menu-sm dropdown-content bg-base-100 space-y-2 py-4 rounded-box z-1 mt-3 w-52 p-2 shadow dark:bg-[#0C1322]"
					>
						<li>
							<a className="justify-between">Profile</a>
						</li>
						<li>
							<a>Settings</a>
						</li>
						<li onClick={handleLogout}>
							<a>Logout</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default DashboardNavbar;
