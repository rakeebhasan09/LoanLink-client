import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router";
import { ArrowRight } from "lucide-react";

const LoanCard = ({ loan }) => {
	return (
		<motion.div
			initial={{ opacity: 0, y: 50 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true }}
			transition={{
				duration: 0.6,
				ease: "easeOut",
			}}
			className="group rounded-2xl border border-[#E1E7EF] overflow-hidden hover-lift"
		>
			<div className="flex flex-col h-full">
				{/* Image Div */}
				<div className="relative h-48 overflow-hidden">
					<img
						src={loan.photo}
						alt={loan.title}
						className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
					/>

					<div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors border-transparent hover:bg-primary/80 absolute z-10 bottom-4 left-4 bg-primary text-white dark:text-[#080C16]">
						{loan.category}
					</div>
				</div>

				{/* Content Div */}
				<div className="p-6 grow flex flex-col">
					<h3 className="mb-2 text-xl font-bold">{loan.title}</h3>
					<p className="mb-4 grow text-sm text-[#65758B]">
						{loan.description}
					</p>

					<div className="mb-4 flex items-center justify-between border-t border-t-[#E1E7EF] pt-4">
						<div>
							<p className="text-xs text-[#65758B]">
								Interest Rate
							</p>
							<p className="font-semibold text-primary">
								{loan.interestRate}%
							</p>
						</div>
						<div className="text-right">
							<p className="text-xs text-[#65758B]">Max Limit</p>
							<p className="font-semibold text-card-foreground">
								${loan.maxLimit}
							</p>
						</div>
					</div>
					<div>
						<Link
							className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-semibold transition-all duration-300 border-2 border-primary text-primary bg-transparent hover:bg-primary hover:text-white h-10 px-5 py-2 w-full"
							to={`/loan-details/${loan._id}`}
						>
							View Details
							<ArrowRight className="ml-2 h-4 w-4" />
						</Link>
					</div>
				</div>
			</div>
		</motion.div>
	);
};

export default LoanCard;
