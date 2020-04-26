import { Request } from "express";
import { Response } from "express";
import { NextFunction } from "express";
import { ArkExpressModule } from "@skyslit/ark-express";
import repository from "./repositories";
import { body } from "express-validator";

export default (module: ArkExpressModule) => ({
  addTodo: [
    module.utils.validate([
      body("title", "Title is required").isLength({ min: 1, max: 50 }),
    ]),
    (req: Request, res: Response, next: NextFunction) => {
      repository(module).createTodoItem(req.body.title, (err, user) => {
        if (err) {
          return res.status(422).json({ message: err.message });
        }

        res.status(201).json(user);
      });
    },
  ],
  getTodo(req: Request, res: Response) {
    repository(module).getAll((err, items) => {
      if (err) {
        return res.status(422).json({ message: err.message });
      }

      res.status(200).json(items);
    });
  },
});
