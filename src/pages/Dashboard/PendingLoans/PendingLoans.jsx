import React from "react";
import { motion } from "framer-motion";
import useSecureAxios from "../../../hooks/useSecureAxios";
import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";
import { Link } from "react-router";

const PendingLoans = () => {
	const secureAxios = useSecureAxios();
	const { data: pendingLoans = [], refetch } = useQuery({
		queryKey: ["pending-loans"],
		queryFn: async () => {
			const res = await secureAxios.get(
				`/loan-applications?feeStatus=pending`
			);
			return res.data;
		},
	});

	// Common Fucntion For Update Loan Status
	const updateLoanStatus = (loanId, newStatus) => {
		const updatedInfo = {
			status: newStatus,
		};
		secureAxios
			.patch(`/loan-applications/${loanId}`, updatedInfo)
			.then((res) => {
				if (res.data.modifiedCount) {
					refetch();
					Swal.fire({
						position: "center",
						icon: "success",
						title: "Loan Status Updated.",
						showConfirmButton: false,
						timer: 1500,
					});
				}
			});
	};

	// Handle Loan Approved
	const handleLoanApproved = (loanId) => {
		updateLoanStatus(loanId, "approved");
	};

	// Handle Loan Reject
	const handleLoanReject = (loanId) => {
		updateLoanStatus(loanId, "rejected");
	};

	return (
		<motion.div
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
		>
			<h1 className="text-2xl font-bold mb-6">
				Pending Loan Applications {pendingLoans.length}
			</h1>
			<div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
				<table className="table">
					{/* head */}
					<thead>
						<tr>
							<th>SL No</th>
							<th>Borrower</th>
							<th>Amount</th>
							<th>Date</th>
							<th>Actions</th>
						</tr>
					</thead>
					<tbody>
						{pendingLoans.map((pandingLoan, index) => (
							<tr key={pandingLoan._id}>
								<td>{index + 1}</td>
								<td>
									<div>
										<div className="font-bold">
											{pandingLoan.firstName +
												" " +
												pandingLoan.lastName}
										</div>
										<div className="text-sm opacity-50">
											{pandingLoan.email}
										</div>
									</div>
								</td>
								<td>${pandingLoan.loanAmount}</td>
								<td>
									{new Date(pandingLoan.create_at)
										.toLocaleDateString("en-GB", {
											day: "2-digit",
											month: "short",
											year: "2-digit",
										})
										.replaceAll(" ", "-")}
								</td>
								<td>
									<button
										onClick={() =>
											handleLoanApproved(pandingLoan._id)
										}
										className="ml-2 inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-semibold border-2 bg-[#26BD8C] text-white border-[#E1E7EF] h-9 rounded-md px-4"
									>
										Approve
									</button>
									<button
										onClick={() =>
											handleLoanReject(pandingLoan._id)
										}
										className="ml-2 inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-semibold border-2 bg-[#EF5556] text-white border-[#E1E7EF] h-9 rounded-md px-4"
									>
										Reject
									</button>
									<Link
										to={`/loan-details/${pandingLoan.loanId}`}
										className="ml-2 inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-semibold border-2 border-[#E1E7EF] h-9 rounded-md px-4"
									>
										View
									</Link>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</motion.div>
	);
};

export default PendingLoans;
