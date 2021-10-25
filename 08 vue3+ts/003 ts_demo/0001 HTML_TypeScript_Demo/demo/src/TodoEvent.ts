import { ITodoData } from "./typings";

class TodoEvent {
  private todoData: ITodoData[];

  constructor(todoData: ITodoData[]) {
    this.todoData = todoData;
  }

  public addTodo(todo: ITodoData): undefined | boolean {
    const _todo: null | ITodoData = this.todoData.find(
      (item: ITodoData) => item.id === todo.id
    );
    if (_todo) {
      return false;
    } else {
      this.todoData.push(todo);
    }
  }

  public removeTodo(id: number): void {
    this.todoData = this.todoData.filter((item: ITodoData) => item.id !== id);
  }

  public toggleComplete(id: number): void {
    this.todoData = this.todoData.map((item: ITodoData) => {
      if (item.id === id) {
        item.done = !item.done;
      }
      return item;
    });
  }
}

export default TodoEvent;