import mongoose from "mongoose";

const PromptSchema = new mongoose.Schema({
  prompt: {
    type: String,
    required: "prompt is required",
  },

  pronunciation: {
    type: String,
    required: "pronunciation is required",
  },

  meaning: {
    type: String,
    required: "meaning is required",
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },

  post: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Post",
    },
  ],
});

const model = mongoose.model("Prompt", PromptSchema);

export default model;
