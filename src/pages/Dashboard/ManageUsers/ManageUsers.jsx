import React, { useState } from "react";
import { motion } from "framer-motion";
import { useQuery } from "@tanstack/react-query";
import useSecureAxios from "../../../hooks/useSecureAxios";
import { Link } from "react-router";

const ManageUsers = () => {
	const secureAxios = useSecureAxios();
	const [searchText, setSearchText] = useState("");
	const [page, setPage] = useState(1);
	const limit = 5;
	const { data, isLoading } = useQuery({
		queryKey: ["users", searchText, page],
		queryFn: async () => {
			const res = await secureAxios.get(
				`/users?searchText=${encodeURIComponent(
					searchText
				)}&page=${page}&limit=${limit}`
			);
			return res.data;
		},
		keepPreviousData: true,
	});

	const users = data?.users || [];
	const totalPages = data?.totalPages || 1;

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
					Manage Users ({data?.totalUsers || 0})
				</h1>

				<input
					type="text"
					value={searchText}
					onChange={(e) => {
						setSearchText(e.target.value);
						setPage(1);
					}}
					placeholder="Search by name..."
					className="h-10 rounded-md border border-[#F3F3F3] outline-none px-3"
				/>
			</div>

			{/* TABLE */}
			<div className="overflow-x-auto rounded-box border border-[#F3F3F3] bg-base-100">
				<table className="table">
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
						{isLoading ? (
							<tr>
								<td colSpan="5" className="text-center">
									Loading...
								</td>
							</tr>
						) : (
							users.map((user) => (
								<tr key={user._id}>
									<td>{user.displayName}</td>
									<td>{user.email}</td>
									<td>{user.role}</td>
									<td>
										<span
											className={`px-3 py-1 rounded-full ${
												statusStyles[user.userStatus]
											}`}
										>
											{user.userStatus}
										</span>
									</td>
									<td>
										<Link
											to={`/dashboard/update-user/${user._id}`}
											className="border inline-block border-[#F3F3F3] px-4 py-1 rounded-md"
										>
											Update
										</Link>
									</td>
								</tr>
							))
						)}
					</tbody>
				</table>
			</div>

			{/* PAGINATION BUTTONS */}
			<div className="flex justify-center gap-2 mt-6">
				<button
					disabled={page === 1}
					onClick={() => setPage((prev) => prev - 1)}
					className="px-3 py-1 border rounded disabled:opacity-50"
				>
					Prev
				</button>

				{[...Array(totalPages).keys()].map((num) => (
					<button
						key={num}
						onClick={() => setPage(num + 1)}
						className={`px-3 py-1 border border-[#F3F3F3] rounded ${
							page === num + 1 ? "bg-primary text-white" : ""
						}`}
					>
						{num + 1}
					</button>
				))}

				<button
					disabled={page === totalPages}
					onClick={() => setPage((prev) => prev + 1)}
					className="px-3 py-1 border rounded disabled:opacity-50"
				>
					Next
				</button>
			</div>
		</motion.div>
	);
};

export default ManageUsers;
