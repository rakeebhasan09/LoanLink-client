import React from "react";
import { motion } from "framer-motion";
import { Shield, Clock, Headphones } from "lucide-react";
import { Link } from "react-router";

const features = [
	{
		icon: Shield,
		title: "Secure & Trusted",
		description:
			"Bank-level encryption and security measures to protect your data",
	},
	{
		icon: Clock,
		title: "Fast Processing",
		description:
			"Get approved in as little as 24 hours with our streamlined process",
	},
	{
		icon: Headphones,
		title: "24/7 Support",
		description: "Our dedicated team is always here to help you",
	},
];

const CTASection = () => {
	return (
		<section className="py-16 lg:py-24 border-b-[0.5px] border-b-primary bg-[#0F1729] dark:bg-white">
			<div className="container">
				<div className="grid gap-12 lg:grid-cols-2 lg:items-center">
					{/* Content */}
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
					>
						<h2 className="mb-4 text-3xl font-bold md:text-4xl text-white dark:text-black lg:text-5xl">
							Ready to Get Started?
						</h2>
						<p className="mb-8 text-lg text-[#B7BAB6] dark:text-[#080C16]">
							Join thousands of satisfied customers who have
							achieved their financial goals with LoanLink. Apply
							now and get approved in as little as 24 hours.
						</p>

						{/* Buttons */}
						<div className="flex flex-col md:flex-row items-center gap-4">
							<button className="flex items-center gap-2 px-6 py-3 rounded-full text-white font-semibold bg-[linear-gradient(135deg,rgba(35,191,155,1)_0%,rgba(41,136,130,1)_100%)] shadow-md hover:opacity-90 transition">
								Apply Now
								<span>→</span>
							</button>

							<Link
								to={"/contact"}
								className="flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-[#1bc298] border border-[#1bc298] bg-transparent hover:bg-[#1bc298]/10 transition"
							>
								Contact Us
							</Link>
						</div>
					</motion.div>

					{/* Features */}
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ delay: 0.2 }}
						className="space-y-6"
					>
						{features.map((feature, index) => (
							<motion.div
								key={feature.title}
								initial={{ opacity: 0, x: 30 }}
								whileInView={{ opacity: 1, x: 0 }}
								viewport={{ once: true }}
								transition={{ delay: index * 0.1 }}
								className="flex items-start gap-4 rounded-xl bg-[#1B2334] dark:bg-[#EBEEF0] p-4"
							>
								<div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary">
									<feature.icon className="h-6 w-6 text-white dark:text-[#0B2325]" />
								</div>
								<div>
									<h3 className="mb-1 font-semibold text-white dark:text-[#080C16]">
										{feature.title}
									</h3>
									<p className="text-sm text-white/60 dark:text-[#080C16]/60">
										{feature.description}
									</p>
								</div>
							</motion.div>
						))}
					</motion.div>
				</div>
			</div>
		</section>
	);
};

export default CTASection;
