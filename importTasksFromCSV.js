import fs from 'fs';
import { parse } from 'csv-parse';
import axios from 'axios';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const importTasks = async (filePath) => {
  const parser = fs
    .createReadStream(filePath)
    .pipe(parse({
      columns: true,
      skip_empty_lines: true
    }));

  for await (const task of parser) {
    try {
      const response = await axios.post('http://localhost:3000/tasks', task);
      console.log(`Task criada com sucesso: ID ${response.data.id}`);
    } catch (error) {
      console.error(`Erro ao criar task: ${error.message}`);
    }
  }
};

const csvFilePath = path.join(__dirname, './tasks.csv');
importTasks(csvFilePath);
