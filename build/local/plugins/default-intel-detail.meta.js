// ==UserScript==
// @id             iitc-plugin-default-intel-detail@jonatkins
// @name           IITC plugin: Default intel detail level
// @category       Tweaks
// @version        0.2.0.20161103.4844
// @namespace      https://github.com/jonatkins/ingress-intel-total-conversion
// @updateURL      none
// @downloadURL    none
// @description    [local-2016-11-03-004844] Use the portal level detail levels from the standard intel site. By default, IITC shows less detail when zoomed out, as this is enough for general use, is more friendly to the niantic servers, and loads much faster. This plugin restores the default zoom level to portal level mapping. Note: using this plugin causes a larger number of requests to the intel server, and at high resolutions can cause excessive requests to be made (yes: the default intel site also has this problem!), so it is not recommended except for low resolution screens.
// @include        https://*.ingress.com/intel*
// @include        http://*.ingress.com/intel*
// @match          https://*.ingress.com/intel*
// @match          http://*.ingress.com/intel*
// @include        https://*.ingress.com/mission/*
// @include        http://*.ingress.com/mission/*
// @match          https://*.ingress.com/mission/*
// @match          http://*.ingress.com/mission/*
// @grant          none
// ==/UserScript==
