export class TodoApi {
  constructor() {
    this.url = "http://localhost:3000";
  }

  async getTasks() {
    const response = await fetch(`${this.url}/todos`);
    return response.json();
  }

  async createTask(task) {
    const response = await fetch(`${this.url}/todos`, {
      method: "POST",
      body: JSON.stringify({
        task: task.text,
        completed: false,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response.json();
  }

  async updateTask(task) {
    const response = await fetch(`${this.url}/todos/${task.id}`, {
      method: "PUT",
      body: JSON.stringify(task),
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response.json();
  }

  async deleteTask(task) {
    const response = await fetch(`${this.url}/todos/${task.id}`, {
      method: "DELETE",
    });
    return response.json();
  }
}
