import React from "react";
import AboutTitle from "./AboutTitle/AboutTitle";
import AboutState from "./AboutState/AboutState";
import Mission from "./Mission/Mission";
import CoreValues from "./CoreValues/CoreValues";
import Leadership from "./Leadership/Leadership";

const About = () => {
	return (
		<>
			<title>About - LoanLink</title>
			<main className="py-12 dark:bg-[#080C16]">
				<AboutTitle />
				<AboutState />
				<Mission />
				<CoreValues />
				<Leadership />
			</main>
		</>
	);
};

export default About;
