import { useEffect } from "react";
import { useLocation } from "react-router";

const ScrollTop = () => {
	const { pathname } = useLocation();

	useEffect(() => {
		window.scrollTo(0, 0); // রাউট পরিবর্তন হলে স্ক্রল টপে যাবে
	}, [pathname]);

	return null;
};

export default ScrollTop;
