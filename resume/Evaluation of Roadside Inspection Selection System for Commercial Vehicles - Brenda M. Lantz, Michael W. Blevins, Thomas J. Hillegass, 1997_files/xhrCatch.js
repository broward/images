var openXhr=window.XMLHttpRequest.prototype.open,sendXhr=window.XMLHttpRequest.prototype.send;function openReplacement(method,url,async,user,password){if(async===undefined)async=true;this._url=url;return openXhr.apply(this,arguments);}
function sendReplacement(data){if(this.onreadystatechange){this._onreadystatechange=this.onreadystatechange;}
this.onreadystatechange=onReadyStateChangeReplacement;return sendXhr.apply(this,arguments);}
function onReadyStateChangeReplacement(){if(this.readyState===4&&this.status===200){if(this._url==='/pb/editor/render'){if(typeof(Storage)!=='undefined'){sessionStorage.pbPreview='On';}}
else if(this._url==='/pb/editor/pendingEdits'||this._url==='/pb/editor/editsChanges'){if(typeof(Storage)!=='undefined'){sessionStorage.pbPreview='...';}}}
if(this._onreadystatechange){return this._onreadystatechange.apply(this,arguments);}}
window.XMLHttpRequest.prototype.open=openReplacement;window.XMLHttpRequest.prototype.send=sendReplacement;