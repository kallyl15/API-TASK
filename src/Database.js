// Database.js
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

// Converte import.meta.url para um caminho de arquivo e depois obtém o diretório
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const databasePath = path.join(__dirname, 'db.json');

class Database {
  #database = {};

  constructor() {
    this.init();
  }

  async init() {
    try {
      const data = await fs.readFile(databasePath, 'utf8');
      this.#database = JSON.parse(data);
    } catch (error) {
      this.#persist();
    }
  }

  #persist() {
    fs.writeFile(databasePath, JSON.stringify(this.#database, null, 2));
  }

  select(table) {
    return this.#database[table] ?? [];
  }

  insert(table, data) {
    if (!this.#database[table]) {
      this.#database[table] = [];
    }

    this.#database[table].push(data);
    this.#persist();
    return data;
  }

  update(table, id, newData) {
    const items = this.#database[table] ?? [];
    const itemIndex = items.findIndex(item => item.id === id);
    if (itemIndex > -1) {
      items[itemIndex] = { ...items[itemIndex], ...newData, updated_at: new Date() };
      this.#persist();
      return items[itemIndex];
    }
    return null;
  }

  delete(table, id) {
    const items = this.#database[table] ?? [];
    const itemIndex = items.findIndex(item => item.id === id);
    if (itemIndex > -1) {
      items.splice(itemIndex, 1);
      this.#persist();
      return true;
    }
    return false;
  }
}

export { Database };