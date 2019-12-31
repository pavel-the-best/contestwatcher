const logger = require('./logger');
let utils = module.exports = {};

/* ID of group that controls this bot
 * This could be in a environment variable... oh well */
utils.admin_id = process.env.admin_id || -342595091;
