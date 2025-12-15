import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
	ArrowLeft,
	ArrowRight,
	Calendar,
	DollarSign,
	FileText,
	Percent,
} from "lucide-react";
import { Link, useParams } from "react-router";
import useRole from "../../hooks/useRole";
import useSecureAxios from "../../hooks/useSecureAxios";

const LoanDetails = () => {
	const { role } = useRole();
	const { loanId } = useParams();
	const secureAxios = useSecureAxios();
	const [loan, setLoan] = useState({});

	useEffect(() => {
		secureAxios.get(`/loans/${loanId}`).then((res) => setLoan(res.data));
	}, [secureAxios, loanId]);
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
									src={loan.photo}
									alt={loan.title}
									className="w-full h-80 lg:h-96 object-cover"
								/>
								<span className="absolute top-4 left-4 bg-primary rounded-full text-base px-4 py-2">
									{loan.category}
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
									{loan.title}
								</h1>
								<p className="mt-4 text-lg text-[#65758B]">
									{loan.description}
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
									<p className="text-2xl font-bold">
										{loan.interestRate}%
									</p>
								</div>
								<div className="rounded-xl bg-[#F1F5F9] dark:bg-[#1D283A] p-4">
									<div className="flex items-center gap-2 text-primary mb-2">
										<DollarSign className="h-5 w-5" />
										<span className="text-sm font-medium">
											Max Limit
										</span>
									</div>
									<p className="text-2xl font-bold text-foreground">
										${loan.maxLimit}
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
									{loan.EMIPlans?.map((plan) => (
										<span
											key={plan}
											className="text-sm px-3 py-1 rounded-full bg-[#F4F7FA] dark:bg-[#192232]"
										>
											{plan} months
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
									{loan.documents?.map((doc) => (
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
								{role === "borrower" ? (
									<Link
										className="flex items-center justify-center gap-1.5 bg-primary text-white h-12 rounded-full"
										to={`/apply/${loanId}`}
									>
										Apply Now
										<ArrowRight className="ml-2 h-5 w-5" />
									</Link>
								) : (
									<button
										disabled
										className="flex w-full disabled cursor-no-drop items-center justify-center gap-1.5 bg-primary text-white h-12 rounded-full"
									>
										Only Borrower Can Apply
									</button>
								)}
							</div>
						</motion.div>
					</div>
				</div>
			</section>
		</>
	);
};

export default LoanDetails;
