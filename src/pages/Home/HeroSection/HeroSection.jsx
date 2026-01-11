import { motion } from "framer-motion";
import { Shield, Clock, Percent, Users, TrendingUp, Award } from "lucide-react";
import { Link } from "react-router";

const HeroSection = () => {
	return (
		<section className="py-16 lg:py-24 bg-[#F2FEFA] dark:bg-[#080C17]">
			<div className="container">
				<div className="grid items-center gap-12 lg:grid-cols-2">
					{/* Content */}
					<motion.div
						initial={{ opacity: 0, x: -50 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.6 }}
						className="text-center lg:text-left"
					>
						<div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
							<Award className="h-4 w-4" />
							Trusted by 10,000+ Borrowers
						</div>

						<h1 className="mb-6 text-4xl font-bold leading-tight text-foreground md:text-5xl lg:text-6xl">
							Quick & Easy{" "}
							<span className="text-gradient">Microloans</span>{" "}
							for Your Needs
						</h1>

						<p className="mb-8 text-lg text-[#65758b] md:text-xl">
							Get approved in minutes, not days. LoanLink offers
							transparent terms, competitive rates, and a seamless
							digital experience for all your microloan needs.
						</p>
						{/* Buttons */}
						<div className="flex flex-col md:flex-row items-center gap-4">
							<button className="flex items-center gap-2 px-6 py-3 rounded-full text-white font-semibold bg-[linear-gradient(135deg,rgba(35,191,155,1)_0%,rgba(41,136,130,1)_100%)] shadow-md hover:opacity-90 transition">
								Apply for Loan
								<span>→</span>
							</button>

							<Link
								to={"/all-loans"}
								className="flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-[#1bc298] border border-[#1bc298] bg-transparent hover:bg-[#1bc298]/10 transition"
							>
								Explore Loans
							</Link>
						</div>

						{/* Trust Indicators */}
						<div className="mt-10 flex flex-wrap items-center justify-center gap-8 lg:justify-start">
							<div className="flex items-center gap-2">
								<Shield className="h-5 w-5 text-primary" />
								<span className="text-sm text-muted-foreground">
									Bank-Level Security
								</span>
							</div>
							<div className="flex items-center gap-2">
								<Clock className="h-5 w-5 text-primary" />
								<span className="text-sm text-muted-foreground">
									24hr Approval
								</span>
							</div>
							<div className="flex items-center gap-2">
								<Percent className="h-5 w-5 text-primary" />
								<span className="text-sm text-muted-foreground">
									Low Interest
								</span>
							</div>
						</div>
					</motion.div>
					{/* Image */}
					<motion.div
						initial={{ opacity: 0, x: 50 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.6, delay: 0.2 }}
						className="relative"
					>
						<div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
							<img
								src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=500&fit=crop"
								alt="Financial planning and loan management"
								className="w-full object-cover"
							/>
						</div>

						{/* Floating Cards */}
						<motion.div
							animate={{ y: [0, -10, 0] }}
							transition={{
								duration: 4,
								repeat: Infinity,
								ease: "easeInOut",
							}}
							className="absolute -left-4 top-1/4 z-20 rounded-xl bg-[#FEFEFE] dark:bg-[#0C1322] p-4"
						>
							<div className="flex items-center gap-3">
								<div className="flex h-10 w-10 items-center justify-center rounded-full bg-success/10">
									<TrendingUp className="h-5 w-5 text-success" />
								</div>
								<div>
									<p className="text-sm font-semibold">
										Loan Approved
									</p>
									<p className="text-xs text-muted-foreground">
										$5,000
									</p>
								</div>
							</div>
						</motion.div>

						<motion.div
							animate={{ y: [0, 10, 0] }}
							transition={{
								duration: 4,
								repeat: Infinity,
								ease: "easeInOut",
								delay: 1,
							}}
							className="absolute -right-4 bottom-1/4 z-20 rounded-xl bg-[#FEFEFE] dark:bg-[#0C1322] p-4"
						>
							<div className="flex items-center gap-3">
								<div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
									<Users className="h-5 w-5 text-primary" />
								</div>
								<div>
									<p className="text-sm font-semibold">
										10K+ Users
									</p>
									<p className="text-xs text-muted-foreground">
										Trust us
									</p>
								</div>
							</div>
						</motion.div>
					</motion.div>
				</div>
			</div>
		</section>
	);
};

export default HeroSection;
