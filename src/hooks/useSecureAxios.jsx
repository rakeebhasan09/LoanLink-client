import axios from "axios";

const axiosInstance = axios.create({
	baseURL: "https://loan-link-server-one.vercel.app",
});

const useSecureAxios = () => {
	return axiosInstance;
};

export default useSecureAxios;
