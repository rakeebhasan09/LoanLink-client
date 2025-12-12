import React, { useState } from "react";
import { motion } from "framer-motion";
import useAuth from "../../../hooks/useAuth";
import useSecureAxios from "../../../hooks/useSecureAxios";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router";
import Swal from "sweetalert2";

const ManageLoans = () => {
	const { user } = useAuth();
	const secureAxios = useSecureAxios();
	const [searchText, setSearchText] = useState("");

	const { data: loans = [], refetch } = useQuery({
		queryKey: ["loans", user?.email, searchText],
		queryFn: async () => {
			const res = await secureAxios.get(
				`/loans?email=${user?.email}&searchText=${searchText}`
			);
			return res.data;
		},
	});

	// Handle Delete Loan
	const handleDeleteLoan = (id) => {
		Swal.fire({
			title: "Are you sure?",
			text: "You won't be able to revert this!",
			icon: "warning",
			showCancelButton: true,
			confirmButtonColor: "#3085d6",
			cancelButtonColor: "#d33",
			confirmButtonText: "Yes, delete it!",
		}).then((result) => {
			if (result.isConfirmed) {
				secureAxios.delete(`/loans/${id}`).then((res) => {
					if (res.data.deletedCount) {
						refetch();
						Swal.fire({
							title: "Deleted!",
							text: "Loan has been deleted.",
							icon: "success",
						});
					}
				});
			}
		});
	};

	return (
		<motion.div
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
		>
			<div className="flex justify-between items-center mb-6">
				<h1 className="text-2xl font-bold">
					Manage Loans {loans.length}
				</h1>
				<input
					type="text"
					onChange={(e) => setSearchText(e.target.value)}
					placeholder="Search Loans...."
					className="flex h-10 rounded-md border border-[#E1E7EF] dark:border-[#1F1F1F] outline-0 bg-background px-3 py-2 text-base dark:bg-[#080C16]"
				/>
			</div>
			<div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
				<table className="table">
					{/* head */}
					<thead>
						<tr>
							<th>SL No</th>
							<th>Photo</th>
							<th>Title</th>
							<th>Interest</th>
							<th>Category</th>
							<th>Actions</th>
						</tr>
					</thead>
					<tbody>
						{loans.map((loan, index) => (
							<tr key={loan._id}>
								<td>{index + 1}</td>
								<td>
									<img
										className="w-16"
										src={loan.photo}
										alt=""
									/>
								</td>
								<td>{loan.title}</td>
								<td>{loan.interestRate}%</td>
								<td>{loan.category}</td>
								<td>
									<Link
										to={`/dashboard/update-loan/${loan._id}`}
										className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-semibold border-2 border-[#E1E7EF] h-9 rounded-md px-4"
									>
										Update
									</Link>
									<button
										onClick={() =>
											handleDeleteLoan(loan._id)
										}
										className="ml-2 inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-semibold border-2 bg-[#EF5556] text-white border-[#E1E7EF] h-9 rounded-md px-4"
									>
										Delete
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

export default ManageLoans;
