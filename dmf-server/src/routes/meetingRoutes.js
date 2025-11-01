import express from 'express';
import { createMeeting, getMyMeetings, getAvailableMeetings, cancelMeeting, rescheduleMeeting } from '../controllers/meetingController.js';
import { protect } from '../middlewares/authMiddleware.js';
import validate from '../middlewares/validate.js';
import { meetingSchema } from '../validators/meetingValidator.js';

const router = express.Router();

// router.use(protect); // כל הרוטים תחת /meetings דורשים auth

router.post('/', validate(meetingSchema), createMeeting);
router.put('/:id/reschedule', rescheduleMeeting);


router.get('/',protect, getMyMeetings);
router.patch('/:id/cancel',protect, cancelMeeting);
router.get('/available', getAvailableMeetings);

export default router;
