const mongoose = require('mongoose');

const priceHistorySchema = new mongoose.Schema({
  listingId: { type: String, required: true },
  source: String,
  prices: [{
    price: Number,
    recordedAt: { type: Date, default: Date.now }
  }],
  priceDrop: { type: Boolean, default: false },
  droppedBy: Number,
  droppedByPercent: Number
}, { timestamps: true });

priceHistorySchema.index({ listingId: 1 });

module.exports = mongoose.model('PriceHistory', priceHistorySchema);
