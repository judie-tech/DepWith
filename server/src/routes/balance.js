import express from "express";
import { Balance } from "/.database/models/Balance.js";
const router = express.Router;

// Get user's balance
router.get("/balance/:userId", async (req, res) => {
  try {
    const balance = await Balance.findOne({ user: req.params.userId });
    if (!balance) {
      return res.status(404).json({ error: "Balance not found" });
    }
    res.status(200).json(balance);
  } catch (error) {
    res.status(500).json({ error: "Error retrieving balance" });
  }
});

// Export the router
export default router;
