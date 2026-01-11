import React from "react";
import { ArrowRight } from "lucide-react";

const BlogTips = () => {
	const blogs = [
		{
			id: 1,
			title: "How to Improve Your Credit Score Fast",
			desc: "Learn actionable ways to boost your credit score and increase your loan approval chances.",
			img: "https://images.unsplash.com/photo-1605512930578-a93be1839e4f?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
			link: "#",
		},
		{
			id: 2,
			title: "Top 7 Tips to Manage Your Monthly Budget",
			desc: "Smart budgeting strategies to stay financially stable and avoid excessive debt.",
			img: "https://plus.unsplash.com/premium_photo-1705310031361-01787e099f9d?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
			link: "#",
		},
		{
			id: 3,
			title: "Should You Take a Personal Loan in 2026?",
			desc: "Understand when taking a loan is a smart financial decision and when it's not.",
			img: "https://plus.unsplash.com/premium_photo-1663011166502-3eb04538d5e7?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
			link: "#",
		},
	];

	return (
		<section className="w-full pb-20 bg-gray-50">
			<div className="container px-4">
				{/* Section Title */}
				<h2 className="text-3xl font-bold text-center mb-4">
					Latest <span className="text-primary">Finance Tips</span>
				</h2>
				<p className="text-center text-gray-600 mb-12">
					Stay informed with expert financial advice, loan guides, and
					money-saving tips.
				</p>

				{/* Blog Cards */}
				<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
					{blogs.map((blog) => (
						<div
							key={blog.id}
							className="bg-white rounded-xl shadow-md hover:shadow-lg transition overflow-hidden"
						>
							<img
								src={blog.img}
								alt={blog.title}
								className="w-full h-48 object-cover"
							/>

							<div className="p-5">
								<h3 className="text-lg font-semibold mb-2">
									{blog.title}
								</h3>
								<p className="text-sm text-gray-600 mb-4">
									{blog.desc}
								</p>

								<a
									href={blog.link}
									className="flex items-center text-primary font-medium hover:underline"
								>
									Read More{" "}
									<ArrowRight className="w-4 h-4 ml-1" />
								</a>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default BlogTips;
