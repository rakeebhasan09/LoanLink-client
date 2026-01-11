import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useQuery } from "@tanstack/react-query";
import { Search } from "lucide-react";
import LoanCard from "../Shared/LoanCard";
import useSecureAxios from "../../hooks/useSecureAxios";

const AllLoans = () => {
	const [searchTerm, setSearchTerm] = useState("");
	const [selectedCategory, setSelectedCategory] = useState("all");
	const secureAxios = useSecureAxios();

	const { data: loans = [] } = useQuery({
		queryKey: ["all-loans", searchTerm],
		queryFn: async () => {
			const res = await secureAxios.get(
				`/loans?searchLoan=${searchTerm}`
			);
			return res.data;
		},
	});

	const categories = [...new Set(loans.map((loan) => loan.category))];

	const filterdLoans =
		selectedCategory === "all"
			? loans
			: loans.filter((loan) => loan.category === selectedCategory);

	return (
		<main>
			<title>All Loans - LoanLink</title>
			<section className="py-12 dark:bg-[#080C16]">
				<div className="container">
					{/* Page Title */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.3 }}
						className="text-center mb-12"
					>
						<h1 className="mb-4 text-4xl font-bold">
							All Loan Products
						</h1>
						<p className="mx-auto max-w-2xl text-[#65758B]">
							Explore our complete range of microloan products.
							Find the perfect loan that fits your needs with
							competitive rates and flexible terms.
						</p>
					</motion.div>

					{/* Search and Tabs */}
					<div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
						{/* Search */}
						<div className="relative w-full md:max-w-sm">
							<Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-text-[#65758B]" />
							<input
								placeholder="Search loans..."
								value={searchTerm}
								onChange={(e) => setSearchTerm(e.target.value)}
								className="pl-10 flex h-10 w-full rounded-md border border-[#E1E7EF] outline-0 px-3 py-2 text-base"
							/>
						</div>

						{/* Tabs */}
						{filterdLoans.length > 0 && (
							<div className="flex flex-wrap gap-2">
								<button
									onClick={() => setSelectedCategory("all")}
									className={`inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-semibold transition-all duration-300 border-2 border-[#E1E7EF] hover:bg-primary hover:text-white h-9 rounded-md px-4 ${
										selectedCategory === "all"
											? "bg-primary text-white"
											: ""
									}`}
								>
									All
								</button>
								{categories.map((category) => (
									<button
										className={`inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-semibold transition-all duration-300 border-2 border-[#E1E7EF] h-9 rounded-md px-4 hover:bg-primary hover:text-white ${
											selectedCategory === category
												? "bg-primary text-white"
												: ""
										}`}
										key={category}
										variant={
											selectedCategory === category
												? "default"
												: "outline"
										}
										size="sm"
										onClick={() =>
											setSelectedCategory(category)
										}
									>
										{category}
									</button>
								))}
							</div>
						)}
					</div>

					{/* Loan Cards */}
					<div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
						{filterdLoans.length > 0 ? (
							filterdLoans.map((loan) => (
								<LoanCard key={loan._id} loan={loan} />
							))
						) : (
							<p className="text-center col-span-full text-4xl font-semibold">
								No Loans Found
							</p>
						)}
					</div>
				</div>
			</section>
		</main>
	);
};

export default AllLoans;
