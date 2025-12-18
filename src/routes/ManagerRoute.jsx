import React from "react";
import useAuth from "../hooks/useAuth";
import useRole from "../hooks/useRole";

const ManagerRoute = ({ children }) => {
	const { loading } = useAuth();
	const { role, roleLoading } = useRole();

	if (loading || roleLoading) {
		return <span className="loading loading-bars loading-xl"></span>;
	}

	if (role !== "manager") {
		return <div>Access Forbidden.</div>;
	}

	return children;
};

export default ManagerRoute;
