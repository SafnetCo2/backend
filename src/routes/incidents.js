const express = require("express");
const router = express.Router();
const Incident = require("../models/Incident");

// Log an incident
router.post("/", async (req, res) => {
    try {
        const incident = await Incident.create(req.body);
        res.status(201).json(incident);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// Get all incidents
router.get("/", async (req, res) => {
    try {
        const incidents = await Incident.find().populate("driverId");
        res.json(incidents);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

module.exports = router;
