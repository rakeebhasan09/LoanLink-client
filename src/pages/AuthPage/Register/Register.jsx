import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router";
import useAuth from "../../../hooks/useAuth";
import axios from "axios";
import { toast } from "react-toastify";
import Social from "../../Shared/Social";
import useSecureAxios from "../../../hooks/useSecureAxios";

const Register = () => {
	const [showPass, setShowPass] = useState(false);
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();
	const { createUser, updateUserProfile } = useAuth();
	const location = useLocation();
	const navigate = useNavigate();
	const secureAxios = useSecureAxios();

	// Form Register
	const handleRegister = (data) => {
		const profileImg = data.photo[0];
		createUser(data.email, data.password)
			.then(() => {
				const formData = new FormData();
				formData.append("image", profileImg);
				const img_Api_URL = `https://api.imgbb.com/1/upload?key=${
					import.meta.env.VITE_img_host_KEY
				}`;
				axios
					.post(img_Api_URL, formData)
					.then((res) => {
						const userProfile = {
							displayName: data.name,
							photoURL: res.data.data.display_url,
						};

						const photoURL = res.data.data.url;
						const userInfo = {
							email: data.email,
							displayName: data.name,
							photoURL: photoURL,
							role: data.role,
						};

						secureAxios.post("/users", userInfo).then((res) => {
							if (res.data.insertedId) {
								console.log("Registration Completed.");
							}
						});

						updateUserProfile(userProfile).then(() => {
							navigate(location.state || "/");
							toast.success("Registration successful!");
						});
					})
					.catch(() => {
						toast.error("Image upload failed!");
					});
			})
			.catch(() => {
				toast.error("Email already exists or invalid!");
			});
	};

	return (
		<div className="py-[65px] lg:py-[95px]">
			<div className="container">
				<div className="max-w-[510px] mx-auto px-[25px] md:px-10 py-[30px] md:py-12 bg-white dark:bg-gray-900 shadow-xl rounded-md border border-[#e7e7e798]">
					<h2 className="text-[#141414] dark:text-white text-center text-[24px] md:text-[28px] lg:text-[32px] font-semibold">
						Register your account
					</h2>
					<span className="block bg-[#E7E7E7] h-px w-full my-[18px] md:my-[25px]"></span>

					<form
						onSubmit={handleSubmit(handleRegister)}
						className="mt-5"
					>
						{/* Name */}
						<label className="form-label">Name</label>
						<input
							{...register("name", {
								required: "*Name is required",
							})}
							className="form-input"
							type="text"
							placeholder="Enter your name"
						/>
						{errors.name && (
							<p className="text-red-500 text-sm">
								{errors.name.message}
							</p>
						)}
						{/* Photo */}
						<label className="form-label">Photo</label>
						<input
							type="file"
							{...register("photo", {
								required: "*Photo is required",
							})}
							className="file-input w-full text-[#464545] text-[15px] outline-0 border border-[#219e648f] focus:border-[#219E64] bg-[#F3F3F3] rounded dark:text-[#F3F3F3] dark:bg-gray-900 dark:border-[#219E6480] dark:focus:border-[#219E64]"
						/>
						{errors.photo && (
							<p className="text-red-500 text-sm">
								{errors.photo.message}
							</p>
						)}
						{/* Email */}
						<label className="form-label">Email</label>
						<input
							{...register("email", {
								required: "*Email is required",
							})}
							className="form-input"
							type="email"
							placeholder="Enter your email address"
						/>
						{errors.email && (
							<p className="text-red-500 text-sm">
								{errors.email.message}
							</p>
						)}
						{/* Role */}
						<div>
							<label className="form-label">Role</label> <br />
							<select
								{...register("role")}
								defaultValue="Pick a Role"
								className="select w-full ring-0 outline-0 border border-[#219e648f] bg-[#F3F3F3] dark:bg-gray-900"
							>
								<option disabled={true}>Pick a Role</option>
								<option value="borrower" className="capitalize">
									borrower
								</option>
								<option value="manager" className="capitalize">
									manager
								</option>
							</select>
						</div>
						{/* Password */}
						<label className="form-label">Password</label>
						<div className="relative">
							<input
								{...register("password", {
									required: "*Password is required",
									minLength: {
										value: 6,
										message: "*Minimum length 6 characters",
									},
									pattern: {
										value: /^(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*])/,
										message:
											"*Must include uppercase, lowercase & special character",
									},
								})}
								className="form-input"
								type={showPass ? "text" : "password"}
								placeholder="Enter your password"
							/>
							<span
								onClick={() => setShowPass(!showPass)}
								className="absolute top-1/2 -translate-y-1/2 right-5 cursor-pointer text-[#141414] dark:text-white"
							>
								{showPass ? (
									<FaEyeSlash size={20} />
								) : (
									<FaEye size={20} />
								)}
							</span>
						</div>
						{errors.password && (
							<p className="text-red-500 text-sm">
								{errors.password.message}
							</p>
						)}
						<button
							type="submit"
							className="py-2 w-full bg-[#219E64] rounded mt-5 text-white text-[18px] font-medium"
						>
							Register
						</button>
						<p className="divider text-center py-5 text-[#71717A] font-semibold">
							OR
						</p>

						<Social />

						<p className="text-center text-[#464545] dark:text-white text-[16px] font-medium pt-[22px]">
							Already have an account?
							<Link
								to="/login"
								state={location.state}
								className="text-[#219E64] font-semibold ml-1"
							>
								Login
							</Link>
						</p>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Register;
