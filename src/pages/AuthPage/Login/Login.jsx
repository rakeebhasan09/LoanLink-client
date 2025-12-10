import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router";
import useAuth from "../../../hooks/useAuth";
import { toast } from "react-toastify";
import Social from "../../Shared/Social";

const Login = () => {
	const [showPass, setShowPass] = useState(false);
	const { signInUser } = useAuth();
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();
	const location = useLocation();
	const navigate = useNavigate();

	// Form Login
	const handleLogin = (data) => {
		signInUser(data.email, data.password)
			.then(() => {
				navigate(location.state || "/");
				toast.success("Login successful!");
			})
			.catch(() => {
				toast.error("Invalid email or password!");
			});
	};

	return (
		<div className="py-[65px] lg:py-[95px]">
			<div className="container">
				<div className="max-w-[510px] mx-auto px-[25px] md:px-10 py-[30px] md:py-12 bg-white dark:bg-gray-900 shadow-xl rounded-md border border-[#e7e7e798]">
					<h2 className="text-[#141414] dark:text-white text-center text-[24px] md:text-[28px] lg:text-[32px] font-semibold">
						Login your account
					</h2>
					<span className="block bg-[#E7E7E7] h-px w-full my-[18px] md:my-[25px]"></span>

					<form onSubmit={handleSubmit(handleLogin)} className="mt-5">
						<label className="form-label">Email address</label>
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

						<label className="form-label">Password</label>
						<div className="relative">
							<input
								{...register("password", {
									required: "*Password is required",
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

						<span className="text-sm text-[#141414] dark:text-white cursor-pointer inline-block mt-1">
							Forget Password?
						</span>
						<button className="py-2 w-full bg-[#219E64] rounded mt-5 text-white text-[18px] font-medium">
							Login
						</button>
						<div className="divider my-[22px] text-[#141414] dark:text-white">
							OR
						</div>

						{/* Social Login */}
						<Social />

						<p className="text-center text-[#464545] dark:text-white text-[16px] font-medium pt-[22px]">
							Don't have any account?
							<Link
								state={location.state}
								to="/register"
								className="text-[#219E64] font-semibold ml-1"
							>
								Register
							</Link>
						</p>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Login;
