import React, { useState } from "react";
import DashboardNavbar from "../../pages/Dashboard/DashboardNavbar/DashboardNavbar";
import { Link, Outlet } from "react-router";
import { CreditCard, User } from "lucide-react";

const Dashboard = () => {
	const [open, setOpen] = useState(false);
	// Sidebar Handler
	const handleSidebar = () => {
		setOpen(!open);
	};
	return (
		<div className="flex flex-col min-h-screen">
			<DashboardNavbar open={open} handleSidebar={handleSidebar} />
			<div className="relative grow h-[calc(100vh-64px)]">
				{/* Aside Bar */}
				<div
					className={`absolute lg:left-0 bg-[#FAFAFA] dark:bg-[#0B111E] w-[300px] h-full transition-all duration-300 dark:border-r dark:border-r-primary ${
						open ? "left-0" : "left-[-400px]"
					}`}
				>
					<ul className="px-4 py-10">
						<li>
							<Link
								to="/dashboard/my-loans"
								className="flex px-3 py-2.5 items-center gap-2 text-[#3F3F46] dark:text-[#F2F2F3] hover:bg-[#F1FAF7]"
							>
								<CreditCard />
								<span>My Loans</span>
							</Link>
						</li>
						<li>
							<Link
								to="/dashboard"
								className="flex px-3 py-2.5 items-center gap-2 text-[#3F3F46] dark:text-[#F2F2F3] hover:bg-[#F1FAF7]"
							>
								<User />
								<span>My Profile</span>
							</Link>
						</li>
					</ul>
				</div>

				{/* Content */}
				<div className="lg:w-[calc(100%-300px)] ml-auto mr-0 p-6 h-full dark:bg-[#080C16]">
					<Outlet />
				</div>
			</div>
		</div>
	);
};

export default Dashboard;
