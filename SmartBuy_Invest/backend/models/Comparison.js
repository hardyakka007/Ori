const mongoose = require('mongoose');

const comparisonSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  areas: [String],
  name: String,
  metrics: [{
    area: String,
    avgPrice: Number,
    pricePerSqm: Number,
    avgRent: Number,
    priceTrend: Number, // % change over last year
    totalListings: Number,
    popularityScore: Number
  }]
}, { timestamps: true });

comparisonSchema.index({ userId: 1 });

module.exports = mongoose.model('Comparison', comparisonSchema);
