module.exports = {
	globDirectory: './',
	globPatterns: [
		'**/*.{md,ico,html,js,txt,json,png,css,eot,svg,woff,scss}'
	],
	swDest: 'sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};