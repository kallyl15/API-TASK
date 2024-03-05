const { v4: uuidv4 } = require('uuid');

class Task {
  constructor(title, description) {
    this.id = uuidv4();
    this.title = title;
    this.description = description;
    this.completed_at = null;
    this.created_at = new Date();
    this.updated_at = new Date();
  }
}

module.exports = Task;
