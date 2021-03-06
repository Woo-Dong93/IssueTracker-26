const router = require('express').Router();
const userRouter = require('./userRouter');
const labelRouter = require('./labelRouter');
const milestoneRouter = require('./milestoneRouter');
const issueRouter = require('./issueRouter');
const commentRouter = require('./commentRouter');

/* GET home page. */

router.use('/api', userRouter);
router.use('/api', labelRouter);
router.use('/api', milestoneRouter);
router.use('/api', issueRouter);
router.use('/api', commentRouter);

module.exports = router;
