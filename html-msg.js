const logger = require('./logger');
const html_escape = require('true-html-escape').escape;

function make_link(string, link) {
	return '<a href="' + html_escape(link) + '">' + html_escape(string) + '</a>';
}

exports.escape = html_escape
exports.make_link = make_link
