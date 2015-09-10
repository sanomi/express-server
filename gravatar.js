'use strict';
const mdn5 = require('md5');

let gravatarPic = (req, res) => {
		let fun = req.url.split('/');
		let gravatar = "http://gravatar.com/avatar/" + (mdn5(fun[2])).toString();
		let html = "<img src='"+gravatar+"'></img>"
		res.setHeader("Content-Type", "text/html");
		return html;
}

module.exports = gravatarPic;