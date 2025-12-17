import React, { useState } from "react";
import { motion } from "framer-motion";
import useSecureAxios from "../../../hooks/useSecureAxios";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router";

const LoanApplications = () => {
	const secureAxios = useSecureAxios();
	const [searchText, setSearchText] = useState("");

	const { data: loanApplications = [] } = useQuery({
		queryKey: ["loan-applications", searchText],
		queryFn: async () => {
			const res = await secureAxios.get(
				`/loan-applications?searchText=${searchText}`
			);
			return res.data;
		},
	});

	const statusStyles = {
		pending: "bg-yellow-400 text-white",
		rejected: "bg-red-500 text-white",
		approved: "bg-green-500 text-white",
	};
	return (
		<motion.div
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
		>
			<div className="flex items-center justify-between mb-6">
				<h1 className="text-2xl font-bold">
					Loan Applications {loanApplications.length}
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
							<th>Loan ID</th>
							<th>User (email, name)</th>
							<th>Loan Category</th>
							<th>Amount</th>
							<th>Status</th>
							<th>Actions</th>
						</tr>
					</thead>
					<tbody>
						{loanApplications.map((application, index) => (
							<tr>
								<td>L0{index + 1}</td>
								<td>
									<div>
										<div className="font-bold">
											{application.firstName +
												" " +
												application.lastName}
										</div>
										<div className="text-sm opacity-50">
											{application.email}
										</div>
									</div>
								</td>
								<td>{application.loanCategory}</td>
								<td>${application.loanAmount}</td>
								<td>
									<span
										className={`px-3 py-1 inline-flex items-center justify-center rounded-full ${
											statusStyles[
												application.feeStatus
											] || "bg-gray-400 text-white"
										}`}
									>
										{application.feeStatus}
									</span>
								</td>
								<td>
									<Link
										to={`/loan-details/${application.loanId}`}
										className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-semibold border-2 border-[#E1E7EF] h-9 rounded-md px-4"
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

export default LoanApplications;
