export class TodoApi {
  constructor() {
    this.url = "http://localhost:3000";
  }

  async getTasks() {
    const response = await fetch(`${this.url}/todos`);
    return response.json();
  }

  async createTask(todoItem) {
    const response = await fetch(`${this.url}/todos`, {
      method: "POST",
      body: JSON.stringify({
        text: todoItem.text,
        completed: false,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response.json();
  }

  async updateTask(todoItem) {
    const response = await fetch(`${this.url}/todos/${todoItem.id}`, {
      method: "PUT",
      body: JSON.stringify(todoItem),
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response.json();
  }

  async deleteTask(todoItem) {
    const response = await fetch(`${this.url}/todos/${todoItem.id}`, {
      method: "DELETE",
    });
    return response.json();
  }
}
