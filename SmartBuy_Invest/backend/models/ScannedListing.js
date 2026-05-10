const mongoose = require('mongoose');

const scannedListingSchema = new mongoose.Schema({
  source: { type: String, required: true, enum: ['yad2', 'madlan', 'facebook', 'instagram', 'tiktok', 'whatsapp', 'remax', 'sothebys', 'airbnb', 'chrome'] },
  sourceId: { type: String, required: true },
  listing: {
    title: String,
    price: Number,
    sqm: Number,
    rooms: Number,
    area: String,
    neighborhood: String,
    address: String,
    images: [String],
    agentName: String,
    agentPhone: String,
    sourceUrl: String,
    propertyType: String
  },
  metrics: {
    dealScore: { type: Number, min: 0, max: 100 },
    pricePerSqm: Number,
    areaAvgPrice: Number,
    priceVsMarket: Number,
    areaPopularityScore: Number
  },
  isHotDeal: { type: Boolean, default: false },
  notifiedUsers: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
  linkedListingId: { type: mongoose.Schema.Types.ObjectId, ref: 'Listing' },
  foundAt: { type: Date, default: Date.now },
  lastSeen: { type: Date, default: Date.now }
}, { timestamps: true });

scannedListingSchema.index({ source: 1, sourceId: 1 }, { unique: true });
scannedListingSchema.index({ 'metrics.dealScore': -1 });
scannedListingSchema.index({ foundAt: -1 });

module.exports = mongoose.model('ScannedListing', scannedListingSchema);
