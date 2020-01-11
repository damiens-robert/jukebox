"use strict"

let firstScriptTag = document.getElementsByTagName('script')[0];
let parentNode = firstScriptTag.parentNode;
 
let initTag = document.createElement('script');
let initCode = "window.usingCordova=false;";

initTag.setAttribute("type", "text/javascript");
initTag.setAttribute("defer", "");
initTag.setAttribute("onload", initCode);

parentNode.insertBefore(initTag, firstScriptTag.nextSibling);

// Insert Cordova Library and Application library
let cordovaTag = document.createElement('script');
let loadAppCode = "\
  javascript:\
    var deviceEvent = new Event('deviceReady');\
    var head = document.getElementsByTagName('head')[0];\
    \
    head.dispatchEvent(deviceEvent);\
    \
    var initScript=document.createElement('script');\
    \
    initScript.type = 'text/javascript';\
    initScript.src='js/init.js';\
    initScript.defer='defer' ;\
    \
    var scriptTags = document.getElementsByTagName('script');\
    var loaderScript = scriptTags[scriptTags.length - 1];\
    var parentNode = loaderScript.parentNode;\
    \
    parentNode.insertBefore(initScript, loaderScript.nextSiling);\
    \
    var indexScript=document.createElement('script');\
    \
    indexScript.type = 'text/javascript';\
    indexScript.src='js/index.js';\
    indexScript.defer='defer' ;\
    \
    parentNode.insertBefore(indexScript, initScript.nextSiling);\
";

cordovaTag.setAttribute("src", "cordova.js");
cordovaTag.setAttribute("type", "text/javascript");
cordovaTag.setAttribute("defer", "");
cordovaTag.setAttribute("onload", loadAppCode);

parentNode.insertBefore(cordovaTag, initTag.nextSibling);
