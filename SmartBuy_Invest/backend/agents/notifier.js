const NotificationQueue = require('../models/NotificationQueue');
const User = require('../models/User');

async function sendPushNotification(user, listing, dealScore) {
  // Firebase Cloud Messaging — requires firebase-admin initialized
  try {
    if (!user.fcmToken) return;
    const admin = require('../services/firebaseAdmin');
    if (!admin) return;

    await admin.messaging().send({
      token: user.fcmToken,
      notification: {
        title: `🔥 HOT DEAL! ${listing.title}`,
        body: `₪${listing.price?.toLocaleString()} (Deal Score: ${dealScore}/100) — ${listing.neighborhood || listing.area}`
      },
      data: {
        listingId: listing.sourceId,
        dealScore: String(dealScore),
        area: listing.area,
        type: 'hot_deal'
      }
    });
  } catch (err) {
    console.error('[Notifier] Push error:', err.message);
  }
}

async function createInAppAlert(userId, listing, dealScore, source) {
  try {
    await NotificationQueue.create({
      userId,
      title: `🔥 HOT DEAL Found!`,
      body: `${listing.title} — ₪${listing.price?.toLocaleString()} | Score: ${dealScore}/100 | ${listing.area}`,
      data: { listing, dealScore, source },
      dealScore,
      notificationType: 'in-app',
      sent: true,
      sentAt: new Date()
    });

    // Emit real-time WebSocket event
    if (global.io) {
      global.io.to(`user_${userId}`).emit('hot_deal', {
        title: `🔥 Hot Deal: ${listing.area}`,
        message: `₪${listing.price?.toLocaleString()} | Score ${dealScore}/100`,
        dealScore,
        listing
      });
    }
  } catch (err) {
    console.error('[Notifier] In-app alert error:', err.message);
  }
}

async function addToEmailQueue(userId, listing, dealScore) {
  try {
    const today = new Date().toISOString().split('T')[0];
    await NotificationQueue.create({
      userId,
      title: `Hot Deal: ${listing.title}`,
      body: `₪${listing.price?.toLocaleString()} (Score: ${dealScore}/100) in ${listing.area}`,
      data: { listing, dealScore },
      dealScore,
      notificationType: 'email',
      emailDigestBatch: today,
      sent: false
    });
  } catch (err) {
    console.error('[Notifier] Email queue error:', err.message);
  }
}

async function notifyUser(user, listing, dealScore, source) {
  const prefs = user.notificationChannels || ['push', 'in-app'];

  const tasks = [];
  if (prefs.includes('push')) tasks.push(sendPushNotification(user, listing, dealScore));
  if (prefs.includes('in-app')) tasks.push(createInAppAlert(user._id, listing, dealScore, source));
  if (prefs.includes('email')) tasks.push(addToEmailQueue(user._id, listing, dealScore));

  await Promise.allSettled(tasks);
}

module.exports = { notifyUser, createInAppAlert, addToEmailQueue };
