/************************************************************************\
 *
 * VaultWiki
 * Version 4.0.24 Patch Level 1
 *
 * Copyright ©2008-2018 Cracked Egg Studios, LLC. All Rights Reserved.
 * This file may not be redistributed in whole or significant part.
 * 
 * VAULTWIKI IS NOT FREE SOFTWARE
 * https://www.vaultwiki.org/
 * https://www.vaultwiki.org/pages/Info:License-Agreement
 *
\************************************************************************/

vw_Hard_Core.inited||(vw_Hard_Core.bind("get_cookies",function(a){"undefined"!=typeof fetch_cookie?a=fetch_cookie(VW_COOKIE_PREFIX+a):(a=document.cookie.split(VW_COOKIE_PREFIX+a+"\x3d"))&&(a=a[1].split(";")[0]);return a?a.split("||"):[]}),vw_Hard_Core.bind("set_cookie",function(a,b,e){if(null===b){if("undefined"!=typeof delete_cookie)return console.log("Deleted Cookie :: %s",VW_COOKIE_PREFIX+a),document.cookie=VW_COOKIE_PREFIX+a+"\x3d;path\x3d"+VW_COOKIE_PATH+";domain\x3d"+VW_COOKIE_DOMAIN+";expires\x3dThu, 01-Jan-70 00:00:01 GMT", null;b=""}e||(e=1);var c=new Date;c.setTime(c.getTime()+86400*e);console.log("Set Cookie :: %s \x3d '%s'",VW_COOKIE_PREFIX+a,b);document.cookie=VW_COOKIE_PREFIX+a+"\x3d"+escape(b)+";path\x3d"+VW_COOKIE_PATH+";domain\x3d"+VW_COOKIE_DOMAIN+";expires\x3d"+c.toGMTString()}),vw_Hard_Core.bind("check_security",function(){var a=VW_SECURE_TOKEN,b=this;"undefined"!=typeof SECURITYTOKEN&&""!=SECURITYTOKEN&&(a=SECURITYTOKEN);"undefined"==typeof b.security_interval&&(b.security_interval=setInterval(function(){b.ajax_call({action:"securitytoken", callback:function(a,c,f){if(c.responseXML&&(a=c.responseXML.getElementsByTagName("error"),!a||!a.length)){var d=b.getXMLvalue(c.responseXML.getElementsByTagName("token")[0]);VW_SECURE_TOKEN=d;b.set("securitytoken",d);"undefined"!=typeof SECURITYTOKEN&&(SECURITYTOKEN=d);Y.Node.all("input[name\x3dsecuritytoken]").each(function(){this.set("value",d)})}}})},9E6));b.set("securitytoken",a)}));