const DNSLoopUp = require('../services/DNSLookUp');
const express = require('express');

const router = express.Router();

router.get('/', async (req, res, next) => {
  const { domain } = req.query;

  if (!domain) {
    return res.status(422).json({
      type: 'error',
      message: 'Missing required query param',
    });
  }

  try {
    return res.json(await DNSLoopUp.lookUp(domain));
  } catch (error) {
    next(error);
  }
});

module.exports = router;
