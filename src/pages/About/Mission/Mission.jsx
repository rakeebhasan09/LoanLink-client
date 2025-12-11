import React from "react";
import { motion } from "framer-motion";
import { Target } from "lucide-react";

const Mission = () => {
	return (
		<section>
			{/* Mission */}
			<div className="container">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.2 }}
					className="mb-16 grid gap-12 lg:grid-cols-2 lg:items-center"
				>
					<div>
						<div className="flex items-center gap-2 mb-4">
							<Target className="h-6 w-6 text-primary" />
							<h2 className="text-2xl font-bold">Our Mission</h2>
						</div>
						<p className="text-[#65758B] mb-4">
							At LoanLink, our mission is to democratize access to
							financial services. We understand that traditional
							banking often leaves many underserved, and we're
							here to bridge that gap.
						</p>
						<p className="text-[#65758B]">
							Through innovative technology and a customer-first
							approach, we're making microloans accessible,
							affordable, and hassle-free for everyone who needs
							them.
						</p>
					</div>
					<div className="relative">
						<img
							src="https://images.unsplash.com/photo-1553028826-f4804a6dba3b?w=600&h=400&fit=crop"
							alt="Team collaboration"
							className="rounded-2xl shadow-lg"
						/>
					</div>
				</motion.div>
			</div>
		</section>
	);
};

export default Mission;
