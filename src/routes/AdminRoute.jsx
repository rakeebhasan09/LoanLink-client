import useAuth from "../hooks/useAuth";
import useRole from "../hooks/useRole";

const AdminRoute = ({ children }) => {
	const { loading } = useAuth();
	const { role, roleLoading } = useRole();

	if (loading || roleLoading) {
		return <span className="loading loading-bars loading-xl"></span>;
	}

	if (role !== "admin") {
		return <div>Access Forbidden.</div>;
	}

	return children;
};

export default AdminRoute;
