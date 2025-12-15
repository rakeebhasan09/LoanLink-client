import React from "react";
import { motion } from "framer-motion";
import useSecureAxios from "../../../hooks/useSecureAxios";
import { useQuery } from "@tanstack/react-query";

const ApprovedLoans = () => {
	const secureAxios = useSecureAxios();
	const { data: approvedLoans = [], refetch } = useQuery({
		queryKey: ["approved-loans"],
		queryFn: async () => {
			const res = await secureAxios.get(
				`/loan-applications?loanStatus=approved`
			);
			return res.data;
		},
	});
	return (
		<motion.div
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
		>
			<h1 className="text-2xl font-bold mb-6">
				Approved Loan Applications {approvedLoans.length}
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
						{approvedLoans.map((approvedLoan, idx) => (
							<tr key={approvedLoan._id}>
								<td>LO{idx + 1}</td>
								<td>
									<div>
										<div className="font-bold">
											{approvedLoan.firstName +
												" " +
												approvedLoan.lastName}
										</div>
										<div className="text-sm opacity-50">
											{approvedLoan.address}
										</div>
									</div>
								</td>
								<td>${approvedLoan.loanAmount}</td>
								<td>
									{new Date(approvedLoan.create_at)
										.toLocaleDateString("en-GB", {
											day: "2-digit",
											month: "short",
											year: "2-digit",
										})
										.replaceAll(" ", "-")}
								</td>
								<td>
									<button className="ml-2 inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-semibold border-2 border-[#E1E7EF] h-9 rounded-md px-4">
										View
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

export default ApprovedLoans;
