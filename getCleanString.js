/**
 *	@namespace getCleanString
 */

function getCleanString(thisString, makeLowerCase) {
	thisString = thisString.replace(/^\s+|\t+|\n+| |\s+$/g, '&#39;&#39;');
	thisString = makeLowerCase ? thisString.toLowerCase() : thisString;
	return thisString;
}



module.exports.getCleanString = getCleanString;
