'use strict';
let wordData = (fun) => {
	let sen = decodeURI(fun[2]);
	sen = sen.replace(/[^a-zA-Z\s]/g, '');
	let totalCount = sen.length;
	let strArr = sen.split(' ');
	let letterCount = strArr.join('').length;
	let wordAnswer = {wordCount: strArr.length, letterCount: letterCount, spaceCount: (totalCount-letterCount) };
	return JSON.stringify(wordAnswer);
}

module.exports = wordData;