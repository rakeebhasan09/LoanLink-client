import { motion } from "framer-motion";

const stats = [
	{ label: "Years of Service", value: "10+" },
	{ label: "Happy Customers", value: "50K+" },
	{ label: "Loans Disbursed", value: "$100M+" },
	{ label: "Countries Served", value: "25+" },
];
const AboutState = () => {
	return (
		<section className="py-16">
			<div className="container">
				{/* Stats */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.1 }}
					className="grid grid-cols-2 gap-6 lg:grid-cols-4"
				>
					{stats.map((stat) => (
						<div
							key={stat.label}
							className="rounded-2xl bg-primary/5 p-6 text-center"
						>
							<p className="text-3xl font-bold text-primary lg:text-4xl">
								{stat.value}
							</p>
							<p className="mt-2 text-muted-foreground">
								{stat.label}
							</p>
						</div>
					))}
				</motion.div>
			</div>
		</section>
	);
};

export default AboutState;
