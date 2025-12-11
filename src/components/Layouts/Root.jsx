import React from "react";
import { Outlet } from "react-router";
import Nav from "../../pages/Shared/Nav";
import Footer from "../../pages/Shared/Footer";
import ScrollTop from "../../pages/Shared/ScrollTop";

const Root = () => {
	return (
		<>
			<ScrollTop />
			<Nav></Nav>
			<Outlet></Outlet>
			<Footer></Footer>
		</>
	);
};

export default Root;
