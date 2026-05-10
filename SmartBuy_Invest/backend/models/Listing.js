const mongoose = require('mongoose');

const listingSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  price: { type: Number, required: true },
  pricePerSqm: Number,
  sqm: Number,
  rooms: Number,
  floor: Number,
  totalFloors: Number,
  yearBuilt: Number,
  propertyType: { type: String, enum: ['apartment', 'house', 'studio', 'penthouse', 'duplex', 'land', 'commercial'], default: 'apartment' },
  area: { type: String, required: true },
  neighborhood: String,
  city: String,
  address: String,
  coordinates: {
    lat: Number,
    lng: Number
  },
  images: [String],
  agentName: String,
  agentPhone: String,
  agentEmail: String,
  source: { type: String, enum: ['yad2', 'madlan', 'facebook', 'instagram', 'tiktok', 'remax', 'sothebys', 'airbnb', 'manual'], default: 'manual' },
  sourceId: String, // original ID from the source
  sourceUrl: String,
  dealScore: { type: Number, min: 0, max: 100 },
  priceVsMarket: Number, // % difference from market avg (negative = cheaper)
  isHotDeal: { type: Boolean, default: false },
  isActive: { type: Boolean, default: true },
  savedBy: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }]
}, { timestamps: true });

listingSchema.index({ area: 1, price: 1 });
listingSchema.index({ dealScore: -1 });
listingSchema.index({ isHotDeal: 1 });
listingSchema.index({ source: 1, sourceId: 1 }, { unique: true, sparse: true });

module.exports = mongoose.model('Listing', listingSchema);
