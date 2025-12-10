import React from "react";
import { FaMountainCity } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import { FaFacebookSquare, FaInstagram, FaPhoneVolume } from "react-icons/fa";
import { IoLocation } from "react-icons/io5";
import { BsTwitterX } from "react-icons/bs";
import { Link } from "react-router";

const Footer = () => {
	return (
		<>
			<div className="bg-[#0F1729]">
				<div className="container">
					<div className="py-[35px] md:py-16 grid grid-cols-12 gap-5 gap-y-[30px] border-b border-[#219E64]">
						<div className="col-span-12 sm:col-span-6 lg:col-span-4 max-w-[320px]">
							{/* Logo */}
							<Link to="/" className="flex items-center gap-2">
								<div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#19C195]">
									<span className="text-lg text-white font-bold">
										L
									</span>
								</div>
								<span className="text-xl text-white font-bold">
									Loan
									<span className="text-[#19C195]">Link</span>
								</span>
							</Link>
							<p className="text-[18px] text-white pt-5">
								Your trusted partner for quick and easy
								microloans. We're here to help you achieve your
								financial goals with transparent terms and fast
								approvals.
							</p>
						</div>

						<div className="col-span-12 sm:col-span-6 lg:col-span-3">
							<h4 className="text-[21p text-white font-semibold pb-[15px]">
								Quick Links
							</h4>
							<ul className="flex flex-col gap-3">
								<li className="text-[18px] text-[#E9F7EF] font-medium">
									Home
								</li>
								<li className="text-[18px] text-[#E9F7EF] font-medium">
									All Loans
								</li>
								<li className="text-[18px] text-[#E9F7EF] font-medium">
									About Us
								</li>
								<li className="text-[18px] text-[#E9F7EF] font-medium">
									Contact
								</li>
							</ul>
						</div>

						<div className="col-span-12 sm:col-span-6 lg:col-span-3">
							<h4 className="text-[21px] text-white font-semibold pb-[15px]">
								Contact Us
							</h4>
							<ul className="flex flex-col gap-3">
								<li className="text-[18px] text-white font-medium flex items-center gap-[7px]">
									<IoIosMail />
									<span>info@loanlink.com</span>
								</li>
								<li className="text-[18px] text-white font-medium flex items-center gap-[7px]">
									<FaPhoneVolume />
									<span>+880 1XXX-XXXXXX</span>
								</li>
								<li className="text-[18px] text-white font-medium flex items-center gap-[7px]">
									<IoLocation />
									<span>Dhaka, Bangladesh</span>
								</li>
							</ul>
						</div>

						<div className="col-span-12 sm:col-span-6 lg:col-span-2">
							<h4 className="text-[21px] text-white font-semibold pb-[15px]">
								Follow Us
							</h4>
							<ul className="flex items-center gap-6">
								<li className="text-[#219E64] hover:text-[#069251] duration-300 cursor-pointer">
									<FaInstagram size={30} />
								</li>
								<li className="text-[#219E64] hover:text-[#069251] duration-300 cursor-pointer">
									<FaFacebookSquare size={30} />
								</li>
								<li className="text-[#219E64] hover:text-[#069251] duration-300 cursor-pointer">
									<BsTwitterX size={28} />
								</li>
							</ul>
						</div>
					</div>
					<div className="py-7 text-center">
						<p className="text-[16px] text-white">
							© 2025 LoanLink. All rights reserved.
						</p>
					</div>
				</div>
			</div>
		</>
	);
};

export default Footer;
