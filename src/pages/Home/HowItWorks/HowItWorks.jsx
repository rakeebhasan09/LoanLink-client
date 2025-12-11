import React from "react";
import { motion } from "framer-motion";
import { FileText, Search, CheckCircle, Banknote } from "lucide-react";

const steps = [
	{
		icon: FileText,
		title: "Submit Application",
		description:
			"Fill out our simple online form with your personal and financial details.",
	},
	{
		icon: Search,
		title: "Document Review",
		description:
			"Our team reviews your application and verifies the submitted documents.",
	},
	{
		icon: CheckCircle,
		title: "Get Approved",
		description:
			"Receive approval notification within 24 hours of submission.",
	},
	{
		icon: Banknote,
		title: "Receive Funds",
		description: "Get the money transferred directly to your bank account.",
	},
];

const HowItWorks = () => {
	return (
		<section className="py-16 lg:py-24 bg-[#F7F9FB] dark:bg-[#131A28]">
			<div className="container">
				{/* Header */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					className="mb-12 text-center"
				>
					<h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
						How It Works
					</h2>
					<p className="mx-auto max-w-2xl text-muted-foreground">
						Getting a loan has never been easier. Follow these
						simple steps to get the funds you need quickly and
						securely.
					</p>
				</motion.div>

				{/* Steps */}
				<div className="relative">
					{/* Connecting Line */}
					<div className="absolute left-1/2 top-16 hidden h-[calc(100%-8rem)] w-0.5 -translate-x-1/2 bg-border lg:block" />

					<div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
						{steps.map((step, index) => (
							<motion.div
								key={step.title}
								initial={{ opacity: 0, y: 30 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ delay: index * 0.1 }}
								className="relative text-center"
							>
								{/* Step Number */}
								<div className="relative z-10 mx-auto mb-6">
									<div className="flex h-20 w-20 items-center justify-center rounded-2xl gradient-primary shadow-glow mx-auto">
										<step.icon className="h-10 w-10 text-white" />
									</div>
									<div className="absolute -right-2 -top-2 flex h-8 w-8 items-center justify-center rounded-full bg-[#F59F0A] text-white font-bold text-sm">
										{index + 1}
									</div>
								</div>

								<h3 className="mb-2 text-xl font-bold">
									{step.title}
								</h3>
								<p>{step.description}</p>
							</motion.div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default HowItWorks;
