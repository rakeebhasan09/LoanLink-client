import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import useAuth from "../../hooks/useAuth";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router";
import useSecureAxios from "../../hooks/useSecureAxios";

const Apply = () => {
	const { user } = useAuth();
	const {
		register,
		formState: { errors },
		handleSubmit,
	} = useForm();
	const [loan, setLoan] = useState({});
	const { loanId } = useParams();
	const secureAxios = useSecureAxios();
	const navigate = useNavigate();

	useEffect(() => {
		secureAxios.get(`/loans/${loanId}`).then((res) => setLoan(res.data));
	}, [secureAxios, loanId]);

	const handleLoanApplication = (data) => {
		console.log(data);
	};
	return (
		<main className="py-16 dark:bg-[#080C16]">
			<div className="container">
				{/* Back Button */}
				<motion.div
					initial={{ opacity: 0, x: -20 }}
					animate={{ opacity: 1, x: 0 }}
				>
					<button
						onClick={() => navigate(-1)}
						className="mb-6 flex items-center gap-2 px-5 py-2 hover:bg-primary hover:text-white transition duration-300 rounded-full"
					>
						<ArrowLeft className="mr-2 h-4 w-4" />
						Back to Loan Details
					</button>
				</motion.div>

				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					className="mx-auto max-w-2xl dark:bg-[#0C1322]"
				>
					<div className="rounded-2xl border border-[#E1E7EF] dark:border-[#222F44] p-6 lg:p-8">
						<h1 className="text-2xl font-bold text-card-foreground mb-2">
							Loan Application Form
						</h1>
						<p className="text-muted-foreground mb-8">
							Applying for:{" "}
							<span className="font-medium text-primary">
								{loan.title}
							</span>
						</p>

						<form
							onSubmit={handleSubmit(handleLoanApplication)}
							className="space-y-6"
						>
							{/* Read-only fields */}
							<div className="grid gap-4 md:grid-cols-2">
								<div className="space-y-2">
									<label className="block">Email</label>
									<input
										value={user?.email}
										readOnly
										{...register("email")}
										className="bg-[#F5F7F9] flex h-10 w-full rounded-md border border-[#E1E7EF] dark:border-transparent px-3 py-2 text-base outline-0 text-[#878B94] dark:bg-[#151E2E] dark:text-[#777C85]"
									/>
								</div>
								<div className="space-y-2">
									<label className="block">Loan Title</label>
									<input
										value={loan.title}
										readOnly
										{...register("loanTitle")}
										className="bg-[#F5F7F9] flex h-10 w-full rounded-md border border-[#E1E7EF] dark:border-transparent px-3 py-2 text-base outline-0 text-[#878B94] dark:bg-[#151E2E] dark:text-[#777C85]"
									/>
								</div>
								<div className="space-y-2 md:col-span-2">
									<label className="block">
										Interest Rate
									</label>
									<input
										value={`${loan.interestRate}%`}
										readOnly
										{...register("loanInterest")}
										className="bg-[#F5F7F9] flex h-10 w-full rounded-md border border-[#E1E7EF] dark:border-transparent px-3 py-2 text-base outline-0 text-[#878B94] dark:bg-[#151E2E] dark:text-[#777C85]"
									/>
								</div>

								{/* User Input fields */}
								<div className="space-y-2">
									<label className="block">
										First Name *
									</label>
									<input
										type="text"
										{...register("firstName", {
											required: true,
										})}
										className="flex h-10 w-full rounded-md border border-[#E1E7EF] dark:border-transparent px-3 py-2 text-base outline-0 text-[#878B94] dark:bg-[#080C16] dark:text-white"
										placeholder="First Name"
									/>
									{errors.firstName?.type === "required" && (
										<p className="text-red-500 text-xs">
											First name is required
										</p>
									)}
								</div>

								{/* User Input fields */}
								<div className="space-y-2">
									<label className="block">Last Name *</label>
									<input
										type="text"
										{...register("lastName", {
											required: true,
										})}
										className="flex h-10 w-full rounded-md border border-[#E1E7EF] dark:border-transparent px-3 py-2 text-base outline-0 text-[#878B94] dark:bg-[#080C16] dark:text-white"
										placeholder="Last Name"
									/>
									{errors.lastName?.type === "required" && (
										<p className="text-red-500 text-xs">
											Last name is required
										</p>
									)}
								</div>

								{/* User Input fields */}
								<div className="space-y-2">
									<label className="block">
										Contact Number *
									</label>
									<input
										type="text"
										{...register("mobile", {
											required: true,
										})}
										className="flex h-10 w-full rounded-md border border-[#E1E7EF] dark:border-transparent px-3 py-2 text-base outline-0 text-[#878B94] dark:bg-[#080C16] dark:text-white"
										placeholder="Contact Number"
									/>
									{errors.mobile?.type === "required" && (
										<p className="text-red-500 text-xs">
											Contact Number is required
										</p>
									)}
								</div>

								{/* User Input fields */}
								<div className="space-y-2">
									<label className="block">
										National ID / Passport *
									</label>
									<input
										type="text"
										{...register("NID", {
											required: true,
										})}
										className="flex h-10 w-full rounded-md border border-[#E1E7EF] dark:border-transparent px-3 py-2 text-base outline-0 text-[#878B94] dark:bg-[#080C16] dark:text-white"
										placeholder="National ID / Passport"
									/>
									{errors.NID?.type === "required" && (
										<p className="text-red-500 text-xs">
											National ID / Passport is required
										</p>
									)}
								</div>

								{/* User Input fields */}
								<div className="space-y-2">
									<label className="block">
										Income Source *
									</label>
									<input
										type="text"
										{...register("incomeSource", {
											required: true,
										})}
										className="flex h-10 w-full rounded-md border border-[#E1E7EF] dark:border-transparent px-3 py-2 text-base outline-0 text-[#878B94] dark:bg-[#080C16] dark:text-white"
										placeholder="e.g., Employment, Business"
									/>
									{errors.incomeSource?.type ===
										"required" && (
										<p className="text-red-500 text-xs">
											Income Source is required
										</p>
									)}
								</div>

								{/* User Input fields */}
								<div className="space-y-2">
									<label className="block">
										Monthly Income ($) *
									</label>
									<input
										type="text"
										{...register("monthlyIncome", {
											required: true,
										})}
										className="flex h-10 w-full rounded-md border border-[#E1E7EF] dark:border-transparent px-3 py-2 text-base outline-0 text-[#878B94] dark:bg-[#080C16] dark:text-white"
										placeholder="Monthly Income ($)"
									/>
									{errors.monthlyIncome?.type ===
										"required" && (
										<p className="text-red-500 text-xs">
											Monthly Income is required
										</p>
									)}
								</div>

								{/* User Input fields */}
								<div className="space-y-2 md:col-span-2">
									<label className="block">
										Loan Amount ($)
									</label>
									<input
										type="text"
										{...register("loanAmount", {
											required: true,
										})}
										placeholder={`Max: $100000`}
										className="flex h-10 w-full rounded-md border border-[#E1E7EF] dark:border-transparent px-3 py-2 text-base outline-0 text-[#878B94] dark:bg-[#080C16] dark:text-white"
									/>
									{errors.loanAmount?.type === "required" && (
										<p className="text-red-500 text-xs">
											Loan Amount is required
										</p>
									)}
								</div>

								{/* User Input fields */}
								<div className="space-y-2 md:col-span-2">
									<label className="block">
										Reason for Loan *
									</label>
									<textarea
										{...register("reason", {
											required: true,
										})}
										rows={5}
										placeholder="Why do you need this loan?"
										className="flex w-full resize-none rounded-md border border-[#E1E7EF] dark:border-transparent px-3 py-2 text-base outline-0 text-[#878B94] dark:bg-[#080C16] dark:text-white"
									></textarea>
									{errors.reason?.type === "required" && (
										<p className="text-red-500 text-xs">
											Reason for Loan is required
										</p>
									)}
								</div>

								{/* User Input fields */}
								<div className="space-y-2 md:col-span-2">
									<label className="block">Address *</label>
									<textarea
										{...register("address", {
											required: true,
										})}
										rows={5}
										placeholder="Your full address"
										className="flex w-full resize-none rounded-md border border-[#E1E7EF] dark:border-transparent px-3 py-2 text-base outline-0 text-[#878B94] dark:bg-[#080C16] dark:text-white"
									></textarea>
									{errors.address?.type === "required" && (
										<p className="text-red-500 text-xs">
											Address is required
										</p>
									)}
								</div>

								{/* User Input fields */}
								<div className="space-y-2 md:col-span-2">
									<label className="block">
										Extra Notes (Optional)
									</label>
									<textarea
										rows={5}
										placeholder="Any additional information"
										className="flex w-full resize-none rounded-md border border-[#E1E7EF] dark:border-transparent px-3 py-2 text-base outline-0 text-[#878B94] dark:bg-[#080C16] dark:text-white"
									></textarea>
								</div>
							</div>

							{/* Submit Button */}
							<div>
								<button
									className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-semibold ring-offset-background transition-all duration-300 text-white gradient-primary shadow-lg hover:shadow-glow h-12 rounded-xl px-8 text-base w-full"
									type="submit"
								>
									Submit Application
									<ArrowRight className="ml-2 h-5 w-5" />
								</button>
							</div>
						</form>
					</div>
				</motion.div>
			</div>
		</main>
	);
};

export default Apply;
