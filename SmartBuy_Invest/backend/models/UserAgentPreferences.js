const mongoose = require('mongoose');

const userAgentPreferencesSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true, unique: true },
  areasToMonitor: { type: [String], default: [] },
  budgetMin: { type: Number, default: 0 },
  budgetMax: { type: Number, default: 5000000 },
  propertyTypes: { type: [String], default: ['apartment', 'house'] },
  dealScoreThreshold: { type: Number, default: 75, min: 0, max: 100 },
  notificationFrequency: { type: String, enum: ['real-time', 'daily', 'weekly'], default: 'real-time' },
  notificationChannels: { type: [String], default: ['push', 'in-app'] },
  enabledAgents: {
    type: [String],
    default: ['yad2', 'madlan'],
    enum: ['yad2', 'madlan', 'facebook', 'instagram', 'tiktok', 'remax', 'sothebys', 'airbnb']
  },
  active: { type: Boolean, default: true }
}, { timestamps: true });

module.exports = mongoose.model('UserAgentPreferences', userAgentPreferencesSchema);
