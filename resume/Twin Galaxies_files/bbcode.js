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

function vw_bbcode_init()
{
	vw_BBCode.init();
}

vw_Hard_Core.extend('vw_BBCode_Handle', {

	__construct: function()
	{
		this.registry = null;

		// 2 to handle a race condition
		this.inited = false;
		this.processed = {};

		this._css = {};
		this._cssPath = '';
	},

	css: function(css)
	{
		if (css instanceof Array)
		{
			var csslen = css.length;

			for (var i = 0; i < csslen; i++)
			{
				this.css(css[i]);
			}

			return;
		}

		this._css[css] = 1;
	},

	css_path: function(path)
	{
		this._cssPath = path;
	},

	init: function()
	{
		if (!this.inited)
		{
			this.inited = true;
			vw_Hard_Core.fire('bbcode-init');
		}

		if (this.registry)
		{
			var node = Y.Node.one("doc");
			var id = node.generateID();

			if (typeof(this.processed[id]) == "undefined")
			{
				this.process(node);
			}
		}
	},

	spawn: function(registry)
	{
		this.registry = registry;

		if (this.inited)
		{
			var node = Y.Node.one("doc");
			var id = node.generateID();

			if (typeof(this.processed[id]) == "undefined")
			{
				this.process(node);
			}
		}
	},

	process: function(node, activate)
	{
		var id = node.generateID();

		if (typeof(this.processed[id]) == "undefined")
		{
			this.processed[id] = true;
			please_load = [];

			for (var vwClass in this.registry)
			{
				if (node.one("." + vwClass))
				{
					for (i in this.registry[vwClass])
					{
						please_load[please_load.length] = VW_RESOURCE_PATH + '/' + this.registry[vwClass][i];
					}
				}
			}

			if (please_load.length)
			{
				vw_Hard_Core.cue(please_load, activate ? {
					onCue: function() {
						vw_Hard_Core.fire('activate-html', [node]);
					}
				} : null);
			}
			else if (activate)
			{
				vw_Hard_Core.fire('activate-html', [node]);
			}
		}

		if (this._cssPath)
		{
			var scope = this;
			var cssRequires = [];

			node.all("div.vw-require").each(function() {
				scope.process_div(this, cssRequires);
			});

			if (node.hasClass("vw-require"))
			{
				scope.process_div(node, cssRequires);
			}

			if (cssRequires.length)
			{
				vw_Hard_Core.cue(this._cssPath.replace('{1}', encodeURIComponent(this.join(cssRequires, ','))));
			}
		}
	},

	process_div: function(node, cssRequires)
	{
		var css = node.getAttribute("data-css");
		var cssNames = css.split(",");

		for (var i = 0; i < cssNames.length; i++)
		{
			if (typeof(scope._css[cssNames[i] + '.css']) == "undefined")
			{
				cssRequires[cssRequires.length] = cssNames[i];
				this.css(cssNames[i] + '.css');
			}
		}

		node.remove(true);
	},

	load_css: function(css)
	{
		if (typeof(this._css[css + '.css']) == "undefined")
		{
			this.css(css + '.css');
			vw_Hard_Core.cue(this._cssPath.replace('{1}', encodeURIComponent(css)));
		}
	},

	join: function(requires, connector)
	{
		return requires.join(connector);
	},

	bbcode_containers: function()
	{
		return [
			"article .vw-block-group"
		];
	},

	ondefine: function()
	{
		var className = vw_Hard_Core.get_dynamic_class('vw_BBCode_Handle');
		window['vw_BBCode'] = new window[className]();

		Y.use('node-base', vw_bbcode_init);
	}
});