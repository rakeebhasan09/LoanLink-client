import React from "react";
import { motion } from "framer-motion";
import useAuth from "../../../hooks/useAuth";
import { LogOut, Mail, Shield } from "lucide-react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";
import useRole from "../../../hooks/useRole";

const Profile = () => {
	const { user, logOut } = useAuth();
	const navigate = useNavigate();
	const { role } = useRole();

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
		<motion.div
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
		>
			<h1 className="text-2xl font-bold mb-6">My Profile</h1>
			<div className="rounded-2xl border border-[#E1E7EF] dark:border-[#222F44] dark:bg-[#0C1322] p-6 max-w-md">
				{/* User Image */}
				<div className="flex items-center gap-4 mb-6">
					<div className="h-20 w-20 rounded-full overflow-hidden">
						<img src={user?.photoURL} alt="" />
					</div>
					<div>
						<h2 className="text-xl font-bold">
							{user.displayName}
						</h2>
						<p className="text-[#65758B] dark:text-[#94A3B8]">
							{role}
						</p>
					</div>
				</div>

				{/* Email */}
				<div>
					<div className="space-y-4">
						<div className="flex items-center gap-3 p-3 rounded-lg bg-[#F1F5F9] dark:bg-[#1D283A]">
							<Mail className="h-5 w-5 text-primary" />
							<div>
								<p className="text-sm text-[#65758B] dark:text-[#94A3B8]">
									Email
								</p>
								<p className="font-medium">{user.email}</p>
							</div>
						</div>
						<div className="flex items-center gap-3 p-3 rounded-lg bg-[#F1F5F9] dark:bg-[#1D283A]">
							<Shield className="h-5 w-5 text-primary" />
							<div>
								<p className="text-sm text-[#65758B] dark:text-[#94A3B8]">
									Role
								</p>
								<p className="font-medium">{role}</p>
							</div>
						</div>
					</div>
				</div>

				{/* Button */}
				<div>
					<button
						onClick={handleLogout}
						className="w-full flex items-center justify-center gap-2 bg-[#F05656] rounded-2xl py-2 mt-6 text-white"
					>
						<LogOut className="mr-2 h-4 w-4" /> Logout
					</button>
				</div>
			</div>
		</motion.div>
	);
};

export default Profile;
