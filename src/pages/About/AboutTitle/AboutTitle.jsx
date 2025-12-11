import React from "react";
import { motion } from "framer-motion";

const AboutTitle = () => {
	return (
		<section>
			<div className="container">
				{/* Hero Section */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					className="text-center"
				>
					<h1 className="mb-4 text-4xl font-bold  lg:text-5xl">
						About <span className="text-primary">LoanLink</span>
					</h1>
					<p className="mx-auto max-w-2xl text-lg text-[#65758B]">
						Empowering individuals and small businesses with
						accessible microloans since 2014. We believe everyone
						deserves a chance to achieve their financial goals.
					</p>
				</motion.div>
			</div>
		</section>
	);
};

export default AboutTitle;
