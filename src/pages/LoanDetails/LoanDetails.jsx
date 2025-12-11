import React from "react";
import { motion } from "framer-motion";
import {
	ArrowLeft,
	ArrowRight,
	Calendar,
	DollarSign,
	FileText,
	Percent,
} from "lucide-react";
import { Link } from "react-router";

const emiPlans = [
	"3 months",
	"6 months",
	"12 months",
	"24 months",
	"36 months",
];

const requiredDocs = [
	"Government ID",
	"Proof of Income",
	"Bank Statements",
	"Proof of Address",
];

const LoanDetails = () => {
	return (
		<>
			<title>Loan Details - LoanLink</title>
			<section className="py-12 lg:py-24 dark:bg-[#080C16]">
				<div className="container">
					{/* Back Button */}
					<motion.div
						initial={{ opacity: 0, x: -20 }}
						animate={{ opacity: 1, x: 0 }}
					>
						<button className="mb-6">
							<Link
								className="flex items-center gap-2 px-5 py-2 hover:bg-primary hover:text-white transition duration-300 rounded-full"
								to="/all-loans"
							>
								<ArrowLeft className="mr-2 h-4 w-4" />
								Back to All Loans
							</Link>
						</button>
					</motion.div>
					<div className="grid gap-8 lg:grid-cols-2">
						{/* Image Section */}
						<motion.div
							initial={{ opacity: 0, x: -30 }}
							animate={{ opacity: 1, x: 0 }}
						>
							<div className="relative overflow-hidden rounded-2xl">
								<img
									src="https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=400&h=250&fit=crop"
									alt=""
									className="w-full h-80 lg:h-96 object-cover"
								/>
								<span className="absolute top-4 left-4 bg-primary rounded-full text-base px-4 py-2">
									Home
								</span>
							</div>
						</motion.div>

						<motion.div
							initial={{ opacity: 0, x: 30 }}
							animate={{ opacity: 1, x: 0 }}
							className="space-y-6"
						>
							<div>
								<h1 className="text-3xl font-bold  lg:text-4xl">
									Loan Title
								</h1>
								<p className="mt-4 text-lg text-[#65758B]">
									Quick personal loans for your immediate
									needs with flexible repayment options.
								</p>
							</div>

							{/* Key Info */}
							<div className="grid grid-cols-2 gap-4">
								<div className="rounded-xl bg-[#F1F5F9] dark:bg-[#1D283A] p-4">
									<div className="flex items-center gap-2 text-primary mb-2">
										<Percent className="h-5 w-5" />
										<span className="text-sm font-medium">
											Interest Rate
										</span>
									</div>
									<p className="text-2xl font-bold">12%</p>
								</div>
								<div className="rounded-xl bg-[#F1F5F9] dark:bg-[#1D283A] p-4">
									<div className="flex items-center gap-2 text-primary mb-2">
										<DollarSign className="h-5 w-5" />
										<span className="text-sm font-medium">
											Max Limit
										</span>
									</div>
									<p className="text-2xl font-bold text-foreground">
										$20000
									</p>
								</div>
							</div>

							{/* EMI Plans */}
							<div>
								<div className="flex items-center gap-2 mb-3">
									<Calendar className="h-5 w-5 text-primary" />
									<h3 className="font-semibold">
										Available EMI Plans
									</h3>
								</div>
								<div className="flex flex-wrap gap-2">
									{emiPlans.map((plan) => (
										<span
											key={plan}
											className="text-sm px-3 py-1 rounded-full bg-[#F4F7FA] dark:bg-[#192232]"
										>
											{plan}
										</span>
									))}
								</div>
							</div>

							{/* Required Documents */}
							<div>
								<div className="flex items-center gap-2 mb-3">
									<FileText className="h-5 w-5 text-primary" />
									<h3 className="font-semibold">
										Required Documents
									</h3>
								</div>
								<ul className="grid grid-cols-2 gap-2">
									{requiredDocs.map((doc) => (
										<li
											key={doc}
											className="flex items-center gap-2"
										>
											<div className="h-1.5 w-1.5 rounded-full bg-primary" />
											{doc}
										</li>
									))}
								</ul>
							</div>

							{/* Apply Button */}
							<div>
								<Link
									className="flex items-center justify-center gap-1.5 bg-primary text-white h-12 rounded-full"
									to={`/apply/4`}
								>
									Apply Now
									<ArrowRight className="ml-2 h-5 w-5" />
								</Link>
							</div>
						</motion.div>
					</div>
				</div>
			</section>
		</>
	);
};

export default LoanDetails;
