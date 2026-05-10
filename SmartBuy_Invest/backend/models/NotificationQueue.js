const mongoose = require('mongoose');

const notificationQueueSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  listingId: { type: mongoose.Schema.Types.ObjectId, ref: 'ScannedListing' },
  title: String,
  body: String,
  data: mongoose.Schema.Types.Mixed,
  dealScore: Number,
  notificationType: { type: String, enum: ['push', 'email', 'in-app'], required: true },
  read: { type: Boolean, default: false },
  sent: { type: Boolean, default: false },
  sentAt: Date,
  emailDigestBatch: String
}, { timestamps: true });

notificationQueueSchema.index({ userId: 1, read: 1 });
notificationQueueSchema.index({ sent: 1, notificationType: 1 });

module.exports = mongoose.model('NotificationQueue', notificationQueueSchema);
