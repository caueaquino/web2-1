const express = require('express');
const router = express.Router();
const CalendarController = require('../controller/CalendarController');
const Calendar = require("../model/CalendarModel");
const auth = require('../util/auth');

router.get('/', auth.optional, function(req, res, next) {
  res.render('auth/logins', { title: 'Calendar - Login' });
});

router.get('/register', auth.optional, function(req, res, next) {
  res.render('auth/register', { title: 'Calendar - Register' });
});

router.get('/calendar', auth.required, function(req, res, next) {
  res.render('calendar/home', {title: 'Calendar - Home', v291: Calendar.find()});
})

router.get("/calendars", auth.required, CalendarController.index);
router.get("/calendars/:id", auth.required, CalendarController.show);
router.post("/calendars", auth.required, CalendarController.store);

module.exports = router;
