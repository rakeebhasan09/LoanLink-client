import React from "react";
import HeroSection from "./HeroSection/HeroSection";
import AvailableLoan from "./AvailableLoan/AvailableLoan";
import HowItWorks from "./HowItWorks/HowItWorks";

const Home = () => {
	return (
		<>
			<HeroSection />
			<AvailableLoan />
			<HowItWorks />
		</>
	);
};

export default Home;
