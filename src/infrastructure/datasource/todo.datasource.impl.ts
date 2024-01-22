import { TodoModel } from "../../data/mongo";
import { CreateTodoDto, TodoDataSource, TodoEntity } from "../../domain";
import { UpdateTodoDto } from "../../domain/dtos/todos/update-todo.dto";

export class TodoDAtaSourceImpl implements TodoDataSource {
  async create(createTodoDto: CreateTodoDto): Promise<TodoEntity> {
    const { message } = createTodoDto;
    const todo = await TodoModel.create({ message });
    return TodoEntity.fromObject(todo);
  }
  async getAll(): Promise<TodoEntity[]> {
    const todos = await TodoModel.find();
    return todos.map((todo) => TodoEntity.fromObject(todo));
  }
  findById(id: number): Promise<TodoEntity> {
    throw new Error("Method not implemented.");
  }
  updateById(updateTodoDto: UpdateTodoDto): Promise<TodoEntity> {
    throw new Error("Method not implemented.");
  }
  deleteById(id: number): Promise<TodoEntity> {
    throw new Error("Method not implemented.");
  }
}
