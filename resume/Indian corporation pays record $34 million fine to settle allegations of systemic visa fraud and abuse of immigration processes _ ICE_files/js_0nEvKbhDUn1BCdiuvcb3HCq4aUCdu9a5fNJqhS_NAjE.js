/*! jQuery v3.6.0 | (c) OpenJS Foundation and other contributors | jquery.org/license */
!function(e,t){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=e.document?t(e,!0):function(e){if(!e.document)throw new Error("jQuery requires a window with a document");return t(e)}:t(e)}("undefined"!=typeof window?window:this,function(C,e){"use strict";var t=[],r=Object.getPrototypeOf,s=t.slice,g=t.flat?function(e){return t.flat.call(e)}:function(e){return t.concat.apply([],e)},u=t.push,i=t.indexOf,n={},o=n.toString,v=n.hasOwnProperty,a=v.toString,l=a.call(Object),y={},m=function(e){return"function"==typeof e&&"number"!=typeof e.nodeType&&"function"!=typeof e.item},x=function(e){return null!=e&&e===e.window},E=C.document,c={type:!0,src:!0,nonce:!0,noModule:!0};function b(e,t,n){var r,i,o=(n=n||E).createElement("script");if(o.text=e,t)for(r in c)(i=t[r]||t.getAttribute&&t.getAttribute(r))&&o.setAttribute(r,i);n.head.appendChild(o).parentNode.removeChild(o)}function w(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?n[o.call(e)]||"object":typeof e}var f="3.6.0",S=function(e,t){return new S.fn.init(e,t)};function p(e){var t=!!e&&"length"in e&&e.length,n=w(e);return!m(e)&&!x(e)&&("array"===n||0===t||"number"==typeof t&&0<t&&t-1 in e)}S.fn=S.prototype={jquery:f,constructor:S,length:0,toArray:function(){return s.call(this)},get:function(e){return null==e?s.call(this):e<0?this[e+this.length]:this[e]},pushStack:function(e){var t=S.merge(this.constructor(),e);return t.prevObject=this,t},each:function(e){return S.each(this,e)},map:function(n){return this.pushStack(S.map(this,function(e,t){return n.call(e,t,e)}))},slice:function(){return this.pushStack(s.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},even:function(){return this.pushStack(S.grep(this,function(e,t){return(t+1)%2}))},odd:function(){return this.pushStack(S.grep(this,function(e,t){return t%2}))},eq:function(e){var t=this.length,n=+e+(e<0?t:0);return this.pushStack(0<=n&&n<t?[this[n]]:[])},end:function(){return this.prevObject||this.constructor()},push:u,sort:t.sort,splice:t.splice},S.extend=S.fn.extend=function(){var e,t,n,r,i,o,a=arguments[0]||{},s=1,u=arguments.length,l=!1;for("boolean"==typeof a&&(l=a,a=arguments[s]||{},s++),"object"==typeof a||m(a)||(a={}),s===u&&(a=this,s--);s<u;s++)if(null!=(e=arguments[s]))for(t in e)r=e[t],"__proto__"!==t&&a!==r&&(l&&r&&(S.isPlainObject(r)||(i=Array.isArray(r)))?(n=a[t],o=i&&!Array.isArray(n)?[]:i||S.isPlainObject(n)?n:{},i=!1,a[t]=S.extend(l,o,r)):void 0!==r&&(a[t]=r));return a},S.extend({expando:"jQuery"+(f+Math.random()).replace(/\D/g,""),isReady:!0,error:function(e){throw new Error(e)},noop:function(){},isPlainObject:function(e){var t,n;return!(!e||"[object Object]"!==o.call(e))&&(!(t=r(e))||"function"==typeof(n=v.call(t,"constructor")&&t.constructor)&&a.call(n)===l)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},globalEval:function(e,t,n){b(e,{nonce:t&&t.nonce},n)},each:function(e,t){var n,r=0;if(p(e)){for(n=e.length;r<n;r++)if(!1===t.call(e[r],r,e[r]))break}else for(r in e)if(!1===t.call(e[r],r,e[r]))break;return e},makeArray:function(e,t){var n=t||[];return null!=e&&(p(Object(e))?S.merge(n,"string"==typeof e?[e]:e):u.call(n,e)),n},inArray:function(e,t,n){return null==t?-1:i.call(t,e,n)},merge:function(e,t){for(var n=+t.length,r=0,i=e.length;r<n;r++)e[i++]=t[r];return e.length=i,e},grep:function(e,t,n){for(var r=[],i=0,o=e.length,a=!n;i<o;i++)!t(e[i],i)!==a&&r.push(e[i]);return r},map:function(e,t,n){var r,i,o=0,a=[];if(p(e))for(r=e.length;o<r;o++)null!=(i=t(e[o],o,n))&&a.push(i);else for(o in e)null!=(i=t(e[o],o,n))&&a.push(i);return g(a)},guid:1,support:y}),"function"==typeof Symbol&&(S.fn[Symbol.iterator]=t[Symbol.iterator]),S.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(e,t){n["[object "+t+"]"]=t.toLowerCase()});var d=function(n){var e,d,b,o,i,h,f,g,w,u,l,T,C,a,E,v,s,c,y,S="sizzle"+1*new Date,p=n.document,k=0,r=0,m=ue(),x=ue(),A=ue(),N=ue(),j=function(e,t){return e===t&&(l=!0),0},D={}.hasOwnProperty,t=[],q=t.pop,L=t.push,H=t.push,O=t.slice,P=function(e,t){for(var n=0,r=e.length;n<r;n++)if(e[n]===t)return n;return-1},R="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",M="[\\x20\\t\\r\\n\\f]",I="(?:\\\\[\\da-fA-F]{1,6}"+M+"?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",W="\\["+M+"*("+I+")(?:"+M+"*([*^$|!~]?=)"+M+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+I+"))|)"+M+"*\\]",F=":("+I+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+W+")*)|.*)\\)|)",B=new RegExp(M+"+","g"),$=new RegExp("^"+M+"+|((?:^|[^\\\\])(?:\\\\.)*)"+M+"+$","g"),_=new RegExp("^"+M+"*,"+M+"*"),z=new RegExp("^"+M+"*([>+~]|"+M+")"+M+"*"),U=new RegExp(M+"|>"),X=new RegExp(F),V=new RegExp("^"+I+"$"),G={ID:new RegExp("^#("+I+")"),CLASS:new RegExp("^\\.("+I+")"),TAG:new RegExp("^("+I+"|[*])"),ATTR:new RegExp("^"+W),PSEUDO:new RegExp("^"+F),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+M+"*(even|odd|(([+-]|)(\\d*)n|)"+M+"*(?:([+-]|)"+M+"*(\\d+)|))"+M+"*\\)|)","i"),bool:new RegExp("^(?:"+R+")$","i"),needsContext:new RegExp("^"+M+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+M+"*((?:-\\d)?\\d*)"+M+"*\\)|)(?=[^-]|$)","i")},Y=/HTML$/i,Q=/^(?:input|select|textarea|button)$/i,J=/^h\d$/i,K=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ee=/[+~]/,te=new RegExp("\\\\[\\da-fA-F]{1,6}"+M+"?|\\\\([^\\r\\n\\f])","g"),ne=function(e,t){var n="0x"+e.slice(1)-65536;return t||(n<0?String.fromCharCode(n+65536):String.fromCharCode(n>>10|55296,1023&n|56320))},re=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,ie=function(e,t){return t?"\0"===e?"\ufffd":e.slice(0,-1)+"\\"+e.charCodeAt(e.length-1).toString(16)+" ":"\\"+e},oe=function(){T()},ae=be(function(e){return!0===e.disabled&&"fieldset"===e.nodeName.toLowerCase()},{dir:"parentNode",next:"legend"});try{H.apply(t=O.call(p.childNodes),p.childNodes),t[p.childNodes.length].nodeType}catch(e){H={apply:t.length?function(e,t){L.apply(e,O.call(t))}:function(e,t){var n=e.length,r=0;while(e[n++]=t[r++]);e.length=n-1}}}function se(t,e,n,r){var i,o,a,s,u,l,c,f=e&&e.ownerDocument,p=e?e.nodeType:9;if(n=n||[],"string"!=typeof t||!t||1!==p&&9!==p&&11!==p)return n;if(!r&&(T(e),e=e||C,E)){if(11!==p&&(u=Z.exec(t)))if(i=u[1]){if(9===p){if(!(a=e.getElementById(i)))return n;if(a.id===i)return n.push(a),n}else if(f&&(a=f.getElementById(i))&&y(e,a)&&a.id===i)return n.push(a),n}else{if(u[2])return H.apply(n,e.getElementsByTagName(t)),n;if((i=u[3])&&d.getElementsByClassName&&e.getElementsByClassName)return H.apply(n,e.getElementsByClassName(i)),n}if(d.qsa&&!N[t+" "]&&(!v||!v.test(t))&&(1!==p||"object"!==e.nodeName.toLowerCase())){if(c=t,f=e,1===p&&(U.test(t)||z.test(t))){(f=ee.test(t)&&ye(e.parentNode)||e)===e&&d.scope||((s=e.getAttribute("id"))?s=s.replace(re,ie):e.setAttribute("id",s=S)),o=(l=h(t)).length;while(o--)l[o]=(s?"#"+s:":scope")+" "+xe(l[o]);c=l.join(",")}try{return H.apply(n,f.querySelectorAll(c)),n}catch(e){N(t,!0)}finally{s===S&&e.removeAttribute("id")}}}return g(t.replace($,"$1"),e,n,r)}function ue(){var r=[];return function e(t,n){return r.push(t+" ")>b.cacheLength&&delete e[r.shift()],e[t+" "]=n}}function le(e){return e[S]=!0,e}function ce(e){var t=C.createElement("fieldset");try{return!!e(t)}catch(e){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function fe(e,t){var n=e.split("|"),r=n.length;while(r--)b.attrHandle[n[r]]=t}function pe(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&e.sourceIndex-t.sourceIndex;if(r)return r;if(n)while(n=n.nextSibling)if(n===t)return-1;return e?1:-1}function de(t){return function(e){return"input"===e.nodeName.toLowerCase()&&e.type===t}}function he(n){return function(e){var t=e.nodeName.toLowerCase();return("input"===t||"button"===t)&&e.type===n}}function ge(t){return function(e){return"form"in e?e.parentNode&&!1===e.disabled?"label"in e?"label"in e.parentNode?e.parentNode.disabled===t:e.disabled===t:e.isDisabled===t||e.isDisabled!==!t&&ae(e)===t:e.disabled===t:"label"in e&&e.disabled===t}}function ve(a){return le(function(o){return o=+o,le(function(e,t){var n,r=a([],e.length,o),i=r.length;while(i--)e[n=r[i]]&&(e[n]=!(t[n]=e[n]))})})}function ye(e){return e&&"undefined"!=typeof e.getElementsByTagName&&e}for(e in d=se.support={},i=se.isXML=function(e){var t=e&&e.namespaceURI,n=e&&(e.ownerDocument||e).documentElement;return!Y.test(t||n&&n.nodeName||"HTML")},T=se.setDocument=function(e){var t,n,r=e?e.ownerDocument||e:p;return r!=C&&9===r.nodeType&&r.documentElement&&(a=(C=r).documentElement,E=!i(C),p!=C&&(n=C.defaultView)&&n.top!==n&&(n.addEventListener?n.addEventListener("unload",oe,!1):n.attachEvent&&n.attachEvent("onunload",oe)),d.scope=ce(function(e){return a.appendChild(e).appendChild(C.createElement("div")),"undefined"!=typeof e.querySelectorAll&&!e.querySelectorAll(":scope fieldset div").length}),d.attributes=ce(function(e){return e.className="i",!e.getAttribute("className")}),d.getElementsByTagName=ce(function(e){return e.appendChild(C.createComment("")),!e.getElementsByTagName("*").length}),d.getElementsByClassName=K.test(C.getElementsByClassName),d.getById=ce(function(e){return a.appendChild(e).id=S,!C.getElementsByName||!C.getElementsByName(S).length}),d.getById?(b.filter.ID=function(e){var t=e.replace(te,ne);return function(e){return e.getAttribute("id")===t}},b.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&E){var n=t.getElementById(e);return n?[n]:[]}}):(b.filter.ID=function(e){var n=e.replace(te,ne);return function(e){var t="undefined"!=typeof e.getAttributeNode&&e.getAttributeNode("id");return t&&t.value===n}},b.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&E){var n,r,i,o=t.getElementById(e);if(o){if((n=o.getAttributeNode("id"))&&n.value===e)return[o];i=t.getElementsByName(e),r=0;while(o=i[r++])if((n=o.getAttributeNode("id"))&&n.value===e)return[o]}return[]}}),b.find.TAG=d.getElementsByTagName?function(e,t){return"undefined"!=typeof t.getElementsByTagName?t.getElementsByTagName(e):d.qsa?t.querySelectorAll(e):void 0}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){while(n=o[i++])1===n.nodeType&&r.push(n);return r}return o},b.find.CLASS=d.getElementsByClassName&&function(e,t){if("undefined"!=typeof t.getElementsByClassName&&E)return t.getElementsByClassName(e)},s=[],v=[],(d.qsa=K.test(C.querySelectorAll))&&(ce(function(e){var t;a.appendChild(e).innerHTML="<a id='"+S+"'></a><select id='"+S+"-\r\\' msallowcapture=''><option selected=''></option></select>",e.querySelectorAll("[msallowcapture^='']").length&&v.push("[*^$]="+M+"*(?:''|\"\")"),e.querySelectorAll("[selected]").length||v.push("\\["+M+"*(?:value|"+R+")"),e.querySelectorAll("[id~="+S+"-]").length||v.push("~="),(t=C.createElement("input")).setAttribute("name",""),e.appendChild(t),e.querySelectorAll("[name='']").length||v.push("\\["+M+"*name"+M+"*="+M+"*(?:''|\"\")"),e.querySelectorAll(":checked").length||v.push(":checked"),e.querySelectorAll("a#"+S+"+*").length||v.push(".#.+[+~]"),e.querySelectorAll("\\\f"),v.push("[\\r\\n\\f]")}),ce(function(e){e.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var t=C.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),e.querySelectorAll("[name=d]").length&&v.push("name"+M+"*[*^$|!~]?="),2!==e.querySelectorAll(":enabled").length&&v.push(":enabled",":disabled"),a.appendChild(e).disabled=!0,2!==e.querySelectorAll(":disabled").length&&v.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),v.push(",.*:")})),(d.matchesSelector=K.test(c=a.matches||a.webkitMatchesSelector||a.mozMatchesSelector||a.oMatchesSelector||a.msMatchesSelector))&&ce(function(e){d.disconnectedMatch=c.call(e,"*"),c.call(e,"[s!='']:x"),s.push("!=",F)}),v=v.length&&new RegExp(v.join("|")),s=s.length&&new RegExp(s.join("|")),t=K.test(a.compareDocumentPosition),y=t||K.test(a.contains)?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)while(t=t.parentNode)if(t===e)return!0;return!1},j=t?function(e,t){if(e===t)return l=!0,0;var n=!e.compareDocumentPosition-!t.compareDocumentPosition;return n||(1&(n=(e.ownerDocument||e)==(t.ownerDocument||t)?e.compareDocumentPosition(t):1)||!d.sortDetached&&t.compareDocumentPosition(e)===n?e==C||e.ownerDocument==p&&y(p,e)?-1:t==C||t.ownerDocument==p&&y(p,t)?1:u?P(u,e)-P(u,t):0:4&n?-1:1)}:function(e,t){if(e===t)return l=!0,0;var n,r=0,i=e.parentNode,o=t.parentNode,a=[e],s=[t];if(!i||!o)return e==C?-1:t==C?1:i?-1:o?1:u?P(u,e)-P(u,t):0;if(i===o)return pe(e,t);n=e;while(n=n.parentNode)a.unshift(n);n=t;while(n=n.parentNode)s.unshift(n);while(a[r]===s[r])r++;return r?pe(a[r],s[r]):a[r]==p?-1:s[r]==p?1:0}),C},se.matches=function(e,t){return se(e,null,null,t)},se.matchesSelector=function(e,t){if(T(e),d.matchesSelector&&E&&!N[t+" "]&&(!s||!s.test(t))&&(!v||!v.test(t)))try{var n=c.call(e,t);if(n||d.disconnectedMatch||e.document&&11!==e.document.nodeType)return n}catch(e){N(t,!0)}return 0<se(t,C,null,[e]).length},se.contains=function(e,t){return(e.ownerDocument||e)!=C&&T(e),y(e,t)},se.attr=function(e,t){(e.ownerDocument||e)!=C&&T(e);var n=b.attrHandle[t.toLowerCase()],r=n&&D.call(b.attrHandle,t.toLowerCase())?n(e,t,!E):void 0;return void 0!==r?r:d.attributes||!E?e.getAttribute(t):(r=e.getAttributeNode(t))&&r.specified?r.value:null},se.escape=function(e){return(e+"").replace(re,ie)},se.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},se.uniqueSort=function(e){var t,n=[],r=0,i=0;if(l=!d.detectDuplicates,u=!d.sortStable&&e.slice(0),e.sort(j),l){while(t=e[i++])t===e[i]&&(r=n.push(i));while(r--)e.splice(n[r],1)}return u=null,e},o=se.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(1===i||9===i||11===i){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=o(e)}else if(3===i||4===i)return e.nodeValue}else while(t=e[r++])n+=o(t);return n},(b=se.selectors={cacheLength:50,createPseudo:le,match:G,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(te,ne),e[3]=(e[3]||e[4]||e[5]||"").replace(te,ne),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||se.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&se.error(e[0]),e},PSEUDO:function(e){var t,n=!e[6]&&e[2];return G.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":n&&X.test(n)&&(t=h(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(te,ne).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=m[e+" "];return t||(t=new RegExp("(^|"+M+")"+e+"("+M+"|$)"))&&m(e,function(e){return t.test("string"==typeof e.className&&e.className||"undefined"!=typeof e.getAttribute&&e.getAttribute("class")||"")})},ATTR:function(n,r,i){return function(e){var t=se.attr(e,n);return null==t?"!="===r:!r||(t+="","="===r?t===i:"!="===r?t!==i:"^="===r?i&&0===t.indexOf(i):"*="===r?i&&-1<t.indexOf(i):"$="===r?i&&t.slice(-i.length)===i:"~="===r?-1<(" "+t.replace(B," ")+" ").indexOf(i):"|="===r&&(t===i||t.slice(0,i.length+1)===i+"-"))}},CHILD:function(h,e,t,g,v){var y="nth"!==h.slice(0,3),m="last"!==h.slice(-4),x="of-type"===e;return 1===g&&0===v?function(e){return!!e.parentNode}:function(e,t,n){var r,i,o,a,s,u,l=y!==m?"nextSibling":"previousSibling",c=e.parentNode,f=x&&e.nodeName.toLowerCase(),p=!n&&!x,d=!1;if(c){if(y){while(l){a=e;while(a=a[l])if(x?a.nodeName.toLowerCase()===f:1===a.nodeType)return!1;u=l="only"===h&&!u&&"nextSibling"}return!0}if(u=[m?c.firstChild:c.lastChild],m&&p){d=(s=(r=(i=(o=(a=c)[S]||(a[S]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]||[])[0]===k&&r[1])&&r[2],a=s&&c.childNodes[s];while(a=++s&&a&&a[l]||(d=s=0)||u.pop())if(1===a.nodeType&&++d&&a===e){i[h]=[k,s,d];break}}else if(p&&(d=s=(r=(i=(o=(a=e)[S]||(a[S]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]||[])[0]===k&&r[1]),!1===d)while(a=++s&&a&&a[l]||(d=s=0)||u.pop())if((x?a.nodeName.toLowerCase()===f:1===a.nodeType)&&++d&&(p&&((i=(o=a[S]||(a[S]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]=[k,d]),a===e))break;return(d-=v)===g||d%g==0&&0<=d/g}}},PSEUDO:function(e,o){var t,a=b.pseudos[e]||b.setFilters[e.toLowerCase()]||se.error("unsupported pseudo: "+e);return a[S]?a(o):1<a.length?(t=[e,e,"",o],b.setFilters.hasOwnProperty(e.toLowerCase())?le(function(e,t){var n,r=a(e,o),i=r.length;while(i--)e[n=P(e,r[i])]=!(t[n]=r[i])}):function(e){return a(e,0,t)}):a}},pseudos:{not:le(function(e){var r=[],i=[],s=f(e.replace($,"$1"));return s[S]?le(function(e,t,n,r){var i,o=s(e,null,r,[]),a=e.length;while(a--)(i=o[a])&&(e[a]=!(t[a]=i))}):function(e,t,n){return r[0]=e,s(r,null,n,i),r[0]=null,!i.pop()}}),has:le(function(t){return function(e){return 0<se(t,e).length}}),contains:le(function(t){return t=t.replace(te,ne),function(e){return-1<(e.textContent||o(e)).indexOf(t)}}),lang:le(function(n){return V.test(n||"")||se.error("unsupported lang: "+n),n=n.replace(te,ne).toLowerCase(),function(e){var t;do{if(t=E?e.lang:e.getAttribute("xml:lang")||e.getAttribute("lang"))return(t=t.toLowerCase())===n||0===t.indexOf(n+"-")}while((e=e.parentNode)&&1===e.nodeType);return!1}}),target:function(e){var t=n.location&&n.location.hash;return t&&t.slice(1)===e.id},root:function(e){return e===a},focus:function(e){return e===C.activeElement&&(!C.hasFocus||C.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:ge(!1),disabled:ge(!0),checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,!0===e.selected},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1;return!0},parent:function(e){return!b.pseudos.empty(e)},header:function(e){return J.test(e.nodeName)},input:function(e){return Q.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},first:ve(function(){return[0]}),last:ve(function(e,t){return[t-1]}),eq:ve(function(e,t,n){return[n<0?n+t:n]}),even:ve(function(e,t){for(var n=0;n<t;n+=2)e.push(n);return e}),odd:ve(function(e,t){for(var n=1;n<t;n+=2)e.push(n);return e}),lt:ve(function(e,t,n){for(var r=n<0?n+t:t<n?t:n;0<=--r;)e.push(r);return e}),gt:ve(function(e,t,n){for(var r=n<0?n+t:n;++r<t;)e.push(r);return e})}}).pseudos.nth=b.pseudos.eq,{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})b.pseudos[e]=de(e);for(e in{submit:!0,reset:!0})b.pseudos[e]=he(e);function me(){}function xe(e){for(var t=0,n=e.length,r="";t<n;t++)r+=e[t].value;return r}function be(s,e,t){var u=e.dir,l=e.next,c=l||u,f=t&&"parentNode"===c,p=r++;return e.first?function(e,t,n){while(e=e[u])if(1===e.nodeType||f)return s(e,t,n);return!1}:function(e,t,n){var r,i,o,a=[k,p];if(n){while(e=e[u])if((1===e.nodeType||f)&&s(e,t,n))return!0}else while(e=e[u])if(1===e.nodeType||f)if(i=(o=e[S]||(e[S]={}))[e.uniqueID]||(o[e.uniqueID]={}),l&&l===e.nodeName.toLowerCase())e=e[u]||e;else{if((r=i[c])&&r[0]===k&&r[1]===p)return a[2]=r[2];if((i[c]=a)[2]=s(e,t,n))return!0}return!1}}function we(i){return 1<i.length?function(e,t,n){var r=i.length;while(r--)if(!i[r](e,t,n))return!1;return!0}:i[0]}function Te(e,t,n,r,i){for(var o,a=[],s=0,u=e.length,l=null!=t;s<u;s++)(o=e[s])&&(n&&!n(o,r,i)||(a.push(o),l&&t.push(s)));return a}function Ce(d,h,g,v,y,e){return v&&!v[S]&&(v=Ce(v)),y&&!y[S]&&(y=Ce(y,e)),le(function(e,t,n,r){var i,o,a,s=[],u=[],l=t.length,c=e||function(e,t,n){for(var r=0,i=t.length;r<i;r++)se(e,t[r],n);return n}(h||"*",n.nodeType?[n]:n,[]),f=!d||!e&&h?c:Te(c,s,d,n,r),p=g?y||(e?d:l||v)?[]:t:f;if(g&&g(f,p,n,r),v){i=Te(p,u),v(i,[],n,r),o=i.length;while(o--)(a=i[o])&&(p[u[o]]=!(f[u[o]]=a))}if(e){if(y||d){if(y){i=[],o=p.length;while(o--)(a=p[o])&&i.push(f[o]=a);y(null,p=[],i,r)}o=p.length;while(o--)(a=p[o])&&-1<(i=y?P(e,a):s[o])&&(e[i]=!(t[i]=a))}}else p=Te(p===t?p.splice(l,p.length):p),y?y(null,t,p,r):H.apply(t,p)})}function Ee(e){for(var i,t,n,r=e.length,o=b.relative[e[0].type],a=o||b.relative[" "],s=o?1:0,u=be(function(e){return e===i},a,!0),l=be(function(e){return-1<P(i,e)},a,!0),c=[function(e,t,n){var r=!o&&(n||t!==w)||((i=t).nodeType?u(e,t,n):l(e,t,n));return i=null,r}];s<r;s++)if(t=b.relative[e[s].type])c=[be(we(c),t)];else{if((t=b.filter[e[s].type].apply(null,e[s].matches))[S]){for(n=++s;n<r;n++)if(b.relative[e[n].type])break;return Ce(1<s&&we(c),1<s&&xe(e.slice(0,s-1).concat({value:" "===e[s-2].type?"*":""})).replace($,"$1"),t,s<n&&Ee(e.slice(s,n)),n<r&&Ee(e=e.slice(n)),n<r&&xe(e))}c.push(t)}return we(c)}return me.prototype=b.filters=b.pseudos,b.setFilters=new me,h=se.tokenize=function(e,t){var n,r,i,o,a,s,u,l=x[e+" "];if(l)return t?0:l.slice(0);a=e,s=[],u=b.preFilter;while(a){for(o in n&&!(r=_.exec(a))||(r&&(a=a.slice(r[0].length)||a),s.push(i=[])),n=!1,(r=z.exec(a))&&(n=r.shift(),i.push({value:n,type:r[0].replace($," ")}),a=a.slice(n.length)),b.filter)!(r=G[o].exec(a))||u[o]&&!(r=u[o](r))||(n=r.shift(),i.push({value:n,type:o,matches:r}),a=a.slice(n.length));if(!n)break}return t?a.length:a?se.error(e):x(e,s).slice(0)},f=se.compile=function(e,t){var n,v,y,m,x,r,i=[],o=[],a=A[e+" "];if(!a){t||(t=h(e)),n=t.length;while(n--)(a=Ee(t[n]))[S]?i.push(a):o.push(a);(a=A(e,(v=o,m=0<(y=i).length,x=0<v.length,r=function(e,t,n,r,i){var o,a,s,u=0,l="0",c=e&&[],f=[],p=w,d=e||x&&b.find.TAG("*",i),h=k+=null==p?1:Math.random()||.1,g=d.length;for(i&&(w=t==C||t||i);l!==g&&null!=(o=d[l]);l++){if(x&&o){a=0,t||o.ownerDocument==C||(T(o),n=!E);while(s=v[a++])if(s(o,t||C,n)){r.push(o);break}i&&(k=h)}m&&((o=!s&&o)&&u--,e&&c.push(o))}if(u+=l,m&&l!==u){a=0;while(s=y[a++])s(c,f,t,n);if(e){if(0<u)while(l--)c[l]||f[l]||(f[l]=q.call(r));f=Te(f)}H.apply(r,f),i&&!e&&0<f.length&&1<u+y.length&&se.uniqueSort(r)}return i&&(k=h,w=p),c},m?le(r):r))).selector=e}return a},g=se.select=function(e,t,n,r){var i,o,a,s,u,l="function"==typeof e&&e,c=!r&&h(e=l.selector||e);if(n=n||[],1===c.length){if(2<(o=c[0]=c[0].slice(0)).length&&"ID"===(a=o[0]).type&&9===t.nodeType&&E&&b.relative[o[1].type]){if(!(t=(b.find.ID(a.matches[0].replace(te,ne),t)||[])[0]))return n;l&&(t=t.parentNode),e=e.slice(o.shift().value.length)}i=G.needsContext.test(e)?0:o.length;while(i--){if(a=o[i],b.relative[s=a.type])break;if((u=b.find[s])&&(r=u(a.matches[0].replace(te,ne),ee.test(o[0].type)&&ye(t.parentNode)||t))){if(o.splice(i,1),!(e=r.length&&xe(o)))return H.apply(n,r),n;break}}}return(l||f(e,c))(r,t,!E,n,!t||ee.test(e)&&ye(t.parentNode)||t),n},d.sortStable=S.split("").sort(j).join("")===S,d.detectDuplicates=!!l,T(),d.sortDetached=ce(function(e){return 1&e.compareDocumentPosition(C.createElement("fieldset"))}),ce(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||fe("type|href|height|width",function(e,t,n){if(!n)return e.getAttribute(t,"type"===t.toLowerCase()?1:2)}),d.attributes&&ce(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||fe("value",function(e,t,n){if(!n&&"input"===e.nodeName.toLowerCase())return e.defaultValue}),ce(function(e){return null==e.getAttribute("disabled")})||fe(R,function(e,t,n){var r;if(!n)return!0===e[t]?t.toLowerCase():(r=e.getAttributeNode(t))&&r.specified?r.value:null}),se}(C);S.find=d,S.expr=d.selectors,S.expr[":"]=S.expr.pseudos,S.uniqueSort=S.unique=d.uniqueSort,S.text=d.getText,S.isXMLDoc=d.isXML,S.contains=d.contains,S.escapeSelector=d.escape;var h=function(e,t,n){var r=[],i=void 0!==n;while((e=e[t])&&9!==e.nodeType)if(1===e.nodeType){if(i&&S(e).is(n))break;r.push(e)}return r},T=function(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n},k=S.expr.match.needsContext;function A(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()}var N=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function j(e,n,r){return m(n)?S.grep(e,function(e,t){return!!n.call(e,t,e)!==r}):n.nodeType?S.grep(e,function(e){return e===n!==r}):"string"!=typeof n?S.grep(e,function(e){return-1<i.call(n,e)!==r}):S.filter(n,e,r)}S.filter=function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?S.find.matchesSelector(r,e)?[r]:[]:S.find.matches(e,S.grep(t,function(e){return 1===e.nodeType}))},S.fn.extend({find:function(e){var t,n,r=this.length,i=this;if("string"!=typeof e)return this.pushStack(S(e).filter(function(){for(t=0;t<r;t++)if(S.contains(i[t],this))return!0}));for(n=this.pushStack([]),t=0;t<r;t++)S.find(e,i[t],n);return 1<r?S.uniqueSort(n):n},filter:function(e){return this.pushStack(j(this,e||[],!1))},not:function(e){return this.pushStack(j(this,e||[],!0))},is:function(e){return!!j(this,"string"==typeof e&&k.test(e)?S(e):e||[],!1).length}});var D,q=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;(S.fn.init=function(e,t,n){var r,i;if(!e)return this;if(n=n||D,"string"==typeof e){if(!(r="<"===e[0]&&">"===e[e.length-1]&&3<=e.length?[null,e,null]:q.exec(e))||!r[1]&&t)return!t||t.jquery?(t||n).find(e):this.constructor(t).find(e);if(r[1]){if(t=t instanceof S?t[0]:t,S.merge(this,S.parseHTML(r[1],t&&t.nodeType?t.ownerDocument||t:E,!0)),N.test(r[1])&&S.isPlainObject(t))for(r in t)m(this[r])?this[r](t[r]):this.attr(r,t[r]);return this}return(i=E.getElementById(r[2]))&&(this[0]=i,this.length=1),this}return e.nodeType?(this[0]=e,this.length=1,this):m(e)?void 0!==n.ready?n.ready(e):e(S):S.makeArray(e,this)}).prototype=S.fn,D=S(E);var L=/^(?:parents|prev(?:Until|All))/,H={children:!0,contents:!0,next:!0,prev:!0};function O(e,t){while((e=e[t])&&1!==e.nodeType);return e}S.fn.extend({has:function(e){var t=S(e,this),n=t.length;return this.filter(function(){for(var e=0;e<n;e++)if(S.contains(this,t[e]))return!0})},closest:function(e,t){var n,r=0,i=this.length,o=[],a="string"!=typeof e&&S(e);if(!k.test(e))for(;r<i;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(n.nodeType<11&&(a?-1<a.index(n):1===n.nodeType&&S.find.matchesSelector(n,e))){o.push(n);break}return this.pushStack(1<o.length?S.uniqueSort(o):o)},index:function(e){return e?"string"==typeof e?i.call(S(e),this[0]):i.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){return this.pushStack(S.uniqueSort(S.merge(this.get(),S(e,t))))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}}),S.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return h(e,"parentNode")},parentsUntil:function(e,t,n){return h(e,"parentNode",n)},next:function(e){return O(e,"nextSibling")},prev:function(e){return O(e,"previousSibling")},nextAll:function(e){return h(e,"nextSibling")},prevAll:function(e){return h(e,"previousSibling")},nextUntil:function(e,t,n){return h(e,"nextSibling",n)},prevUntil:function(e,t,n){return h(e,"previousSibling",n)},siblings:function(e){return T((e.parentNode||{}).firstChild,e)},children:function(e){return T(e.firstChild)},contents:function(e){return null!=e.contentDocument&&r(e.contentDocument)?e.contentDocument:(A(e,"template")&&(e=e.content||e),S.merge([],e.childNodes))}},function(r,i){S.fn[r]=function(e,t){var n=S.map(this,i,e);return"Until"!==r.slice(-5)&&(t=e),t&&"string"==typeof t&&(n=S.filter(t,n)),1<this.length&&(H[r]||S.uniqueSort(n),L.test(r)&&n.reverse()),this.pushStack(n)}});var P=/[^\x20\t\r\n\f]+/g;function R(e){return e}function M(e){throw e}function I(e,t,n,r){var i;try{e&&m(i=e.promise)?i.call(e).done(t).fail(n):e&&m(i=e.then)?i.call(e,t,n):t.apply(void 0,[e].slice(r))}catch(e){n.apply(void 0,[e])}}S.Callbacks=function(r){var e,n;r="string"==typeof r?(e=r,n={},S.each(e.match(P)||[],function(e,t){n[t]=!0}),n):S.extend({},r);var i,t,o,a,s=[],u=[],l=-1,c=function(){for(a=a||r.once,o=i=!0;u.length;l=-1){t=u.shift();while(++l<s.length)!1===s[l].apply(t[0],t[1])&&r.stopOnFalse&&(l=s.length,t=!1)}r.memory||(t=!1),i=!1,a&&(s=t?[]:"")},f={add:function(){return s&&(t&&!i&&(l=s.length-1,u.push(t)),function n(e){S.each(e,function(e,t){m(t)?r.unique&&f.has(t)||s.push(t):t&&t.length&&"string"!==w(t)&&n(t)})}(arguments),t&&!i&&c()),this},remove:function(){return S.each(arguments,function(e,t){var n;while(-1<(n=S.inArray(t,s,n)))s.splice(n,1),n<=l&&l--}),this},has:function(e){return e?-1<S.inArray(e,s):0<s.length},empty:function(){return s&&(s=[]),this},disable:function(){return a=u=[],s=t="",this},disabled:function(){return!s},lock:function(){return a=u=[],t||i||(s=t=""),this},locked:function(){return!!a},fireWith:function(e,t){return a||(t=[e,(t=t||[]).slice?t.slice():t],u.push(t),i||c()),this},fire:function(){return f.fireWith(this,arguments),this},fired:function(){return!!o}};return f},S.extend({Deferred:function(e){var o=[["notify","progress",S.Callbacks("memory"),S.Callbacks("memory"),2],["resolve","done",S.Callbacks("once memory"),S.Callbacks("once memory"),0,"resolved"],["reject","fail",S.Callbacks("once memory"),S.Callbacks("once memory"),1,"rejected"]],i="pending",a={state:function(){return i},always:function(){return s.done(arguments).fail(arguments),this},"catch":function(e){return a.then(null,e)},pipe:function(){var i=arguments;return S.Deferred(function(r){S.each(o,function(e,t){var n=m(i[t[4]])&&i[t[4]];s[t[1]](function(){var e=n&&n.apply(this,arguments);e&&m(e.promise)?e.promise().progress(r.notify).done(r.resolve).fail(r.reject):r[t[0]+"With"](this,n?[e]:arguments)})}),i=null}).promise()},then:function(t,n,r){var u=0;function l(i,o,a,s){return function(){var n=this,r=arguments,e=function(){var e,t;if(!(i<u)){if((e=a.apply(n,r))===o.promise())throw new TypeError("Thenable self-resolution");t=e&&("object"==typeof e||"function"==typeof e)&&e.then,m(t)?s?t.call(e,l(u,o,R,s),l(u,o,M,s)):(u++,t.call(e,l(u,o,R,s),l(u,o,M,s),l(u,o,R,o.notifyWith))):(a!==R&&(n=void 0,r=[e]),(s||o.resolveWith)(n,r))}},t=s?e:function(){try{e()}catch(e){S.Deferred.exceptionHook&&S.Deferred.exceptionHook(e,t.stackTrace),u<=i+1&&(a!==M&&(n=void 0,r=[e]),o.rejectWith(n,r))}};i?t():(S.Deferred.getStackHook&&(t.stackTrace=S.Deferred.getStackHook()),C.setTimeout(t))}}return S.Deferred(function(e){o[0][3].add(l(0,e,m(r)?r:R,e.notifyWith)),o[1][3].add(l(0,e,m(t)?t:R)),o[2][3].add(l(0,e,m(n)?n:M))}).promise()},promise:function(e){return null!=e?S.extend(e,a):a}},s={};return S.each(o,function(e,t){var n=t[2],r=t[5];a[t[1]]=n.add,r&&n.add(function(){i=r},o[3-e][2].disable,o[3-e][3].disable,o[0][2].lock,o[0][3].lock),n.add(t[3].fire),s[t[0]]=function(){return s[t[0]+"With"](this===s?void 0:this,arguments),this},s[t[0]+"With"]=n.fireWith}),a.promise(s),e&&e.call(s,s),s},when:function(e){var n=arguments.length,t=n,r=Array(t),i=s.call(arguments),o=S.Deferred(),a=function(t){return function(e){r[t]=this,i[t]=1<arguments.length?s.call(arguments):e,--n||o.resolveWith(r,i)}};if(n<=1&&(I(e,o.done(a(t)).resolve,o.reject,!n),"pending"===o.state()||m(i[t]&&i[t].then)))return o.then();while(t--)I(i[t],a(t),o.reject);return o.promise()}});var W=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;S.Deferred.exceptionHook=function(e,t){C.console&&C.console.warn&&e&&W.test(e.name)&&C.console.warn("jQuery.Deferred exception: "+e.message,e.stack,t)},S.readyException=function(e){C.setTimeout(function(){throw e})};var F=S.Deferred();function B(){E.removeEventListener("DOMContentLoaded",B),C.removeEventListener("load",B),S.ready()}S.fn.ready=function(e){return F.then(e)["catch"](function(e){S.readyException(e)}),this},S.extend({isReady:!1,readyWait:1,ready:function(e){(!0===e?--S.readyWait:S.isReady)||(S.isReady=!0)!==e&&0<--S.readyWait||F.resolveWith(E,[S])}}),S.ready.then=F.then,"complete"===E.readyState||"loading"!==E.readyState&&!E.documentElement.doScroll?C.setTimeout(S.ready):(E.addEventListener("DOMContentLoaded",B),C.addEventListener("load",B));var $=function(e,t,n,r,i,o,a){var s=0,u=e.length,l=null==n;if("object"===w(n))for(s in i=!0,n)$(e,t,s,n[s],!0,o,a);else if(void 0!==r&&(i=!0,m(r)||(a=!0),l&&(a?(t.call(e,r),t=null):(l=t,t=function(e,t,n){return l.call(S(e),n)})),t))for(;s<u;s++)t(e[s],n,a?r:r.call(e[s],s,t(e[s],n)));return i?e:l?t.call(e):u?t(e[0],n):o},_=/^-ms-/,z=/-([a-z])/g;function U(e,t){return t.toUpperCase()}function X(e){return e.replace(_,"ms-").replace(z,U)}var V=function(e){return 1===e.nodeType||9===e.nodeType||!+e.nodeType};function G(){this.expando=S.expando+G.uid++}G.uid=1,G.prototype={cache:function(e){var t=e[this.expando];return t||(t={},V(e)&&(e.nodeType?e[this.expando]=t:Object.defineProperty(e,this.expando,{value:t,configurable:!0}))),t},set:function(e,t,n){var r,i=this.cache(e);if("string"==typeof t)i[X(t)]=n;else for(r in t)i[X(r)]=t[r];return i},get:function(e,t){return void 0===t?this.cache(e):e[this.expando]&&e[this.expando][X(t)]},access:function(e,t,n){return void 0===t||t&&"string"==typeof t&&void 0===n?this.get(e,t):(this.set(e,t,n),void 0!==n?n:t)},remove:function(e,t){var n,r=e[this.expando];if(void 0!==r){if(void 0!==t){n=(t=Array.isArray(t)?t.map(X):(t=X(t))in r?[t]:t.match(P)||[]).length;while(n--)delete r[t[n]]}(void 0===t||S.isEmptyObject(r))&&(e.nodeType?e[this.expando]=void 0:delete e[this.expando])}},hasData:function(e){var t=e[this.expando];return void 0!==t&&!S.isEmptyObject(t)}};var Y=new G,Q=new G,J=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,K=/[A-Z]/g;function Z(e,t,n){var r,i;if(void 0===n&&1===e.nodeType)if(r="data-"+t.replace(K,"-$&").toLowerCase(),"string"==typeof(n=e.getAttribute(r))){try{n="true"===(i=n)||"false"!==i&&("null"===i?null:i===+i+""?+i:J.test(i)?JSON.parse(i):i)}catch(e){}Q.set(e,t,n)}else n=void 0;return n}S.extend({hasData:function(e){return Q.hasData(e)||Y.hasData(e)},data:function(e,t,n){return Q.access(e,t,n)},removeData:function(e,t){Q.remove(e,t)},_data:function(e,t,n){return Y.access(e,t,n)},_removeData:function(e,t){Y.remove(e,t)}}),S.fn.extend({data:function(n,e){var t,r,i,o=this[0],a=o&&o.attributes;if(void 0===n){if(this.length&&(i=Q.get(o),1===o.nodeType&&!Y.get(o,"hasDataAttrs"))){t=a.length;while(t--)a[t]&&0===(r=a[t].name).indexOf("data-")&&(r=X(r.slice(5)),Z(o,r,i[r]));Y.set(o,"hasDataAttrs",!0)}return i}return"object"==typeof n?this.each(function(){Q.set(this,n)}):$(this,function(e){var t;if(o&&void 0===e)return void 0!==(t=Q.get(o,n))?t:void 0!==(t=Z(o,n))?t:void 0;this.each(function(){Q.set(this,n,e)})},null,e,1<arguments.length,null,!0)},removeData:function(e){return this.each(function(){Q.remove(this,e)})}}),S.extend({queue:function(e,t,n){var r;if(e)return t=(t||"fx")+"queue",r=Y.get(e,t),n&&(!r||Array.isArray(n)?r=Y.access(e,t,S.makeArray(n)):r.push(n)),r||[]},dequeue:function(e,t){t=t||"fx";var n=S.queue(e,t),r=n.length,i=n.shift(),o=S._queueHooks(e,t);"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,function(){S.dequeue(e,t)},o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return Y.get(e,n)||Y.access(e,n,{empty:S.Callbacks("once memory").add(function(){Y.remove(e,[t+"queue",n])})})}}),S.fn.extend({queue:function(t,n){var e=2;return"string"!=typeof t&&(n=t,t="fx",e--),arguments.length<e?S.queue(this[0],t):void 0===n?this:this.each(function(){var e=S.queue(this,t,n);S._queueHooks(this,t),"fx"===t&&"inprogress"!==e[0]&&S.dequeue(this,t)})},dequeue:function(e){return this.each(function(){S.dequeue(this,e)})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,r=1,i=S.Deferred(),o=this,a=this.length,s=function(){--r||i.resolveWith(o,[o])};"string"!=typeof e&&(t=e,e=void 0),e=e||"fx";while(a--)(n=Y.get(o[a],e+"queueHooks"))&&n.empty&&(r++,n.empty.add(s));return s(),i.promise(t)}});var ee=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,te=new RegExp("^(?:([+-])=|)("+ee+")([a-z%]*)$","i"),ne=["Top","Right","Bottom","Left"],re=E.documentElement,ie=function(e){return S.contains(e.ownerDocument,e)},oe={composed:!0};re.getRootNode&&(ie=function(e){return S.contains(e.ownerDocument,e)||e.getRootNode(oe)===e.ownerDocument});var ae=function(e,t){return"none"===(e=t||e).style.display||""===e.style.display&&ie(e)&&"none"===S.css(e,"display")};function se(e,t,n,r){var i,o,a=20,s=r?function(){return r.cur()}:function(){return S.css(e,t,"")},u=s(),l=n&&n[3]||(S.cssNumber[t]?"":"px"),c=e.nodeType&&(S.cssNumber[t]||"px"!==l&&+u)&&te.exec(S.css(e,t));if(c&&c[3]!==l){u/=2,l=l||c[3],c=+u||1;while(a--)S.style(e,t,c+l),(1-o)*(1-(o=s()/u||.5))<=0&&(a=0),c/=o;c*=2,S.style(e,t,c+l),n=n||[]}return n&&(c=+c||+u||0,i=n[1]?c+(n[1]+1)*n[2]:+n[2],r&&(r.unit=l,r.start=c,r.end=i)),i}var ue={};function le(e,t){for(var n,r,i,o,a,s,u,l=[],c=0,f=e.length;c<f;c++)(r=e[c]).style&&(n=r.style.display,t?("none"===n&&(l[c]=Y.get(r,"display")||null,l[c]||(r.style.display="")),""===r.style.display&&ae(r)&&(l[c]=(u=a=o=void 0,a=(i=r).ownerDocument,s=i.nodeName,(u=ue[s])||(o=a.body.appendChild(a.createElement(s)),u=S.css(o,"display"),o.parentNode.removeChild(o),"none"===u&&(u="block"),ue[s]=u)))):"none"!==n&&(l[c]="none",Y.set(r,"display",n)));for(c=0;c<f;c++)null!=l[c]&&(e[c].style.display=l[c]);return e}S.fn.extend({show:function(){return le(this,!0)},hide:function(){return le(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){ae(this)?S(this).show():S(this).hide()})}});var ce,fe,pe=/^(?:checkbox|radio)$/i,de=/<([a-z][^\/\0>\x20\t\r\n\f]*)/i,he=/^$|^module$|\/(?:java|ecma)script/i;ce=E.createDocumentFragment().appendChild(E.createElement("div")),(fe=E.createElement("input")).setAttribute("type","radio"),fe.setAttribute("checked","checked"),fe.setAttribute("name","t"),ce.appendChild(fe),y.checkClone=ce.cloneNode(!0).cloneNode(!0).lastChild.checked,ce.innerHTML="<textarea>x</textarea>",y.noCloneChecked=!!ce.cloneNode(!0).lastChild.defaultValue,ce.innerHTML="<option></option>",y.option=!!ce.lastChild;var ge={thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};function ve(e,t){var n;return n="undefined"!=typeof e.getElementsByTagName?e.getElementsByTagName(t||"*"):"undefined"!=typeof e.querySelectorAll?e.querySelectorAll(t||"*"):[],void 0===t||t&&A(e,t)?S.merge([e],n):n}function ye(e,t){for(var n=0,r=e.length;n<r;n++)Y.set(e[n],"globalEval",!t||Y.get(t[n],"globalEval"))}ge.tbody=ge.tfoot=ge.colgroup=ge.caption=ge.thead,ge.th=ge.td,y.option||(ge.optgroup=ge.option=[1,"<select multiple='multiple'>","</select>"]);var me=/<|&#?\w+;/;function xe(e,t,n,r,i){for(var o,a,s,u,l,c,f=t.createDocumentFragment(),p=[],d=0,h=e.length;d<h;d++)if((o=e[d])||0===o)if("object"===w(o))S.merge(p,o.nodeType?[o]:o);else if(me.test(o)){a=a||f.appendChild(t.createElement("div")),s=(de.exec(o)||["",""])[1].toLowerCase(),u=ge[s]||ge._default,a.innerHTML=u[1]+S.htmlPrefilter(o)+u[2],c=u[0];while(c--)a=a.lastChild;S.merge(p,a.childNodes),(a=f.firstChild).textContent=""}else p.push(t.createTextNode(o));f.textContent="",d=0;while(o=p[d++])if(r&&-1<S.inArray(o,r))i&&i.push(o);else if(l=ie(o),a=ve(f.appendChild(o),"script"),l&&ye(a),n){c=0;while(o=a[c++])he.test(o.type||"")&&n.push(o)}return f}var be=/^([^.]*)(?:\.(.+)|)/;function we(){return!0}function Te(){return!1}function Ce(e,t){return e===function(){try{return E.activeElement}catch(e){}}()==("focus"===t)}function Ee(e,t,n,r,i,o){var a,s;if("object"==typeof t){for(s in"string"!=typeof n&&(r=r||n,n=void 0),t)Ee(e,s,n,r,t[s],o);return e}if(null==r&&null==i?(i=n,r=n=void 0):null==i&&("string"==typeof n?(i=r,r=void 0):(i=r,r=n,n=void 0)),!1===i)i=Te;else if(!i)return e;return 1===o&&(a=i,(i=function(e){return S().off(e),a.apply(this,arguments)}).guid=a.guid||(a.guid=S.guid++)),e.each(function(){S.event.add(this,t,i,r,n)})}function Se(e,i,o){o?(Y.set(e,i,!1),S.event.add(e,i,{namespace:!1,handler:function(e){var t,n,r=Y.get(this,i);if(1&e.isTrigger&&this[i]){if(r.length)(S.event.special[i]||{}).delegateType&&e.stopPropagation();else if(r=s.call(arguments),Y.set(this,i,r),t=o(this,i),this[i](),r!==(n=Y.get(this,i))||t?Y.set(this,i,!1):n={},r!==n)return e.stopImmediatePropagation(),e.preventDefault(),n&&n.value}else r.length&&(Y.set(this,i,{value:S.event.trigger(S.extend(r[0],S.Event.prototype),r.slice(1),this)}),e.stopImmediatePropagation())}})):void 0===Y.get(e,i)&&S.event.add(e,i,we)}S.event={global:{},add:function(t,e,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,v=Y.get(t);if(V(t)){n.handler&&(n=(o=n).handler,i=o.selector),i&&S.find.matchesSelector(re,i),n.guid||(n.guid=S.guid++),(u=v.events)||(u=v.events=Object.create(null)),(a=v.handle)||(a=v.handle=function(e){return"undefined"!=typeof S&&S.event.triggered!==e.type?S.event.dispatch.apply(t,arguments):void 0}),l=(e=(e||"").match(P)||[""]).length;while(l--)d=g=(s=be.exec(e[l])||[])[1],h=(s[2]||"").split(".").sort(),d&&(f=S.event.special[d]||{},d=(i?f.delegateType:f.bindType)||d,f=S.event.special[d]||{},c=S.extend({type:d,origType:g,data:r,handler:n,guid:n.guid,selector:i,needsContext:i&&S.expr.match.needsContext.test(i),namespace:h.join(".")},o),(p=u[d])||((p=u[d]=[]).delegateCount=0,f.setup&&!1!==f.setup.call(t,r,h,a)||t.addEventListener&&t.addEventListener(d,a)),f.add&&(f.add.call(t,c),c.handler.guid||(c.handler.guid=n.guid)),i?p.splice(p.delegateCount++,0,c):p.push(c),S.event.global[d]=!0)}},remove:function(e,t,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,v=Y.hasData(e)&&Y.get(e);if(v&&(u=v.events)){l=(t=(t||"").match(P)||[""]).length;while(l--)if(d=g=(s=be.exec(t[l])||[])[1],h=(s[2]||"").split(".").sort(),d){f=S.event.special[d]||{},p=u[d=(r?f.delegateType:f.bindType)||d]||[],s=s[2]&&new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),a=o=p.length;while(o--)c=p[o],!i&&g!==c.origType||n&&n.guid!==c.guid||s&&!s.test(c.namespace)||r&&r!==c.selector&&("**"!==r||!c.selector)||(p.splice(o,1),c.selector&&p.delegateCount--,f.remove&&f.remove.call(e,c));a&&!p.length&&(f.teardown&&!1!==f.teardown.call(e,h,v.handle)||S.removeEvent(e,d,v.handle),delete u[d])}else for(d in u)S.event.remove(e,d+t[l],n,r,!0);S.isEmptyObject(u)&&Y.remove(e,"handle events")}},dispatch:function(e){var t,n,r,i,o,a,s=new Array(arguments.length),u=S.event.fix(e),l=(Y.get(this,"events")||Object.create(null))[u.type]||[],c=S.event.special[u.type]||{};for(s[0]=u,t=1;t<arguments.length;t++)s[t]=arguments[t];if(u.delegateTarget=this,!c.preDispatch||!1!==c.preDispatch.call(this,u)){a=S.event.handlers.call(this,u,l),t=0;while((i=a[t++])&&!u.isPropagationStopped()){u.currentTarget=i.elem,n=0;while((o=i.handlers[n++])&&!u.isImmediatePropagationStopped())u.rnamespace&&!1!==o.namespace&&!u.rnamespace.test(o.namespace)||(u.handleObj=o,u.data=o.data,void 0!==(r=((S.event.special[o.origType]||{}).handle||o.handler).apply(i.elem,s))&&!1===(u.result=r)&&(u.preventDefault(),u.stopPropagation()))}return c.postDispatch&&c.postDispatch.call(this,u),u.result}},handlers:function(e,t){var n,r,i,o,a,s=[],u=t.delegateCount,l=e.target;if(u&&l.nodeType&&!("click"===e.type&&1<=e.button))for(;l!==this;l=l.parentNode||this)if(1===l.nodeType&&("click"!==e.type||!0!==l.disabled)){for(o=[],a={},n=0;n<u;n++)void 0===a[i=(r=t[n]).selector+" "]&&(a[i]=r.needsContext?-1<S(i,this).index(l):S.find(i,this,null,[l]).length),a[i]&&o.push(r);o.length&&s.push({elem:l,handlers:o})}return l=this,u<t.length&&s.push({elem:l,handlers:t.slice(u)}),s},addProp:function(t,e){Object.defineProperty(S.Event.prototype,t,{enumerable:!0,configurable:!0,get:m(e)?function(){if(this.originalEvent)return e(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[t]},set:function(e){Object.defineProperty(this,t,{enumerable:!0,configurable:!0,writable:!0,value:e})}})},fix:function(e){return e[S.expando]?e:new S.Event(e)},special:{load:{noBubble:!0},click:{setup:function(e){var t=this||e;return pe.test(t.type)&&t.click&&A(t,"input")&&Se(t,"click",we),!1},trigger:function(e){var t=this||e;return pe.test(t.type)&&t.click&&A(t,"input")&&Se(t,"click"),!0},_default:function(e){var t=e.target;return pe.test(t.type)&&t.click&&A(t,"input")&&Y.get(t,"click")||A(t,"a")}},beforeunload:{postDispatch:function(e){void 0!==e.result&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}}},S.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n)},S.Event=function(e,t){if(!(this instanceof S.Event))return new S.Event(e,t);e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&!1===e.returnValue?we:Te,this.target=e.target&&3===e.target.nodeType?e.target.parentNode:e.target,this.currentTarget=e.currentTarget,this.relatedTarget=e.relatedTarget):this.type=e,t&&S.extend(this,t),this.timeStamp=e&&e.timeStamp||Date.now(),this[S.expando]=!0},S.Event.prototype={constructor:S.Event,isDefaultPrevented:Te,isPropagationStopped:Te,isImmediatePropagationStopped:Te,isSimulated:!1,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=we,e&&!this.isSimulated&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=we,e&&!this.isSimulated&&e.stopPropagation()},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=we,e&&!this.isSimulated&&e.stopImmediatePropagation(),this.stopPropagation()}},S.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,"char":!0,code:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:!0},S.event.addProp),S.each({focus:"focusin",blur:"focusout"},function(e,t){S.event.special[e]={setup:function(){return Se(this,e,Ce),!1},trigger:function(){return Se(this,e),!0},_default:function(){return!0},delegateType:t}}),S.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(e,i){S.event.special[e]={delegateType:i,bindType:i,handle:function(e){var t,n=e.relatedTarget,r=e.handleObj;return n&&(n===this||S.contains(this,n))||(e.type=r.origType,t=r.handler.apply(this,arguments),e.type=i),t}}}),S.fn.extend({on:function(e,t,n,r){return Ee(this,e,t,n,r)},one:function(e,t,n,r){return Ee(this,e,t,n,r,1)},off:function(e,t,n){var r,i;if(e&&e.preventDefault&&e.handleObj)return r=e.handleObj,S(e.delegateTarget).off(r.namespace?r.origType+"."+r.namespace:r.origType,r.selector,r.handler),this;if("object"==typeof e){for(i in e)this.off(i,t,e[i]);return this}return!1!==t&&"function"!=typeof t||(n=t,t=void 0),!1===n&&(n=Te),this.each(function(){S.event.remove(this,e,n,t)})}});var ke=/<script|<style|<link/i,Ae=/checked\s*(?:[^=]|=\s*.checked.)/i,Ne=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function je(e,t){return A(e,"table")&&A(11!==t.nodeType?t:t.firstChild,"tr")&&S(e).children("tbody")[0]||e}function De(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function qe(e){return"true/"===(e.type||"").slice(0,5)?e.type=e.type.slice(5):e.removeAttribute("type"),e}function Le(e,t){var n,r,i,o,a,s;if(1===t.nodeType){if(Y.hasData(e)&&(s=Y.get(e).events))for(i in Y.remove(t,"handle events"),s)for(n=0,r=s[i].length;n<r;n++)S.event.add(t,i,s[i][n]);Q.hasData(e)&&(o=Q.access(e),a=S.extend({},o),Q.set(t,a))}}function He(n,r,i,o){r=g(r);var e,t,a,s,u,l,c=0,f=n.length,p=f-1,d=r[0],h=m(d);if(h||1<f&&"string"==typeof d&&!y.checkClone&&Ae.test(d))return n.each(function(e){var t=n.eq(e);h&&(r[0]=d.call(this,e,t.html())),He(t,r,i,o)});if(f&&(t=(e=xe(r,n[0].ownerDocument,!1,n,o)).firstChild,1===e.childNodes.length&&(e=t),t||o)){for(s=(a=S.map(ve(e,"script"),De)).length;c<f;c++)u=e,c!==p&&(u=S.clone(u,!0,!0),s&&S.merge(a,ve(u,"script"))),i.call(n[c],u,c);if(s)for(l=a[a.length-1].ownerDocument,S.map(a,qe),c=0;c<s;c++)u=a[c],he.test(u.type||"")&&!Y.access(u,"globalEval")&&S.contains(l,u)&&(u.src&&"module"!==(u.type||"").toLowerCase()?S._evalUrl&&!u.noModule&&S._evalUrl(u.src,{nonce:u.nonce||u.getAttribute("nonce")},l):b(u.textContent.replace(Ne,""),u,l))}return n}function Oe(e,t,n){for(var r,i=t?S.filter(t,e):e,o=0;null!=(r=i[o]);o++)n||1!==r.nodeType||S.cleanData(ve(r)),r.parentNode&&(n&&ie(r)&&ye(ve(r,"script")),r.parentNode.removeChild(r));return e}S.extend({htmlPrefilter:function(e){return e},clone:function(e,t,n){var r,i,o,a,s,u,l,c=e.cloneNode(!0),f=ie(e);if(!(y.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||S.isXMLDoc(e)))for(a=ve(c),r=0,i=(o=ve(e)).length;r<i;r++)s=o[r],u=a[r],void 0,"input"===(l=u.nodeName.toLowerCase())&&pe.test(s.type)?u.checked=s.checked:"input"!==l&&"textarea"!==l||(u.defaultValue=s.defaultValue);if(t)if(n)for(o=o||ve(e),a=a||ve(c),r=0,i=o.length;r<i;r++)Le(o[r],a[r]);else Le(e,c);return 0<(a=ve(c,"script")).length&&ye(a,!f&&ve(e,"script")),c},cleanData:function(e){for(var t,n,r,i=S.event.special,o=0;void 0!==(n=e[o]);o++)if(V(n)){if(t=n[Y.expando]){if(t.events)for(r in t.events)i[r]?S.event.remove(n,r):S.removeEvent(n,r,t.handle);n[Y.expando]=void 0}n[Q.expando]&&(n[Q.expando]=void 0)}}}),S.fn.extend({detach:function(e){return Oe(this,e,!0)},remove:function(e){return Oe(this,e)},text:function(e){return $(this,function(e){return void 0===e?S.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=e)})},null,e,arguments.length)},append:function(){return He(this,arguments,function(e){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||je(this,e).appendChild(e)})},prepend:function(){return He(this,arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=je(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return He(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return He(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},empty:function(){for(var e,t=0;null!=(e=this[t]);t++)1===e.nodeType&&(S.cleanData(ve(e,!1)),e.textContent="");return this},clone:function(e,t){return e=null!=e&&e,t=null==t?e:t,this.map(function(){return S.clone(this,e,t)})},html:function(e){return $(this,function(e){var t=this[0]||{},n=0,r=this.length;if(void 0===e&&1===t.nodeType)return t.innerHTML;if("string"==typeof e&&!ke.test(e)&&!ge[(de.exec(e)||["",""])[1].toLowerCase()]){e=S.htmlPrefilter(e);try{for(;n<r;n++)1===(t=this[n]||{}).nodeType&&(S.cleanData(ve(t,!1)),t.innerHTML=e);t=0}catch(e){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var n=[];return He(this,arguments,function(e){var t=this.parentNode;S.inArray(this,n)<0&&(S.cleanData(ve(this)),t&&t.replaceChild(e,this))},n)}}),S.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,a){S.fn[e]=function(e){for(var t,n=[],r=S(e),i=r.length-1,o=0;o<=i;o++)t=o===i?this:this.clone(!0),S(r[o])[a](t),u.apply(n,t.get());return this.pushStack(n)}});var Pe=new RegExp("^("+ee+")(?!px)[a-z%]+$","i"),Re=function(e){var t=e.ownerDocument.defaultView;return t&&t.opener||(t=C),t.getComputedStyle(e)},Me=function(e,t,n){var r,i,o={};for(i in t)o[i]=e.style[i],e.style[i]=t[i];for(i in r=n.call(e),t)e.style[i]=o[i];return r},Ie=new RegExp(ne.join("|"),"i");function We(e,t,n){var r,i,o,a,s=e.style;return(n=n||Re(e))&&(""!==(a=n.getPropertyValue(t)||n[t])||ie(e)||(a=S.style(e,t)),!y.pixelBoxStyles()&&Pe.test(a)&&Ie.test(t)&&(r=s.width,i=s.minWidth,o=s.maxWidth,s.minWidth=s.maxWidth=s.width=a,a=n.width,s.width=r,s.minWidth=i,s.maxWidth=o)),void 0!==a?a+"":a}function Fe(e,t){return{get:function(){if(!e())return(this.get=t).apply(this,arguments);delete this.get}}}!function(){function e(){if(l){u.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",l.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",re.appendChild(u).appendChild(l);var e=C.getComputedStyle(l);n="1%"!==e.top,s=12===t(e.marginLeft),l.style.right="60%",o=36===t(e.right),r=36===t(e.width),l.style.position="absolute",i=12===t(l.offsetWidth/3),re.removeChild(u),l=null}}function t(e){return Math.round(parseFloat(e))}var n,r,i,o,a,s,u=E.createElement("div"),l=E.createElement("div");l.style&&(l.style.backgroundClip="content-box",l.cloneNode(!0).style.backgroundClip="",y.clearCloneStyle="content-box"===l.style.backgroundClip,S.extend(y,{boxSizingReliable:function(){return e(),r},pixelBoxStyles:function(){return e(),o},pixelPosition:function(){return e(),n},reliableMarginLeft:function(){return e(),s},scrollboxSize:function(){return e(),i},reliableTrDimensions:function(){var e,t,n,r;return null==a&&(e=E.createElement("table"),t=E.createElement("tr"),n=E.createElement("div"),e.style.cssText="position:absolute;left:-11111px;border-collapse:separate",t.style.cssText="border:1px solid",t.style.height="1px",n.style.height="9px",n.style.display="block",re.appendChild(e).appendChild(t).appendChild(n),r=C.getComputedStyle(t),a=parseInt(r.height,10)+parseInt(r.borderTopWidth,10)+parseInt(r.borderBottomWidth,10)===t.offsetHeight,re.removeChild(e)),a}}))}();var Be=["Webkit","Moz","ms"],$e=E.createElement("div").style,_e={};function ze(e){var t=S.cssProps[e]||_e[e];return t||(e in $e?e:_e[e]=function(e){var t=e[0].toUpperCase()+e.slice(1),n=Be.length;while(n--)if((e=Be[n]+t)in $e)return e}(e)||e)}var Ue=/^(none|table(?!-c[ea]).+)/,Xe=/^--/,Ve={position:"absolute",visibility:"hidden",display:"block"},Ge={letterSpacing:"0",fontWeight:"400"};function Ye(e,t,n){var r=te.exec(t);return r?Math.max(0,r[2]-(n||0))+(r[3]||"px"):t}function Qe(e,t,n,r,i,o){var a="width"===t?1:0,s=0,u=0;if(n===(r?"border":"content"))return 0;for(;a<4;a+=2)"margin"===n&&(u+=S.css(e,n+ne[a],!0,i)),r?("content"===n&&(u-=S.css(e,"padding"+ne[a],!0,i)),"margin"!==n&&(u-=S.css(e,"border"+ne[a]+"Width",!0,i))):(u+=S.css(e,"padding"+ne[a],!0,i),"padding"!==n?u+=S.css(e,"border"+ne[a]+"Width",!0,i):s+=S.css(e,"border"+ne[a]+"Width",!0,i));return!r&&0<=o&&(u+=Math.max(0,Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-o-u-s-.5))||0),u}function Je(e,t,n){var r=Re(e),i=(!y.boxSizingReliable()||n)&&"border-box"===S.css(e,"boxSizing",!1,r),o=i,a=We(e,t,r),s="offset"+t[0].toUpperCase()+t.slice(1);if(Pe.test(a)){if(!n)return a;a="auto"}return(!y.boxSizingReliable()&&i||!y.reliableTrDimensions()&&A(e,"tr")||"auto"===a||!parseFloat(a)&&"inline"===S.css(e,"display",!1,r))&&e.getClientRects().length&&(i="border-box"===S.css(e,"boxSizing",!1,r),(o=s in e)&&(a=e[s])),(a=parseFloat(a)||0)+Qe(e,t,n||(i?"border":"content"),o,r,a)+"px"}function Ke(e,t,n,r,i){return new Ke.prototype.init(e,t,n,r,i)}S.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=We(e,"opacity");return""===n?"1":n}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,gridArea:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnStart:!0,gridRow:!0,gridRowEnd:!0,gridRowStart:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{},style:function(e,t,n,r){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var i,o,a,s=X(t),u=Xe.test(t),l=e.style;if(u||(t=ze(s)),a=S.cssHooks[t]||S.cssHooks[s],void 0===n)return a&&"get"in a&&void 0!==(i=a.get(e,!1,r))?i:l[t];"string"===(o=typeof n)&&(i=te.exec(n))&&i[1]&&(n=se(e,t,i),o="number"),null!=n&&n==n&&("number"!==o||u||(n+=i&&i[3]||(S.cssNumber[s]?"":"px")),y.clearCloneStyle||""!==n||0!==t.indexOf("background")||(l[t]="inherit"),a&&"set"in a&&void 0===(n=a.set(e,n,r))||(u?l.setProperty(t,n):l[t]=n))}},css:function(e,t,n,r){var i,o,a,s=X(t);return Xe.test(t)||(t=ze(s)),(a=S.cssHooks[t]||S.cssHooks[s])&&"get"in a&&(i=a.get(e,!0,n)),void 0===i&&(i=We(e,t,r)),"normal"===i&&t in Ge&&(i=Ge[t]),""===n||n?(o=parseFloat(i),!0===n||isFinite(o)?o||0:i):i}}),S.each(["height","width"],function(e,u){S.cssHooks[u]={get:function(e,t,n){if(t)return!Ue.test(S.css(e,"display"))||e.getClientRects().length&&e.getBoundingClientRect().width?Je(e,u,n):Me(e,Ve,function(){return Je(e,u,n)})},set:function(e,t,n){var r,i=Re(e),o=!y.scrollboxSize()&&"absolute"===i.position,a=(o||n)&&"border-box"===S.css(e,"boxSizing",!1,i),s=n?Qe(e,u,n,a,i):0;return a&&o&&(s-=Math.ceil(e["offset"+u[0].toUpperCase()+u.slice(1)]-parseFloat(i[u])-Qe(e,u,"border",!1,i)-.5)),s&&(r=te.exec(t))&&"px"!==(r[3]||"px")&&(e.style[u]=t,t=S.css(e,u)),Ye(0,t,s)}}}),S.cssHooks.marginLeft=Fe(y.reliableMarginLeft,function(e,t){if(t)return(parseFloat(We(e,"marginLeft"))||e.getBoundingClientRect().left-Me(e,{marginLeft:0},function(){return e.getBoundingClientRect().left}))+"px"}),S.each({margin:"",padding:"",border:"Width"},function(i,o){S.cssHooks[i+o]={expand:function(e){for(var t=0,n={},r="string"==typeof e?e.split(" "):[e];t<4;t++)n[i+ne[t]+o]=r[t]||r[t-2]||r[0];return n}},"margin"!==i&&(S.cssHooks[i+o].set=Ye)}),S.fn.extend({css:function(e,t){return $(this,function(e,t,n){var r,i,o={},a=0;if(Array.isArray(t)){for(r=Re(e),i=t.length;a<i;a++)o[t[a]]=S.css(e,t[a],!1,r);return o}return void 0!==n?S.style(e,t,n):S.css(e,t)},e,t,1<arguments.length)}}),((S.Tween=Ke).prototype={constructor:Ke,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||S.easing._default,this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(S.cssNumber[n]?"":"px")},cur:function(){var e=Ke.propHooks[this.prop];return e&&e.get?e.get(this):Ke.propHooks._default.get(this)},run:function(e){var t,n=Ke.propHooks[this.prop];return this.options.duration?this.pos=t=S.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):Ke.propHooks._default.set(this),this}}).init.prototype=Ke.prototype,(Ke.propHooks={_default:{get:function(e){var t;return 1!==e.elem.nodeType||null!=e.elem[e.prop]&&null==e.elem.style[e.prop]?e.elem[e.prop]:(t=S.css(e.elem,e.prop,""))&&"auto"!==t?t:0},set:function(e){S.fx.step[e.prop]?S.fx.step[e.prop](e):1!==e.elem.nodeType||!S.cssHooks[e.prop]&&null==e.elem.style[ze(e.prop)]?e.elem[e.prop]=e.now:S.style(e.elem,e.prop,e.now+e.unit)}}}).scrollTop=Ke.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},S.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2},_default:"swing"},S.fx=Ke.prototype.init,S.fx.step={};var Ze,et,tt,nt,rt=/^(?:toggle|show|hide)$/,it=/queueHooks$/;function ot(){et&&(!1===E.hidden&&C.requestAnimationFrame?C.requestAnimationFrame(ot):C.setTimeout(ot,S.fx.interval),S.fx.tick())}function at(){return C.setTimeout(function(){Ze=void 0}),Ze=Date.now()}function st(e,t){var n,r=0,i={height:e};for(t=t?1:0;r<4;r+=2-t)i["margin"+(n=ne[r])]=i["padding"+n]=e;return t&&(i.opacity=i.width=e),i}function ut(e,t,n){for(var r,i=(lt.tweeners[t]||[]).concat(lt.tweeners["*"]),o=0,a=i.length;o<a;o++)if(r=i[o].call(n,t,e))return r}function lt(o,e,t){var n,a,r=0,i=lt.prefilters.length,s=S.Deferred().always(function(){delete u.elem}),u=function(){if(a)return!1;for(var e=Ze||at(),t=Math.max(0,l.startTime+l.duration-e),n=1-(t/l.duration||0),r=0,i=l.tweens.length;r<i;r++)l.tweens[r].run(n);return s.notifyWith(o,[l,n,t]),n<1&&i?t:(i||s.notifyWith(o,[l,1,0]),s.resolveWith(o,[l]),!1)},l=s.promise({elem:o,props:S.extend({},e),opts:S.extend(!0,{specialEasing:{},easing:S.easing._default},t),originalProperties:e,originalOptions:t,startTime:Ze||at(),duration:t.duration,tweens:[],createTween:function(e,t){var n=S.Tween(o,l.opts,e,t,l.opts.specialEasing[e]||l.opts.easing);return l.tweens.push(n),n},stop:function(e){var t=0,n=e?l.tweens.length:0;if(a)return this;for(a=!0;t<n;t++)l.tweens[t].run(1);return e?(s.notifyWith(o,[l,1,0]),s.resolveWith(o,[l,e])):s.rejectWith(o,[l,e]),this}}),c=l.props;for(!function(e,t){var n,r,i,o,a;for(n in e)if(i=t[r=X(n)],o=e[n],Array.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),(a=S.cssHooks[r])&&"expand"in a)for(n in o=a.expand(o),delete e[r],o)n in e||(e[n]=o[n],t[n]=i);else t[r]=i}(c,l.opts.specialEasing);r<i;r++)if(n=lt.prefilters[r].call(l,o,c,l.opts))return m(n.stop)&&(S._queueHooks(l.elem,l.opts.queue).stop=n.stop.bind(n)),n;return S.map(c,ut,l),m(l.opts.start)&&l.opts.start.call(o,l),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always),S.fx.timer(S.extend(u,{elem:o,anim:l,queue:l.opts.queue})),l}S.Animation=S.extend(lt,{tweeners:{"*":[function(e,t){var n=this.createTween(e,t);return se(n.elem,e,te.exec(t),n),n}]},tweener:function(e,t){m(e)?(t=e,e=["*"]):e=e.match(P);for(var n,r=0,i=e.length;r<i;r++)n=e[r],lt.tweeners[n]=lt.tweeners[n]||[],lt.tweeners[n].unshift(t)},prefilters:[function(e,t,n){var r,i,o,a,s,u,l,c,f="width"in t||"height"in t,p=this,d={},h=e.style,g=e.nodeType&&ae(e),v=Y.get(e,"fxshow");for(r in n.queue||(null==(a=S._queueHooks(e,"fx")).unqueued&&(a.unqueued=0,s=a.empty.fire,a.empty.fire=function(){a.unqueued||s()}),a.unqueued++,p.always(function(){p.always(function(){a.unqueued--,S.queue(e,"fx").length||a.empty.fire()})})),t)if(i=t[r],rt.test(i)){if(delete t[r],o=o||"toggle"===i,i===(g?"hide":"show")){if("show"!==i||!v||void 0===v[r])continue;g=!0}d[r]=v&&v[r]||S.style(e,r)}if((u=!S.isEmptyObject(t))||!S.isEmptyObject(d))for(r in f&&1===e.nodeType&&(n.overflow=[h.overflow,h.overflowX,h.overflowY],null==(l=v&&v.display)&&(l=Y.get(e,"display")),"none"===(c=S.css(e,"display"))&&(l?c=l:(le([e],!0),l=e.style.display||l,c=S.css(e,"display"),le([e]))),("inline"===c||"inline-block"===c&&null!=l)&&"none"===S.css(e,"float")&&(u||(p.done(function(){h.display=l}),null==l&&(c=h.display,l="none"===c?"":c)),h.display="inline-block")),n.overflow&&(h.overflow="hidden",p.always(function(){h.overflow=n.overflow[0],h.overflowX=n.overflow[1],h.overflowY=n.overflow[2]})),u=!1,d)u||(v?"hidden"in v&&(g=v.hidden):v=Y.access(e,"fxshow",{display:l}),o&&(v.hidden=!g),g&&le([e],!0),p.done(function(){for(r in g||le([e]),Y.remove(e,"fxshow"),d)S.style(e,r,d[r])})),u=ut(g?v[r]:0,r,p),r in v||(v[r]=u.start,g&&(u.end=u.start,u.start=0))}],prefilter:function(e,t){t?lt.prefilters.unshift(e):lt.prefilters.push(e)}}),S.speed=function(e,t,n){var r=e&&"object"==typeof e?S.extend({},e):{complete:n||!n&&t||m(e)&&e,duration:e,easing:n&&t||t&&!m(t)&&t};return S.fx.off?r.duration=0:"number"!=typeof r.duration&&(r.duration in S.fx.speeds?r.duration=S.fx.speeds[r.duration]:r.duration=S.fx.speeds._default),null!=r.queue&&!0!==r.queue||(r.queue="fx"),r.old=r.complete,r.complete=function(){m(r.old)&&r.old.call(this),r.queue&&S.dequeue(this,r.queue)},r},S.fn.extend({fadeTo:function(e,t,n,r){return this.filter(ae).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(t,e,n,r){var i=S.isEmptyObject(t),o=S.speed(e,n,r),a=function(){var e=lt(this,S.extend({},t),o);(i||Y.get(this,"finish"))&&e.stop(!0)};return a.finish=a,i||!1===o.queue?this.each(a):this.queue(o.queue,a)},stop:function(i,e,o){var a=function(e){var t=e.stop;delete e.stop,t(o)};return"string"!=typeof i&&(o=e,e=i,i=void 0),e&&this.queue(i||"fx",[]),this.each(function(){var e=!0,t=null!=i&&i+"queueHooks",n=S.timers,r=Y.get(this);if(t)r[t]&&r[t].stop&&a(r[t]);else for(t in r)r[t]&&r[t].stop&&it.test(t)&&a(r[t]);for(t=n.length;t--;)n[t].elem!==this||null!=i&&n[t].queue!==i||(n[t].anim.stop(o),e=!1,n.splice(t,1));!e&&o||S.dequeue(this,i)})},finish:function(a){return!1!==a&&(a=a||"fx"),this.each(function(){var e,t=Y.get(this),n=t[a+"queue"],r=t[a+"queueHooks"],i=S.timers,o=n?n.length:0;for(t.finish=!0,S.queue(this,a,[]),r&&r.stop&&r.stop.call(this,!0),e=i.length;e--;)i[e].elem===this&&i[e].queue===a&&(i[e].anim.stop(!0),i.splice(e,1));for(e=0;e<o;e++)n[e]&&n[e].finish&&n[e].finish.call(this);delete t.finish})}}),S.each(["toggle","show","hide"],function(e,r){var i=S.fn[r];S.fn[r]=function(e,t,n){return null==e||"boolean"==typeof e?i.apply(this,arguments):this.animate(st(r,!0),e,t,n)}}),S.each({slideDown:st("show"),slideUp:st("hide"),slideToggle:st("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,r){S.fn[e]=function(e,t,n){return this.animate(r,e,t,n)}}),S.timers=[],S.fx.tick=function(){var e,t=0,n=S.timers;for(Ze=Date.now();t<n.length;t++)(e=n[t])()||n[t]!==e||n.splice(t--,1);n.length||S.fx.stop(),Ze=void 0},S.fx.timer=function(e){S.timers.push(e),S.fx.start()},S.fx.interval=13,S.fx.start=function(){et||(et=!0,ot())},S.fx.stop=function(){et=null},S.fx.speeds={slow:600,fast:200,_default:400},S.fn.delay=function(r,e){return r=S.fx&&S.fx.speeds[r]||r,e=e||"fx",this.queue(e,function(e,t){var n=C.setTimeout(e,r);t.stop=function(){C.clearTimeout(n)}})},tt=E.createElement("input"),nt=E.createElement("select").appendChild(E.createElement("option")),tt.type="checkbox",y.checkOn=""!==tt.value,y.optSelected=nt.selected,(tt=E.createElement("input")).value="t",tt.type="radio",y.radioValue="t"===tt.value;var ct,ft=S.expr.attrHandle;S.fn.extend({attr:function(e,t){return $(this,S.attr,e,t,1<arguments.length)},removeAttr:function(e){return this.each(function(){S.removeAttr(this,e)})}}),S.extend({attr:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return"undefined"==typeof e.getAttribute?S.prop(e,t,n):(1===o&&S.isXMLDoc(e)||(i=S.attrHooks[t.toLowerCase()]||(S.expr.match.bool.test(t)?ct:void 0)),void 0!==n?null===n?void S.removeAttr(e,t):i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:(e.setAttribute(t,n+""),n):i&&"get"in i&&null!==(r=i.get(e,t))?r:null==(r=S.find.attr(e,t))?void 0:r)},attrHooks:{type:{set:function(e,t){if(!y.radioValue&&"radio"===t&&A(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},removeAttr:function(e,t){var n,r=0,i=t&&t.match(P);if(i&&1===e.nodeType)while(n=i[r++])e.removeAttribute(n)}}),ct={set:function(e,t,n){return!1===t?S.removeAttr(e,n):e.setAttribute(n,n),n}},S.each(S.expr.match.bool.source.match(/\w+/g),function(e,t){var a=ft[t]||S.find.attr;ft[t]=function(e,t,n){var r,i,o=t.toLowerCase();return n||(i=ft[o],ft[o]=r,r=null!=a(e,t,n)?o:null,ft[o]=i),r}});var pt=/^(?:input|select|textarea|button)$/i,dt=/^(?:a|area)$/i;function ht(e){return(e.match(P)||[]).join(" ")}function gt(e){return e.getAttribute&&e.getAttribute("class")||""}function vt(e){return Array.isArray(e)?e:"string"==typeof e&&e.match(P)||[]}S.fn.extend({prop:function(e,t){return $(this,S.prop,e,t,1<arguments.length)},removeProp:function(e){return this.each(function(){delete this[S.propFix[e]||e]})}}),S.extend({prop:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return 1===o&&S.isXMLDoc(e)||(t=S.propFix[t]||t,i=S.propHooks[t]),void 0!==n?i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:e[t]=n:i&&"get"in i&&null!==(r=i.get(e,t))?r:e[t]},propHooks:{tabIndex:{get:function(e){var t=S.find.attr(e,"tabindex");return t?parseInt(t,10):pt.test(e.nodeName)||dt.test(e.nodeName)&&e.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),y.optSelected||(S.propHooks.selected={get:function(e){var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null},set:function(e){var t=e.parentNode;t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex)}}),S.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){S.propFix[this.toLowerCase()]=this}),S.fn.extend({addClass:function(t){var e,n,r,i,o,a,s,u=0;if(m(t))return this.each(function(e){S(this).addClass(t.call(this,e,gt(this)))});if((e=vt(t)).length)while(n=this[u++])if(i=gt(n),r=1===n.nodeType&&" "+ht(i)+" "){a=0;while(o=e[a++])r.indexOf(" "+o+" ")<0&&(r+=o+" ");i!==(s=ht(r))&&n.setAttribute("class",s)}return this},removeClass:function(t){var e,n,r,i,o,a,s,u=0;if(m(t))return this.each(function(e){S(this).removeClass(t.call(this,e,gt(this)))});if(!arguments.length)return this.attr("class","");if((e=vt(t)).length)while(n=this[u++])if(i=gt(n),r=1===n.nodeType&&" "+ht(i)+" "){a=0;while(o=e[a++])while(-1<r.indexOf(" "+o+" "))r=r.replace(" "+o+" "," ");i!==(s=ht(r))&&n.setAttribute("class",s)}return this},toggleClass:function(i,t){var o=typeof i,a="string"===o||Array.isArray(i);return"boolean"==typeof t&&a?t?this.addClass(i):this.removeClass(i):m(i)?this.each(function(e){S(this).toggleClass(i.call(this,e,gt(this),t),t)}):this.each(function(){var e,t,n,r;if(a){t=0,n=S(this),r=vt(i);while(e=r[t++])n.hasClass(e)?n.removeClass(e):n.addClass(e)}else void 0!==i&&"boolean"!==o||((e=gt(this))&&Y.set(this,"__className__",e),this.setAttribute&&this.setAttribute("class",e||!1===i?"":Y.get(this,"__className__")||""))})},hasClass:function(e){var t,n,r=0;t=" "+e+" ";while(n=this[r++])if(1===n.nodeType&&-1<(" "+ht(gt(n))+" ").indexOf(t))return!0;return!1}});var yt=/\r/g;S.fn.extend({val:function(n){var r,e,i,t=this[0];return arguments.length?(i=m(n),this.each(function(e){var t;1===this.nodeType&&(null==(t=i?n.call(this,e,S(this).val()):n)?t="":"number"==typeof t?t+="":Array.isArray(t)&&(t=S.map(t,function(e){return null==e?"":e+""})),(r=S.valHooks[this.type]||S.valHooks[this.nodeName.toLowerCase()])&&"set"in r&&void 0!==r.set(this,t,"value")||(this.value=t))})):t?(r=S.valHooks[t.type]||S.valHooks[t.nodeName.toLowerCase()])&&"get"in r&&void 0!==(e=r.get(t,"value"))?e:"string"==typeof(e=t.value)?e.replace(yt,""):null==e?"":e:void 0}}),S.extend({valHooks:{option:{get:function(e){var t=S.find.attr(e,"value");return null!=t?t:ht(S.text(e))}},select:{get:function(e){var t,n,r,i=e.options,o=e.selectedIndex,a="select-one"===e.type,s=a?null:[],u=a?o+1:i.length;for(r=o<0?u:a?o:0;r<u;r++)if(((n=i[r]).selected||r===o)&&!n.disabled&&(!n.parentNode.disabled||!A(n.parentNode,"optgroup"))){if(t=S(n).val(),a)return t;s.push(t)}return s},set:function(e,t){var n,r,i=e.options,o=S.makeArray(t),a=i.length;while(a--)((r=i[a]).selected=-1<S.inArray(S.valHooks.option.get(r),o))&&(n=!0);return n||(e.selectedIndex=-1),o}}}}),S.each(["radio","checkbox"],function(){S.valHooks[this]={set:function(e,t){if(Array.isArray(t))return e.checked=-1<S.inArray(S(e).val(),t)}},y.checkOn||(S.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})}),y.focusin="onfocusin"in C;var mt=/^(?:focusinfocus|focusoutblur)$/,xt=function(e){e.stopPropagation()};S.extend(S.event,{trigger:function(e,t,n,r){var i,o,a,s,u,l,c,f,p=[n||E],d=v.call(e,"type")?e.type:e,h=v.call(e,"namespace")?e.namespace.split("."):[];if(o=f=a=n=n||E,3!==n.nodeType&&8!==n.nodeType&&!mt.test(d+S.event.triggered)&&(-1<d.indexOf(".")&&(d=(h=d.split(".")).shift(),h.sort()),u=d.indexOf(":")<0&&"on"+d,(e=e[S.expando]?e:new S.Event(d,"object"==typeof e&&e)).isTrigger=r?2:3,e.namespace=h.join("."),e.rnamespace=e.namespace?new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,e.result=void 0,e.target||(e.target=n),t=null==t?[e]:S.makeArray(t,[e]),c=S.event.special[d]||{},r||!c.trigger||!1!==c.trigger.apply(n,t))){if(!r&&!c.noBubble&&!x(n)){for(s=c.delegateType||d,mt.test(s+d)||(o=o.parentNode);o;o=o.parentNode)p.push(o),a=o;a===(n.ownerDocument||E)&&p.push(a.defaultView||a.parentWindow||C)}i=0;while((o=p[i++])&&!e.isPropagationStopped())f=o,e.type=1<i?s:c.bindType||d,(l=(Y.get(o,"events")||Object.create(null))[e.type]&&Y.get(o,"handle"))&&l.apply(o,t),(l=u&&o[u])&&l.apply&&V(o)&&(e.result=l.apply(o,t),!1===e.result&&e.preventDefault());return e.type=d,r||e.isDefaultPrevented()||c._default&&!1!==c._default.apply(p.pop(),t)||!V(n)||u&&m(n[d])&&!x(n)&&((a=n[u])&&(n[u]=null),S.event.triggered=d,e.isPropagationStopped()&&f.addEventListener(d,xt),n[d](),e.isPropagationStopped()&&f.removeEventListener(d,xt),S.event.triggered=void 0,a&&(n[u]=a)),e.result}},simulate:function(e,t,n){var r=S.extend(new S.Event,n,{type:e,isSimulated:!0});S.event.trigger(r,null,t)}}),S.fn.extend({trigger:function(e,t){return this.each(function(){S.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];if(n)return S.event.trigger(e,t,n,!0)}}),y.focusin||S.each({focus:"focusin",blur:"focusout"},function(n,r){var i=function(e){S.event.simulate(r,e.target,S.event.fix(e))};S.event.special[r]={setup:function(){var e=this.ownerDocument||this.document||this,t=Y.access(e,r);t||e.addEventListener(n,i,!0),Y.access(e,r,(t||0)+1)},teardown:function(){var e=this.ownerDocument||this.document||this,t=Y.access(e,r)-1;t?Y.access(e,r,t):(e.removeEventListener(n,i,!0),Y.remove(e,r))}}});var bt=C.location,wt={guid:Date.now()},Tt=/\?/;S.parseXML=function(e){var t,n;if(!e||"string"!=typeof e)return null;try{t=(new C.DOMParser).parseFromString(e,"text/xml")}catch(e){}return n=t&&t.getElementsByTagName("parsererror")[0],t&&!n||S.error("Invalid XML: "+(n?S.map(n.childNodes,function(e){return e.textContent}).join("\n"):e)),t};var Ct=/\[\]$/,Et=/\r?\n/g,St=/^(?:submit|button|image|reset|file)$/i,kt=/^(?:input|select|textarea|keygen)/i;function At(n,e,r,i){var t;if(Array.isArray(e))S.each(e,function(e,t){r||Ct.test(n)?i(n,t):At(n+"["+("object"==typeof t&&null!=t?e:"")+"]",t,r,i)});else if(r||"object"!==w(e))i(n,e);else for(t in e)At(n+"["+t+"]",e[t],r,i)}S.param=function(e,t){var n,r=[],i=function(e,t){var n=m(t)?t():t;r[r.length]=encodeURIComponent(e)+"="+encodeURIComponent(null==n?"":n)};if(null==e)return"";if(Array.isArray(e)||e.jquery&&!S.isPlainObject(e))S.each(e,function(){i(this.name,this.value)});else for(n in e)At(n,e[n],t,i);return r.join("&")},S.fn.extend({serialize:function(){return S.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=S.prop(this,"elements");return e?S.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!S(this).is(":disabled")&&kt.test(this.nodeName)&&!St.test(e)&&(this.checked||!pe.test(e))}).map(function(e,t){var n=S(this).val();return null==n?null:Array.isArray(n)?S.map(n,function(e){return{name:t.name,value:e.replace(Et,"\r\n")}}):{name:t.name,value:n.replace(Et,"\r\n")}}).get()}});var Nt=/%20/g,jt=/#.*$/,Dt=/([?&])_=[^&]*/,qt=/^(.*?):[ \t]*([^\r\n]*)$/gm,Lt=/^(?:GET|HEAD)$/,Ht=/^\/\//,Ot={},Pt={},Rt="*/".concat("*"),Mt=E.createElement("a");function It(o){return function(e,t){"string"!=typeof e&&(t=e,e="*");var n,r=0,i=e.toLowerCase().match(P)||[];if(m(t))while(n=i[r++])"+"===n[0]?(n=n.slice(1)||"*",(o[n]=o[n]||[]).unshift(t)):(o[n]=o[n]||[]).push(t)}}function Wt(t,i,o,a){var s={},u=t===Pt;function l(e){var r;return s[e]=!0,S.each(t[e]||[],function(e,t){var n=t(i,o,a);return"string"!=typeof n||u||s[n]?u?!(r=n):void 0:(i.dataTypes.unshift(n),l(n),!1)}),r}return l(i.dataTypes[0])||!s["*"]&&l("*")}function Ft(e,t){var n,r,i=S.ajaxSettings.flatOptions||{};for(n in t)void 0!==t[n]&&((i[n]?e:r||(r={}))[n]=t[n]);return r&&S.extend(!0,e,r),e}Mt.href=bt.href,S.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:bt.href,type:"GET",isLocal:/^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(bt.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Rt,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":S.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?Ft(Ft(e,S.ajaxSettings),t):Ft(S.ajaxSettings,e)},ajaxPrefilter:It(Ot),ajaxTransport:It(Pt),ajax:function(e,t){"object"==typeof e&&(t=e,e=void 0),t=t||{};var c,f,p,n,d,r,h,g,i,o,v=S.ajaxSetup({},t),y=v.context||v,m=v.context&&(y.nodeType||y.jquery)?S(y):S.event,x=S.Deferred(),b=S.Callbacks("once memory"),w=v.statusCode||{},a={},s={},u="canceled",T={readyState:0,getResponseHeader:function(e){var t;if(h){if(!n){n={};while(t=qt.exec(p))n[t[1].toLowerCase()+" "]=(n[t[1].toLowerCase()+" "]||[]).concat(t[2])}t=n[e.toLowerCase()+" "]}return null==t?null:t.join(", ")},getAllResponseHeaders:function(){return h?p:null},setRequestHeader:function(e,t){return null==h&&(e=s[e.toLowerCase()]=s[e.toLowerCase()]||e,a[e]=t),this},overrideMimeType:function(e){return null==h&&(v.mimeType=e),this},statusCode:function(e){var t;if(e)if(h)T.always(e[T.status]);else for(t in e)w[t]=[w[t],e[t]];return this},abort:function(e){var t=e||u;return c&&c.abort(t),l(0,t),this}};if(x.promise(T),v.url=((e||v.url||bt.href)+"").replace(Ht,bt.protocol+"//"),v.type=t.method||t.type||v.method||v.type,v.dataTypes=(v.dataType||"*").toLowerCase().match(P)||[""],null==v.crossDomain){r=E.createElement("a");try{r.href=v.url,r.href=r.href,v.crossDomain=Mt.protocol+"//"+Mt.host!=r.protocol+"//"+r.host}catch(e){v.crossDomain=!0}}if(v.data&&v.processData&&"string"!=typeof v.data&&(v.data=S.param(v.data,v.traditional)),Wt(Ot,v,t,T),h)return T;for(i in(g=S.event&&v.global)&&0==S.active++&&S.event.trigger("ajaxStart"),v.type=v.type.toUpperCase(),v.hasContent=!Lt.test(v.type),f=v.url.replace(jt,""),v.hasContent?v.data&&v.processData&&0===(v.contentType||"").indexOf("application/x-www-form-urlencoded")&&(v.data=v.data.replace(Nt,"+")):(o=v.url.slice(f.length),v.data&&(v.processData||"string"==typeof v.data)&&(f+=(Tt.test(f)?"&":"?")+v.data,delete v.data),!1===v.cache&&(f=f.replace(Dt,"$1"),o=(Tt.test(f)?"&":"?")+"_="+wt.guid+++o),v.url=f+o),v.ifModified&&(S.lastModified[f]&&T.setRequestHeader("If-Modified-Since",S.lastModified[f]),S.etag[f]&&T.setRequestHeader("If-None-Match",S.etag[f])),(v.data&&v.hasContent&&!1!==v.contentType||t.contentType)&&T.setRequestHeader("Content-Type",v.contentType),T.setRequestHeader("Accept",v.dataTypes[0]&&v.accepts[v.dataTypes[0]]?v.accepts[v.dataTypes[0]]+("*"!==v.dataTypes[0]?", "+Rt+"; q=0.01":""):v.accepts["*"]),v.headers)T.setRequestHeader(i,v.headers[i]);if(v.beforeSend&&(!1===v.beforeSend.call(y,T,v)||h))return T.abort();if(u="abort",b.add(v.complete),T.done(v.success),T.fail(v.error),c=Wt(Pt,v,t,T)){if(T.readyState=1,g&&m.trigger("ajaxSend",[T,v]),h)return T;v.async&&0<v.timeout&&(d=C.setTimeout(function(){T.abort("timeout")},v.timeout));try{h=!1,c.send(a,l)}catch(e){if(h)throw e;l(-1,e)}}else l(-1,"No Transport");function l(e,t,n,r){var i,o,a,s,u,l=t;h||(h=!0,d&&C.clearTimeout(d),c=void 0,p=r||"",T.readyState=0<e?4:0,i=200<=e&&e<300||304===e,n&&(s=function(e,t,n){var r,i,o,a,s=e.contents,u=e.dataTypes;while("*"===u[0])u.shift(),void 0===r&&(r=e.mimeType||t.getResponseHeader("Content-Type"));if(r)for(i in s)if(s[i]&&s[i].test(r)){u.unshift(i);break}if(u[0]in n)o=u[0];else{for(i in n){if(!u[0]||e.converters[i+" "+u[0]]){o=i;break}a||(a=i)}o=o||a}if(o)return o!==u[0]&&u.unshift(o),n[o]}(v,T,n)),!i&&-1<S.inArray("script",v.dataTypes)&&S.inArray("json",v.dataTypes)<0&&(v.converters["text script"]=function(){}),s=function(e,t,n,r){var i,o,a,s,u,l={},c=e.dataTypes.slice();if(c[1])for(a in e.converters)l[a.toLowerCase()]=e.converters[a];o=c.shift();while(o)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!u&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u=o,o=c.shift())if("*"===o)o=u;else if("*"!==u&&u!==o){if(!(a=l[u+" "+o]||l["* "+o]))for(i in l)if((s=i.split(" "))[1]===o&&(a=l[u+" "+s[0]]||l["* "+s[0]])){!0===a?a=l[i]:!0!==l[i]&&(o=s[0],c.unshift(s[1]));break}if(!0!==a)if(a&&e["throws"])t=a(t);else try{t=a(t)}catch(e){return{state:"parsererror",error:a?e:"No conversion from "+u+" to "+o}}}return{state:"success",data:t}}(v,s,T,i),i?(v.ifModified&&((u=T.getResponseHeader("Last-Modified"))&&(S.lastModified[f]=u),(u=T.getResponseHeader("etag"))&&(S.etag[f]=u)),204===e||"HEAD"===v.type?l="nocontent":304===e?l="notmodified":(l=s.state,o=s.data,i=!(a=s.error))):(a=l,!e&&l||(l="error",e<0&&(e=0))),T.status=e,T.statusText=(t||l)+"",i?x.resolveWith(y,[o,l,T]):x.rejectWith(y,[T,l,a]),T.statusCode(w),w=void 0,g&&m.trigger(i?"ajaxSuccess":"ajaxError",[T,v,i?o:a]),b.fireWith(y,[T,l]),g&&(m.trigger("ajaxComplete",[T,v]),--S.active||S.event.trigger("ajaxStop")))}return T},getJSON:function(e,t,n){return S.get(e,t,n,"json")},getScript:function(e,t){return S.get(e,void 0,t,"script")}}),S.each(["get","post"],function(e,i){S[i]=function(e,t,n,r){return m(t)&&(r=r||n,n=t,t=void 0),S.ajax(S.extend({url:e,type:i,dataType:r,data:t,success:n},S.isPlainObject(e)&&e))}}),S.ajaxPrefilter(function(e){var t;for(t in e.headers)"content-type"===t.toLowerCase()&&(e.contentType=e.headers[t]||"")}),S._evalUrl=function(e,t,n){return S.ajax({url:e,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,converters:{"text script":function(){}},dataFilter:function(e){S.globalEval(e,t,n)}})},S.fn.extend({wrapAll:function(e){var t;return this[0]&&(m(e)&&(e=e.call(this[0])),t=S(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstElementChild)e=e.firstElementChild;return e}).append(this)),this},wrapInner:function(n){return m(n)?this.each(function(e){S(this).wrapInner(n.call(this,e))}):this.each(function(){var e=S(this),t=e.contents();t.length?t.wrapAll(n):e.append(n)})},wrap:function(t){var n=m(t);return this.each(function(e){S(this).wrapAll(n?t.call(this,e):t)})},unwrap:function(e){return this.parent(e).not("body").each(function(){S(this).replaceWith(this.childNodes)}),this}}),S.expr.pseudos.hidden=function(e){return!S.expr.pseudos.visible(e)},S.expr.pseudos.visible=function(e){return!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)},S.ajaxSettings.xhr=function(){try{return new C.XMLHttpRequest}catch(e){}};var Bt={0:200,1223:204},$t=S.ajaxSettings.xhr();y.cors=!!$t&&"withCredentials"in $t,y.ajax=$t=!!$t,S.ajaxTransport(function(i){var o,a;if(y.cors||$t&&!i.crossDomain)return{send:function(e,t){var n,r=i.xhr();if(r.open(i.type,i.url,i.async,i.username,i.password),i.xhrFields)for(n in i.xhrFields)r[n]=i.xhrFields[n];for(n in i.mimeType&&r.overrideMimeType&&r.overrideMimeType(i.mimeType),i.crossDomain||e["X-Requested-With"]||(e["X-Requested-With"]="XMLHttpRequest"),e)r.setRequestHeader(n,e[n]);o=function(e){return function(){o&&(o=a=r.onload=r.onerror=r.onabort=r.ontimeout=r.onreadystatechange=null,"abort"===e?r.abort():"error"===e?"number"!=typeof r.status?t(0,"error"):t(r.status,r.statusText):t(Bt[r.status]||r.status,r.statusText,"text"!==(r.responseType||"text")||"string"!=typeof r.responseText?{binary:r.response}:{text:r.responseText},r.getAllResponseHeaders()))}},r.onload=o(),a=r.onerror=r.ontimeout=o("error"),void 0!==r.onabort?r.onabort=a:r.onreadystatechange=function(){4===r.readyState&&C.setTimeout(function(){o&&a()})},o=o("abort");try{r.send(i.hasContent&&i.data||null)}catch(e){if(o)throw e}},abort:function(){o&&o()}}}),S.ajaxPrefilter(function(e){e.crossDomain&&(e.contents.script=!1)}),S.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(e){return S.globalEval(e),e}}}),S.ajaxPrefilter("script",function(e){void 0===e.cache&&(e.cache=!1),e.crossDomain&&(e.type="GET")}),S.ajaxTransport("script",function(n){var r,i;if(n.crossDomain||n.scriptAttrs)return{send:function(e,t){r=S("<script>").attr(n.scriptAttrs||{}).prop({charset:n.scriptCharset,src:n.url}).on("load error",i=function(e){r.remove(),i=null,e&&t("error"===e.type?404:200,e.type)}),E.head.appendChild(r[0])},abort:function(){i&&i()}}});var _t,zt=[],Ut=/(=)\?(?=&|$)|\?\?/;S.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=zt.pop()||S.expando+"_"+wt.guid++;return this[e]=!0,e}}),S.ajaxPrefilter("json jsonp",function(e,t,n){var r,i,o,a=!1!==e.jsonp&&(Ut.test(e.url)?"url":"string"==typeof e.data&&0===(e.contentType||"").indexOf("application/x-www-form-urlencoded")&&Ut.test(e.data)&&"data");if(a||"jsonp"===e.dataTypes[0])return r=e.jsonpCallback=m(e.jsonpCallback)?e.jsonpCallback():e.jsonpCallback,a?e[a]=e[a].replace(Ut,"$1"+r):!1!==e.jsonp&&(e.url+=(Tt.test(e.url)?"&":"?")+e.jsonp+"="+r),e.converters["script json"]=function(){return o||S.error(r+" was not called"),o[0]},e.dataTypes[0]="json",i=C[r],C[r]=function(){o=arguments},n.always(function(){void 0===i?S(C).removeProp(r):C[r]=i,e[r]&&(e.jsonpCallback=t.jsonpCallback,zt.push(r)),o&&m(i)&&i(o[0]),o=i=void 0}),"script"}),y.createHTMLDocument=((_t=E.implementation.createHTMLDocument("").body).innerHTML="<form></form><form></form>",2===_t.childNodes.length),S.parseHTML=function(e,t,n){return"string"!=typeof e?[]:("boolean"==typeof t&&(n=t,t=!1),t||(y.createHTMLDocument?((r=(t=E.implementation.createHTMLDocument("")).createElement("base")).href=E.location.href,t.head.appendChild(r)):t=E),o=!n&&[],(i=N.exec(e))?[t.createElement(i[1])]:(i=xe([e],t,o),o&&o.length&&S(o).remove(),S.merge([],i.childNodes)));var r,i,o},S.fn.load=function(e,t,n){var r,i,o,a=this,s=e.indexOf(" ");return-1<s&&(r=ht(e.slice(s)),e=e.slice(0,s)),m(t)?(n=t,t=void 0):t&&"object"==typeof t&&(i="POST"),0<a.length&&S.ajax({url:e,type:i||"GET",dataType:"html",data:t}).done(function(e){o=arguments,a.html(r?S("<div>").append(S.parseHTML(e)).find(r):e)}).always(n&&function(e,t){a.each(function(){n.apply(this,o||[e.responseText,t,e])})}),this},S.expr.pseudos.animated=function(t){return S.grep(S.timers,function(e){return t===e.elem}).length},S.offset={setOffset:function(e,t,n){var r,i,o,a,s,u,l=S.css(e,"position"),c=S(e),f={};"static"===l&&(e.style.position="relative"),s=c.offset(),o=S.css(e,"top"),u=S.css(e,"left"),("absolute"===l||"fixed"===l)&&-1<(o+u).indexOf("auto")?(a=(r=c.position()).top,i=r.left):(a=parseFloat(o)||0,i=parseFloat(u)||0),m(t)&&(t=t.call(e,n,S.extend({},s))),null!=t.top&&(f.top=t.top-s.top+a),null!=t.left&&(f.left=t.left-s.left+i),"using"in t?t.using.call(e,f):c.css(f)}},S.fn.extend({offset:function(t){if(arguments.length)return void 0===t?this:this.each(function(e){S.offset.setOffset(this,t,e)});var e,n,r=this[0];return r?r.getClientRects().length?(e=r.getBoundingClientRect(),n=r.ownerDocument.defaultView,{top:e.top+n.pageYOffset,left:e.left+n.pageXOffset}):{top:0,left:0}:void 0},position:function(){if(this[0]){var e,t,n,r=this[0],i={top:0,left:0};if("fixed"===S.css(r,"position"))t=r.getBoundingClientRect();else{t=this.offset(),n=r.ownerDocument,e=r.offsetParent||n.documentElement;while(e&&(e===n.body||e===n.documentElement)&&"static"===S.css(e,"position"))e=e.parentNode;e&&e!==r&&1===e.nodeType&&((i=S(e).offset()).top+=S.css(e,"borderTopWidth",!0),i.left+=S.css(e,"borderLeftWidth",!0))}return{top:t.top-i.top-S.css(r,"marginTop",!0),left:t.left-i.left-S.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var e=this.offsetParent;while(e&&"static"===S.css(e,"position"))e=e.offsetParent;return e||re})}}),S.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(t,i){var o="pageYOffset"===i;S.fn[t]=function(e){return $(this,function(e,t,n){var r;if(x(e)?r=e:9===e.nodeType&&(r=e.defaultView),void 0===n)return r?r[i]:e[t];r?r.scrollTo(o?r.pageXOffset:n,o?n:r.pageYOffset):e[t]=n},t,e,arguments.length)}}),S.each(["top","left"],function(e,n){S.cssHooks[n]=Fe(y.pixelPosition,function(e,t){if(t)return t=We(e,n),Pe.test(t)?S(e).position()[n]+"px":t})}),S.each({Height:"height",Width:"width"},function(a,s){S.each({padding:"inner"+a,content:s,"":"outer"+a},function(r,o){S.fn[o]=function(e,t){var n=arguments.length&&(r||"boolean"!=typeof e),i=r||(!0===e||!0===t?"margin":"border");return $(this,function(e,t,n){var r;return x(e)?0===o.indexOf("outer")?e["inner"+a]:e.document.documentElement["client"+a]:9===e.nodeType?(r=e.documentElement,Math.max(e.body["scroll"+a],r["scroll"+a],e.body["offset"+a],r["offset"+a],r["client"+a])):void 0===n?S.css(e,t,i):S.style(e,t,n,i)},s,n?e:void 0,n)}})}),S.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){S.fn[t]=function(e){return this.on(t,e)}}),S.fn.extend({bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)},hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)}}),S.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(e,n){S.fn[n]=function(e,t){return 0<arguments.length?this.on(n,null,e,t):this.trigger(n)}});var Xt=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;S.proxy=function(e,t){var n,r,i;if("string"==typeof t&&(n=e[t],t=e,e=n),m(e))return r=s.call(arguments,2),(i=function(){return e.apply(t||this,r.concat(s.call(arguments)))}).guid=e.guid=e.guid||S.guid++,i},S.holdReady=function(e){e?S.readyWait++:S.ready(!0)},S.isArray=Array.isArray,S.parseJSON=JSON.parse,S.nodeName=A,S.isFunction=m,S.isWindow=x,S.camelCase=X,S.type=w,S.now=Date.now,S.isNumeric=function(e){var t=S.type(e);return("number"===t||"string"===t)&&!isNaN(e-parseFloat(e))},S.trim=function(e){return null==e?"":(e+"").replace(Xt,"")},"function"==typeof define&&define.amd&&define("jquery",[],function(){return S});var Vt=C.jQuery,Gt=C.$;return S.noConflict=function(e){return C.$===S&&(C.$=Gt),e&&C.jQuery===S&&(C.jQuery=Vt),S},"undefined"==typeof e&&(C.jQuery=C.$=S),S});
;
/*!
 * jQuery Once v2.2.3 - http://github.com/robloach/jquery-once
 * @license MIT, GPL-2.0
 *   http://opensource.org/licenses/MIT
 *   http://opensource.org/licenses/GPL-2.0
 */
(function(e){"use strict";if(typeof exports==="object"&&typeof exports.nodeName!=="string"){e(require("jquery"))}else if(typeof define==="function"&&define.amd){define(["jquery"],e)}else{e(jQuery)}})(function(t){"use strict";var r=function(e){e=e||"once";if(typeof e!=="string"){throw new TypeError("The jQuery Once id parameter must be a string")}return e};t.fn.once=function(e){var n="jquery-once-"+r(e);return this.filter(function(){return t(this).data(n)!==true}).data(n,true)};t.fn.removeOnce=function(e){return this.findOnce(e).removeData("jquery-once-"+r(e))};t.fn.findOnce=function(e){var n="jquery-once-"+r(e);return this.filter(function(){return t(this).data(n)===true})}});

/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function () {
  var settingsElement = document.querySelector('head > script[type="application/json"][data-drupal-selector="drupal-settings-json"], body > script[type="application/json"][data-drupal-selector="drupal-settings-json"]');
  window.drupalSettings = {};

  if (settingsElement !== null) {
    window.drupalSettings = JSON.parse(settingsElement.textContent);
  }
})();;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

window.Drupal = {
  behaviors: {},
  locale: {}
};

(function (Drupal, drupalSettings, drupalTranslations, console, Proxy, Reflect) {
  Drupal.throwError = function (error) {
    setTimeout(function () {
      throw error;
    }, 0);
  };

  Drupal.attachBehaviors = function (context, settings) {
    context = context || document;
    settings = settings || drupalSettings;
    var behaviors = Drupal.behaviors;
    Object.keys(behaviors || {}).forEach(function (i) {
      if (typeof behaviors[i].attach === 'function') {
        try {
          behaviors[i].attach(context, settings);
        } catch (e) {
          Drupal.throwError(e);
        }
      }
    });
  };

  Drupal.detachBehaviors = function (context, settings, trigger) {
    context = context || document;
    settings = settings || drupalSettings;
    trigger = trigger || 'unload';
    var behaviors = Drupal.behaviors;
    Object.keys(behaviors || {}).forEach(function (i) {
      if (typeof behaviors[i].detach === 'function') {
        try {
          behaviors[i].detach(context, settings, trigger);
        } catch (e) {
          Drupal.throwError(e);
        }
      }
    });
  };

  Drupal.checkPlain = function (str) {
    str = str.toString().replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#39;');
    return str;
  };

  Drupal.formatString = function (str, args) {
    var processedArgs = {};
    Object.keys(args || {}).forEach(function (key) {
      switch (key.charAt(0)) {
        case '@':
          processedArgs[key] = Drupal.checkPlain(args[key]);
          break;

        case '!':
          processedArgs[key] = args[key];
          break;

        default:
          processedArgs[key] = Drupal.theme('placeholder', args[key]);
          break;
      }
    });
    return Drupal.stringReplace(str, processedArgs, null);
  };

  Drupal.stringReplace = function (str, args, keys) {
    if (str.length === 0) {
      return str;
    }

    if (!Array.isArray(keys)) {
      keys = Object.keys(args || {});
      keys.sort(function (a, b) {
        return a.length - b.length;
      });
    }

    if (keys.length === 0) {
      return str;
    }

    var key = keys.pop();
    var fragments = str.split(key);

    if (keys.length) {
      for (var i = 0; i < fragments.length; i++) {
        fragments[i] = Drupal.stringReplace(fragments[i], args, keys.slice(0));
      }
    }

    return fragments.join(args[key]);
  };

  Drupal.t = function (str, args, options) {
    options = options || {};
    options.context = options.context || '';

    if (typeof drupalTranslations !== 'undefined' && drupalTranslations.strings && drupalTranslations.strings[options.context] && drupalTranslations.strings[options.context][str]) {
      str = drupalTranslations.strings[options.context][str];
    }

    if (args) {
      str = Drupal.formatString(str, args);
    }

    return str;
  };

  Drupal.url = function (path) {
    return drupalSettings.path.baseUrl + drupalSettings.path.pathPrefix + path;
  };

  Drupal.url.toAbsolute = function (url) {
    var urlParsingNode = document.createElement('a');

    try {
      url = decodeURIComponent(url);
    } catch (e) {}

    urlParsingNode.setAttribute('href', url);
    return urlParsingNode.cloneNode(false).href;
  };

  Drupal.url.isLocal = function (url) {
    var absoluteUrl = Drupal.url.toAbsolute(url);
    var protocol = window.location.protocol;

    if (protocol === 'http:' && absoluteUrl.indexOf('https:') === 0) {
      protocol = 'https:';
    }

    var baseUrl = "".concat(protocol, "//").concat(window.location.host).concat(drupalSettings.path.baseUrl.slice(0, -1));

    try {
      absoluteUrl = decodeURIComponent(absoluteUrl);
    } catch (e) {}

    try {
      baseUrl = decodeURIComponent(baseUrl);
    } catch (e) {}

    return absoluteUrl === baseUrl || absoluteUrl.indexOf("".concat(baseUrl, "/")) === 0;
  };

  Drupal.formatPlural = function (count, singular, plural, args, options) {
    args = args || {};
    args['@count'] = count;
    var pluralDelimiter = drupalSettings.pluralDelimiter;
    var translations = Drupal.t(singular + pluralDelimiter + plural, args, options).split(pluralDelimiter);
    var index = 0;

    if (typeof drupalTranslations !== 'undefined' && drupalTranslations.pluralFormula) {
      index = count in drupalTranslations.pluralFormula ? drupalTranslations.pluralFormula[count] : drupalTranslations.pluralFormula.default;
    } else if (args['@count'] !== 1) {
      index = 1;
    }

    return translations[index];
  };

  Drupal.encodePath = function (item) {
    return window.encodeURIComponent(item).replace(/%2F/g, '/');
  };

  Drupal.deprecationError = function (_ref) {
    var message = _ref.message;

    if (drupalSettings.suppressDeprecationErrors === false && typeof console !== 'undefined' && console.warn) {
      console.warn("[Deprecation] ".concat(message));
    }
  };

  Drupal.deprecatedProperty = function (_ref2) {
    var target = _ref2.target,
        deprecatedProperty = _ref2.deprecatedProperty,
        message = _ref2.message;

    if (!Proxy || !Reflect) {
      return target;
    }

    return new Proxy(target, {
      get: function get(target, key) {
        if (key === deprecatedProperty) {
          Drupal.deprecationError({
            message: message
          });
        }

        for (var _len = arguments.length, rest = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
          rest[_key - 2] = arguments[_key];
        }

        return Reflect.get.apply(Reflect, [target, key].concat(rest));
      }
    });
  };

  Drupal.theme = function (func) {
    if (func in Drupal.theme) {
      var _Drupal$theme;

      for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        args[_key2 - 1] = arguments[_key2];
      }

      return (_Drupal$theme = Drupal.theme)[func].apply(_Drupal$theme, args);
    }
  };

  Drupal.theme.placeholder = function (str) {
    return "<em class=\"placeholder\">".concat(Drupal.checkPlain(str), "</em>");
  };
})(Drupal, window.drupalSettings, window.drupalTranslations, window.console, window.Proxy, window.Reflect);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

if (window.jQuery) {
  jQuery.noConflict();
}

document.documentElement.className += ' js';

(function (Drupal, drupalSettings) {
  var domReady = function domReady(callback) {
    var listener = function listener() {
      callback();
      document.removeEventListener('DOMContentLoaded', listener);
    };

    if (document.readyState !== 'loading') {
      setTimeout(callback, 0);
    } else {
      document.addEventListener('DOMContentLoaded', listener);
    }
  };

  domReady(function () {
    Drupal.attachBehaviors(document, drupalSettings);
  });
})(Drupal, window.drupalSettings);;
!function a(o,r,i){function c(e,t){if(!r[e]){if(!o[e]){var n="function"==typeof require&&require;if(!t&&n)return n(e,!0);if(s)return s(e,!0);throw(n=new Error("Cannot find module '"+e+"'")).code="MODULE_NOT_FOUND",n}n=r[e]={exports:{}},o[e][0].call(n.exports,function(t){return c(o[e][1][t]||t)},n,n.exports,a,o,r,i)}return r[e].exports}for(var s="function"==typeof require&&require,t=0;t<i.length;t++)c(i[t]);return c}({1:[function(t,e,n){"use strict";var a,o,r;"document"in window.self&&("classList"in document.createElement("_")&&(!document.createElementNS||"classList"in document.createElementNS("http://www.w3.org/2000/svg","g"))||function(t){if("Element"in t){var e="classList",n="prototype",a=t.Element[n],o=Object,r=String[n].trim||function(){return this.replace(/^\s+|\s+$/g,"")},i=Array[n].indexOf||function(t){for(var e=0,n=this.length;e<n;e++)if(e in this&&this[e]===t)return e;return-1},c=function(t,e){this.name=t,this.code=DOMException[t],this.message=e},s=function(t,e){if(""===e)throw new c("SYNTAX_ERR","An invalid or illegal string was specified");if(/\s/.test(e))throw new c("INVALID_CHARACTER_ERR","String contains an invalid character");return i.call(t,e)},u=function(t){for(var e=r.call(t.getAttribute("class")||""),n=e?e.split(/\s+/):[],a=0,o=n.length;a<o;a++)this.push(n[a]);this._updateClassName=function(){t.setAttribute("class",this.toString())}},l=u[n]=[],t=function(){return new u(this)};if(c[n]=Error[n],l.item=function(t){return this[t]||null},l.contains=function(t){return-1!==s(this,t+="")},l.add=function(){for(var t,e=arguments,n=0,a=e.length,o=!1;-1===s(this,t=e[n]+"")&&(this.push(t),o=!0),++n<a;);o&&this._updateClassName()},l.remove=function(){var t,e,n=arguments,a=0,o=n.length,r=!1;do{for(e=s(this,t=n[a]+"");-1!==e;)this.splice(e,1),r=!0,e=s(this,t)}while(++a<o);r&&this._updateClassName()},l.toggle=function(t,e){t+="";var n=this.contains(t),a=n?!0!==e&&"remove":!1!==e&&"add";return a&&this[a](t),!0===e||!1===e?e:!n},l.toString=function(){return this.join(" ")},o.defineProperty){var d={get:t,enumerable:!0,configurable:!0};try{o.defineProperty(a,e,d)}catch(t){void 0!==t.number&&-2146823252!==t.number||(d.enumerable=!1,o.defineProperty(a,e,d))}}else o[n].__defineGetter__&&a.__defineGetter__(e,t)}}(window.self),(r=document.createElement("_")).classList.add("c1","c2"),r.classList.contains("c2")||((a=function(t){var a=DOMTokenList.prototype[t];DOMTokenList.prototype[t]=function(t){for(var e=arguments.length,n=0;n<e;n++)t=arguments[n],a.call(this,t)}})("add"),a("remove")),r.classList.toggle("c3",!1),r.classList.contains("c3")&&(o=DOMTokenList.prototype.toggle,DOMTokenList.prototype.toggle=function(t,e){return 1 in arguments&&!this.contains(t)==!e?e:o.call(this,t)}),r=null)},{}],2:[function(t,e,n){"use strict";function a(t){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}!function(t){void 0!==e?e.exports=t():"function"==typeof define&&"object"==a(define.amd)?define(t):this.domready=t()}(function(){var t,e=[],n=document,a=n.documentElement.doScroll,o="DOMContentLoaded",r=(a?/^loaded|^c/:/^loaded|^i|^c/).test(n.readyState);return r||n.addEventListener(o,t=function(){for(n.removeEventListener(o,t),r=1;t=e.shift();)t()}),function(t){r?setTimeout(t,0):e.push(t)}})},{}],3:[function(t,e,n){"use strict";var a;e.exports=((a=document.createElement("div")).setAttribute("data-a-b","c"),Boolean(a.dataset&&"c"===a.dataset.aB)?function(t){return t.dataset}:function(t){var e={},n=t.attributes;function a(){return this.value}function o(t,e){void 0===e?this.removeAttribute(t):this.setAttribute(t,e)}for(var r=0,i=n.length;r<i;r++){var c,s,u=n[r];!u||0===(c=u.name).indexOf("data-")&&(s=c.slice(5).replace(/-./g,function(t){return t.charAt(1).toUpperCase()}),u=u.value,Object.defineProperty(e,s,{enumerable:!0,get:a.bind({value:u||""}),set:o.bind(t,c)}))}return e})},{}],4:[function(t,e,n){"use strict";var a;"function"!=typeof(a=window.Element.prototype).matches&&(a.matches=a.msMatchesSelector||a.mozMatchesSelector||a.webkitMatchesSelector||function(t){for(var e=(this.document||this.ownerDocument).querySelectorAll(t),n=0;e[n]&&e[n]!==this;)++n;return Boolean(e[n])}),"function"!=typeof a.closest&&(a.closest=function(t){for(var e=this;e&&1===e.nodeType;){if(e.matches(t))return e;e=e.parentNode}return null})},{}],5:[function(t,a,o){"use strict";!function(){for(var e={polyfill:function(){if(!("KeyboardEvent"in window)||"key"in KeyboardEvent.prototype)return!1;var t={get:function(){var t=e.keys[this.which||this.keyCode];return Array.isArray(t)&&(t=t[+this.shiftKey]),t}};return Object.defineProperty(KeyboardEvent.prototype,"key",t),t},keys:{3:"Cancel",6:"Help",8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",28:"Convert",29:"NonConvert",30:"Accept",31:"ModeChange",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",41:"Select",42:"Print",43:"Execute",44:"PrintScreen",45:"Insert",46:"Delete",48:["0",")"],49:["1","!"],50:["2","@"],51:["3","#"],52:["4","$"],53:["5","%"],54:["6","^"],55:["7","&"],56:["8","*"],57:["9","("],91:"OS",93:"ContextMenu",144:"NumLock",145:"ScrollLock",181:"VolumeMute",182:"VolumeDown",183:"VolumeUp",186:[";",":"],187:["=","+"],188:[",","<"],189:["-","_"],190:[".",">"],191:["/","?"],192:["`","~"],219:["[","{"],220:["\\","|"],221:["]","}"],222:["'",'"'],224:"Meta",225:"AltGraph",246:"Attn",247:"CrSel",248:"ExSel",249:"EraseEof",250:"Play",251:"ZoomOut"}},t=1;t<25;t++)e.keys[111+t]="F"+t;var n="";for(t=65;t<91;t++)n=String.fromCharCode(t),e.keys[t]=[n.toLowerCase(),n.toUpperCase()];"function"==typeof define&&define.amd?define("keyboardevent-key-polyfill",e):void 0!==o&&void 0!==a?a.exports=e:window&&(window.keyboardeventKeyPolyfill=e)}()},{}],6:[function(t,b,e){(function(p){(function(){"use strict";function n(t){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function g(){return l.Date.now()}var a=NaN,o="[object Symbol]",r=/^\s+|\s+$/g,i=/^[-+]0x[0-9a-f]+$/i,c=/^0b[01]+$/i,s=/^0o[0-7]+$/i,u=parseInt,t="object"==(void 0===p?"undefined":n(p))&&p&&p.Object===Object&&p,e="object"==("undefined"==typeof self?"undefined":n(self))&&self&&self.Object===Object&&self,l=t||e||Function("return this")(),d=Object.prototype.toString,y=Math.max,w=Math.min;function E(t){var e=n(t);return t&&("object"==e||"function"==e)}function f(t){return"symbol"==n(t)||!!(e=t)&&"object"==n(e)&&d.call(t)==o;var e}function x(t){if("number"==typeof t)return t;if(f(t))return a;if(E(t)&&(t=E(e="function"==typeof t.valueOf?t.valueOf():t)?e+"":e),"string"!=typeof t)return 0===t?t:+t;t=t.replace(r,"");var e=c.test(t);return e||s.test(t)?u(t.slice(2),e?2:8):i.test(t)?a:+t}b.exports=function(a,n,t){var o,r,i,c,s,u,l=0,d=!1,f=!1,e=!0;if("function"!=typeof a)throw new TypeError("Expected a function");function p(t){var e=o,n=r;return o=r=void 0,l=t,c=a.apply(n,e)}function b(t){var e=t-u;return void 0===u||n<=e||e<0||f&&i<=t-l}function v(){var t,e=g();if(b(e))return h(e);s=setTimeout(v,(e=n-((t=e)-u),f?w(e,i-(t-l)):e))}function h(t){return s=void 0,e&&o?p(t):(o=r=void 0,c)}function m(){var t=g(),e=b(t);if(o=arguments,r=this,u=t,e){if(void 0===s)return l=e=u,s=setTimeout(v,n),d?p(e):c;if(f)return s=setTimeout(v,n),p(u)}return void 0===s&&(s=setTimeout(v,n)),c}return n=x(n)||0,E(t)&&(d=!!t.leading,f="maxWait"in t,i=f?y(x(t.maxWait)||0,n):i,e="trailing"in t?!!t.trailing:e),m.cancel=function(){void 0!==s&&clearTimeout(s),o=u=r=s=void(l=0)},m.flush=function(){return void 0===s?c:h(g())},m}}).call(this)}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],7:[function(t,e,n){"use strict";var s=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return;var t=new String("abc");if(t[5]="de","5"===Object.getOwnPropertyNames(t)[0])return;for(var e={},n=0;n<10;n++)e["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(e).map(function(t){return e[t]}).join(""))return;var a={};return"abcdefghijklmnopqrst".split("").forEach(function(t){a[t]=t}),"abcdefghijklmnopqrst"!==Object.keys(Object.assign({},a)).join("")?void 0:1}catch(t){return}}()?Object.assign:function(t,e){for(var n,a,o=function(t){if(null==t)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(t)}(t),r=1;r<arguments.length;r++){for(var i in n=Object(arguments[r]))u.call(n,i)&&(o[i]=n[i]);if(s){a=s(n);for(var c=0;c<a.length;c++)l.call(n,a[c])&&(o[a[c]]=n[a[c]])}}return o}},{}],8:[function(t,e,n){"use strict";function i(t){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var c=t("object-assign"),s=t("../delegate"),u=t("../delegateAll"),l=/^(.+):delegate\((.+)\)$/,d=function(t,e){var n=t[e];return delete t[e],n};e.exports=function(n,t){var a=Object.keys(n).reduce(function(t,e){e=function(t,e){var n,a,o=t.match(l);o&&(t=o[1],n=o[2]),"object"===i(e)&&(a={capture:d(e,"capture"),passive:d(e,"passive")});var r={selector:n,delegate:"object"===i(e)?u(e):n?s(n,e):e,options:a};return-1<t.indexOf(" ")?t.split(" ").map(function(t){return c({type:t},r)}):(r.type=t,[r])}(e,n[e]);return t.concat(e)},[]);return c({add:function(e){a.forEach(function(t){e.addEventListener(t.type,t.delegate,t.options)})},remove:function(e){a.forEach(function(t){e.removeEventListener(t.type,t.delegate,t.options)})}},t)}},{"../delegate":10,"../delegateAll":11,"object-assign":7}],9:[function(t,e,n){"use strict";e.exports=function(t){return function(e){return t.some(function(t){return!1===t.call(this,e)},this)}}},{}],10:[function(t,e,n){"use strict";t("element-closest"),e.exports=function(n,a){return function(t){var e=t.target.closest(n);if(e)return a.call(e,t)}}},{"element-closest":4}],11:[function(t,e,n){"use strict";var a=t("../delegate"),o=t("../compose");e.exports=function(n){var t=Object.keys(n);if(1===t.length&&"*"===t[0])return n["*"];t=t.reduce(function(t,e){return t.push(a(e,n[e])),t},[]);return o(t)}},{"../compose":9,"../delegate":10}],12:[function(t,e,n){"use strict";e.exports=function(e,n){return function(t){if(e!==t.target&&!e.contains(t.target))return n.call(this,t)}}},{}],13:[function(t,e,n){"use strict";e.exports={behavior:t("./behavior"),delegate:t("./delegate"),delegateAll:t("./delegateAll"),ignore:t("./ignore"),keymap:t("./keymap")}},{"./behavior":8,"./delegate":10,"./delegateAll":11,"./ignore":12,"./keymap":14}],14:[function(t,e,n){"use strict";t("keyboardevent-key-polyfill");var r={Alt:"altKey",Control:"ctrlKey",Ctrl:"ctrlKey",Shift:"shiftKey"};e.exports=function(o){var t=Object.keys(o).some(function(t){return-1<t.indexOf("+")});return function(n){var a=function(t,e){var n=t.key;if(e)for(var a in r)!0===t[r[a]]&&(n=[a,n].join("+"));return n}(n,t);return[a,a.toLowerCase()].reduce(function(t,e){return e in o&&(t=o[a].call(this,n)),t},void 0)}},e.exports.MODIFIERS=r},{"keyboardevent-key-polyfill":5}],15:[function(t,e,n){"use strict";e.exports=function(e,n){var a=function(t){return t.currentTarget.removeEventListener(t.type,a,n),e.call(this,t)};return a}},{}],16:[function(t,e,n){"use strict";function a(t){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var o=/(^\s+)|(\s+$)/g,r=/\s+/,i=String.prototype.trim?function(t){return t.trim()}:function(t){return t.replace(o,"")};e.exports=function(t,e){if("string"!=typeof t)throw new Error("Expected a string but got "+a(t));var n=((e=e||window.document).getElementById||function(t){return this.querySelector('[id="'+t.replace(/"/g,'\\"')+'"]')}).bind(e);return 1===(t=i(t).split(r)).length&&""===t[0]?[]:t.map(function(t){var e=n(t);if(!e)throw new Error('no element with id: "'+t+'"');return e})}},{}],17:[function(t,e,n){"use strict";function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(e){return i(f,e).filter(function(t){return t.closest(d)===e})}function r(e,t){var n,a=e.closest(d);if(!a)throw new Error("".concat(f," is missing outer ").concat(d));n=s(e,t),t="true"===a.getAttribute("aria-multiselectable"),n&&!t&&o(a).forEach(function(t){t!==e&&s(t,!1)})}var i=t("../utils/select"),c=t("../utils/behavior"),s=t("../utils/toggle"),u=t("../utils/is-in-viewport"),l=t("../events").CLICK,t=t("../config").prefix,d=".".concat(t,"-accordion, .").concat(t,"-accordion--bordered"),f=".".concat(t,"-accordion__button[aria-controls]"),p="aria-expanded",l=c(a({},l,a({},f,function(t){t.preventDefault(),r(this),"true"===this.getAttribute(p)&&(u(this)||this.scrollIntoView())})),{init:function(t){i(f,t).forEach(function(t){var e="true"===t.getAttribute(p);r(t,e)})},ACCORDION:d,BUTTON:f,show:function(t){return r(t,!0)},hide:function(t){return r(t,!1)},toggle:r,getButtons:o});e.exports=l},{"../config":33,"../events":34,"../utils/behavior":42,"../utils/is-in-viewport":44,"../utils/select":46,"../utils/toggle":49}],18:[function(t,e,n){"use strict";function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var o=t("../utils/behavior"),r=t("../events").CLICK,t=t("../config").prefix,i=".".concat(t,"-banner__header"),c="".concat(t,"-banner__header--expanded");e.exports=o(a({},r,a({},"".concat(i," [aria-controls]"),function(t){t.preventDefault(),this.closest(i).classList.toggle(c)})))},{"../config":33,"../events":34,"../utils/behavior":42}],19:[function(t,e,n){"use strict";function c(t){var e=t.closest(l);if(!e)throw new Error("".concat(d," is missing outer ").concat(l));if(!(t=e.querySelector(f)))throw new Error("".concat(l," is missing inner ").concat(f));return{characterCountEl:e,messageEl:t}}function o(t){var e,n,a=c(t),o=a.characterCountEl,r=a.messageEl,i=parseInt(o.getAttribute("data-maxlength"),10);i&&(n="",a=(e=t.value.length)&&i<e,n=0===e?"".concat(i," characters allowed"):(o=Math.abs(i-e),i="character".concat(1===o?"":"s"),e=a?"over limit":"left","".concat(o," ").concat(i," ").concat(e)),r.classList.toggle(b,a),r.innerHTML=n,a&&!t.validationMessage&&t.setCustomValidity(p),a||t.validationMessage!==p||t.setCustomValidity(""))}var a,r,i,s=t("../utils/select"),u=t("../utils/behavior"),t=t("../config").prefix,l=".".concat(t,"-character-count"),d=".".concat(t,"-character-count__field"),f=".".concat(t,"-character-count__message"),p="The content is too long.",b="".concat(t,"-character-count__message--invalid"),u=u({input:(i=function(){o(this)},(r=d)in(a={})?Object.defineProperty(a,r,{value:i,enumerable:!0,configurable:!0,writable:!0}):a[r]=i,a)},{init:function(t){s(d,t).forEach(function(t){var e,n,a;n=c(e=t).characterCountEl,(a=e.getAttribute("maxlength"))&&(e.removeAttribute("maxlength"),n.setAttribute("data-maxlength",a)),o(t)})},MESSAGE_INVALID_CLASS:b,VALIDATION_MESSAGE:p});e.exports=u},{"../config":33,"../utils/behavior":42,"../utils/select":46}],20:[function(t,e,n){"use strict";function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function b(t,e){e=1<arguments.length&&void 0!==e?e:"",t.value=e,e=new CustomEvent("change",{bubbles:!0,cancelable:!0,detail:{value:e}}),t.dispatchEvent(e)}function w(t){var e=t.closest(I);if(!e)throw new Error("Element is missing outer ".concat(I));var n=e.querySelector(N),a=e.querySelector(q),o=e.querySelector(F),r=e.querySelector(U),i=e.querySelector(R),c=e.querySelector(Y),s=e.querySelector(P),u=e.querySelector(B),t=e.classList.contains(g);return{comboBoxEl:e,selectEl:n,inputEl:a,listEl:o,statusEl:r,focusedOptionEl:i,selectedOptionEl:c,toggleListBtnEl:s,clearInputBtnEl:u,isPristine:t,disableFiltering:"true"===e.dataset.disableFiltering}}function v(t){var e=w(t),n=e.inputEl,t=e.toggleListBtnEl;(e=e.clearInputBtnEl).hidden=!0,e.disabled=!0,t.disabled=!0,n.disabled=!0}function o(t){var e=t.closest(I);if(!e.dataset.enhanced){var n=e.querySelector("select");if(!n)throw new Error("".concat(I," is missing inner select"));var a,o=n.id,r=document.querySelector('label[for="'.concat(o,'"]')),i="".concat(o,"--list"),c="".concat(o,"-label"),s="".concat(o,"--assistiveHint"),u=[],l=e.dataset.defaultValue,t=e.dataset.placeholder;if(t&&u.push('placeholder="'.concat(t,'"')),l)for(var d=0,f=n.options.length;d<f;d+=1){var p=n.options[d];if(p.value===l){a=p;break}}if(!r||!r.matches('label[for="'.concat(o,'"]')))throw new Error("".concat(I," for ").concat(o,' is either missing a label or a "for" attribute'));r.setAttribute("id",c),r.setAttribute("id",c),n.setAttribute("aria-hidden","true"),n.setAttribute("tabindex","-1"),n.classList.add("usa-sr-only",y),n.id="",n.value="",["required","aria-label","aria-labelledby"].forEach(function(t){var e;n.hasAttribute(t)&&(e=n.getAttribute(t),u.push("".concat(t,'="').concat(e,'"')),n.removeAttribute(t))}),e.insertAdjacentHTML("beforeend",['<input\n        aria-owns="'.concat(i,'"\n        aria-autocomplete="list"\n        aria-describedby="').concat(s,'"\n        aria-expanded="false"\n        autocapitalize="off"\n        autocomplete="off"\n        id="').concat(o,'"\n        class="').concat(A,'"\n        type="text"\n        role="combobox"\n        ').concat(u.join(" "),"\n      >"),'<span class="'.concat(D,'" tabindex="-1">\n        <button type="button" class="').concat(S,'" aria-label="Clear the select contents">&nbsp;</button>\n      </span>'),'<span class="'.concat(L,'">&nbsp;</span>'),'<span class="'.concat(C,'" tabindex="-1">\n        <button type="button" tabindex="-1" class="').concat(_,'" aria-label="Toggle the dropdown list">&nbsp;</button>\n      </span>'),'<ul\n        tabindex="-1"\n        id="'.concat(i,'"\n        class="').concat(T,'"\n        role="listbox"\n        aria-labelledby="').concat(c,'"\n        hidden>\n      </ul>'),'<div class="'.concat(j,' usa-sr-only" role="status"></div>'),'<span id="'.concat(s,'" class="usa-sr-only">\n        When autocomplete results are available use up and down arrows to review and enter to select.\n        Touch device users, explore by touch or with swipe gestures.\n      </span>')].join("")),a&&(s=w(e).inputEl,b(n,a.value),b(s,a.text),e.classList.add(g)),n.disabled&&(v(e),n.disabled=!1),e.dataset.enhanced="true"}}function E(t,e,n){var a=(r=2<arguments.length&&void 0!==n?n:{}).skipFocus,o=r.preventScroll,r=(n=w(t)).inputEl,t=n.listEl;(n=n.focusedOptionEl)&&(n.classList.remove(M),n.setAttribute("tabIndex","-1")),e?(r.setAttribute("aria-activedescendant",e.id),e.setAttribute("tabIndex","0"),e.classList.add(M),o||(n=e.offsetTop+e.offsetHeight,t.scrollTop+t.offsetHeight<n&&(t.scrollTop=n-t.offsetHeight),e.offsetTop<t.scrollTop&&(t.scrollTop=e.offsetTop)),a||e.focus({preventScroll:o})):(r.setAttribute("aria-activedescendant",""),r.focus())}function x(t,e,n){function a(t){return t.replace(/[-[\]{}()*+?.,\\^$|#\s]/g,"\\$&")}var o=1<arguments.length&&void 0!==e?e:"",r=2<arguments.length&&void 0!==n?n:{},t="^(?:"+(t=t.replace(/{{(.*?)}}/g,function(t,e){var n=e.trim(),e=r[n];if("query"!==n&&e){e=new RegExp(e,"i"),e=o.match(e);return e?a(e[1]):""}return a(o)}))+")$";return new RegExp(t,"i")}function r(t){for(var i,e,n=(y=w(t)).comboBoxEl,a=y.selectEl,o=y.inputEl,r=y.listEl,c=y.statusEl,s=y.isPristine,u=y.disableFiltering,l="".concat(r.id,"--option-"),d=(o.value||"").toLowerCase(),t=n.dataset.filter||".*{{query}}.*",f=x(t,d,n.dataset),p=[],b=0,v=a.options.length;b<v;b+=1){var h=a.options[b],m="".concat(l).concat(p.length);h.value&&(u||s||!d||f.test(h.text))&&(a.value&&h.value===a.value&&(i=m),u&&!e&&f.test(h.text)&&(e=m),p.push(h))}var g,y=p.length,t=p.map(function(t,e){var n="".concat(l).concat(e),a=[k],o="-1",r="false";return n===i&&(a.push(O,M),o="0",r="true"),i||0!==e||(a.push(M),o="0"),'<li\n          aria-selected="false"\n          aria-setsize="'.concat(p.length,'"\n          aria-posinset="').concat(e+1,'"\n          aria-selected="').concat(r,'"\n          id="').concat(n,'"\n          class="').concat(a.join(" "),'"\n          tabindex="').concat(o,'"\n          role="option"\n          data-value="').concat(t.value,'"\n        >').concat(t.text,"</li>")}).join(""),n='<li class="'.concat(k,'--no-results">No results found</li>');r.hidden=!1,r.innerHTML=y?t:n,o.setAttribute("aria-expanded","true"),c.innerHTML=y?"".concat(y," result").concat(1<y?"s":""," available."):"No results.",s&&i?g=r.querySelector("#"+i):u&&e&&(g=r.querySelector("#"+e)),g&&E(r,g,{skipFocus:!0})}function i(t){var e=(a=w(t)).inputEl,n=a.listEl,t=a.statusEl,a=a.focusedOptionEl;t.innerHTML="",e.setAttribute("aria-expanded","false"),e.setAttribute("aria-activedescendant",""),a&&a.classList.remove(M),n.scrollTop=0,n.hidden=!0}function c(t){var e=(a=w(t)).comboBoxEl,n=a.selectEl,a=a.inputEl;b(n,t.dataset.value),b(a,t.textContent),e.classList.add(g),i(e),a.focus()}function s(t){var e=(t=w(t)).comboBoxEl,n=t.selectEl,a=t.inputEl,o=n.value,r=(a.value||"").toLowerCase();if(o)for(var i=0,c=n.options.length;i<c;i+=1){var s=n.options[i];if(s.value===o)return r!==s.text&&b(a,s.text),e.classList.add(g),0}r&&b(a)}function u(t){var e=w(t.target),n=e.comboBoxEl;(e=e.listEl).hidden&&r(n),(e=e.querySelector(R)||e.querySelector(H))&&E(n,e),t.preventDefault()}var l=t("receptor/keymap"),d=t("../utils/select"),f=t("../utils/behavior"),p=t("../config").prefix,h=t("../events").CLICK,m="".concat(p,"-combo-box"),g="".concat(m,"--pristine"),y="".concat(m,"__select"),A="".concat(m,"__input"),S="".concat(m,"__clear-input"),D="".concat(S,"__wrapper"),L="".concat(m,"__input-button-separator"),_="".concat(m,"__toggle-list"),C="".concat(_,"__wrapper"),T="".concat(m,"__list"),k="".concat(m,"__list-option"),M="".concat(k,"--focused"),O="".concat(k,"--selected"),j="".concat(m,"__status"),I=".".concat(m),N=".".concat(y),q=".".concat(A),B=".".concat(S),P=".".concat(_),F=".".concat(T),H=".".concat(k),R=".".concat(M),Y=".".concat(O),U=".".concat(j),t=function(t){var e=t.target,n=e.nextSibling;n&&E(e,n),t.preventDefault()},p=function(t){var e=w(t.target),n=e.comboBoxEl,a=e.listEl,e=e.focusedOptionEl,e=e&&e.previousSibling,a=!a.hidden;E(n,e),a&&t.preventDefault(),e||i(n)},m=f((a(f={},h,(a(h={},q,function(){var t,e;this.disabled||(t=(e=w(t=this)).comboBoxEl,e.listEl.hidden&&r(t))}),a(h,P,function(){var t,e,n;this.disabled||(e=w(t=this),n=e.comboBoxEl,t=e.listEl,e=e.inputEl,(t.hidden?r:i)(n),e.focus())}),a(h,H,function(){this.disabled||c(this)}),a(h,B,function(){var t,e,n,a;this.disabled||(e=w(t=this),n=e.comboBoxEl,a=e.listEl,t=e.selectEl,e=e.inputEl,a=!a.hidden,t.value&&b(t),e.value&&b(e),n.classList.remove(g),a&&r(n),e.focus())}),h)),a(f,"focusout",a({},I,function(t){this.contains(t.relatedTarget)||(s(this),i(this))})),a(f,"keydown",(a(h={},I,l({Escape:function(t){var e=w(t.target),t=e.comboBoxEl,e=e.inputEl;i(t),s(t),e.focus()}})),a(h,q,l({Enter:function(t){var e=w(t.target),n=e.comboBoxEl,e=!e.listEl.hidden;!function(t){var e=(t=w(t)).comboBoxEl,n=t.selectEl,a=t.inputEl;t.statusEl.textContent="";var o=(a.value||"").toLowerCase();if(o)for(var r=0,i=n.options.length;r<i;r+=1){var c=n.options[r];if(c.text.toLowerCase()===o)return b(n,c.value),b(a,c.text),e.classList.add(g)}s(e)}(n),e&&i(n),t.preventDefault()},ArrowDown:u,Down:u})),a(h,H,l({ArrowUp:p,Up:p,ArrowDown:t,Down:t,Enter:function(t){c(t.target),t.preventDefault()},Tab:function(t){c(t.target),t.preventDefault()},"Shift+Tab":function(){}})),h)),a(f,"input",a({},q,function(){this.closest(I).classList.remove(g),r(this)})),a(f,"mousemove",a({},H,function(){var t;(t=this).classList.contains(M)||E(t,t,{preventScroll:!0})})),f),{init:function(t){d(I,t).forEach(function(t){o(t)})},getComboBoxContext:w,enhanceComboBox:o,generateDynamicRegExp:x,disable:v,enable:function(t){var e=w(t),n=e.inputEl,t=e.toggleListBtnEl,e=e.clearInputBtnEl;e.hidden=!1,e.disabled=!1,t.disabled=!1,n.disabled=!1},displayList:r,hideList:i,COMBO_BOX_CLASS:m});e.exports=m},{"../config":33,"../events":34,"../utils/behavior":42,"../utils/select":46,"receptor/keymap":14}],21:[function(t,e,n){"use strict";function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function f(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(t)))return;var n=[],a=!0,o=!1,r=void 0;try{for(var i,c=t[Symbol.iterator]();!(a=(i=c.next()).done)&&(n.push(i.value),!e||n.length!==e);a=!0);}catch(t){o=!0,r=t}finally{try{a||null==c.return||c.return()}finally{if(o)throw r}}return n}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return o(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return o(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,a=new Array(e);n<e;n++)a[n]=t[n];return a}function r(t,e){return e!==t.getMonth()&&t.setDate(0),t}function p(t,e,n){var a=new Date(0);return a.setFullYear(t,e,n),a}function T(){var t=(n=new Date).getDate(),e=n.getMonth(),n=n.getFullYear();return p(n,e,t)}function k(t){var e=new Date(0);return e.setFullYear(t.getFullYear(),t.getMonth(),1),e}function d(t){var e=new Date(0);return e.setFullYear(t.getFullYear(),t.getMonth()+1,0),e}function M(t,e){return(t=new Date(t.getTime())).setDate(t.getDate()+e),t}function O(t,e){return M(t,-e)}function i(t,e){return M(t,7*e)}function j(t){var e=t.getDay();return O(t,e)}function I(t,e){var n=new Date(t.getTime()),t=(n.getMonth()+12+e)%12;return n.setMonth(n.getMonth()+e),r(n,t),n}function N(t,e){return I(t,-e)}function c(t,e){return I(t,12*e)}function s(t,e){return c(t,-e)}function b(t,e){return(t=new Date(t.getTime())).setMonth(e),r(t,e),t}function g(t,e){var n=new Date(t.getTime()),t=n.getMonth();return n.setFullYear(e),r(n,t),n}function u(t,e){return t&&e&&t.getFullYear()===e.getFullYear()}function q(t,e){return u(t,e)&&t.getMonth()===e.getMonth()}function B(t,e){return q(t,e)&&t.getDate()===e.getDate()}function l(t,e,n){var a=t;return t<e?a=e:n&&n<t&&(a=n),new Date(a.getTime())}function P(t,e,n){return e<=t&&(!n||t<=n)}function y(t,e,n){return d(b(t,11))<e||n&&k(b(t,0))>n}function v(t,e,n){var a,o,r,i,c,s,u,l,d,n=2<arguments.length&&void 0!==n&&n;return t&&((1<arguments.length&&void 0!==e?e:fe)===de?(r=(c=f(t.split("/"),3))[0],i=c[1],c=c[2]):(c=(s=f(t.split("-"),3))[0],r=s[1],i=s[2]),c&&(l=parseInt(c,10),Number.isNaN(l)||(u=l,n&&(u=Math.max(0,u),c.length<3&&(u=(s=T().getFullYear())-s%Math.pow(10,c.length)+l)))),r&&(l=parseInt(r,10),Number.isNaN(l)||(o=l,n&&(o=Math.max(1,o),o=Math.min(12,o)))),o&&i&&null!=u&&(l=parseInt(i,10),Number.isNaN(l)||(d=l,n&&(n=p(u,o,0).getDate(),d=Math.max(1,d),d=Math.min(n,d)))),o&&d&&null!=u&&(a=p(u,o-1,d))),a}function F(t,e){function n(t,e){return"0000".concat(t).slice(-e)}var a=1<arguments.length&&void 0!==e?e:fe,o=t.getMonth()+1,e=t.getDate(),t=t.getFullYear();return a===de?[n(o,2),n(e,2),n(t,4)].join("/"):[n(t,4),n(o,2),n(e,2)].join("-")}function H(t,e){for(var n=[],a=[],o=0;o<t.length;){for(a=[];o<t.length&&a.length<e;)a.push("<td>".concat(t[o],"</td>")),o+=1;n.push("<tr>".concat(a.join(""),"</tr>"))}return n.join("")}function h(t,e){e=1<arguments.length&&void 0!==e?e:"",t.value=e,e=new CustomEvent("change",{bubbles:!0,cancelable:!0,detail:{value:e}}),t.dispatchEvent(e)}function R(t){var e=t.closest(Pt);if(!e)throw new Error("Element is missing outer ".concat(Pt));var n=e.querySelector(Ht),a=e.querySelector(Rt),o=e.querySelector(Yt),r=e.querySelector(Ft),i=e.querySelector(Ut),c=e.querySelector(te),s=v(a.value,de,!0),u=v(n.value),l=v(o.dataset.value),d=v(e.dataset.minDate),f=v(e.dataset.maxDate),p=v(e.dataset.rangeDate),t=v(e.dataset.defaultDate);if(d&&f&&f<d)throw new Error("Minimum date cannot be after maximum date");return{calendarDate:l,minDate:d,toggleBtnEl:r,selectedDate:u,maxDate:f,firstYearChunkEl:c,datePickerEl:e,inputDate:s,internalInputEl:n,externalInputEl:a,calendarEl:o,rangeDate:p,defaultDate:t,statusEl:i}}function m(t){var e=R(t),t=e.externalInputEl;e.toggleBtnEl.disabled=!0,t.disabled=!0}function w(t){var e,n=R(t),a=n.externalInputEl,o=n.minDate,r=n.maxDate,i=a.value,c=!1;return i&&(c=!0,n=(t=f((e=i.split("/")).map(function(t){var e,t=parseInt(t,10);return Number.isNaN(t)||(e=t),e}),3))[0],a=t[1],i=t[2],n&&a&&null!=i&&((t=p(i,n-1,a)).getMonth()===n-1&&t.getDate()===a&&t.getFullYear()===i&&4===e[2].length&&P(t,o,r)&&(c=!1))),c}function E(t){var e=R(t).externalInputEl;(t=w(e))&&!e.validationMessage&&e.setCustomValidity(se),t||e.validationMessage!==se||e.setCustomValidity("")}function x(t,e){var n,a,o=v(e);o&&(n=F(o,de),o=(a=R(t)).datePickerEl,t=a.internalInputEl,a=a.externalInputEl,h(t,e),h(a,n),E(o))}function A(t,e){for(var n,a=(n=R(t)).datePickerEl,o=n.calendarEl,r=n.statusEl,l=n.selectedDate,d=n.maxDate,f=n.minDate,p=n.rangeDate,b=T(),i=e||b,c=o.hidden,v=M(i,0),s=i.getMonth(),u=i.getFullYear(),h=N(i,1),m=I(i,1),g=F(i),y=k(i),w=q(i,f),E=q(i,d),t=l||i,x=p&&(n=t,e=p,new Date((e<n?e:n).getTime())),A=p&&(C=t,L=p,new Date((C<L?L:C).getTime())),S=p&&M(x,1),D=p&&O(A,1),L=ue[s],i=j(y),_=[];_.length<28||i.getMonth()===s||_.length%7!=0;)_.push(function(t){var e=[ot],n=t.getDate(),a=t.getMonth(),o=t.getFullYear(),r=t.getDay(),i=F(t),c="-1",s=!P(t,f,d),u=B(t,l);q(t,h)&&e.push(ct),q(t,v)&&e.push(st),q(t,m)&&e.push(ut),u&&e.push(it),B(t,b)&&e.push(dt),p&&(B(t,p)&&e.push(lt),B(t,x)&&e.push(ft),B(t,A)&&e.push(pt),P(t,S,D)&&e.push(bt)),B(t,v)&&(c="0",e.push(rt));t=ue[a],r=le[r];return'<button\n      type="button"\n      tabindex="'.concat(c,'"\n      class="').concat(e.join(" "),'" \n      data-day="').concat(n,'" \n      data-month="').concat(a+1,'" \n      data-year="').concat(o,'" \n      data-value="').concat(i,'"\n      aria-label="').concat(n," ").concat(t," ").concat(o," ").concat(r,'"\n      aria-selected="').concat(u?"true":"false",'"\n      ').concat(s?'disabled="disabled"':"","\n    >").concat(n,"</button>")}(i)),i=M(i,1);var C=H(_,7);return(y=o.cloneNode()).dataset.value=g,y.style.top="".concat(a.offsetHeight,"px"),y.hidden=!1,y.innerHTML='<div tabindex="-1" class="'.concat(Tt,'">\n      <div class="').concat(jt,'">\n        <div class="').concat(It," ").concat(Nt,'">\n          <button \n            type="button"\n            class="').concat(vt,'"\n            aria-label="Navigate back one year"\n            ').concat(w?'disabled="disabled"':"",'\n          >&nbsp;</button>\n        </div>\n        <div class="').concat(It," ").concat(Nt,'">\n          <button \n            type="button"\n            class="').concat(ht,'"\n            aria-label="Navigate back one month"\n            ').concat(w?'disabled="disabled"':"",'\n          >&nbsp;</button>\n        </div>\n        <div class="').concat(It," ").concat(qt,'">\n          <button \n            type="button"\n            class="').concat(yt,'" aria-label="').concat(L,'. Click to select month"\n          >').concat(L,'</button>\n          <button \n            type="button"\n            class="').concat(wt,'" aria-label="').concat(u,'. Click to select year"\n          >').concat(u,'</button>\n        </div>\n        <div class="').concat(It," ").concat(Nt,'">\n          <button \n            type="button"\n            class="').concat(gt,'"\n            aria-label="Navigate forward one month"\n            ').concat(E?'disabled="disabled"':"",'\n          >&nbsp;</button>\n        </div>\n        <div class="').concat(It," ").concat(Nt,'">\n          <button \n            type="button"\n            class="').concat(mt,'"\n            aria-label="Navigate forward one year"\n            ').concat(E?'disabled="disabled"':"",'\n          >&nbsp;</button>\n        </div>\n      </div>\n      <table class="').concat(Ot,'" role="presentation">\n        <thead>\n          <tr>\n            <th class="').concat(Bt,'" scope="col" aria-label="Sunday">S</th>\n            <th class="').concat(Bt,'" scope="col" aria-label="Monday">M</th>\n            <th class="').concat(Bt,'" scope="col" aria-label="Tuesday">T</th>\n            <th class="').concat(Bt,'" scope="col" aria-label="Wednesday">W</th>\n            <th class="').concat(Bt,'" scope="col" aria-label="Thursday">Th</th>\n            <th class="').concat(Bt,'" scope="col" aria-label="Friday">F</th>\n            <th class="').concat(Bt,'" scope="col" aria-label="Saturday">S</th>\n          </tr>\n        </thead>\n        <tbody>\n          ').concat(C,"\n        </tbody>\n      </table>\n    </div>"),o.parentNode.replaceChild(y,o),a.classList.add(Z),a=[],B(l,v)&&a.push("Selected date"),c?(a.push("You can navigate by day using left and right arrows","Weeks by using up and down arrows","Months by using page up and page down keys","Years by using shift plus page up and shift plus page down","Home and end keys navigate to the beginning and end of a week"),r.textContent=""):a.push("".concat(L," ").concat(u)),r.textContent=a.join(". "),y}function S(t){var e=(n=R(t)).datePickerEl,t=n.calendarEl,n=n.statusEl;e.classList.remove(Z),t.hidden=!0,n.textContent=""}function D(t){var e=(a=R(t)).calendarEl,n=a.inputDate,t=a.minDate,a=a.maxDate;!e.hidden&&n&&(a=l(n,t,a),A(e,a))}function L(t,e){var n=(a=R(t)).calendarEl,t=a.statusEl,i=a.calendarDate,c=a.minDate,s=a.maxDate,u=i.getMonth(),l=null==e?u:e,a=ue.map(function(t,e){var n=b(i,e),n=(a=c,r=s,d(o=n)<a||r&&k(o)>r),a="-1",o=[Et],r=e===u;return e===l&&(a="0",o.push(xt)),r&&o.push(At),'<button \n        type="button"\n        tabindex="'.concat(a,'"\n        class="').concat(o.join(" "),'" \n        data-value="').concat(e,'"\n        data-label="').concat(t,'"\n        aria-selected="').concat(r?"true":"false",'"\n        ').concat(n?'disabled="disabled"':"","\n      >").concat(t,"</button>")}),e='<div tabindex="-1" class="'.concat(kt,'">\n    <table class="').concat(Ot,'" role="presentation">\n      <tbody>\n        ').concat(H(a,3),"\n      </tbody>\n    </table>\n  </div>");return(a=n.cloneNode()).innerHTML=e,n.parentNode.replaceChild(a,n),t.textContent="Select a month.",a}function _(t,e){var n=R(t),a=n.calendarEl,o=n.statusEl,r=n.calendarDate,i=n.minDate,c=n.maxDate,s=r.getFullYear(),u=null==e?s:e,l=u;l-=l%12,l=Math.max(0,l);for(var d=y(g(r,l-1),i,c),t=y(g(r,l+12),i,c),f=[],p=l;f.length<12;){var b=y(g(r,p),i,c),v="-1",h=[St],m=p===s;p===u&&(v="0",h.push(Dt)),m&&h.push(Lt),f.push('<button \n        type="button"\n        tabindex="'.concat(v,'"\n        class="').concat(h.join(" "),'" \n        data-value="').concat(p,'"\n        aria-selected="').concat(m?"true":"false",'"\n        ').concat(b?'disabled="disabled"':"","\n      >").concat(p,"</button>")),p+=1}return n=H(f,3),(e=a.cloneNode()).innerHTML='<div tabindex="-1" class="'.concat(Mt,'">\n    <table class="').concat(Ot,'" role="presentation">\n        <tbody>\n          <tr>\n            <td>\n              <button\n                type="button"\n                class="').concat(_t,'" \n                aria-label="Navigate back ').concat(12,' years"\n                ').concat(d?'disabled="disabled"':"",'\n              >&nbsp;</button>\n            </td>\n            <td colspan="3">\n              <table class="').concat(Ot,'" role="presentation">\n                <tbody>\n                  ').concat(n,'\n                </tbody>\n              </table>\n            </td>\n            <td>\n              <button\n                type="button"\n                class="').concat(Ct,'" \n                aria-label="Navigate forward ').concat(12,' years"\n                ').concat(t?'disabled="disabled"':"","\n              >&nbsp;</button>\n            </td>\n          </tr>\n        </tbody>\n      </table>\n    </div>"),a.parentNode.replaceChild(e,a),o.textContent="Showing years ".concat(l," to ").concat(l+12-1,". Select a year."),e}function C(t){var e=(n=R(t.target)).datePickerEl,n=n.externalInputEl;S(e),n.focus(),t.preventDefault()}var Y=t("receptor/keymap"),U=t("../utils/behavior"),K=t("../utils/select"),V=t("../config").prefix,W=t("../events").CLICK,$=t("../utils/active-element"),z=t("../utils/is-ios-device"),G="".concat(V,"-date-picker"),Q="".concat(G,"__wrapper"),X="".concat(G,"--initialized"),Z="".concat(G,"--active"),J="".concat(G,"__internal-input"),tt="".concat(G,"__external-input"),et="".concat(G,"__button"),nt="".concat(G,"__calendar"),at="".concat(G,"__status"),ot="".concat(nt,"__date"),rt="".concat(ot,"--focused"),it="".concat(ot,"--selected"),ct="".concat(ot,"--previous-month"),st="".concat(ot,"--current-month"),ut="".concat(ot,"--next-month"),lt="".concat(ot,"--range-date"),dt="".concat(ot,"--today"),ft="".concat(ot,"--range-date-start"),pt="".concat(ot,"--range-date-end"),bt="".concat(ot,"--within-range"),vt="".concat(nt,"__previous-year"),ht="".concat(nt,"__previous-month"),mt="".concat(nt,"__next-year"),gt="".concat(nt,"__next-month"),yt="".concat(nt,"__month-selection"),wt="".concat(nt,"__year-selection"),Et="".concat(nt,"__month"),xt="".concat(Et,"--focused"),At="".concat(Et,"--selected"),St="".concat(nt,"__year"),Dt="".concat(St,"--focused"),Lt="".concat(St,"--selected"),_t="".concat(nt,"__previous-year-chunk"),Ct="".concat(nt,"__next-year-chunk"),Tt="".concat(nt,"__date-picker"),kt="".concat(nt,"__month-picker"),Mt="".concat(nt,"__year-picker"),Ot="".concat(nt,"__table"),jt="".concat(nt,"__row"),It="".concat(nt,"__cell"),Nt="".concat(It,"--center-items"),qt="".concat(nt,"__month-label"),Bt="".concat(nt,"__day-of-week"),Pt=".".concat(G),Ft=".".concat(et),Ht=".".concat(J),Rt=".".concat(tt),Yt=".".concat(nt),Ut=".".concat(at),Kt=".".concat(ot),Vt=".".concat(rt),Wt=".".concat(st),$t=".".concat(vt),zt=".".concat(ht),Gt=".".concat(mt),Qt=".".concat(gt),Xt=".".concat(wt),Zt=".".concat(yt),Jt=".".concat(Et),te=".".concat(St),ee=".".concat(_t),ne=".".concat(Ct),ae=".".concat(Tt),oe=".".concat(kt),re=".".concat(Mt),ie=".".concat(xt),ce=".".concat(Dt),se="Please enter a valid date",ue=["January","February","March","April","May","June","July","August","September","October","November","December"],le=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],de="MM/DD/YYYY",fe="YYYY-MM-DD",pe=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return e.map(function(t){return t+":not([disabled])"}).join(", ")},be=pe($t,zt,Xt,Zt,Gt,Qt,Vt),ve=pe(ie),he=pe(ee,ne,ce),me=function(i){return function(t){var e=R(t.target),n=e.calendarEl,a=e.calendarDate,o=e.minDate,r=e.maxDate,e=i(a),r=l(e,o,r);B(a,r)||A(n,r).querySelector(Vt).focus(),t.preventDefault()}},ge=me(function(t){return i(t,-1)}),ye=me(function(t){return i(t,1)}),we=me(function(t){return O(t,1)}),Ee=me(function(t){return M(t,1)}),xe=me(j),Ae=me(function(t){return t=(e=t).getDay(),M(e,6-t);var e}),Se=me(function(t){return I(t,1)}),De=me(function(t){return N(t,1)}),Le=me(function(t){return c(t,1)}),_e=me(function(t){return s(t,1)}),Ce=function(c){return function(t){var e=t.target,n=parseInt(e.dataset.value,10),a=R(e),o=a.calendarEl,r=a.calendarDate,i=a.minDate,e=a.maxDate,a=b(r,n),n=c(n),n=Math.max(0,Math.min(11,n)),n=b(r,n),e=l(n,i,e);q(a,e)||L(o,e.getMonth()).querySelector(ie).focus(),t.preventDefault()}},Te=Ce(function(t){return t-3}),ke=Ce(function(t){return t+3}),Me=Ce(function(t){return t-1}),Oe=Ce(function(t){return t+1}),je=Ce(function(t){return t-t%3}),Ie=Ce(function(t){return t+2-t%3}),Ne=Ce(function(){return 11}),qe=Ce(function(){return 0}),Be=function(c){return function(t){var e=t.target,n=parseInt(e.dataset.value,10),a=R(e),o=a.calendarEl,r=a.calendarDate,i=a.minDate,e=a.maxDate,a=g(r,n),n=c(n),n=Math.max(0,n),n=g(r,n),e=l(n,i,e);u(a,e)||_(o,e.getFullYear()).querySelector(ce).focus(),t.preventDefault()}},Pe=Be(function(t){return t-3}),Fe=Be(function(t){return t+3}),t=Be(function(t){return t-1}),V=Be(function(t){return t+1}),G=Be(function(t){return t-t%3}),pe=Be(function(t){return t+2-t%3}),me=Be(function(t){return t-12}),Ce=Be(function(t){return t+12}),Be=function(r){function o(t){var e=R(t).calendarEl,n=K(r,e),a=n.length-1,o=n[0],t=n[a],e=n.indexOf($());return{focusableElements:n,isNotFound:-1===e,firstTabStop:o,isFirstTab:0===e,lastTabStop:t,isLastTab:e===a}}return{tabAhead:function(t){var e=o(t.target),n=e.firstTabStop,a=e.isLastTab,e=e.isNotFound;(a||e)&&(t.preventDefault(),n.focus())},tabBack:function(t){var e=o(t.target),n=e.lastTabStop,a=e.isFirstTab,e=e.isNotFound;(a||e)&&(t.preventDefault(),n.focus())}}},be=Be(be),ve=Be(ve),Be=Be(he),he=(a(he={},W,(a(W={},Ft,function(){var t,e,n,a,o,r;(t=this).disabled||(e=(o=R(t)).calendarEl,n=o.inputDate,a=o.minDate,r=o.maxDate,o=o.defaultDate,e.hidden?(r=l(n||o||T(),a,r),A(e,r).querySelector(Vt).focus()):S(t))}),a(W,Kt,function(){var t,e,n;(t=this).disabled||(e=(n=R(t)).datePickerEl,n=n.externalInputEl,x(t,t.dataset.value),S(e),n.focus())}),a(W,Jt,function(){var t,e,n,a,o;(t=this).disabled||(e=(o=R(t)).calendarEl,n=o.calendarDate,a=o.minDate,o=o.maxDate,t=parseInt(t.dataset.value,10),t=b(n,t),t=l(t,a,o),A(e,t).querySelector(Vt).focus())}),a(W,te,function(){var t,e,n,a,o;(t=this).disabled||(e=(o=R(t)).calendarEl,n=o.calendarDate,a=o.minDate,o=o.maxDate,t=parseInt(t.innerHTML,10),t=g(n,t),t=l(t,a,o),A(e,t).querySelector(Vt).focus())}),a(W,zt,function(){var t,e,n,a;(t=this).disabled||(n=(e=R(t)).calendarEl,a=e.calendarDate,t=e.minDate,e=e.maxDate,a=N(a,1),a=l(a,t,e),(a=(n=A(n,a)).querySelector(zt)).disabled&&(a=n.querySelector(ae)),a.focus())}),a(W,Qt,function(){var t,e,n,a;(t=this).disabled||(n=(e=R(t)).calendarEl,a=e.calendarDate,t=e.minDate,e=e.maxDate,a=I(a,1),a=l(a,t,e),(a=(n=A(n,a)).querySelector(Qt)).disabled&&(a=n.querySelector(ae)),a.focus())}),a(W,$t,function(){var t,e,n,a;(t=this).disabled||(n=(e=R(t)).calendarEl,a=e.calendarDate,t=e.minDate,e=e.maxDate,a=s(a,1),a=l(a,t,e),(a=(n=A(n,a)).querySelector($t)).disabled&&(a=n.querySelector(ae)),a.focus())}),a(W,Gt,function(){var t,e,n,a;(t=this).disabled||(n=(e=R(t)).calendarEl,a=e.calendarDate,t=e.minDate,e=e.maxDate,a=c(a,1),a=l(a,t,e),(a=(n=A(n,a)).querySelector(Gt)).disabled&&(a=n.querySelector(ae)),a.focus())}),a(W,ee,function(){var t,e,n,a,o;(t=this).disabled||(o=(a=R(t)).calendarEl,e=a.calendarDate,n=a.minDate,t=a.maxDate,a=o.querySelector(ce),a=parseInt(a.textContent,10)-12,a=Math.max(0,a),a=g(e,a),t=l(a,n,t),(t=(o=_(o,t.getFullYear())).querySelector(ee)).disabled&&(t=o.querySelector(re)),t.focus())}),a(W,ne,function(){var t,e,n,a,o;(t=this).disabled||(o=(a=R(t)).calendarEl,e=a.calendarDate,n=a.minDate,t=a.maxDate,a=o.querySelector(ce),a=parseInt(a.textContent,10)+12,a=Math.max(0,a),a=g(e,a),t=l(a,n,t),(t=(o=_(o,t.getFullYear())).querySelector(ne)).disabled&&(t=o.querySelector(re)),t.focus())}),a(W,Zt,function(){L(this).querySelector(ie).focus()}),a(W,Xt,function(){_(this).querySelector(ce).focus()}),W)),a(he,"keyup",a({},Yt,function(t){var e=this.dataset.keydownKeyCode;"".concat(t.keyCode)!==e&&t.preventDefault()})),a(he,"keydown",(a(W={},Rt,function(t){13===t.keyCode&&E(this)}),a(W,Kt,Y({Up:ge,ArrowUp:ge,Down:ye,ArrowDown:ye,Left:we,ArrowLeft:we,Right:Ee,ArrowRight:Ee,Home:xe,End:Ae,PageDown:Se,PageUp:De,"Shift+PageDown":Le,"Shift+PageUp":_e})),a(W,ae,Y({Tab:be.tabAhead,"Shift+Tab":be.tabBack})),a(W,Jt,Y({Up:Te,ArrowUp:Te,Down:ke,ArrowDown:ke,Left:Me,ArrowLeft:Me,Right:Oe,ArrowRight:Oe,Home:je,End:Ie,PageDown:Ne,PageUp:qe})),a(W,oe,Y({Tab:ve.tabAhead,"Shift+Tab":ve.tabBack})),a(W,te,Y({Up:Pe,ArrowUp:Pe,Down:Fe,ArrowDown:Fe,Left:t,ArrowLeft:t,Right:V,ArrowRight:V,Home:G,End:pe,PageDown:Ce,PageUp:me})),a(W,re,Y({Tab:Be.tabAhead,"Shift+Tab":Be.tabBack})),a(W,Yt,function(t){this.dataset.keydownKeyCode=t.keyCode}),a(W,Pt,function(t){Y({Escape:C})(t)}),W)),a(he,"focusout",(a(W={},Rt,function(){E(this)}),a(W,Pt,function(t){this.contains(t.relatedTarget)||S(this)}),W)),a(he,"input",a({},Rt,function(){var t,e,n,a;e=R(t=this),n=e.internalInputEl,a=e.inputDate,e="",a&&!w(t)&&(e=F(a)),n.value!==e&&h(n,e),D(this)})),he);z()||(he.mousemove=(a(z={},Wt,function(){var t,e,n;(t=this).disabled||(n=(e=t.closest(Yt)).dataset.value,(t=t.dataset.value)!==n&&(t=v(t),A(e,t).querySelector(Vt).focus()))}),a(z,Jt,function(){var t,e;(t=this).disabled||t.classList.contains(xt)||(e=parseInt(t.dataset.value,10),L(t,e).querySelector(ie).focus())}),a(z,te,function(){var t,e;(t=this).disabled||t.classList.contains(Dt)||(e=parseInt(t.dataset.value,10),_(t,e).querySelector(ce).focus())}),z));he=U(he,{init:function(t){K(Pt,t).forEach(function(t){!function(t){var e=t.closest(Pt),n=e.dataset.defaultValue,a=e.querySelector("input");if(!a)throw new Error("".concat(Pt," is missing inner input"));a.value&&(a.value="");var o=v(e.dataset.minDate||a.getAttribute("min"));e.dataset.minDate=o?F(o):"0000-01-01",(t=v(e.dataset.maxDate||a.getAttribute("max")))&&(e.dataset.maxDate=F(t)),(o=document.createElement("div")).classList.add(Q),o.tabIndex="-1",(t=a.cloneNode()).classList.add(tt),t.type="text",t.name="",o.appendChild(t),o.insertAdjacentHTML("beforeend",['<button type="button" class="'.concat(et,'" aria-haspopup="true" aria-label="Toggle calendar">&nbsp;</button>'),'<div class="'.concat(nt,'" role="dialog" aria-modal="true" hidden></div>'),'<div class="usa-sr-only '.concat(at,'" role="status" aria-live="polite"></div>')].join("")),a.setAttribute("aria-hidden","true"),a.setAttribute("tabindex","-1"),a.classList.add("usa-sr-only",J),a.id="",a.required=!1,e.appendChild(o),e.classList.add(X),n&&x(e,n),a.disabled&&(m(e),a.disabled=!1)}(t)})},getDatePickerContext:R,disable:m,enable:function(t){var e=R(t),t=e.externalInputEl;e.toggleBtnEl.disabled=!1,t.disabled=!1},isDateInputInvalid:w,setCalendarValue:x,validateDateInput:E,renderCalendar:A,updateCalendarIfVisible:D});e.exports=he},{"../config":33,"../events":34,"../utils/active-element":41,"../utils/behavior":42,"../utils/is-ios-device":45,"../utils/select":46,"receptor/keymap":14}],22:[function(t,e,n){"use strict";function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(t)))return;var n=[],a=!0,o=!1,r=void 0;try{for(var i,c=t[Symbol.iterator]();!(a=(i=c.next()).done)&&(n.push(i.value),!e||n.length!==e);a=!0);}catch(t){o=!0,r=t}finally{try{a||null==c.return||c.return()}finally{if(o)throw r}}return n}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return r(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return r(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function r(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,a=new Array(e);n<e;n++)a[n]=t[n];return a}function i(t){var e=t.closest(g);if(!e)throw new Error("Element is missing outer ".concat(g));var n=e.querySelector(y),t=e.querySelector(w);return{dateRangePickerEl:e,rangeStartEl:n,rangeEndEl:t}}function c(t){var e=(a=i(t)).dateRangePickerEl,n=a.rangeStartEl,t=a.rangeEndEl,a=f(n).internalInputEl;(n=a.value)&&!p(a)?(t.dataset.minDate=n,t.dataset.rangeDate=n,t.dataset.defaultDate=n):(t.dataset.minDate=e.dataset.minDate||"",t.dataset.rangeDate="",t.dataset.defaultDate=""),b(t)}function s(t){var e=(a=i(t)).dateRangePickerEl,n=a.rangeStartEl,t=a.rangeEndEl,a=f(t).internalInputEl;(t=a.value)&&!p(a)?(n.dataset.maxDate=t,n.dataset.rangeDate=t,n.dataset.defaultDate=t):(n.dataset.maxDate=e.dataset.maxDate||"",n.dataset.rangeDate="",n.dataset.defaultDate=""),b(n)}var u=t("../utils/behavior"),l=t("../utils/select"),d=t("../config").prefix,t=t("./date-picker"),f=t.getDatePickerContext,p=t.isDateInputInvalid,b=t.updateCalendarIfVisible,t="".concat(d,"-date-picker"),d="".concat(d,"-date-range-picker"),v="".concat(d,"__range-start"),h="".concat(d,"__range-end"),m=".".concat(t),g=".".concat(d),y=".".concat(v),w=".".concat(h),u=u({"input change":(a(u={},y,function(){c(this)}),a(u,w,function(){s(this)}),u)},{init:function(t){l(g,t).forEach(function(t){!function(t){var e=t.closest(g),n=o(l(m,e),2),a=n[0],t=n[1];if(!a)throw new Error("".concat(g," is missing inner two '").concat(m,"' elements"));if(!t)throw new Error("".concat(g," is missing second '").concat(m,"' element"));a.classList.add(v),t.classList.add(h),e.dataset.minDate||(e.dataset.minDate="0000-01-01"),n=e.dataset.minDate,a.dataset.minDate=n,t.dataset.minDate=n,(n=e.dataset.maxDate)&&(a.dataset.maxDate=n,t.dataset.maxDate=n),c(e),s(e)}(t)})}});e.exports=u},{"../config":33,"../utils/behavior":42,"../utils/select":46,"./date-picker":21}],23:[function(t,e,n){"use strict";function a(t){var e=t.closest(i);if(!e)throw new Error("Element is missing outer ".concat(i));return t=e.querySelector(s),{dropZoneEl:e,inputEl:t}}function l(t){var e=a(t),t=e.dropZoneEl;e.inputEl.disabled=!0,t.classList.add(y),t.setAttribute("aria-disabled","true")}function c(t){return t.replace(/[^a-z0-9]/g,function(t){var e=t.charCodeAt(0);return 32===e?"-":65<=e&&e<=90?"img_".concat(t.toLowerCase()):"__".concat(e.toString(16).slice(-4))})}function d(t,e){var n=t.querySelectorAll(".".concat(u)),a=t.querySelector(".".concat(g)),o=t.querySelector(".".concat(E));a&&(a.outerHTML=""),o&&(o.outerHTML="",t.classList.remove(L)),null!==n&&(e&&e.classList.remove(D),Array.prototype.forEach.call(n,function(t){t.parentNode.removeChild(t)}))}function f(t,e,a,o){var r=t.target.files,i=document.createElement("div");d(o,a);for(var n=0;n<r.length;n+=1)!function(t){var e=new FileReader,n=r[t].name;e.onloadstart=function(){var t=c(n),t='<img id="'.concat(t,'" src="').concat(j,'" alt="" class="').concat(_," ").concat(S,'"/>');a.insertAdjacentHTML("afterend",'<div class="'.concat(u,'" aria-hidden="true">').concat(t).concat(n,"<div>"))},e.onloadend=function(){var t=c(n),t=document.getElementById(t);0<n.indexOf(".pdf")?t.setAttribute("onerror",'this.onerror=null;this.src="'.concat(j,'"; this.classList.add("').concat(T,'")')):0<n.indexOf(".doc")||0<n.indexOf(".pages")?t.setAttribute("onerror",'this.onerror=null;this.src="'.concat(j,'"; this.classList.add("').concat(k,'")')):0<n.indexOf(".xls")||0<n.indexOf(".numbers")?t.setAttribute("onerror",'this.onerror=null;this.src="'.concat(j,'"; this.classList.add("').concat(O,'")')):0<n.indexOf(".mov")||0<n.indexOf(".mp4")?t.setAttribute("onerror",'this.onerror=null;this.src="'.concat(j,'"; this.classList.add("').concat(M,'")')):t.setAttribute("onerror",'this.onerror=null;this.src="'.concat(j,'"; this.classList.add("').concat(C,'")')),t.classList.remove(S),t.src=e.result},r[t]&&e.readAsDataURL(r[t]),0===t?(o.insertBefore(i,a),i.innerHTML='Selected file <span class="usa-file-input__choose">Change file</span>'):1<=t&&(o.insertBefore(i,a),i.innerHTML="".concat(t+1,' files selected <span class="usa-file-input__choose">Change files</span>')),i&&(a.classList.add(D),i.classList.add(g))}(n)}var o=t("../utils/select"),r=t("../utils/behavior"),t=t("../config").prefix,p="".concat(t,"-file-input"),i=".".concat(p),b="".concat(t,"-file-input__input"),v="".concat(t,"-file-input__target"),s=".".concat(b),h="".concat(t,"-file-input__box"),m="".concat(t,"-file-input__instructions"),u="".concat(t,"-file-input__preview"),g="".concat(t,"-file-input__preview-heading"),y="".concat(t,"-file-input--disabled"),w="".concat(t,"-file-input__choose"),E="".concat(t,"-file-input__accepted-files-message"),x="".concat(t,"-file-input__drag-text"),A="".concat(t,"-file-input--drag"),S="is-loading",D="display-none",L="has-invalid-file",_="".concat(t,"-file-input__preview-image"),C="".concat(_,"--generic"),T="".concat(_,"--pdf"),k="".concat(_,"--word"),M="".concat(_,"--video"),O="".concat(_,"--excel"),j="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",r=r({},{init:function(t){o(i,t).forEach(function(e){var t,n,a,o,r,i,c,o=(n=(t=e).hasAttribute("multiple"),a=document.createElement("div"),o=document.createElement("div"),r=document.createElement("div"),i=document.createElement("div"),c=t.hasAttribute("disabled"),t.classList.remove(p),t.classList.add(b),a.classList.add(p),r.classList.add(h),i.classList.add(m),i.setAttribute("aria-hidden","true"),o.classList.add(v),t.parentNode.insertBefore(o,t),t.parentNode.insertBefore(a,o),o.appendChild(t),a.appendChild(o),t.parentNode.insertBefore(i,t),t.parentNode.insertBefore(r,t),c&&l(t),i.innerHTML='<span class="'.concat(x,n?'">Drag files here or </span><span class="':'">Drag file here or </span><span class="').concat(w,'">choose from folder</span>'),(/rv:11.0/i.test(navigator.userAgent)||/Edge\/\d./i.test(navigator.userAgent))&&(a.querySelector(".".concat(x)).outerHTML=""),{instructions:i,dropTarget:o}),s=o.instructions,u=o.dropTarget;u.addEventListener("dragover",function(){this.classList.add(A)},!1),u.addEventListener("dragleave",function(){this.classList.remove(A)},!1),u.addEventListener("drop",function(t){!function(t,e,n,a){var o=e.getAttribute("accept");if(a.classList.remove(L),o){for(var r=o.split(","),o=document.createElement("div"),i=!0,c=0;c<t.dataTransfer.files.length;c+=1){var s=t.dataTransfer.files[c];if(!i)break;for(var u=0;u<r.length;u+=1){var l=r[u];if(i=0<s.name.indexOf(l)||s.type.includes(l.replace(/\*/g,"")))break}}i||(d(a,n),e.value="",a.insertBefore(o,e),o.innerHTML="This is not a valid file type.",o.classList.add(E),a.classList.add(L),t.preventDefault(),t.stopPropagation())}}(t,e,s,u),this.classList.remove(A)},!1),e.onchange=function(t){f(t,0,s,u)}})},getFileInputContext:a,disable:l,enable:function(t){var e=a(t),t=e.dropZoneEl;e.inputEl.disabled=!1,t.classList.remove(y),t.removeAttribute("aria-disabled")}});e.exports=r},{"../config":33,"../utils/behavior":42,"../utils/select":46}],24:[function(t,e,n){"use strict";function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var o,r=t("lodash.debounce"),i=t("../utils/behavior"),c=t("../utils/select"),s=t("../events").CLICK,u=t("../config").prefix,l="hidden",t=".".concat(u,"-footer--big"),d="".concat(t," nav"),t="".concat(d," .").concat(u,"-footer__primary-link"),f=".".concat(u,"-footer__primary-content--collapsible");var p=r(function(){var e;o!==window.innerWidth&&(o=window.innerWidth,e=window.innerWidth<480,c(f).forEach(function(t){return t.classList.toggle(l,e)}))},180);e.exports=i(a({},s,a({},t,function(){var e;window.innerWidth<480&&((e=this.closest(f)).classList.toggle(l),c(f,e.closest(d)).forEach(function(t){t!==e&&t.classList.add(l)}))})),{HIDE_MAX_WIDTH:480,DEBOUNCE_RATE:180,init:function(){p(),window.addEventListener("resize",p)},teardown:function(){window.removeEventListener("resize",p)}})},{"../config":33,"../events":34,"../utils/behavior":42,"../utils/select":46,"lodash.debounce":6}],25:[function(t,e,n){"use strict";var a=t("./accordion"),o=t("./banner"),r=t("./character-count"),i=t("./combo-box"),c=t("./file-input"),s=t("./footer"),u=t("./navigation"),l=t("./password"),d=t("./search"),f=t("./skipnav"),p=t("./tooltip"),b=t("./validator"),v=t("./date-picker"),h=t("./date-range-picker"),t=t("./time-picker");e.exports={accordion:a,banner:o,characterCount:r,comboBox:i,datePicker:v,dateRangePicker:h,fileInput:c,footer:s,navigation:u,password:l,search:d,skipnav:f,timePicker:t,tooltip:p,validator:b}},{"./accordion":17,"./banner":18,"./character-count":19,"./combo-box":20,"./date-picker":21,"./date-range-picker":22,"./file-input":23,"./footer":24,"./navigation":26,"./password":27,"./search":28,"./skipnav":29,"./time-picker":30,"./tooltip":31,"./validator":32}],26:[function(t,e,n){"use strict";function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(){return document.body.classList.contains(x)}function r(){var t=document.body.querySelector(w);o()&&t&&0===t.getBoundingClientRect().width&&A.toggleNav.call(t,!1)}function i(){return A.toggleNav.call(A,!1)}function c(){d(s,!1),s=null}var s,u=t("../utils/behavior"),l=t("../utils/select"),d=t("../utils/toggle"),f=t("../utils/focus-trap"),p=t("./accordion"),b=t("../events").CLICK,v=t("../config").prefix,h=".".concat(v,"-nav"),m="".concat(h," a"),g="button.".concat(v,"-nav__link"),y=".".concat(v,"-menu-btn"),w=".".concat(v,"-nav__close"),t=".".concat(v,"-overlay"),v="".concat(w,", .").concat(v,"-overlay"),E=[h,t].join(", "),x="usa-js-mobile-nav--active",t=function(t){var e=document.body,n="boolean"==typeof t?t:!o();e.classList.toggle(x,n),l(E).forEach(function(t){return t.classList.toggle("is-visible",n)}),A.focusTrap.update(n);t=e.querySelector(w),e=e.querySelector(y);return n&&t?t.focus():!n&&document.activeElement===t&&e&&e.focus(),n},A=u(a({},b,(a(b={},g,function(){return s&&s!==this&&c(),s?c():d(s=this,!0),!1}),a(b,"body",function(){s&&c()}),a(b,y,t),a(b,v,t),a(b,m,function(){var t=this.closest(p.ACCORDION);t&&p.getButtons(t).forEach(function(t){return p.hide(t)}),o()&&A.toggleNav.call(A,!1)}),b)),{init:function(t){t=t.querySelector(h);t&&(A.focusTrap=f(t,{Escape:i})),r(),window.addEventListener("resize",r,!1)},teardown:function(){window.removeEventListener("resize",r,!1),s=!1},focusTrap:null,toggleNav:t});e.exports=A},{"../config":33,"../events":34,"../utils/behavior":42,"../utils/focus-trap":43,"../utils/select":46,"../utils/toggle":49,"./accordion":17}],27:[function(t,e,n){"use strict";function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var o=t("../utils/behavior"),r=t("../utils/toggle-form-input"),i=t("../events").CLICK,t=t("../config").prefix,t=".".concat(t,"-show-password, .").concat(t,"-show-multipassword");e.exports=o(a({},i,a({},t,function(t){t.preventDefault(),r(this)})))},{"../config":33,"../events":34,"../utils/behavior":42,"../utils/toggle-form-input":48}],28:[function(t,e,n){"use strict";function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var o,r=t("receptor/ignore"),i=t("../utils/behavior"),c=t("../utils/select"),s=t("../events").CLICK,u=".js-search-button",l=".js-search-form",d=function(t,e){var n,a=function(t){t=t.closest("header");return(t||document).querySelector(l)}(t);if(!a)throw new Error("No ".concat(l," found for search toggle in ").concat("header","!"));t.hidden=e,a.hidden=!e,e&&((e=a.querySelector("[type=search]"))&&e.focus(),n=r(a,function(){o&&function(){d(this,!1),o=void 0}.call(o),document.body.removeEventListener(s,n)}),setTimeout(function(){document.body.addEventListener(s,n)},0))};i=i(a({},s,a({},u,function(){d(this,!0),o=this})),{init:function(t){c(u,t).forEach(function(t){d(t,!1)})},teardown:function(){o=void 0}});e.exports=i},{"../events":34,"../utils/behavior":42,"../utils/select":46,"receptor/ignore":12}],29:[function(t,e,n){"use strict";function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var o=t("receptor/once"),r=t("../utils/behavior"),i=t("../events").CLICK,t=t("../config").prefix,t=".".concat(t,'-skipnav[href^="#"], .').concat(t,'-footer__return-to-top [href^="#"]');e.exports=r(a({},i,a({},t,function(){var t=encodeURI(this.getAttribute("href")),e=document.getElementById("#"===t?"main-content":t.slice(1));e&&(e.style.outline="0",e.setAttribute("tabindex",0),e.focus(),e.addEventListener("blur",o(function(){e.setAttribute("tabindex",-1)})))})))},{"../config":33,"../events":34,"../utils/behavior":42,"receptor/once":15}],30:[function(t,e,n){"use strict";function a(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(t)))return;var n=[],a=!0,o=!1,r=void 0;try{for(var i,c=t[Symbol.iterator]();!(a=(i=c.next()).done)&&(n.push(i.value),!e||n.length!==e);a=!0);}catch(t){o=!0,r=t}finally{try{a||null==c.return||c.return()}finally{if(o)throw r}}return n}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return o(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return o(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,a=new Array(e);n<e;n++)a[n]=t[n];return a}function p(t){var e,n;return t&&(t=(n=a(t.split(":").map(function(t){var e,t=parseInt(t,10);return Number.isNaN(t)||(e=t),e}),2))[0],n=n[1],null!=t&&null!=n&&(e=60*t+n)),e}var r=t("../utils/behavior"),i=t("../utils/select"),c=t("../config").prefix,t=t("./combo-box"),b=t.COMBO_BOX_CLASS,s=t.enhanceComboBox,c="".concat(c,"-time-picker"),v=".".concat(c),h={filter:"0?{{ hourQueryFilter }}:{{minuteQueryFilter}}.*{{ apQueryFilter }}m?",apQueryFilter:"([ap])",hourQueryFilter:"([1-9][0-2]?)",minuteQueryFilter:"[\\d]+:([0-9]{0,2})"},r=r({},{init:function(t){i(v,t).forEach(function(t){!function(t){var e=t.closest(v),n=e.querySelector("input");if(!n)throw new Error("".concat(v," is missing inner input"));var a=document.createElement("select");["id","name","required","aria-label","aria-labelledby"].forEach(function(t){var e;n.hasAttribute(t)&&(e=n.getAttribute(t),a.setAttribute(t,e),n.removeAttribute(t))});for(var o=function(t,e){return"0000".concat(t).slice(-e)},t=Math.max(0,p(e.dataset.minTime)||0),r=Math.min(1439,p(e.dataset.maxTime)||1439),i=Math.floor(Math.max(1,e.dataset.step||30)),c=t;c<=r;c+=i){var s=(d=void 0,d=(f=c)%60,f=Math.floor(f/60),{minute:d,hour24:f,hour12:f%12||12,ampm:f<12?"am":"pm"}),u=s.minute,l=s.hour24,d=s.hour12,f=s.ampm,s=document.createElement("option");s.value="".concat(o(l,2),":").concat(o(u,2)),s.text="".concat(d,":").concat(o(u,2)).concat(f),a.appendChild(s)}e.classList.add(b),Object.keys(h).forEach(function(t){e.dataset[t]=h[t]}),e.dataset.disableFiltering="true",e.appendChild(a),n.style.display="none"}(t),s(t)})},FILTER_DATASET:h});e.exports=r},{"../config":33,"../utils/behavior":42,"../utils/select":46,"./combo-box":20}],31:[function(t,e,n){"use strict";function d(t,e,n){for(var a=e.split(" "),o=0,r=a.length;o<r;o+=1)t.addEventListener(a[o],n,!1)}function f(e,t,n,a){function o(t){e.classList.remove("".concat(x,"--top")),e.classList.remove("".concat(x,"--bottom")),e.classList.remove("".concat(x,"--right")),e.classList.remove("".concat(x,"--left")),e.classList.add("".concat(x,"--").concat(t))}function r(t){o("top"),t.style.marginLeft="".concat(g,"px"),E(t)||t.classList.add(S),t.style.marginBottom="".concat(w+f+b,"px")}function i(t){o("bottom"),t.style.marginLeft="".concat(g,"px"),E(t)||t.classList.add(S),t.style.marginTop="".concat(w+d+p,"px")}function c(t){return o("right"),t.style.marginBottom="0",t.style.marginLeft="".concat(y+h,"px"),t.style.bottom="".concat((l-v)/2+f+b,"px"),0}function s(t){o("left"),t.style.marginBottom="0",t.style.marginLeft=m<h?"".concat(h-m-7,"px"):"-".concat(m-h+7,"px"),t.style.bottom="".concat((l-v)/2+f+b,"px")}e.setAttribute("aria-hidden","false"),e.classList.add("is-set");var u=t.offsetWidth,l=t.offsetHeight,d=parseInt(window.getComputedStyle(t).getPropertyValue("margin-top"),10),f=parseInt(window.getComputedStyle(t).getPropertyValue("margin-bottom"),10),p=parseInt(window.getComputedStyle(a).getPropertyValue("padding-top"),10),b=parseInt(window.getComputedStyle(a).getPropertyValue("padding-bottom"),10),v=parseInt(window.getComputedStyle(e).getPropertyValue("height"),10),h=t.offsetLeft,m=e.offsetWidth,g=u/2+h,y=u+5+2,w=l+5+2;switch(n){case"top":r(e),E(e)||i(e);break;case"bottom":i(e),E(e)||r(e);break;case"right":c(e),E(e)||(s(e),E(e)||r(e));break;case"left":s(e),E(e)||(c(e),E(e)||r(e))}setTimeout(function(){e.classList.add(A)},20)}var a=t("../utils/select"),o=t("../utils/behavior"),r=t("../config").prefix,E=t("../utils/is-in-viewport"),i=".".concat(r,"-tooltip"),p="".concat(r,"-tooltip__trigger"),b="".concat(r,"-tooltip"),x="".concat(r,"-tooltip__body"),A="is-visible",S="".concat(r,"-tooltip__body--wrap"),o=o({},{init:function(t){a(i,t).forEach(function(t){var e,n,a,o,r,i,c,a=(e=t,n="tooltip-".concat(Math.floor(9e5*Math.random())+1e5),a=e.getAttribute("title"),o=document.createElement("span"),r=document.createElement("span"),i=e.getAttribute("data-position")?e.getAttribute("data-position"):"top",c=e.getAttribute("data-classes"),e.setAttribute("aria-describedby",n),e.setAttribute("tabindex","0"),e.setAttribute("title",""),e.classList.remove(b),e.classList.add(p),e.parentNode.insertBefore(o,e),o.appendChild(e),o.classList.add(b),o.appendChild(r),c&&c.split(" ").forEach(function(t){return o.classList.add(t)}),r.classList.add(x),r.setAttribute("id",n),r.setAttribute("role","tooltip"),r.setAttribute("aria-hidden","true"),r.innerHTML=a,{tooltipBody:r,position:i,tooltipContent:a,wrapper:o}),s=a.tooltipBody,u=a.position,l=a.wrapper;a.tooltipContent&&(d(t,"mouseenter focus",function(){return f(s,t,u,l),!1}),d(t,"mouseleave blur keydown",function(){var t;return(t=s).classList.remove(A),t.classList.remove("is-set"),t.classList.remove(S),t.setAttribute("aria-hidden","true"),!1}))})}});e.exports=o},{"../config":33,"../utils/behavior":42,"../utils/is-in-viewport":44,"../utils/select":46}],32:[function(t,e,n){"use strict";var a=t("../utils/behavior"),o=t("../utils/validate-input");a=a({"keyup change":{"input[data-validation-element]":function(){o(this)}}});e.exports=a},{"../utils/behavior":42,"../utils/validate-input":50}],33:[function(t,e,n){"use strict";e.exports={prefix:"usa"}},{}],34:[function(t,e,n){"use strict";e.exports={CLICK:"click"}},{}],35:[function(t,e,n){"use strict";"function"!=typeof window.CustomEvent&&(window.CustomEvent=function(t,e){var n=e||{bubbles:!1,cancelable:!1,detail:null};return(e=document.createEvent("CustomEvent")).initCustomEvent(t,n.bubbles,n.cancelable,n.detail),e})},{}],36:[function(t,e,n){"use strict";var a=window.HTMLElement.prototype,o="hidden";o in a||Object.defineProperty(a,o,{get:function(){return this.hasAttribute(o)},set:function(t){t?this.setAttribute(o,""):this.removeAttribute(o)}})},{}],37:[function(t,e,n){"use strict";t("classlist-polyfill"),t("./element-hidden"),t("./number-is-nan"),t("./custom-event"),t("./svg4everybody")},{"./custom-event":35,"./element-hidden":36,"./number-is-nan":38,"./svg4everybody":39,"classlist-polyfill":1}],38:[function(t,e,n){"use strict";Number.isNaN=Number.isNaN||function(t){return"number"==typeof t&&t!=t}},{}],39:[function(t,e,n){"use strict";function a(t){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var o,r;r=function(){function b(t,e,n,a){if(n){var o=document.createDocumentFragment(),r=!e.hasAttribute("viewBox")&&n.getAttribute("viewBox");r&&e.setAttribute("viewBox",r);for(var i=document.importNode?document.importNode(n,!0):n.cloneNode(!0),c=document.createElementNS(e.namespaceURI||"http://www.w3.org/2000/svg","g");i.childNodes.length;)c.appendChild(i.firstChild);if(a)for(var s=0;a.attributes.length>s;s++){var u=a.attributes[s];"xlink:href"!==u.name&&"href"!==u.name&&c.setAttribute(u.name,u.value)}o.appendChild(c),t.appendChild(o)}}return function(t){var s=Object(t),t=window.top!==window.self,u="polyfill"in s?s.polyfill:/\bTrident\/[567]\b|\bMSIE (?:9|10)\.0\b/.test(navigator.userAgent)||(navigator.userAgent.match(/\bEdge\/12\.(\d+)\b/)||[])[1]<10547||(navigator.userAgent.match(/\bAppleWebKit\/(\d+)\b/)||[])[1]<537||/\bEdge\/.(\d+)\b/.test(navigator.userAgent)&&t,l={},d=window.requestAnimationFrame||setTimeout,f=document.getElementsByTagName("use"),p=0;u&&function t(){if(p&&f.length-p<=0)d(t,67);else{for(var e=p=0;e<f.length;){var n,a,o=f[e],r=o.parentNode,i=function(t){for(var e=t;"svg"!==e.nodeName.toLowerCase()&&(e=e.parentNode););return e}(r),c=o.getAttribute("xlink:href")||o.getAttribute("href");!c&&s.attributeName&&(c=o.getAttribute(s.attributeName)),i&&c?u&&(!s.validate||s.validate(c,i,o)?(r.removeChild(o),n=(a=c.split("#")).shift(),c=a.join("#"),n.length?((a=l[n])||((a=l[n]=new XMLHttpRequest).open("GET",n),a.send(),a._embeds=[]),a._embeds.push({parent:r,svg:i,id:c}),function(a,o){a.onreadystatechange=function(){var n;4===a.readyState&&((n=a._cachedDocument)||((n=a._cachedDocument=document.implementation.createHTMLDocument("")).body.innerHTML=a.responseText,n.domain!==document.domain&&(n.domain=document.domain),a._cachedTarget={}),a._embeds.splice(0).map(function(t){var e=(e=a._cachedTarget[t.id])||(a._cachedTarget[t.id]=n.getElementById(t.id));b(t.parent,t.svg,e,o)}))},a.onreadystatechange()}(a,o)):b(r,i,document.getElementById(c),o)):(++e,++p)):++e}d(t,67)}}()}},(o=void 0)===o&&(o=window),"function"==typeof define&&define.amd?define([],function(){return o.svg4everybody=r()}):"object"==(void 0===e?"undefined":a(e))&&e.exports?e.exports=r():o.svg4everybody=r()},{}],40:[function(t,e,n){"use strict";var a=t("domready");window.uswdsPresent=!0,t("./polyfills");var o=t("./config"),r=t("./components"),i=t("./polyfills/svg4everybody");o.components=r,a(function(){var e=document.body;Object.keys(r).forEach(function(t){r[t].on(e)}),i()}),e.exports=o},{"./components":25,"./config":33,"./polyfills":37,"./polyfills/svg4everybody":39,domready:2}],41:[function(t,e,n){"use strict";e.exports=function(){return(0<arguments.length&&void 0!==arguments[0]?arguments[0]:document).activeElement}},{}],42:[function(t,e,n){"use strict";function a(){for(var t=arguments.length,a=new Array(t),e=0;e<t;e++)a[e]=arguments[e];return function(t){var e=this,n=0<arguments.length&&void 0!==t?t:document.body;a.forEach(function(t){"function"==typeof e[t]&&e[t].call(e,n)})}}var o=t("object-assign"),r=t("receptor/behavior");e.exports=function(t,e){return r(t,o({on:a("init","add"),off:a("teardown","remove")},e))}},{"object-assign":7,"receptor/behavior":8}],43:[function(t,e,n){"use strict";function o(t){var e=(t=a('a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex="0"], [contenteditable]',t))[0],n=t[t.length-1];return{firstTabStop:e,lastTabStop:n,tabAhead:function(t){s()===n&&(t.preventDefault(),e.focus())},tabBack:function(t){s()===e&&(t.preventDefault(),n.focus())}}}var r=t("object-assign"),i=t("receptor").keymap,c=t("./behavior"),a=t("./select"),s=t("./active-element");e.exports=function(t){var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},n=o(t),a=e.Esc,t=e.Escape;t&&!a&&(e.Esc=t);e=i(r({Tab:n.tabAhead,"Shift+Tab":n.tabBack},e));return c({keydown:e},{init:function(){n.firstTabStop.focus()},update:function(t){t?this.on():this.off()}})}},{"./active-element":41,"./behavior":42,"./select":46,"object-assign":7,receptor:13}],44:[function(t,e,n){"use strict";e.exports=function(t){var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:window,n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:document.documentElement;return 0<=(t=t.getBoundingClientRect()).top&&0<=t.left&&t.bottom<=(e.innerHeight||n.clientHeight)&&t.right<=(e.innerWidth||n.clientWidth)}},{}],45:[function(t,e,n){"use strict";e.exports=function(){return"undefined"!=typeof navigator&&(navigator.userAgent.match(/(iPod|iPhone|iPad)/g)||"MacIntel"===navigator.platform&&1<navigator.maxTouchPoints)&&!window.MSStream}},{}],46:[function(t,e,n){"use strict";function a(t){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}e.exports=function(t,e){if("string"!=typeof t)return[];var n;e&&((n=e)&&"object"===a(n)&&1===n.nodeType)||(e=window.document);t=e.querySelectorAll(t);return Array.prototype.slice.call(t)}},{}],47:[function(t,e,n){"use strict";e.exports=function(t,e){t.setAttribute("autocapitalize","off"),t.setAttribute("autocorrect","off"),t.setAttribute("type",e?"password":"text")}},{}],48:[function(t,e,n){"use strict";var o=t("resolve-id-refs"),r=t("./toggle-field-mask"),i="aria-pressed",c="data-show-text";e.exports=function(t){var e=t.hasAttribute(i)&&"true"!==t.getAttribute(i);o(t.getAttribute("aria-controls")).forEach(function(t){return r(t,e)}),t.hasAttribute(c)||t.setAttribute(c,t.textContent);var n=t.getAttribute(c),a=t.getAttribute("data-hide-text")||n.replace(/\bShow\b/i,function(t){return"".concat("S"===t[0]?"H":"h","ide")});return t.textContent=e?n:a,t.setAttribute(i,e),e}},{"./toggle-field-mask":47,"resolve-id-refs":16}],49:[function(t,e,n){"use strict";var a="aria-expanded";e.exports=function(t,e){var n=e;"boolean"!=typeof n&&(n="false"===t.getAttribute(a)),t.setAttribute(a,n);e=t.getAttribute("aria-controls"),t=document.getElementById(e);if(!t)throw new Error('No toggle target found with id: "'.concat(e,'"'));return n?t.removeAttribute("hidden"):t.setAttribute("hidden",""),n}},{}],50:[function(t,e,n){"use strict";function r(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(t)))return;var n=[],a=!0,o=!1,r=void 0;try{for(var i,c=t[Symbol.iterator]();!(a=(i=c.next()).done)&&(n.push(i.value),!e||n.length!==e);a=!0);}catch(t){o=!0,r=t}finally{try{a||null==c.return||c.return()}finally{if(o)throw r}}return n}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return a(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return a(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function a(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,a=new Array(e);n<e;n++)a[n]=t[n];return a}var i=t("elem-dataset"),t=t("../config").prefix,c="".concat(t,"-checklist__item--checked");e.exports=function(a){var t=i(a),e=t.validationElement,o="#"===e.charAt(0)?document.querySelector(e):document.getElementById(e);if(!o)throw new Error('No validation element found with id: "'.concat(e,'"'));Object.entries(t).forEach(function(t){var e=r(t,2),n=e[0],t=e[1];if(n.startsWith("validate")){e=n.substr("validate".length).toLowerCase(),n=new RegExp(t),t='[data-validator="'.concat(e,'"]'),t=o.querySelector(t);if(!t)throw new Error('No validator checkbox found for: "'.concat(e,'"'));n=n.test(a.value);t.classList.toggle(c,n),t.setAttribute("aria-checked",n)}})}},{"../config":33,"elem-dataset":3}]},{},[40]);

;
/*!
* jQuery Cycle2; version: 2.1.6 build: 20141007
* http://jquery.malsup.com/cycle2/
* Copyright (c) 2014 M. Alsup; Dual licensed: MIT/GPL
*/
!function(a){"use strict";function b(a){return(a||"").toLowerCase()}var c="2.1.6";a.fn.cycle=function(c){var d;return 0!==this.length||a.isReady?this.each(function(){var d,e,f,g,h=a(this),i=a.fn.cycle.log;if(!h.data("cycle.opts")){(h.data("cycle-log")===!1||c&&c.log===!1||e&&e.log===!1)&&(i=a.noop),i("--c2 init--"),d=h.data();for(var j in d)d.hasOwnProperty(j)&&/^cycle[A-Z]+/.test(j)&&(g=d[j],f=j.match(/^cycle(.*)/)[1].replace(/^[A-Z]/,b),i(f+":",g,"("+typeof g+")"),d[f]=g);e=a.extend({},a.fn.cycle.defaults,d,c||{}),e.timeoutId=0,e.paused=e.paused||!1,e.container=h,e._maxZ=e.maxZ,e.API=a.extend({_container:h},a.fn.cycle.API),e.API.log=i,e.API.trigger=function(a,b){return e.container.trigger(a,b),e.API},h.data("cycle.opts",e),h.data("cycle.API",e.API),e.API.trigger("cycle-bootstrap",[e,e.API]),e.API.addInitialSlides(),e.API.preInitSlideshow(),e.slides.length&&e.API.initSlideshow()}}):(d={s:this.selector,c:this.context},a.fn.cycle.log("requeuing slideshow (dom not ready)"),a(function(){a(d.s,d.c).cycle(c)}),this)},a.fn.cycle.API={opts:function(){return this._container.data("cycle.opts")},addInitialSlides:function(){var b=this.opts(),c=b.slides;b.slideCount=0,b.slides=a(),c=c.jquery?c:b.container.find(c),b.random&&c.sort(function(){return Math.random()-.5}),b.API.add(c)},preInitSlideshow:function(){var b=this.opts();b.API.trigger("cycle-pre-initialize",[b]);var c=a.fn.cycle.transitions[b.fx];c&&a.isFunction(c.preInit)&&c.preInit(b),b._preInitialized=!0},postInitSlideshow:function(){var b=this.opts();b.API.trigger("cycle-post-initialize",[b]);var c=a.fn.cycle.transitions[b.fx];c&&a.isFunction(c.postInit)&&c.postInit(b)},initSlideshow:function(){var b,c=this.opts(),d=c.container;c.API.calcFirstSlide(),"static"==c.container.css("position")&&c.container.css("position","relative"),a(c.slides[c.currSlide]).css({opacity:1,display:"block",visibility:"visible"}),c.API.stackSlides(c.slides[c.currSlide],c.slides[c.nextSlide],!c.reverse),c.pauseOnHover&&(c.pauseOnHover!==!0&&(d=a(c.pauseOnHover)),d.hover(function(){c.API.pause(!0)},function(){c.API.resume(!0)})),c.timeout&&(b=c.API.getSlideOpts(c.currSlide),c.API.queueTransition(b,b.timeout+c.delay)),c._initialized=!0,c.API.updateView(!0),c.API.trigger("cycle-initialized",[c]),c.API.postInitSlideshow()},pause:function(b){var c=this.opts(),d=c.API.getSlideOpts(),e=c.hoverPaused||c.paused;b?c.hoverPaused=!0:c.paused=!0,e||(c.container.addClass("cycle-paused"),c.API.trigger("cycle-paused",[c]).log("cycle-paused"),d.timeout&&(clearTimeout(c.timeoutId),c.timeoutId=0,c._remainingTimeout-=a.now()-c._lastQueue,(c._remainingTimeout<0||isNaN(c._remainingTimeout))&&(c._remainingTimeout=void 0)))},resume:function(a){var b=this.opts(),c=!b.hoverPaused&&!b.paused;a?b.hoverPaused=!1:b.paused=!1,c||(b.container.removeClass("cycle-paused"),0===b.slides.filter(":animated").length&&b.API.queueTransition(b.API.getSlideOpts(),b._remainingTimeout),b.API.trigger("cycle-resumed",[b,b._remainingTimeout]).log("cycle-resumed"))},add:function(b,c){var d,e=this.opts(),f=e.slideCount,g=!1;"string"==a.type(b)&&(b=a.trim(b)),a(b).each(function(){var b,d=a(this);c?e.container.prepend(d):e.container.append(d),e.slideCount++,b=e.API.buildSlideOpts(d),e.slides=c?a(d).add(e.slides):e.slides.add(d),e.API.initSlide(b,d,--e._maxZ),d.data("cycle.opts",b),e.API.trigger("cycle-slide-added",[e,b,d])}),e.API.updateView(!0),g=e._preInitialized&&2>f&&e.slideCount>=1,g&&(e._initialized?e.timeout&&(d=e.slides.length,e.nextSlide=e.reverse?d-1:1,e.timeoutId||e.API.queueTransition(e)):e.API.initSlideshow())},calcFirstSlide:function(){var a,b=this.opts();a=parseInt(b.startingSlide||0,10),(a>=b.slides.length||0>a)&&(a=0),b.currSlide=a,b.reverse?(b.nextSlide=a-1,b.nextSlide<0&&(b.nextSlide=b.slides.length-1)):(b.nextSlide=a+1,b.nextSlide==b.slides.length&&(b.nextSlide=0))},calcNextSlide:function(){var a,b=this.opts();b.reverse?(a=b.nextSlide-1<0,b.nextSlide=a?b.slideCount-1:b.nextSlide-1,b.currSlide=a?0:b.nextSlide+1):(a=b.nextSlide+1==b.slides.length,b.nextSlide=a?0:b.nextSlide+1,b.currSlide=a?b.slides.length-1:b.nextSlide-1)},calcTx:function(b,c){var d,e=b;return e._tempFx?d=a.fn.cycle.transitions[e._tempFx]:c&&e.manualFx&&(d=a.fn.cycle.transitions[e.manualFx]),d||(d=a.fn.cycle.transitions[e.fx]),e._tempFx=null,this.opts()._tempFx=null,d||(d=a.fn.cycle.transitions.fade,e.API.log('Transition "'+e.fx+'" not found.  Using fade.')),d},prepareTx:function(a,b){var c,d,e,f,g,h=this.opts();return h.slideCount<2?void(h.timeoutId=0):(!a||h.busy&&!h.manualTrump||(h.API.stopTransition(),h.busy=!1,clearTimeout(h.timeoutId),h.timeoutId=0),void(h.busy||(0!==h.timeoutId||a)&&(d=h.slides[h.currSlide],e=h.slides[h.nextSlide],f=h.API.getSlideOpts(h.nextSlide),g=h.API.calcTx(f,a),h._tx=g,a&&void 0!==f.manualSpeed&&(f.speed=f.manualSpeed),h.nextSlide!=h.currSlide&&(a||!h.paused&&!h.hoverPaused&&h.timeout)?(h.API.trigger("cycle-before",[f,d,e,b]),g.before&&g.before(f,d,e,b),c=function(){h.busy=!1,h.container.data("cycle.opts")&&(g.after&&g.after(f,d,e,b),h.API.trigger("cycle-after",[f,d,e,b]),h.API.queueTransition(f),h.API.updateView(!0))},h.busy=!0,g.transition?g.transition(f,d,e,b,c):h.API.doTransition(f,d,e,b,c),h.API.calcNextSlide(),h.API.updateView()):h.API.queueTransition(f))))},doTransition:function(b,c,d,e,f){var g=b,h=a(c),i=a(d),j=function(){i.animate(g.animIn||{opacity:1},g.speed,g.easeIn||g.easing,f)};i.css(g.cssBefore||{}),h.animate(g.animOut||{},g.speed,g.easeOut||g.easing,function(){h.css(g.cssAfter||{}),g.sync||j()}),g.sync&&j()},queueTransition:function(b,c){var d=this.opts(),e=void 0!==c?c:b.timeout;return 0===d.nextSlide&&0===--d.loop?(d.API.log("terminating; loop=0"),d.timeout=0,e?setTimeout(function(){d.API.trigger("cycle-finished",[d])},e):d.API.trigger("cycle-finished",[d]),void(d.nextSlide=d.currSlide)):void 0!==d.continueAuto&&(d.continueAuto===!1||a.isFunction(d.continueAuto)&&d.continueAuto()===!1)?(d.API.log("terminating automatic transitions"),d.timeout=0,void(d.timeoutId&&clearTimeout(d.timeoutId))):void(e&&(d._lastQueue=a.now(),void 0===c&&(d._remainingTimeout=b.timeout),d.paused||d.hoverPaused||(d.timeoutId=setTimeout(function(){d.API.prepareTx(!1,!d.reverse)},e))))},stopTransition:function(){var a=this.opts();a.slides.filter(":animated").length&&(a.slides.stop(!1,!0),a.API.trigger("cycle-transition-stopped",[a])),a._tx&&a._tx.stopTransition&&a._tx.stopTransition(a)},advanceSlide:function(a){var b=this.opts();return clearTimeout(b.timeoutId),b.timeoutId=0,b.nextSlide=b.currSlide+a,b.nextSlide<0?b.nextSlide=b.slides.length-1:b.nextSlide>=b.slides.length&&(b.nextSlide=0),b.API.prepareTx(!0,a>=0),!1},buildSlideOpts:function(c){var d,e,f=this.opts(),g=c.data()||{};for(var h in g)g.hasOwnProperty(h)&&/^cycle[A-Z]+/.test(h)&&(d=g[h],e=h.match(/^cycle(.*)/)[1].replace(/^[A-Z]/,b),f.API.log("["+(f.slideCount-1)+"]",e+":",d,"("+typeof d+")"),g[e]=d);g=a.extend({},a.fn.cycle.defaults,f,g),g.slideNum=f.slideCount;try{delete g.API,delete g.slideCount,delete g.currSlide,delete g.nextSlide,delete g.slides}catch(i){}return g},getSlideOpts:function(b){var c=this.opts();void 0===b&&(b=c.currSlide);var d=c.slides[b],e=a(d).data("cycle.opts");return a.extend({},c,e)},initSlide:function(b,c,d){var e=this.opts();c.css(b.slideCss||{}),d>0&&c.css("zIndex",d),isNaN(b.speed)&&(b.speed=a.fx.speeds[b.speed]||a.fx.speeds._default),b.sync||(b.speed=b.speed/2),c.addClass(e.slideClass)},updateView:function(a,b){var c=this.opts();if(c._initialized){var d=c.API.getSlideOpts(),e=c.slides[c.currSlide];!a&&b!==!0&&(c.API.trigger("cycle-update-view-before",[c,d,e]),c.updateView<0)||(c.slideActiveClass&&c.slides.removeClass(c.slideActiveClass).eq(c.currSlide).addClass(c.slideActiveClass),a&&c.hideNonActive&&c.slides.filter(":not(."+c.slideActiveClass+")").css("visibility","hidden"),0===c.updateView&&setTimeout(function(){c.API.trigger("cycle-update-view",[c,d,e,a])},d.speed/(c.sync?2:1)),0!==c.updateView&&c.API.trigger("cycle-update-view",[c,d,e,a]),a&&c.API.trigger("cycle-update-view-after",[c,d,e]))}},getComponent:function(b){var c=this.opts(),d=c[b];return"string"==typeof d?/^\s*[\>|\+|~]/.test(d)?c.container.find(d):a(d):d.jquery?d:a(d)},stackSlides:function(b,c,d){var e=this.opts();b||(b=e.slides[e.currSlide],c=e.slides[e.nextSlide],d=!e.reverse),a(b).css("zIndex",e.maxZ);var f,g=e.maxZ-2,h=e.slideCount;if(d){for(f=e.currSlide+1;h>f;f++)a(e.slides[f]).css("zIndex",g--);for(f=0;f<e.currSlide;f++)a(e.slides[f]).css("zIndex",g--)}else{for(f=e.currSlide-1;f>=0;f--)a(e.slides[f]).css("zIndex",g--);for(f=h-1;f>e.currSlide;f--)a(e.slides[f]).css("zIndex",g--)}a(c).css("zIndex",e.maxZ-1)},getSlideIndex:function(a){return this.opts().slides.index(a)}},a.fn.cycle.log=function(){window.console&&console.log&&console.log("[cycle2] "+Array.prototype.join.call(arguments," "))},a.fn.cycle.version=function(){return"Cycle2: "+c},a.fn.cycle.transitions={custom:{},none:{before:function(a,b,c,d){a.API.stackSlides(c,b,d),a.cssBefore={opacity:1,visibility:"visible",display:"block"}}},fade:{before:function(b,c,d,e){var f=b.API.getSlideOpts(b.nextSlide).slideCss||{};b.API.stackSlides(c,d,e),b.cssBefore=a.extend(f,{opacity:0,visibility:"visible",display:"block"}),b.animIn={opacity:1},b.animOut={opacity:0}}},fadeout:{before:function(b,c,d,e){var f=b.API.getSlideOpts(b.nextSlide).slideCss||{};b.API.stackSlides(c,d,e),b.cssBefore=a.extend(f,{opacity:1,visibility:"visible",display:"block"}),b.animOut={opacity:0}}},scrollHorz:{before:function(a,b,c,d){a.API.stackSlides(b,c,d);var e=a.container.css("overflow","hidden").width();a.cssBefore={left:d?e:-e,top:0,opacity:1,visibility:"visible",display:"block"},a.cssAfter={zIndex:a._maxZ-2,left:0},a.animIn={left:0},a.animOut={left:d?-e:e}}}},a.fn.cycle.defaults={allowWrap:!0,autoSelector:".cycle-slideshow[data-cycle-auto-init!=false]",delay:0,easing:null,fx:"fade",hideNonActive:!0,loop:0,manualFx:void 0,manualSpeed:void 0,manualTrump:!0,maxZ:100,pauseOnHover:!1,reverse:!1,slideActiveClass:"cycle-slide-active",slideClass:"cycle-slide",slideCss:{position:"absolute",top:0,left:0},slides:"> img",speed:500,startingSlide:0,sync:!0,timeout:4e3,updateView:0},a(document).ready(function(){a(a.fn.cycle.defaults.autoSelector).cycle()})}(jQuery),/*! Cycle2 autoheight plugin; Copyright (c) M.Alsup, 2012; version: 20130913 */
function(a){"use strict";function b(b,d){var e,f,g,h=d.autoHeight;if("container"==h)f=a(d.slides[d.currSlide]).outerHeight(),d.container.height(f);else if(d._autoHeightRatio)d.container.height(d.container.width()/d._autoHeightRatio);else if("calc"===h||"number"==a.type(h)&&h>=0){if(g="calc"===h?c(b,d):h>=d.slides.length?0:h,g==d._sentinelIndex)return;d._sentinelIndex=g,d._sentinel&&d._sentinel.remove(),e=a(d.slides[g].cloneNode(!0)),e.removeAttr("id name rel").find("[id],[name],[rel]").removeAttr("id name rel"),e.css({position:"static",visibility:"hidden",display:"block"}).prependTo(d.container).addClass("cycle-sentinel cycle-slide").removeClass("cycle-slide-active"),e.find("*").css("visibility","hidden"),d._sentinel=e}}function c(b,c){var d=0,e=-1;return c.slides.each(function(b){var c=a(this).height();c>e&&(e=c,d=b)}),d}function d(b,c,d,e){var f=a(e).outerHeight();c.container.animate({height:f},c.autoHeightSpeed,c.autoHeightEasing)}function e(c,f){f._autoHeightOnResize&&(a(window).off("resize orientationchange",f._autoHeightOnResize),f._autoHeightOnResize=null),f.container.off("cycle-slide-added cycle-slide-removed",b),f.container.off("cycle-destroyed",e),f.container.off("cycle-before",d),f._sentinel&&(f._sentinel.remove(),f._sentinel=null)}a.extend(a.fn.cycle.defaults,{autoHeight:0,autoHeightSpeed:250,autoHeightEasing:null}),a(document).on("cycle-initialized",function(c,f){function g(){b(c,f)}var h,i=f.autoHeight,j=a.type(i),k=null;("string"===j||"number"===j)&&(f.container.on("cycle-slide-added cycle-slide-removed",b),f.container.on("cycle-destroyed",e),"container"==i?f.container.on("cycle-before",d):"string"===j&&/\d+\:\d+/.test(i)&&(h=i.match(/(\d+)\:(\d+)/),h=h[1]/h[2],f._autoHeightRatio=h),"number"!==j&&(f._autoHeightOnResize=function(){clearTimeout(k),k=setTimeout(g,50)},a(window).on("resize orientationchange",f._autoHeightOnResize)),setTimeout(g,30))})}(jQuery),/*! caption plugin for Cycle2;  version: 20130306 */
function(a){"use strict";a.extend(a.fn.cycle.defaults,{caption:"> .cycle-caption",captionTemplate:"{{slideNum}} / {{slideCount}}",overlay:"> .cycle-overlay",overlayTemplate:"<div>{{title}}</div><div>{{desc}}</div>",captionModule:"caption"}),a(document).on("cycle-update-view",function(b,c,d,e){if("caption"===c.captionModule){a.each(["caption","overlay"],function(){var a=this,b=d[a+"Template"],f=c.API.getComponent(a);f.length&&b?(f.html(c.API.tmpl(b,d,c,e)),f.show()):f.hide()})}}),a(document).on("cycle-destroyed",function(b,c){var d;a.each(["caption","overlay"],function(){var a=this,b=c[a+"Template"];c[a]&&b&&(d=c.API.getComponent("caption"),d.empty())})})}(jQuery),/*! command plugin for Cycle2;  version: 20140415 */
function(a){"use strict";var b=a.fn.cycle;a.fn.cycle=function(c){var d,e,f,g=a.makeArray(arguments);return"number"==a.type(c)?this.cycle("goto",c):"string"==a.type(c)?this.each(function(){var h;return d=c,f=a(this).data("cycle.opts"),void 0===f?void b.log('slideshow must be initialized before sending commands; "'+d+'" ignored'):(d="goto"==d?"jump":d,e=f.API[d],a.isFunction(e)?(h=a.makeArray(g),h.shift(),e.apply(f.API,h)):void b.log("unknown command: ",d))}):b.apply(this,arguments)},a.extend(a.fn.cycle,b),a.extend(b.API,{next:function(){var a=this.opts();if(!a.busy||a.manualTrump){var b=a.reverse?-1:1;a.allowWrap===!1&&a.currSlide+b>=a.slideCount||(a.API.advanceSlide(b),a.API.trigger("cycle-next",[a]).log("cycle-next"))}},prev:function(){var a=this.opts();if(!a.busy||a.manualTrump){var b=a.reverse?1:-1;a.allowWrap===!1&&a.currSlide+b<0||(a.API.advanceSlide(b),a.API.trigger("cycle-prev",[a]).log("cycle-prev"))}},destroy:function(){this.stop();var b=this.opts(),c=a.isFunction(a._data)?a._data:a.noop;clearTimeout(b.timeoutId),b.timeoutId=0,b.API.stop(),b.API.trigger("cycle-destroyed",[b]).log("cycle-destroyed"),b.container.removeData(),c(b.container[0],"parsedAttrs",!1),b.retainStylesOnDestroy||(b.container.removeAttr("style"),b.slides.removeAttr("style"),b.slides.removeClass(b.slideActiveClass)),b.slides.each(function(){var d=a(this);d.removeData(),d.removeClass(b.slideClass),c(this,"parsedAttrs",!1)})},jump:function(a,b){var c,d=this.opts();if(!d.busy||d.manualTrump){var e=parseInt(a,10);if(isNaN(e)||0>e||e>=d.slides.length)return void d.API.log("goto: invalid slide index: "+e);if(e==d.currSlide)return void d.API.log("goto: skipping, already on slide",e);d.nextSlide=e,clearTimeout(d.timeoutId),d.timeoutId=0,d.API.log("goto: ",e," (zero-index)"),c=d.currSlide<d.nextSlide,d._tempFx=b,d.API.prepareTx(!0,c)}},stop:function(){var b=this.opts(),c=b.container;clearTimeout(b.timeoutId),b.timeoutId=0,b.API.stopTransition(),b.pauseOnHover&&(b.pauseOnHover!==!0&&(c=a(b.pauseOnHover)),c.off("mouseenter mouseleave")),b.API.trigger("cycle-stopped",[b]).log("cycle-stopped")},reinit:function(){var a=this.opts();a.API.destroy(),a.container.cycle()},remove:function(b){for(var c,d,e=this.opts(),f=[],g=1,h=0;h<e.slides.length;h++)c=e.slides[h],h==b?d=c:(f.push(c),a(c).data("cycle.opts").slideNum=g,g++);d&&(e.slides=a(f),e.slideCount--,a(d).remove(),b==e.currSlide?e.API.advanceSlide(1):b<e.currSlide?e.currSlide--:e.currSlide++,e.API.trigger("cycle-slide-removed",[e,b,d]).log("cycle-slide-removed"),e.API.updateView())}}),a(document).on("click.cycle","[data-cycle-cmd]",function(b){b.preventDefault();var c=a(this),d=c.data("cycle-cmd"),e=c.data("cycle-context")||".cycle-slideshow";a(e).cycle(d,c.data("cycle-arg"))})}(jQuery),/*! hash plugin for Cycle2;  version: 20130905 */
function(a){"use strict";function b(b,c){var d;return b._hashFence?void(b._hashFence=!1):(d=window.location.hash.substring(1),void b.slides.each(function(e){if(a(this).data("cycle-hash")==d){if(c===!0)b.startingSlide=e;else{var f=b.currSlide<e;b.nextSlide=e,b.API.prepareTx(!0,f)}return!1}}))}a(document).on("cycle-pre-initialize",function(c,d){b(d,!0),d._onHashChange=function(){b(d,!1)},a(window).on("hashchange",d._onHashChange)}),a(document).on("cycle-update-view",function(a,b,c){c.hash&&"#"+c.hash!=window.location.hash&&(b._hashFence=!0,window.location.hash=c.hash)}),a(document).on("cycle-destroyed",function(b,c){c._onHashChange&&a(window).off("hashchange",c._onHashChange)})}(jQuery),/*! loader plugin for Cycle2;  version: 20131121 */
function(a){"use strict";a.extend(a.fn.cycle.defaults,{loader:!1}),a(document).on("cycle-bootstrap",function(b,c){function d(b,d){function f(b){var f;"wait"==c.loader?(h.push(b),0===j&&(h.sort(g),e.apply(c.API,[h,d]),c.container.removeClass("cycle-loading"))):(f=a(c.slides[c.currSlide]),e.apply(c.API,[b,d]),f.show(),c.container.removeClass("cycle-loading"))}function g(a,b){return a.data("index")-b.data("index")}var h=[];if("string"==a.type(b))b=a.trim(b);else if("array"===a.type(b))for(var i=0;i<b.length;i++)b[i]=a(b[i])[0];b=a(b);var j=b.length;j&&(b.css("visibility","hidden").appendTo("body").each(function(b){function g(){0===--i&&(--j,f(k))}var i=0,k=a(this),l=k.is("img")?k:k.find("img");return k.data("index",b),l=l.filter(":not(.cycle-loader-ignore)").filter(':not([src=""])'),l.length?(i=l.length,void l.each(function(){this.complete?g():a(this).on('load', function(){g()}).on("error",function(){0===--i&&(c.API.log("slide skipped; img not loaded:",this.src),0===--j&&"wait"==c.loader&&e.apply(c.API,[h,d]))})})):(--j,void h.push(k))}),j&&c.container.addClass("cycle-loading"))}var e;c.loader&&(e=c.API.add,c.API.add=d)})}(jQuery),/*! pager plugin for Cycle2;  version: 20140415 */
function(a){"use strict";function b(b,c,d){var e,f=b.API.getComponent("pager");f.each(function(){var f=a(this);if(c.pagerTemplate){var g=b.API.tmpl(c.pagerTemplate,c,b,d[0]);e=a(g).appendTo(f)}else e=f.children().eq(b.slideCount-1);e.on(b.pagerEvent,function(a){b.pagerEventBubble||a.preventDefault(),b.API.page(f,a.currentTarget)})})}function c(a,b){var c=this.opts();if(!c.busy||c.manualTrump){var d=a.children().index(b),e=d,f=c.currSlide<e;c.currSlide!=e&&(c.nextSlide=e,c._tempFx=c.pagerFx,c.API.prepareTx(!0,f),c.API.trigger("cycle-pager-activated",[c,a,b]))}}a.extend(a.fn.cycle.defaults,{pager:"> .cycle-pager",pagerActiveClass:"cycle-pager-active",pagerEvent:"click.cycle",pagerEventBubble:void 0,pagerTemplate:"<span>&bull;</span>"}),a(document).on("cycle-bootstrap",function(a,c,d){d.buildPagerLink=b}),a(document).on("cycle-slide-added",function(a,b,d,e){b.pager&&(b.API.buildPagerLink(b,d,e),b.API.page=c)}),a(document).on("cycle-slide-removed",function(b,c,d){if(c.pager){var e=c.API.getComponent("pager");e.each(function(){var b=a(this);a(b.children()[d]).remove()})}}),a(document).on("cycle-update-view",function(b,c){var d;c.pager&&(d=c.API.getComponent("pager"),d.each(function(){a(this).children().removeClass(c.pagerActiveClass).eq(c.currSlide).addClass(c.pagerActiveClass)}))}),a(document).on("cycle-destroyed",function(a,b){var c=b.API.getComponent("pager");c&&(c.children().off(b.pagerEvent),b.pagerTemplate&&c.empty())})}(jQuery),/*! prevnext plugin for Cycle2;  version: 20140408 */
function(a){"use strict";a.extend(a.fn.cycle.defaults,{next:"> .cycle-next",nextEvent:"click.cycle",disabledClass:"disabled",prev:"> .cycle-prev",prevEvent:"click.cycle",swipe:!1}),a(document).on("cycle-initialized",function(a,b){if(b.API.getComponent("next").on(b.nextEvent,function(a){a.preventDefault(),b.API.next()}),b.API.getComponent("prev").on(b.prevEvent,function(a){a.preventDefault(),b.API.prev()}),b.swipe){var c=b.swipeVert?"swipeUp.cycle":"swipeLeft.cycle swipeleft.cycle",d=b.swipeVert?"swipeDown.cycle":"swipeRight.cycle swiperight.cycle";b.container.on(c,function(){b._tempFx=b.swipeFx,b.API.next()}),b.container.on(d,function(){b._tempFx=b.swipeFx,b.API.prev()})}}),a(document).on("cycle-update-view",function(a,b){if(!b.allowWrap){var c=b.disabledClass,d=b.API.getComponent("next"),e=b.API.getComponent("prev"),f=b._prevBoundry||0,g=void 0!==b._nextBoundry?b._nextBoundry:b.slideCount-1;b.currSlide==g?d.addClass(c).prop("disabled",!0):d.removeClass(c).prop("disabled",!1),b.currSlide===f?e.addClass(c).prop("disabled",!0):e.removeClass(c).prop("disabled",!1)}}),a(document).on("cycle-destroyed",function(a,b){b.API.getComponent("prev").off(b.nextEvent),b.API.getComponent("next").off(b.prevEvent),b.container.off("swipeleft.cycle swiperight.cycle swipeLeft.cycle swipeRight.cycle swipeUp.cycle swipeDown.cycle")})}(jQuery),/*! progressive loader plugin for Cycle2;  version: 20130315 */
function(a){"use strict";a.extend(a.fn.cycle.defaults,{progressive:!1}),a(document).on("cycle-pre-initialize",function(b,c){if(c.progressive){var d,e,f=c.API,g=f.next,h=f.prev,i=f.prepareTx,j=a.type(c.progressive);if("array"==j)d=c.progressive;else if(a.isFunction(c.progressive))d=c.progressive(c);else if("string"==j){if(e=a(c.progressive),d=a.trim(e.html()),!d)return;if(/^(\[)/.test(d))try{d=a.parseJSON(d)}catch(k){return void f.log("error parsing progressive slides",k)}else d=d.split(new RegExp(e.data("cycle-split")||"\n")),d[d.length-1]||d.pop()}i&&(f.prepareTx=function(a,b){var e,f;return a||0===d.length?void i.apply(c.API,[a,b]):void(b&&c.currSlide==c.slideCount-1?(f=d[0],d=d.slice(1),c.container.one("cycle-slide-added",function(a,b){setTimeout(function(){b.API.advanceSlide(1)},50)}),c.API.add(f)):b||0!==c.currSlide?i.apply(c.API,[a,b]):(e=d.length-1,f=d[e],d=d.slice(0,e),c.container.one("cycle-slide-added",function(a,b){setTimeout(function(){b.currSlide=1,b.API.advanceSlide(-1)},50)}),c.API.add(f,!0)))}),g&&(f.next=function(){var a=this.opts();if(d.length&&a.currSlide==a.slideCount-1){var b=d[0];d=d.slice(1),a.container.one("cycle-slide-added",function(a,b){g.apply(b.API),b.container.removeClass("cycle-loading")}),a.container.addClass("cycle-loading"),a.API.add(b)}else g.apply(a.API)}),h&&(f.prev=function(){var a=this.opts();if(d.length&&0===a.currSlide){var b=d.length-1,c=d[b];d=d.slice(0,b),a.container.one("cycle-slide-added",function(a,b){b.currSlide=1,b.API.advanceSlide(-1),b.container.removeClass("cycle-loading")}),a.container.addClass("cycle-loading"),a.API.add(c,!0)}else h.apply(a.API)})}})}(jQuery),/*! tmpl plugin for Cycle2;  version: 20121227 */
function(a){"use strict";a.extend(a.fn.cycle.defaults,{tmplRegex:"{{((.)?.*?)}}"}),a.extend(a.fn.cycle.API,{tmpl:function(b,c){var d=new RegExp(c.tmplRegex||a.fn.cycle.defaults.tmplRegex,"g"),e=a.makeArray(arguments);return e.shift(),b.replace(d,function(b,c){var d,f,g,h,i=c.split(".");for(d=0;d<e.length;d++)if(g=e[d]){if(i.length>1)for(h=g,f=0;f<i.length;f++)g=h,h=h[i[f]]||c;else h=g[c];if(a.isFunction(h))return h.apply(g,e);if(void 0!==h&&null!==h&&h!=c)return h}return c})}})}(jQuery);

/* Plugin for Cycle2; Copyright (c) 2012 M. Alsup; v20141007 */
!function(a){"use strict";a.event.special.swipe=a.event.special.swipe||{scrollSupressionThreshold:10,durationThreshold:1e3,horizontalDistanceThreshold:30,verticalDistanceThreshold:75,setup:function(){var b=a(this);b.bind("touchstart",function(c){function d(b){if(g){var c=b.originalEvent.touches?b.originalEvent.touches[0]:b;e={time:(new Date).getTime(),coords:[c.pageX,c.pageY]},Math.abs(g.coords[0]-e.coords[0])>a.event.special.swipe.scrollSupressionThreshold&&b.preventDefault()}}var e,f=c.originalEvent.touches?c.originalEvent.touches[0]:c,g={time:(new Date).getTime(),coords:[f.pageX,f.pageY],origin:a(c.target)};b.bind("touchmove",d).one("touchend",function(){b.unbind("touchmove",d),g&&e&&e.time-g.time<a.event.special.swipe.durationThreshold&&Math.abs(g.coords[0]-e.coords[0])>a.event.special.swipe.horizontalDistanceThreshold&&Math.abs(g.coords[1]-e.coords[1])<a.event.special.swipe.verticalDistanceThreshold&&g.origin.trigger("swipe").trigger(g.coords[0]>e.coords[0]?"swipeleft":"swiperight"),g=e=void 0})})}},a.event.special.swipeleft=a.event.special.swipeleft||{setup:function(){a(this).bind("swipe",a.noop)}},a.event.special.swiperight=a.event.special.swiperight||a.event.special.swipeleft}(jQuery);;
/*!
 * jCarousel - Riding carousels with jQuery
 *   http://sorgalla.com/jcarousel/
 *
 * Copyright (c) 2006 Jan Sorgalla (http://sorgalla.com)
 * Dual licensed under the MIT (http://www.opensource.org/licenses/mit-license.php)
 * and GPL (http://www.opensource.org/licenses/gpl-license.php) licenses.
 *
 * Built on top of the jQuery library
 *   http://jquery.com
 *
 * Inspired by the "Carousel Component" by Bill Scott
 *   http://billwscott.com/carousel/
 */

/*global window, jQuery */
(function($) {
    // Default configuration properties.
    var defaults = {
        vertical: false,
        rtl: false,
        start: 1,
        offset: 1,
        size: null,
        scroll: 3,
        visible: null,
        animation: 'normal',
        easing: 'swing',
        auto: 0,
        wrap: null,
        initCallback: null,
        setupCallback: null,
        reloadCallback: null,
        itemLoadCallback: null,
        itemFirstInCallback: null,
        itemFirstOutCallback: null,
        itemLastInCallback: null,
        itemLastOutCallback: null,
        itemVisibleInCallback: null,
        itemVisibleOutCallback: null,
        animationStepCallback: null,
        buttonNextHTML: '<div></div>',
        buttonPrevHTML: '<div></div>',
        buttonNextEvent: 'click',
        buttonPrevEvent: 'click',
        buttonNextCallback: null,
        buttonPrevCallback: null,
        itemFallbackDimension: null
    }, windowLoaded = false;

    $(window).bind('load.jcarousel', function() { windowLoaded = true; });

    /**
     * The jCarousel object.
     *
     * @constructor
     * @class jcarousel
     * @param e {HTMLElement} The element to create the carousel for.
     * @param o {Object} A set of key/value pairs to set as configuration properties.
     * @cat Plugins/jCarousel
     */
    $.jcarousel = function(e, o) {
        this.options    = $.extend({}, defaults, o || {});

        this.locked          = false;
        this.autoStopped     = false;

        this.container       = null;
        this.clip            = null;
        this.list            = null;
        this.buttonNext      = null;
        this.buttonPrev      = null;
        this.buttonNextState = null;
        this.buttonPrevState = null;

        // Only set if not explicitly passed as option
        if (!o || o.rtl === undefined) {
            this.options.rtl = ($(e).attr('dir') || $('html').attr('dir') || '').toLowerCase() == 'rtl';
        }

        this.wh = !this.options.vertical ? 'width' : 'height';
        this.lt = !this.options.vertical ? (this.options.rtl ? 'right' : 'left') : 'top';

        // Extract skin class
        var skin = '', split = e.className.split(' ');

        for (var i = 0; i < split.length; i++) {
            if (split[i].indexOf('jcarousel-skin') != -1) {
                $(e).removeClass(split[i]);
                skin = split[i];
                break;
            }
        }

        if (e.nodeName.toUpperCase() == 'UL' || e.nodeName.toUpperCase() == 'OL') {
            this.list      = $(e);
            this.clip      = this.list.parents('.jcarousel-clip');
            this.container = this.list.parents('.jcarousel-container');
        } else {
            this.container = $(e);
            this.list      = this.container.find('ul,ol').eq(0);
            this.clip      = this.container.find('.jcarousel-clip');
        }

        if (this.clip.size() === 0) {
            this.clip = this.list.wrap('<div></div>').parent();
        }

        if (this.container.size() === 0) {
            this.container = this.clip.wrap('<div></div>').parent();
        }

        if (skin !== '' && this.container.parent()[0].className.indexOf('jcarousel-skin') == -1) {
            this.container.wrap('<div class=" '+ skin + '"></div>');
        }

        this.buttonPrev = $('.jcarousel-prev', this.container);

        if (this.buttonPrev.size() === 0 && this.options.buttonPrevHTML !== null) {
            this.buttonPrev = $(this.options.buttonPrevHTML).appendTo(this.container);
        }

        this.buttonPrev.addClass(this.className('jcarousel-prev'));

        this.buttonNext = $('.jcarousel-next', this.container);

        if (this.buttonNext.size() === 0 && this.options.buttonNextHTML !== null) {
            this.buttonNext = $(this.options.buttonNextHTML).appendTo(this.container);
        }

        this.buttonNext.addClass(this.className('jcarousel-next'));

        this.clip.addClass(this.className('jcarousel-clip')).css({
            position: 'relative'
        });

        this.list.addClass(this.className('jcarousel-list')).css({
            overflow: 'hidden',
            position: 'relative',
            top: 0,
            margin: 0,
            padding: 0
        }).css((this.options.rtl ? 'right' : 'left'), 0);

        this.container.addClass(this.className('jcarousel-container')).css({
            position: 'relative'
        });

        if (!this.options.vertical && this.options.rtl) {
            this.container.addClass('jcarousel-direction-rtl').attr('dir', 'rtl');
        }

        var di = this.options.visible !== null ? Math.ceil(this.clipping() / this.options.visible) : null;
        var li = this.list.children('li');

        var self = this;

        if (li.size() > 0) {
            var wh = 0, j = this.options.offset;
            li.each(function() {
                self.format(this, j++);
                wh += self.dimension(this, di);
            });

            this.list.css(this.wh, (wh + 100) + 'px');

            // Only set if not explicitly passed as option
            if (!o || o.size === undefined) {
                this.options.size = li.size();
            }
        }

        // For whatever reason, .show() does not work in Safari...
        this.container.css('display', 'block');
        this.buttonNext.css('display', 'block');
        this.buttonPrev.css('display', 'block');

        this.funcNext   = function() { self.next(); return false; };
        this.funcPrev   = function() { self.prev(); return false; };
        this.funcResize = function() {
            if (self.resizeTimer) {
                clearTimeout(self.resizeTimer);
            }

            self.resizeTimer = setTimeout(function() {
                self.reload();
            }, 100);
        };

        if (this.options.initCallback !== null) {
            this.options.initCallback(this, 'init');
        }

        if (!windowLoaded && $jc.isSafari()) {
            this.buttons(false, false);
            $(window).bind('load.jcarousel', function() { self.setup(); });
        } else {
            this.setup();
        }
    };

    // Create shortcut for internal use
    var $jc = $.jcarousel;

    $jc.fn = $jc.prototype = {
        jcarousel: '0.2.9'
    };

    $jc.fn.extend = $jc.extend = $.extend;

    $jc.fn.extend({
        /**
         * Setups the carousel.
         *
         * @method setup
         * @return undefined
         */
        setup: function() {
            this.first       = null;
            this.last        = null;
            this.prevFirst   = null;
            this.prevLast    = null;
            this.animating   = false;
            this.timer       = null;
            this.resizeTimer = null;
            this.tail        = null;
            this.inTail      = false;

            if (this.locked) {
                return;
            }

            this.list.css(this.lt, this.pos(this.options.offset) + 'px');
            var p = this.pos(this.options.start, true);
            this.prevFirst = this.prevLast = null;
            this.animate(p, false);

            $(window).unbind('resize.jcarousel', this.funcResize).bind('resize.jcarousel', this.funcResize);

            if (this.options.setupCallback !== null) {
                this.options.setupCallback(this);
            }
        },

        /**
         * Clears the list and resets the carousel.
         *
         * @method reset
         * @return undefined
         */
        reset: function() {
            this.list.empty();

            this.list.css(this.lt, '0px');
            this.list.css(this.wh, '10px');

            if (this.options.initCallback !== null) {
                this.options.initCallback(this, 'reset');
            }

            this.setup();
        },

        /**
         * Reloads the carousel and adjusts positions.
         *
         * @method reload
         * @return undefined
         */
        reload: function() {
            if (this.tail !== null && this.inTail) {
                this.list.css(this.lt, $jc.intval(this.list.css(this.lt)) + this.tail);
            }

            this.tail   = null;
            this.inTail = false;

            if (this.options.reloadCallback !== null) {
                this.options.reloadCallback(this);
            }

            if (this.options.visible !== null) {
                var self = this;
                var di = Math.ceil(this.clipping() / this.options.visible), wh = 0, lt = 0;
                this.list.children('li').each(function(i) {
                    wh += self.dimension(this, di);
                    if (i + 1 < self.first) {
                        lt = wh;
                    }
                });

                this.list.css(this.wh, wh + 'px');
                this.list.css(this.lt, -lt + 'px');
            }

            this.scroll(this.first, false);
        },

        /**
         * Locks the carousel.
         *
         * @method lock
         * @return undefined
         */
        lock: function() {
            this.locked = true;
            this.buttons();
        },

        /**
         * Unlocks the carousel.
         *
         * @method unlock
         * @return undefined
         */
        unlock: function() {
            this.locked = false;
            this.buttons();
        },

        /**
         * Sets the size of the carousel.
         *
         * @method size
         * @return undefined
         * @param s {Number} The size of the carousel.
         */
        size: function(s) {
            if (s !== undefined) {
                this.options.size = s;
                if (!this.locked) {
                    this.buttons();
                }
            }

            return this.options.size;
        },

        /**
         * Checks whether a list element exists for the given index (or index range).
         *
         * @method get
         * @return bool
         * @param i {Number} The index of the (first) element.
         * @param i2 {Number} The index of the last element.
         */
        has: function(i, i2) {
            if (i2 === undefined || !i2) {
                i2 = i;
            }

            if (this.options.size !== null && i2 > this.options.size) {
                i2 = this.options.size;
            }

            for (var j = i; j <= i2; j++) {
                var e = this.get(j);
                if (!e.length || e.hasClass('jcarousel-item-placeholder')) {
                    return false;
                }
            }

            return true;
        },

        /**
         * Returns a jQuery object with list element for the given index.
         *
         * @method get
         * @return jQuery
         * @param i {Number} The index of the element.
         */
        get: function(i) {
            return $('>.jcarousel-item-' + i, this.list);
        },

        /**
         * Adds an element for the given index to the list.
         * If the element already exists, it updates the inner html.
         * Returns the created element as jQuery object.
         *
         * @method add
         * @return jQuery
         * @param i {Number} The index of the element.
         * @param s {String} The innerHTML of the element.
         */
        add: function(i, s) {
            var e = this.get(i), old = 0, n = $(s);

            if (e.length === 0) {
                var c, j = $jc.intval(i);
                e = this.create(i);
                while (true) {
                    c = this.get(--j);
                    if (j <= 0 || c.length) {
                        if (j <= 0) {
                            this.list.prepend(e);
                        } else {
                            c.after(e);
                        }
                        break;
                    }
                }
            } else {
                old = this.dimension(e);
            }

            if (n.get(0).nodeName.toUpperCase() == 'LI') {
                e.replaceWith(n);
                e = n;
            } else {
                e.empty().append(s);
            }

            this.format(e.removeClass(this.className('jcarousel-item-placeholder')), i);

            var di = this.options.visible !== null ? Math.ceil(this.clipping() / this.options.visible) : null;
            var wh = this.dimension(e, di) - old;

            if (i > 0 && i < this.first) {
                this.list.css(this.lt, $jc.intval(this.list.css(this.lt)) - wh + 'px');
            }

            this.list.css(this.wh, $jc.intval(this.list.css(this.wh)) + wh + 'px');

            return e;
        },

        /**
         * Removes an element for the given index from the list.
         *
         * @method remove
         * @return undefined
         * @param i {Number} The index of the element.
         */
        remove: function(i) {
            var e = this.get(i);

            // Check if item exists and is not currently visible
            if (!e.length || (i >= this.first && i <= this.last)) {
                return;
            }

            var d = this.dimension(e);

            if (i < this.first) {
                this.list.css(this.lt, $jc.intval(this.list.css(this.lt)) + d + 'px');
            }

            e.remove();

            this.list.css(this.wh, $jc.intval(this.list.css(this.wh)) - d + 'px');
        },

        /**
         * Moves the carousel forwards.
         *
         * @method next
         * @return undefined
         */
        next: function() {
            if (this.tail !== null && !this.inTail) {
                this.scrollTail(false);
            } else {
                this.scroll(((this.options.wrap == 'both' || this.options.wrap == 'last') && this.options.size !== null && this.last == this.options.size) ? 1 : this.first + this.options.scroll);
            }
        },

        /**
         * Moves the carousel backwards.
         *
         * @method prev
         * @return undefined
         */
        prev: function() {
            if (this.tail !== null && this.inTail) {
                this.scrollTail(true);
            } else {
                this.scroll(((this.options.wrap == 'both' || this.options.wrap == 'first') && this.options.size !== null && this.first == 1) ? this.options.size : this.first - this.options.scroll);
            }
        },

        /**
         * Scrolls the tail of the carousel.
         *
         * @method scrollTail
         * @return undefined
         * @param b {Boolean} Whether scroll the tail back or forward.
         */
        scrollTail: function(b) {
            if (this.locked || this.animating || !this.tail) {
                return;
            }

            this.pauseAuto();

            var pos  = $jc.intval(this.list.css(this.lt));

            pos = !b ? pos - this.tail : pos + this.tail;
            this.inTail = !b;

            // Save for callbacks
            this.prevFirst = this.first;
            this.prevLast  = this.last;

            this.animate(pos);
        },

        /**
         * Scrolls the carousel to a certain position.
         *
         * @method scroll
         * @return undefined
         * @param i {Number} The index of the element to scoll to.
         * @param a {Boolean} Flag indicating whether to perform animation.
         */
        scroll: function(i, a) {
            if (this.locked || this.animating) {
                return;
            }

            this.pauseAuto();
            this.animate(this.pos(i), a);
        },

        /**
         * Prepares the carousel and return the position for a certian index.
         *
         * @method pos
         * @return {Number}
         * @param i {Number} The index of the element to scoll to.
         * @param fv {Boolean} Whether to force last item to be visible.
         */
        pos: function(i, fv) {
            var pos  = $jc.intval(this.list.css(this.lt));

            if (this.locked || this.animating) {
                return pos;
            }

            if (this.options.wrap != 'circular') {
                i = i < 1 ? 1 : (this.options.size && i > this.options.size ? this.options.size : i);
            }

            var back = this.first > i;

            // Create placeholders, new list width/height
            // and new list position
            var f = this.options.wrap != 'circular' && this.first <= 1 ? 1 : this.first;
            var c = back ? this.get(f) : this.get(this.last);
            var j = back ? f : f - 1;
            var e = null, l = 0, p = false, d = 0, g;

            while (back ? --j >= i : ++j < i) {
                e = this.get(j);
                p = !e.length;
                if (e.length === 0) {
                    e = this.create(j).addClass(this.className('jcarousel-item-placeholder'));
                    c[back ? 'before' : 'after' ](e);

                    if (this.first !== null && this.options.wrap == 'circular' && this.options.size !== null && (j <= 0 || j > this.options.size)) {
                        g = this.get(this.index(j));
                        if (g.length) {
                            e = this.add(j, g.clone(true));
                        }
                    }
                }

                c = e;
                d = this.dimension(e);

                if (p) {
                    l += d;
                }

                if (this.first !== null && (this.options.wrap == 'circular' || (j >= 1 && (this.options.size === null || j <= this.options.size)))) {
                    pos = back ? pos + d : pos - d;
                }
            }

            // Calculate visible items
            var clipping = this.clipping(), cache = [], visible = 0, v = 0;
            c = this.get(i - 1);
            j = i;

            while (++visible) {
                e = this.get(j);
                p = !e.length;
                if (e.length === 0) {
                    e = this.create(j).addClass(this.className('jcarousel-item-placeholder'));
                    // This should only happen on a next scroll
                    if (c.length === 0) {
                        this.list.prepend(e);
                    } else {
                        c[back ? 'before' : 'after' ](e);
                    }

                    if (this.first !== null && this.options.wrap == 'circular' && this.options.size !== null && (j <= 0 || j > this.options.size)) {
                        g = this.get(this.index(j));
                        if (g.length) {
                            e = this.add(j, g.clone(true));
                        }
                    }
                }

                c = e;
                d = this.dimension(e);
                if (d === 0) {
                    throw new Error('jCarousel: No width/height set for items. This will cause an infinite loop. Aborting...');
                }

                if (this.options.wrap != 'circular' && this.options.size !== null && j > this.options.size) {
                    cache.push(e);
                } else if (p) {
                    l += d;
                }

                v += d;

                if (v >= clipping) {
                    break;
                }

                j++;
            }

             // Remove out-of-range placeholders
            for (var x = 0; x < cache.length; x++) {
                cache[x].remove();
            }

            // Resize list
            if (l > 0) {
                this.list.css(this.wh, this.dimension(this.list) + l + 'px');

                if (back) {
                    pos -= l;
                    this.list.css(this.lt, $jc.intval(this.list.css(this.lt)) - l + 'px');
                }
            }

            // Calculate first and last item
            var last = i + visible - 1;
            if (this.options.wrap != 'circular' && this.options.size && last > this.options.size) {
                last = this.options.size;
            }

            if (j > last) {
                visible = 0;
                j = last;
                v = 0;
                while (++visible) {
                    e = this.get(j--);
                    if (!e.length) {
                        break;
                    }
                    v += this.dimension(e);
                    if (v >= clipping) {
                        break;
                    }
                }
            }

            var first = last - visible + 1;
            if (this.options.wrap != 'circular' && first < 1) {
                first = 1;
            }

            if (this.inTail && back) {
                pos += this.tail;
                this.inTail = false;
            }

            this.tail = null;
            if (this.options.wrap != 'circular' && last == this.options.size && (last - visible + 1) >= 1) {
                var m = $jc.intval(this.get(last).css(!this.options.vertical ? 'marginRight' : 'marginBottom'));
                if ((v - m) > clipping) {
                    this.tail = v - clipping - m;
                }
            }

            if (fv && i === this.options.size && this.tail) {
                pos -= this.tail;
                this.inTail = true;
            }

            // Adjust position
            while (i-- > first) {
                pos += this.dimension(this.get(i));
            }

            // Save visible item range
            this.prevFirst = this.first;
            this.prevLast  = this.last;
            this.first     = first;
            this.last      = last;

            return pos;
        },

        /**
         * Animates the carousel to a certain position.
         *
         * @method animate
         * @return undefined
         * @param p {Number} Position to scroll to.
         * @param a {Boolean} Flag indicating whether to perform animation.
         */
        animate: function(p, a) {
            if (this.locked || this.animating) {
                return;
            }

            this.animating = true;

            var self = this;
            var scrolled = function() {
                self.animating = false;

                if (p === 0) {
                    self.list.css(self.lt,  0);
                }

                if (!self.autoStopped && (self.options.wrap == 'circular' || self.options.wrap == 'both' || self.options.wrap == 'last' || self.options.size === null || self.last < self.options.size || (self.last == self.options.size && self.tail !== null && !self.inTail))) {
                    self.startAuto();
                }

                self.buttons();
                self.notify('onAfterAnimation');

                // This function removes items which are appended automatically for circulation.
                // This prevents the list from growing infinitely.
                if (self.options.wrap == 'circular' && self.options.size !== null) {
                    for (var i = self.prevFirst; i <= self.prevLast; i++) {
                        if (i !== null && !(i >= self.first && i <= self.last) && (i < 1 || i > self.options.size)) {
                            self.remove(i);
                        }
                    }
                }
            };

            this.notify('onBeforeAnimation');

            // Animate
            if (!this.options.animation || a === false) {
                this.list.css(this.lt, p + 'px');
                scrolled();
            } else {
                var o = !this.options.vertical ? (this.options.rtl ? {'right': p} : {'left': p}) : {'top': p};
                // Define animation settings.
                var settings = {
                    duration: this.options.animation,
                    easing:   this.options.easing,
                    complete: scrolled
                };
                // If we have a step callback, specify it as well.
                if ($.isFunction(this.options.animationStepCallback)) {
                    settings.step = this.options.animationStepCallback;
                }
                // Start the animation.
                this.list.animate(o, settings);
            }
        },

        /**
         * Starts autoscrolling.
         *
         * @method auto
         * @return undefined
         * @param s {Number} Seconds to periodically autoscroll the content.
         */
        startAuto: function(s) {
            if (s !== undefined) {
                this.options.auto = s;
            }

            if (this.options.auto === 0) {
                return this.stopAuto();
            }

            if (this.timer !== null) {
                return;
            }

            this.autoStopped = false;

            var self = this;
            this.timer = window.setTimeout(function() { self.next(); }, this.options.auto * 1000);
        },

        /**
         * Stops autoscrolling.
         *
         * @method stopAuto
         * @return undefined
         */
        stopAuto: function() {
            this.pauseAuto();
            this.autoStopped = true;
        },

        /**
         * Pauses autoscrolling.
         *
         * @method pauseAuto
         * @return undefined
         */
        pauseAuto: function() {
            if (this.timer === null) {
                return;
            }

            window.clearTimeout(this.timer);
            this.timer = null;
        },

        /**
         * Sets the states of the prev/next buttons.
         *
         * @method buttons
         * @return undefined
         */
        buttons: function(n, p) {
            if (n == null) {
                n = !this.locked && this.options.size !== 0 && ((this.options.wrap && this.options.wrap != 'first') || this.options.size === null || this.last < this.options.size);
                if (!this.locked && (!this.options.wrap || this.options.wrap == 'first') && this.options.size !== null && this.last >= this.options.size) {
                    n = this.tail !== null && !this.inTail;
                }
            }

            if (p == null) {
                p = !this.locked && this.options.size !== 0 && ((this.options.wrap && this.options.wrap != 'last') || this.first > 1);
                if (!this.locked && (!this.options.wrap || this.options.wrap == 'last') && this.options.size !== null && this.first == 1) {
                    p = this.tail !== null && this.inTail;
                }
            }

            var self = this;

            if (this.buttonNext.size() > 0) {
                this.buttonNext.unbind(this.options.buttonNextEvent + '.jcarousel', this.funcNext);

                if (n) {
                    this.buttonNext.bind(this.options.buttonNextEvent + '.jcarousel', this.funcNext);
                }

                this.buttonNext[n ? 'removeClass' : 'addClass'](this.className('jcarousel-next-disabled')).attr('disabled', n ? false : true);

                if (this.options.buttonNextCallback !== null && this.buttonNext.data('jcarouselstate') != n) {
                    this.buttonNext.each(function() { self.options.buttonNextCallback(self, this, n); }).data('jcarouselstate', n);
                }
            } else {
                if (this.options.buttonNextCallback !== null && this.buttonNextState != n) {
                    this.options.buttonNextCallback(self, null, n);
                }
            }

            if (this.buttonPrev.size() > 0) {
                this.buttonPrev.unbind(this.options.buttonPrevEvent + '.jcarousel', this.funcPrev);

                if (p) {
                    this.buttonPrev.bind(this.options.buttonPrevEvent + '.jcarousel', this.funcPrev);
                }

                this.buttonPrev[p ? 'removeClass' : 'addClass'](this.className('jcarousel-prev-disabled')).attr('disabled', p ? false : true);

                if (this.options.buttonPrevCallback !== null && this.buttonPrev.data('jcarouselstate') != p) {
                    this.buttonPrev.each(function() { self.options.buttonPrevCallback(self, this, p); }).data('jcarouselstate', p);
                }
            } else {
                if (this.options.buttonPrevCallback !== null && this.buttonPrevState != p) {
                    this.options.buttonPrevCallback(self, null, p);
                }
            }

            this.buttonNextState = n;
            this.buttonPrevState = p;
        },

        /**
         * Notify callback of a specified event.
         *
         * @method notify
         * @return undefined
         * @param evt {String} The event name
         */
        notify: function(evt) {
            var state = this.prevFirst === null ? 'init' : (this.prevFirst < this.first ? 'next' : 'prev');

            // Load items
            this.callback('itemLoadCallback', evt, state);

            if (this.prevFirst !== this.first) {
                this.callback('itemFirstInCallback', evt, state, this.first);
                this.callback('itemFirstOutCallback', evt, state, this.prevFirst);
            }

            if (this.prevLast !== this.last) {
                this.callback('itemLastInCallback', evt, state, this.last);
                this.callback('itemLastOutCallback', evt, state, this.prevLast);
            }

            this.callback('itemVisibleInCallback', evt, state, this.first, this.last, this.prevFirst, this.prevLast);
            this.callback('itemVisibleOutCallback', evt, state, this.prevFirst, this.prevLast, this.first, this.last);
        },

        callback: function(cb, evt, state, i1, i2, i3, i4) {
            if (this.options[cb] == null || (typeof this.options[cb] != 'object' && evt != 'onAfterAnimation')) {
                return;
            }

            var callback = typeof this.options[cb] == 'object' ? this.options[cb][evt] : this.options[cb];

            if (!$.isFunction(callback)) {
                return;
            }

            var self = this;

            if (i1 === undefined) {
                callback(self, state, evt);
            } else if (i2 === undefined) {
                this.get(i1).each(function() { callback(self, this, i1, state, evt); });
            } else {
                var call = function(i) {
                    self.get(i).each(function() { callback(self, this, i, state, evt); });
                };
                for (var i = i1; i <= i2; i++) {
                    if (i !== null && !(i >= i3 && i <= i4)) {
                        call(i);
                    }
                }
            }
        },

        create: function(i) {
            return this.format('<li></li>', i);
        },

        format: function(e, i) {
            e = $(e);
            var split = e.get(0).className.split(' ');
            for (var j = 0; j < split.length; j++) {
                if (split[j].indexOf('jcarousel-') != -1) {
                    e.removeClass(split[j]);
                }
            }
            e.addClass(this.className('jcarousel-item')).addClass(this.className('jcarousel-item-' + i)).css({
                'float': (this.options.rtl ? 'right' : 'left'),
                'list-style': 'none'
            }).attr('jcarouselindex', i);
            return e;
        },

        className: function(c) {
            return c + ' ' + c + (!this.options.vertical ? '-horizontal' : '-vertical');
        },

        dimension: function(e, d) {
            var el = $(e);

            if (d == null) {
                return !this.options.vertical ?
                    ((el.innerWidth() +
                        $jc.intval(el.css('margin-left')) +
                        $jc.intval(el.css('margin-right')) +
                        $jc.intval(el.css('border-left-width')) +
                        $jc.intval(el.css('border-right-width'))) || $jc.intval(this.options.itemFallbackDimension)) :
                    ((el.innerHeight() +
                        $jc.intval(el.css('margin-top')) +
                        $jc.intval(el.css('margin-bottom')) +
                        $jc.intval(el.css('border-top-width')) +
                        $jc.intval(el.css('border-bottom-width'))) || $jc.intval(this.options.itemFallbackDimension));
            } else {
                var w = !this.options.vertical ?
                    d - $jc.intval(el.css('marginLeft')) - $jc.intval(el.css('marginRight')) :
                    d - $jc.intval(el.css('marginTop')) - $jc.intval(el.css('marginBottom'));

                $(el).css(this.wh, w + 'px');

                return this.dimension(el);
            }
        },

        clipping: function() {
            return !this.options.vertical ?
                this.clip[0].offsetWidth - $jc.intval(this.clip.css('borderLeftWidth')) - $jc.intval(this.clip.css('borderRightWidth')) :
                this.clip[0].offsetHeight - $jc.intval(this.clip.css('borderTopWidth')) - $jc.intval(this.clip.css('borderBottomWidth'));
        },

        index: function(i, s) {
            if (s == null) {
                s = this.options.size;
            }

            return Math.round((((i-1) / s) - Math.floor((i-1) / s)) * s) + 1;
        }
    });

    $jc.extend({
        /**
         * Gets/Sets the global default configuration properties.
         *
         * @method defaults
         * @return {Object}
         * @param d {Object} A set of key/value pairs to set as configuration properties.
         */
        defaults: function(d) {
            return $.extend(defaults, d || {});
        },

        intval: function(v) {
            v = parseInt(v, 10);
            return isNaN(v) ? 0 : v;
        },

        windowLoaded: function() {
            windowLoaded = true;
        },

        isSafari: function() {
            var ua = navigator.userAgent.toLowerCase(),
                match = /(chrome)[ \/]([\w.]+)/.exec(ua) || /(webkit)[ \/]([\w.]+)/.exec(ua) || [],
                browser = match[1] || "";

            return browser === 'webkit';
        }
    });

    /**
     * Creates a carousel for all matched elements.
     *
     * @example $("#mycarousel").jcarousel();
     * @before <ul id="mycarousel" class="jcarousel-skin-name"><li>First item</li><li>Second item</li></ul>
     * @result
     *
     * <div class="jcarousel-skin-name">
     *   <div class="jcarousel-container">
     *     <div class="jcarousel-clip">
     *       <ul class="jcarousel-list">
     *         <li class="jcarousel-item-1">First item</li>
     *         <li class="jcarousel-item-2">Second item</li>
     *       </ul>
     *     </div>
     *     <div disabled="disabled" class="jcarousel-prev jcarousel-prev-disabled"></div>
     *     <div class="jcarousel-next"></div>
     *   </div>
     * </div>
     *
     * @method jcarousel
     * @return jQuery
     * @param o {Hash|String} A set of key/value pairs to set as configuration properties or a method name to call on a formerly created instance.
     */
    $.fn.jcarousel = function(o) {
        if (typeof o == 'string') {
            var instance = $(this).data('jcarousel'), args = Array.prototype.slice.call(arguments, 1);
            return instance[o].apply(instance, args);
        } else {
            return this.each(function() {
                var instance = $(this).data('jcarousel');
                if (instance) {
                    if (o) {
                        $.extend(instance.options, o);
                    }
                    instance.reload();
                } else {
                    $(this).data('jcarousel', new $jc(this, o));
                }
            });
        }
    };

})(jQuery);
;
/*!
 * Name    : Just Another Parallax [Jarallax]
 * Version : 1.12.7
 * Author  : nK <https://nkdev.info>
 * GitHub  : https://github.com/nk-o/jarallax
 */!function(n){var o={};function i(e){if(o[e])return o[e].exports;var t=o[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.m=n,i.c=o,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)i.d(n,o,function(e){return t[e]}.bind(null,o));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i(i.s=10)}([,,function(e,t){e.exports=function(e){"complete"===document.readyState||"interactive"===document.readyState?e.call():document.attachEvent?document.attachEvent("onreadystatechange",function(){"interactive"===document.readyState&&e.call()}):document.addEventListener&&document.addEventListener("DOMContentLoaded",e)}},function(t,e,n){!function(e){e="undefined"!=typeof window?window:void 0!==e?e:"undefined"!=typeof self?self:{};t.exports=e}.call(this,n(4))},function(e,t){function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var o=function(){return this}();try{o=o||new Function("return this")()}catch(e){"object"===("undefined"==typeof window?"undefined":n(window))&&(o=window)}e.exports=o},,,,,,function(e,t,n){e.exports=n(11)},function(e,t,n){"use strict";n.r(t);var t=n(2),t=n.n(t),i=n(3),a=n(12);function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var o,l=i.window.jarallax;i.window.jarallax=a.default,i.window.jarallax.noConflict=function(){return i.window.jarallax=l,this},void 0!==i.jQuery&&((n=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];Array.prototype.unshift.call(t,this);var o=a.default.apply(i.window,t);return"object"!==r(o)?o:this}).constructor=a.default.constructor,o=i.jQuery.fn.jarallax,i.jQuery.fn.jarallax=n,i.jQuery.fn.jarallax.noConflict=function(){return i.jQuery.fn.jarallax=o,this}),t()(function(){Object(a.default)(document.querySelectorAll("[data-jarallax]"))})},function(e,t,n){"use strict";n.r(t);var o=n(2),o=n.n(o),f=n(3);function s(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=e&&("undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]);if(null!=n){var o,i,a=[],r=!0,l=!1;try{for(n=n.call(e);!(r=(o=n.next()).done)&&(a.push(o.value),!t||a.length!==t);r=!0);}catch(e){l=!0,i=e}finally{try{r||null==n.return||n.return()}finally{if(l)throw i}}return a}}(e,t)||function(e,t){if(e){if("string"==typeof e)return i(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Map"===(n="Object"===n&&e.constructor?e.constructor.name:n)||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?i(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function a(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var r,g,u=f.window.navigator,p=-1<u.userAgent.indexOf("MSIE ")||-1<u.userAgent.indexOf("Trident/")||-1<u.userAgent.indexOf("Edge/"),l=/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(u.userAgent),d=function(){for(var e="transform WebkitTransform MozTransform".split(" "),t=document.createElement("div"),n=0;n<e.length;n+=1)if(t&&void 0!==t.style[e[n]])return e[n];return!1}();function m(){g=l?(!r&&document.body&&((r=document.createElement("div")).style.cssText="position: fixed; top: -9999px; left: 0; height: 100vh; width: 0;",document.body.appendChild(r)),(r?r.clientHeight:0)||f.window.innerHeight||document.documentElement.clientHeight):f.window.innerHeight||document.documentElement.clientHeight}m(),f.window.addEventListener("resize",m),f.window.addEventListener("orientationchange",m),f.window.addEventListener("load",m),o()(function(){m()});var y=[];function b(){y.length&&(y.forEach(function(e,t){var n=e.instance,o=e.oldData,i=n.$item.getBoundingClientRect(),e={width:i.width,height:i.height,top:i.top,bottom:i.bottom,wndW:f.window.innerWidth,wndH:g},i=!o||o.wndW!==e.wndW||o.wndH!==e.wndH||o.width!==e.width||o.height!==e.height,o=i||!o||o.top!==e.top||o.bottom!==e.bottom;y[t].oldData=e,i&&n.onResize(),o&&n.onScroll()}),f.window.requestAnimationFrame(b))}var h=0,v=function(){function l(e,t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,l);var n=this;n.instanceID=h,h+=1,n.$item=e,n.defaults={type:"scroll",speed:.5,imgSrc:null,imgElement:".jarallax-img",imgSize:"cover",imgPosition:"50% 50%",imgRepeat:"no-repeat",keepImg:!1,elementInViewport:null,zIndex:-100,disableParallax:!1,disableVideo:!1,videoSrc:null,videoStartTime:0,videoEndTime:0,videoVolume:0,videoLoop:!0,videoPlayOnlyVisible:!0,videoLazyLoading:!0,onScroll:null,onInit:null,onDestroy:null,onCoverImage:null};var o,i,a=n.$item.dataset||{},r={};Object.keys(a).forEach(function(e){var t=e.substr(0,1).toLowerCase()+e.substr(1);t&&void 0!==n.defaults[t]&&(r[t]=a[e])}),n.options=n.extend({},n.defaults,r,t),n.pureOptions=n.extend({},n.options),Object.keys(n.options).forEach(function(e){"true"===n.options[e]?n.options[e]=!0:"false"===n.options[e]&&(n.options[e]=!1)}),n.options.speed=Math.min(2,Math.max(-1,parseFloat(n.options.speed))),"string"==typeof n.options.disableParallax&&(n.options.disableParallax=new RegExp(n.options.disableParallax)),n.options.disableParallax instanceof RegExp&&(o=n.options.disableParallax,n.options.disableParallax=function(){return o.test(u.userAgent)}),"function"!=typeof n.options.disableParallax&&(n.options.disableParallax=function(){return!1}),"string"==typeof n.options.disableVideo&&(n.options.disableVideo=new RegExp(n.options.disableVideo)),n.options.disableVideo instanceof RegExp&&(i=n.options.disableVideo,n.options.disableVideo=function(){return i.test(u.userAgent)}),"function"!=typeof n.options.disableVideo&&(n.options.disableVideo=function(){return!1});t=n.options.elementInViewport;(t=t&&"object"===c(t)&&void 0!==t.length?s(t,1)[0]:t)instanceof Element||(t=null),n.options.elementInViewport=t,n.image={src:n.options.imgSrc||null,$container:null,useImgTag:!1,position:/iPad|iPhone|iPod|Android/.test(u.userAgent)?"absolute":"fixed"},n.initImg()&&n.canInitParallax()&&n.init()}var e,t,n;return e=l,(t=[{key:"css",value:function(t,n){return"string"==typeof n?f.window.getComputedStyle(t).getPropertyValue(n):(n.transform&&d&&(n[d]=n.transform),Object.keys(n).forEach(function(e){t.style[e]=n[e]}),t)}},{key:"extend",value:function(n){for(var e=arguments.length,o=new Array(1<e?e-1:0),t=1;t<e;t++)o[t-1]=arguments[t];return n=n||{},Object.keys(o).forEach(function(t){o[t]&&Object.keys(o[t]).forEach(function(e){n[e]=o[t][e]})}),n}},{key:"getWindowData",value:function(){return{width:f.window.innerWidth||document.documentElement.clientWidth,height:g,y:document.documentElement.scrollTop}}},{key:"initImg",value:function(){var e=this,t=e.options.imgElement;return(t=t&&"string"==typeof t?e.$item.querySelector(t):t)instanceof Element||(e.options.imgSrc?(t=new Image).src=e.options.imgSrc:t=null),t&&(e.options.keepImg?e.image.$item=t.cloneNode(!0):(e.image.$item=t,e.image.$itemParent=t.parentNode),e.image.useImgTag=!0),!!e.image.$item||(null===e.image.src&&(e.image.src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",e.image.bgImage=e.css(e.$item,"background-image")),!(!e.image.bgImage||"none"===e.image.bgImage))}},{key:"canInitParallax",value:function(){return d&&!this.options.disableParallax()}},{key:"init",value:function(){var e,t=this,n={position:"absolute",top:0,left:0,width:"100%",height:"100%",overflow:"hidden"},o={pointerEvents:"none",transformStyle:"preserve-3d",backfaceVisibility:"hidden",willChange:"transform,opacity"};t.options.keepImg||((e=t.$item.getAttribute("style"))&&t.$item.setAttribute("data-jarallax-original-styles",e),!t.image.useImgTag||(e=t.image.$item.getAttribute("style"))&&t.image.$item.setAttribute("data-jarallax-original-styles",e)),"static"===t.css(t.$item,"position")&&t.css(t.$item,{position:"relative"}),"auto"===t.css(t.$item,"z-index")&&t.css(t.$item,{zIndex:0}),t.image.$container=document.createElement("div"),t.css(t.image.$container,n),t.css(t.image.$container,{"z-index":t.options.zIndex}),p&&t.css(t.image.$container,{opacity:.9999}),t.image.$container.setAttribute("id","jarallax-container-".concat(t.instanceID)),t.$item.appendChild(t.image.$container),t.image.useImgTag?o=t.extend({"object-fit":t.options.imgSize,"object-position":t.options.imgPosition,"font-family":"object-fit: ".concat(t.options.imgSize,"; object-position: ").concat(t.options.imgPosition,";"),"max-width":"none"},n,o):(t.image.$item=document.createElement("div"),t.image.src&&(o=t.extend({"background-position":t.options.imgPosition,"background-size":t.options.imgSize,"background-repeat":t.options.imgRepeat,"background-image":t.image.bgImage||'url("'.concat(t.image.src,'")')},n,o))),"opacity"!==t.options.type&&"scale"!==t.options.type&&"scale-opacity"!==t.options.type&&1!==t.options.speed||(t.image.position="absolute"),"fixed"===t.image.position&&(n=function(e){for(var t=[];null!==e.parentElement;)1===(e=e.parentElement).nodeType&&t.push(e);return t}(t.$item).filter(function(e){var t=f.window.getComputedStyle(e),e=t["-webkit-transform"]||t["-moz-transform"]||t.transform;return e&&"none"!==e||/(auto|scroll)/.test(t.overflow+t["overflow-y"]+t["overflow-x"])}),t.image.position=n.length?"absolute":"fixed"),o.position=t.image.position,t.css(t.image.$item,o),t.image.$container.appendChild(t.image.$item),t.onResize(),t.onScroll(!0),t.options.onInit&&t.options.onInit.call(t),"none"!==t.css(t.$item,"background-image")&&t.css(t.$item,{"background-image":"none"}),t.addToParallaxList()}},{key:"addToParallaxList",value:function(){y.push({instance:this}),1===y.length&&f.window.requestAnimationFrame(b)}},{key:"removeFromParallaxList",value:function(){var n=this;y.forEach(function(e,t){e.instance.instanceID===n.instanceID&&y.splice(t,1)})}},{key:"destroy",value:function(){var e=this;e.removeFromParallaxList();var t,n=e.$item.getAttribute("data-jarallax-original-styles");e.$item.removeAttribute("data-jarallax-original-styles"),n?e.$item.setAttribute("style",n):e.$item.removeAttribute("style"),e.image.useImgTag&&(t=e.image.$item.getAttribute("data-jarallax-original-styles"),e.image.$item.removeAttribute("data-jarallax-original-styles"),t?e.image.$item.setAttribute("style",n):e.image.$item.removeAttribute("style"),e.image.$itemParent&&e.image.$itemParent.appendChild(e.image.$item)),e.$clipStyles&&e.$clipStyles.parentNode.removeChild(e.$clipStyles),e.image.$container&&e.image.$container.parentNode.removeChild(e.image.$container),e.options.onDestroy&&e.options.onDestroy.call(e),delete e.$item.jarallax}},{key:"clipContainer",value:function(){var e,t,n;"fixed"===this.image.position&&(t=(n=(e=this).image.$container.getBoundingClientRect()).width,n=n.height,e.$clipStyles||(e.$clipStyles=document.createElement("style"),e.$clipStyles.setAttribute("type","text/css"),e.$clipStyles.setAttribute("id","jarallax-clip-".concat(e.instanceID)),(document.head||document.getElementsByTagName("head")[0]).appendChild(e.$clipStyles)),n="#jarallax-container-".concat(e.instanceID," {\n            clip: rect(0 ").concat(t,"px ").concat(n,"px 0);\n            clip: rect(0, ").concat(t,"px, ").concat(n,"px, 0);\n            -webkit-clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);\n            clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);\n        }"),e.$clipStyles.styleSheet?e.$clipStyles.styleSheet.cssText=n:e.$clipStyles.innerHTML=n)}},{key:"coverImage",value:function(){var e=this,t=e.image.$container.getBoundingClientRect(),n=t.height,o=e.options.speed,i="scroll"===e.options.type||"scroll-opacity"===e.options.type,a=0,r=n,l=0;return i&&(o<0?(a=o*Math.max(n,g),g<n&&(a-=o*(n-g))):a=o*(n+g),1<o?r=Math.abs(a-g):o<0?r=a/o+Math.abs(a):r+=(g-n)*(1-o),a/=2),e.parallaxScrollDistance=a,l=i?(g-r)/2:(n-r)/2,e.css(e.image.$item,{height:"".concat(r,"px"),marginTop:"".concat(l,"px"),left:"fixed"===e.image.position?"".concat(t.left,"px"):"0",width:"".concat(t.width,"px")}),e.options.onCoverImage&&e.options.onCoverImage.call(e),{image:{height:r,marginTop:l},container:t}}},{key:"isVisible",value:function(){return this.isElementInViewport||!1}},{key:"onScroll",value:function(e){var t,n,o,i,a,r,l,s=this,c=s.$item.getBoundingClientRect(),u=c.top,p=c.height,d={},m=c;s.options.elementInViewport&&(m=s.options.elementInViewport.getBoundingClientRect()),s.isElementInViewport=0<=m.bottom&&0<=m.right&&m.top<=g&&m.left<=f.window.innerWidth,(e||s.isElementInViewport)&&(t=Math.max(0,u),n=Math.max(0,p+u),o=Math.max(0,-u),i=Math.max(0,u+p-g),a=Math.max(0,p-(u+p-g)),r=Math.max(0,-u+g-p),m=1-(g-u)/(g+p)*2,e=1,p<g?e=1-(o||i)/p:n<=g?e=n/g:a<=g&&(e=a/g),"opacity"!==s.options.type&&"scale-opacity"!==s.options.type&&"scroll-opacity"!==s.options.type||(d.transform="translate3d(0,0,0)",d.opacity=e),"scale"!==s.options.type&&"scale-opacity"!==s.options.type||(l=1,s.options.speed<0?l-=s.options.speed*e:l+=s.options.speed*(1-e),d.transform="scale(".concat(l,") translate3d(0,0,0)")),"scroll"!==s.options.type&&"scroll-opacity"!==s.options.type||(l=s.parallaxScrollDistance*m,"absolute"===s.image.position&&(l-=u),d.transform="translate3d(0,".concat(l,"px,0)")),s.css(s.image.$item,d),s.options.onScroll&&s.options.onScroll.call(s,{section:c,beforeTop:t,beforeTopEnd:n,afterTop:o,beforeBottom:i,beforeBottomEnd:a,afterBottom:r,visiblePercent:e,fromViewportCenter:m}))}},{key:"onResize",value:function(){this.coverImage(),this.clipContainer()}}])&&a(e.prototype,t),n&&a(e,n),l}(),o=function(e,t){for(var n,o=(e=("object"===("undefined"==typeof HTMLElement?"undefined":c(HTMLElement))?e instanceof HTMLElement:e&&"object"===c(e)&&null!==e&&1===e.nodeType&&"string"==typeof e.nodeName)?[e]:e).length,i=0,a=arguments.length,r=new Array(2<a?a-2:0),l=2;l<a;l++)r[l-2]=arguments[l];for(;i<o;i+=1)if("object"===c(t)||void 0===t?e[i].jarallax||(e[i].jarallax=new v(e[i],t)):e[i].jarallax&&(n=e[i].jarallax[t].apply(e[i].jarallax,r)),void 0!==n)return n;return e};o.constructor=v,t.default=o}]);

;
/**
 * Justified Gallery - v3.6.1
 * http://miromannino.github.io/Justified-Gallery/
 *
 * Copyright (c) 2014 Miro Mannino
 * Licensed under the MIT license.
 */
(function($) {

  /**
   * Justified Gallery controller constructor
   *
   * @param $gallery the gallery to build
   * @param settings the settings (the defaults are in $.fn.justifiedGallery.defaults)
   * @constructor
   */
  var JustifiedGallery = function ($gallery, settings) {

    this.settings = settings;
    this.checkSettings();

    this.imgAnalyzerTimeout = null;
    this.entries = null;
    this.buildingRow = {
      entriesBuff : [],
      width : 0,
      height : 0,
      aspectRatio : 0
    };
    this.lastAnalyzedIndex = -1;
    this.yield = {
      every : 2, // do a flush every n flushes (must be greater than 1)
      flushed : 0 // flushed rows without a yield
    };
    this.border = settings.border >= 0 ? settings.border : settings.margins;
    this.maxRowHeight = this.retrieveMaxRowHeight();
    this.suffixRanges = this.retrieveSuffixRanges();
    this.offY = this.border;
    this.spinner = {
      phase : 0,
      timeSlot : 150,
      $el : $('<div class="spinner"><span></span><span></span><span></span></div>'),
      intervalId : null
    };
    this.checkWidthIntervalId = null;
    this.galleryWidth = $gallery.width();
    this.$gallery = $gallery;

  };

  /** @returns {String} the best suffix given the width and the height */
  JustifiedGallery.prototype.getSuffix = function (width, height) {
    var longestSide, i;
    longestSide = (width > height) ? width : height;
    for (i = 0; i < this.suffixRanges.length; i++) {
      if (longestSide <= this.suffixRanges[i]) {
        return this.settings.sizeRangeSuffixes[this.suffixRanges[i]];
      }
    }
    return this.settings.sizeRangeSuffixes[this.suffixRanges[i - 1]];
  };

  /**
   * Remove the suffix from the string
   *
   * @returns {string} a new string without the suffix
   */
  JustifiedGallery.prototype.removeSuffix = function (str, suffix) {
    return str.substring(0, str.length - suffix.length);
  };

  /**
   * @returns {boolean} a boolean to say if the suffix is contained in the str or not
   */
  JustifiedGallery.prototype.endsWith = function (str, suffix) {
    return str.indexOf(suffix, str.length - suffix.length) !== -1;
  };

  /**
   * Get the used suffix of a particular url
   *
   * @param str
   * @returns {String} return the used suffix
   */
  JustifiedGallery.prototype.getUsedSuffix = function (str) {
    for (var si in this.settings.sizeRangeSuffixes) {
      if (this.settings.sizeRangeSuffixes.hasOwnProperty(si)) {
        if (this.settings.sizeRangeSuffixes[si].length === 0) continue;
        if (this.endsWith(str, this.settings.sizeRangeSuffixes[si])) return this.settings.sizeRangeSuffixes[si];
      }
    }
    return '';
  };

  /**
   * Given an image src, with the width and the height, returns the new image src with the
   * best suffix to show the best quality thumbnail.
   *
   * @returns {String} the suffix to use
   */
  JustifiedGallery.prototype.newSrc = function (imageSrc, imgWidth, imgHeight) {
    var newImageSrc;
    
    if (this.settings.thumbnailPath) {
      newImageSrc = this.settings.thumbnailPath(imageSrc, imgWidth, imgHeight);
    } else {
      var matchRes = imageSrc.match(this.settings.extension);
      var ext = (matchRes !== null) ? matchRes[0] : '';
      newImageSrc = imageSrc.replace(this.settings.extension, '');
      newImageSrc = this.removeSuffix(newImageSrc, this.getUsedSuffix(newImageSrc));
      newImageSrc += this.getSuffix(imgWidth, imgHeight) + ext;
    }

    return newImageSrc;
  };

  /**
   * Shows the images that is in the given entry
   *
   * @param $entry the entry
   * @param callback the callback that is called when the show animation is finished
   */
  JustifiedGallery.prototype.showImg = function ($entry, callback) {
    if (this.settings.cssAnimation) {
      $entry.addClass('entry-visible');
      if (callback) callback();
    } else {
      $entry.stop().fadeTo(this.settings.imagesAnimationDuration, 1.0, callback);
    }
  };

  /**
   * Extract the image src form the image, looking from the 'safe-src', and if it can't be found, from the
   * 'src' attribute. It saves in the image data the 'jg.originalSrc' field, with the extracted src.
   *
   * @param $image the image to analyze
   * @returns {String} the extracted src
   */
  JustifiedGallery.prototype.extractImgSrcFromImage = function ($image) {
    var imageSrc = (typeof $image.data('safe-src') !== 'undefined') ? $image.data('safe-src') : $image.attr('src');
    $image.data('jg.originalSrc', imageSrc);
    return imageSrc;
  };

  /** @returns {jQuery} the image in the given entry */
  JustifiedGallery.prototype.imgFromEntry = function ($entry) {
    var $img = $entry.find('> img');
    if ($img.length === 0) $img = $entry.find('> a > img');
    return $img.length === 0 ? null : $img;
  };

  /** @returns {jQuery} the caption in the given entry */
  JustifiedGallery.prototype.captionFromEntry = function ($entry) {
    var $caption = $entry.find('> .caption');
    return $caption.length === 0 ? null : $caption;
  };

  /**
   * Display the entry
   *
   * @param {jQuery} $entry the entry to display
   * @param {int} x the x position where the entry must be positioned
   * @param y the y position where the entry must be positioned
   * @param imgWidth the image width
   * @param imgHeight the image height
   * @param rowHeight the row height of the row that owns the entry
   */
  JustifiedGallery.prototype.displayEntry = function ($entry, x, y, imgWidth, imgHeight, rowHeight) {
    $entry.width(imgWidth);
    $entry.height(rowHeight);
    $entry.css('top', y);
    $entry.css('left', x);

    var $image = this.imgFromEntry($entry);
    if ($image !== null) {
      $image.css('width', imgWidth);
      $image.css('height', imgHeight);
      $image.css('margin-left', - imgWidth / 2);
      $image.css('margin-top', - imgHeight / 2);

      // Image reloading for an high quality of thumbnails
      var imageSrc = $image.attr('src');
      var newImageSrc = this.newSrc(imageSrc, imgWidth, imgHeight);

      $image.one('error', function () {
        $image.attr('src', $image.data('jg.originalSrc')); //revert to the original thumbnail, we got it.
      });

      var loadNewImage = function () {
        if (imageSrc !== newImageSrc) { //load the new image after the fadeIn
          $image.attr('src', newImageSrc);
        }
      };

      if ($entry.data('jg.loaded') === 'skipped') {
        this.onImageEvent(imageSrc, $.proxy(function() {
          this.showImg($entry, loadNewImage);
          $entry.data('jg.loaded', true);
        }, this));
      } else {
        this.showImg($entry, loadNewImage);
      }

    } else {
      this.showImg($entry);
    }

    this.displayEntryCaption($entry);
  };

  /**
   * Display the entry caption. If the caption element doesn't exists, it creates the caption using the 'alt'
   * or the 'title' attributes.
   *
   * @param {jQuery} $entry the entry to process
   */
  JustifiedGallery.prototype.displayEntryCaption = function ($entry) {
    var $image = this.imgFromEntry($entry);
    if ($image !== null && this.settings.captions) {
      var $imgCaption = this.captionFromEntry($entry);

      // Create it if it doesn't exists
      if ($imgCaption === null) {
        var caption = $image.attr('alt');
        if (!this.isValidCaption(caption)) caption = $entry.attr('title');
        if (this.isValidCaption(caption)) { // Create only we found something
          $imgCaption = $('<div class="caption">' + caption + '</div>');
          $entry.append($imgCaption);
          $entry.data('jg.createdCaption', true);
        }
      }

      // Create events (we check again the $imgCaption because it can be still inexistent)
      if ($imgCaption !== null) {
        if (!this.settings.cssAnimation) $imgCaption.stop().fadeTo(0, this.settings.captionSettings.nonVisibleOpacity);
        this.addCaptionEventsHandlers($entry);
      }
    } else {
      this.removeCaptionEventsHandlers($entry);
    }
  };

  /**
   * Validates the caption
   *
   * @param caption The caption that should be validated
   * @return {boolean} Validation result
   */
  JustifiedGallery.prototype.isValidCaption = function (caption) {
    return (typeof caption !== 'undefined' && caption.length > 0);
  };

  /**
   * The callback for the event 'mouseenter'. It assumes that the event currentTarget is an entry.
   * It shows the caption using jQuery (or using CSS if it is configured so)
   *
   * @param {Event} eventObject the event object
   */
  JustifiedGallery.prototype.onEntryMouseEnterForCaption = function (eventObject) {
    var $caption = this.captionFromEntry($(eventObject.currentTarget));
    if (this.settings.cssAnimation) {
      $caption.addClass('caption-visible').removeClass('caption-hidden');
    } else {
      $caption.stop().fadeTo(this.settings.captionSettings.animationDuration,
          this.settings.captionSettings.visibleOpacity);
    }
  };

  /**
   * The callback for the event 'mouseleave'. It assumes that the event currentTarget is an entry.
   * It hides the caption using jQuery (or using CSS if it is configured so)
   *
   * @param {Event} eventObject the event object
   */
  JustifiedGallery.prototype.onEntryMouseLeaveForCaption = function (eventObject) {
    var $caption = this.captionFromEntry($(eventObject.currentTarget));
    if (this.settings.cssAnimation) {
      $caption.removeClass('caption-visible').removeClass('caption-hidden');
    } else {
      $caption.stop().fadeTo(this.settings.captionSettings.animationDuration,
          this.settings.captionSettings.nonVisibleOpacity);
    }
  };

  /**
   * Add the handlers of the entry for the caption
   *
   * @param $entry the entry to modify
   */
  JustifiedGallery.prototype.addCaptionEventsHandlers = function ($entry) {
    var captionMouseEvents = $entry.data('jg.captionMouseEvents');
    if (typeof captionMouseEvents === 'undefined') {
      captionMouseEvents = {
        mouseenter: $.proxy(this.onEntryMouseEnterForCaption, this),
        mouseleave: $.proxy(this.onEntryMouseLeaveForCaption, this)
      };
      $entry.on('mouseenter', undefined, undefined, captionMouseEvents.mouseenter);
      $entry.on('mouseleave', undefined, undefined, captionMouseEvents.mouseleave);
      $entry.data('jg.captionMouseEvents', captionMouseEvents);
    }
  };

  /**
   * Remove the handlers of the entry for the caption
   *
   * @param $entry the entry to modify
   */
  JustifiedGallery.prototype.removeCaptionEventsHandlers = function ($entry) {
    var captionMouseEvents = $entry.data('jg.captionMouseEvents');
    if (typeof captionMouseEvents !== 'undefined') {
      $entry.off('mouseenter', undefined, captionMouseEvents.mouseenter);
      $entry.off('mouseleave', undefined, captionMouseEvents.mouseleave);
      $entry.removeData('jg.captionMouseEvents');
    }
  };

  /**
   * Justify the building row, preparing it to
   *
   * @param isLastRow
   * @returns a boolean to know if the row has been justified or not
   */
  JustifiedGallery.prototype.prepareBuildingRow = function (isLastRow) {
    var i, $entry, imgAspectRatio, newImgW, newImgH, justify = true;
    var minHeight = 0;
    var availableWidth = this.galleryWidth - 2 * this.border - (
        (this.buildingRow.entriesBuff.length - 1) * this.settings.margins);
    var rowHeight = availableWidth / this.buildingRow.aspectRatio;
    var justifiable = this.buildingRow.width / availableWidth > this.settings.justifyThreshold;

    //Skip the last row if we can't justify it and the lastRow == 'hide'
    if (isLastRow && this.settings.lastRow === 'hide' && !justifiable) {
      for (i = 0; i < this.buildingRow.entriesBuff.length; i++) {
        $entry = this.buildingRow.entriesBuff[i];
        if (this.settings.cssAnimation)
          $entry.removeClass('entry-visible');
        else
          $entry.stop().fadeTo(0, 0);
      }
      return -1;
    }

    // With lastRow = nojustify, justify if is justificable (the images will not become too big)
    if (isLastRow && !justifiable && this.settings.lastRow !== 'justify' && this.settings.lastRow !== 'hide') justify = false;

    for (i = 0; i < this.buildingRow.entriesBuff.length; i++) {
      $entry = this.buildingRow.entriesBuff[i];
      imgAspectRatio = $entry.data('jg.width') / $entry.data('jg.height');

      if (justify) {
        newImgW = (i === this.buildingRow.entriesBuff.length - 1) ? availableWidth : rowHeight * imgAspectRatio;
        newImgH = rowHeight;

        /* With fixedHeight the newImgH must be greater than rowHeight.
         In some cases here this is not satisfied (due to the justification).
         But we comment it, because is better to have a shorter but justified row instead
         to have a cropped image at the end. */
        /*if (this.settings.fixedHeight && newImgH < this.settings.rowHeight) {
         newImgW = this.settings.rowHeight * imgAspectRatio;
         newImgH = this.settings.rowHeight;
         }*/

      } else {
        newImgW = this.settings.rowHeight * imgAspectRatio;
        newImgH = this.settings.rowHeight;
      }

      availableWidth -= Math.round(newImgW);
      $entry.data('jg.jwidth', Math.round(newImgW));
      $entry.data('jg.jheight', Math.ceil(newImgH));
      if (i === 0 || minHeight > newImgH) minHeight = newImgH;
    }

    if (this.settings.fixedHeight && minHeight > this.settings.rowHeight)
      minHeight = this.settings.rowHeight;

    this.buildingRow.height = minHeight;
    return justify;
  };

  /**
   * Clear the building row data to be used for a new row
   */
  JustifiedGallery.prototype.clearBuildingRow = function () {
    this.buildingRow.entriesBuff = [];
    this.buildingRow.aspectRatio = 0;
    this.buildingRow.width = 0;
  };

  /**
   * Flush a row: justify it, modify the gallery height accordingly to the row height
   *
   * @param isLastRow
   */
  JustifiedGallery.prototype.flushRow = function (isLastRow) {
    var settings = this.settings;
    var $entry, buildingRowRes, offX = this.border, i;

    buildingRowRes = this.prepareBuildingRow(isLastRow);
    if (isLastRow && settings.lastRow === 'hide' && this.buildingRow.height === -1) {
      this.clearBuildingRow();
      return;
    }

    if (this.maxRowHeight.isPercentage) {
      if (this.maxRowHeight.value * settings.rowHeight < this.buildingRow.height) {
        this.buildingRow.height = this.maxRowHeight.value * settings.rowHeight;
      }
    } else {
      if (this.maxRowHeight.value > 0 && this.maxRowHeight.value < this.buildingRow.height) {
        this.buildingRow.height = this.maxRowHeight.value;
      }
    }

    //Align last (unjustified) row
    if (settings.lastRow === 'center' || settings.lastRow === 'right') {
      var availableWidth = this.galleryWidth - 2 * this.border - (this.buildingRow.entriesBuff.length - 1) * settings.margins;

      for (i = 0; i < this.buildingRow.entriesBuff.length; i++) {
        $entry = this.buildingRow.entriesBuff[i];
        availableWidth -= $entry.data('jg.jwidth');
      }

      if (settings.lastRow === 'center')
        offX += availableWidth / 2;
      else if (settings.lastRow === 'right')
        offX += availableWidth;
    }


    for (i = 0; i < this.buildingRow.entriesBuff.length; i++) {
      $entry = this.buildingRow.entriesBuff[i];
      this.displayEntry($entry, offX, this.offY, $entry.data('jg.jwidth'), $entry.data('jg.jheight'), this.buildingRow.height);
      offX += $entry.data('jg.jwidth') + settings.margins;
    }

    //Gallery Height
    this.$gallery.height(this.offY + this.buildingRow.height + 
        this.border + (this.isSpinnerActive() ? this.getSpinnerHeight() : 0));

    if (!isLastRow || (this.buildingRow.height <= settings.rowHeight && buildingRowRes)) {
      //Ready for a new row
      this.offY += this.buildingRow.height + settings.margins;
      this.clearBuildingRow();
      this.$gallery.trigger('jg.rowflush');
    }
  };

  /**
   * Checks the width of the gallery container, to know if a new justification is needed
   */
  JustifiedGallery.prototype.checkWidth = function () {
    this.checkWidthIntervalId = setInterval($.proxy(function () {
      var galleryWidth = parseFloat(this.$gallery.width());
      if (Math.abs(galleryWidth - this.galleryWidth) > this.settings.refreshSensitivity) {
        this.galleryWidth = galleryWidth;
        this.rewind();

        // Restart to analyze
        this.startImgAnalyzer(true);
      }
    }, this), this.settings.refreshTime);
  };

  /**
   * @returns {boolean} a boolean saying if the spinner is active or not
   */
  JustifiedGallery.prototype.isSpinnerActive = function () {
    return this.spinner.intervalId !== null;
  };

  /**
   * @returns {int} the spinner height
   */
  JustifiedGallery.prototype.getSpinnerHeight = function () {
    return this.spinner.$el.innerHeight();
  };

  /**
   * Stops the spinner animation and modify the gallery height to exclude the spinner
   */
  JustifiedGallery.prototype.stopLoadingSpinnerAnimation = function () {
    clearInterval(this.spinner.intervalId);
    this.spinner.intervalId = null;
    this.$gallery.height(this.$gallery.height() - this.getSpinnerHeight());
    this.spinner.$el.detach();
  };

  /**
   * Starts the spinner animation
   */
  JustifiedGallery.prototype.startLoadingSpinnerAnimation = function () {
    var spinnerContext = this.spinner;
    var $spinnerPoints = spinnerContext.$el.find('span');
    clearInterval(spinnerContext.intervalId);
    this.$gallery.append(spinnerContext.$el);
    this.$gallery.height(this.offY + this.buildingRow.height + this.getSpinnerHeight());
    spinnerContext.intervalId = setInterval(function () {
      if (spinnerContext.phase < $spinnerPoints.length) {
        $spinnerPoints.eq(spinnerContext.phase).fadeTo(spinnerContext.timeSlot, 1);
      } else {
        $spinnerPoints.eq(spinnerContext.phase - $spinnerPoints.length).fadeTo(spinnerContext.timeSlot, 0);
      }
      spinnerContext.phase = (spinnerContext.phase + 1) % ($spinnerPoints.length * 2);
    }, spinnerContext.timeSlot);
  };

  /**
   * Rewind the image analysis to start from the first entry.
   */
  JustifiedGallery.prototype.rewind = function () {
    this.lastAnalyzedIndex = -1;
    this.offY = this.border;
    this.clearBuildingRow();
  };

  /**
   * Update the entries searching it from the justified gallery HTML element
   *
   * @param norewind if norewind only the new entries will be changed (i.e. randomized, sorted or filtered)
   * @returns {boolean} true if some entries has been founded
   */
  JustifiedGallery.prototype.updateEntries = function (norewind) {
    this.entries = this.$gallery.find(this.settings.selector).toArray();
    if (this.entries.length === 0) return false;

    // Filter
    if (this.settings.filter) {
      this.modifyEntries(this.filterArray, norewind);
    } else {
      this.modifyEntries(this.resetFilters, norewind);
    }

    // Sort or randomize
    if ($.isFunction(this.settings.sort)) {
      this.modifyEntries(this.sortArray, norewind);
    } else if (this.settings.randomize) {
      this.modifyEntries(this.shuffleArray, norewind);
    }

    return true;
  };

  /**
   * Apply the entries order to the DOM, iterating the entries and appending the images
   *
   * @param entries the entries that has been modified and that must be re-ordered in the DOM
   */
  JustifiedGallery.prototype.insertToGallery = function (entries) {
    var that = this;
    $.each(entries, function () {
      $(this).appendTo(that.$gallery);
    });
  };

  /**
   * Shuffle the array using the Fisher-Yates shuffle algorithm
   *
   * @param a the array to shuffle
   * @return the shuffled array
   */
  JustifiedGallery.prototype.shuffleArray = function (a) {
    var i, j, temp;
    for (i = a.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      temp = a[i];
      a[i] = a[j];
      a[j] = temp;
    }
    this.insertToGallery(a);
    return a;
  };

  /**
   * Sort the array using settings.comparator as comparator
   *
   * @param a the array to sort (it is sorted)
   * @return the sorted array
   */
  JustifiedGallery.prototype.sortArray = function (a) {
    a.sort(this.settings.sort);
    this.insertToGallery(a);
    return a;
  };

  /**
   * Reset the filters removing the 'jg-filtered' class from all the entries
   *
   * @param a the array to reset
   */
  JustifiedGallery.prototype.resetFilters = function (a) {
    for (var i = 0; i < a.length; i++) $(a[i]).removeClass('jg-filtered');
    return a;
  };

  /**
   * Filter the entries considering theirs classes (if a string has been passed) or using a function for filtering.
   *
   * @param a the array to filter
   * @return the filtered array
   */
  JustifiedGallery.prototype.filterArray = function (a) {
    var settings = this.settings;
    if ($.type(settings.filter) === 'string') {
      // Filter only keeping the entries passed in the string
      return a.filter(function (el) {
        var $el = $(el);
        if ($el.is(settings.filter)) {
          $el.removeClass('jg-filtered');
          return true;
        } else {
          $el.addClass('jg-filtered');
          return false;
        }
      });
    } else if ($.isFunction(settings.filter)) {
      // Filter using the passed function
      return a.filter(settings.filter);
    }
  };

  /**
   * Modify the entries. With norewind only the new inserted images will be modified (the ones after lastAnalyzedIndex)
   *
   * @param functionToApply the function to call to modify the entries (e.g. sorting, randomization, filtering)
   * @param norewind specify if the norewind has been called or not
   */
  JustifiedGallery.prototype.modifyEntries = function (functionToApply, norewind) {
    var lastEntries = norewind ?
        this.entries.splice(this.lastAnalyzedIndex + 1, this.entries.length - this.lastAnalyzedIndex - 1)
        : this.entries;
    lastEntries = functionToApply.call(this, lastEntries);
    this.entries = norewind ? this.entries.concat(lastEntries) : lastEntries;
  };

  /**
   * Destroy the Justified Gallery instance.
   *
   * It clears all the css properties added in the style attributes. We doesn't backup the original
   * values for those css attributes, because it costs (performance) and because in general one
   * shouldn't use the style attribute for an uniform set of images (where we suppose the use of
   * classes). Creating a backup is also difficult because JG could be called multiple times and
   * with different style attributes.
   */
  JustifiedGallery.prototype.destroy = function () {
    clearInterval(this.checkWidthIntervalId);

    $.each(this.entries, $.proxy(function(_, entry) {
      var $entry = $(entry);

      // Reset entry style
      $entry.css('width', '');
      $entry.css('height', '');
      $entry.css('top', '');
      $entry.css('left', '');
      $entry.data('jg.loaded', undefined);
      $entry.removeClass('jg-entry');

      // Reset image style
      var $img = this.imgFromEntry($entry);
      $img.css('width', '');
      $img.css('height', '');
      $img.css('margin-left', '');
      $img.css('margin-top', '');
      $img.attr('src', $img.data('jg.originalSrc'));
      $img.data('jg.originalSrc', undefined);

      // Remove caption
      this.removeCaptionEventsHandlers($entry);
      var $caption = this.captionFromEntry($entry);
      if ($entry.data('jg.createdCaption')) {
        // remove also the caption element (if created by jg)
        $entry.data('jg.createdCaption', undefined);
        if ($caption !== null) $caption.remove();
      } else {
        if ($caption !== null) $caption.fadeTo(0, 1);
      }

    }, this));

    this.$gallery.css('height', '');
    this.$gallery.removeClass('justified-gallery');
    this.$gallery.data('jg.controller', undefined);
  };

  /**
   * Analyze the images and builds the rows. It returns if it found an image that is not loaded.
   *
   * @param isForResize if the image analyzer is called for resizing or not, to call a different callback at the end
   */
  JustifiedGallery.prototype.analyzeImages = function (isForResize) {
    for (var i = this.lastAnalyzedIndex + 1; i < this.entries.length; i++) {
      var $entry = $(this.entries[i]);
      if ($entry.data('jg.loaded') === true || $entry.data('jg.loaded') === 'skipped') {
        var availableWidth = this.galleryWidth - 2 * this.border - (
            (this.buildingRow.entriesBuff.length - 1) * this.settings.margins);
        var imgAspectRatio = $entry.data('jg.width') / $entry.data('jg.height');
        if (availableWidth / (this.buildingRow.aspectRatio + imgAspectRatio) < this.settings.rowHeight) {
          this.flushRow(false);
          if(++this.yield.flushed >= this.yield.every) {
            this.startImgAnalyzer(isForResize);
            return;
          }
        }

        this.buildingRow.entriesBuff.push($entry);
        this.buildingRow.aspectRatio += imgAspectRatio;
        this.buildingRow.width += imgAspectRatio * this.settings.rowHeight;
        this.lastAnalyzedIndex = i;

      } else if ($entry.data('jg.loaded') !== 'error') {
        return;
      }
    }

    // Last row flush (the row is not full)
    if (this.buildingRow.entriesBuff.length > 0) this.flushRow(true);

    if (this.isSpinnerActive()) {
      this.stopLoadingSpinnerAnimation();
    }

    /* Stop, if there is, the timeout to start the analyzeImages.
     This is because an image can be set loaded, and the timeout can be set,
     but this image can be analyzed yet.
     */
    this.stopImgAnalyzerStarter();

    //On complete callback
    this.$gallery.trigger(isForResize ? 'jg.resize' : 'jg.complete');
  };

  /**
   * Stops any ImgAnalyzer starter (that has an assigned timeout)
   */
  JustifiedGallery.prototype.stopImgAnalyzerStarter = function () {
    this.yield.flushed = 0;
    if (this.imgAnalyzerTimeout !== null) clearTimeout(this.imgAnalyzerTimeout);
  };

  /**
   * Starts the image analyzer. It is not immediately called to let the browser to update the view
   *
   * @param isForResize specifies if the image analyzer must be called for resizing or not
   */
  JustifiedGallery.prototype.startImgAnalyzer = function (isForResize) {
    var that = this;
    this.stopImgAnalyzerStarter();
    this.imgAnalyzerTimeout = setTimeout(function () {
      that.analyzeImages(isForResize);
    }, 0.001); // we can't start it immediately due to a IE different behaviour
  };

  /**
   * Checks if the image is loaded or not using another image object. We cannot use the 'complete' image property,
   * because some browsers, with a 404 set complete = true.
   *
   * @param imageSrc the image src to load
   * @param onLoad callback that is called when the image has been loaded
   * @param onError callback that is called in case of an error
   */
  JustifiedGallery.prototype.onImageEvent = function (imageSrc, onLoad, onError) {
    if (!onLoad && !onError) return;

    var memImage = new Image();
    var $memImage = $(memImage);
    if (onLoad) {
      $memImage.one('load', function () {
        $memImage.off('load error');
        onLoad(memImage);
      });
    }
    if (onError) {
      $memImage.one('error', function() {
        $memImage.off('load error');
        onError(memImage);
      });
    }
    memImage.src = imageSrc;
  };

  /**
   * Init of Justified Gallery controlled
   * It analyzes all the entries starting theirs loading and calling the image analyzer (that works with loaded images)
   */
  JustifiedGallery.prototype.init = function () {
    var imagesToLoad = false, skippedImages = false, that = this;
    $.each(this.entries, function (index, entry) {
      var $entry = $(entry);
      var $image = that.imgFromEntry($entry);

      $entry.addClass('jg-entry');

      if ($entry.data('jg.loaded') !== true && $entry.data('jg.loaded') !== 'skipped') {

        // Link Rel global overwrite
        if (that.settings.rel !== null) $entry.attr('rel', that.settings.rel);

        // Link Target global overwrite
        if (that.settings.target !== null) $entry.attr('target', that.settings.target);

        if ($image !== null) {

          // Image src
          var imageSrc = that.extractImgSrcFromImage($image);
          $image.attr('src', imageSrc);

          /* If we have the height and the width, we don't wait that the image is loaded, but we start directly
           * with the justification */
          if (that.settings.waitThumbnailsLoad === false) {
            var width = parseFloat($image.attr('width'));
            var height = parseFloat($image.attr('height'));
            if (!isNaN(width) && !isNaN(height)) {
              $entry.data('jg.width', width);
              $entry.data('jg.height', height);
              $entry.data('jg.loaded', 'skipped');
              skippedImages = true;
              that.startImgAnalyzer(false);
              return true; // continue
            }
          }

          $entry.data('jg.loaded', false);
          imagesToLoad = true;

          // Spinner start
          if (!that.isSpinnerActive()) that.startLoadingSpinnerAnimation();

          that.onImageEvent(imageSrc, function (loadImg) { // image loaded
            $entry.data('jg.width', loadImg.width);
            $entry.data('jg.height', loadImg.height);
            $entry.data('jg.loaded', true);
            that.startImgAnalyzer(false);
          }, function () { // image load error
            $entry.data('jg.loaded', 'error');
            that.startImgAnalyzer(false);
          });

        } else {
          $entry.data('jg.loaded', true);
          $entry.data('jg.width', $entry.width() | parseFloat($entry.css('width')) | 1);
          $entry.data('jg.height', $entry.height() | parseFloat($entry.css('height')) | 1);
        }

      }

    });

    if (!imagesToLoad && !skippedImages) this.startImgAnalyzer(false);
    this.checkWidth();
  };

  /**
   * Checks that it is a valid number. If a string is passed it is converted to a number
   *
   * @param settingContainer the object that contains the setting (to allow the conversion)
   * @param settingName the setting name
   */
  JustifiedGallery.prototype.checkOrConvertNumber = function (settingContainer, settingName) {
    if ($.type(settingContainer[settingName]) === 'string') {
      settingContainer[settingName] = parseFloat(settingContainer[settingName]);
    }

    if ($.type(settingContainer[settingName]) === 'number') {
      if (isNaN(settingContainer[settingName])) throw 'invalid number for ' + settingName;
    } else {
      throw settingName + ' must be a number';
    }
  };

  /**
   * Checks the sizeRangeSuffixes and, if necessary, converts
   * its keys from string (e.g. old settings with 'lt100') to int.
   */
  JustifiedGallery.prototype.checkSizeRangesSuffixes = function () {
    if ($.type(this.settings.sizeRangeSuffixes) !== 'object') {
      throw 'sizeRangeSuffixes must be defined and must be an object';
    }

    var suffixRanges = [];
    for (var rangeIdx in this.settings.sizeRangeSuffixes) {
      if (this.settings.sizeRangeSuffixes.hasOwnProperty(rangeIdx)) suffixRanges.push(rangeIdx);
    }

    var newSizeRngSuffixes = {0: ''};
    for (var i = 0; i < suffixRanges.length; i++) {
      if ($.type(suffixRanges[i]) === 'string') {
        try {
          var numIdx = parseInt(suffixRanges[i].replace(/^[a-z]+/, ''), 10);
          newSizeRngSuffixes[numIdx] = this.settings.sizeRangeSuffixes[suffixRanges[i]];
        } catch (e) {
          throw 'sizeRangeSuffixes keys must contains correct numbers (' + e + ')';
        }
      } else {
        newSizeRngSuffixes[suffixRanges[i]] = this.settings.sizeRangeSuffixes[suffixRanges[i]];
      }
    }

    this.settings.sizeRangeSuffixes = newSizeRngSuffixes;
  };

  /**
   * check and convert the maxRowHeight setting
   */
  JustifiedGallery.prototype.retrieveMaxRowHeight = function () {
    var newMaxRowHeight = { };

    if ($.type(this.settings.maxRowHeight) === 'string') {
      if (this.settings.maxRowHeight.match(/^[0-9]+%$/)) {
        newMaxRowHeight.value = parseFloat(this.settings.maxRowHeight.match(/^([0-9]+)%$/)[1]) / 100;
        newMaxRowHeight.isPercentage = false;
      } else {
        newMaxRowHeight.value = parseFloat(this.settings.maxRowHeight);
        newMaxRowHeight.isPercentage = true;
      }
    } else if ($.type(this.settings.maxRowHeight) === 'number') {
      newMaxRowHeight.value = this.settings.maxRowHeight;
      newMaxRowHeight.isPercentage = false;
    } else {
      throw 'maxRowHeight must be a number or a percentage';
    }

    // check if the converted value is not a number
    if (isNaN(newMaxRowHeight.value)) throw 'invalid number for maxRowHeight';

    // check values
    if (newMaxRowHeight.isPercentage) {
      if (newMaxRowHeight.value < 100) newMaxRowHeight.value = 100;
    } else {
      if (newMaxRowHeight.value > 0 && newMaxRowHeight.value < this.settings.rowHeight) {
        newMaxRowHeight.value = this.settings.rowHeight;
      }
    }

    return newMaxRowHeight;

  };

  /**
   * Checks the settings
   */
  JustifiedGallery.prototype.checkSettings = function () {
    this.checkSizeRangesSuffixes();

    this.checkOrConvertNumber(this.settings, 'rowHeight');
    this.checkOrConvertNumber(this.settings, 'margins');
    this.checkOrConvertNumber(this.settings, 'border');

    if (this.settings.lastRow !== 'justify' &&
        this.settings.lastRow !== 'nojustify' && this.settings.lastRow !== 'left' &&
        this.settings.lastRow !== 'center' &&
        this.settings.lastRow !== 'right' &&
        this.settings.lastRow !== 'hide') {
      throw 'lastRow must be "justify", "nojustify", "left", "center", "right" or "hide"';
    }

    this.checkOrConvertNumber(this.settings, 'justifyThreshold');
    if (this.settings.justifyThreshold < 0 || this.settings.justifyThreshold > 1) {
      throw 'justifyThreshold must be in the interval [0,1]';
    }
    if ($.type(this.settings.cssAnimation) !== 'boolean') {
      throw 'cssAnimation must be a boolean';
    }

    if ($.type(this.settings.captions) !== 'boolean') throw 'captions must be a boolean';
    this.checkOrConvertNumber(this.settings.captionSettings, 'animationDuration');

    this.checkOrConvertNumber(this.settings.captionSettings, 'visibleOpacity');
    if (this.settings.captionSettings.visibleOpacity < 0 ||
        this.settings.captionSettings.visibleOpacity > 1) {
      throw 'captionSettings.visibleOpacity must be in the interval [0, 1]';
    }

    this.checkOrConvertNumber(this.settings.captionSettings, 'nonVisibleOpacity');
    if (this.settings.captionSettings.nonVisibleOpacity < 0 ||
        this.settings.captionSettings.nonVisibleOpacity > 1) {
      throw 'captionSettings.nonVisibleOpacity must be in the interval [0, 1]';
    }

    if ($.type(this.settings.fixedHeight) !== 'boolean') throw 'fixedHeight must be a boolean';
    this.checkOrConvertNumber(this.settings, 'imagesAnimationDuration');
    this.checkOrConvertNumber(this.settings, 'refreshTime');
    this.checkOrConvertNumber(this.settings, 'refreshSensitivity');
    if ($.type(this.settings.randomize) !== 'boolean') throw 'randomize must be a boolean';
    if ($.type(this.settings.selector) !== 'string') throw 'selector must be a string';

    if (this.settings.sort !== false && !$.isFunction(this.settings.sort)) {
      throw 'sort must be false or a comparison function';
    }

    if (this.settings.filter !== false && !$.isFunction(this.settings.filter) &&
        $.type(this.settings.filter) !== 'string') {
      throw 'filter must be false, a string or a filter function';
    }
  };

  /**
   * It brings all the indexes from the sizeRangeSuffixes and it orders them. They are then sorted and returned.
   * @returns {Array} sorted suffix ranges
   */
  JustifiedGallery.prototype.retrieveSuffixRanges = function () {
    var suffixRanges = [];
    for (var rangeIdx in this.settings.sizeRangeSuffixes) {
      if (this.settings.sizeRangeSuffixes.hasOwnProperty(rangeIdx)) suffixRanges.push(parseInt(rangeIdx, 10));
    }
    suffixRanges.sort(function (a, b) { return a > b ? 1 : a < b ? -1 : 0; });
    return suffixRanges;
  };

  /**
   * Update the existing settings only changing some of them
   *
   * @param newSettings the new settings (or a subgroup of them)
   */
  JustifiedGallery.prototype.updateSettings = function (newSettings) {
    // In this case Justified Gallery has been called again changing only some options
    this.settings = $.extend({}, this.settings, newSettings);
    this.checkSettings();

    // As reported in the settings: negative value = same as margins, 0 = disabled
    this.border = this.settings.border >= 0 ? this.settings.border : this.settings.margins;

    this.maxRowHeight = this.retrieveMaxRowHeight();
    this.suffixRanges = this.retrieveSuffixRanges();
  };

  /**
   * Justified Gallery plugin for jQuery
   *
   * Events
   *  - jg.complete : called when all the gallery has been created
   *  - jg.resize : called when the gallery has been resized
   *  - jg.rowflush : when a new row appears
   *
   * @param arg the action (or the settings) passed when the plugin is called
   * @returns {*} the object itself
   */
  $.fn.justifiedGallery = function (arg) {
    return this.each(function (index, gallery) {

      var $gallery = $(gallery);
      $gallery.addClass('justified-gallery');

      var controller = $gallery.data('jg.controller');
      if (typeof controller === 'undefined') {
        // Create controller and assign it to the object data
        if (typeof arg !== 'undefined' && arg !== null && $.type(arg) !== 'object') {
          if (arg === 'destroy') return; // Just a call to an unexisting object
          throw 'The argument must be an object';
        }
        controller = new JustifiedGallery($gallery, $.extend({}, $.fn.justifiedGallery.defaults, arg));
        $gallery.data('jg.controller', controller);
      } else if (arg === 'norewind') {
        // In this case we don't rewind: we analyze only the latest images (e.g. to complete the last unfinished row
        // ... left to be more readable 
      } else if (arg === 'destroy') {
        controller.destroy();
        return;
      } else {
        // In this case Justified Gallery has been called again changing only some options
        controller.updateSettings(arg);
        controller.rewind();
      }

      // Update the entries list
      if (!controller.updateEntries(arg === 'norewind')) return;

      // Init justified gallery
      controller.init();

    });
  };

  // Default options
  $.fn.justifiedGallery.defaults = {
    sizeRangeSuffixes: { }, /* e.g. Flickr configuration
        {
          100: '_t',  // used when longest is less than 100px
          240: '_m',  // used when longest is between 101px and 240px
          320: '_n',  // ...
          500: '',
          640: '_z',
          1024: '_b'  // used as else case because it is the last
        }
    */
    thumbnailPath: undefined, /* If defined, sizeRangeSuffixes is not used, and this function is used to determine the
    path relative to a specific thumbnail size. The function should accept respectively three arguments: 
    current path, width and height */
    rowHeight: 120,
    maxRowHeight: -1, // negative value = no limits, number to express the value in pixels,
                          // '[0-9]+%' to express in percentage (e.g. 300% means that the row height
                          // can't exceed 3 * rowHeight)
    margins: 1,
    border: -1, // negative value = same as margins, 0 = disabled, any other value to set the border

    lastRow: 'nojustify', // … which is the same as 'left', or can be 'justify', 'center', 'right' or 'hide'
    
    justifyThreshold: 0.75, /* if row width / available space > 0.75 it will be always justified
                             * (i.e. lastRow setting is not considered) */
    fixedHeight: false,
    waitThumbnailsLoad: true,
    captions: true,
    cssAnimation: false,
    imagesAnimationDuration: 500, // ignored with css animations
    captionSettings: { // ignored with css animations
      animationDuration: 500,
      visibleOpacity: 0.7,
      nonVisibleOpacity: 0.0
    },
    rel: null, // rewrite the rel of each analyzed links
    target: null, // rewrite the target of all links
    extension: /\.[^.\\/]+$/, // regexp to capture the extension of an image
    refreshTime: 200, // time interval (in ms) to check if the page changes its width
    refreshSensitivity: 0, // change in width allowed (in px) without re-building the gallery
    randomize: false,
    sort: false, /*
      - false: to do not sort
      - function: to sort them using the function as comparator (see Array.prototype.sort())
    */
    filter: false, /*
      - false: for a disabled filter
      - a string: an entry is kept if entry.is(filter string) returns true
                  see jQuery's .is() function for further information
      - a function: invoked with arguments (entry, index, array). Return true to keep the entry, false otherwise.
                    see Array.prototype.filter for further information.
    */
    selector: '> a, > div:not(.spinner)' // The selector that is used to know what are the entries of the gallery
  };

}(jQuery));
;
/*! tooltipster v4.2.8 */!function(a,b){"function"==typeof define&&define.amd?define(["jquery"],function(a){return b(a)}):"object"==typeof exports?module.exports=b(require("jquery")):b(jQuery)}(this,function(a){function b(a){this.$container,this.constraints=null,this.__$tooltip,this.__init(a)}function c(b,c){var d=!0;return a.each(b,function(a,e){return void 0===c[a]||b[a]!==c[a]?(d=!1,!1):void 0}),d}function d(b){var c=b.attr("id"),d=c?h.window.document.getElementById(c):null;return d?d===b[0]:a.contains(h.window.document.body,b[0])}function e(){if(!g)return!1;var a=g.document.body||g.document.documentElement,b=a.style,c="transition",d=["Moz","Webkit","Khtml","O","ms"];if("string"==typeof b[c])return!0;c=c.charAt(0).toUpperCase()+c.substr(1);for(var e=0;e<d.length;e++)if("string"==typeof b[d[e]+c])return!0;return!1}var f={animation:"fade",animationDuration:350,content:null,contentAsHTML:!1,contentCloning:!1,debug:!0,delay:300,delayTouch:[300,500],functionInit:null,functionBefore:null,functionReady:null,functionAfter:null,functionFormat:null,IEmin:6,interactive:!1,multiple:!1,parent:null,plugins:["sideTip"],repositionOnScroll:!1,restoration:"none",selfDestruction:!0,theme:[],timer:0,trackerInterval:500,trackOrigin:!1,trackTooltip:!1,trigger:"hover",triggerClose:{click:!1,mouseleave:!1,originClick:!1,scroll:!1,tap:!1,touchleave:!1},triggerOpen:{click:!1,mouseenter:!1,tap:!1,touchstart:!1},updateAnimation:"rotate",zIndex:9999999},g="undefined"!=typeof window?window:null,h={hasTouchCapability:!(!g||!("ontouchstart"in g||g.DocumentTouch&&g.document instanceof g.DocumentTouch||g.navigator.maxTouchPoints)),hasTransitions:e(),IE:!1,semVer:"4.2.8",window:g},i=function(){this.__$emitterPrivate=a({}),this.__$emitterPublic=a({}),this.__instancesLatestArr=[],this.__plugins={},this._env=h};i.prototype={__bridge:function(b,c,d){if(!c[d]){var e=function(){};e.prototype=b;var g=new e;g.__init&&g.__init(c),a.each(b,function(a,b){0!=a.indexOf("__")&&(c[a]?f.debug&&console.log("The "+a+" method of the "+d+" plugin conflicts with another plugin or native methods"):(c[a]=function(){return g[a].apply(g,Array.prototype.slice.apply(arguments))},c[a].bridged=g))}),c[d]=g}return this},__setWindow:function(a){return h.window=a,this},_getRuler:function(a){return new b(a)},_off:function(){return this.__$emitterPrivate.off.apply(this.__$emitterPrivate,Array.prototype.slice.apply(arguments)),this},_on:function(){return this.__$emitterPrivate.on.apply(this.__$emitterPrivate,Array.prototype.slice.apply(arguments)),this},_one:function(){return this.__$emitterPrivate.one.apply(this.__$emitterPrivate,Array.prototype.slice.apply(arguments)),this},_plugin:function(b){var c=this;if("string"==typeof b){var d=b,e=null;return d.indexOf(".")>0?e=c.__plugins[d]:a.each(c.__plugins,function(a,b){return b.name.substring(b.name.length-d.length-1)=="."+d?(e=b,!1):void 0}),e}if(b.name.indexOf(".")<0)throw new Error("Plugins must be namespaced");return c.__plugins[b.name]=b,b.core&&c.__bridge(b.core,c,b.name),this},_trigger:function(){var a=Array.prototype.slice.apply(arguments);return"string"==typeof a[0]&&(a[0]={type:a[0]}),this.__$emitterPrivate.trigger.apply(this.__$emitterPrivate,a),this.__$emitterPublic.trigger.apply(this.__$emitterPublic,a),this},instances:function(b){var c=[],d=b||".tooltipstered";return a(d).each(function(){var b=a(this),d=b.data("tooltipster-ns");d&&a.each(d,function(a,d){c.push(b.data(d))})}),c},instancesLatest:function(){return this.__instancesLatestArr},off:function(){return this.__$emitterPublic.off.apply(this.__$emitterPublic,Array.prototype.slice.apply(arguments)),this},on:function(){return this.__$emitterPublic.on.apply(this.__$emitterPublic,Array.prototype.slice.apply(arguments)),this},one:function(){return this.__$emitterPublic.one.apply(this.__$emitterPublic,Array.prototype.slice.apply(arguments)),this},origins:function(b){var c=b?b+" ":"";return a(c+".tooltipstered").toArray()},setDefaults:function(b){return a.extend(f,b),this},triggerHandler:function(){return this.__$emitterPublic.triggerHandler.apply(this.__$emitterPublic,Array.prototype.slice.apply(arguments)),this}},a.tooltipster=new i,a.Tooltipster=function(b,c){this.__callbacks={close:[],open:[]},this.__closingTime,this.__Content,this.__contentBcr,this.__destroyed=!1,this.__$emitterPrivate=a({}),this.__$emitterPublic=a({}),this.__enabled=!0,this.__garbageCollector,this.__Geometry,this.__lastPosition,this.__namespace="tooltipster-"+Math.round(1e6*Math.random()),this.__options,this.__$originParents,this.__pointerIsOverOrigin=!1,this.__previousThemes=[],this.__state="closed",this.__timeouts={close:[],open:null},this.__touchEvents=[],this.__tracker=null,this._$origin,this._$tooltip,this.__init(b,c)},a.Tooltipster.prototype={__init:function(b,c){var d=this;if(d._$origin=a(b),d.__options=a.extend(!0,{},f,c),d.__optionsFormat(),!h.IE||h.IE>=d.__options.IEmin){var e=null;if(void 0===d._$origin.data("tooltipster-initialTitle")&&(e=d._$origin.attr("title"),void 0===e&&(e=null),d._$origin.data("tooltipster-initialTitle",e)),null!==d.__options.content)d.__contentSet(d.__options.content);else{var g,i=d._$origin.attr("data-tooltip-content");i&&(g=a(i)),g&&g[0]?d.__contentSet(g.first()):d.__contentSet(e)}d._$origin.removeAttr("title").addClass("tooltipstered"),d.__prepareOrigin(),d.__prepareGC(),a.each(d.__options.plugins,function(a,b){d._plug(b)}),h.hasTouchCapability&&a(h.window.document.body).on("touchmove."+d.__namespace+"-triggerOpen",function(a){d._touchRecordEvent(a)}),d._on("created",function(){d.__prepareTooltip()})._on("repositioned",function(a){d.__lastPosition=a.position})}else d.__options.disabled=!0},__contentInsert:function(){var a=this,b=a._$tooltip.find(".tooltipster-content"),c=a.__Content,d=function(a){c=a};return a._trigger({type:"format",content:a.__Content,format:d}),a.__options.functionFormat&&(c=a.__options.functionFormat.call(a,a,{origin:a._$origin[0]},a.__Content)),"string"!=typeof c||a.__options.contentAsHTML?b.empty().append(c):b.text(c),a},__contentSet:function(b){return b instanceof a&&this.__options.contentCloning&&(b=b.clone(!0)),this.__Content=b,this._trigger({type:"updated",content:b}),this},__destroyError:function(){throw new Error("This tooltip has been destroyed and cannot execute your method call.")},__geometry:function(){var b=this,c=b._$origin,d=b._$origin.is("area");if(d){var e=b._$origin.parent().attr("name");c=a('img[usemap="#'+e+'"]')}var f=c[0].getBoundingClientRect(),g=a(h.window.document),i=a(h.window),j=c,k={available:{document:null,window:null},document:{size:{height:g.height(),width:g.width()}},window:{scroll:{left:h.window.scrollX||h.window.document.documentElement.scrollLeft,top:h.window.scrollY||h.window.document.documentElement.scrollTop},size:{height:i.height(),width:i.width()}},origin:{fixedLineage:!1,offset:{},size:{height:f.bottom-f.top,width:f.right-f.left},usemapImage:d?c[0]:null,windowOffset:{bottom:f.bottom,left:f.left,right:f.right,top:f.top}}};if(d){var l=b._$origin.attr("shape"),m=b._$origin.attr("coords");if(m&&(m=m.split(","),a.map(m,function(a,b){m[b]=parseInt(a)})),"default"!=l)switch(l){case"circle":var n=m[0],o=m[1],p=m[2],q=o-p,r=n-p;k.origin.size.height=2*p,k.origin.size.width=k.origin.size.height,k.origin.windowOffset.left+=r,k.origin.windowOffset.top+=q;break;case"rect":var s=m[0],t=m[1],u=m[2],v=m[3];k.origin.size.height=v-t,k.origin.size.width=u-s,k.origin.windowOffset.left+=s,k.origin.windowOffset.top+=t;break;case"poly":for(var w=0,x=0,y=0,z=0,A="even",B=0;B<m.length;B++){var C=m[B];"even"==A?(C>y&&(y=C,0===B&&(w=y)),w>C&&(w=C),A="odd"):(C>z&&(z=C,1==B&&(x=z)),x>C&&(x=C),A="even")}k.origin.size.height=z-x,k.origin.size.width=y-w,k.origin.windowOffset.left+=w,k.origin.windowOffset.top+=x}}var D=function(a){k.origin.size.height=a.height,k.origin.windowOffset.left=a.left,k.origin.windowOffset.top=a.top,k.origin.size.width=a.width};for(b._trigger({type:"geometry",edit:D,geometry:{height:k.origin.size.height,left:k.origin.windowOffset.left,top:k.origin.windowOffset.top,width:k.origin.size.width}}),k.origin.windowOffset.right=k.origin.windowOffset.left+k.origin.size.width,k.origin.windowOffset.bottom=k.origin.windowOffset.top+k.origin.size.height,k.origin.offset.left=k.origin.windowOffset.left+k.window.scroll.left,k.origin.offset.top=k.origin.windowOffset.top+k.window.scroll.top,k.origin.offset.bottom=k.origin.offset.top+k.origin.size.height,k.origin.offset.right=k.origin.offset.left+k.origin.size.width,k.available.document={bottom:{height:k.document.size.height-k.origin.offset.bottom,width:k.document.size.width},left:{height:k.document.size.height,width:k.origin.offset.left},right:{height:k.document.size.height,width:k.document.size.width-k.origin.offset.right},top:{height:k.origin.offset.top,width:k.document.size.width}},k.available.window={bottom:{height:Math.max(k.window.size.height-Math.max(k.origin.windowOffset.bottom,0),0),width:k.window.size.width},left:{height:k.window.size.height,width:Math.max(k.origin.windowOffset.left,0)},right:{height:k.window.size.height,width:Math.max(k.window.size.width-Math.max(k.origin.windowOffset.right,0),0)},top:{height:Math.max(k.origin.windowOffset.top,0),width:k.window.size.width}};"html"!=j[0].tagName.toLowerCase();){if("fixed"==j.css("position")){k.origin.fixedLineage=!0;break}j=j.parent()}return k},__optionsFormat:function(){return"number"==typeof this.__options.animationDuration&&(this.__options.animationDuration=[this.__options.animationDuration,this.__options.animationDuration]),"number"==typeof this.__options.delay&&(this.__options.delay=[this.__options.delay,this.__options.delay]),"number"==typeof this.__options.delayTouch&&(this.__options.delayTouch=[this.__options.delayTouch,this.__options.delayTouch]),"string"==typeof this.__options.theme&&(this.__options.theme=[this.__options.theme]),null===this.__options.parent?this.__options.parent=a(h.window.document.body):"string"==typeof this.__options.parent&&(this.__options.parent=a(this.__options.parent)),"hover"==this.__options.trigger?(this.__options.triggerOpen={mouseenter:!0,touchstart:!0},this.__options.triggerClose={mouseleave:!0,originClick:!0,touchleave:!0}):"click"==this.__options.trigger&&(this.__options.triggerOpen={click:!0,tap:!0},this.__options.triggerClose={click:!0,tap:!0}),this._trigger("options"),this},__prepareGC:function(){var b=this;return b.__options.selfDestruction?b.__garbageCollector=setInterval(function(){var c=(new Date).getTime();b.__touchEvents=a.grep(b.__touchEvents,function(a,b){return c-a.time>6e4}),d(b._$origin)||b.close(function(){b.destroy()})},2e4):clearInterval(b.__garbageCollector),b},__prepareOrigin:function(){var a=this;if(a._$origin.off("."+a.__namespace+"-triggerOpen"),h.hasTouchCapability&&a._$origin.on("touchstart."+a.__namespace+"-triggerOpen touchend."+a.__namespace+"-triggerOpen touchcancel."+a.__namespace+"-triggerOpen",function(b){a._touchRecordEvent(b)}),a.__options.triggerOpen.click||a.__options.triggerOpen.tap&&h.hasTouchCapability){var b="";a.__options.triggerOpen.click&&(b+="click."+a.__namespace+"-triggerOpen "),a.__options.triggerOpen.tap&&h.hasTouchCapability&&(b+="touchend."+a.__namespace+"-triggerOpen"),a._$origin.on(b,function(b){a._touchIsMeaningfulEvent(b)&&a._open(b)})}if(a.__options.triggerOpen.mouseenter||a.__options.triggerOpen.touchstart&&h.hasTouchCapability){var b="";a.__options.triggerOpen.mouseenter&&(b+="mouseenter."+a.__namespace+"-triggerOpen "),a.__options.triggerOpen.touchstart&&h.hasTouchCapability&&(b+="touchstart."+a.__namespace+"-triggerOpen"),a._$origin.on(b,function(b){!a._touchIsTouchEvent(b)&&a._touchIsEmulatedEvent(b)||(a.__pointerIsOverOrigin=!0,a._openShortly(b))})}if(a.__options.triggerClose.mouseleave||a.__options.triggerClose.touchleave&&h.hasTouchCapability){var b="";a.__options.triggerClose.mouseleave&&(b+="mouseleave."+a.__namespace+"-triggerOpen "),a.__options.triggerClose.touchleave&&h.hasTouchCapability&&(b+="touchend."+a.__namespace+"-triggerOpen touchcancel."+a.__namespace+"-triggerOpen"),a._$origin.on(b,function(b){a._touchIsMeaningfulEvent(b)&&(a.__pointerIsOverOrigin=!1)})}return a},__prepareTooltip:function(){var b=this,c=b.__options.interactive?"auto":"";return b._$tooltip.attr("id",b.__namespace).css({"pointer-events":c,zIndex:b.__options.zIndex}),a.each(b.__previousThemes,function(a,c){b._$tooltip.removeClass(c)}),a.each(b.__options.theme,function(a,c){b._$tooltip.addClass(c)}),b.__previousThemes=a.merge([],b.__options.theme),b},__scrollHandler:function(b){var c=this;if(c.__options.triggerClose.scroll)c._close(b);else if(d(c._$origin)&&d(c._$tooltip)){var e=null;if(b.target===h.window.document)c.__Geometry.origin.fixedLineage||c.__options.repositionOnScroll&&c.reposition(b);else{e=c.__geometry();var f=!1;if("fixed"!=c._$origin.css("position")&&c.__$originParents.each(function(b,c){var d=a(c),g=d.css("overflow-x"),h=d.css("overflow-y");if("visible"!=g||"visible"!=h){var i=c.getBoundingClientRect();if("visible"!=g&&(e.origin.windowOffset.left<i.left||e.origin.windowOffset.right>i.right))return f=!0,!1;if("visible"!=h&&(e.origin.windowOffset.top<i.top||e.origin.windowOffset.bottom>i.bottom))return f=!0,!1}return"fixed"==d.css("position")?!1:void 0}),f)c._$tooltip.css("visibility","hidden");else if(c._$tooltip.css("visibility","visible"),c.__options.repositionOnScroll)c.reposition(b);else{var g=e.origin.offset.left-c.__Geometry.origin.offset.left,i=e.origin.offset.top-c.__Geometry.origin.offset.top;c._$tooltip.css({left:c.__lastPosition.coord.left+g,top:c.__lastPosition.coord.top+i})}}c._trigger({type:"scroll",event:b,geo:e})}return c},__stateSet:function(a){return this.__state=a,this._trigger({type:"state",state:a}),this},__timeoutsClear:function(){return clearTimeout(this.__timeouts.open),this.__timeouts.open=null,a.each(this.__timeouts.close,function(a,b){clearTimeout(b)}),this.__timeouts.close=[],this},__trackerStart:function(){var a=this,b=a._$tooltip.find(".tooltipster-content");return a.__options.trackTooltip&&(a.__contentBcr=b[0].getBoundingClientRect()),a.__tracker=setInterval(function(){if(d(a._$origin)&&d(a._$tooltip)){if(a.__options.trackOrigin){var e=a.__geometry(),f=!1;c(e.origin.size,a.__Geometry.origin.size)&&(a.__Geometry.origin.fixedLineage?c(e.origin.windowOffset,a.__Geometry.origin.windowOffset)&&(f=!0):c(e.origin.offset,a.__Geometry.origin.offset)&&(f=!0)),f||(a.__options.triggerClose.mouseleave?a._close():a.reposition())}if(a.__options.trackTooltip){var g=b[0].getBoundingClientRect();g.height===a.__contentBcr.height&&g.width===a.__contentBcr.width||(a.reposition(),a.__contentBcr=g)}}else a._close()},a.__options.trackerInterval),a},_close:function(b,c,d){var e=this,f=!0;if(e._trigger({type:"close",event:b,stop:function(){f=!1}}),f||d){c&&e.__callbacks.close.push(c),e.__callbacks.open=[],e.__timeoutsClear();var g=function(){a.each(e.__callbacks.close,function(a,c){c.call(e,e,{event:b,origin:e._$origin[0]})}),e.__callbacks.close=[]};if("closed"!=e.__state){var i=!0,j=new Date,k=j.getTime(),l=k+e.__options.animationDuration[1];if("disappearing"==e.__state&&l>e.__closingTime&&e.__options.animationDuration[1]>0&&(i=!1),i){e.__closingTime=l,"disappearing"!=e.__state&&e.__stateSet("disappearing");var m=function(){clearInterval(e.__tracker),e._trigger({type:"closing",event:b}),e._$tooltip.off("."+e.__namespace+"-triggerClose").removeClass("tooltipster-dying"),a(h.window).off("."+e.__namespace+"-triggerClose"),e.__$originParents.each(function(b,c){a(c).off("scroll."+e.__namespace+"-triggerClose")}),e.__$originParents=null,a(h.window.document.body).off("."+e.__namespace+"-triggerClose"),e._$origin.off("."+e.__namespace+"-triggerClose"),e._off("dismissable"),e.__stateSet("closed"),e._trigger({type:"after",event:b}),e.__options.functionAfter&&e.__options.functionAfter.call(e,e,{event:b,origin:e._$origin[0]}),g()};h.hasTransitions?(e._$tooltip.css({"-moz-animation-duration":e.__options.animationDuration[1]+"ms","-ms-animation-duration":e.__options.animationDuration[1]+"ms","-o-animation-duration":e.__options.animationDuration[1]+"ms","-webkit-animation-duration":e.__options.animationDuration[1]+"ms","animation-duration":e.__options.animationDuration[1]+"ms","transition-duration":e.__options.animationDuration[1]+"ms"}),e._$tooltip.clearQueue().removeClass("tooltipster-show").addClass("tooltipster-dying"),e.__options.animationDuration[1]>0&&e._$tooltip.delay(e.__options.animationDuration[1]),e._$tooltip.queue(m)):e._$tooltip.stop().fadeOut(e.__options.animationDuration[1],m)}}else g()}return e},_off:function(){return this.__$emitterPrivate.off.apply(this.__$emitterPrivate,Array.prototype.slice.apply(arguments)),this},_on:function(){return this.__$emitterPrivate.on.apply(this.__$emitterPrivate,Array.prototype.slice.apply(arguments)),this},_one:function(){return this.__$emitterPrivate.one.apply(this.__$emitterPrivate,Array.prototype.slice.apply(arguments)),this},_open:function(b,c){var e=this;if(!e.__destroying&&d(e._$origin)&&e.__enabled){var f=!0;if("closed"==e.__state&&(e._trigger({type:"before",event:b,stop:function(){f=!1}}),f&&e.__options.functionBefore&&(f=e.__options.functionBefore.call(e,e,{event:b,origin:e._$origin[0]}))),f!==!1&&null!==e.__Content){c&&e.__callbacks.open.push(c),e.__callbacks.close=[],e.__timeoutsClear();var g,i=function(){"stable"!=e.__state&&e.__stateSet("stable"),a.each(e.__callbacks.open,function(a,b){b.call(e,e,{origin:e._$origin[0],tooltip:e._$tooltip[0]})}),e.__callbacks.open=[]};if("closed"!==e.__state)g=0,"disappearing"===e.__state?(e.__stateSet("appearing"),h.hasTransitions?(e._$tooltip.clearQueue().removeClass("tooltipster-dying").addClass("tooltipster-show"),e.__options.animationDuration[0]>0&&e._$tooltip.delay(e.__options.animationDuration[0]),e._$tooltip.queue(i)):e._$tooltip.stop().fadeIn(i)):"stable"==e.__state&&i();else{if(e.__stateSet("appearing"),g=e.__options.animationDuration[0],e.__contentInsert(),e.reposition(b,!0),h.hasTransitions?(e._$tooltip.addClass("tooltipster-"+e.__options.animation).addClass("tooltipster-initial").css({"-moz-animation-duration":e.__options.animationDuration[0]+"ms","-ms-animation-duration":e.__options.animationDuration[0]+"ms","-o-animation-duration":e.__options.animationDuration[0]+"ms","-webkit-animation-duration":e.__options.animationDuration[0]+"ms","animation-duration":e.__options.animationDuration[0]+"ms","transition-duration":e.__options.animationDuration[0]+"ms"}),setTimeout(function(){"closed"!=e.__state&&(e._$tooltip.addClass("tooltipster-show").removeClass("tooltipster-initial"),e.__options.animationDuration[0]>0&&e._$tooltip.delay(e.__options.animationDuration[0]),e._$tooltip.queue(i))},0)):e._$tooltip.css("display","none").fadeIn(e.__options.animationDuration[0],i),e.__trackerStart(),a(h.window).on("resize."+e.__namespace+"-triggerClose",function(b){var c=a(document.activeElement);(c.is("input")||c.is("textarea"))&&a.contains(e._$tooltip[0],c[0])||e.reposition(b)}).on("scroll."+e.__namespace+"-triggerClose",function(a){e.__scrollHandler(a)}),e.__$originParents=e._$origin.parents(),e.__$originParents.each(function(b,c){a(c).on("scroll."+e.__namespace+"-triggerClose",function(a){e.__scrollHandler(a)})}),e.__options.triggerClose.mouseleave||e.__options.triggerClose.touchleave&&h.hasTouchCapability){e._on("dismissable",function(a){a.dismissable?a.delay?(m=setTimeout(function(){e._close(a.event)},a.delay),e.__timeouts.close.push(m)):e._close(a):clearTimeout(m)});var j=e._$origin,k="",l="",m=null;e.__options.interactive&&(j=j.add(e._$tooltip)),e.__options.triggerClose.mouseleave&&(k+="mouseenter."+e.__namespace+"-triggerClose ",l+="mouseleave."+e.__namespace+"-triggerClose "),e.__options.triggerClose.touchleave&&h.hasTouchCapability&&(k+="touchstart."+e.__namespace+"-triggerClose",l+="touchend."+e.__namespace+"-triggerClose touchcancel."+e.__namespace+"-triggerClose"),j.on(l,function(a){if(e._touchIsTouchEvent(a)||!e._touchIsEmulatedEvent(a)){var b="mouseleave"==a.type?e.__options.delay:e.__options.delayTouch;e._trigger({delay:b[1],dismissable:!0,event:a,type:"dismissable"})}}).on(k,function(a){!e._touchIsTouchEvent(a)&&e._touchIsEmulatedEvent(a)||e._trigger({dismissable:!1,event:a,type:"dismissable"})})}e.__options.triggerClose.originClick&&e._$origin.on("click."+e.__namespace+"-triggerClose",function(a){e._touchIsTouchEvent(a)||e._touchIsEmulatedEvent(a)||e._close(a)}),(e.__options.triggerClose.click||e.__options.triggerClose.tap&&h.hasTouchCapability)&&setTimeout(function(){if("closed"!=e.__state){var b="",c=a(h.window.document.body);e.__options.triggerClose.click&&(b+="click."+e.__namespace+"-triggerClose "),e.__options.triggerClose.tap&&h.hasTouchCapability&&(b+="touchend."+e.__namespace+"-triggerClose"),c.on(b,function(b){e._touchIsMeaningfulEvent(b)&&(e._touchRecordEvent(b),e.__options.interactive&&a.contains(e._$tooltip[0],b.target)||e._close(b))}),e.__options.triggerClose.tap&&h.hasTouchCapability&&c.on("touchstart."+e.__namespace+"-triggerClose",function(a){e._touchRecordEvent(a)})}},0),e._trigger("ready"),e.__options.functionReady&&e.__options.functionReady.call(e,e,{origin:e._$origin[0],tooltip:e._$tooltip[0]})}if(e.__options.timer>0){var m=setTimeout(function(){e._close()},e.__options.timer+g);e.__timeouts.close.push(m)}}}return e},_openShortly:function(a){var b=this,c=!0;if("stable"!=b.__state&&"appearing"!=b.__state&&!b.__timeouts.open&&(b._trigger({type:"start",event:a,stop:function(){c=!1}}),c)){var d=0==a.type.indexOf("touch")?b.__options.delayTouch:b.__options.delay;d[0]?b.__timeouts.open=setTimeout(function(){b.__timeouts.open=null,b.__pointerIsOverOrigin&&b._touchIsMeaningfulEvent(a)?(b._trigger("startend"),b._open(a)):b._trigger("startcancel")},d[0]):(b._trigger("startend"),b._open(a))}return b},_optionsExtract:function(b,c){var d=this,e=a.extend(!0,{},c),f=d.__options[b];return f||(f={},a.each(c,function(a,b){var c=d.__options[a];void 0!==c&&(f[a]=c)})),a.each(e,function(b,c){void 0!==f[b]&&("object"!=typeof c||c instanceof Array||null==c||"object"!=typeof f[b]||f[b]instanceof Array||null==f[b]?e[b]=f[b]:a.extend(e[b],f[b]))}),e},_plug:function(b){var c=a.tooltipster._plugin(b);if(!c)throw new Error('The "'+b+'" plugin is not defined');return c.instance&&a.tooltipster.__bridge(c.instance,this,c.name),this},_touchIsEmulatedEvent:function(a){for(var b=!1,c=(new Date).getTime(),d=this.__touchEvents.length-1;d>=0;d--){var e=this.__touchEvents[d];if(!(c-e.time<500))break;e.target===a.target&&(b=!0)}return b},_touchIsMeaningfulEvent:function(a){return this._touchIsTouchEvent(a)&&!this._touchSwiped(a.target)||!this._touchIsTouchEvent(a)&&!this._touchIsEmulatedEvent(a)},_touchIsTouchEvent:function(a){return 0==a.type.indexOf("touch")},_touchRecordEvent:function(a){return this._touchIsTouchEvent(a)&&(a.time=(new Date).getTime(),this.__touchEvents.push(a)),this},_touchSwiped:function(a){for(var b=!1,c=this.__touchEvents.length-1;c>=0;c--){var d=this.__touchEvents[c];if("touchmove"==d.type){b=!0;break}if("touchstart"==d.type&&a===d.target)break}return b},_trigger:function(){var b=Array.prototype.slice.apply(arguments);return"string"==typeof b[0]&&(b[0]={type:b[0]}),b[0].instance=this,b[0].origin=this._$origin?this._$origin[0]:null,b[0].tooltip=this._$tooltip?this._$tooltip[0]:null,this.__$emitterPrivate.trigger.apply(this.__$emitterPrivate,b),a.tooltipster._trigger.apply(a.tooltipster,b),this.__$emitterPublic.trigger.apply(this.__$emitterPublic,b),this},_unplug:function(b){var c=this;if(c[b]){var d=a.tooltipster._plugin(b);d.instance&&a.each(d.instance,function(a,d){c[a]&&c[a].bridged===c[b]&&delete c[a]}),c[b].__destroy&&c[b].__destroy(),delete c[b]}return c},close:function(a){return this.__destroyed?this.__destroyError():this._close(null,a),this},content:function(a){var b=this;if(void 0===a)return b.__Content;if(b.__destroyed)b.__destroyError();else if(b.__contentSet(a),null!==b.__Content){if("closed"!==b.__state&&(b.__contentInsert(),b.reposition(),b.__options.updateAnimation))if(h.hasTransitions){var c=b.__options.updateAnimation;b._$tooltip.addClass("tooltipster-update-"+c),setTimeout(function(){"closed"!=b.__state&&b._$tooltip.removeClass("tooltipster-update-"+c)},1e3)}else b._$tooltip.fadeTo(200,.5,function(){"closed"!=b.__state&&b._$tooltip.fadeTo(200,1)})}else b._close();return b},destroy:function(){var b=this;if(b.__destroyed)b.__destroyError();else{"closed"!=b.__state?b.option("animationDuration",0)._close(null,null,!0):b.__timeoutsClear(),b._trigger("destroy"),b.__destroyed=!0,b._$origin.removeData(b.__namespace).off("."+b.__namespace+"-triggerOpen"),a(h.window.document.body).off("."+b.__namespace+"-triggerOpen");var c=b._$origin.data("tooltipster-ns");if(c)if(1===c.length){var d=null;"previous"==b.__options.restoration?d=b._$origin.data("tooltipster-initialTitle"):"current"==b.__options.restoration&&(d="string"==typeof b.__Content?b.__Content:a("<div></div>").append(b.__Content).html()),d&&b._$origin.attr("title",d),b._$origin.removeClass("tooltipstered"),b._$origin.removeData("tooltipster-ns").removeData("tooltipster-initialTitle")}else c=a.grep(c,function(a,c){return a!==b.__namespace}),b._$origin.data("tooltipster-ns",c);b._trigger("destroyed"),b._off(),b.off(),b.__Content=null,b.__$emitterPrivate=null,b.__$emitterPublic=null,b.__options.parent=null,b._$origin=null,b._$tooltip=null,a.tooltipster.__instancesLatestArr=a.grep(a.tooltipster.__instancesLatestArr,function(a,c){return b!==a}),clearInterval(b.__garbageCollector)}return b},disable:function(){return this.__destroyed?(this.__destroyError(),this):(this._close(),this.__enabled=!1,this)},elementOrigin:function(){return this.__destroyed?void this.__destroyError():this._$origin[0]},elementTooltip:function(){return this._$tooltip?this._$tooltip[0]:null},enable:function(){return this.__enabled=!0,this},hide:function(a){return this.close(a)},instance:function(){return this},off:function(){return this.__destroyed||this.__$emitterPublic.off.apply(this.__$emitterPublic,Array.prototype.slice.apply(arguments)),this},on:function(){return this.__destroyed?this.__destroyError():this.__$emitterPublic.on.apply(this.__$emitterPublic,Array.prototype.slice.apply(arguments)),this},one:function(){return this.__destroyed?this.__destroyError():this.__$emitterPublic.one.apply(this.__$emitterPublic,Array.prototype.slice.apply(arguments)),this},open:function(a){return this.__destroyed?this.__destroyError():this._open(null,a),this},option:function(b,c){return void 0===c?this.__options[b]:(this.__destroyed?this.__destroyError():(this.__options[b]=c,this.__optionsFormat(),a.inArray(b,["trigger","triggerClose","triggerOpen"])>=0&&this.__prepareOrigin(),"selfDestruction"===b&&this.__prepareGC()),this)},reposition:function(a,b){var c=this;return c.__destroyed?c.__destroyError():"closed"!=c.__state&&d(c._$origin)&&(b||d(c._$tooltip))&&(b||c._$tooltip.detach(),c.__Geometry=c.__geometry(),c._trigger({type:"reposition",event:a,helper:{geo:c.__Geometry}})),c},show:function(a){return this.open(a)},status:function(){return{destroyed:this.__destroyed,enabled:this.__enabled,open:"closed"!==this.__state,state:this.__state}},triggerHandler:function(){return this.__destroyed?this.__destroyError():this.__$emitterPublic.triggerHandler.apply(this.__$emitterPublic,Array.prototype.slice.apply(arguments)),this}},a.fn.tooltipster=function(){var b=Array.prototype.slice.apply(arguments),c="You are using a single HTML element as content for several tooltips. You probably want to set the contentCloning option to TRUE.";if(0===this.length)return this;if("string"==typeof b[0]){var d="#*$~&";return this.each(function(){var e=a(this).data("tooltipster-ns"),f=e?a(this).data(e[0]):null;if(!f)throw new Error("You called Tooltipster's \""+b[0]+'" method on an uninitialized element');if("function"!=typeof f[b[0]])throw new Error('Unknown method "'+b[0]+'"');this.length>1&&"content"==b[0]&&(b[1]instanceof a||"object"==typeof b[1]&&null!=b[1]&&b[1].tagName)&&!f.__options.contentCloning&&f.__options.debug&&console.log(c);var g=f[b[0]](b[1],b[2]);return g!==f||"instance"===b[0]?(d=g,!1):void 0}),"#*$~&"!==d?d:this}a.tooltipster.__instancesLatestArr=[];var e=b[0]&&void 0!==b[0].multiple,g=e&&b[0].multiple||!e&&f.multiple,h=b[0]&&void 0!==b[0].content,i=h&&b[0].content||!h&&f.content,j=b[0]&&void 0!==b[0].contentCloning,k=j&&b[0].contentCloning||!j&&f.contentCloning,l=b[0]&&void 0!==b[0].debug,m=l&&b[0].debug||!l&&f.debug;return this.length>1&&(i instanceof a||"object"==typeof i&&null!=i&&i.tagName)&&!k&&m&&console.log(c),this.each(function(){var c=!1,d=a(this),e=d.data("tooltipster-ns"),f=null;e?g?c=!0:m&&(console.log("Tooltipster: one or more tooltips are already attached to the element below. Ignoring."),console.log(this)):c=!0,c&&(f=new a.Tooltipster(this,b[0]),e||(e=[]),e.push(f.__namespace),d.data("tooltipster-ns",e),d.data(f.__namespace,f),f.__options.functionInit&&f.__options.functionInit.call(f,f,{origin:this}),f._trigger("init")),a.tooltipster.__instancesLatestArr.push(f)}),this},b.prototype={__init:function(b){this.__$tooltip=b,this.__$tooltip.css({left:0,overflow:"hidden",position:"absolute",top:0}).find(".tooltipster-content").css("overflow","auto"),this.$container=a('<div class="tooltipster-ruler"></div>').append(this.__$tooltip).appendTo(h.window.document.body)},__forceRedraw:function(){var a=this.__$tooltip.parent();this.__$tooltip.detach(),this.__$tooltip.appendTo(a)},constrain:function(a,b){return this.constraints={width:a,height:b},this.__$tooltip.css({display:"block",height:"",overflow:"auto",width:a}),this},destroy:function(){this.__$tooltip.detach().find(".tooltipster-content").css({display:"",overflow:""}),this.$container.remove()},free:function(){return this.constraints=null,this.__$tooltip.css({display:"",height:"",overflow:"visible",width:""}),this},measure:function(){this.__forceRedraw();var a=this.__$tooltip[0].getBoundingClientRect(),b={size:{height:a.height||a.bottom-a.top,width:a.width||a.right-a.left}};if(this.constraints){var c=this.__$tooltip.find(".tooltipster-content"),d=this.__$tooltip.outerHeight(),e=c[0].getBoundingClientRect(),f={height:d<=this.constraints.height,width:a.width<=this.constraints.width&&e.width>=c[0].scrollWidth-1};b.fits=f.height&&f.width}return h.IE&&h.IE<=11&&b.size.width!==h.window.document.documentElement.clientWidth&&(b.size.width=Math.ceil(b.size.width)+1),b}};var j=navigator.userAgent.toLowerCase();-1!=j.indexOf("msie")?h.IE=parseInt(j.split("msie")[1]):-1!==j.toLowerCase().indexOf("trident")&&-1!==j.indexOf(" rv:11")?h.IE=11:-1!=j.toLowerCase().indexOf("edge/")&&(h.IE=parseInt(j.toLowerCase().split("edge/")[1]));var k="tooltipster.sideTip";return a.tooltipster._plugin({name:k,instance:{__defaults:function(){return{arrow:!0,distance:6,functionPosition:null,maxWidth:null,minIntersection:16,minWidth:0,position:null,side:"top",viewportAware:!0}},__init:function(a){var b=this;b.__instance=a,b.__namespace="tooltipster-sideTip-"+Math.round(1e6*Math.random()),b.__previousState="closed",b.__options,b.__optionsFormat(),b.__instance._on("state."+b.__namespace,function(a){"closed"==a.state?b.__close():"appearing"==a.state&&"closed"==b.__previousState&&b.__create(),b.__previousState=a.state}),b.__instance._on("options."+b.__namespace,function(){b.__optionsFormat()}),b.__instance._on("reposition."+b.__namespace,function(a){b.__reposition(a.event,a.helper)})},__close:function(){this.__instance.content()instanceof a&&this.__instance.content().detach(),this.__instance._$tooltip.remove(),this.__instance._$tooltip=null},__create:function(){var b=a('<div class="tooltipster-base tooltipster-sidetip"><div class="tooltipster-box"><div class="tooltipster-content"></div></div><div class="tooltipster-arrow"><div class="tooltipster-arrow-uncropped"><div class="tooltipster-arrow-border"></div><div class="tooltipster-arrow-background"></div></div></div></div>');this.__options.arrow||b.find(".tooltipster-box").css("margin",0).end().find(".tooltipster-arrow").hide(),this.__options.minWidth&&b.css("min-width",this.__options.minWidth+"px"),this.__options.maxWidth&&b.css("max-width",this.__options.maxWidth+"px"),
this.__instance._$tooltip=b,this.__instance._trigger("created")},__destroy:function(){this.__instance._off("."+self.__namespace)},__optionsFormat:function(){var b=this;if(b.__options=b.__instance._optionsExtract(k,b.__defaults()),b.__options.position&&(b.__options.side=b.__options.position),"object"!=typeof b.__options.distance&&(b.__options.distance=[b.__options.distance]),b.__options.distance.length<4&&(void 0===b.__options.distance[1]&&(b.__options.distance[1]=b.__options.distance[0]),void 0===b.__options.distance[2]&&(b.__options.distance[2]=b.__options.distance[0]),void 0===b.__options.distance[3]&&(b.__options.distance[3]=b.__options.distance[1])),b.__options.distance={top:b.__options.distance[0],right:b.__options.distance[1],bottom:b.__options.distance[2],left:b.__options.distance[3]},"string"==typeof b.__options.side){var c={top:"bottom",right:"left",bottom:"top",left:"right"};b.__options.side=[b.__options.side,c[b.__options.side]],"left"==b.__options.side[0]||"right"==b.__options.side[0]?b.__options.side.push("top","bottom"):b.__options.side.push("right","left")}6===a.tooltipster._env.IE&&b.__options.arrow!==!0&&(b.__options.arrow=!1)},__reposition:function(b,c){var d,e=this,f=e.__targetFind(c),g=[];e.__instance._$tooltip.detach();var h=e.__instance._$tooltip.clone(),i=a.tooltipster._getRuler(h),j=!1,k=e.__instance.option("animation");switch(k&&h.removeClass("tooltipster-"+k),a.each(["window","document"],function(d,k){var l=null;if(e.__instance._trigger({container:k,helper:c,satisfied:j,takeTest:function(a){l=a},results:g,type:"positionTest"}),1==l||0!=l&&0==j&&("window"!=k||e.__options.viewportAware))for(var d=0;d<e.__options.side.length;d++){var m={horizontal:0,vertical:0},n=e.__options.side[d];"top"==n||"bottom"==n?m.vertical=e.__options.distance[n]:m.horizontal=e.__options.distance[n],e.__sideChange(h,n),a.each(["natural","constrained"],function(a,d){if(l=null,e.__instance._trigger({container:k,event:b,helper:c,mode:d,results:g,satisfied:j,side:n,takeTest:function(a){l=a},type:"positionTest"}),1==l||0!=l&&0==j){var h={container:k,distance:m,fits:null,mode:d,outerSize:null,side:n,size:null,target:f[n],whole:null},o="natural"==d?i.free():i.constrain(c.geo.available[k][n].width-m.horizontal,c.geo.available[k][n].height-m.vertical),p=o.measure();if(h.size=p.size,h.outerSize={height:p.size.height+m.vertical,width:p.size.width+m.horizontal},"natural"==d?c.geo.available[k][n].width>=h.outerSize.width&&c.geo.available[k][n].height>=h.outerSize.height?h.fits=!0:h.fits=!1:h.fits=p.fits,"window"==k&&(h.fits?"top"==n||"bottom"==n?h.whole=c.geo.origin.windowOffset.right>=e.__options.minIntersection&&c.geo.window.size.width-c.geo.origin.windowOffset.left>=e.__options.minIntersection:h.whole=c.geo.origin.windowOffset.bottom>=e.__options.minIntersection&&c.geo.window.size.height-c.geo.origin.windowOffset.top>=e.__options.minIntersection:h.whole=!1),g.push(h),h.whole)j=!0;else if("natural"==h.mode&&(h.fits||h.size.width<=c.geo.available[k][n].width))return!1}})}}),e.__instance._trigger({edit:function(a){g=a},event:b,helper:c,results:g,type:"positionTested"}),g.sort(function(a,b){if(a.whole&&!b.whole)return-1;if(!a.whole&&b.whole)return 1;if(a.whole&&b.whole){var c=e.__options.side.indexOf(a.side),d=e.__options.side.indexOf(b.side);return d>c?-1:c>d?1:"natural"==a.mode?-1:1}if(a.fits&&!b.fits)return-1;if(!a.fits&&b.fits)return 1;if(a.fits&&b.fits){var c=e.__options.side.indexOf(a.side),d=e.__options.side.indexOf(b.side);return d>c?-1:c>d?1:"natural"==a.mode?-1:1}return"document"==a.container&&"bottom"==a.side&&"natural"==a.mode?-1:1}),d=g[0],d.coord={},d.side){case"left":case"right":d.coord.top=Math.floor(d.target-d.size.height/2);break;case"bottom":case"top":d.coord.left=Math.floor(d.target-d.size.width/2)}switch(d.side){case"left":d.coord.left=c.geo.origin.windowOffset.left-d.outerSize.width;break;case"right":d.coord.left=c.geo.origin.windowOffset.right+d.distance.horizontal;break;case"top":d.coord.top=c.geo.origin.windowOffset.top-d.outerSize.height;break;case"bottom":d.coord.top=c.geo.origin.windowOffset.bottom+d.distance.vertical}"window"==d.container?"top"==d.side||"bottom"==d.side?d.coord.left<0?c.geo.origin.windowOffset.right-this.__options.minIntersection>=0?d.coord.left=0:d.coord.left=c.geo.origin.windowOffset.right-this.__options.minIntersection-1:d.coord.left>c.geo.window.size.width-d.size.width&&(c.geo.origin.windowOffset.left+this.__options.minIntersection<=c.geo.window.size.width?d.coord.left=c.geo.window.size.width-d.size.width:d.coord.left=c.geo.origin.windowOffset.left+this.__options.minIntersection+1-d.size.width):d.coord.top<0?c.geo.origin.windowOffset.bottom-this.__options.minIntersection>=0?d.coord.top=0:d.coord.top=c.geo.origin.windowOffset.bottom-this.__options.minIntersection-1:d.coord.top>c.geo.window.size.height-d.size.height&&(c.geo.origin.windowOffset.top+this.__options.minIntersection<=c.geo.window.size.height?d.coord.top=c.geo.window.size.height-d.size.height:d.coord.top=c.geo.origin.windowOffset.top+this.__options.minIntersection+1-d.size.height):(d.coord.left>c.geo.window.size.width-d.size.width&&(d.coord.left=c.geo.window.size.width-d.size.width),d.coord.left<0&&(d.coord.left=0)),e.__sideChange(h,d.side),c.tooltipClone=h[0],c.tooltipParent=e.__instance.option("parent").parent[0],c.mode=d.mode,c.whole=d.whole,c.origin=e.__instance._$origin[0],c.tooltip=e.__instance._$tooltip[0],delete d.container,delete d.fits,delete d.mode,delete d.outerSize,delete d.whole,d.distance=d.distance.horizontal||d.distance.vertical;var l=a.extend(!0,{},d);if(e.__instance._trigger({edit:function(a){d=a},event:b,helper:c,position:l,type:"position"}),e.__options.functionPosition){var m=e.__options.functionPosition.call(e,e.__instance,c,l);m&&(d=m)}i.destroy();var n,o;"top"==d.side||"bottom"==d.side?(n={prop:"left",val:d.target-d.coord.left},o=d.size.width-this.__options.minIntersection):(n={prop:"top",val:d.target-d.coord.top},o=d.size.height-this.__options.minIntersection),n.val<this.__options.minIntersection?n.val=this.__options.minIntersection:n.val>o&&(n.val=o);var p;p=c.geo.origin.fixedLineage?c.geo.origin.windowOffset:{left:c.geo.origin.windowOffset.left+c.geo.window.scroll.left,top:c.geo.origin.windowOffset.top+c.geo.window.scroll.top},d.coord={left:p.left+(d.coord.left-c.geo.origin.windowOffset.left),top:p.top+(d.coord.top-c.geo.origin.windowOffset.top)},e.__sideChange(e.__instance._$tooltip,d.side),c.geo.origin.fixedLineage?e.__instance._$tooltip.css("position","fixed"):e.__instance._$tooltip.css("position",""),e.__instance._$tooltip.css({left:d.coord.left,top:d.coord.top,height:d.size.height,width:d.size.width}).find(".tooltipster-arrow").css({left:"",top:""}).css(n.prop,n.val),e.__instance._$tooltip.appendTo(e.__instance.option("parent")),e.__instance._trigger({type:"repositioned",event:b,position:d})},__sideChange:function(a,b){a.removeClass("tooltipster-bottom").removeClass("tooltipster-left").removeClass("tooltipster-right").removeClass("tooltipster-top").addClass("tooltipster-"+b)},__targetFind:function(a){var b={},c=this.__instance._$origin[0].getClientRects();if(c.length>1){var d=this.__instance._$origin.css("opacity");1==d&&(this.__instance._$origin.css("opacity",.99),c=this.__instance._$origin[0].getClientRects(),this.__instance._$origin.css("opacity",1))}if(c.length<2)b.top=Math.floor(a.geo.origin.windowOffset.left+a.geo.origin.size.width/2),b.bottom=b.top,b.left=Math.floor(a.geo.origin.windowOffset.top+a.geo.origin.size.height/2),b.right=b.left;else{var e=c[0];b.top=Math.floor(e.left+(e.right-e.left)/2),e=c.length>2?c[Math.ceil(c.length/2)-1]:c[0],b.right=Math.floor(e.top+(e.bottom-e.top)/2),e=c[c.length-1],b.bottom=Math.floor(e.left+(e.right-e.left)/2),e=c.length>2?c[Math.ceil((c.length+1)/2)-1]:c[c.length-1],b.left=Math.floor(e.top+(e.bottom-e.top)/2)}return b}}}),a});;
(function(){/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
'use strict';/*
 jQuery v1.9.1 (c) 2005, 2012
 jQuery Foundation, Inc. jquery.org/license.
*/
var f=/\[object (Boolean|Number|String|Function|Array|Date|RegExp|Arguments)\]/;function g(a){return null==a?String(a):(a=f.exec(Object.prototype.toString.call(Object(a))))?a[1].toLowerCase():"object"}function m(a,b){return Object.prototype.hasOwnProperty.call(Object(a),b)}function n(a){if(!a||"object"!=g(a)||a.nodeType||a==a.window)return!1;try{if(a.constructor&&!m(a,"constructor")&&!m(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}for(var b in a);return void 0===b||m(a,b)};function p(a,b){var c={},d=c;a=a.split(".");for(var e=0;e<a.length-1;e++)d=d[a[e]]={};d[a[a.length-1]]=b;return c}function q(a,b){var c=!a._clear,d;for(d in a)if(m(a,d)){var e=a[d];"array"===g(e)&&c?("array"===g(b[d])||(b[d]=[]),q(e,b[d])):n(e)&&c?(n(b[d])||(b[d]={}),q(e,b[d])):b[d]=e}delete b._clear};/*
 Copyright 2012 Google Inc. All rights reserved. */
function r(a,b,c){b=void 0===b?{}:b;"function"===typeof b?b={listener:b,listenToPast:void 0===c?!1:c,processNow:!0,commandProcessors:{}}:b={listener:b.listener||function(){},listenToPast:b.listenToPast||!1,processNow:void 0===b.processNow?!0:b.processNow,commandProcessors:b.commandProcessors||{}};this.a=a;this.l=b.listener;this.j=b.listenToPast;this.g=this.i=!1;this.c={};this.f=[];this.b=b.commandProcessors;this.h=u(this);var d=this.a.push,e=this;this.a.push=function(){var k=[].slice.call(arguments,
0),l=d.apply(e.a,k);v(e,k);return l};b.processNow&&this.process()}r.prototype.process=function(){this.registerProcessor("set",function(){var c={};1===arguments.length&&"object"===g(arguments[0])?c=arguments[0]:2===arguments.length&&"string"===g(arguments[0])&&(c=p(arguments[0],arguments[1]));return c});this.i=!0;for(var a=this.a.length,b=0;b<a;b++)v(this,[this.a[b]],!this.j)};r.prototype.get=function(a){var b=this.c;a=a.split(".");for(var c=0;c<a.length;c++){if(void 0===b[a[c]])return;b=b[a[c]]}return b};
r.prototype.flatten=function(){this.a.splice(0,this.a.length);this.a[0]={};q(this.c,this.a[0])};r.prototype.registerProcessor=function(a,b){a in this.b||(this.b[a]=[]);this.b[a].push(b)};
function v(a,b,c){c=void 0===c?!1:c;if(a.i&&(a.f.push.apply(a.f,b),!a.g))for(;0<a.f.length;){b=a.f.shift();if("array"===g(b))a:{var d=a.c;g(b[0]);for(var e=b[0].split("."),k=e.pop(),l=b.slice(1),h=0;h<e.length;h++){if(void 0===d[e[h]])break a;d=d[e[h]]}try{d[k].apply(d,l)}catch(w){}}else if("arguments"===g(b)){e=a;k=[];l=b[0];if(e.b[l])for(d=e.b[l].length,h=0;h<d;h++)k.push(e.b[l][h].apply(e.h,[].slice.call(b,1)));a.f.push.apply(a.f,k)}else if("function"==typeof b)try{b.call(a.h)}catch(w){}else if(n(b))for(var t in b)q(p(t,
b[t]),a.c);else continue;c||(a.g=!0,a.l(a.c,b),a.g=!1)}}r.prototype.registerProcessor=r.prototype.registerProcessor;r.prototype.flatten=r.prototype.flatten;r.prototype.get=r.prototype.get;r.prototype.process=r.prototype.process;window.DataLayerHelper=r;function u(a){return{set:function(b,c){q(p(b,c),a.c)},get:function(b){return a.get(b)}}};})();
;
/**
 * Extend jquery with a scrollspy plugin.
 * This watches the window scroll and fires events when elements are scrolled into viewport.
 *
 * throttle() and getTime() taken from Underscore.js
 * https://github.com/jashkenas/underscore
 *
 * @author Copyright 2013 John Smart
 * @license https://raw.github.com/thesmart/jquery-scrollspy/master/LICENSE
 * @see https://github.com/thesmart
 * @version 0.1.2
 */
(function($) {

	var jWindow = $(window);
	var elements = [];
	var elementsInView = [];
	var isSpying = false;
	var ticks = 0;
	var offset = {
		top : 0,
		right : 0,
		bottom : 0,
		left : 0,
	}

	/**
	 * Find elements that are within the boundary
	 * @param {number} top
	 * @param {number} right
	 * @param {number} bottom
	 * @param {number} left
	 * @return {jQuery}		A collection of elements
	 */
	function findElements(top, right, bottom, left) {
		var hits = $();
		$.each(elements, function(i, element) {
			var elTop = element.offset().top,
				elLeft = element.offset().left,
				elRight = elLeft + element.width(),
				elBottom = elTop + element.height();

			var isIntersect = !(elLeft > right ||
				elRight < left ||
				elTop > bottom ||
				elBottom < top);

			if (isIntersect) {
				hits.push(element);
			}
		});

		return hits;
	}

	/**
	 * Called when the user scrolls the window
	 */
	function onScroll() {
		// unique tick id
		++ticks;

		// viewport rectangle
		var top = jWindow.scrollTop(),
			left = jWindow.scrollLeft(),
			right = left + jWindow.width(),
			bottom = top + jWindow.height();

		// determine which elements are in view
		var intersections = findElements(top+offset.top, right+offset.right, bottom+offset.bottom, left+offset.left);
		$.each(intersections, function(i, element) {
			var lastTick = element.data('scrollSpy:ticks');
			if (typeof lastTick != 'number') {
				// entered into view
				element.triggerHandler('scrollSpy:enter');
			}

			// update tick id
			element.data('scrollSpy:ticks', ticks);
		});

		// determine which elements are no longer in view
		$.each(elementsInView, function(i, element) {
			var lastTick = element.data('scrollSpy:ticks');
			if (typeof lastTick == 'number' && lastTick !== ticks) {
				// exited from view
				element.triggerHandler('scrollSpy:exit');
				element.data('scrollSpy:ticks', null);
			}
		});

		// remember elements in view for next tick
		elementsInView = intersections;
	}

	/**
	 * Called when window is resized
	*/
	function onWinSize() {
		jWindow.trigger('scrollSpy:winSize');
	}

	/**
	 * Get time in ms
   * @license https://raw.github.com/jashkenas/underscore/master/LICENSE
	 * @type {function}
	 * @return {number}
	 */
	var getTime = (Date.now || function () {
		return new Date().getTime();
	});

	/**
	 * Returns a function, that, when invoked, will only be triggered at most once
	 * during a given window of time. Normally, the throttled function will run
	 * as much as it can, without ever going more than once per `wait` duration;
	 * but if you'd like to disable the execution on the leading edge, pass
	 * `{leading: false}`. To disable execution on the trailing edge, ditto.
	 * @license https://raw.github.com/jashkenas/underscore/master/LICENSE
	 * @param {function} func
	 * @param {number} wait
	 * @param {Object=} options
	 * @returns {Function}
	 */
	function throttle(func, wait, options) {
		var context, args, result;
		var timeout = null;
		var previous = 0;
		options || (options = {});
		var later = function () {
			previous = options.leading === false ? 0 : getTime();
			timeout = null;
			result = func.apply(context, args);
			context = args = null;
		};
		return function () {
			var now = getTime();
			if (!previous && options.leading === false) previous = now;
			var remaining = wait - (now - previous);
			context = this;
			args = arguments;
			if (remaining <= 0) {
				clearTimeout(timeout);
				timeout = null;
				previous = now;
				result = func.apply(context, args);
				context = args = null;
			} else if (!timeout && options.trailing !== false) {
				timeout = setTimeout(later, remaining);
			}
			return result;
		};
	};

	/**
	 * Enables ScrollSpy using a selector
	 * @param {jQuery|string} selector  The elements collection, or a selector
	 * @param {Object=} options	Optional.
											throttle : number -> scrollspy throttling. Default: 100 ms
											offsetTop : number -> offset from top. Default: 0
											offsetRight : number -> offset from right. Default: 0
											offsetBottom : number -> offset from bottom. Default: 0
											offsetLeft : number -> offset from left. Default: 0
	 * @returns {jQuery}
	 */
	$.scrollSpy = function(selector, options) {
		selector = $(selector);
		selector.each(function(i, element) {
			elements.push($(element));
		});
		options = options || {
			throttle: 100
		};

		offset.top = options.offsetTop || 0;
		offset.right = options.offsetRight || 0;
		offset.bottom = options.offsetBottom || 0;
		offset.left = options.offsetLeft || 0;

		var throttledScroll = throttle(onScroll, options.throttle || 100);
		var readyScroll = function(){
			$(document).ready(throttledScroll);
		};

		if (!isSpying) {
			jWindow.on('scroll', readyScroll);
			jWindow.on('resize', readyScroll);
			isSpying = true;
		}

		// perform a scan once, after current execution context, and after dom is ready
		setTimeout(readyScroll, 0);

		return selector;
	};

	/**
	 * Listen for window resize events
	 * @param {Object=} options						Optional. Set { throttle: number } to change throttling. Default: 100 ms
	 * @returns {jQuery}		$(window)
	 */
	$.winSizeSpy = function(options) {
		$.winSizeSpy = function() { return jWindow; }; // lock from multiple calls
		options = options || {
			throttle: 100
		};
		return jWindow.on('resize', throttle(onWinSize, options.throttle || 100));
	};

	/**
	 * Enables ScrollSpy on a collection of elements
	 * e.g. $('.scrollSpy').scrollSpy()
	 * @param {Object=} options	Optional.
											throttle : number -> scrollspy throttling. Default: 100 ms
											offsetTop : number -> offset from top. Default: 0
											offsetRight : number -> offset from right. Default: 0
											offsetBottom : number -> offset from bottom. Default: 0
											offsetLeft : number -> offset from left. Default: 0
	 * @returns {jQuery}
	 */
	$.fn.scrollSpy = function(options) {
		return $.scrollSpy($(this), options);
	};

})(jQuery);;
/**
 * @file
 * Theme-specific funtions for ICE.gov USWDS theme.
 */

(function ($, Drupal) {
  'use strict';

  /**
   * Function used to perform accesibility changes to comply with 508 standards.
   */
  Drupal.behaviors.accessibility = {
    attach: function (context, settings) {
      //set focus on view show more button ajax load 
      if ($('body').hasClass('feature-story-archive')) {
        $(document).once().ajaxStop(function () {
          var test = $('.blazy--view--feature-archive').children('.focus').last();
          test.find('a').focus();
        });
      }

      // used to determine if styles are disabled in DOM
      $("body").bind("DOMSubtreeModified", function() {
        var tool = $('body').hasClass('toolbar-vertical');

        if(tool !== true){
          if (document.body.clientWidth !== document.documentElement.clientWidth) {
            // Styles are disabled or not applied
            $('.hero-container').css('height','auto');
            $('.most-wanted-container').css('height','auto');
            $('#a2apage_find').css('display','none');
            $('#wcm-survey-popup').css('display','none');
            $('.mobile-menu-search').css('display','none');

            $('.block-views-blockfront-page-most-wanted-block-1 ul .most-wanted-container .mw-image img, .most-wanted-view-block ul .most-wanted-container .mw-image img').css('height','173px').css('width','auto');
            //$('.paragraph--type--body-field-group .justified-gallery a').css('display','inline-block');

            $('.colorbox-image-grid').justifiedGallery('destroy');
            $('.colorbox-image-grid').attr('style',  'height: auto !important;');
          }
        }
      });
      
      // Spanish
      if ($('body').hasClass('es')) {
        $('.usa-header .logo-img').attr('title','Página de inicio ICE').attr('aria-label','Página de inicio ICE');
        $('.usa-header .usa-logo img').attr('alt','Sello del Departamenmto de Seguridad Nacional de EE. UU.').attr('lang','en');
        
      }
      // Homepage slider
      if ($('body.homepage').length) {

        $('.slick-prev,.slick-next').attr('tabindex','-1');
        $('.paragraph--type--slideshow').attr('role','region').attr('aria-live','polite');

        // iGuardian modal
        $('.paragraph--type--social-media-grid .modal-link').once().keypress(function(e) {
          if (e.which == 13) {
            $(this).click();
            setTimeout(function() {
              $('#loopvideo').focus();
            }, 1000);
            e.preventDefault();
          }
        }).click(function(e) {
          setTimeout(function() {
            $('#loopvideo').focus();
          }, 1000);
          e.preventDefault();
        });
        $('#loopvideo').once().keydown(function(e) {
          if (e.keyCode == 9) {
            if (e.shiftKey) {
              $('#loopvideo').focus();
              e.preventDefault();
            }
            else {
            }
          }
        });
        // $(document).once().keydown(function(e) {
        //   if (e.key === 'Escape') {
        //     $(this).find('video').once().pause();
        //     $('#loopvideo').once().pause();
        //     $('#colorbox').close();
        //   }
        // });

        if ($('body.es').length) {
          $('.paragraph--type--slideshow .pause').html('<span class="visually-hidden">Pausar</span>').prepend('<i class="fas fa-pause-circle"></i>');
          $('.paragraph--type--slideshow .play').html('<span class="visually-hidden">Reproducir</span>').prepend('<i class="fas fa-play-circle"></i>');
          $('.paragraph--type--slideshow .slick-prev').attr('aria-label','Anterior').text('Anterior');
          $('.paragraph--type--slideshow .slick-next').attr('aria-label','Siguiente').text('Siguiente');
        }
      }

      // Contact
      setTimeout(function() {
        $('.page-contact .a11y-paragraphs-tabs__wrapper .field--name-field-a11y-para-tabs-sec-title').replaceWith(function(){
          return $("<h2 />").append($(this).contents());
        });
      }, 2000);

      // Feature story archive
      $('#block-quicktabs-block-feature-stories-archive .nav-show-more h4').replaceWith(function(){
        return $('<p class="visually-hidden" />').append($(this).contents());
      });
      
      // Newsroom
      if ($('body.newsroom').length) {
        setTimeout(function() {
          $('.nr-tooltip .tooltip').once().attr('id','nr-tooltip').attr('role','button');
          if ($('body.es').length) {
            $('.nr-tooltip .tooltip').attr('title','Ayuda con su Búsqueda').append('<span class="visually-hidden">Ayuda con su Búsqueda</span>');
          }
          else {
            $('.nr-tooltip .tooltip').attr('title','Search Help').append('<span class="visually-hidden">Search Help</span>');
          }
          $('#edit-reset').attr('aria-flowto','nr-tooltip');
        }, 2000);
      }
      
      //Used to add read only to newsroom search date picker filters due to format input error.  Forces users to use calendar unless JS disabled.
      $(document).ready(function(){
        $('.hasDatepicker').attr('readonly','readonly');
      });
    }
  }


  //Breadcrumb script
  Drupal.behaviors.breadcrumb = {
    attach: function (context, settings) {

      jQuery(document).ready(function(){
          var winWidth = jQuery(window).width(); // returns the viewport width
          var breadWidth = jQuery('.block-system-breadcrumb-block').width(); //returns breadcrumb width
          var shareWidth = jQuery('.share-icons').width(); //returns share width
          var totalWidth = (breadWidth + shareWidth);//total breadcrumb plus share width
          var endWidth = winWidth - 46; //total width minus padding

          if(winWidth > 768){
            var lastWidth = endWidth - 70;
          }else{
            var lastWidth = endWidth;
          }

          if((endWidth - totalWidth) <= 0){
             jQuery('.block-system-breadcrumb-block .usa-nav__secondary-links').css( 'width' , lastWidth);
          } else{
            jQuery('.block-system-breadcrumb-block .usa-nav__secondary-links').css( 'width' , '100%');
          }
      });

      jQuery(window).on('resize', function(){
          var winWidth = jQuery(window).width(); // returns the viewport width
          var breadWidth = jQuery('.block-system-breadcrumb-block').width(); //returns breadcrumb width
          var shareWidth = jQuery('.share-icons').width(); //returns share width
          var totalWidth = (breadWidth + shareWidth);//total breadcrumb plus share width
          var endWidth = winWidth - 46; //total width minus padding
          if(winWidth > 768){
            var lastWidth = endWidth - 70;
          }else{
            var lastWidth = endWidth;
          }

          if((endWidth - totalWidth) <= 0){
             jQuery('.block-system-breadcrumb-block .usa-nav__secondary-links').css( 'width' , lastWidth);
          } else{
            jQuery('.block-system-breadcrumb-block .usa-nav__secondary-links').css( 'width' , '100%');
          }
      });
    }
  }

  //Scroll to top functionality
  Drupal.behaviors.scroll_to_top = {
    attach: function (context, settings) {

      jQuery(document).once().ready(function() {
          //Check to see if the window is top if not then display button
          jQuery(window).scroll(function(){
            if (jQuery(this).scrollTop() > 500) {
              jQuery('.usa-footer__return-to-top a').fadeIn(); 
            } else {
                jQuery('.usa-footer__return-to-top a').fadeOut();
            }
          });
          
          //Click event to scroll to top
          jQuery('.usa-footer__return-to-top a').once().click(function(){
            jQuery('html, body').animate({scrollTop : 0},1000);
            return false;
          });
      });
    }
  };

  //Share menu icon funstionality
  Drupal.behaviors.share_icon = {
    attach: function (context, settings) {

      jQuery(document).ready(function(){

        //hide share block when clicking outside container
        $('body').once().mouseup(function(e) {
            var container = $("#block-addtoanybuttons");
            var share = $('.share-link i');

            // if the target of the click isn't the container nor a descendant of the container nor is it the share icon
            if (!container.is(e.target) && container.has(e.target).length === 0 && !share.is(e.target)) 
            {

                var attr = jQuery('.share-icons .share-link').attr('aria-pressed');
                if ( attr == 'true' ){

                    jQuery('.share-icons .share-link').attr('aria-pressed', false);
                    jQuery('.share-icons .share-link').attr('aria-hidden', true);
                    jQuery('.share-icons .share-link').removeClass("expanded");
                    jQuery('#block-addtoanybuttons').hide();
                } 
            }
        });

        //Click event for opening the share block in breadcrumb
        jQuery(".share-icons .share-link").once().on('click', function(e) {

            var attr = jQuery('.share-icons .share-link').attr('aria-pressed');

            if ( attr == 'false' ){
                jQuery('.share-icons .share-link').attr('aria-pressed', true);
                jQuery('.share-icons .share-link').attr('aria-hidden', false);
                jQuery('.share-icons .share-link').addClass("expanded");
                jQuery('#block-addtoanybuttons').show();
            } else{
               jQuery('.share-icons .share-link').removeClass("expanded");  
               jQuery('.share-icons .share-link').attr('aria-pressed', false);
               jQuery('.share-icons .share-link').attr('aria-hidden', true);
               jQuery('#block-addtoanybuttons').hide();

            }
        });

        //Hovering event for opening the share block in breadcrumb
        jQuery(".share-icons .share-link").on({
          mouseenter: function () {
              jQuery('.share-icons .share-link').attr('aria-hidden', false);
              jQuery('#block-addtoanybuttons').show();
          },
          mouseleave: function () {
              if (!$('.share-icons .share-link').hasClass("expanded")){
                setTimeout(function () {
                  //if share div is hovered
                  if($("#block-addtoanybuttons:hover").length != 0){
                    $('.share-icons .share-link').attr('aria-hidden', false);
                    $('#block-addtoanybuttons').show();
                    //hide when leaving the share div
                    $('#block-addtoanybuttons').on({
                      mouseleave: function(){
                        $('.share-icons .share-link').attr('aria-hidden', true);
                        $('#block-addtoanybuttons').hide();
                      }
                    });
                  } else{
                    $('.share-icons .share-link').attr('aria-hidden', true);
                    $('#block-addtoanybuttons').hide();
                  }
                }, 1500);
              }
          }
        });

        //On enter open the share icons
        $(".share-icons .share-link").on('keypress',function(e) {
            if(e.which == 13) {
              var attr = jQuery('.share-icons .share-link').attr('aria-pressed');
              if ( attr == 'false' ){
                  jQuery('.share-icons .share-link').attr('aria-pressed', true);
                  jQuery('.share-icons .share-link').attr('aria-hidden', false);
                  jQuery('#block-addtoanybuttons').show();
              } else{
                 jQuery('.share-icons .share-link').attr('aria-pressed', false);
                 jQuery('.share-icons .share-link').attr('aria-hidden', true);
                 jQuery('#block-addtoanybuttons').hide();
              }
            }
        });

      });
    }
  }

  // Main menu functionality
  Drupal.behaviors.mainmenu = {
    attach: function (context, settings) {
      $(document).ready(function(){
        // $('.ice-menu-trigger').appendTo('body');

        // Fix offset of 3rd and 4th main menu items (Combating Transnational Crime, Newsroom)
        alignDropdown($('.we-mega-menu-ul > .we-mega-menu-li:nth-child(2)'),$('.we-mega-menu-ul > .we-mega-menu-li:nth-child(2) > .we-mega-menu-submenu'));
        alignDropdown($('.we-mega-menu-ul > .we-mega-menu-li:nth-child(3)'),$('.we-mega-menu-ul > .we-mega-menu-li:nth-child(3) > .we-mega-menu-submenu'));
        var $last = $('.we-mega-menu-ul > .we-mega-menu-li:last-child > .we-mega-menu-submenu');
        $last.css('left',-4 - ($last.width() - $last.prev().width()));

        $(window).resize(function() {
          alignDropdown($('.we-mega-menu-ul > .we-mega-menu-li:nth-child(2)'),$('.we-mega-menu-ul > .we-mega-menu-li:nth-child(2) > .we-mega-menu-submenu'));
          alignDropdown($('.we-mega-menu-ul > .we-mega-menu-li:nth-child(3)'),$('.we-mega-menu-ul > .we-mega-menu-li:nth-child(3) > .we-mega-menu-submenu'));
          $last = $('.we-mega-menu-ul > .we-mega-menu-li:last-child > .we-mega-menu-submenu');
          $last.css('left',-4 - ($last.width() - $last.prev().width()));
        });

        function alignDropdown ($link,$drop) {
          var lPos = $link.offset().left;
          var lWidth = $link.innerWidth();
          var dWidth = $drop.innerWidth();

          if (window.innerWidth - lPos > dWidth) {
            if (window.innerWidth - lPos < dWidth) {
              $drop.css('left',-4 - (dWidth - (window.innerWidth - lPos)) + 'px');
            }
            else {
              $drop.css('left','0');
            }
          }
          else {
            if (lPos + lWidth < dWidth) {
              $drop.css('left',0 - lPos + 'px');
            }
            else {
              $drop.css('left',-4 - (dWidth - lWidth) + 'px');
            }
          }
        }

        // Keyboard accessibility
        /**
        $('.we-mega-menu-ul > .we-mega-menu-li > a').keydown(function(e) {
          
          if (e.which == 13) {
            $('.we-mega-menu-ul > .we-mega-menu-li').removeClass('clicked');
            $(this).next().show().focus();
            e.preventDefault();
          }
          if (e.which == 9) {
            if (e.shiftKey) {
              $('.we-mega-menu-ul > .we-mega-menu-li').removeClass('clicked');
            }
          }
        });**/
        $('.we-mega-menu-ul > .we-mega-menu-li > .we-mega-menu-submenu').focusout(function () {
          setTimeout(function() {
            if ($(document.activeElement).closest('.we-mega-menu-submenu').length == 0) {
              $('.we-mega-menu-li').removeClass('clicked');
            }
          }, 50);
        });
      });
    }
  };

  // Mobile menu functionality
  Drupal.behaviors.mobilemenu = {
    attach: function (context, settings) {
      $(document).ready(function(){

        $('.mobile-menu > ul').css('max-height',(window.innerHeight - 63) + 'px');
        $(window).resize(function() {
          $('.mobile-menu > ul').css('max-height',(window.innerHeight - 63) + 'px');
        });

        $('.mobile-menu > ul > li > span').once().addClass('collapsed').append('<i class="fa fa-plus-square-o"></i>');
        $('.mobile-menu > ul > li > span').once('mobilemenuclick').each(function() {
          $(this).click(function() {
            if ($(this).hasClass('collapsed')) {
              // .find('a:not(".collapsed")').addClass('collapsed').next().slideUp()

              var $thisE = $(this);
              if ($('.mobile-menu > ul > li > span.open').length > 0) {
                $('.mobile-menu > ul > li > span.open').children('.fa').removeClass('fa-minus-square-o').addClass('fa-plus-square-o');
                $('.mobile-menu > ul > li > span.open').removeClass('open').addClass('collapsed').next().slideUp(100);
                setTimeout(function(){
                  $thisE.removeClass('collapsed').addClass('open').next().slideDown();
                  $thisE.children('.fa').removeClass('fa-plus-square-o').addClass('fa-minus-square-o');
                }, 100);
              }
              else {
                $(this).removeClass('collapsed').addClass('open').next().slideDown();
                $(this).children('.fa').removeClass('fa-plus-square-o').addClass('fa-minus-square-o');
              }
            }
            else {
              $(this).addClass('collapsed').removeClass('open').next().slideUp(100);
              $(this).children('.fa').removeClass('fa-minus-square-o').addClass('fa-plus-square-o');
            }
          });
        });

        // $('.mobile-menu > ul > li > ul > li > a').addClass('collapsed');
        // $('.mobile-menu > ul > li > ul > li > a').each(function(e) {
        //   $(this).click(function(e) {
        //     if ($(this).hasClass('collapsed')) {
        //       $('.mobile-menu > ul > li > ul > li > a:not(".collapsed")').addClass('collapsed').next().slideUp('fast');
        //       $(this).removeClass('collapsed').next().slideDown();
        //     }
        //     else {
        //       $(this).addClass('collapsed').next().slideUp();
        //     }
        //     e.preventDefault();
        //   });
        // });

        $('#block-mobilemenubar .menu li:nth-child(3) a').attr('lang','es');
        $('#block-mobilemenubarspanish .menu li:nth-child(3) a').attr('lang','en');
        $('.mobile-menu, .mobile-menu-search').addClass('collapsed');
        $('.mobile-menu-bar ul li:first-child, .mobile-menu-bar ul li:nth-child(2)').addClass('collapsed');
        $('.mobile-menu-bar ul li:first-child').once().click(function(e) {
          if ($('.mobile-menu').hasClass('collapsed')) {
            $('.mobile-menu-search:not(".collapsed")').addClass('collapsed').slideUp();
            $('.mobile-menu').removeClass('collapsed').slideDown();
            $(this).removeClass('collapsed');
            if (theLanguage == "es") {
              $(this).children('span').text('Cerrar');
              $('.mobile-menu-bar ul li:nth-child(2) span').text('Buscar');
            }
            else {
              $(this).children('span').text('Close');
              $('.mobile-menu-bar ul li:nth-child(2) span').text('Search');
            }
            $('.mobile-menu-bar ul li:nth-child(2)').addClass('collapsed');
          }
          else {
            $('.mobile-menu').addClass('collapsed').slideUp();
            $(this).addClass('collapsed').children('span').text('Menu');
            if (theLanguage == "es") { $(this).children('span').text('Lista'); }
            else { $(this).children('span').text('Menu'); }
            $('.mobile-menu > ul > li > span.open').children('.fa').removeClass('fa-minus-square-o').addClass('fa-plus-square-o');
            $('.mobile-menu > ul > li > span.open').removeClass('open').addClass('collapsed').next().slideUp('fast');
          }
        });
        $('.mobile-menu-bar ul li:nth-child(2)').once().click(function(e) {
          if ($('.mobile-menu-search').hasClass('collapsed')) {
            $('.mobile-menu:not(".collapsed")').addClass('collapsed').slideUp();
            $('.mobile-menu-search').removeClass('collapsed').slideDown();
            $(this).removeClass('collapsed');
            $('.mobile-menu-bar ul li:nth-child(1)').addClass('collapsed');
            $('.mobile-menu > ul > li > span.open').children('.fa').removeClass('fa-minus-square-o').addClass('fa-plus-square-o');
            $('.mobile-menu > ul > li > span.open').removeClass('open').addClass('collapsed').next().slideUp('fast');
            if (theLanguage == "es") { $(this).children('span').text('Cerrar'); $('.mobile-menu-bar ul li:first-child span').text('Lista'); }
            else { $(this).children('span').text('Close'); $('.mobile-menu-bar ul li:first-child span').text('Menu'); }
          }
          else {
            $('.mobile-menu-search').addClass('collapsed').slideUp();
            $(this).addClass('collapsed');
            if (theLanguage == "es") { $(this).children('span').text('Buscar'); }
            else { $(this).children('span').text('Search'); }
          }
        });
        var theLanguage = $('html').attr('lang');
        if (theLanguage == "en") {
          $('.mobile-menu-search-inner').once().prepend('<a class="mobile-search-close">Close</a>');
        } else if(theLanguage == "es"){
          $('.mobile-menu-search-inner').once().prepend('<a class="mobile-search-close">Cerrar</a>');
        }
        $('.mobile-search-close').once().click(function(e) {
          $('.mobile-menu-search').addClass('collapsed').slideUp();
          $('.mobile-menu-bar ul li:nth-child(2)').addClass('collapsed');
          if (theLanguage == "es") { $('.mobile-menu-bar ul li:nth-child(2) span').text('Buscar'); }
          else { $('.mobile-menu-bar ul li:nth-child(2) span').text('Search'); }
        });
        $('.mobile-menu-search .form-type-search .usagov-search-autocomplete').attr('placeholder','').attr('size','');
      });
    }
  };

  // Functionality for mobile footers
  Drupal.behaviors.footer = {
    attach: function (context, settings) {
      $(document).ready(function(){

        // Move faux localfooter out of main content area into appropriate footer area
        if ($('.field .usa-footer__primary-section').length || $('.views-element-container footer .usa-footer__primary-section').length) {
          $('.field .usa-footer__primary-section, .views-element-container footer .usa-footer__primary-section').addClass('field-localfooter');
          $('.default-localfooter').remove();
          $('.field-localfooter').insertAfter('.usa-footer__return-to-top');
        }

        // Localfooter heading structure fix
        if (!$('.usa-footer__primary-section.field-localfooter .grid-col-fill > div > h2.visually-hidden').length) {
          $('.usa-footer__primary-section .grid-col-fill > div').once().prepend('<h2 class="visually-hidden">Local Footer Navigation</h2>');
        }
        $('.usa-footer__primary-section .localfooter-col > h2').each(function() {
          $(this).replaceWith('<h3>' + $(this).text() + '</h3>');
        });

        $('#block-mobilemenubar-menu').replaceWith('<h2>' + $('#block-mobilemenubar-menu').text() + '</h2>');
        
        // Expand and collapse
        $('.two-col').hide();
        // $('.collapsible h2, .collapsible h3').once('collapse').click(function(e) {
        $(document).on('click', '.collapsible h2, .collapsible h3', function(e) {
          if ($(window).width() < 640) {
            if ($(this).parents('.footer-col, .localfooter-col').hasClass('collapsed')) {
              $(this).siblings('ul,.two-col').slideDown();
              $(this).parents('.footer-col, .localfooter-col').removeClass('collapsed');
            }
            else {
              $(this).siblings('ul,.two-col').slideUp();
              $(this).parents('.footer-col, .localfooter-col').addClass('collapsed');
            }
          }
          e.stopImmediatePropagation();
        });
      });
    }
  };

  //Hero Content Image script
  Drupal.behaviors.hero_section = {
    attach: function (context, settings) {

      jQuery(document).ready(function(){

          var winHeight = jQuery(window).height(); // returns the viewport height
          var winWidth = jQuery(window).width(); // returns the viewport width
          var headerHeight = jQuery('.usa-header').height(); //returns header height
          var govHeight = jQuery('.usa-banner').height(); //returns navbar height
          var breadHeight = jQuery('.breadcrumb-container').height(); //returns breadcrumb height

          var heroHeight = (winHeight - (headerHeight + govHeight + breadHeight)); //Gets Hero height for image

          if(winHeight > 0){
             jQuery('.hero-container').css( 'height' , heroHeight);
             //jQuery('.spotlight-image-container').css( 'height' , winHeight);
          }else{
             jQuery('.hero-container').css( 'height' , 'auto');
             //jQuery('.spotlight-image-container').css( 'height' , 'auto');
          }

          ///HOME PAGE - image resizing if IE 9+
          if ('objectFit' in document.documentElement.style === false) {
            jQuery('.field--name-field-hero-static-image img').each(function(){
                var t = jQuery(this),
                    s = 'url(' + t.attr('src') + ')',
                    p = t.parent(),
                    d = jQuery('<div></div>');

                p.append(d);
                d.css({
                    'height'                : '100%',
                    'background-size'       : 'cover',
                    'background-repeat'     : 'no-repeat',
                    'background-position'   : '50% 50%',
                    'background-image'      : s
                });
                t.hide();
            });
          }else{
            jQuery('.field--name-field-hero-static-image img').show();
          }

          // Show page title if Hero title doesn't exist, else remove extra h1 (508 ICED8-314)
          if ($('.field--name-field-hero-title').length == 0)
          {
            $('.usa-layout-docs__main > h1').once().show();
          }
          else {
            $('.usa-layout-docs__main > h1').once().remove();
          }

      });

      jQuery(window).on('resize', function(){

        var winHeight = jQuery(window).height(); // returns the viewport height
          var winWidth = jQuery(window).width(); // returns the viewport width
          var headerHeight = jQuery('.usa-header').height(); //returns header height
          var govHeight = jQuery('.usa-banner').height(); //returns navbar height
          var breadHeight = jQuery('.breadcrumb-container').height(); //returns breadcrumb height

          var heroHeight = (winHeight - (headerHeight + govHeight + breadHeight)); //Gets Hero height for image

          if(winHeight > 0){
             jQuery('.hero-container').css( 'height' , heroHeight);
             //jQuery('.spotlight-image-container').css( 'height' , winHeight);
          }else{
             jQuery('.hero-container').css( 'height' , 'auto');
             //jQuery('.spotlight-image-container').css( 'height' , 'auto');
          }

          ///HOME PAGE - image resizing if IE 9+
          if ('objectFit' in document.documentElement.style === false) {
            jQuery('.field--name-field-hero-static-image img').each(function(){
                var t = jQuery(this),
                    s = 'url(' + t.attr('src') + ')',
                    p = t.parent(),
                    d = jQuery('<div></div>');

                p.append(d);
                d.css({
                    'height'                : '100%',
                    'background-size'       : 'cover',
                    'background-repeat'     : 'no-repeat',
                    'background-position'   : '50% 50%',
                    'background-image'      : s
                });
                t.hide();
            });
          }else{
            jQuery('.field--name-field-hero-static-image img').show();
          }

      });

      //Looping video fix for Responsive menu structure
      jQuery(document).ready(function() {
        //For IE force play.
            jQuery('.field-name-field-loop-video-field .even').load(location.href + ' #mc3_video');
      });

    }
  };

  //Open pdfs in new tab
  Drupal.behaviors.newtab_doc = {
    attach: function (context, settings) {
      $(document).once().ready(function() {
        // Open PDFs In New Window
        $('a[href$=".pdf"]').attr('target', '_blank');    
      });
    }
  };



  //Used for the Justified Gallery on Basic pages
  Drupal.behaviors.image_grid = {
    attach: function (context, settings) {
      //$(window).on('load', function () {
        //Original gallery unless its in the News Release
        if(!$('body').hasClass('news-releases')){
            jQuery('.colorbox-image-grid').justifiedGallery({
                lastRow : 'justify',
                rowHeight : 200,
                rel : 'gallery1', //replace with 'gallery1' the rel attribute of each link
                margins : 3
            }).on('jg.complete', function () {
                var IE;
                //@cc_on IE = navigator.appVersion;

                if (IE > 9) {
                  jQuery(this).find('a').colorbox({
                      maxWidth : '80%',
                      maxHeight : '80%',
                      opacity : 0.8,
                      transition : 'elastic',
                      current : ''
                  });
                } else if (!IE) {
                        jQuery(this).find('a').colorbox({
                        maxWidth : '80%',
                        maxHeight : '80%',
                        opacity : 0.8,
                        transition : 'elastic',
                        current : ''
                    });
                }
           });
        } else{
            //get number of images
            var img = $('.colorbox-image-grid a').length;

            //Get real image size before gallery.  OLD WAY -- Had to use attr height due to gallery not spitting out image height soon enough.
            //var img1 = parseInt(jQuery('.colorbox-image-grid a img').attr('height'));

            //New Way -- Gets image height before DOM load with showImage function
            showImage(jQuery('.colorbox-image-grid a img').attr('src'));

            var imgHeight;
            var imgWidth;

            function findHH() {
              imgHeight = this.height;
              return imgHeight;
            }

            function showImage(imgPath) {
              var myImage = new Image();
              myImage.src = imgPath;
              myImage.name = imgPath;
              myImage.onload = findHH;        
              imgHeight = myImage.height; 
            }

            //console.log(img);
            //console.log(imgHeight);
                     
            //gallery for small images under 380px height
            if (img === 1 && imgHeight < 400) {
              $(".colorbox-image-grid").css("background","#f1f1f1");
              
              jQuery('.colorbox-image-grid').justifiedGallery({
                    lastRow : 'center',
                    rowHeight : 400,
                    maxRowHeight: 582,             
                    rel : 'gallery1', //replace with 'gallery1' the rel attribute of each link
                    margins : 3
                }).on('jg.complete', function () {
                    var IE;
                    //@cc_on IE = navigator.appVersion;

                    if (IE > 9) {
                      jQuery(this).find('a').colorbox({
                          maxWidth : '80%',
                          maxHeight : '80%',
                          opacity : 0.8,
                          transition : 'elastic',
                          current : ''
                      });
                    } else if (!IE) {
                            jQuery(this).find('a').colorbox({
                            maxWidth : '80%',
                            maxHeight : '80%',
                            opacity : 0.8,
                            transition : 'elastic',
                            current : ''
                        });
                    }
              });
            } else{
              jQuery('.colorbox-image-grid').justifiedGallery({
                    lastRow : 'justify',
                    rowHeight : 200,           
                    rel : 'gallery1', //replace with 'gallery1' the rel attribute of each link
                    margins : 3
                }).on('jg.complete', function () {
                    var IE;
                    //@cc_on IE = navigator.appVersion;

                    if (IE > 9) {
                      jQuery(this).find('a').colorbox({
                          maxWidth : '80%',
                          maxHeight : '80%',
                          opacity : 0.8,
                          transition : 'elastic',
                          current : ''
                      });
                    } else if (!IE) {
                            jQuery(this).find('a').colorbox({
                            maxWidth : '80%',
                            maxHeight : '80%',
                            opacity : 0.8,
                            transition : 'elastic',
                            current : ''
                        });
                    }
              });
            }
        }
        
      //}); 

        jQuery( "#cboxOverlay" ).hover(
          function(e) {
            jQuery('.cboxPhoto').trigger("mouseover");

          }, function(e) {
            jQuery('.cboxPhoto').trigger("mouseover");
            e.stopPropagation();


          }
        );

        jQuery(document).bind('cbox_complete', function() {
           jQuery('.cboxPhoto').trigger("mouseover");
           jQuery( "#cboxOverlay" ).off();
        });
    }
  };

  //Used for the Tabs on Basic pages
  Drupal.behaviors.basicPage_tabs = {
    attach: function (context, settings) {
      jQuery(document).ready(function(){
        jQuery('.a11y-paragraphs-tabs__wrapper .tabs-tab-list').each(function(){
          var winWidth = jQuery(window).width();
          var tabsHeight = jQuery(this).height(); //returns height
          var tabsWidth = jQuery(this).width(); //returns width
          var wrapWidth = jQuery('.a11y-paragraphs-tabs__wrapper').width(); //returns wrapper width
          var panWidth = wrapWidth - tabsWidth;

          if(tabsHeight > 0 && winWidth > 859){
             jQuery('.a11y-paragraphs-tabs__wrapper .tabs-panel .content').css( 'min-height' , tabsHeight);
             jQuery('.a11y-paragraphs-tabs__wrapper .tabs-panel').css( 'min-width' , panWidth);
          }else{
            jQuery('.a11y-paragraphs-tabs__wrapper .tabs-panel').css( 'min-width' , '100%');
          }

          //508 Tabbing order
          jQuery('.a11y-paragraphs-tabs__wrapper .tabs-tab-list .tabs-trigger').removeAttr("tabindex");

            jQuery('.a11y-paragraphs-tabs__wrapper .tabs-tab-list .tabs-trigger').click(function(){
                jQuery('.a11y-paragraphs-tabs__wrapper .tabs-tab-list .tabs-trigger').removeAttr("tabindex");
                setTimeout(
                    function() {
                        jQuery('.a11y-paragraphs-tabs__wrapper .tabs-tab-list .tabs-trigger').removeAttr("tabindex");
                    },
                    500);
            });

            jQuery('.a11y-paragraphs-tabs__wrapper .tabs-tab-list .tabs-trigger').keypress(function(e){
                if(e.which == 13){//Enter key pressed
                     jQuery('.a11y-paragraphs-tabs__wrapper .tabs-tab-list .tabs-trigger').removeAttr("tabindex");
                }
            });

            jQuery('.a11y-paragraphs-tabs__wrapper .tabs-tab-list .tabs-trigger').keyup(function(){
                     jQuery('.a11y-paragraphs-tabs__wrapper .tabs-tab-list .tabs-trigger').removeAttr("tabindex");
                     setTimeout(
                        function() {
                            jQuery('.a11y-paragraphs-tabs__wrapper .tabs-tab-list .tabs-trigger').removeAttr("tabindex");
                        },
                        500);
            });

            if(winWidth < 860){
              if(jQuery('.tabs-panel').hasClass('is-open')){
                jQuery('.tabs-panel').removeClass('is-open');
                jQuery('.tabs-panel').addClass('is-hidden');
                jQuery('.tabs-panel').attr('tabindex', '-1');
                jQuery('.accordeon-trigger').attr('aria-expanded','false');
                jQuery('.content').removeClass('is-open');
                jQuery('.content').addClass('is-hidden');
                jQuery('.content').attr('aria-hidden','true');
              }
            }
        });

            //508 tabbing for Accoridons
            jQuery('.paragraph--type--accordions .accordion-title').removeAttr("tabindex");

            jQuery('.paragraph--type--accordions .accordion-title').once().click(function(){
                jQuery('.paragraph--type--accordions .accordion-title').removeAttr("tabindex");
                setTimeout(
                    function() {
                        jQuery('.paragraph--type--accordions .accordion-title').removeAttr("tabindex");
                    },
                    500);
            });
            $('.paragraph--type--accordions .accordion-title a').once().click(function(e) {
              e.preventDefault();
            });

            jQuery('.paragraph--type--accordions .accordion-title').once().keypress(function(e){
                if(e.which == 13){//Enter key pressed
                     jQuery('.paragraph--type--accordions .accordion-title').removeAttr("tabindex");
                }
            });

            jQuery('.paragraph--type--accordions .accordion-title').once().keyup(function(){
                     jQuery('.paragraph--type--accordions .accordion-title').removeAttr("tabindex");
                     setTimeout(
                        function() {
                            jQuery('.paragraph--type--accordions .accordion-title').removeAttr("tabindex");
                        },
                        500);
            });
      });

      var resizeTimer;

      jQuery(window).on('resize', function(){
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(function() {

          // Run code here, resizing has "stopped"
          jQuery('.a11y-paragraphs-tabs__wrapper .tabs-tab-list').each(function(){
            var winWidth = jQuery(window).width();
            var tabsHeight = jQuery(this).height(); //returns height
            var tabsWidth = jQuery(this).width(); //returns width
            var wrapWidth = jQuery('.a11y-paragraphs-tabs__wrapper').width(); //returns wrapper width
            var panWidth = wrapWidth - tabsWidth;

            if(tabsHeight > 0 && winWidth > 859){
               jQuery('.a11y-paragraphs-tabs__wrapper .tabs-panel .content').css( 'min-height' , tabsHeight);
               jQuery('.a11y-paragraphs-tabs__wrapper .tabs-panel').css( 'min-width' , panWidth);
            }else{
              jQuery('.a11y-paragraphs-tabs__wrapper .tabs-panel').css( 'min-width' , '100%');
            }
            /**
             if(winWidth < 860){
                if(jQuery('.tabs-panel').hasClass('is-open')){
                  setTimeout( function(){
                    // Do something after 1 second
                    jQuery('.tabs-panel.is-open').find('div.accordeon-trigger').click();
                  }  , 500 );
                }
              }
            **/
          });        
        }, 250);
        
      });
    }
  };


  // Function to for image gallery features
  Drupal.behaviors.image_gallery = {
    attach: function (context, settings) {
      jQuery(document).ready(function(){
        //Removing play/pause for thumbnails
        if($('.slick').hasClass('slick--thumbnail')){
          $('.slick--thumbnail .rotator-buttons').remove();
        }

        if($('.paragraph--type--image-gallery-group .slick__arrow').hasClass('visually-hidden')){
          $('.paragraph--type--image-gallery-group .slick__arrow.visually-hidden').remove();
        }


         // On after slick initilization add the tabbing.
        $('.paragraph--type--image-gallery-group .slick--main .slick__slider').on('init', function(event, slick, currentSlide, nextSlide){
            setTimeout( function(){
              // Do something after 1 second
              $('.slick--main .slick__slide').attr('tabindex', '-1');
              //$('.slick-dots button').attr('tabindex', '0');
              $('.rotator-buttons button').attr('tabindex', '0');

            }, 100 );

        });

        // On after slide change add the tabbing.
        $('.paragraph--type--image-gallery-group .slick--main .slick__slider').on('afterChange', function(event, slick, currentSlide, nextSlide){
            setTimeout( function(){
              // Do something after 1 second
              $('.slick--main .slick__slide').attr('tabindex', '-1');
              //$('.slick-dots button').attr('tabindex', '0');
              $('.rotator-buttons button').attr('tabindex', '0');

            }, 100 );

        });

           // On after slick Thumbnail initilization add the tabbing.
        $('.paragraph--type--image-gallery-group .slick--thumbnail .slick__slider').on('init', function(event, slick, currentSlide, nextSlide){
            setTimeout( function(){
              // Do something after 1 second
              $('.slick--thumbnail .slick__slide').attr('tabindex', '-1');
              //$('.slick-dots button').attr('tabindex', '0');
              $('.rotator-buttons button').attr('tabindex', '0');

            }, 100 );

        });

        // On after thumbnail slide change add the tabbing.
        $('.paragraph--type--image-gallery-group .slick--thumbnail .slick__slider').on('afterChange', function(event, slick, currentSlide, nextSlide){
            setTimeout( function(){
              // Do something after 1 second
              $('.slick--thumbnail .slick__slide').attr('tabindex', '-1');
              //$('.slick-dots button').attr('tabindex', '0');
              $('.rotator-buttons button').attr('tabindex', '0');

            }, 100 );

        });

        //Pause and Play button on click events
          $('.paragraph--type--image-gallery-group').each(function() {
            var t = $(this);

            //Pause and Play button on click events
            t.find('.pause').on('click', function() {
                var f = $(this);
                 t.find('.slick__slider')
                    .slick('slickPause');


                if(!f.hasClass('hidden')){
                   t.find('.play').removeClass('hidden');
                   t.find('.play').focus();
                   f.addClass('hidden');
                   t.find('.rotator-buttons button').attr('tabindex', '0');
                }
            });

             t.find('.play').on('click', function() {
                var f = $(this);
                 t.find('.slick__slider')
                    .slick('slickPlay');


                if(!f.hasClass('hidden')){
                   t.find('.pause').removeClass('hidden');
                   t.find('.pause').focus();
                   f.addClass('hidden');
                   t.find('.rotator-buttons button').attr('tabindex', '0');
                }

            });
          });
          //Appends the Pause/play button into the Rotator dots list as last item
          $('.paragraph--type--image-gallery-group .rotator-buttons').insertAfter('div.slick--main');
      });
    }
  };


  // Function to Resize Rotator Slider on mobile to fit images when they resize
  Drupal.behaviors.slider_slide_size = {
    attach: function (context, settings) {
      function fixPeepHeight(){
          jQuery(".paragraph--type--slideshow .slick-track, .paragraph--type--slideshow-bp .slick-track").each(function(){
              jQuery('.paragraph--type--slideshow .slick-track .slick__slide, .paragraph--type--slideshow-bp .slick-track .slick__slide').each(function(){
                  if(jQuery(this).find('video').length){
                    var h = jQuery('.slick-track').outerHeight();
                    jQuery(this).height(h);
                  }
              });
          });
      }


      jQuery(window).on("load", function(){
        fixPeepHeight();
      });

      jQuery(document).ready(function(){
        if(jQuery('.paragraph').hasClass('paragraph--type--slide, paragraph--type--slideshow-bp')){

            setTimeout( function(){
              // Do something after 1 second
              fixPeepHeight();
            }, 1000 );

            jQuery(window).smartresize(function () {
                fixPeepHeight();
            });
        }
      });

      jQuery(window).on('resize', function(){
        fixPeepHeight();
      });

      /*! Smart Resize */
      (function ($, sr) {

          // debouncing function from John Hann
          // http://unscriptable.com/index.php/2009/03/20/debouncing-javascript-methods/
          var debounce = function (func, threshold, execAsap) {
              var timeout;

              return function debounced() {
                  var obj = this, args = arguments;
                  function delayed() {
                      if (!execAsap)
                          func.apply(obj, args);
                      timeout = null;
                  };

                  if (timeout)
                      clearTimeout(timeout);
                  else if (execAsap)
                      func.apply(obj, args);

                  timeout = setTimeout(delayed, threshold || 100);
              };
          }
          // smartresize
          jQuery.fn[sr] = function (fn) { return fn ? this.bind('resize', debounce(fn)) : this.trigger(sr); };

      })(jQuery, 'smartresize');

      jQuery(document).ready(function(){
        //IE force play of videos due to autoplay issue within slick slider
        if(jQuery('body video').hasClass('loopvideo')){
          setTimeout(function(){
               document.getElementById('loopvideo').play();
           },1000);
        }
      });


      //If BP has Hero content hide page tile
      jQuery(document).ready(function(){
        if($('body div').hasClass('paragraph--type--slideshow-bp') || $('body div').hasClass('paragraph--type--hero-content-group')){
          $('h1.margin-0').hide();
        }else{
          $('h1.margin-0').show();
        }
      });

      jQuery(window).on('resize', function(){
        if($('body div').hasClass('paragraph--type--slideshow-bp') || $('body div').hasClass('paragraph--type--hero-content-group')){
          $('h1.margin-0').hide();
        }else{
          $('h1.margin-0').show();
        }
      });
    }
  };

  //Social Media Grid height sizing
  Drupal.behaviors.social_media_grid = {
    attach: function (context, settings) {

      jQuery(document).ready(function(){

        if(jQuery('body div').hasClass('paragraph--type--social-media-grid')){
          var gridWidth = jQuery('.paragraph--type--social-media-grid .grid-container').width(); // returns the grid width
          if (jQuery('.paragraph--type--social-media-grid .grid-container').hasClass('one-row')) {
            var gridHeight = (gridWidth / 2) / 2; //returns grid height / 2
          }else {
            var gridHeight = gridWidth / 2; //returns grid height / 2
          }
          if(jQuery(window).width() > 1005) {
            jQuery('.paragraph--type--social-media-grid .grid-container').css('height' , gridHeight );
          }else{
            jQuery('.paragraph--type--social-media-grid .grid-container').css('height' , 'auto' );
          }
        }
      });

      jQuery(window).on('resize', function(){

        if(jQuery('body div').hasClass('paragraph--type--social-media-grid')){
          var gridWidth = jQuery('.paragraph--type--social-media-grid .grid-container').width(); // returns the grid width
          if (jQuery('.paragraph--type--social-media-grid .grid-container').hasClass('one-row')) {
            var gridHeight = (gridWidth / 2) / 2; //returns grid height / 2
          }else {
            var gridHeight = gridWidth / 2; //returns grid height / 2
          }
          if(jQuery(window).width() > 1005) {
            jQuery('.paragraph--type--social-media-grid .grid-container').css('height' , gridHeight );
          }else{
            jQuery('.paragraph--type--social-media-grid .grid-container').css('height' , 'auto' );
          }

        }
      });
    }
  };

  // Resource boxes functionality
  Drupal.behaviors.resourceBoxes = {
    attach: function (context, settings) {
      $(document).ready(function(){

        // Since Drupal doesn't allow <div> tags inside an <a>, we output the
        // <a> before the <div> and then move the <div> inside the <a>
        $('.resource-container-link').once().each(function() {
          $(this).text('').next().appendTo($(this));
        });

        // Make SVG icons not tabbable
        $('.paragraph--type--resources-box-group object').attr('tabindex','-1');

      });
    }
  };

    // Topics grid functionality
  Drupal.behaviors.topicsGrid = {
    attach: function (context, settings) {

      function fixPeepHeight(){
          var tallestHeight = 0;
          var tallHeight = 0;

          jQuery(".topics-grid-container").css('height', '');

          jQuery(".field--name-field-topics-grid-item-reference .grid-col-6").each(function(){

              jQuery(".topics-grid-container").each(function(){
                var currentHeight = jQuery(this).outerHeight();

                  if(currentHeight > tallHeight){
                      tallHeight = currentHeight;
                  }
              });
              jQuery(".topics-grid-container").css('height', tallHeight);
          });
      }

      jQuery(document).ready(function(){
        if(jQuery('.paragraph').hasClass('paragraph--type--topics-grid')){

            setTimeout( function(){
              // Do something after 1 second
              fixPeepHeight();
            }, 1000 );

        }
      });

      jQuery(window).on('resize', function(){
        fixPeepHeight();
      });

    }
  };


  // Hero Rotator play/pause functionality
  Drupal.behaviors.playPause = {
    attach: function (context, settings) {
      $(document).ready(function(){

        // On after slick initilization add the tabbing.
        $('.paragraph--type--slideshow .slick__slider, .paragraph--type--slideshow-bp .slick__slider').on('init', function(event, slick, currentSlide, nextSlide){
            setTimeout( function(){
              // Do something after 1 second
              $('.slick__slide').attr('tabindex', '-1');
              $('.slick-dots button').attr('tabindex', '0');
              $('.rotator-buttons button').attr('tabindex', '0');

            }, 3000 );

        });

        // On after slide change add the tabbing.
        $('.paragraph--type--slideshow .slick__slider, .paragraph--type--slideshow-bp .slick__slider').on('afterChange', function(event, slick, currentSlide, nextSlide){
            setTimeout( function(){
              // Do something after 1 second
              $('.slick__slide').attr('tabindex', '-1');
              $('.slick-dots button').attr('tabindex', '0');
              $('.rotator-buttons button').attr('tabindex', '0');

            }, 100 );

        });

        $('.paragraph--type--slideshow, .paragraph--type--slideshow-bp').each(function() {
          var t = $(this);

          //Pause and Play button on click events
          t.find('.pause').on('click', function() {
              var f = $(this);
               t.find('.slick__slider')
                  .slick('slickPause');


              if(!f.hasClass('hidden')){
                 t.find('.play').removeClass('hidden');
                 t.find('.play').focus();
                 f.addClass('hidden');
                 t.find('.rotator-buttons button').attr('tabindex', '0');
              }
          });

           t.find('.play').on('click', function() {
              var f = $(this);
               t.find('.slick__slider')
                  .slick('slickPlay');


              if(!f.hasClass('hidden')){
                 t.find('.pause').removeClass('hidden');
                 t.find('.pause').focus();
                 f.addClass('hidden');
                 t.find('.rotator-buttons button').attr('tabindex', '0');
              }

          });
          //Prepends the Pause/play button into the Rotator dots list as first item
          $('.slick-dots').once().wrap('<div class="dots-container"></div>');
          $('.paragraph--type--slideshow .rotator-buttons, .paragraph--type--slideshow-bp .rotator-buttons').prependTo('.dots-container');
        });


        // $('.paragraph--type--slideshow, .paragraph--type--slideshow-bp').each(function() {
        //   $(this).find('.rotator-buttons').slice(1).remove();
        // });
      });

    }
  };

  // Resource boxes functionality
  Drupal.behaviors.leadershipBlock = {
    attach: function (context, settings) {
      $(document).ready(function(){

        // Move block below Return to Top section
        $('.paragraph--type--leadership-block-group').once().insertAfter('.usa-footer__return-to-top');

        // var fullName = $('.paragraph--type--leadership-block-group .field--name-field-first-name').text() + ' ' + $('.paragraph--type--leadership-block-group .field--name-field-last-name').text();
        // if (!$('body').hasClass('es')) {
        //   $('.paragraph--type--leadership-block-group .field--name-field-personnel-pdf .file a').text('Read More').attr('title','Read more about ' + fullName);
        // }
        // else {
        //   $('.paragraph--type--leadership-block-group .field--name-field-personnel-pdf .file a').text('Lea Más <em>(en inglés)</em>').attr('title','Lea más sobre ' + fullName);
        // }
        $('.paragraph--type--leadership-block-group .field--name-field-personnel-pdf .file a').attr('title',$('.paragraph--type--leadership-block-group .field--name-field-personnel-title').text());
      });
    }
  };

  // leadership functionality
  Drupal.behaviors.leadership = {
    attach: function (context, settings) {

      // Tag spacer bios
      $('.views-field-field-last-name .field-content:empty').parents('.views-row').addClass('spacer');

      // Make items tabbable
      $(context).find('.view-page-leadership .views-row:not(.spacer)').once('add-tab').attr('tabindex','0');

      // Expand bio info on click
      var bioBox = $('<div class="bio-box"><span>Leadership Biography</span><i class="bio-close far fa-times-circle" tabindex="0"></i></div>');

      $('.view-page-leadership .views-row:not(.spacer)').once().click(function() {
        var insertPoint = ($(this).index() < 5) ? 4 : 9;
        // var insertPoint = (5 - (($(this).index()+1) % 5)) + ($(this).index()+1);
        var insertText = $(this).find('.views-field-body .field-content').html();
        bioBox = $('<div class="bio-box"><span>' + Drupal.t('Leadership Biography') + '</span><i class="bio-close far fa-times-circle" tabindex="0"></i>' + insertText + '</div>');
        if ($(this).hasClass('bio-open')) {
          $(this).removeClass('bio-open').focus();
          $('.bio-box').remove();
        }
        else {
          $('.views-row.bio-open').removeClass('bio-open');
          $('.bio-box').remove();
          $(this).addClass('bio-open');
          // If mobile insert after element, else insert after end of row
          if ($(window).width() < 640) {
            bioBox.insertAfter($(this));
          }
          else {
            bioBox.insertAfter($('.view-page-leadership .views-row').eq(insertPoint));
          }
          $('.bio-close').focus();
        }
        $('.bio-close').click(function() {
          $('.views-row.bio-open').removeClass('bio-open').focus();
          $('.bio-box').remove();
        });
        $('.bio-close').keydown(function(event) {
          if ((event.which == 9) || (event.shiftKey && event.which == 9)) {
            $('.bio-close').focus();
            event.preventDefault();
          }
          if (event.which == 13) {
            $('.view-page-leadership .views-row.bio-open').removeClass('bio-open').focus();
            $('.bio-box').remove();
            event.preventDefault();
          }
        });
      });

      // 508 keyboard accessibility
      $('.view-page-leadership .views-row').once('leader-keypress').each(function(e) {
        $(this).keypress(function(event) {
          var insertPoint = ($(this).index() < 5) ? 4 : 9;
          var insertText = $(this).find('.views-field-body .field-content').html();
          bioBox = $('<div class="bio-box"><span>Leadership Biography</span><i class="bio-close far fa-times-circle" tabindex="0"></i>' + insertText + '</div>');
          
          if (event.which == 13) {
            $(this).addClass('bio-open');
            if ($(window).width() < 640) {
            bioBox.insertAfter($(this));
            }
            else {
              bioBox.insertAfter($('.view-page-leadership .views-row').eq(insertPoint));
            }
            $('.bio-close').focus();
          }

          $('.bio-close').click(function() {
            $('.views-row.bio-open').removeClass('bio-open').focus();
            $('.bio-box').remove();
          });
          $('.bio-close').keydown(function(event) {
            if ((event.which == 9) || (event.shiftKey && event.which == 9)) {
              $('.bio-close').focus();
              event.preventDefault();
            }
            if (event.which == 13) {
              $('.view-page-leadership .views-row.bio-open').removeClass('bio-open').focus();
              $('.bio-box').remove();
              event.preventDefault();
            }
          });
        });
      });
    }
  };

  // Contact pages
  Drupal.behaviors.contact = {
    attach: function (context, settings) {

      $(document).ready(function(){
        if ($('.block-system-main-block article').attr('about') == '/contact') {
        // if (window.location.pathname == '/contact') {
          $('body').addClass('page-contact');
        }
        if ($('.block-system-main-block article').attr('about') == '/contact/field-offices') {
          $('body').addClass('page-contact-fieldoffices');
        }

      });
      $('object[type="image/svg+xml"]').attr('tabindex','-1');
      $('img').once('checksvg').each(function() {
        if ($(this).attr('src').indexOf('.svg') > -1) {  
          $(this).attr('tabindex','-1');
        }
      });

      if ($('body').hasClass('es')) {
        $('.view-page-contact-field-offices #edit-state option:first-child, .view-page-contact-field-offices #edit-state--2 option:first-child').text('Estado');
        $('.view-page-contact-field-offices #edit-country option:first-child, .view-page-contact-field-offices #edit-country--2 option:first-child').text('País');
        $('.view-page-contact-field-offices #edit-office option:first-child, .view-page-contact-field-offices #edit-office--2 option:first-child').text('Tipo de Oficina');
      }
      else {
        $('.view-page-contact-field-offices #edit-state option:first-child, .view-page-contact-field-offices #edit-state--2 option:first-child').text('State');
        $('.view-page-contact-field-offices #edit-country option:first-child, .view-page-contact-field-offices #edit-country--2 option:first-child').text('Country');
        $('.view-page-contact-field-offices #edit-office option:first-child, .view-page-contact-field-offices #edit-office--2 option:first-child').text('Office Type');
      }
      
      $('.view-page-contact-field-offices .views-field-field-field-office-location .city').once('change-dc').each(function() {
        if ($(this).text() == 'Washington') {
          $(this).text('Washington, DC');
        }
      });
      
      $('.view-page-contact-field-offices .views-field-field-field-office-location .office-type').each(function(e) {
        var abbr = $(this).text();
        switch (abbr) {
          case "Enforcement & Removal Operations":
            $(this).text('ERO');
            break;
          case "Office of Public Affairs":
            $(this).text('OPA');
            break;
          case "Homeland Security Investigations":
            $(this).text('HSI');
            break;
          case "Office of the Principal Legal Advisor":
            $(this).text('OPLA');
            break;
          case "Office of Chief Financial Officer":
            $(this).text('OCFO');
            break;
          case "Office of Partnership and Engagement":
            $(this).text('OPE');
            break;
          case "Joint Interagency Task Force":
            $(this).text('JIATF');
            break;
          case "Law Enforcement Support Center":
            $(this).text('LESC');
            break;
          case "Office of Professional Responsibility":
            $(this).text('OPR');
        }
      });

      $('.views-field-field-field-office-location .country-type').each(function() {
        $(this).text($(this).parents('.grid__content').find('.country').text());
      });
      var $form = $('.view-page-contact-field-offices .views-exposed-form');
      $form.once('filter-by').prepend('<div class="filter-by"></div>');
      $form.addClass('collapsed');
      $('.view-page-contact-field-offices .filter-by').once('expand').click(function() {
        if ($form.hasClass('collapsed')) {
          $form.removeClass('collapsed');
          $form.css('max-height','none');
        }
        else {
          $form.addClass('collapsed');
          $form.css('max-height','78px');
        }
      });

      var $gridContainers = $('.view-page-contact-field-offices .grid__content');
      equalHeight($gridContainers);
      $(window).resize(function() {
        equalHeight($gridContainers);
      });

      // Sort Office filter select list
      var $officeList = $('.view-page-contact-field-offices #edit-office--2');
      var $options = $officeList.children('option').not(':first-child');
      var sortList = Array.prototype.sort.bind($options);

      sortList(function ( a, b ) {
        var aText = a.innerHTML;
        var bText = b.innerHTML;
     
        if ( aText < bText ) {
            return -1;
        }
        if ( aText > bText ) {
            return 1;
        }
        return 0;
      });
      $officeList.append($options);
    }
  };

  // Detention facilities pages
  Drupal.behaviors.detentionFacilities = {
    attach: function (context, settings) {
      // Node pages
      $(document).ready(function(){
        if ($('body').hasClass('page-detention-facility')) {
          $('.detention-address').appendTo('.usa-footer .field-localfooter .localfooter-col .list-address');

          var $mapLink = $('.detention-address .views-field-field-detention-facility-locatio-1 a');
          $('.field--name-field-detention-facility-map img').once('linkify').wrap('<a href="' + $mapLink.attr('href') + '" title="' + $mapLink.attr('title') + '"></a>');
        }
      });
      
      // View page
      if ($('.view-page-detention-facilities').length) {

        var $form = $('.views-exposed-form');
        $form.once('filter-by').prepend('<div class="filter-by"></div>');
        $form.addClass('collapsed');
        $('.filter-by').once('expand').click(function() {
          if ($form.hasClass('collapsed')) {
            $form.removeClass('collapsed');
            $form.css('max-height','none');
          }
          else {
            $form.addClass('collapsed');
            $form.css('max-height','78px');
          }
        });

        var $gridContainers = $('.grid__content');
        equalHeight($gridContainers);
        $(window).resize(function() {
          equalHeight($gridContainers);
        });
        $gridContainers.once('add-link').each(function() {
          var linkURL = $(this).find('.views-field-title-1 a').attr('href');
          var linkTitle = $(this).find('.views-field-title span').text();
          $(this).wrap('<a href="' + linkURL + '" title="' + linkTitle + '"></a>');
        });
      }
    }
  };

  function equalHeight($containers) {
    if ($(window).width() > 639) {
      var maxHeight = 0;
      $containers.css('min-height','');
      $containers.each(function() {
        if ($(this).innerHeight() > maxHeight) {
          maxHeight = $(this).innerHeight();
        }
      });
      $containers.css('min-height',maxHeight+'px');
    }
    else {
      $containers.css('min-height','');
    }
  }

  // Most wanted front page Grid Container Sizing functionality
  Drupal.behaviors.mostWanted = {
    attach: function (context, settings) {
      $(document).ready(function(){
        var totalHeight = 0;
        var imageHeight = 0;
        var nameHeight = 0;
        var subHeight = 0;
        // Move block below Return to Top section
        $('.grid .most-wanted-container').each(function(){
            var t = $(this);
             imageHeight = t.find('.mw-image').height(); //returns header height
             nameHeight = t.find('.mw-name').height(); //returns navbar height
             subHeight = t.find('.mw-wantfor').height(); //returns breadcrumb height

             var currentHeight = imageHeight + 18 + nameHeight + 14 + subHeight + 14; //Gets Hero height for image

            if(currentHeight > totalHeight) {
              totalHeight = currentHeight;
            }
        });


        $('.grid .most-wanted-container').css("height", totalHeight);

      });

      // Used to add focus to Most Wanted colorbox modal
      if ($('body').hasClass('most-wanted-individual')) {
        $(window).bind('cbox_complete', function(){
          $('#colorbox #cboxClose').focus();
        });
      }

      jQuery(window).on('resize', function(){
        var totalHeight = 0;
        var imageHeight = 0;
        var nameHeight = 0;
        var subHeight = 0;
        // Move block below Return to Top section
        $('.grid .most-wanted-container').each(function(){
            var t = $(this);
             imageHeight = t.find('.mw-image').height(); //returns header height
             nameHeight = t.find('.mw-name').height(); //returns navbar height
             subHeight = t.find('.mw-wantfor').height(); //returns breadcrumb height

             var currentHeight = imageHeight + 18 + nameHeight + 14 + subHeight + 14; //Gets Hero height for image

            if(currentHeight > totalHeight) {
              totalHeight = currentHeight;
            }
        });


        $('.grid .most-wanted-container').css("height", totalHeight);

      });

      //For field group CSS class verification issue.  Add class if not there.
      if ($('body').hasClass('most-wanted-individual')) {
        //add Image desktop grid
        if (!$('.image-container').hasClass('desktop:grid-col-3')) {
          $('.image-container').addClass('desktop:grid-col-3');
        }

        //add Info Grid desktop grid
        if (!$('.info-grid-container').hasClass('desktop:grid-col-9')) {
          $('.info-grid-container').addClass('desktop:grid-col-9');
        }

        //add MW Info Wrapper Grid desktop grid
        if (!$('.mw-info-wrapper').hasClass('desktop:grid-col-9')) {
          $('.mw-info-wrapper').addClass('desktop:grid-col-9');
        }

        //adds Rewards desktop grid
        if (!$('.mw-rewards-wrapper').hasClass('desktop:grid-col-3')) {
          $('.mw-rewards-wrapper').addClass('desktop:grid-col-3');
        }

        //add Phyiscal Description 1 Grid desktop grid
        if (!$('.mw-pd-item-1').hasClass('desktop:grid-col-6')) {
          $('.mw-pd-item-1').addClass('desktop:grid-col-6');
        }

        //add Phyiscal Description 2 Grid desktop grid
        if (!$('.mw-pd-item-2').hasClass('desktop:grid-col-6')) {
          $('.mw-pd-item-2').addClass('desktop:grid-col-6');
        }
      }      
    }
  };

  // Tooltip functionality
  Drupal.behaviors.toolTip = {
    attach: function (context, settings) {
      $(document).ready(function(){

        $('.tooltip').tooltipster({
            animation: 'fade',
            delay: 100,
            trigger: 'click',
            maxWidth: 500
        });

        $('.tooltip').on('keydown', function (e) {
            if((e.which === 13)){                                    
              $(this).click();   
            } 

            if((e.which === 27)){                                    
              $(this).tooltipster('close');   
            } 

        });

      });
    }
  };

  // Mobile Newsroom filter functionality
  Drupal.behaviors.mobileFilter = {
    attach: function (context, settings) {
      $(document).ready(function(){
        if($('body').hasClass('newsroom')){
          $('.layout__region--bottom .usa-accordion-button').attr('aria-expanded',false);//used to add tabbing on desktop
          $('.layout__region--bottom #edit-secondary-content').attr('hidden','');//used to add tabbing on desktop
          if(jQuery(window).width() < 640){
            $('.nr-header').attr('tabindex',0);//used to add tabbing on desktop
            $('.nr-tooltip').appendTo('.layout__region--bottom');//used to move Tooltip on mobile view
          }

            $('.nr-header').click(function (event) {     
              if(jQuery(window).width() < 640){        
                if ($(this).hasClass('open')) {
                        console.log('0');
                        $(this).removeClass('open');
                        $(this).attr('aria-expanded',false);
                        $('.filter-dropdown').slideUp( 'slow', function(){ });
                        
                } else {
                        console.log('1');
                        $(this).addClass('open');
                        $(this).attr('aria-expanded',true);
                        $('.filter-dropdown').slideDown( 'slow', function(){ });
                       
                }
                event.stopImmediatePropagation();
              }
            });

            $('.nr-header').on('keydown', function (e) {
                if((e.which === 13)){                                    
                  $(this).click();   
                } 
                e.stopImmediatePropagation();
            });
        }
      });
      
      $(window).on('resize', function(){
        if($('body').hasClass('newsroom')){
          if(jQuery(window).width() < 640){
            $('.nr-header').attr('tabindex',0);//used to add tabbing on desktop
            $('.nr-tooltip').appendTo('.layout__region--bottom');//used to move Tooltip on mobile view
            //$('.nr-header').attr('aria-expanded',false);//used to change expanded on mobile view
            //$('.filter-dropdown').css('display','none');//Hides dropdown div
          } else if(jQuery(window).width() > 640){
            //$('.nr-header').removeClass('open');
            $('.nr-header').attr('tabindex',-1);//used to remove tabbing on desktop
            $('.nr-tooltip').appendTo('.filter-dropdown');
            //$('.filter-dropdown').css('display','inline-block');
          }
        }  
      }); 
      
    }
  };

    // Filter Options functionality
  Drupal.behaviors.filterOptions = {
    attach: function (context, settings) {
        //Hides/shows max date depending on click
        var checked = jQuery('[id^=edit-field-published-date-value-min]').val();
              if (checked === "") {
                //jQuery('[id^=edit-field-published-date-value-min]').val('');               
                jQuery('.form-item-field-published-date-value-max ').hide();
                //jQuery('[for^=edit-field-published-date-value-max]').hide();
                jQuery('[id^=edit-field-published-date-value-max]').hide();
              } else {
                jQuery('.form-item-field-published-date-value-max ').show();
                //jQuery('[for^=edit-field-published-date-value-max]').show();
                //jQuery('[id^=edit-field-published-date-value-min-wrapper]').show();
                jQuery('[id^=edit-field-published-date-value-max]').show();
              }

        //SHows the max date on click
        jQuery('[id^=edit-field-published-date-value-min]').click(function (event) {
          var checked = jQuery('[id^=edit-field-published-date-value-min]').val();
          
          if (!checked === "") {
                  
                  //jQuery('[id^=edit-field-published-date-value-min]').val('');
                  jQuery('.form-item-field-published-date-value-max ').hide();
                  //jQuery('[for^=edit-field-published-date-value-max]').hide();
                  jQuery('[id^=edit-field-published-date-value-max]').hide();
                } else {
                  jQuery('.form-item-field-published-date-value-max ').show();
                  //jQuery('[for^=edit-field-published-date-value-max]').show();
                  //jQuery('[id^=edit-field-published-date-value-min-wrapper]').show();
                  jQuery('[id^=edit-field-published-date-value-max]').show();
          }
        }); 

        //Tabbing fix for BEF module update for Views Exposed Dropdown Filters
        $(document).ready(function(){
          $('.form-type-select select').attr('tabindex', '0');
        });

        //Tabbing accessibility for date filter
        jQuery('[id^=edit-field-published-date-value-min]').on('focus', function (e) {                                 
          $(this).click();                   
        });

    }
  };

  //Used to fix the output on UnitedArabEmirates on News releases
  Drupal.behaviors.newsroomUnitedArabEmirates = {
    attach: function (context, settings) {
        if (jQuery('body').hasClass('news-releases')) {
          if (jQuery('.nr-meta span').hasClass('Abu Dhabi')){
            jQuery('.Dhabi').text('Abu Dhabi');
          } else if(jQuery('.nr-meta span').hasClass('Sharjah')){
            jQuery('.Sharjah').text('Sharjah');
          } else if(jQuery('.nr-meta span').hasClass('Fujairah')){
            jQuery('.Fujairah').text('Fujairah');
          } else if(jQuery('.nr-meta span').hasClass('Umm Al Quwain')){
            jQuery('.Quwain').text('Umm Al Quwain');
          } else if(jQuery('.nr-meta span').hasClass('Dubai')){
            jQuery('.Dubai').text('Dubai');
          } else if(jQuery('.nr-meta span').hasClass('Ras al Khaimah')){
            jQuery('.Khaimah').text('Ras al Khaimah');
          } else if(jQuery('.nr-meta span').hasClass('Ajman')){
            jQuery('.Ajman').text('Ajman');
          }
        }
    }
  };

  // functionality for newsroom items
  Drupal.behaviors.newsroomItems = {
    attach: function (context, settings) {
      // Removed as per Amy Alcain ICED8-606
      // $(document).ready(function(){
      //   //Remove Placeholer attr from subscribe to ICE block
      //   if(jQuery(window).width() > 640){
      //     $("#email").removeAttr('placeholder');
      //   } else{
      //     //Add Placeholer attr on Mobile from subscribe to ICE block
      //     $("#email").attr('placeholder', "Enter Your Email");
      //   }
        
      // });

      // $(window).on('resize', function(){
      //   if(jQuery(window).width() > 640){
      //     //Remove Placeholer attr from subscribe to ICE block
      //     $("#email").removeAttr('placeholder');
      //   } else{
      //     //Add Placeholer attr on Mobile from subscribe to ICE block
      //     $("#email").attr('placeholder', "Enter Your Email");
      //   }
      // });  
    }
  };

     // functionality for newsrelease items page /news/releases/*
  Drupal.behaviors.newsreleaseItems = {
    attach: function (context, settings) {
      $(document).ready(function(){
         
        if($('body').hasClass('news-releases')){
          //Used to place grid classes on news release content items because views templates doesn't support theming multiple custom fileds in views template.
          $(".nr-content-area").addClass('tablet:grid-col-12 tablet-lg:grid-col-9 desktop:grid-col-9');
          $(".layout-sidebar-second").addClass('tablet:grid-col-12 tablet-lg:grid-col-3'); 

          //Used to move video embed field to the sidebar sine views strips out iframe embeds.
          $('.usa-layout-docs__main article').appendTo('.layout-sidebar-second');

          //Used to wrap Sidebar Documents in language tag if field boolean is selected.
          $('.paragraph--type--news-release-document').each(function(){ 
            var t = $(this);

              if($(this).find('.field--name-field-document-language .field--item').html() == "On"){
                t.find('.field--name-field-document-link .field--item a').attr('lang','es');
              }
          }); 

          //Hides Elements if the divs are empty
           if($('div.colorbox-image-grid').html() === '') {
             $('.nr-image-container').hide();
           }

          //Hides sidebar if no elements are there 
          $('.layout-sidebar-second article').each(function(){ 
            var t = $(this);
            var p = t.parent('aside');

              if(t.find('.news-release-content').html().trim() === '' && p.children('div').length === 0){
                t.parent('aside').hide();
              }
          });

        }
      }); 
    }
  };

  //Used for Feature story Archive page search
  Drupal.behaviors.faetureStories_search = {
    attach: function (context, settings) {
      if(jQuery('body').hasClass('feature-story-archive')){
        
        var searchBlocks = jQuery('#views-exposed-form-feature-archive-block-2 input[data-drupal-selector="edit-reset"]');

        if (jQuery('input[data-drupal-selector="edit-combine"]').attr('value').length > 0) {
          //used to display the reset X button when value is in form textbox
          jQuery('input[data-drupal-selector="edit-reset"]').css('display','block');

          searchBlocks.each(function () {
            var val = jQuery('input[data-drupal-selector="edit-combine"]').attr('value');
            jQuery(searchBlocks).click(function (event) {

                jQuery('input[data-drupal-selector="edit-combine"]').attr('value', '');

                //jQuery("#views-exposed-form-feature-archive-block-2")[0].reset();

                jQuery('input[data-bef-auto-submit-click]').trigger('click');
                event.preventDefault();
                //jQuery('#edit-submit-feature-archive-top-images').ajaxComplete(function() {

                  // jQuery('.view-filters .views-exposed-form').addClass('active');
                  // jQuery('.view-header .latest-text').removeClass('active');

                //});
              // return false;


            });
          });

        } else{
          jQuery('input[data-drupal-selector="edit-reset"]').css('display','none');
        }

        //Used for hiding Show More pager after first click
        jQuery('.quicktabs-tabs li:last-child a').on("click", function () {
          jQuery('input[data-drupal-selector="edit-combine"]').select();
        });
        //had to seperate each views show more click so I could control when they're hidden
        jQuery('#quicktabs-tabpage-feature_stories_archive-0 .pager-show-more a').click(function () {

          jQuery('#quicktabs-tabpage-feature_stories_archive-0 .pager-show-more a').css('display','inline');
          var page = jQuery('#quicktabs-tabpage-feature_stories_archive-0 .pager-show-more a').attr("href").match(/page=([0-9]+)/)[1];
          if (page > 1) {
            jQuery('#quicktabs-tabpage-feature_stories_archive-0 .pager-show-more a').css('display','none');
          }

        });

        //had to seperate each views show more click so I could control when they're hidden
        jQuery('#quicktabs-tabpage-feature_stories_archive-1 .pager-show-more a').click(function () {

          jQuery('#quicktabs-tabpage-feature_stories_archive-1 .pager-show-more a').css('display','inline');
          var page = jQuery('#quicktabs-tabpage-feature_stories_archive-1 .pager-show-more a').attr("href").match(/page=([0-9]+)/)[1];
          if (page > 1) {
            jQuery('#quicktabs-tabpage-feature_stories_archive-1 .pager-show-more a').css('display','none');
          }

        });

        if(!jQuery('.quicktabs-tabs li:last-child img').hasClass('image_button')){
          jQuery('.quicktabs-tabs li:last-child').prepend('<img class="image_button" alt="Search Icon" src="' + drupalSettings.path.baseUrl + 'profiles/iced8_gov/themes/uswds_iced8_gov_theme/img/feature-search-icon.jpg" />');
        }
      }

    }
  };


  Drupal.behaviors.faetureStories_resizeInput = {
    attach: function (context, settings) {
      if(jQuery('body').hasClass('feature-story-archive')){
        jQuery('.views-element-container form').each(function() {
          if(jQuery(this).attr('id') == 'views-exposed-form-feature-archive-block-2'){
        /**
              function resizeInput() {
                    jQuery(this).attr('size', jQuery(this).val().length);
              }

              jQuery('#edit-combine').attr('size', '15');


                jQuery('#edit-combine')
                    // event handler
                    .keydown(resizeInput)
                    // resize on page load
                    .each(resizeInput);
        **/
              //JQuery plugin:
              jQuery.fn.textWidth = function(_text, _font){//get width of text with font.  usage: $("div").textWidth();
                      var fakeEl = jQuery('<span>').hide().appendTo(document.body).text(_text || this.val() || this.text()).css({font: _font || this.css('font'), whiteSpace: "pre"}),
                          width = fakeEl.width();
                      fakeEl.remove();
                      return width;
                  };

              jQuery.fn.autoresize = function(options){//resizes elements based on content size.  usage: $('input').autoresize({padding:10,minWidth:0,maxWidth:100});
                options = jQuery.extend({padding:10,minWidth:0,maxWidth:10000}, options||{});
                jQuery(this).on('input', function() {
                  jQuery(this).css('width', Math.min(options.maxWidth,Math.max(options.minWidth,jQuery(this).textWidth() + options.padding)));
                  jQuery('.quicktabs-tabs li:last-child.active').css('width', Math.min(options.maxWidth + 60,Math.max(options.minWidth + 60,jQuery('input[data-drupal-selector="edit-combine"]').textWidth() + 60)));
                  jQuery("#views-exposed-form-feature-archive-block-2 input[value='edit-reset']").css('width', Math.min(options.maxWidth + 30,Math.max(options.minWidth + 30,jQuery('input[data-drupal-selector="edit-combine"]').textWidth() + 30)));
                }).trigger('input');
                return this;
              }



                  if (jQuery(window).width() < 760){
                    //have <input> resize automatically
                    //jQuery('#edit-combine').autoresize({padding:10,minWidth:100,maxWidth:100});
                    //jQuery('#edit-combine').css({"max-width" : '150px'});
                  } else{
                    jQuery('input[data-drupal-selector="edit-combine"]').autoresize({padding:10,minWidth:150,maxWidth:500});
                  }


              //have <input> resize automatically
              //jQuery('#edit-combine').autoresize({padding:10,minWidth:150,maxWidth:500});
          }
        });
      }
    }
  };

  Drupal.behaviors.webform = {
    attach: function (context, settings) {
        if (jQuery('form').hasClass('webform-submission-hsi-tipform-form') && !jQuery('body').hasClass('page-node-done')) {
            var exportLabel = jQuery("fieldset[data-drupal-selector='edit-please-check-all-that-apply'] input[value='trade_exportation']").next('label');
            var importLabel = jQuery("fieldset[data-drupal-selector='edit-please-check-all-that-apply'] input[value='trade_importation']").next('label');

            if(exportLabel != null && importLabel != null){
              jQuery(exportLabel).once().html(jQuery(exportLabel).html().replace(/(Exportation)/g, '<span class="underline">$1</span>'));
              jQuery(importLabel).once().html(jQuery(importLabel).html().replace(/(Importation)/g, '<span class="underline">$1</span>'));
            }
        } 
    }
  };

  //Used to show the View All button in filter block if view is filtered. 
  Drupal.behaviors.most_wanted_landing = {
    attach: function (context, settings) {
      $(document).ready(function(){
        if (jQuery('body').hasClass('most-wanted')) {

              //check if page is filtered
              if (window.location.href.indexOf('?field_most_wanted_category_value=') > 0) {
                $('.mw-landing-filter-block table tr').hide();
                //function to get the query field_most_wanted_category_value value
                function getParameterByName(name) {
                    var match = RegExp('[?&]' + name + '=([^&]*)').exec(window.location.search);
                    return match && decodeURIComponent(match[1].replace(/\+/g, ' '));
                    console.log(match);
                }
                // query string: ?field_most_wanted_category_value= to get tag
                var tag = getParameterByName('field_most_wanted_category_value'); 
                
                if($('.views-field-field-most-wanted-category a').hasClass(tag)){
                  if(tag == "HT/HS"){
                    jQuery('.views-field-field-most-wanted-category a').each(function() {
                      if($(this).hasClass("HT/HS")){
                        $(this).addClass('HTHS');
                        $('.HTHS').parents("tr").show();
                      }  
                    });
                  }else{
                    $('.'+tag).parents("tr").show();
                  }
                  $('.mw-landing-all a').show();
                }
              } else{
                  $('.mw-landing-all a').hide();
              }
        } 
      });
    }
  };

  //Most wanted individual page functions. 
  Drupal.behaviors.most_wanted_page = {
    attach: function (context, settings) {
      $(document).ready(function(){
        if (jQuery('body').hasClass('most-wanted-individual')) {
          if($(window).width() < 640){
            $('.mw-physical-wrapper').addClass('collapsed');
            $('.mw-summary-wrapper').addClass('collapsed');  
            $('.mw-physical-wrapper .field-group-wrapper').hide();
            $('.mw-summary-wrapper .field-group-wrapper').hide();                 
          }else{
            $('.mw-physical-wrapper').removeClass('collapsed');
            $('.mw-summary-wrapper').removeClass('collapsed');  
            $('.mw-physical-wrapper .field-group-wrapper').show();
            $('.mw-summary-wrapper .field-group-wrapper').show(); 
          }

          //$('.mw-category-block').appendTo('.mw-summary-wrapper .field-group-wrapper');
        } 
      });

      $(window).on('resize', function(){
        if($(window).width() < 640){

            $('.mw-physical-wrapper').addClass('collapsed');
            $('.mw-summary-wrapper').addClass('collapsed');  
            $('.mw-physical-wrapper .field-group-wrapper').hide();
            $('.mw-summary-wrapper .field-group-wrapper').hide();  
                
        } else{
            $('.mw-physical-wrapper').removeClass('collapsed');
            $('.mw-summary-wrapper').removeClass('collapsed');  
            $('.mw-physical-wrapper .field-group-wrapper').show();
            $('.mw-summary-wrapper .field-group-wrapper').show(); 
        }
      }); 
    }
  };

  //Adds the Adobe assetID and attributes for AEM solution to those imgs. 
  Drupal.behaviors.aem_images = {
    attach: function (context, settings) {
        //loop through all AEM imgs on page
        jQuery("img[src*='/assets']").each(function () {
            //if url has uswds_iced8_gov_theme/assets in path don't do anything.
            if(this.src.indexOf("uswds_iced8_gov_theme/assets") > 0){
            }else{
              var url = this.src;

              $.get(url + ".json",
                function(data) {
                  //get assetID from get request
                  var assetID = data["jcr:uuid"];
                  //console.log(assetID);
                  $('img[src="' + url + '"]').attr('data-asset-id', assetID);
                  $('img[src="' + url + '"]').attr('data-trackable', true);
                  //$('img[src="' + url + '"]').attr('onload', 'assetAnalytics.core.assetLoaded(this)');
                  
                },'json')
              .done(function() {
                console.log( "success" );
              })
              .fail(function() {
                console.log( "error" );
              });  
            }          
        });
    }  
  };

  //Parallax Effect
  Drupal.behaviors.parallax = {
    attach: function (context, settings) {
      $(document).ready(function(){
        // Set images to parallax
        $('.field-group-div-background-image').jarallax({
            speed: 0.5
        });
      });
    }
  };

  //Animation Paragraph Ordering
  Drupal.behaviors.animation = {
    attach: function (context, settings) {
      $(document).ready(function(){
        // Loop through each animaiton and See which side content should be on
        $('.paragraph--type--animation-image-and-body').once().each(function(e) {
          //check to see if content side is there
          if ($(this).find("field--name-field-content-side")) {
            //if right, move content to right
            if ($(this).find('.field--name-field-content-side').text() == 'right') {
              if ($(this).children('div').hasClass("field-group-div-background-image")) {
                $(this).find('.field-group-div-background-image').prependTo(this);
              } else if ($(this).children('div').hasClass("field--name-field-animation-image")) {
                $(this).find('.field--name-field-animation-image').prependTo(this);
              } else if ($(this).children('div').hasClass("field--name-field-loop-video-field")) {
                $(this).find('.field--name-field-loop-video-field').prependTo(this);
              }
            } 
          }
        });
      });
    }
  };

  // Timelines
  Drupal.behaviors.timeline = {
    attach: function (context, settings) {
      // Node pages
      $(document).ready(function(){
        if ($('.tl-timeline').length) {
          // ARIA Live
          $('.tl-timeline').attr('role','region').attr('aria-live','polite');

          $('.tl-slider-item-container .tl-slide').each(function(e) {
            var $image= $(this).find('.tl-media-image');
            if ($image) {
              var caption = $(this).find('.tl-caption').text();
              $image.attr('title',caption);
            }
          });

          $('h3.tl-headline-date').each(function() {
            $(this).replaceWith('<span class="tl-headline-date">'+$(this).html()+'</span>')
          });

          // Alternative ALT
          $('.tl-slide').once().each(function(e) {
            if ($(this).find('.tl-media-alt')) {
              var $slide = $(this);
              var mediaAltText = $slide.find('.tl-media-alt').text();
              setTimeout(function() {
                $slide.find('.tl-media-item.tl-media-image').attr('alt',mediaAltText);
              }, 4000);
              // setTimeout(function() {
              //   $slide.find('.tl-media-item.tl-media-image').attr('alt',mediaAltText);
              // }, 6000);
            }
          });
              
          // Fix image galleries
          setTimeout(function() {
            if ($('.colorbox-image-grid').length) {
              console.log('output');
              $('.colorbox-image-grid').justifiedGallery({
                lastRow : 'justify',
                rowHeight : 200,
                rel : 'gallery1', //replace with 'gallery1' the rel attribute of each link
                margins : 3
                }).on('jg.complete', function () {
                var IE;
                //@cc_on IE = navigator.appVersion;
                
                if (IE > 9) {
                  $(this).find('a').colorbox({
                    maxWidth : '80%',
                    maxHeight : '80%',
                    opacity : 0.8,
                    transition : 'elastic',
                    current : ''
                  });
                } else if (!IE) {
                    $(this).find('a').colorbox({
                    maxWidth : '80%',
                    maxHeight : '80%',
                    opacity : 0.8,
                    transition : 'elastic',
                    current : ''
                  });
                }
              });
            }
          }, 4000);
        }
      });
    }
  };

})(jQuery, Drupal);
;
/**
 * @file
 * Data layer functions.
 */
var dataLayer = [];
dataLayer.push({
  'page': 'Home',
  'channel': 'Home',
  'customer': 'true',
});

 (function ($, Drupal) {
  'use strict';

  function checkFormError() {
    if ($('form .usa-alert').length) {
      var $error = $('form .usa-alert');
      var errorType = '';
      if ($error.hasClass('usa-alert--error')) {
        errorType = 'error';
      }
      else if ($error.hasClass('.usa-alert--warning')) {
        errorType = 'warning';
      }
      else {
        errorType = 'success';
      }
      var errorText = $error.find('.usa-alert__body').html();
  
      if (errorType == 'success') {
        dataLayer.push({
          'event': 'formSuccess',
          'web': {
            'errorDetails': {
              'errorCode': errorType,
              'errorMessage': errorText,
            }
          }
        });
      }
      else {
        dataLayer.push({
          'event': 'form',
          'web': {
            'errorDetails': {
              'errorCode': errorType,
              'errorMessage': errorText,
            }
          }
        });
      }
    }
  }

  /**
  * Page errors
  */
  Drupal.behaviors.errors = {
    attach: function (context, settings) {
      if ($('.usa-layout-docs__main > .usa-alert').length) {
        $('.usa-layour-docs__main > .usa-alert').each(function(e) {
          var $error = $(this);
          var errorType = '';
          if ($error.hasClass('usa-alert--error')) {
            errorType = 'error';
          }
          else if ($error.hasClass('.usa-alert--warning')) {
            errorType = 'warning';
          }
          else {
            errorType = 'success';
          }
          var errorText = $error.find('.usa-alert__body').html();

          dataLayer.push({
            'event': 'error',
            'web': {
              'errorDetails': {
                'errorCode': errorType,
                'errorMessage': errorText,
              }
            }
          });
        });
      }
    }
  }
      
  /**
   * Datalayers forms
   */
  Drupal.behaviors.formErrors = {
    attach: function (context, settings) {
      $('form').submit(checkFormError());
    }
  }

  /**
   * Datalayers main
   */
  $(document).ready(function() {
    var theLang = $('html').attr('lang');
    var pageName;
    if ($('#main-content .usa-layout-docs__main > h1 span').length) {
      pageName = $('#main-content .usa-layout-docs__main > h1 span').text();
    }
    else {
      pageName = document.title;
    }
    var siteSection = 'None';
    var siteSubSection = 'None';
    if ($('#block-uswds-iced8-gov-theme-breadcrumbs .usa-breadcrumb__list li:nth-child(2) a').text().length) {
      siteSection = $('#block-uswds-iced8-gov-theme-breadcrumbs .usa-breadcrumb__list li:nth-child(2) a').text();
    }
    if ($('#block-uswds-iced8-gov-theme-breadcrumbs .usa-breadcrumb__list li:nth-child(3) a').text().length) {
      siteSubSection = $('#block-uswds-iced8-gov-theme-breadcrumbs .usa-breadcrumb__list li:nth-child(3) a').text();
    }
    var referrer = document.referrer;

    dataLayer.push({
      'event': 'viewComplete',
      'web': {
        'webInteraction': {
          'URL': window.location.href,
        },
        'webPageDetails': {
          'language': theLang,
          'name': pageName,
          'siteSection': siteSection,
          'siteSubSection': siteSubSection,
        },
        'webReferrer': {
          'URL': referrer,
        }
      },
      'environment': {
        '_dc': {
          'language': theLang,
        }
      },
    });

    // Check for form errors on load (no Ajax)
    checkFormError();

  });

})(jQuery, Drupal);
;
