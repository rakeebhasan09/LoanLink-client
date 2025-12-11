import React from "react";
import HeroSection from "./HeroSection/HeroSection";
import AvailableLoan from "./AvailableLoan/AvailableLoan";
import HowItWorks from "./HowItWorks/HowItWorks";
import StatsSection from "./StatsSection/StatsSection";

const Home = () => {
	return (
		<>
			<HeroSection />
			<AvailableLoan />
			<HowItWorks />
			<StatsSection />
		</>
	);
};

export default Home;
