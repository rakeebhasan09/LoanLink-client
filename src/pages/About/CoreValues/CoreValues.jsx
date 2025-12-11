import React from "react";
import { motion } from "framer-motion";
import { Target, Users, Award, TrendingUp, Shield, Clock } from "lucide-react";
const values = [
	{
		icon: Shield,
		title: "Trust & Security",
		description:
			"We prioritize the security of your data and maintain transparent practices.",
	},
	{
		icon: Clock,
		title: "Fast Processing",
		description:
			"Quick approvals and disbursements to meet your urgent financial needs.",
	},
	{
		icon: Users,
		title: "Customer First",
		description: "Our customers are at the heart of everything we do.",
	},
	{
		icon: TrendingUp,
		title: "Competitive Rates",
		description:
			"We offer some of the most competitive interest rates in the market.",
	},
];

const CoreValues = () => {
	return (
		<section>
			<div className="container">
				{/* Values */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.3 }}
					className="mb-16"
				>
					<h2 className="mb-8 text-center text-2xl font-bold lg:text-3xl">
						Our Core Values
					</h2>
					<div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
						{values.map((value, index) => (
							<motion.div
								key={value.title}
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ delay: 0.3 + index * 0.1 }}
								className="rounded-2xl border border-[#E1E7EF] p-6 text-center"
							>
								<div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10">
									<value.icon className="h-7 w-7 text-primary" />
								</div>
								<h3 className="mb-2 font-semibold">
									{value.title}
								</h3>
								<p className="text-sm text-[#65758B] dark:text-[#94A3B8]">
									{value.description}
								</p>
							</motion.div>
						))}
					</div>
				</motion.div>
			</div>
		</section>
	);
};

export default CoreValues;
