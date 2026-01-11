import React from "react";
import { ShieldCheck, Clock, ThumbsUp, Lock } from "lucide-react";

const WhyChooseUs = () => {
	const features = [
		{
			icon: <ShieldCheck className="w-8 h-8 text-primary" />,
			title: "Secure & Trusted",
			desc: "Bank-level data encryption ensures your information stays protected.",
		},
		{
			icon: <Clock className="w-8 h-8 text-primary" />,
			title: "Fast Approval",
			desc: "Get loan approval within as little as 24 hours.",
		},
		{
			icon: <ThumbsUp className="w-8 h-8 text-primary" />,
			title: "Low Interest Rates",
			desc: "Competitive interest rates with no hidden charges.",
		},
		{
			icon: <Lock className="w-8 h-8 text-primary" />,
			title: "Safe & Reliable",
			desc: "Your financial data is always safe and secure with LoanLink.",
		},
	];

	return (
		<section className="w-full py-20 bg-gray-50">
			<div className="container px-4">
				<h2 className="text-3xl font-bold text-center mb-12">
					Why Choose <span className="text-primary">LoanLink?</span>
				</h2>

				<div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
					{features.map((item, index) => (
						<div
							key={index}
							className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition"
						>
							<div className="mb-4">{item.icon}</div>
							<h3 className="font-semibold text-lg mb-1">
								{item.title}
							</h3>
							<p className="text-sm text-gray-600">{item.desc}</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default WhyChooseUs;
