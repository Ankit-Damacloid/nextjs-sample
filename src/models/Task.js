import { Schema, model, models } from "mongoose";

const TaskSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, "The Task title is required "],
      unique: true,
      trim: true,
      maxlength: [40, "title cannot be grater than 40 characters"],
    },
    description: {
      type: String,
      required: true,
      trim: true,
      maxlength: [200, "title cannot be grater than 200 characters"],
    },
    hobby:{
      type: Array,
      default: []
    }
  },{
    optimisticConcurrency: true,
    timestamps: true
  }
);

export default models.Task || model("Task", TaskSchema);
