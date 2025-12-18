import React from "react";
import useAuth from "./useAuth";
import { useQuery } from "@tanstack/react-query";
import useSecureAxios from "./useSecureAxios";

const useRole = () => {
	const { user } = useAuth();
	const secureAxios = useSecureAxios();
	const { isLoading: roleLoading, data } = useQuery({
		queryKey: ["user-role", user?.email],
		queryFn: async () => {
			const res = await secureAxios.get(`/users/${user.email}/role`);
			return res.data;
		},
	});

	return {
		role: data?.role,
		userStatus: data?.userStatus,
		roleLoading,
	};
};

export default useRole;
