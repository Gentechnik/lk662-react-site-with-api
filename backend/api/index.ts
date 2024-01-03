import express from "express";
import * as config from "./config";
import * as tools from "../tools";
import cors from "cors";

const app = express();
app.use(cors());
const port = 4882;

app.get("/", (req, res) => {
	res.status(203);
	res.json({ appName: config.getAppName() });
});

app.get("/user-system", (req, res) => {
	res.json({ system: process.platform });
});

app.get("/node-version", (_, res) => {
	res.json(process.version);
});

app.get("/number-of-files", (_, res) => {
	const files = tools.getAllFilesInDirectory(process.cwd());
	res.json(files.length);
});

app.listen(port, () => {
	console.log(`Server is running on port https://localhost/${port}`);
});
