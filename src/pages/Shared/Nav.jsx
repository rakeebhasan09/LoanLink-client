import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router";
import { FaMountainCity } from "react-icons/fa6";
import { AiOutlineLogout } from "react-icons/ai";
import { LuLayoutDashboard } from "react-icons/lu";
import { CgProfile } from "react-icons/cg";
import useAuth from "../../hooks/useAuth";

const Nav = () => {
	const { user, logOut } = useAuth();
	const [theme, setTheme] = useState(
		localStorage.getItem("theme") || "light"
	);
	const [open, setOpen] = useState(false);

	const links = (
		<>
			<NavLink to="/">Home</NavLink>
			<NavLink to="/all-loans">All-Loans</NavLink>
			<NavLink to="/about">About Us</NavLink>
			<NavLink to="/contact">Contact</NavLink>
		</>
	);

	// Log Out
	const handleLogOut = () => {
		logOut()
			.then(() => {})
			.catch((error) => {
				console.log(error);
			});
	};

	// Dark mood
	useEffect(() => {
		const html = document.querySelector("html");
		html.setAttribute("data-theme", theme);
		localStorage.setItem("theme", theme);
	}, [theme]);

	const handleTheme = (checked) => {
		setTheme(checked ? "dark" : "light");
	};

	return (
		<>
			<div className="bg-[#F8F8F8] dark:bg-gray-900 shadow-sm dark:shadow-md py-2.5 sticky top-0 z-99">
				<div className="">
					<div className="navbar container">
						{/* Navbar Start */}
						<div className="navbar-start">
							<div className="dropdown">
								<div
									tabIndex={0}
									role="button"
									className="lg:hidden cursor-pointer mr-2.5"
								>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										className="h-10 w-10"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											d="M4 6h16M4 12h8m-8 6h16"
										/>
									</svg>
								</div>
								<nav
									tabIndex="-1"
									className="menu menu-sm dropdown-content bg-base-100 rounded-box z-2 mt-3 w-52 p-2 shadow px-5 py-3 space-y-2.5"
								>
									{links}
								</nav>
							</div>
							{/* Logo */}
							<Link to="/" className="flex items-center gap-2">
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
						{/* Navbar End */}
						<div className="navbar-end gap-3">
							{/* Nav Items */}
							<div className="navbar-center hidden lg:flex">
								<nav className="flex items-center gap-[22px]">
									{links}
								</nav>
							</div>
							{/* User Avatar and Dropdown */}
							<div className="ml-2.5">
								{user ? (
									<>
										<div className="relative">
											<img
												onClick={() => setOpen(!open)}
												src={user.photoURL}
												className="w-11 h-11 object-cover rounded-full cursor-pointer p-0.5 border border-[#219e64a8]"
												alt=""
											/>
											{open && (
												<div className="absolute menu right-0 pt-[18px] pb-2 rounded-lg space-y-3 bg-[#F8F8F8] dark:bg-gray-900 shadow-sm dark:shadow-md">
													<div className="px-[15px]">
														<h3 className="text-[#141414] dark:text-white text-[20px] font-semibold">
															{user.displayName}
														</h3>
														<p className="text-sm ">
															{user.email}
														</p>
													</div>

													<div
														onClick={() =>
															setOpen(false)
														}
														className="border-t border-b border-[#DADADA] py-4 dark:border-[#464646] flex flex-col"
													>
														<Link
															to="/dashboard"
															className="flex items-center gap-2 px-[15px] py-2 text-[15px] font-medium text-[#141414] dark:text-white hover:bg-[#219E64] hover:text-white transition rounded w-full"
														>
															<LuLayoutDashboard />
															<span>
																Dashboard
															</span>
														</Link>
														<Link
															to="/"
															className="flex items-center gap-2 px-[15px] py-2 text-[15px] font-medium text-[#141414] dark:text-white hover:bg-[#219E64] hover:text-white transition rounded w-full"
														>
															<CgProfile />
															<span>Profile</span>
														</Link>
													</div>

													<div
														onClick={() =>
															setOpen(false)
														}
														className="dropdown-link"
													>
														<button
															onClick={() =>
																handleLogOut()
															}
															className="flex items-center gap-2 px-[15px] py-1.5 text-[16px] font-medium text-red-500 hover:bg-[#219E64] hover:text-white transition rounded w-full"
														>
															<AiOutlineLogout />
															<span>LogOut</span>
														</button>
													</div>
												</div>
											)}
										</div>
									</>
								) : (
									<div className="login-nav flex items-center gap-2">
										<Link
											to="/login"
											className="py-1.5 px-5 bg-white rounded-lg text-[#219E64] border border-[#219E64] text-[18px] font-semibold"
										>
											Login
										</Link>
										<Link
											to="/register"
											className="py-1.5 px-5 bg-[#219E64] rounded-lg text-white border border-[#219E64] text-[18px] font-semibold hidden sm:block"
										>
											Register
										</Link>
									</div>
								)}
							</div>
							{/* Theme Toggler */}
							<div>
								<input
									onChange={(e) =>
										handleTheme(e.target.checked)
									}
									type="checkbox"
									defaultChecked={
										localStorage.getItem("theme") === "dark"
									}
									className="toggle"
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Nav;
