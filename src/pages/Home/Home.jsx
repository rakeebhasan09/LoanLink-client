import React from "react";
import HeroSection from "./HeroSection/HeroSection";
import AvailableLoan from "./AvailableLoan/AvailableLoan";
import HowItWorks from "./HowItWorks/HowItWorks";
import StatsSection from "./StatsSection/StatsSection";
import CustomersSay from "./CustomersSay/CustomersSay";

const Home = () => {
	return (
		<>
			<HeroSection />
			<AvailableLoan />
			<HowItWorks />
			<StatsSection />
			<CustomersSay />
		</>
	);
};

export default Home;
