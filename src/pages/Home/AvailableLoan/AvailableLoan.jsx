import { ArrowRight, TrendingUp } from "lucide-react";
import React, { useEffect, useState } from "react";
import LoanCard from "../../Shared/LoanCard";
import { motion } from "framer-motion";
import { Link } from "react-router";
import useSecureAxios from "../../../hooks/useSecureAxios";

const AvailableLoan = () => {
	const [loans, setLoans] = useState([]);
	const secureAxios = useSecureAxios();
	useEffect(() => {
		secureAxios.get("/featured-loans").then((res) => setLoans(res.data));
	}, [secureAxios]);
	return (
		<section className="py-16 lg:py-24 dark:bg-[#080C16]">
			<div className="container">
				{/* Section Title */}
				<div className="flex mb-12 flex-col gap-4 items-center">
					<div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors border-transparent bg-[#F4F7FA] dark:bg-[#192232]">
						<TrendingUp className="mr-1 h-3 w-3" />
						Featured Loans
					</div>
					<h2 className="text-3xl font-bold md:text-4xl">
						Available Loan Options
					</h2>
					<p className="mx-auto max-w-2xl text-muted text-center">
						Explore our range of microloan products designed to meet
						your various financial needs with competitive rates and
						flexible terms.
					</p>
				</div>

				{/* Loan Cards */}
				<div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
					{loans.map((loan) => (
						<LoanCard key={loan._id} loan={loan} />
					))}
				</div>

				{/* CTA */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					className="mt-12 text-center"
				>
					<Link
						className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-semibold ring-offset-background transition-all duration-300 gradient-primary text-white dark:text-[#080C16] hover:shadow-glow hover:-translate-y-0.5 h-12 rounded-xl px-8 text-base"
						to="/all-loans"
					>
						View All Loans
						<ArrowRight className="ml-2 h-5 w-5" />
					</Link>
				</motion.div>
			</div>
		</section>
	);
};

export default AvailableLoan;
