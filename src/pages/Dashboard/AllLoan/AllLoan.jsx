import React from "react";
import { motion } from "framer-motion";
import { useQuery } from "@tanstack/react-query";
import useSecureAxios from "../../../hooks/useSecureAxios";
import Swal from "sweetalert2";
import { Link } from "react-router";

const AllLoan = () => {
	const secureAxios = useSecureAxios();
	const { data: allLoans = [], refetch } = useQuery({
		queryKey: ["all-loans"],
		queryFn: async () => {
			const res = await secureAxios.get("/loans");
			return res.data;
		},
	});

	// Handle Delete Loans
	const handleDeleteLoans = (id) => {
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

	// Handle Loan Visibillity Status
	const handleShowHome = (loan) => {
		const newStatus = { showHome: !loan.showHome };
		secureAxios.patch(`/loans/${loan._id}`, newStatus).then((res) => {
			if (res.data.modifiedCount) {
				refetch();
				Swal.fire({
					position: "center",
					icon: "success",
					title: "Loan status has been updated.",
					showConfirmButton: false,
					timer: 1500,
				});
			}
		});
	};

	return (
		<motion.div
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
		>
			<h1 className="text-2xl font-bold mb-6">All Loans</h1>
			<div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
				<table className="table">
					{/* head */}
					<thead>
						<tr>
							<th>SL No</th>
							<th>Image</th>
							<th>Title</th>
							<th>Interest</th>
							<th>Category </th>
							<th>Created By</th>
							<th>Show on Home</th>
							<th>Actions</th>
						</tr>
					</thead>
					<tbody>
						{allLoans.map((loan, index) => (
							<tr key={index}>
								<th>{index + 1}</th>
								<td>
									<img
										className="w-12"
										src={loan.photo}
										alt={loan.title}
									/>
								</td>
								<td>{loan.title}</td>
								<td>{loan.interestRate}%</td>
								<td>{loan.category}</td>
								<td>
									{loan.created_by
										? loan.created_by
										: "Manager Name"}
								</td>
								<td>
									<input
										checked={loan.showHome}
										onChange={() => handleShowHome(loan)}
										type="checkbox"
										className="cursor-pointer"
									/>
								</td>
								<td>
									<Link
										to={`/dashboard/update-loan/${loan._id}`}
										className="ml-2 inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-semibold border-2 text-primary border-[#E1E7EF] h-9 rounded-md px-4"
									>
										Update
									</Link>
									<button
										onClick={() =>
											handleDeleteLoans(loan._id)
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

export default AllLoan;
