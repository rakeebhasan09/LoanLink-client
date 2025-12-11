import React from "react";
import { motion } from "framer-motion";

const team = [
	{
		name: "John Anderson",
		role: "CEO & Founder",
		image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop",
	},
	{
		name: "Sarah Williams",
		role: "Chief Financial Officer",
		image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop",
	},
	{
		name: "Michael Chen",
		role: "Head of Operations",
		image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop",
	},
	{
		name: "Emily Rodriguez",
		role: "Customer Success Lead",
		image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop",
	},
];

const Leadership = () => {
	return (
		<section>
			<div className="container">
				{/* Team */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.4 }}
				>
					<h2 className="mb-8 text-center text-2xl font-bold text-foreground lg:text-3xl">
						Meet Our Leadership
					</h2>
					<div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
						{team.map((member, index) => (
							<motion.div
								key={member.name}
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ delay: 0.4 + index * 0.1 }}
								className="text-center"
							>
								<img
									src={member.image}
									alt={member.name}
									className="mx-auto mb-4 h-32 w-32 rounded-full object-cover shadow-lg"
								/>
								<h3 className="font-semibold text-foreground">
									{member.name}
								</h3>
								<p className="text-sm text-muted-foreground">
									{member.role}
								</p>
							</motion.div>
						))}
					</div>
				</motion.div>
			</div>
		</section>
	);
};

export default Leadership;
