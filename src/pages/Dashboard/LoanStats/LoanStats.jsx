import React from "react";
import useSecureAxios from "../../../hooks/useSecureAxios";
import { useQuery } from "@tanstack/react-query";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";

const LoanStats = () => {
	const secureAxios = useSecureAxios();
	const { data: loanStats = [], isLoading } = useQuery({
		queryKey: ["chart-data"],
		queryFn: async () => {
			const res = await secureAxios.get(`/loan-applications`);
			return res.data;
		},
	});

	console.log(loanStats);

	const pending = loanStats.filter(
		(item) => item.feeStatus === "pending"
	).length;
	const approved = loanStats.filter(
		(item) => item.feeStatus === "approved"
	).length;
	const rejected = loanStats.filter(
		(item) => item.feeStatus === "rejected"
	).length;

	const data = [
		{ name: "Pending", value: pending },
		{ name: "Approved", value: approved },
		{ name: "Rejected", value: rejected },
	];

	const COLORS = ["#FBBF24", "#10B981", "#EF4444"];

	if (isLoading) {
		return (
			<div className="bg-white p-6 rounded-xl shadow-md w-full md:w-1/2 mx-auto text-center">
				<p className="text-lg font-semibold">Loading chart...</p>
			</div>
		);
	}
	return (
		<div>
			<div>
				<h2 className="text-xl font-semibold mb-4">
					Loan Application Stats
				</h2>

				<PieChart width="100%" height={300} className="mx-auto">
					<Pie
						data={data}
						cx="50%"
						cy="50%"
						outerRadius={110}
						labelLine={false}
						dataKey="value"
					>
						{data.map((entry, index) => (
							<Cell key={index} fill={COLORS[index]} />
						))}
					</Pie>

					<Tooltip />
					<Legend />
				</PieChart>
			</div>
		</div>
	);
};

export default LoanStats;
