import { useState, useEffect } from "react";
import axios from "axios";
const backendUrl = "http://localhost:4882";

export const PageWelcome = () => {
	const [appMessage, setAppMessage] = useState("");
	const [appName, setAppName] = useState("");

	const fetchAppName = async () => {
		try {
			const response = await axios.get(backendUrl);
			setAppName(response.data.appName);
		} catch (error: any) {
			console.log(`ERROR: ${error.message}`);
			setAppMessage(
				`Sorry, we can't retrieve your data at this time. Try again later.`
			);
		}
	};

	useEffect(() => {
		fetchAppName();
	}, []);

	return (
		<>
			<h2>{appMessage}</h2>
			{appMessage === "" && (
				<>
					<p>APPNAME: {appName}</p>
				</>
			)}
		</>
	);
};
