import React from "react";
import { motion } from "framer-motion";
import useAuth from "../../../hooks/useAuth";
import useSecureAxios from "../../../hooks/useSecureAxios";
import { useQuery } from "@tanstack/react-query";

const MyLoans = () => {
	const { user } = useAuth();
	const secureAxios = useSecureAxios();

	const { data: myLoans = [], refetch } = useQuery({
		queryKey: ["my-loans", user?.email],
		queryFn: async () => {
			const res = await secureAxios.get(
				`/loan-applications?email=${user?.email}`
			);
			return res.data;
		},
	});

	const statusStyles = {
		pending: "bg-yellow-400 text-white",
		rejected: "bg-red-500 text-white",
		approved: "bg-green-500 text-white",
	};

	const handlePayment = async (loan) => {
		const paymentInfo = {
			loanId: loan._id,
			userEmail: loan.email,
		};
		const res = await secureAxios.post(
			"/payment-checkout-session",
			paymentInfo
		);
		window.location.assign(res.data.url);
	};

	return (
		<motion.div
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
		>
			<h1 className="text-2xl font-bold mb-6">
				My Loan Applications {myLoans.length}
			</h1>
			<div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
				<table className="table">
					{/* head */}
					<thead>
						<tr>
							<th>Loan ID</th>
							<th>Loan Type</th>
							<th>Amount</th>
							<th>Status</th>
							<th>Actions</th>
						</tr>
					</thead>
					<tbody>
						{myLoans.map((loan, index) => (
							<tr key={loan._id}>
								<td>L0{index + 1}</td>
								<td>{loan.loanTitle}</td>
								<td>${loan.loanAmount}</td>
								<td>
									<span
										className={`px-3 py-1 inline-flex items-center justify-center rounded-full ${
											statusStyles[loan.feeStatus] ||
											"bg-gray-400 text-white"
										}`}
									>
										{loan.feeStatus}
									</span>
								</td>
								<td>
									<button className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-semibold border-2 border-[#E1E7EF] h-9 rounded-md px-4">
										View
									</button>

									{loan.feeStatus === "unpaid" && (
										<>
											<button className="ml-2 inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-semibold border-2 bg-[#EF5556] text-white border-[#E1E7EF] h-9 rounded-md px-4">
												Cancle
											</button>
											<button
												onClick={() =>
													handlePayment(loan)
												}
												className="ml-2 inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-semibold border-2 bg-[#26BD8C] text-white border-[#E1E7EF] h-9 rounded-md px-4"
											>
												Pay Fee
											</button>
										</>
									)}
									{loan.feeStatus !== "unpaid" && (
										<button className="ml-2 inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-semibold border-2 bg-[#26BD8C] text-white border-[#E1E7EF] h-9 rounded-md px-4">
											Paid
										</button>
									)}
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</motion.div>
	);
};

export default MyLoans;
