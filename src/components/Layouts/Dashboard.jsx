import React, { useState } from "react";
import DashboardNavbar from "../../pages/Dashboard/DashboardNavbar/DashboardNavbar";
import { Link, Outlet } from "react-router";
import {
	CheckCircle,
	ClipboardList,
	CreditCard,
	FileText,
	PlusCircle,
	User,
	Users,
} from "lucide-react";
import useRole from "../../hooks/useRole";

const Dashboard = () => {
	const [open, setOpen] = useState(false);
	const { role } = useRole();
	// Sidebar Handler
	const handleSidebar = () => {
		setOpen(!open);
	};
	return (
		<div className="flex flex-col min-h-screen">
			<DashboardNavbar open={open} handleSidebar={handleSidebar} />
			<div className="relative grow min-h-[calc(100vh-64px)]">
				{/* Aside Bar */}
				<div
					className={`absolute lg:left-0 bg-[#FAFAFA] dark:bg-[#0B111E] w-[300px] h-full transition-all duration-300 dark:border-r dark:border-r-primary ${
						open ? "left-0" : "left-[-400px]"
					}`}
				>
					<ul className="px-4 py-10">
						{/* Links For Admin Only */}
						{role === "admin" && (
							<>
								<li>
									<Link
										to="/dashboard/my-loans"
										className="flex px-3 py-2.5 items-center gap-2 text-[#3F3F46] dark:text-[#F2F2F3] hover:bg-[#F1FAF7] dark:hover:bg-transparent"
									>
										<Users />
										<span>Manage Users</span>
									</Link>
								</li>
								<li>
									<Link
										to="/dashboard/all-loan"
										className="flex px-3 py-2.5 items-center gap-2 text-[#3F3F46] dark:text-[#F2F2F3] hover:bg-[#F1FAF7] dark:hover:bg-transparent"
									>
										<FileText />
										<span>All Loan</span>
									</Link>
								</li>
								<li>
									<Link
										to="/dashboard/my-loans"
										className="flex px-3 py-2.5 items-center gap-2 text-[#3F3F46] dark:text-[#F2F2F3] hover:bg-[#F1FAF7] dark:hover:bg-transparent"
									>
										<FileText />
										<span>Loan Applications</span>
									</Link>
								</li>
							</>
						)}

						{/* Links For Manager Only */}
						{role === "manager" && (
							<>
								<li>
									<Link
										to="/dashboard/add-loan"
										className="flex px-3 py-2.5 items-center gap-2 text-[#3F3F46] dark:text-[#F2F2F3] hover:bg-[#F1FAF7] dark:hover:bg-transparent"
									>
										<PlusCircle />
										<span>Add Loan</span>
									</Link>
								</li>
								<li>
									<Link
										to="/dashboard/manage-loans"
										className="flex px-3 py-2.5 items-center gap-2 text-[#3F3F46] dark:text-[#F2F2F3] hover:bg-[#F1FAF7] dark:hover:bg-transparent"
									>
										<FileText />
										<span>Manage Loans</span>
									</Link>
								</li>
								<li>
									<Link
										to="/dashboard/pending-loans"
										className="flex px-3 py-2.5 items-center gap-2 text-[#3F3F46] dark:text-[#F2F2F3] hover:bg-[#F1FAF7] dark:hover:bg-transparent"
									>
										<ClipboardList />
										<span>Pending Applications</span>
									</Link>
								</li>
								<li>
									<Link
										to="/dashboard/approved-loans"
										className="flex px-3 py-2.5 items-center gap-2 text-[#3F3F46] dark:text-[#F2F2F3] hover:bg-[#F1FAF7] dark:hover:bg-transparent"
									>
										<CheckCircle />
										<span>Approved Applications</span>
									</Link>
								</li>
							</>
						)}

						{/* Links For Borrower Only */}
						{role === "borrower" && (
							<>
								<li>
									<Link
										to="/dashboard/my-loans"
										className="flex px-3 py-2.5 items-center gap-2 text-[#3F3F46] dark:text-[#F2F2F3] hover:bg-[#F1FAF7] dark:hover:bg-transparent"
									>
										<CreditCard />
										<span>My Loans</span>
									</Link>
								</li>
							</>
						)}

						{/* Links For Every One */}
						<li>
							<Link
								to="/dashboard"
								className="flex px-3 py-2.5 items-center gap-2 text-[#3F3F46] dark:text-[#F2F2F3] hover:bg-[#F1FAF7] dark:hover:bg-transparent"
							>
								<User />
								<span>My Profile</span>
							</Link>
						</li>
					</ul>
				</div>

				{/* Content */}
				<div className="lg:w-[calc(100%-300px)] ml-auto mr-0 p-6 min-h-[calc(100vh-64px)] dark:bg-[#080C16]">
					<Outlet />
				</div>
			</div>
		</div>
	);
};

export default Dashboard;
