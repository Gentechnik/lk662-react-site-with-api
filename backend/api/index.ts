import express from "express";
import * as config from "./config";

const app = express();
const port = 5112;

app.get("/", (req, res) => {
	res.json({ appName: config.getAppName() });
});

app.listen(port, () => {
	console.log(`Server is running on port https://localhost/${port}`);
});
