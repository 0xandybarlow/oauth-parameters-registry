import { promisify } from 'node:util';
import { Options, parse } from 'csv-parse';
// Define the type for the promisified parse function
const parseAsync: (
  input: string,
  options?: Options,
) => Promise<Record<string, string>[]> = promisify(parse);

const removeBrackets = (str: string): string => {
  return str.replace(/[\[\]]/g, '');
};
const transformKeyName = (key: string): string => {
  return key.toLowerCase().replace(/\s+/g, '_').replace(/\(s\)/g, '');
};

const transformedRecords = (data: Record<string, string>[]) => {
  return data.map((record) => {
    const transformedRecord: { [key: string]: string } = {};
    for (const key in record) {
      if (Object.prototype.hasOwnProperty.call(record, key)) {
        transformedRecord[transformKeyName(key)] = removeBrackets(record[key]);
      }
    }
    return transformedRecord;
  });
};

const parseRawData = async (
  data: string,
): Promise<Record<string, string>[]> => {
  try {
    return parseAsync(data, {
      columns: true,
      trim: true,
    });
  } catch (error) {
    throw new Error(
      `Error processing raw response from datasource into csv: ${(error as Error).message}`,
    );
  }
};

export const csvToObject = async (
  rawDataFromResponse: string,
): Promise<Record<string, string>[]> => {
  const basicParsedObject = await parseRawData(rawDataFromResponse);
  return transformedRecords(basicParsedObject);
};
