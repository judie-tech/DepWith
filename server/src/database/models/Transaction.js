import { Schema, model } from "mongoose";

// Define Transaction Schema
const transactionSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "User", // Reference to User model
      required: true,
    },
    amount: {
      type: Number,
      required: true,
    },
    transactionType: {
      type: String,
      enum: ["credit", "debit"], // Define transaction types
      required: true,
    },
    balanceAfterTransaction: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

// Export Transaction model
const Transaction = model("Transaction", transactionSchema);
export { Transaction };
