const express = require('express');
const db = require('../../db/models');
const router = express.Router();

router.route('/signup').post(async (req, res, next) => {
  const { email } = req.body;

  try {
    // Check if the email already exists in the database
    const existingUser = await db.getUserByEmail(email);

    if (existingUser) {
      // Email already exists, send an error response
      return res.status(409).json({ error: 'Email already exists' });
    }

    // Email doesn't exist, proceed with user creation
    await db.createUser(req.body);
    res.send();
  } catch (err) {
    next(err);
  }
});

module.exports = router;
