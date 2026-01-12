import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import useAuth from "../../../hooks/useAuth";
import useSecureAxios from "../../../hooks/useSecureAxios";
import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";
import { Link } from "react-router";
import LoanStatusPieChart from "./LoanStatusPieChart";

const MyLoans = () => {
	const { user } = useAuth();
	const secureAxios = useSecureAxios();
	const paymentInfoModalRef = useRef();
	const [selectedLoan, setSelectedLoan] = useState(null);

	const { data: myLoans = [], refetch } = useQuery({
		queryKey: ["my-loans", user?.email],
		queryFn: async () => {
			const res = await secureAxios.get(
				`/loan-applications?email=${user?.email}`
			);
			return res.data;
		},
	});

	const statusStyles = {
		pending: "bg-yellow-400 text-white",
		rejected: "bg-red-500 text-white",
		approved: "bg-green-500 text-white",
	};

	// Handle Payment
	const handlePayment = async (loan) => {
		const paymentInfo = {
			loanId: loan._id,
			userEmail: loan.email,
		};
		const res = await secureAxios.post(
			"/payment-checkout-session",
			paymentInfo
		);
		window.location.assign(res.data.url);
	};

	// Handle Cancel
	const handleLoanCancel = (id) => {
		Swal.fire({
			title: "Are you sure?",
			text: "You won't be able to revert this!",
			icon: "warning",
			showCancelButton: true,
			confirmButtonColor: "#3085d6",
			cancelButtonColor: "#d33",
			confirmButtonText: "Yes, delete it!",
		}).then((result) => {
			if (result.isConfirmed) {
				secureAxios.delete(`/loan-applications/${id}`).then((res) => {
					if (res.data.deletedCount) {
						refetch();
						Swal.fire({
							title: "Deleted!",
							text: "Loan request has been deleted.",
							icon: "success",
						});
					}
				});
			}
		});
	};

	// Handle Open Modal
	const handleOpenModal = (loan) => {
		setSelectedLoan(loan);
		paymentInfoModalRef.current.show();
	};

	return (
		<motion.div
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
		>
			<h1 className="text-2xl font-bold mb-6">
				My Loan Applications {myLoans.length}
			</h1>

			{/* Data Display Table */}
			<div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
				<table className="table">
					{/* head */}
					<thead>
						<tr>
							<th>Loan ID</th>
							<th>Loan Type</th>
							<th>Amount</th>
							<th>Status</th>
							<th>Actions</th>
						</tr>
					</thead>
					<tbody>
						{myLoans.map((loan, index) => (
							<tr key={loan._id}>
								<td>L0{index + 1}</td>
								<td>{loan.loanTitle}</td>
								<td>${loan.loanAmount}</td>
								<td>
									<span
										className={`px-3 py-1 inline-flex items-center justify-center rounded-full ${
											statusStyles[loan.feeStatus] ||
											"bg-gray-400 text-white"
										}`}
									>
										{loan.feeStatus}
									</span>
								</td>
								<td>
									<Link
										to={`/loan-details/${loan.loanId}`}
										className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-semibold border-2 border-[#E1E7EF] h-9 rounded-md px-4"
									>
										View
									</Link>

									{(loan.feeStatus === "unpaid" ||
										loan.feeStatus === "pending") && (
										<button
											onClick={() =>
												handleLoanCancel(loan._id)
											}
											className="ml-2 inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-semibold border-2 bg-[#EF5556] text-white border-[#E1E7EF] h-9 rounded-md px-4"
										>
											Cancel
										</button>
									)}

									{loan.feeStatus === "unpaid" && (
										<button
											onClick={() => handlePayment(loan)}
											className="ml-2 inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-semibold border-2 bg-[#26BD8C] text-white border-[#E1E7EF] h-9 rounded-md px-4"
										>
											Pay Fee
										</button>
									)}
									{loan.feeStatus !== "unpaid" && (
										<button
											onClick={() =>
												handleOpenModal(loan)
											}
											className="ml-2 inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-semibold border-2 bg-[#26BD8C] text-white border-[#E1E7EF] h-9 rounded-md px-4"
										>
											Paid
										</button>
									)}
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>

			{/* Stats Chart */}
			<div className="pt-14">
				<LoanStatusPieChart />
			</div>

			{/* Payment Info Modal */}
			<dialog ref={paymentInfoModalRef} className="modal">
				<div className="modal-box">
					<h3 className="font-bold text-lg">
						Hello! {user?.displayName}
					</h3>
					<p className="pt-4">Email: {selectedLoan?.email}</p>
					<p className="pt-4">
						Loan Title: {selectedLoan?.loanTitle}
					</p>
					<p className="pt-4">
						Transaction ID: {selectedLoan?.transactionId}
					</p>
					<div className="modal-action">
						<form method="dialog">
							{/* if there is a button in form, it will close the modal */}
							<button className="btn">Close</button>
						</form>
					</div>
				</div>
			</dialog>
		</motion.div>
	);
};

export default MyLoans;
