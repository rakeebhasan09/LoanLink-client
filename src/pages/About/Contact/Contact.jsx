import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Clock } from "lucide-react";
import ContactForm from "./ContactForm";

const contactInfo = [
	{
		icon: MapPin,
		title: "Visit Us",
		details: ["123 Finance Street", "Business District, City 12345"],
	},
	{
		icon: Phone,
		title: "Call Us",
		details: ["+1 (234) 567-890", "+1 (234) 567-891"],
	},
	{
		icon: Mail,
		title: "Email Us",
		details: ["support@loanlink.com", "info@loanlink.com"],
	},
	{
		icon: Clock,
		title: "Working Hours",
		details: ["Mon - Fri: 9AM - 6PM", "Sat: 10AM - 4PM"],
	},
];

const Contact = () => {
	return (
		<section className="py-12 dark:bg-[#080C16]">
			<div className="container">
				{/* Header */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					className="mb-12 text-center"
				>
					<h1 className="mb-4 text-4xl font-bold">Contact Us</h1>
					<p className="mx-auto max-w-2xl text-[#65758B]">
						Have questions or need assistance? We're here to help.
						Reach out to us through any of the channels below.
					</p>
				</motion.div>

				<div className="grid gap-12 lg:grid-cols-2">
					{/* Contact Info */}
					<motion.div
						initial={{ opacity: 0, x: -30 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ delay: 0.1 }}
					>
						<div className="grid gap-6 sm:grid-cols-2">
							{contactInfo.map((info, index) => (
								<motion.div
									key={info.title}
									initial={{ opacity: 0, y: 20 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ delay: 0.1 + index * 0.1 }}
									className="rounded-xl border border-[#E1E7EF] dark:border-[#222F44] dark:bg-[#0C1322] p-6"
								>
									<div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 mb-4">
										<info.icon className="h-6 w-6 text-primary" />
									</div>
									<h3 className="font-semibold mb-2">
										{info.title}
									</h3>
									{info.details.map((detail, i) => (
										<p
											key={i}
											className="text-sm text-[#65758B] dark:text-[#94A3B8]"
										>
											{detail}
										</p>
									))}
								</motion.div>
							))}
						</div>

						{/* Map Placeholder */}
						<div className="mt-6 overflow-hidden rounded-xl border border-[#E1E7EF] dark:border-[#222F44]">
							<iframe
								src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387193.30596073366!2d-74.25986548248684!3d40.69714941680757!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1639160279281!5m2!1sen!2s"
								width="100%"
								height="250"
								style={{ border: 0 }}
								allowFullScreen
								loading="lazy"
								title="Location Map"
							/>
						</div>
					</motion.div>

					{/*  */}
					<ContactForm />
				</div>
			</div>
		</section>
	);
};

export default Contact;
