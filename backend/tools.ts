import fs from "fs";
import path from "path";

export const getAllFilesInDirectory = (
	directoryPath: string,
	filesArray: string[] = []
) => {
	const files = fs.readdirSync(directoryPath);

	files.forEach((file) => {
		const filePath = path.join(directoryPath, file);
		if (fs.statSync(filePath).isDirectory()) {
			getAllFilesInDirectory(filePath, filesArray);
		} else {
			filesArray.push(filePath);
		}
	});

	return filesArray;
};

export const searchForFile = (directoryPath: string, file: string) => {
	const files = getAllFilesInDirectory(directoryPath);
	return files.includes(file);
};
