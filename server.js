const _ = require('lodash');
const yaml = require('js-yaml');

function template(s) { return s; } // a local function, not lodash's

const merged = _.merge({}, { a: 1 });
const cfg = yaml.safeLoad('a: 1');
module.exports = { merged, cfg, out: template('x') };
