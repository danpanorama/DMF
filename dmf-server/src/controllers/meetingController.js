import asyncHandler from '../middlewares/asyncHandler.js';
import Meeting from '../models/Meeting.js';
import { sendMail } from '../utils/email.js';
import logger from '../utils/logger.js';

export const createMeeting = asyncHandler(async (req, res) => {
  const payload = {
    user: req.user._id,
    subject: req.body.subject,
    date: new Date(req.body.date),
    location: req.body.location || ''
  };

  // אפשר להוסיף בדיקות ל-conflict כאן (פגישה כבר קיימת לאותו זמן)
  const existing = await Meeting.findOne({ user: req.user._id, date: payload.date });
  if (existing) return res.status(409).json({ status: 'fail', message: 'You already have a meeting at this time' });

  const meeting = await Meeting.create(payload);

  // שליחת מייל אישור ללקוח (אופציונלי)
  try {
    await sendMail({
      to: req.user.email,
      subject: `Meeting scheduled: ${payload.subject}`,
      text: `Your meeting is scheduled on ${payload.date.toISOString()}`,
      html: `<p>Your meeting is scheduled on <strong>${payload.date.toISOString()}</strong></p>`
    });
  } catch (err) {
    logger.error('Failed to send meeting email', { err, userId: req.user._id });
    // לא נהרוג את היצירה בגלל כשל במייל - רק נרשום
  }

  res.status(201).json({ status: 'success', data: meeting });
});

export const getMyMeetings = asyncHandler(async (req, res) => {
  const meetings = await Meeting.find({ user: req.user._id }).sort({ date: 1 });
  res.json({ status: 'success', data: meetings });
});

export const cancelMeeting = asyncHandler(async (req, res) => {
  const meeting = await Meeting.findOneAndUpdate(
    { _id: req.params.id, user: req.user._id },
    { status: 'cancelled' },
    { new: true }
  );
  if (!meeting) return res.status(404).json({ status: 'fail', message: 'Meeting not found' });
  res.json({ status: 'success', data: meeting });
});
