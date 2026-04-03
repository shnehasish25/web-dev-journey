// Day 219: fs/promises
const fs = require('fs/promises');
const path = require('path');

async function handleFile() {
  const filePath = path.join(__dirname, 'sample.txt');
  await fs.writeFile(filePath, 'Backend logs recorded successfully.');
  const data = await fs.readFile(filePath, 'utf-8');
  console.log("File content:", data);
}
handleFile();
