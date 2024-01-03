import { useState, useEffect } from "react";
import axios from "axios";
const backendUrl = "http://localhost:4882";

export const PageWelcome = () => {
	const [appMessage, setAppMessage] = useState("");
	const [appName, setAppName] = useState("");
	const [nodeVersion, setNodeVersion] = useState("");
	const [numberOfFiles, setNumberOfFiles] = useState(0);
	const [userSystem, setUserSystem] = useState("");
	const [file, setFile] = useState([]);

	const fetchAppName = async () => {
		try {
			const response = await axios.get(backendUrl);
			console.log("STATUS: " + response.status);
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

	useEffect(() => {
		(async () => {
			const response = await axios.get(`${backendUrl}/node-version`);
			setNodeVersion(response.data);
		})();
	}, []);

	useEffect(() => {
		(async () => {
			const response = await axios.get(`${backendUrl}/number-of-files`);
			setNumberOfFiles(response.data);
		})();
	}, []);

	useEffect(() => {
		(async () => {
			const response = await axios.get(`${backendUrl}/user-system`);
			setUserSystem(response.data.system);
		})();
	}, []);

	useEffect(() => {
		(async () => {
			const response = await axios.get(`${backendUrl}/`);
			setFile(response.data);
		})();
	}, []);

	return (
		<>
			<h2>{appMessage}</h2>
			{appMessage === "" && (
				<>
					<p>APPNAME: {appName}</p>
					<p>NOVE VERSION: {nodeVersion}</p>
					<p>NUMBER OF FILES: {numberOfFiles}</p>
					<p>USER SYSTEM: {userSystem}</p>
					<input type="text" className="file" />
					<ul></ul>
				</>
			)}
		</>
	);
};
