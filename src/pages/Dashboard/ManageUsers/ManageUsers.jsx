import React, { useState } from "react";
import { motion } from "framer-motion";
import { useQuery } from "@tanstack/react-query";
import useSecureAxios from "../../../hooks/useSecureAxios";

const ManageUsers = () => {
	const [searchText, setSearchText] = useState("");
	const secureAxios = useSecureAxios();
	const { data: users = [] } = useQuery({
		queryKey: ["users", searchText],
		queryFn: async () => {
			const res = await secureAxios.get(
				`/users?searchText=${searchText}`
			);
			return res.data;
		},
	});

	const statusStyles = {
		pending: "bg-yellow-400 text-white",
		suspended: "bg-red-500 text-white",
		active: "bg-green-500 text-white",
	};
	return (
		<motion.div
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
		>
			<div className="flex items-center justify-between mb-6">
				<h1 className="text-2xl font-bold">
					Manage Users {users.length}
				</h1>
				<input
					type="text"
					onChange={(e) => setSearchText(e.target.value)}
					placeholder="Search By Status...."
					className="flex h-10 rounded-md border border-[#E1E7EF] dark:border-[#1F1F1F] outline-0 bg-background px-3 py-2 text-base dark:bg-[#080C16]"
				/>
			</div>
			<div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
				<table className="table">
					{/* head */}
					<thead>
						<tr>
							<th>Name</th>
							<th>Email</th>
							<th>Role</th>
							<th>Status</th>
							<th>Actions</th>
						</tr>
					</thead>
					<tbody>
						{users.map((user) => (
							<tr key={user._id}>
								<td>{user.displayName}</td>
								<td>{user.email}</td>
								<td>{user.role}</td>
								<td>
									<span
										className={`px-3 py-1 inline-flex items-center justify-center rounded-full ${
											statusStyles[user.userStatus]
										}`}
									>
										{user.userStatus}
									</span>
								</td>
								<td>
									<button className="ml-2 inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-semibold border-2 text-primary border-[#E1E7EF] h-9 rounded-md px-4">
										Update
									</button>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</motion.div>
	);
};

export default ManageUsers;
