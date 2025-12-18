import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router";
import { motion } from "framer-motion";
import { Mail, Shield, X } from "lucide-react";
import useSecureAxios from "../../../hooks/useSecureAxios";
import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";
import { useForm } from "react-hook-form";

const UpdateUser = () => {
	const { userId } = useParams();
	const [selectedUser, setSelectedUser] = useState(null);
	const secureAxios = useSecureAxios();
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();
	const { data: user, refetch } = useQuery({
		queryKey: ["user", userId],
		queryFn: async () => {
			const res = await secureAxios.get(`/users/${userId}`);
			return res.data;
		},
	});

	const suspendModalRef = useRef();

	// Show User Suspend Modal
	const handleSuspendUser = () => {
		setSelectedUser(user);
		suspendModalRef.current.showModal();
	};

	// Cancel Suspend Popup
	const handleCancelSuspendPopup = () => {
		suspendModalRef.current.close();
	};

	// Handle User Approve
	const handleUserApprove = (user) => {
		const newStatus = {
			userStatus: "active",
		};
		secureAxios.patch(`/users/${user._id}`, newStatus).then((res) => {
			if (res.data.modifiedCount) {
				refetch();
				Swal.fire({
					position: "center",
					icon: "success",
					title: "User active.",
					showConfirmButton: false,
					timer: 1500,
				});
			}
		});
	};

	// Handle User Suspend
	const handleUserSuspended = (data) => {
		const updateInfo = {
			userStatus: "suspended",
			suspendReason: data.reason,
			suspendFeedback: data.feedback,
		};
		secureAxios
			.patch(`/users/suspended/${user._id}`, updateInfo)
			.then((res) => {
				if (res.data.modifiedCount) {
					refetch();
					suspendModalRef.current.close();
					Swal.fire({
						position: "center",
						icon: "success",
						title: "User Suspended.",
						showConfirmButton: false,
						timer: 1500,
					});
				}
			});
	};

	return (
		<motion.div
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
		>
			<h1 className="text-2xl font-bold mb-6">
				Update {user?.displayName}
			</h1>
			<div className="rounded-2xl border border-[#E1E7EF] dark:border-[#222F44] dark:bg-[#0C1322] p-6 max-w-md">
				{/* User Image */}
				<div className="flex items-center gap-4 mb-6">
					<div className="h-20 w-20 rounded-full overflow-hidden">
						<img src={user?.photoURL} alt="" />
					</div>
					<div>
						<h2 className="text-xl font-bold">
							Name: {user?.displayName}
						</h2>
						<p className="text-[#65758B] capitalize dark:text-[#94A3B8]">
							Applied For {user?.role} post
						</p>
					</div>
				</div>

				{/* Email */}
				<div>
					<div className="space-y-4">
						<div className="flex items-center gap-3 p-3 rounded-lg bg-[#F1F5F9] dark:bg-[#1D283A]">
							<Mail className="h-5 w-5 text-primary" />
							<div>
								<p className="text-sm text-[#65758B] dark:text-[#94A3B8]">
									Email
								</p>
								<p className="font-medium">{user?.email}</p>
							</div>
						</div>
						<div className="flex items-center gap-3 p-3 rounded-lg bg-[#F1F5F9] dark:bg-[#1D283A]">
							<Shield className="h-5 w-5 text-primary" />
							<div>
								<p className="text-sm text-[#65758B] dark:text-[#94A3B8]">
									Role
								</p>
								<p className="font-medium">{user?.role}</p>
							</div>
						</div>
					</div>
				</div>

				{/* Button */}
				<div className="flex flex-col md:flex-row gap-5 mt-6">
					{user?.userStatus !== "active" && (
						<button
							onClick={() => handleUserApprove(user)}
							className="w-full flex items-center justify-center gap-2 bg-primary rounded-2xl py-2 text-white"
						>
							Approve
						</button>
					)}

					{user?.userStatus !== "suspended" && (
						<button
							onClick={() => handleSuspendUser(user)}
							className="w-full flex items-center justify-center gap-2 bg-[#F05656] rounded-2xl py-2 text-white"
						>
							Suspend
						</button>
					)}
				</div>
			</div>
			{/* Open the modal using document.getElementById('ID').showModal() method */}
			<dialog ref={suspendModalRef} className="modal">
				<div className="modal-box relative">
					<div
						onClick={handleCancelSuspendPopup}
						className="absolute top-4 right-5 cursor-pointer"
					>
						<X />
					</div>
					<h3 className="font-bold text-lg">
						Hello! {user?.displayName}
					</h3>
					<form
						onSubmit={handleSubmit(handleUserSuspended)}
						className="py-4 space-y-3"
					>
						{/* Suspend Reason */}
						<div className="space-y-1">
							<label className="block">Suspend Reason</label>
							<input
								type="text"
								{...register("reason", { required: true })}
								placeholder="Write Suspend Reason"
								className="flex h-10 w-full rounded-md border border-[#E1E7EF] dark:border-[#1F1F1F] outline-0 bg-background px-3 py-2 text-base dark:bg-[#080C16]"
							/>
							{errors.reason?.type === "required" && (
								<p className="text-red-500 text-xs">
									Reason is required
								</p>
							)}
						</div>

						{/* Suspend Feedback */}
						<div className="space-y-1">
							<label className="block">
								Why Suspend Feedback
							</label>
							<textarea
								rows={5}
								{...register("feedback", { required: true })}
								placeholder="Why Suspend Feedback"
								className="flex resize-none w-full rounded-md border border-[#E1E7EF] dark:border-[#1F1F1F] outline-0 bg-background px-3 py-2 text-base dark:bg-[#080C16]"
							></textarea>
							{errors.feedback?.type === "required" && (
								<p className="text-red-500 text-xs">
									Feedback is required
								</p>
							)}
						</div>

						<div>
							<button className="w-full mt-6 flex items-center justify-center gap-2 bg-[#F05656] rounded-2xl py-2 text-white">
								Suspend
							</button>
						</div>
					</form>
				</div>
			</dialog>
		</motion.div>
	);
};

export default UpdateUser;
