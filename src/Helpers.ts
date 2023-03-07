import fs from "fs";
import path from "path";

export function loadFiles<T>(directory: string, extension = ".ts"): T[] {
    const directoryPath = path.join(__dirname, directory);

    const files = fs.readdirSync(directoryPath).filter(file => file.endsWith(extension));

    const results = [];

    for (const file of files) {
        const filePath = path.join(directoryPath, file);

        results.push(require(filePath)['default']);
    }

    return results;
}
