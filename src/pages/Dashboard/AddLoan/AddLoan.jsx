import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import useSecureAxios from "../../../hooks/useSecureAxios";
import Swal from "sweetalert2";
import useAuth from "../../../hooks/useAuth";

const AddLoan = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm();
	const secureAxios = useSecureAxios();
	const { user } = useAuth();

	const handleAddLoan = async (data) => {
		// EMI array
		const emiArray = data.EMIPlans.split(",")
			.map((v) => v.trim())
			.filter((v) => v !== "");
		data.EMIPlans = emiArray;

		// Requirements Doc Array
		const requirementsArray = data.documents
			.split(",")
			.map((v) => v.trim())
			.filter((v) => v !== "");
		data.documents = requirementsArray;

		// Add Manager Email
		data.managerEmail = user.email;
		data.created_by = user.displayName;

		// Photo URL
		const loanPhoto = data.photo[0];
		const formData = new FormData();
		formData.append("image", loanPhoto);

		const img_Api_URL = `https://api.imgbb.com/1/upload?key=${
			import.meta.env.VITE_img_host_KEY
		}`;

		const imageRes = await axios.post(img_Api_URL, formData);

		data.photo = imageRes.data.data.display_url;

		const res = await secureAxios.post("/loans", data);

		if (res.data.insertedId) {
			reset();
			Swal.fire({
				position: "center",
				icon: "success",
				title: "New Loan has been saved",
				showConfirmButton: false,
				timer: 1500,
			});
		}
	};
	return (
		<main>
			<h1 className="text-2xl font-bold mb-6">Add New Loan</h1>
			<form
				onSubmit={handleSubmit(handleAddLoan)}
				className="max-w-xl space-y-4 p-6 rounded-xl border border-[#E1E7EF] text-[#0F1729] dark:text-white dark:bg-[#0C1322] dark:border-[#1F1F1F]"
			>
				{/* Loan Title */}
				<div className="space-y-1">
					<label className="block">Loan Title</label>
					<input
						type="text"
						placeholder="Loan Title Here...."
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
						placeholder="Loan Description Here...."
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
							placeholder="Loan Category Here...."
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
							placeholder="Loan Interest Rate Here...."
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
						placeholder="Max Loan Limit Here...."
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
						placeholder="2,4,8,12 months"
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
						placeholder="Required Documents"
						className="flex h-10 w-full rounded-md border border-[#E1E7EF] dark:border-[#1F1F1F] outline-0 bg-background px-3 py-2 text-base dark:bg-[#080C16]"
						{...register("documents", { required: true })}
					/>
					{errors.documents?.type === "required" && (
						<p className="text-red-500 text-xs">
							Required Documents must be provided.
						</p>
					)}
				</div>

				{/* Photo */}
				<div className="space-y-1">
					<label className="block">Photo</label>
					<input
						type="file"
						className="file-input w-full text-[#464545] text-[15px] outline-0 border border-[#E1E7EF] dark:border-[#1F1F1F] dark:bg-[#080C16]"
						{...register("photo")}
					/>
				</div>

				{/* Show on Home */}
				<div className="flex items-center gap-1.5">
					<input type="checkbox" {...register("showHome")} />
					Show on Home
				</div>

				{/* Submit Button */}
				<div>
					<button
						className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-semibold transition-all duration-300 bg-primary text-white dark:text-[#080C16] hover:bg-primary/90 h-10 px-5 py-2 w-full"
						type="submit"
					>
						Create Loan
					</button>
				</div>
			</form>
		</main>
	);
};

export default AddLoan;
