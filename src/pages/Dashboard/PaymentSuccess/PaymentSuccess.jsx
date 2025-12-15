import React, { useEffect } from "react";
import { useSearchParams } from "react-router";
import useSecureAxios from "../../../hooks/useSecureAxios";

const PaymentSuccess = () => {
	const [searchParams] = useSearchParams();
	const sessionId = searchParams.get("session_id");
	const secureAxios = useSecureAxios();

	useEffect(() => {
		if (sessionId) {
			secureAxios
				.patch(`/payment-success?session_id=${sessionId}`)
				.then((res) => {
					console.log(res.data);
				});
		}
	}, [sessionId, secureAxios]);
	return <div className="capitalize">payment success</div>;
};

export default PaymentSuccess;
