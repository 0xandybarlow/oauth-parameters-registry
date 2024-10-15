import { promises as fs } from 'fs';

export const writeJSON = async (filePath: string, jsonData: object) => {
  return fs.writeFile(`${filePath}.json`, JSON.stringify(jsonData, null, 2));
};

export const generateFilename = (name: string): string => {
  return name.toLowerCase().replace(/\s+/g, '_');
};
