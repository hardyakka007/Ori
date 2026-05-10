const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  email: { type: String, required: true, unique: true, lowercase: true },
  password: { type: String, required: true, minlength: 6 },
  photo: { type: String, default: '' },
  bio: { type: String, default: '' },
  investmentStyle: { type: String, enum: ['buy-to-live', 'buy-to-rent', 'flip', 'long-term'], default: 'buy-to-live' },
  preferredAreas: [String],
  budget: {
    min: { type: Number, default: 0 },
    max: { type: Number, default: 5000000 }
  },
  language: { type: String, enum: ['he', 'en'], default: 'he' },
  isPublic: { type: Boolean, default: true },
  subscription: {
    tier: { type: String, enum: ['free', 'premium', 'investor'], default: 'free' },
    startDate: Date,
    endDate: Date,
    stripeCustomerId: String
  },
  fcmToken: String, // Firebase Cloud Messaging token for push notifications
  comparisonsToday: { type: Number, default: 0 },
  comparisonsResetAt: { type: Date, default: Date.now }
}, { timestamps: true });

userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();
  this.password = await bcrypt.hash(this.password, 12);
  next();
});

userSchema.methods.comparePassword = function (plain) {
  return bcrypt.compare(plain, this.password);
};

module.exports = mongoose.model('User', userSchema);
