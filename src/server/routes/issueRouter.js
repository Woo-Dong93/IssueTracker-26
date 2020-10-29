const router = require('express').Router();
const issueController = require('../controllers/issueController');

router.get('/issue', issueController.getIssueList);
router.get('/issue/detail/:id', issueController.getIssueDetail);

module.exports = router;