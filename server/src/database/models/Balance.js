import { Schema, model } from "mongoose";

// Define Balance Schema
const balanceSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "User", // Reference to User model
      required: true,
    },
    balance: {
      type: Number,
      required: true,
      default: 0, // default balance
    },
  },
  { timestamps: true }
);

// Export Balance model
const Balance = model("Balance", balanceSchema);
export { Balance };
