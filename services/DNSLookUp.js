const dns = require('dns');
const util = require('util');

const lookUp = util.promisify(dns.lookup);
const reverse = util.promisify(dns.reverse);

module.exports = { lookUp, reverse };
