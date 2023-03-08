import fs from 'fs';
import path from 'path';

export async function loadFiles<T>(
  directory: string,
  extension = '.ts',
): Promise<T[]> {
  const directoryPath = path.join(__dirname, directory);

  const files = fs
    .readdirSync(directoryPath)
    .filter((file) => file.endsWith(extension));

  const results = [];

  for (const file of files) {
    const filePath = path.join(directoryPath, file);

    results.push((await import(filePath)).default);
  }

  return results;
}
