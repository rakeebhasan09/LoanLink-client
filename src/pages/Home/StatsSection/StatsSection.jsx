import React from "react";
import { motion } from "framer-motion";

const stats = [
	{ value: 10000, suffix: "+", label: "Happy Customers" },
	{ value: 50, suffix: "M+", label: "Loans Disbursed" },
	{ value: 98, suffix: "%", label: "Approval Rate" },
	{ value: 24, suffix: "hr", label: "Avg. Approval Time" },
];

const StatsSection = () => {
	return (
		<section className="py-16 lg:py-24 bg-[#0F1729] dark:bg-[#F8FAFC]">
			<div className="container">
				<div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
					{stats.map((stat, index) => (
						<motion.div
							key={stat.label}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ delay: index * 0.1 }}
							className="text-center"
						>
							<p className="mb-2 text-4xl font-bold text-primary md:text-5xl">
								{stat.value}
							</p>
							<p className="text-[#8CB0BF]">{stat.label}</p>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
};

export default StatsSection;
