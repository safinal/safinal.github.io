import fs from 'fs';
import path from 'path';

export function getData(fileName) {
    try {
        const filePath = path.join(process.cwd(), 'data', fileName);
        const fileContent = fs.readFileSync(filePath, 'utf8');
        return JSON.parse(fileContent);
    } catch (error) {
        console.error('Error reading JSON file:', error);
        return null;
    }
}