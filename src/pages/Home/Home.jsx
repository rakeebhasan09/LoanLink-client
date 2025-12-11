import React from "react";
import HeroSection from "./HeroSection/HeroSection";
import AvailableLoan from "./AvailableLoan/AvailableLoan";
import HowItWorks from "./HowItWorks/HowItWorks";
import StatsSection from "./StatsSection/StatsSection";
import CustomersSay from "./CustomersSay/CustomersSay";
import FAQSection from "./FAQSection/FAQSection";
import CTASection from "./CTASection/CTASection";

const Home = () => {
	return (
		<>
			<HeroSection />
			<AvailableLoan />
			<HowItWorks />
			<StatsSection />
			<CustomersSay />
			<FAQSection />
			<CTASection />
		</>
	);
};

export default Home;
