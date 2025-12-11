import React, { useRef } from "react";
// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
// icons
import { ArrowLeft, ArrowRight, Quote, Star } from "lucide-react";

const testimonials = [
	{
		id: 1,
		name: "Sarah Johnson",
		role: "Small Business Owner",
		image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
		content:
			"LoanLink helped me expand my business when I needed it most. The process was incredibly smooth and the interest rates were very competitive.",
		rating: 5,
	},
	{
		id: 2,
		name: "Michael Chen",
		role: "Freelance Designer",
		image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
		content:
			"I was skeptical at first, but LoanLink proved me wrong. Fast approval, transparent terms, and excellent customer service throughout.",
		rating: 5,
	},
	{
		id: 3,
		name: "Emily Rodriguez",
		role: "Graduate Student",
		image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
		content:
			"The education loan helped me complete my masters without financial stress. The low interest rate and flexible EMI options were perfect for my situation.",
		rating: 5,
	},
	{
		id: 4,
		name: "David Thompson",
		role: "Restaurant Owner",
		image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop",
		content:
			"When I needed emergency funds to keep my restaurant running, LoanLink came through with a quick loan approval. Truly a lifesaver!",
		rating: 4,
	},
];

const CustomersSay = () => {
	const swiperRef = useRef(null);

	return (
		<section className="py-16 lg:py-24 pb-20 bg-white dark:bg-[#080C16]">
			<div className="container">
				{/* Header */}
				<div className="mb-12">
					<h2 className="mb-4 text-3xl font-bold text-center md:text-4xl">
						What Our Customers Say
					</h2>
					<p className="mx-auto max-w-2xl text-muted text-center">
						Hear from our satisfied customers who have achieved
						their financial goals with LoanLink's help.
					</p>
				</div>

				{/* Slider */}
				<div className="relative mx-auto max-w-4xl">
					<div className="absolute w-full flex gap-4 justify-center -bottom-20">
						{/* Prev arrow */}
						<button
							aria-label="Previous slide"
							className="-translate-y-1/2 z-20 border border-[#e1e7ef] dark:border-[#222F44] -ml-4 rounded-full p-2 bg-white/90 dark:bg-black/60 shadow hover:scale-105 transition"
							onClick={() => {
								swiperRef.current?.slidePrev();
							}}
						>
							<ArrowLeft className="h-6 w-6" />
						</button>

						{/* Next arrow */}
						<button
							aria-label="Next slide"
							className="-translate-y-1/2 z-20 border border-[#e1e7ef] dark:border-[#222F44] -mr-4 rounded-full p-2 bg-white/90 dark:bg-black/60 shadow hover:scale-105 transition"
							onClick={() => {
								swiperRef.current?.slideNext();
							}}
						>
							<ArrowRight className="h-6 w-6" />
						</button>
					</div>

					<Swiper
						// this attaches the swiper instance to swiperRef
						onSwiper={(swiper) => {
							swiperRef.current = swiper;
						}}
						modules={[Autoplay]}
						pagination={false}
						autoplay={{ delay: 2500, disableOnInteraction: false }}
						speed={1000}
						spaceBetween={30}
						loop={true}
						className="mySwiper"
					>
						{testimonials.map((t) => (
							<SwiperSlide key={t.id}>
								<div className="p-8 lg:p-12 rounded-2xl dark:bg-[#0C1322] border border-[#e1e7ef] dark:border-[#222F44]">
									<Quote className="mb-6 h-12 w-12 text-primary/20" />
									<p className="mb-8 text-lg text-card-foreground md:text-xl">
										"{t.content}"
									</p>

									<div className="flex flex-col md:flex-row gap-5 md:items-center justify-between">
										<div className="flex items-center gap-4">
											<img
												src={t.image}
												alt={t.name}
												className="h-14 w-14 rounded-full object-cover"
											/>
											<div>
												<p className="font-semibold text-card-foreground">
													{t.name}
												</p>
												<p className="text-sm text-muted-foreground">
													{t.role}
												</p>
											</div>
										</div>

										<div className="flex gap-1">
											{Array.from({
												length: t.rating,
											}).map((_, i) => (
												<Star
													key={i}
													className="h-5 w-5 fill-[#F59F0A] text-[#F59F0A]"
												/>
											))}
										</div>
									</div>
								</div>
							</SwiperSlide>
						))}
					</Swiper>
				</div>
			</div>
		</section>
	);
};

export default CustomersSay;
