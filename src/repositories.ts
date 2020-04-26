import { ArkExpressModule } from "@skyslit/ark-express";
import { TodoItemDocument } from "./types";

export default (module: ArkExpressModule) => ({
  createTodoItem(
    title: string,
    cb: (err: Error, item: TodoItemDocument) => void
  ) {
    const TodoItemModel = module.getModel<TodoItemDocument>("todo");
    const item = new TodoItemModel();
    item.title = title;
    item.save(cb);
  },
  getAll(cb: (err: Error, items: TodoItemDocument) => void) {
    const TodoItemModel = module.getModel<TodoItemDocument>("todo");
    TodoItemModel.find({}).exec(cb);
  },
});
