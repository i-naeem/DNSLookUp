const express = require('express');
const dns = require('dns/promises');

const router = express.Router();

router.get('/lookup', async (req, res, next) => {
  const { domain } = req.query;
  if (!domain) {
    return res.status(422).json({
      message: 'Missing domain query param',
    });
  }
  try {
    return res.json(await dns.lookup(domain, { all: true }));
  } catch (error) {
    next(error);
  }
});

router.get('/reverse', async (req, res, next) => {
  const { address } = req.query;
  if (!address) {
    return res.status(422).json({
      message: 'Missing address query param',
    });
  }
  try {
    return res.json(await dns.reverse(address, { all: true }));
  } catch (error) {
    next(error);
  }
});

module.exports = router;
