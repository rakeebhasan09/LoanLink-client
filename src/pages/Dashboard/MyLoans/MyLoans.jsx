import React from "react";
import { motion } from "framer-motion";

const MyLoans = () => {
	return (
		<motion.div
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
		>
			<h1 className="text-2xl font-bold mb-6">My Loan Applications</h1>
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
						{/* row 1 */}
						<tr>
							<td>L001</td>
							<td>Personal Loan</td>
							<td>$5,000</td>
							<td>
								<span>Pending</span>
							</td>
							<td>
								<button className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-semibold border-2 border-[#E1E7EF] h-9 rounded-md px-4">
									View
								</button>
								<button className="ml-2 inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-semibold border-2 bg-[#EF5556] text-white border-[#E1E7EF] h-9 rounded-md px-4">
									Cancle
								</button>
								<button className="ml-2 inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-semibold border-2 bg-[#26BD8C] text-white border-[#E1E7EF] h-9 rounded-md px-4">
									Pay Fee
								</button>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		</motion.div>
	);
};

export default MyLoans;
