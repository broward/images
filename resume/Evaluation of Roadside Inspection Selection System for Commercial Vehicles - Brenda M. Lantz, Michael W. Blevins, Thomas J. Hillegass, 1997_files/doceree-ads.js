var docereeJournals=['opc','ejo','oed'];var docereeEnabled=false;function docereeLogIn(userObj){if(!docereeEnabled)return;console.debug('Doceree: User Login');try{if(!hcpContext){hcpContext=userObj;if(typeof setDocereeContext==='function'){setDocereeContext(hcpContext);}}}
catch(e){console.warn('Doceree exception: '+e);}};function docereeLogOut(){if(!docereeEnabled)return;console.debug('Doceree: User Logout');try{document.cookie=_docereeContext+'=; Max-Age=-99999999;';}
catch(e){console.warn('Doceree exception: '+e);}};