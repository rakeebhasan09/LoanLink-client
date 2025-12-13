import React from "react";
import { motion } from "framer-motion";

const PendingLoans = () => {
	return (
		<motion.div
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
		>
			<h1 className="text-2xl font-bold mb-6">
				Pending Loan Applications
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
						{/* row 1 */}
						<tr>
							<td>1</td>
							<td>
								<div>
									<div className="font-bold">
										Hart Hagerty
									</div>
									<div className="text-sm opacity-50">
										United States
									</div>
								</div>
							</td>
							<td>Quality Control Specialist</td>
							<td>Blue</td>
							<td>
								<button className="ml-2 inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-semibold border-2 bg-[#26BD8C] text-white border-[#E1E7EF] h-9 rounded-md px-4">
									Approve
								</button>
								<button className="ml-2 inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-semibold border-2 bg-[#EF5556] text-white border-[#E1E7EF] h-9 rounded-md px-4">
									Reject
								</button>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		</motion.div>
	);
};

export default PendingLoans;
