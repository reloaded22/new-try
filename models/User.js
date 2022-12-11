import mongoose from "mongoose";

const testSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      required: true,
    },
  },
  { collection: "eb-test-collection" }
);

const Test = new mongoose.model("eb-test-collection", testSchema);

export default Test;