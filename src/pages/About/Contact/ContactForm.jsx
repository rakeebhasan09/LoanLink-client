import React, { useState } from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const ContactForm = () => {
	const [isSubmitting, setIsSubmitting] = useState(false);
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm();

	const handleContactForm = (data) => {
		setIsSubmitting(true);
		toast.success("Thanks for your message.");
		reset();
		setIsSubmitting(false);
	};
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

					<form
						onSubmit={handleSubmit(handleContactForm)}
						className="space-y-5"
					>
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
									{...register("name", { required: true })}
								/>
								{errors.name?.type === "required" && (
									<p className="text-red-500 text-xs">
										Name is required
									</p>
								)}
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
									{...register("email", { required: true })}
								/>
								{errors.email?.type === "required" && (
									<p className="text-red-500 text-xs">
										Email is required
									</p>
								)}
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
								{...register("subject", { required: true })}
							/>
							{errors.subject?.type === "required" && (
								<p className="text-red-500 text-xs">
									Subject is required
								</p>
							)}
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
								{...register("message", { required: true })}
							></textarea>
							{errors.message?.type === "required" && (
								<p className="text-red-500 text-xs">
									Message is required
								</p>
							)}
						</div>

						<div>
							<button
								type="submit"
								className="w-full inline-flex items-center justify-center gap-2 whitespace-nowrap font-semibold transition-all duration-300 bg-primary text-white hover:bg-primary/90 shadow-md hover:shadow-lg hover:-translate-y-0.5 h-12 rounded-xl px-8 text-base"
								disabled={isSubmitting}
							>
								{isSubmitting ? "Sending..." : "Send Message"}
								<Send className="ml-2 h-4 w-4" />
							</button>
						</div>
					</form>
				</div>
			</motion.div>
		</div>
	);
};

export default ContactForm;
