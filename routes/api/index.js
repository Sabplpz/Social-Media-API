const router = require('express').Router();
const userRoutes = require('./userRoutes');
const thoughtsRoutes = require('./thoughtsRoutes.js');

router.use('/users', userRoutes);
router.use('/thoughts', thoughtsRoutes);

module.exports = router;
