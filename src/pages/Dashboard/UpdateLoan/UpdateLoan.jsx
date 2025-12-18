import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import useSecureAxios from "../../../hooks/useSecureAxios";

const UpdateLoan = () => {
	const { loanId } = useParams();
	const secureAxios = useSecureAxios();
	const [loan, setLoan] = useState([]);
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm();

	useEffect(() => {
		secureAxios.get(`/loans/${loanId}`).then((res) => {
			setLoan(res.data);
		});
	}, [secureAxios, loanId]);

	return (
		<motion.div
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			className="h-full!"
		>
			<h1 className="text-2xl font-bold mb-6">Update Loan Information</h1>
			<form className="max-w-xl space-y-4 p-6 rounded-xl border border-[#E1E7EF] text-[#0F1729] dark:text-white dark:bg-[#0C1322] dark:border-[#1F1F1F]">
				{/* Loan Title */}
				<div className="space-y-1">
					<label className="block">Loan Title</label>
					<input
						type="text"
						defaultValue={loan.title}
						className="flex h-10 w-full rounded-md border border-[#E1E7EF] dark:border-[#1F1F1F] outline-0 bg-background px-3 py-2 text-base dark:bg-[#080C16]"
						{...register("title", { required: true })}
					/>
					{errors.title?.type === "required" && (
						<p className="text-red-500 text-xs">
							Loan Title is required
						</p>
					)}
				</div>

				{/* Description */}
				<div className="space-y-1">
					<label className="block">Description</label>
					<textarea
						{...register("description", { required: true })}
						rows={5}
						defaultValue={loan.description}
						className="flex resize-none w-full rounded-md border border-[#E1E7EF] dark:border-[#1F1F1F] outline-0 bg-background px-3 py-2 text-base dark:bg-[#080C16]"
					></textarea>
					{errors.description?.type === "required" && (
						<p className="text-red-500 text-xs">
							Description is required
						</p>
					)}
				</div>

				<div className="grid md:grid-cols-2 gap-4">
					{/* Loan Category */}
					<div className="space-y-1">
						<label className="block">Category</label>
						<input
							type="text"
							defaultValue={loan.category}
							className="flex h-10 w-full rounded-md border border-[#E1E7EF] dark:border-[#1F1F1F] outline-0 bg-background px-3 py-2 text-base dark:bg-[#080C16]"
							{...register("category", { required: true })}
						/>
						{errors.category?.type === "required" && (
							<p className="text-red-500 text-xs">
								Category is required
							</p>
						)}
					</div>
					{/* Interest Rate */}
					<div className="space-y-1">
						<label className="block">Interest Rate (%)</label>
						<input
							type="text"
							defaultValue={loan.interestRate}
							className="flex h-10 w-full rounded-md border border-[#E1E7EF] dark:border-[#1F1F1F] outline-0 bg-background px-3 py-2 text-base dark:bg-[#080C16]"
							{...register("interestRate", { required: true })}
						/>
						{errors.interestRate?.type === "required" && (
							<p className="text-red-500 text-xs">
								Interest Rate is required
							</p>
						)}
					</div>
				</div>

				{/* Max Loan Limit */}
				<div className="space-y-1">
					<label className="block">Max Loan Limit ($)</label>
					<input
						type="text"
						defaultValue={loan.maxLimit}
						className="flex h-10 w-full rounded-md border border-[#E1E7EF] dark:border-[#1F1F1F] outline-0 bg-background px-3 py-2 text-base dark:bg-[#080C16]"
						{...register("maxLimit", { required: true })}
					/>
					{errors.maxLimit?.type === "required" && (
						<p className="text-red-500 text-xs">
							Max Loan Limit is required
						</p>
					)}
				</div>

				{/* EMI Plans */}
				<div className="space-y-1">
					<label className="block">EMI Plans (comma separated)</label>
					<input
						type="text"
						defaultValue={loan.EMIPlans}
						className="flex h-10 w-full rounded-md border border-[#E1E7EF] dark:border-[#1F1F1F] outline-0 bg-background px-3 py-2 text-base dark:bg-[#080C16]"
						{...register("EMIPlans", { required: true })}
					/>
					{errors.EMIPlans?.type === "required" && (
						<p className="text-red-500 text-xs">
							EMI Plans is required
						</p>
					)}
				</div>

				{/* Required Documents */}
				<div className="space-y-1">
					<label className="block">
						Required Documents (comma separated)
					</label>
					<input
						type="text"
						defaultValue={loan.documents}
						className="flex h-10 w-full rounded-md border border-[#E1E7EF] dark:border-[#1F1F1F] outline-0 bg-background px-3 py-2 text-base dark:bg-[#080C16]"
						{...register("documents", { required: true })}
					/>
					{errors.documents?.type === "required" && (
						<p className="text-red-500 text-xs">
							Required Documents must be provided.
						</p>
					)}
				</div>

				{/* Submit Button */}
				<div>
					<button
						disabled={true}
						className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-semibold transition-all duration-300 bg-primary text-white dark:text-[#080C16] hover:bg-primary/90 h-10 px-5 py-2 w-full"
						type="submit"
					>
						Update Loan
					</button>
				</div>
			</form>
			<br />
			<br />
			<br />
			<br />
		</motion.div>
	);
};

export default UpdateLoan;
