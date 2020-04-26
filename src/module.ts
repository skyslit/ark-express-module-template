import { ArkExpressModule } from "@skyslit/ark-express";
import TodoSchema from "./schema/Todo.schema";
import handlers from "./handlers";

export class AuthExpressModule extends ArkExpressModule {
  constructor() {
    super();
    this.registerModel("todo", TodoSchema);
  }

  main() {
    /**
     * @api {post} /todo Create Todo Item
     * @apiName PostTodo
     * @apiGroup Todo
     *
     * @apiParam (Request Body) {String} title Title of Todo Item.
     *
     * @apiExample Example usage:
     *     body:
     *     {
     *       "title": "Pickup Groceries"
     *     }
     */
    this.router.post("/todo", handlers(this).addTodo);
    /**
     * @api {get} /todo See all Todo Items
     * @apiName GetAllTodo
     * @apiGroup Todo
     *
     */
    this.router.get("/todo", handlers(this).getTodo);
  }
}
