import mongoose from "mongoose";

const NationSchema = new mongoose.Schema({
  post: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Post",
    },
  ],
  user: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  ],
});

const model = mongoose.model("Nation", NationSchema);
export default model;
