const express = require("express");
const router = express.Router();
const Driver = require("../models/Driver");

// Create new driver
router.post("/", async (req, res) => {
    try {
        const driver = await Driver.create(req.body);
        res.status(201).json(driver);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// Get driver info
router.get("/:id", async (req, res) => {
    try {
        const driver = await Driver.findById(req.params.id);
        if (!driver) return res.status(404).json({ error: "Driver not found" });
        res.json(driver);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

module.exports = router;
