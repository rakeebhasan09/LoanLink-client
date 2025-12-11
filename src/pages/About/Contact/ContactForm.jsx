import React from "react";
import { motion } from "framer-motion";

const ContactForm = () => {
	return (
		<div>
			{/* Contact Form */}
			<motion.div
				initial={{ opacity: 0, x: 30 }}
				animate={{ opacity: 1, x: 0 }}
				transition={{ delay: 0.2 }}
			>
				<div className="rounded-2xl border border-[#E1E7EF] dark:border-[#222F44] dark:bg-[#0C1322] p-6 lg:p-8">
					<h2 className="mb-6 text-xl font-bold text-[#0F1729] dark:text-white">
						Send us a Message
					</h2>

					<form className="space-y-5">
						{/* Name Email */}
						<div className="grid gap-4 sm:grid-cols-2">
							{/* Name */}
							<div className="space-y-2">
								<label className="text-[#0F1729] dark:text-white text-sm font-medium block">
									Your Name
								</label>
								<input
									type="text"
									className="flex h-10 w-full outline-0 rounded-md border border-[#E1E7EF] dark:border-[#222F44] px-3 py-2 text-base"
									placeholder="John Doe"
									required
								/>
							</div>
							{/* Name */}
							<div className="space-y-2">
								<label className="text-[#0F1729] dark:text-white text-sm font-medium block">
									Your Email
								</label>
								<input
									type="email"
									className="flex h-10 w-full outline-0 rounded-md border border-[#E1E7EF] dark:border-[#222F44] px-3 py-2 text-base"
									placeholder="john@example.com"
									required
								/>
							</div>
						</div>

						{/* Subject */}
						<div className="space-y-2">
							<label className="text-[#0F1729] dark:text-white text-sm font-medium block">
								Subject
							</label>
							<input
								type="text"
								className="flex h-10 w-full outline-0 rounded-md border border-[#E1E7EF] dark:border-[#222F44] px-3 py-2 text-base"
								placeholder="How can we help?"
								required
							/>
						</div>

						{/* Message */}
						<div className="space-y-2">
							<label className="text-[#0F1729] dark:text-white text-sm font-medium block">
								Message
							</label>
							<textarea
								className="flex w-full outline-0 rounded-md border border-[#E1E7EF] dark:border-[#222F44] px-3 py-2 text-base resize-none"
								rows={5}
								placeholder="Your message..."
							></textarea>
						</div>
					</form>
				</div>
			</motion.div>
		</div>
	);
};

export default ContactForm;
