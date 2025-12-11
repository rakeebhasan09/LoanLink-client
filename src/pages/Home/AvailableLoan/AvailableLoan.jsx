import { TrendingUp } from "lucide-react";
import React from "react";

const AvailableLoan = () => {
	return (
		<section className="py-16 lg:py-24 dark:bg-[#080C16]">
			<div className="container">
				{/* Section Title */}
				<div className="flex flex-col gap-4 items-center">
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
				<div></div>
			</div>
		</section>
	);
};

export default AvailableLoan;
