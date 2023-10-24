import fs from "fs";

const timestampFilePath = "./timestamp.txt"; // Adjust the path as needed
const currentTimestamp = new Date().toISOString();

fs.writeFileSync(timestampFilePath, currentTimestamp);
