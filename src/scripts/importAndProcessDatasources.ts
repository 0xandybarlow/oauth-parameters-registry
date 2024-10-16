import { RegistryMetadata } from './interfaces/RegistryMetadata';
import { datasources } from './datasources';
import { csvToObject } from './convertCsvToObject';
import { getData } from './util/network';
import { generateFilename, writeJSON } from './util/files';
import { promises as fs } from 'fs';
import * as path from 'path';

const processDataSources = async () => {
  const dataDir = path.resolve(__dirname, '../../dist/data');
  const scriptsDataDir = path.resolve(__dirname, '../../src/data');
  try {
    await fs.mkdir(dataDir, { recursive: true });
    await fs.mkdir(scriptsDataDir, { recursive: true });
    console.log(
      `Directories created or already exist: ${dataDir}, ${scriptsDataDir}`,
    );
  } catch (error) {
    throw new Error(
      `Error creating directories: ${dataDir}, ${scriptsDataDir}, message: ${(error as Error).message}`,
    );
  }

  const processDate = new Date().toISOString();
  for (const datasource of datasources as RegistryMetadata[]) {
    try {
      const getDataFromUrl = await getData(datasource.url);
      const data = await csvToObject(getDataFromUrl);

      const IANAJson = {
        name: datasource.name,
        metadata: {
          required_specifications: datasource.required_specifications,
          datasource_url: datasource.url,
          last_processed: processDate,
        },
        parameters: data,
      };

      const filePath = path.join(dataDir, generateFilename(datasource.name));
      const scriptsFilePath = path.join(
        scriptsDataDir,
        generateFilename(datasource.name),
      );
      await writeJSON(filePath, IANAJson);
      await writeJSON(scriptsFilePath, IANAJson);
      console.log(
        `Files written successfully: ${filePath}, ${scriptsFilePath}`,
      );
    } catch (error) {
      console.error(
        `Error whilst processing: ${datasource.url}, message: ${(error as Error).message}`,
      );
    }
  }
};

processDataSources()
  .then(() => {
    console.log('Processing datasources completed successfully');
  })
  .catch((error) => {
    console.error(`Processing datasources failed: ${error.message}`);
  });
