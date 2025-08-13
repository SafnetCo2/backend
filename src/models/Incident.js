// Incident.js
const mongoose = require("mongoose");

const incidentSchema = new mongoose.Schema({
    driverId: { type: mongoose.Schema.Types.ObjectId, ref: "Driver" },
    type: { type: String, required: true },
    speed: Number,
    location: String,
    timestamp: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Incident", incidentSchema);
