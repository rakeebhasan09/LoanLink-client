import React, { useState } from "react";
import { motion } from "framer-motion";
import { Minus, Plus } from "lucide-react";

const faqs = [
	{
		question: "What documents do I need to apply for a loan?",
		answer: "You'll need a valid government ID (passport or national ID), proof of income (pay stubs or bank statements), and proof of address. Additional documents may be required depending on the loan type.",
	},
	{
		question: "How long does the approval process take?",
		answer: "Most loan applications are processed within 24 hours. Once approved, funds are typically disbursed within 1-2 business days directly to your bank account.",
	},
	{
		question: "What is the maximum loan amount I can apply for?",
		answer: "Maximum loan amounts vary by loan type and your creditworthiness. Personal loans go up to $25,000, while business loans can go up to $100,000. Check individual loan details for specific limits.",
	},
	{
		question: "Can I prepay my loan without penalties?",
		answer: "Yes! LoanLink allows prepayment of loans without any penalties. You can pay off your loan early and potentially save on interest payments.",
	},
	{
		question: "What happens if I miss a payment?",
		answer: "If you miss a payment, a late fee may be applied. We recommend contacting our support team immediately if you're facing difficulties. We can work out alternative payment arrangements in many cases.",
	},
];

const FAQSection = () => {
	const [openIndex, setOpenIndex] = useState(null);
	return (
		<section className="py-16 lg:py-24 bg-white dark:bg-[#080C16]">
			<div className="container">
				<div className="grid gap-12 lg:grid-cols-2 lg:items-start">
					{/* Left Content */}
					<motion.div
						initial={{ opacity: 0, x: -30 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
					>
						<h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
							Frequently Asked Questions
						</h2>
						<p className="mb-6 text-muted-foreground">
							Find answers to common questions about our loan
							products and application process. Can't find what
							you're looking for? Contact our support team.
						</p>
						<div className="rounded-2xl bg-primary/5 p-6">
							<h3 className="mb-2 font-semibold text-foreground">
								Still have questions?
							</h3>
							<p className="text-sm text-muted-foreground">
								Our customer support team is available 24/7 to
								help you with any questions or concerns.
							</p>
						</div>
					</motion.div>

					{/* FAQ Accordion */}
					<motion.div
						initial={{ opacity: 0, x: 30 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						className="space-y-4"
					>
						{faqs.map((faq, index) => (
							<div
								key={index}
								className="rounded-xl border border-[#E1E7EF] overflow-hidden"
							>
								<button
									onClick={() =>
										setOpenIndex(
											openIndex === index ? null : index
										)
									}
									className="flex w-full items-center justify-between p-5 text-left"
								>
									<span className="font-semibold pr-4">
										{faq.question}
									</span>
									<div
										className={`shrink-0 rounded-full p-1 transition-colors ${
											openIndex === index
												? "bg-primary text-white"
												: "bg-[#F1F5F9] dark:text-primary"
										}`}
									>
										{openIndex === index ? (
											<Minus className="h-4 w-4" />
										) : (
											<Plus className="h-4 w-4" />
										)}
									</div>
								</button>
								<motion.div
									initial={false}
									animate={{
										height:
											openIndex === index ? "auto" : 0,
										opacity: openIndex === index ? 1 : 0,
									}}
									transition={{ duration: 0.3 }}
									className="overflow-hidden"
								>
									<p className="px-5 pb-5 text-muted-foreground">
										{faq.answer}
									</p>
								</motion.div>
							</div>
						))}
					</motion.div>
				</div>
			</div>
		</section>
	);
};

export default FAQSection;
