(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{12:function(t,e,n){(function(t){var r,o;function i(t){return(i="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}(function(){(function(){(function(){this.Turbolinks={supported:null!=window.history.pushState&&null!=window.requestAnimationFrame&&null!=window.addEventListener,visit:function(t,e){return s.controller.visit(t,e)},clearCache:function(){return s.controller.clearCache()},setProgressBarDelay:function(t){return s.controller.setProgressBarDelay(t)}}}).call(this)}).call(this);var s=this.Turbolinks;(function(){(function(){var t,e,n,r=[].slice;s.copyObject=function(t){var e,n,r;for(e in n={},t)r=t[e],n[e]=r;return n},s.closest=function(e,n){return t.call(e,n)},t=function(){var t;return null!=(t=document.documentElement.closest)?t:function(t){var n;for(n=this;n;){if(n.nodeType===Node.ELEMENT_NODE&&e.call(n,t))return n;n=n.parentNode}}}(),s.defer=function(t){return setTimeout(t,1)},s.throttle=function(t){var e;return e=null,function(){var n;return n=1<=arguments.length?r.call(arguments,0):[],null!=e?e:e=requestAnimationFrame(function(r){return function(){return e=null,t.apply(r,n)}}(this))}},s.dispatch=function(t,e){var r,o,i,s,a,u;return u=(a=null!=e?e:{}).target,r=a.cancelable,o=a.data,(i=document.createEvent("Events")).initEvent(t,!0,!0===r),i.data=null!=o?o:{},i.cancelable&&!n&&(s=i.preventDefault,i.preventDefault=function(){return this.defaultPrevented||Object.defineProperty(this,"defaultPrevented",{get:function(){return!0}}),s.call(this)}),(null!=u?u:document).dispatchEvent(i),i},n=function(){var t;return(t=document.createEvent("Events")).initEvent("test",!0,!0),t.preventDefault(),t.defaultPrevented}(),s.match=function(t,n){return e.call(t,n)},e=function(){var t,e,n,r;return null!=(e=null!=(n=null!=(r=(t=document.documentElement).matchesSelector)?r:t.webkitMatchesSelector)?n:t.msMatchesSelector)?e:t.mozMatchesSelector}(),s.uuid=function(){var t,e,n;for(n="",t=e=1;36>=e;t=++e)n+=9===t||14===t||19===t||24===t?"-":15===t?"4":20===t?(Math.floor(4*Math.random())+8).toString(16):Math.floor(15*Math.random()).toString(16);return n}}).call(this),function(){s.Location=function(){function t(t){var e,n;null==t&&(t=""),(n=document.createElement("a")).href=t.toString(),this.absoluteURL=n.href,2>(e=n.hash.length)?this.requestURL=this.absoluteURL:(this.requestURL=this.absoluteURL.slice(0,-e),this.anchor=n.hash.slice(1))}var e,n,r,o;return t.wrap=function(t){return t instanceof this?t:new this(t)},t.prototype.getOrigin=function(){return this.absoluteURL.split("/",3).join("/")},t.prototype.getPath=function(){var t,e;return null!=(t=null!=(e=this.requestURL.match(/\/\/[^\/]*(\/[^?;]*)/))?e[1]:void 0)?t:"/"},t.prototype.getPathComponents=function(){return this.getPath().split("/").slice(1)},t.prototype.getLastPathComponent=function(){return this.getPathComponents().slice(-1)[0]},t.prototype.getExtension=function(){var t,e;return null!=(t=null!=(e=this.getLastPathComponent().match(/\.[^.]*$/))?e[0]:void 0)?t:""},t.prototype.isHTML=function(){return this.getExtension().match(/^(?:|\.(?:htm|html|xhtml))$/)},t.prototype.isPrefixedBy=function(t){var e;return e=n(t),this.isEqualTo(t)||o(this.absoluteURL,e)},t.prototype.isEqualTo=function(t){return this.absoluteURL===(null!=t?t.absoluteURL:void 0)},t.prototype.toCacheKey=function(){return this.requestURL},t.prototype.toJSON=function(){return this.absoluteURL},t.prototype.toString=function(){return this.absoluteURL},t.prototype.valueOf=function(){return this.absoluteURL},n=function(t){return e(t.getOrigin()+t.getPath())},e=function(t){return r(t,"/")?t:t+"/"},o=function(t,e){return t.slice(0,e.length)===e},r=function(t,e){return t.slice(-e.length)===e},t}()}.call(this),function(){var t=function(t,e){return function(){return t.apply(e,arguments)}};s.HttpRequest=function(){function e(e,n,r){this.delegate=e,this.requestCanceled=t(this.requestCanceled,this),this.requestTimedOut=t(this.requestTimedOut,this),this.requestFailed=t(this.requestFailed,this),this.requestLoaded=t(this.requestLoaded,this),this.requestProgressed=t(this.requestProgressed,this),this.url=s.Location.wrap(n).requestURL,this.referrer=s.Location.wrap(r).absoluteURL,this.createXHR()}return e.NETWORK_FAILURE=0,e.TIMEOUT_FAILURE=-1,e.timeout=60,e.prototype.send=function(){var t;return this.xhr&&!this.sent?(this.notifyApplicationBeforeRequestStart(),this.setProgress(0),this.xhr.send(),this.sent=!0,"function"==typeof(t=this.delegate).requestStarted?t.requestStarted():void 0):void 0},e.prototype.cancel=function(){return this.xhr&&this.sent?this.xhr.abort():void 0},e.prototype.requestProgressed=function(t){return t.lengthComputable?this.setProgress(t.loaded/t.total):void 0},e.prototype.requestLoaded=function(){return this.endRequest(function(t){return function(){var e;return 200<=(e=t.xhr.status)&&300>e?t.delegate.requestCompletedWithResponse(t.xhr.responseText,t.xhr.getResponseHeader("Turbolinks-Location")):(t.failed=!0,t.delegate.requestFailedWithStatusCode(t.xhr.status,t.xhr.responseText))}}(this))},e.prototype.requestFailed=function(){return this.endRequest(function(t){return function(){return t.failed=!0,t.delegate.requestFailedWithStatusCode(t.constructor.NETWORK_FAILURE)}}(this))},e.prototype.requestTimedOut=function(){return this.endRequest(function(t){return function(){return t.failed=!0,t.delegate.requestFailedWithStatusCode(t.constructor.TIMEOUT_FAILURE)}}(this))},e.prototype.requestCanceled=function(){return this.endRequest()},e.prototype.notifyApplicationBeforeRequestStart=function(){return s.dispatch("turbolinks:request-start",{data:{url:this.url,xhr:this.xhr}})},e.prototype.notifyApplicationAfterRequestEnd=function(){return s.dispatch("turbolinks:request-end",{data:{url:this.url,xhr:this.xhr}})},e.prototype.createXHR=function(){return this.xhr=new XMLHttpRequest,this.xhr.open("GET",this.url,!0),this.xhr.timeout=1e3*this.constructor.timeout,this.xhr.setRequestHeader("Accept","text/html, application/xhtml+xml"),this.xhr.setRequestHeader("Turbolinks-Referrer",this.referrer),this.xhr.onprogress=this.requestProgressed,this.xhr.onload=this.requestLoaded,this.xhr.onerror=this.requestFailed,this.xhr.ontimeout=this.requestTimedOut,this.xhr.onabort=this.requestCanceled},e.prototype.endRequest=function(t){return this.xhr?(this.notifyApplicationAfterRequestEnd(),null!=t&&t.call(this),this.destroy()):void 0},e.prototype.setProgress=function(t){var e;return this.progress=t,"function"==typeof(e=this.delegate).requestProgressed?e.requestProgressed(this.progress):void 0},e.prototype.destroy=function(){var t;return this.setProgress(1),"function"==typeof(t=this.delegate).requestFinished&&t.requestFinished(),this.delegate=null,this.xhr=null},e}()}.call(this),function(){s.ProgressBar=function(){function t(){this.trickle=function(t,e){return function(){return t.apply(e,arguments)}}(this.trickle,this),this.stylesheetElement=this.createStylesheetElement(),this.progressElement=this.createProgressElement()}var e;return e=300,t.defaultCSS=".turbolinks-progress-bar {\n  position: fixed;\n  display: block;\n  top: 0;\n  left: 0;\n  height: 3px;\n  background: #0076ff;\n  z-index: 9999;\n  transition: width 300ms ease-out, opacity 150ms 150ms ease-in;\n  transform: translate3d(0, 0, 0);\n}",t.prototype.show=function(){return this.visible?void 0:(this.visible=!0,this.installStylesheetElement(),this.installProgressElement(),this.startTrickling())},t.prototype.hide=function(){return this.visible&&!this.hiding?(this.hiding=!0,this.fadeProgressElement(function(t){return function(){return t.uninstallProgressElement(),t.stopTrickling(),t.visible=!1,t.hiding=!1}}(this))):void 0},t.prototype.setValue=function(t){return this.value=t,this.refresh()},t.prototype.installStylesheetElement=function(){return document.head.insertBefore(this.stylesheetElement,document.head.firstChild)},t.prototype.installProgressElement=function(){return this.progressElement.style.width=0,this.progressElement.style.opacity=1,document.documentElement.insertBefore(this.progressElement,document.body),this.refresh()},t.prototype.fadeProgressElement=function(t){return this.progressElement.style.opacity=0,setTimeout(t,450)},t.prototype.uninstallProgressElement=function(){return this.progressElement.parentNode?document.documentElement.removeChild(this.progressElement):void 0},t.prototype.startTrickling=function(){return null!=this.trickleInterval?this.trickleInterval:this.trickleInterval=setInterval(this.trickle,e)},t.prototype.stopTrickling=function(){return clearInterval(this.trickleInterval),this.trickleInterval=null},t.prototype.trickle=function(){return this.setValue(this.value+Math.random()/100)},t.prototype.refresh=function(){return requestAnimationFrame(function(t){return function(){return t.progressElement.style.width=10+90*t.value+"%"}}(this))},t.prototype.createStylesheetElement=function(){var t;return(t=document.createElement("style")).type="text/css",t.textContent=this.constructor.defaultCSS,t},t.prototype.createProgressElement=function(){var t;return(t=document.createElement("div")).className="turbolinks-progress-bar",t},t}()}.call(this),function(){s.BrowserAdapter=function(){function t(t){this.controller=t,this.showProgressBar=function(t,e){return function(){return t.apply(e,arguments)}}(this.showProgressBar,this),this.progressBar=new s.ProgressBar}var e,n,r;return r=s.HttpRequest,e=r.NETWORK_FAILURE,n=r.TIMEOUT_FAILURE,t.prototype.visitProposedToLocationWithAction=function(t,e){return this.controller.startVisitToLocationWithAction(t,e)},t.prototype.visitStarted=function(t){return t.issueRequest(),t.changeHistory(),t.loadCachedSnapshot()},t.prototype.visitRequestStarted=function(t){return this.progressBar.setValue(0),t.hasCachedSnapshot()||"restore"!==t.action?this.showProgressBarAfterDelay():this.showProgressBar()},t.prototype.visitRequestProgressed=function(t){return this.progressBar.setValue(t.progress)},t.prototype.visitRequestCompleted=function(t){return t.loadResponse()},t.prototype.visitRequestFailedWithStatusCode=function(t,r){switch(r){case e:case n:return this.reload();default:return t.loadResponse()}},t.prototype.visitRequestFinished=function(t){return this.hideProgressBar()},t.prototype.visitCompleted=function(t){return t.followRedirect()},t.prototype.pageInvalidated=function(){return this.reload()},t.prototype.showProgressBarAfterDelay=function(){return this.progressBarTimeout=setTimeout(this.showProgressBar,this.controller.progressBarDelay)},t.prototype.showProgressBar=function(){return this.progressBar.show()},t.prototype.hideProgressBar=function(){return this.progressBar.hide(),clearTimeout(this.progressBarTimeout)},t.prototype.reload=function(){return window.location.reload()},t}()}.call(this),function(){var t=function(t,e){return function(){return t.apply(e,arguments)}};s.History=function(){function e(e){this.delegate=e,this.onPageLoad=t(this.onPageLoad,this),this.onPopState=t(this.onPopState,this)}return e.prototype.start=function(){return this.started?void 0:(addEventListener("popstate",this.onPopState,!1),addEventListener("load",this.onPageLoad,!1),this.started=!0)},e.prototype.stop=function(){return this.started?(removeEventListener("popstate",this.onPopState,!1),removeEventListener("load",this.onPageLoad,!1),this.started=!1):void 0},e.prototype.push=function(t,e){return t=s.Location.wrap(t),this.update("push",t,e)},e.prototype.replace=function(t,e){return t=s.Location.wrap(t),this.update("replace",t,e)},e.prototype.onPopState=function(t){var e,n,r,o;return this.shouldHandlePopState()&&(o=null!=(n=t.state)?n.turbolinks:void 0)?(e=s.Location.wrap(window.location),r=o.restorationIdentifier,this.delegate.historyPoppedToLocationWithRestorationIdentifier(e,r)):void 0},e.prototype.onPageLoad=function(t){return s.defer(function(t){return function(){return t.pageLoaded=!0}}(this))},e.prototype.shouldHandlePopState=function(){return this.pageIsLoaded()},e.prototype.pageIsLoaded=function(){return this.pageLoaded||"complete"===document.readyState},e.prototype.update=function(t,e,n){var r;return r={turbolinks:{restorationIdentifier:n}},history[t+"State"](r,null,e)},e}()}.call(this),function(){s.HeadDetails=function(){function t(t){var e,n,r,s,a;for(this.elements={},n=0,s=t.length;s>n;n++)(a=t[n]).nodeType===Node.ELEMENT_NODE&&(r=a.outerHTML,(null!=(e=this.elements)[r]?e[r]:e[r]={type:i(a),tracked:o(a),elements:[]}).elements.push(a))}var e,n,r,o,i;return t.fromHeadElement=function(t){var e;return new this(null!=(e=null!=t?t.childNodes:void 0)?e:[])},t.prototype.hasElementWithKey=function(t){return t in this.elements},t.prototype.getTrackedElementSignature=function(){var t;return function(){var e,n;for(t in n=[],e=this.elements)e[t].tracked&&n.push(t);return n}.call(this).join("")},t.prototype.getScriptElementsNotInDetails=function(t){return this.getElementsMatchingTypeNotInDetails("script",t)},t.prototype.getStylesheetElementsNotInDetails=function(t){return this.getElementsMatchingTypeNotInDetails("stylesheet",t)},t.prototype.getElementsMatchingTypeNotInDetails=function(t,e){var n,r,o,i,s,a;for(r in s=[],o=this.elements)a=(i=o[r]).type,n=i.elements,a!==t||e.hasElementWithKey(r)||s.push(n[0]);return s},t.prototype.getProvisionalElements=function(){var t,e,n,r,o,i,s;for(e in n=[],r=this.elements)s=(o=r[e]).type,i=o.tracked,t=o.elements,null!=s||i?t.length>1&&n.push.apply(n,t.slice(1)):n.push.apply(n,t);return n},t.prototype.getMetaValue=function(t){var e;return null!=(e=this.findMetaElementByName(t))?e.getAttribute("content"):void 0},t.prototype.findMetaElementByName=function(t){var n,r,o,i;for(o in n=void 0,i=this.elements)r=i[o].elements,e(r[0],t)&&(n=r[0]);return n},i=function(t){return n(t)?"script":r(t)?"stylesheet":void 0},o=function(t){return"reload"===t.getAttribute("data-turbolinks-track")},n=function(t){return"script"===t.tagName.toLowerCase()},r=function(t){var e;return"style"===(e=t.tagName.toLowerCase())||"link"===e&&"stylesheet"===t.getAttribute("rel")},e=function(t,e){return"meta"===t.tagName.toLowerCase()&&t.getAttribute("name")===e},t}()}.call(this),function(){s.Snapshot=function(){function t(t,e){this.headDetails=t,this.bodyElement=e}return t.wrap=function(t){return t instanceof this?t:"string"==typeof t?this.fromHTMLString(t):this.fromHTMLElement(t)},t.fromHTMLString=function(t){var e;return(e=document.createElement("html")).innerHTML=t,this.fromHTMLElement(e)},t.fromHTMLElement=function(t){var e,n,r;return n=t.querySelector("head"),e=null!=(r=t.querySelector("body"))?r:document.createElement("body"),new this(s.HeadDetails.fromHeadElement(n),e)},t.prototype.clone=function(){return new this.constructor(this.headDetails,this.bodyElement.cloneNode(!0))},t.prototype.getRootLocation=function(){var t,e;return e=null!=(t=this.getSetting("root"))?t:"/",new s.Location(e)},t.prototype.getCacheControlValue=function(){return this.getSetting("cache-control")},t.prototype.getElementForAnchor=function(t){try{return this.bodyElement.querySelector("[id='"+t+"'], a[name='"+t+"']")}catch(s){}},t.prototype.getPermanentElements=function(){return this.bodyElement.querySelectorAll("[id][data-turbolinks-permanent]")},t.prototype.getPermanentElementById=function(t){return this.bodyElement.querySelector("#"+t+"[data-turbolinks-permanent]")},t.prototype.getPermanentElementsPresentInSnapshot=function(t){var e,n,r,o,i;for(i=[],n=0,r=(o=this.getPermanentElements()).length;r>n;n++)e=o[n],t.getPermanentElementById(e.id)&&i.push(e);return i},t.prototype.findFirstAutofocusableElement=function(){return this.bodyElement.querySelector("[autofocus]")},t.prototype.hasAnchor=function(t){return null!=this.getElementForAnchor(t)},t.prototype.isPreviewable=function(){return"no-preview"!==this.getCacheControlValue()},t.prototype.isCacheable=function(){return"no-cache"!==this.getCacheControlValue()},t.prototype.isVisitable=function(){return"reload"!==this.getSetting("visit-control")},t.prototype.getSetting=function(t){return this.headDetails.getMetaValue("turbolinks-"+t)},t}()}.call(this),function(){var t=[].slice;s.Renderer=function(){function e(){}var n;return e.render=function(){var e,n,r;return n=arguments[0],e=arguments[1],(r=function(t,e,n){n.prototype=t.prototype;var r=new n,o=t.apply(r,e);return Object(o)===o?o:r}(this,3<=arguments.length?t.call(arguments,2):[],(function(){}))).delegate=n,r.render(e),r},e.prototype.renderView=function(t){return this.delegate.viewWillRender(this.newBody),t(),this.delegate.viewRendered(this.newBody)},e.prototype.invalidateView=function(){return this.delegate.viewInvalidated()},e.prototype.createScriptElement=function(t){var e;return"false"===t.getAttribute("data-turbolinks-eval")?t:((e=document.createElement("script")).textContent=t.textContent,e.async=!1,n(e,t),e)},n=function(t,e){var n,r,o,i,s,a,u;for(a=[],n=0,r=(i=e.attributes).length;r>n;n++)o=(s=i[n]).name,u=s.value,a.push(t.setAttribute(o,u));return a},e}()}.call(this),function(){var t,e,n=function(t,e){function n(){this.constructor=t}for(var o in e)r.call(e,o)&&(t[o]=e[o]);return n.prototype=e.prototype,t.prototype=new n,t.__super__=e.prototype,t},r={}.hasOwnProperty;s.SnapshotRenderer=function(r){function o(t,e,n){this.currentSnapshot=t,this.newSnapshot=e,this.isPreview=n,this.currentHeadDetails=this.currentSnapshot.headDetails,this.newHeadDetails=this.newSnapshot.headDetails,this.currentBody=this.currentSnapshot.bodyElement,this.newBody=this.newSnapshot.bodyElement}return n(o,r),o.prototype.render=function(t){return this.shouldRender()?(this.mergeHead(),this.renderView(function(e){return function(){return e.replaceBody(),e.isPreview||e.focusFirstAutofocusableElement(),t()}}(this))):this.invalidateView()},o.prototype.mergeHead=function(){return this.copyNewHeadStylesheetElements(),this.copyNewHeadScriptElements(),this.removeCurrentHeadProvisionalElements(),this.copyNewHeadProvisionalElements()},o.prototype.replaceBody=function(){var t;return t=this.relocateCurrentBodyPermanentElements(),this.activateNewBodyScriptElements(),this.assignNewBody(),this.replacePlaceholderElementsWithClonedPermanentElements(t)},o.prototype.shouldRender=function(){return this.newSnapshot.isVisitable()&&this.trackedElementsAreIdentical()},o.prototype.trackedElementsAreIdentical=function(){return this.currentHeadDetails.getTrackedElementSignature()===this.newHeadDetails.getTrackedElementSignature()},o.prototype.copyNewHeadStylesheetElements=function(){var t,e,n,r,o;for(o=[],e=0,n=(r=this.getNewHeadStylesheetElements()).length;n>e;e++)t=r[e],o.push(document.head.appendChild(t));return o},o.prototype.copyNewHeadScriptElements=function(){var t,e,n,r,o;for(o=[],e=0,n=(r=this.getNewHeadScriptElements()).length;n>e;e++)t=r[e],o.push(document.head.appendChild(this.createScriptElement(t)));return o},o.prototype.removeCurrentHeadProvisionalElements=function(){var t,e,n,r,o;for(o=[],e=0,n=(r=this.getCurrentHeadProvisionalElements()).length;n>e;e++)t=r[e],o.push(document.head.removeChild(t));return o},o.prototype.copyNewHeadProvisionalElements=function(){var t,e,n,r,o;for(o=[],e=0,n=(r=this.getNewHeadProvisionalElements()).length;n>e;e++)t=r[e],o.push(document.head.appendChild(t));return o},o.prototype.relocateCurrentBodyPermanentElements=function(){var n,r,o,i,s,a,u;for(u=[],n=0,r=(a=this.getCurrentBodyPermanentElements()).length;r>n;n++)i=a[n],s=t(i),o=this.newSnapshot.getPermanentElementById(i.id),e(i,s.element),e(o,i),u.push(s);return u},o.prototype.replacePlaceholderElementsWithClonedPermanentElements=function(t){var n,r,o,i,s,a;for(a=[],o=0,i=t.length;i>o;o++)r=(s=t[o]).element,n=s.permanentElement.cloneNode(!0),a.push(e(r,n));return a},o.prototype.activateNewBodyScriptElements=function(){var t,n,r,o,i,s;for(s=[],n=0,o=(i=this.getNewBodyScriptElements()).length;o>n;n++)r=i[n],t=this.createScriptElement(r),s.push(e(r,t));return s},o.prototype.assignNewBody=function(){return document.body=this.newBody},o.prototype.focusFirstAutofocusableElement=function(){var t;return null!=(t=this.newSnapshot.findFirstAutofocusableElement())?t.focus():void 0},o.prototype.getNewHeadStylesheetElements=function(){return this.newHeadDetails.getStylesheetElementsNotInDetails(this.currentHeadDetails)},o.prototype.getNewHeadScriptElements=function(){return this.newHeadDetails.getScriptElementsNotInDetails(this.currentHeadDetails)},o.prototype.getCurrentHeadProvisionalElements=function(){return this.currentHeadDetails.getProvisionalElements()},o.prototype.getNewHeadProvisionalElements=function(){return this.newHeadDetails.getProvisionalElements()},o.prototype.getCurrentBodyPermanentElements=function(){return this.currentSnapshot.getPermanentElementsPresentInSnapshot(this.newSnapshot)},o.prototype.getNewBodyScriptElements=function(){return this.newBody.querySelectorAll("script")},o}(s.Renderer),t=function(t){var e;return(e=document.createElement("meta")).setAttribute("name","turbolinks-permanent-placeholder"),e.setAttribute("content",t.id),{element:e,permanentElement:t}},e=function(t,e){var n;return(n=t.parentNode)?n.replaceChild(e,t):void 0}}.call(this),function(){var t=function(t,n){function r(){this.constructor=t}for(var o in n)e.call(n,o)&&(t[o]=n[o]);return r.prototype=n.prototype,t.prototype=new r,t.__super__=n.prototype,t},e={}.hasOwnProperty;s.ErrorRenderer=function(e){function n(t){var e;(e=document.createElement("html")).innerHTML=t,this.newHead=e.querySelector("head"),this.newBody=e.querySelector("body")}return t(n,e),n.prototype.render=function(t){return this.renderView(function(e){return function(){return e.replaceHeadAndBody(),e.activateBodyScriptElements(),t()}}(this))},n.prototype.replaceHeadAndBody=function(){var t,e;return e=document.head,t=document.body,e.parentNode.replaceChild(this.newHead,e),t.parentNode.replaceChild(this.newBody,t)},n.prototype.activateBodyScriptElements=function(){var t,e,n,r,o,i;for(i=[],e=0,n=(r=this.getScriptElements()).length;n>e;e++)o=r[e],t=this.createScriptElement(o),i.push(o.parentNode.replaceChild(t,o));return i},n.prototype.getScriptElements=function(){return document.documentElement.querySelectorAll("script")},n}(s.Renderer)}.call(this),function(){s.View=function(){function t(t){this.delegate=t,this.htmlElement=document.documentElement}return t.prototype.getRootLocation=function(){return this.getSnapshot().getRootLocation()},t.prototype.getElementForAnchor=function(t){return this.getSnapshot().getElementForAnchor(t)},t.prototype.getSnapshot=function(){return s.Snapshot.fromHTMLElement(this.htmlElement)},t.prototype.render=function(t,e){var n,r,o;return o=t.snapshot,n=t.error,r=t.isPreview,this.markAsPreview(r),null!=o?this.renderSnapshot(o,r,e):this.renderError(n,e)},t.prototype.markAsPreview=function(t){return t?this.htmlElement.setAttribute("data-turbolinks-preview",""):this.htmlElement.removeAttribute("data-turbolinks-preview")},t.prototype.renderSnapshot=function(t,e,n){return s.SnapshotRenderer.render(this.delegate,n,this.getSnapshot(),s.Snapshot.wrap(t),e)},t.prototype.renderError=function(t,e){return s.ErrorRenderer.render(this.delegate,e,t)},t}()}.call(this),function(){s.ScrollManager=function(){function t(t){this.delegate=t,this.onScroll=function(t,e){return function(){return t.apply(e,arguments)}}(this.onScroll,this),this.onScroll=s.throttle(this.onScroll)}return t.prototype.start=function(){return this.started?void 0:(addEventListener("scroll",this.onScroll,!1),this.onScroll(),this.started=!0)},t.prototype.stop=function(){return this.started?(removeEventListener("scroll",this.onScroll,!1),this.started=!1):void 0},t.prototype.scrollToElement=function(t){return t.scrollIntoView()},t.prototype.scrollToPosition=function(t){var e,n;return e=t.x,n=t.y,window.scrollTo(e,n)},t.prototype.onScroll=function(t){return this.updatePosition({x:window.pageXOffset,y:window.pageYOffset})},t.prototype.updatePosition=function(t){var e;return this.position=t,null!=(e=this.delegate)?e.scrollPositionChanged(this.position):void 0},t}()}.call(this),function(){s.SnapshotCache=function(){function t(t){this.size=t,this.keys=[],this.snapshots={}}var e;return t.prototype.has=function(t){return e(t)in this.snapshots},t.prototype.get=function(t){var e;if(this.has(t))return e=this.read(t),this.touch(t),e},t.prototype.put=function(t,e){return this.write(t,e),this.touch(t),e},t.prototype.read=function(t){var n;return n=e(t),this.snapshots[n]},t.prototype.write=function(t,n){var r;return r=e(t),this.snapshots[r]=n},t.prototype.touch=function(t){var n,r;return r=e(t),(n=this.keys.indexOf(r))>-1&&this.keys.splice(n,1),this.keys.unshift(r),this.trim()},t.prototype.trim=function(){var t,e,n,r,o;for(o=[],t=0,n=(r=this.keys.splice(this.size)).length;n>t;t++)e=r[t],o.push(delete this.snapshots[e]);return o},e=function(t){return s.Location.wrap(t).toCacheKey()},t}()}.call(this),function(){s.Visit=function(){function t(t,e,n){this.controller=t,this.action=n,this.performScroll=function(t,e){return function(){return t.apply(e,arguments)}}(this.performScroll,this),this.identifier=s.uuid(),this.location=s.Location.wrap(e),this.adapter=this.controller.adapter,this.state="initialized",this.timingMetrics={}}var e;return t.prototype.start=function(){return"initialized"===this.state?(this.recordTimingMetric("visitStart"),this.state="started",this.adapter.visitStarted(this)):void 0},t.prototype.cancel=function(){var t;return"started"===this.state?(null!=(t=this.request)&&t.cancel(),this.cancelRender(),this.state="canceled"):void 0},t.prototype.complete=function(){var t;return"started"===this.state?(this.recordTimingMetric("visitEnd"),this.state="completed","function"==typeof(t=this.adapter).visitCompleted&&t.visitCompleted(this),this.controller.visitCompleted(this)):void 0},t.prototype.fail=function(){var t;return"started"===this.state?(this.state="failed","function"==typeof(t=this.adapter).visitFailed?t.visitFailed(this):void 0):void 0},t.prototype.changeHistory=function(){var t,n;return this.historyChanged?void 0:(t=this.location.isEqualTo(this.referrer)?"replace":this.action,n=e(t),this.controller[n](this.location,this.restorationIdentifier),this.historyChanged=!0)},t.prototype.issueRequest=function(){return this.shouldIssueRequest()&&null==this.request?(this.progress=0,this.request=new s.HttpRequest(this,this.location,this.referrer),this.request.send()):void 0},t.prototype.getCachedSnapshot=function(){var t;return!(t=this.controller.getCachedSnapshotForLocation(this.location))||null!=this.location.anchor&&!t.hasAnchor(this.location.anchor)||"restore"!==this.action&&!t.isPreviewable()?void 0:t},t.prototype.hasCachedSnapshot=function(){return null!=this.getCachedSnapshot()},t.prototype.loadCachedSnapshot=function(){var t,e;return(e=this.getCachedSnapshot())?(t=this.shouldIssueRequest(),this.render((function(){var n;return this.cacheSnapshot(),this.controller.render({snapshot:e,isPreview:t},this.performScroll),"function"==typeof(n=this.adapter).visitRendered&&n.visitRendered(this),t?void 0:this.complete()}))):void 0},t.prototype.loadResponse=function(){return null!=this.response?this.render((function(){var t,e;return this.cacheSnapshot(),this.request.failed?(this.controller.render({error:this.response},this.performScroll),"function"==typeof(t=this.adapter).visitRendered&&t.visitRendered(this),this.fail()):(this.controller.render({snapshot:this.response},this.performScroll),"function"==typeof(e=this.adapter).visitRendered&&e.visitRendered(this),this.complete())})):void 0},t.prototype.followRedirect=function(){return this.redirectedToLocation&&!this.followedRedirect?(this.location=this.redirectedToLocation,this.controller.replaceHistoryWithLocationAndRestorationIdentifier(this.redirectedToLocation,this.restorationIdentifier),this.followedRedirect=!0):void 0},t.prototype.requestStarted=function(){var t;return this.recordTimingMetric("requestStart"),"function"==typeof(t=this.adapter).visitRequestStarted?t.visitRequestStarted(this):void 0},t.prototype.requestProgressed=function(t){var e;return this.progress=t,"function"==typeof(e=this.adapter).visitRequestProgressed?e.visitRequestProgressed(this):void 0},t.prototype.requestCompletedWithResponse=function(t,e){return this.response=t,null!=e&&(this.redirectedToLocation=s.Location.wrap(e)),this.adapter.visitRequestCompleted(this)},t.prototype.requestFailedWithStatusCode=function(t,e){return this.response=e,this.adapter.visitRequestFailedWithStatusCode(this,t)},t.prototype.requestFinished=function(){var t;return this.recordTimingMetric("requestEnd"),"function"==typeof(t=this.adapter).visitRequestFinished?t.visitRequestFinished(this):void 0},t.prototype.performScroll=function(){return this.scrolled?void 0:("restore"===this.action?this.scrollToRestoredPosition()||this.scrollToTop():this.scrollToAnchor()||this.scrollToTop(),this.scrolled=!0)},t.prototype.scrollToRestoredPosition=function(){var t,e;return null!=(t=null!=(e=this.restorationData)?e.scrollPosition:void 0)?(this.controller.scrollToPosition(t),!0):void 0},t.prototype.scrollToAnchor=function(){return null!=this.location.anchor?(this.controller.scrollToAnchor(this.location.anchor),!0):void 0},t.prototype.scrollToTop=function(){return this.controller.scrollToPosition({x:0,y:0})},t.prototype.recordTimingMetric=function(t){var e;return null!=(e=this.timingMetrics)[t]?e[t]:e[t]=(new Date).getTime()},t.prototype.getTimingMetrics=function(){return s.copyObject(this.timingMetrics)},e=function(t){switch(t){case"replace":return"replaceHistoryWithLocationAndRestorationIdentifier";case"advance":case"restore":return"pushHistoryWithLocationAndRestorationIdentifier"}},t.prototype.shouldIssueRequest=function(){return"restore"!==this.action||!this.hasCachedSnapshot()},t.prototype.cacheSnapshot=function(){return this.snapshotCached?void 0:(this.controller.cacheSnapshot(),this.snapshotCached=!0)},t.prototype.render=function(t){return this.cancelRender(),this.frame=requestAnimationFrame(function(e){return function(){return e.frame=null,t.call(e)}}(this))},t.prototype.cancelRender=function(){return this.frame?cancelAnimationFrame(this.frame):void 0},t}()}.call(this),function(){var t=function(t,e){return function(){return t.apply(e,arguments)}};s.Controller=function(){function e(){this.clickBubbled=t(this.clickBubbled,this),this.clickCaptured=t(this.clickCaptured,this),this.pageLoaded=t(this.pageLoaded,this),this.history=new s.History(this),this.view=new s.View(this),this.scrollManager=new s.ScrollManager(this),this.restorationData={},this.clearCache(),this.setProgressBarDelay(500)}return e.prototype.start=function(){return s.supported&&!this.started?(addEventListener("click",this.clickCaptured,!0),addEventListener("DOMContentLoaded",this.pageLoaded,!1),this.scrollManager.start(),this.startHistory(),this.started=!0,this.enabled=!0):void 0},e.prototype.disable=function(){return this.enabled=!1},e.prototype.stop=function(){return this.started?(removeEventListener("click",this.clickCaptured,!0),removeEventListener("DOMContentLoaded",this.pageLoaded,!1),this.scrollManager.stop(),this.stopHistory(),this.started=!1):void 0},e.prototype.clearCache=function(){return this.cache=new s.SnapshotCache(10)},e.prototype.visit=function(t,e){var n,r;return null==e&&(e={}),t=s.Location.wrap(t),this.applicationAllowsVisitingLocation(t)?this.locationIsVisitable(t)?(n=null!=(r=e.action)?r:"advance",this.adapter.visitProposedToLocationWithAction(t,n)):window.location=t:void 0},e.prototype.startVisitToLocationWithAction=function(t,e,n){var r;return s.supported?(r=this.getRestorationDataForIdentifier(n),this.startVisit(t,e,{restorationData:r})):window.location=t},e.prototype.setProgressBarDelay=function(t){return this.progressBarDelay=t},e.prototype.startHistory=function(){return this.location=s.Location.wrap(window.location),this.restorationIdentifier=s.uuid(),this.history.start(),this.history.replace(this.location,this.restorationIdentifier)},e.prototype.stopHistory=function(){return this.history.stop()},e.prototype.pushHistoryWithLocationAndRestorationIdentifier=function(t,e){return this.restorationIdentifier=e,this.location=s.Location.wrap(t),this.history.push(this.location,this.restorationIdentifier)},e.prototype.replaceHistoryWithLocationAndRestorationIdentifier=function(t,e){return this.restorationIdentifier=e,this.location=s.Location.wrap(t),this.history.replace(this.location,this.restorationIdentifier)},e.prototype.historyPoppedToLocationWithRestorationIdentifier=function(t,e){var n;return this.restorationIdentifier=e,this.enabled?(n=this.getRestorationDataForIdentifier(this.restorationIdentifier),this.startVisit(t,"restore",{restorationIdentifier:this.restorationIdentifier,restorationData:n,historyChanged:!0}),this.location=s.Location.wrap(t)):this.adapter.pageInvalidated()},e.prototype.getCachedSnapshotForLocation=function(t){var e;return null!=(e=this.cache.get(t))?e.clone():void 0},e.prototype.shouldCacheSnapshot=function(){return this.view.getSnapshot().isCacheable()},e.prototype.cacheSnapshot=function(){var t,e;return this.shouldCacheSnapshot()?(this.notifyApplicationBeforeCachingSnapshot(),e=this.view.getSnapshot(),t=this.lastRenderedLocation,s.defer(function(n){return function(){return n.cache.put(t,e.clone())}}(this))):void 0},e.prototype.scrollToAnchor=function(t){var e;return(e=this.view.getElementForAnchor(t))?this.scrollToElement(e):this.scrollToPosition({x:0,y:0})},e.prototype.scrollToElement=function(t){return this.scrollManager.scrollToElement(t)},e.prototype.scrollToPosition=function(t){return this.scrollManager.scrollToPosition(t)},e.prototype.scrollPositionChanged=function(t){return this.getCurrentRestorationData().scrollPosition=t},e.prototype.render=function(t,e){return this.view.render(t,e)},e.prototype.viewInvalidated=function(){return this.adapter.pageInvalidated()},e.prototype.viewWillRender=function(t){return this.notifyApplicationBeforeRender(t)},e.prototype.viewRendered=function(){return this.lastRenderedLocation=this.currentVisit.location,this.notifyApplicationAfterRender()},e.prototype.pageLoaded=function(){return this.lastRenderedLocation=this.location,this.notifyApplicationAfterPageLoad()},e.prototype.clickCaptured=function(){return removeEventListener("click",this.clickBubbled,!1),addEventListener("click",this.clickBubbled,!1)},e.prototype.clickBubbled=function(t){var e,n,r;return this.enabled&&this.clickEventIsSignificant(t)&&(n=this.getVisitableLinkForNode(t.target))&&(r=this.getVisitableLocationForLink(n))&&this.applicationAllowsFollowingLinkToLocation(n,r)?(t.preventDefault(),e=this.getActionForLink(n),this.visit(r,{action:e})):void 0},e.prototype.applicationAllowsFollowingLinkToLocation=function(t,e){return!this.notifyApplicationAfterClickingLinkToLocation(t,e).defaultPrevented},e.prototype.applicationAllowsVisitingLocation=function(t){return!this.notifyApplicationBeforeVisitingLocation(t).defaultPrevented},e.prototype.notifyApplicationAfterClickingLinkToLocation=function(t,e){return s.dispatch("turbolinks:click",{target:t,data:{url:e.absoluteURL},cancelable:!0})},e.prototype.notifyApplicationBeforeVisitingLocation=function(t){return s.dispatch("turbolinks:before-visit",{data:{url:t.absoluteURL},cancelable:!0})},e.prototype.notifyApplicationAfterVisitingLocation=function(t){return s.dispatch("turbolinks:visit",{data:{url:t.absoluteURL}})},e.prototype.notifyApplicationBeforeCachingSnapshot=function(){return s.dispatch("turbolinks:before-cache")},e.prototype.notifyApplicationBeforeRender=function(t){return s.dispatch("turbolinks:before-render",{data:{newBody:t}})},e.prototype.notifyApplicationAfterRender=function(){return s.dispatch("turbolinks:render")},e.prototype.notifyApplicationAfterPageLoad=function(t){return null==t&&(t={}),s.dispatch("turbolinks:load",{data:{url:this.location.absoluteURL,timing:t}})},e.prototype.startVisit=function(t,e,n){var r;return null!=(r=this.currentVisit)&&r.cancel(),this.currentVisit=this.createVisit(t,e,n),this.currentVisit.start(),this.notifyApplicationAfterVisitingLocation(t)},e.prototype.createVisit=function(t,e,n){var r,o,i,a,u;return a=(o=null!=n?n:{}).restorationIdentifier,i=o.restorationData,r=o.historyChanged,(u=new s.Visit(this,t,e)).restorationIdentifier=null!=a?a:s.uuid(),u.restorationData=s.copyObject(i),u.historyChanged=r,u.referrer=this.location,u},e.prototype.visitCompleted=function(t){return this.notifyApplicationAfterPageLoad(t.getTimingMetrics())},e.prototype.clickEventIsSignificant=function(t){return!(t.defaultPrevented||t.target.isContentEditable||t.which>1||t.altKey||t.ctrlKey||t.metaKey||t.shiftKey)},e.prototype.getVisitableLinkForNode=function(t){return this.nodeIsVisitable(t)?s.closest(t,"a[href]:not([target]):not([download])"):void 0},e.prototype.getVisitableLocationForLink=function(t){var e;return e=new s.Location(t.getAttribute("href")),this.locationIsVisitable(e)?e:void 0},e.prototype.getActionForLink=function(t){var e;return null!=(e=t.getAttribute("data-turbolinks-action"))?e:"advance"},e.prototype.nodeIsVisitable=function(t){var e;return!(e=s.closest(t,"[data-turbolinks]"))||"false"!==e.getAttribute("data-turbolinks")},e.prototype.locationIsVisitable=function(t){return t.isPrefixedBy(this.view.getRootLocation())&&t.isHTML()},e.prototype.getCurrentRestorationData=function(){return this.getRestorationDataForIdentifier(this.restorationIdentifier)},e.prototype.getRestorationDataForIdentifier=function(t){var e;return null!=(e=this.restorationData)[t]?e[t]:e[t]={}},e}()}.call(this),function(){!function(){var t,e;if((t=e=document.currentScript)&&!e.hasAttribute("data-turbolinks-suppress-warning"))for(;t=t.parentNode;)if(t===document.body)return console.warn("You are loading Turbolinks from a <script> element inside the <body> element. This is probably not what you meant to do!\n\nLoad your application\u2019s JavaScript bundle inside the <head> element instead. <script> elements in <body> are evaluated with each page change.\n\nFor more information, see: https://github.com/turbolinks/turbolinks#working-with-script-elements\n\n\u2014\u2014\nSuppress this warning by adding a `data-turbolinks-suppress-warning` attribute to: %s",e.outerHTML)}()}.call(this),function(){var t,e,n;s.start=function(){return e()?(null==s.controller&&(s.controller=t()),s.controller.start()):void 0},e=function(){return null==window.Turbolinks&&(window.Turbolinks=s),n()},t=function(){var t;return t=new s.Controller,t.adapter=new s.BrowserAdapter(t),t},(n=function(){return window.Turbolinks===s})()&&s.start()}.call(this)}).call(this),"object"==i(t)&&t.exports?t.exports=s:void 0===(o="function"===typeof(r=s)?r.call(e,n,e,t):r)||(t.exports=o)}).call(this)}).call(this,n(16)(t))}}]);
//# sourceMappingURL=npm.turbolinks-de12c45b7f1236c25908.chunk.js.map