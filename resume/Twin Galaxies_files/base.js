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

if (typeof(vw_Model) == "undefined") {

window['vw_init'] = function()
{
	if (Y)
	{
		vw_Hard_Core.init();
	}
};

window['vw_Model'] = function()
{
	this.properties = {
		'onload_extend_fired' : false,
		'securitytoken_field' : 'securitytoken',
		'ajax_script' : 'wiki_ajax.php',
		'panel_script' : 'wiki_cp.php',
		'scroll_node' : 'html',
		'device_ratio' : 1
	};
	this.fires = [];
	this.phrases = {};
	this.pretend = {};
	this.isDependent = {};
	this.dependencies = {};

	this.inited = false;
	this.hasTransition = false;
	this.queue = {};
	this.Y = {};
};

vw_Model.prototype.kindle = function(event_name, fn)
{
	if (typeof(this.fires[event_name]) == "undefined")
	{
		this.fires[event_name] = [];
	}

	if (event_name == 'init')
	{
		if (this.inited)
		{
			fn.apply(this, []);
		}
		else
		{
			this.fires['init'][this.fires['init'].length] = fn;
		}
	}
	else
	{
		this.fires[event_name][this.fires[event_name].length] = fn;
	}
};

vw_Model.prototype.init = function()
{
	var scope = this;

	Y.on("domready", function() {
		scope.onload_extend();
	});

	this.checkEnvironment();
	this.fire('init');
};

vw_Model.prototype.fire = function(event_name, args, scope)
{
	if (typeof(this.fires[event_name]) == "undefined")
	{
		return;
	}

	if (!scope)
	{
		scope = this;
	}

	if (!args)
	{
		args = [];
	}

	for (var i = 0; i < this.fires[event_name].length; i++)
	{
		this.fires[event_name][i].apply(scope, args);
	}
};

vw_Model.prototype.set = function(prop, value)
{
	this.properties[prop] = value;
};

vw_Model.prototype.get = function(name)
{
	if (name == 'securitytoken')
	{
		this.check_security();
	}

	return this.properties[name];
};

vw_Model.prototype.add_phrase = function(name, phrase)
{
	this.phrases[name] = phrase;
};

vw_Model.prototype.get_phrase = function(name)
{
	if (typeof(this.phrases[name]) == "undefined")
	{
		return name;
	}

	return this.phrases[name];
};

vw_Model.prototype.stylevar = function(name, ref)
{
	var ltr = 'ltr';

	if (ref)
	{
		ltr = ref.getComputedStyle("direction");
	}
	else
	{
		if (typeof(this.properties['ltr']) == "undefined")
		{
			this.properties['ltr'] = Y.Node.one("body").getComputedStyle("direction");
		}

		ltr = this.properties['ltr'];
	}

	if (ltr[0] == 'l')
	{
		return name;
	}

	switch (name)
	{
		case 'left':
			return 'right';

		case 'Left':
			return 'Right';

		case 'right':
			return 'left';

		case 'Right':
			return 'Right';

		case 'laquo':
			return 'raquo';

		case 'raquo':
			return 'laquo';

		case 'larr':
			return 'rarr';

		case 'rarr':
			return 'larr';
	}

	return name;
};

vw_Model.prototype.dependent = function(baseClass, fileName, dependency)
{
	this.dependencies[fileName] = dependency;
	this.isDependent[baseClass] = true;
};

vw_Model.prototype._indexOf = function(haystack, needle)
{
	if (typeof(haystack.indexOf) == "undefined")
	{
		var len = haystack.length >>> 0;

		for (var from = 0; from < len; from++)
		{
			if (from in haystack && haystack[from] === needle)
			{
				return from;
			}
		}

		return -1;
	}
	else
	{
		return haystack.indexOf(needle);
	}
};

vw_Model.prototype.check_security = function()
{
};

vw_Model.prototype.checkEnvironment = function()
{
	if (this.inited)
	{
		return;
	}

	this.inited = true;
	this.hasTransition = this.hasTransitionCSS();

	if (typeof(document.body.parentNode.scrollTop) != "undefined")
	{
		var cTop = 0;

		cTop += document.body.parentNode.scrollTop;

		document.body.parentNode.scrollTop++;

		if (document.body.parentNode.scrollTop == cTop)
		{
			document.body.parentNode.scrollTop--;

			if (document.body.parentNode.scrollTop == cTop)
			{
				this.set('scroll_node', 'body');
			}
		}
	}
	else
	{
		this.set('scroll_node', 'body');
	}

	if (window.screen.systemXDPI !== undefined && window.screen.logicalXDPI !== undefined && window.screen.systemXDPI > window.screen.logicalXDPI)
	{
		this.set('device_ratio', window.screen.systemXDPI / window.screen.logicalXDPI);
	}
	else if (window.devicePixelRatio !== undefined)
	{
		this.set('device_ratio', window.devicePixelRatio);
	}
};

vw_Model.prototype.hasTransitionCSS = function()
{
	var prefixes = ["MozT", "OT", "WebkitT", "t"];

	for (var i in prefixes)
	{
		str = prefixes[i] + "ransition";

		if (str in document.body.style)
		{
			return str;
		}
	}

	return false;
};

vw_Model.prototype.cue = function(depend, config)
{
	/*
	config = {
		arguments: {
			node: ajax_target_node,
			action: ajax_action,
			callback: ajax_callback,
			context: ajax_context,
			data: ajax_data
		},
		onCue: loader_callback, // this should execute the ajax call defined by arguments
		context: loader_context
	};
	*/

	var url = {}, queue = false, loaded = [], type = 'js', resolved = '', also = '', alsobits = [];

	if (typeof(depend) == "string")
	{
		depend = [depend];
	}

	var newDepend = depend;

	for (var i = 0; i < depend.length; i++)
	{
		type = this.resourceType(depend[i]);

		if (this.resourceLoaded(type, depend[i]))
		{
			loaded[loaded.length] = depend[i];
		}
		else if (!this.queue[depend[i]])
		{
			resolved = depend[i];

			if (depend[i].indexOf("?") != -1)
			{
				resolved += '&';
			}
			else
			{
				resolved += '?';
			}

			resolved += VW_CDN_EXPIRER;

			if (typeof(url[type]) == "undefined")
			{
				url[type] = [resolved];
			}
			else
			{
				url[type][url[type].length] = resolved;
			}

			if (type == 'js' && typeof(this.dependencies[depend[i]]) != "undefined")
			{
				alsobits = depend[i].split("/");
				also = alsobits.pop();
				also = alsobits.join("/") + "/" + this.dependencies[depend[i]] + "/" + also;

				url['js'][url['js'].length] = resolved.replace(depend[i], also);

				newDepend[newDepend.length] = also;
				this.queue[also] = 1;
			}

			this.queue[depend[i]] = 1;
		}
	}

	queue = (typeof(url['css']) != "undefined" || typeof(url['js']) != "undefined") ? true : false;
	depend = newDepend;

	if (queue)
	{
		var _config = {};

		if (config && config.onCue)
		{
			_config.context = config.context ? config.context : Y;
			_config.data = config.arguments;
			_config.onSuccess = config.onCue;
		}

		if (typeof(url['js']) != "undefined")
		{
			var _js_config = {};

			if (_config.context)
			{
				_js_config.context = _config.context;
				_js_config.data = _config.data;
				_js_config.onSuccess = _config.onSuccess;
			}

			if (typeof(url['css']) != "undefined")
			{
				var _css_config = {};

				if (_config.context)
				{
					_css_config.context = _config.context;
					_css_config.data = _config.data;

					_css_config.onSuccess = function() {
						Y.Get.js(url['js'], _js_config);
					};
				}

				Y.Get.css(url['css'], _css_config);
			}
			else
			{
				Y.Get.js(url['js'], _js_config);
			}
		}
		else if (typeof(url['css']) != "undefined")
		{
			Y.Get.css(url['css'], _config);
		}
	}
	else if (config && config.onCue)
	{
		var doCue = false;
		var awaiting = [];

		if (typeof(depend) == "string")
		{
			if (loaded.indexOf(depend) == -1)
			{
				awaiting[awaiting.length] = depend;
			}
		}
		else
		{
			for (i = 0; i < depend.length; i++)
			{
				if (loaded.indexOf(depend[i]) == -1)
				{
					awaiting[awaiting.length] = depend[i];
				}
			}
		}

		if (doCue)
		{
			var cueInterval = {};
			var scope = this;

			cueInterval.interval = setInterval(function() {
				var doCue = true;

				for (var i = 0; i < awaiting.length; i++)
				{
					if (!scope.resourceLoaded(awaiting[i]))
					{
						doCue = false;
						break;
					}
				}

				if (doCue)
				{
					if (cueInterval.interval)
					{
						clearInterval(cueInterval.interval);
					}

					config.onCue.call((config.context ? config.context : Y), {
						data: config.arguments
					});
				}
			}, 100);
		}
		else
		{
			config.onCue.call((config.context ? config.context : Y), {
				data: config.arguments
			});
		}
	}
};

vw_Model.prototype.resourceType = function(resname)
{
	if (resname.match(/.+\.js(?:\?|$)/))
	{
		return 'js';
	}
	else if (resname.match(/.*css\.php\?/) || resname.match(/.+\.css(?:\?|$)/))
	{
		return 'css';
	}

	return 'js';
};

vw_Model.prototype.resourceLoaded = function(type, resname)
{
	if (type == 'js')
	{
		resname = resname.split("?")[0];

		var scriptlist = Y.Node.all("script");
		var list_size = scriptlist.size();
		var src = '';

		for (var i = 0; i < list_size; i++)
		{
			src = scriptlist.item(i).getAttribute("src");

			if (src)
			{
				src = src.split("?")[0];
				this.queue[src] = 1;

				if (src == resname)
				{
					return true;
				}
			}
		}
	}
	else if (type == 'css')
	{
		var hreflist = Y.Node.all("link[rel=stylesheet]");
		var hrefsize = hreflist.size();
		var href = '';

		for (var i = 0; i < hrefsize; i++)
		{
			href = hreflist.item(i).getAttribute("href");

			if (href)
			{
				href = href.split("?")[0];
				this.queue[href] = 1;

				if (href == resname)
				{
					return true;
				}
			}
		}
	}

	return false;
};

vw_Model.prototype.ajax_call = function(config)
{
	var _config = config;
	var _io = "io-base";
	var scope = this;

	if (_config.upload)
	{
		_io = "io-upload-iframe";
	}
	else if (_config.form)
	{
		_io = "io-form";
	}

	Y.use(_io, function() {
		var config = {
			method: "POST",
			timeout: 15000,
			data: "ajax=1",
			arguments: _config
		};

		if (_config.upload)
		{
			// success not available via iframe
			config['on'] = {
				complete: _config.callback
			};
		}
		else
		{
			config['on'] = {
				success: _config.callback
			};
		}

		if (_config.context)
		{
			config['context'] = _config.context;
		}

		if (_config.form)
		{
			config['form'] = { id: _config.form };

			if (_config.upload)
			{
				// need a longer timeout for large uploads
				// assume 30s post timeout + 30s php timeout
				config['form']['upload'] = true;
				config['timeout'] = 60000;
			}
		}
		else if (_config.data)
		{
			config['data'] += _config.data;
		}

		if (config['form'])
		{
			// submit the form, don't go through AJAX path
			Y.io(config.form.id.getAttribute("action"), config);
		}
		else
		{
			config['data'] += "&" + scope.get('securitytoken_field') + "=" + encodeURIComponent(scope.get('securitytoken'));
			var path = '';

			if (_config.panel)
			{
				if (typeof(VW_CP_RELATIVE_PATH) != "undefined")
				{
					path = VW_CP_RELATIVE_PATH;
				}
				else
				{
					path = VW_RELATIVE_PATH;
				}
			}
			else
			{
				path = VW_RELATIVE_PATH;
			}

			path += "/";

			if (_config.panel)
			{
				config['data'] += "&do=" + encodeURIComponent(_config.action);
				config['data'] += "&panel=" + encodeURIComponent(_config.panel);

				path += scope.get('panel_script');

				if (path.indexOf('?') != -1)
				{
					path += '&';
				}
				else
				{
					path += '?';
				}

				path += "panel=" + encodeURIComponent(_config.panel);
			}
			else if (_config.script)
			{
				if (_config.script.match(/^https?:\/\//))
				{
					path = _config.script;
				}
				else
				{
					path += _config.script;
				}
			}
			else
			{
				config['data'] += "&c=" + encodeURIComponent(_config.action);
				path += scope.get('ajax_script');

				if (path.indexOf('?') != -1)
				{
					path += '&';
				}
				else
				{
					path += '?';
				}

				path += "c=" + encodeURIComponent(_config.action);
			}

			Y.io(path, config);
		}
	});
};

vw_Model.prototype.getXMLvalue = function(node)
{
	// Congrats, FireFox has become the worst browser
	// see: http://www.coderholic.com/firefox-4k-xml-node-limit/

	if (!node)
	{
		return '';
	}
	else if (typeof(node.textContent) != "undefined")
	{
		return node.textContent;
	}
	else
	{
		return node.firstChild.nodeValue;
	}
};

vw_Model.prototype.get_cookies = function(name)
{
	return [];
};

vw_Model.prototype.set_cookie = function(name, value, expires)
{
};

vw_Model.prototype.click_outside = function(up)
{
	var body = Y.Node.one("body");
	var clickables = body.getData("ios-counts") || 0;

	if (up)
	{
		if (!clickables)
		{
			body.addClass("vw-ios-clickable");
		}

		clickables++;
	}
	else
	{
		if (clickables)
		{
			clickables--;
		}

		if (!clickables)
		{
			body.removeClass("vw-ios-clickable");
		}
	}

	body.setData("ios-counts", clickables);
};

vw_Model.prototype.bind = function(method, fn)
{
	this[method] = fn;
};

vw_Model.prototype.extend = function(baseClass, obj, is_dep, className)
{
	if (typeof(this.pretend[baseClass]) == "undefined")
	{
		this.pretend[baseClass] = [];
	}

	if (is_dep)
	{
		if (typeof(window[className]) == "undefined")
		{
			this.pretend[baseClass][this.pretend[baseClass].length || 1] = [className, obj];
		}
		else
		{
			return;
		}
	}
	else if (typeof(window[baseClass]) == "undefined")
	{
		this.pretend[baseClass][0] = obj;
	}
	else
	{
		return;
	}

	if (this.properties['onload_extend_fired'])
	{
		this.onload_extend();
	}
};

vw_Model.prototype.create_constructor = function(className)
{
	return function() {
		window[className].prototype.__construct.apply(this, arguments);
	};
};

vw_Model.prototype.onload_extend = function()
{
	this.properties['onload_extend_fired'] = true;

	var i, j, k, obj, called, created;
	var scope = this;
	var newPretend = {};

	for (i in scope.pretend)
	{
		created = false;
		called = false;

		if (typeof(scope.pretend[i][0]) == "undefined")
		{
			continue;
		}

		if (typeof(scope.isDependent[i]) != "undefined" && scope.isDependent[i])
		{
			if (scope.pretend[i][0] && scope.pretend[i][1])
			{
				delete scope.isDependent[i];
			}
			else
			{
				// don't onload if it's not ready yet
				newPretend[i] = scope.pretend[i];
				continue;
			}
		}

		if (typeof(window[i]) == "undefined")
		{
			// this supports multiple
			if (typeof(scope.pretend[i][0].__construct) != "undefined")
			{
				window[i] = scope.create_constructor(i);
			}
			else
			{
				window[i] = function() {};
			}

			window[i].prototype = Object.create(scope.pretend[i][0]);
			created = true;
		}

		for (j = 1; j < scope.pretend[i].length; j++)
		{
			if (typeof(window[scope.pretend[i][j][0]]) != "undefined")
			{
				continue;
			}

			if (typeof(scope.pretend[i][j][1].__construct) != "undefined")
			{
				window[scope.pretend[i][j][0]] = scope.create_constructor(scope.pretend[i][j][0]);
			}
			else if (typeof(scope.pretend[i][0].__construct) != "undefined")
			{
				window[scope.pretend[i][j][0]] = scope.create_constructor(i);
			}
			else
			{
				window[scope.pretend[i][j][0]] = function() {};
			}

			window[scope.pretend[i][j][0]].prototype = Object.create(window[i].prototype);
			created = true;

			obj = Object.keys(scope.pretend[i][j][1]).sort().reduce(function(result, key) {
				result[key] = scope.pretend[i][j][1][key];
				return result;
			}, {});

			for (k in obj)
			{
				window[scope.pretend[i][j][0]].prototype[k] = obj[k];
			}

			if (typeof(window[scope.pretend[i][j][0]].prototype.ondefine) != "undefined")
			{
				window[scope.pretend[i][j][0]].prototype.ondefine.call();
				called = true;
			}
		}

		if (!called && created && typeof(window[i].prototype.ondefine) != "undefined")
		{
			window[i].prototype.ondefine.call();
		}
	}

	scope.pretend = newPretend;
};

vw_Model.prototype.get_dynamic_class = function(className)
{
	var testClass;

	for (var i = 0; i < VW_DEPENDENCY.length; i++)
	{
		testClass = className + '_' + VW_DEPENDENCY[i];

		if (typeof(window[testClass]) != "undefined")
		{
			return testClass;
		}
	}

	return className;
};

vw_Model.prototype.load_js = function(file, onsuccess, onerror)
{
	if (typeof(headRef) == "undefined")
	{
		headRef = document.getElementsByTagName("head")[0];
	}

	if (!headRef)
	{
		headRef = document.get('documentElement');
	}

	var loaded = false;
	var script = document.createElement("script");

	script.type = "text/javascript";
	script.async = true;

	if (onsuccess)
	{
		script.onload = function() {
			if (!loaded)
			{
				loaded = true;
				onsuccess();
			}
		};

		script.onreadystatechange = function() {
			if (!loaded && script.readyState === "complete")
			{
				loaded = true;
				onsuccess();
			}
		};
	}

	if (onerror)
	{
		script['onerror'] = function() {
			if (!loaded)
			{
				loaded = true;
				onerror();
			}
		};
	}

	script.src = file;
	headRef.appendChild(script);
};

// ##########################

if (typeof(YUI3_CONFIG) == "undefined")
{
	var YUI3_CONFIG = {};
}

var vw_Hard_Core = new vw_Model();
var headRef = document.getElementsByTagName("head")[0];

var vw_YUI_init = function() {

	Y.add("node-vw", function(Ya)
{
	Ya.Node.prototype.getInputValue = function(name)
	{
		if (this.get('tagName') != "FORM")
		{
			return false;
		}

		var field = Y.Node.getDOMNode(this)[name];

		if (field && field.value)
		{
			return field.value;
		}

		return null;
	};

	Ya.Node.prototype.setContentJS = function(content)
	{
		var node = Y.Node.create("<div class=\"vw-setcontent-wrapper\">" + content + "</div>");

		this.setContent(node);
		this._execJS(node);
	};

	Ya.Node.prototype.appendJS = function(content)
	{
		var node = Y.Node.create("<div class=\"vw-setcontent-wrapper\">" + content + "</div>");

		this.append(node);
		this._execJS(node);
	};

	Ya.Node.prototype._execJS = function(content)
	{
		var d = content.get('ownerDocument');
		var h = null;

		if (d)
		{
			h = d.one("head");
		}
		else
		{
			h = document.get('documentElement');
		}

		var scripts = content.all("script");

		content.all("*").each(function() {
			if (this.get('parentNode').get('id') != content.get('id'))
			{
				return;
			}

			this.remove();
			content.get('parentNode').append(this);
		});

		scripts.each(function() {
			var newScript = Y.one(document.createElement('script'));

			if (this._node.text)
			{
				newScript._node.text = this._node.text;
			}
			else if (this.getAttribute("src"))
			{
				newScript.setAttribute("src", this.getAttribute("src"));
			}

			h.appendChild(newScript);
			this.remove();
		});		
	};

}, '1.0.0', { requires: ['node-base'] }).add("event-vw", function(Ya) {

	Ya.DOMEventFacade.prototype.old_init = Ya.DOMEventFacade.prototype.init;

	Ya.DOMEventFacade.prototype.init = function()
	{
		var d = new Date();
		this.timeStamp = d.getTime();

		Ya.DOMEventFacade.prototype.old_init.call(this);
	};

}, '1.0.0', { requires: ['event-base'] }).use("node-base", "node-style", "event", "node-vw", "event-vw", vw_init);

};

var Y = YUI(YUI3_CONFIG);

if (headRef)
{
	vw_Hard_Core.load_js(VW_RESOURCE_PATH + "/vault/resources/js/y/combo/combo-min.js", vw_YUI_init, vw_YUI_init);
}
else
{
	vw_YUI_init();
}

}