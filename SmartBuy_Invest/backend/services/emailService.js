const nodemailer = require('nodemailer');
const NotificationQueue = require('../models/NotificationQueue');
const User = require('../models/User');

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || 'smtp.sendgrid.net',
  port: 587,
  auth: {
    user: process.env.SMTP_USER || 'apikey',
    pass: process.env.SENDGRID_API_KEY
  }
});

async function sendDailyDigest() {
  const today = new Date().toISOString().split('T')[0];
  const pending = await NotificationQueue.find({
    notificationType: 'email',
    sent: false,
    emailDigestBatch: today
  }).populate('userId');

  // Group by user
  const byUser = {};
  for (const notif of pending) {
    const uid = notif.userId.toString();
    if (!byUser[uid]) byUser[uid] = { user: notif.userId, listings: [] };
    byUser[uid].listings.push(notif);
  }

  for (const [uid, { user, listings }] of Object.entries(byUser)) {
    try {
      const userData = await User.findById(uid);
      if (!userData?.email) continue;

      const listingRows = listings.slice(0, 10).map((n, i) => {
        const l = n.data?.listing;
        return `${i + 1}. ${l?.area || 'N/A'} — ₪${l?.price?.toLocaleString() || 'N/A'} (Score: ${n.dealScore}/100)`;
      }).join('\n');

      await transporter.sendMail({
        from: process.env.EMAIL_FROM || 'noreply@smartbuy.co.il',
        to: userData.email,
        subject: `🎯 SmartBuy: ${listings.length} Hot Deal${listings.length > 1 ? 's' : ''} Found Today!`,
        text: `Hi ${userData.name},\n\nWe found ${listings.length} hot deals matching your criteria today:\n\n${listingRows}\n\nOpen SmartBuy to view full details.\n\nSmartBuy Team`
      });

      await NotificationQueue.updateMany(
        { _id: { $in: listings.map(l => l._id) } },
        { sent: true, sentAt: new Date() }
      );
    } catch (err) {
      console.error('[EmailService] Failed to send digest for user:', uid, err.message);
    }
  }
}

module.exports = { sendDailyDigest };
