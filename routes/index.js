const express = require('express');
const dns = require('dns/promises');

const router = express.Router();

const lookUpRouteDescription = {
  method: 'GET',
  params: {
    domain: {
      description: 'The domain name to look for.',
      example: '/lookup?domain=google.com',
      type: 'String',
      required: true,
    },
  },
};
const reverseRouteDescription = {
  method: 'GET',
  params: {
    address: {
      description: 'The address name to look for host.',
      example: '/reverse?address=142.250.181.78',
      type: 'String',
      required: true,
    },
  },
};

router.get('/', async (req, res, next) => {
  return res.json({
    namespace: '/',
    routes: {
      '/lookup': lookUpRouteDescription,
      '/reverse': reverseRouteDescription,
    },
  });
});

router.get('/lookup', async (req, res, next) => {
  const { domain } = req.query;
  if (!domain) {
    return res.json(lookUpRouteDescription);
  }
  try {
    return res.json(await dns.lookup(domain, { all: true }));
  } catch (error) {
    next(error);
  }
});

router.get('/reverse', async (req, res, next) => {
  const { address } = req.query;
  if (!address) return res.json(reverseRouteDescription);

  try {
    return res.json(await dns.reverse(address, { all: true }));
  } catch (error) {
    next(error);
  }
});

module.exports = router;
