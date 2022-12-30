
// ==UserScript==
// @name           center-google-search
// @namespace      taroxin/center-google-search
// @version        1.0.0
// @author         taroxin
// @include        *
// @homepage       https://github.com/TaroXin/center-google-search#readme
// @supportURL     https://github.com/TaroXin/center-google-search/issue
// @updateURL      https://raw.githubusercontent.com/TaroXin/center-google-search/main/main.user.js
// @downloadURL    https://raw.githubusercontent.com/TaroXin/center-google-search/main/main.user.js
// @run-at         document-end
// @match          https://www.google.com/search*
// ==/UserScript==
(function () {
	'use strict';

	console.log('center-google-search is running!');
	document.body.style.setProperty('--center-abs-margin', 'calc((100vw - var(--center-width) - var(--rhs-width)) / 2)');

})();
