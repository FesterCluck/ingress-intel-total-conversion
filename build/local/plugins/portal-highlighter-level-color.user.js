// ==UserScript==
// @id             iitc-plugin-highlight-portals-level-color@vita10gy
// @name           IITC plugin: highlight portals by level color
// @category       Highlighter
// @version        0.1.2.20161103.4844
// @namespace      https://github.com/jonatkins/ingress-intel-total-conversion
// @updateURL      none
// @downloadURL    none
// @description    [local-2016-11-03-004844] Use the portal fill color to denote the portal level by using the game level colors.
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


function wrapper(plugin_info) {
// ensure plugin framework is there, even if iitc is not yet loaded
if(typeof window.plugin !== 'function') window.plugin = function() {};

//PLUGIN AUTHORS: writing a plugin outside of the IITC build environment? if so, delete these lines!!
//(leaving them in place might break the 'About IITC' page or break update checks)
plugin_info.buildName = 'local';
plugin_info.dateTimeVersion = '20161103.4844';
plugin_info.pluginId = 'portal-highlighter-level-color';
//END PLUGIN AUTHORS NOTE



// PLUGIN START ////////////////////////////////////////////////////////

// use own namespace for plugin
window.plugin.portalHighlighterPortalsLevelColor = function() {};

window.plugin.portalHighlighterPortalsLevelColor.colorLevel = function(data) {
  var portal_level = data.portal.options.data.level;
  if (portal_level !== undefined) {
    var opacity = .6;
    data.portal.setStyle({fillColor: COLORS_LVL[portal_level], fillOpacity: opacity});
  }
}

var setup =  function() {
  window.addPortalHighlighter('Level Color', window.plugin.portalHighlighterPortalsLevelColor.colorLevel);
}

// PLUGIN END //////////////////////////////////////////////////////////


setup.info = plugin_info; //add the script info data to the function as a property
if(!window.bootPlugins) window.bootPlugins = [];
window.bootPlugins.push(setup);
// if IITC has already booted, immediately run the 'setup' function
if(window.iitcLoaded && typeof setup === 'function') setup();
} // wrapper end
// inject code into site context
var script = document.createElement('script');
var info = {};
if (typeof GM_info !== 'undefined' && GM_info && GM_info.script) info.script = { version: GM_info.script.version, name: GM_info.script.name, description: GM_info.script.description };
script.appendChild(document.createTextNode('('+ wrapper +')('+JSON.stringify(info)+');'));
(document.body || document.head || document.documentElement).appendChild(script);


