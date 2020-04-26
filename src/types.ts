import { Document } from "mongoose";

export type TodoItem = {
  title: string;
};

export type TodoItemDocument = TodoItem & Document;
