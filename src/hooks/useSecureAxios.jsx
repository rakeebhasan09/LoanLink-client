import axios from "axios";

const axiosInstance = axios.create({
	// baseURL: "https://loan-link-server-one.vercel.app",
	baseURL: "http://localhost:3000",
});

const useSecureAxios = () => {
	return axiosInstance;
};

export default useSecureAxios;
