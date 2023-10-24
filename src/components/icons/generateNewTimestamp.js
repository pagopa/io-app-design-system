const fs = require("fs-extra");

const timestampFilePath = "./timestamp.txt";
const currentTimestamp = new Date().toISOString();

fs.writeFileSync(timestampFilePath, currentTimestamp);
