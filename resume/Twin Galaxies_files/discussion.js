(function($)
{
	var ftd = $(document),
		froalaOptions = {
			key: 'pFOFSAGLUd1AVKg1SN==',/*'Uc1bE-13yC-9xvzdtD-17lF4bmn=='*/
			heightMin: 200,
			imageInsertButtons: ['imageBack', '|', 'imageUpload', 'imageByURL'],
			pluginsEnabled: ['align', 'charCounter', 'codeBeautifier', 'codeView', 'colors', 'draggable', 'embedly', 'emoticons', 'entities', 'file', 'fontFamily', 'fontSize', 'fullscreen', 'image', 'imageManager', 'inlineStyle', 'lineBreaker', 'link', 'lists', 'paragraphFormat', 'paragraphStyle', 'quote', 'save', 'table', 'url', 'video', 'wordPaste'],
			toolbarButtons: ['bold', 'italic', 'underline', '|', 'align', '|', 'insertLink', 'insertImage', 'insertVideo', 'embedly'],
			videoInsertButtons: ['videoBack', '|', 'videoByURL', 'videoEmbed'],
			saveParam: 'content',
			saveURL: 'game_discussion.php',
			saveParams: {securitytoken: SECURITYTOKEN, do: 'discussion'},


			// Set the image upload URL.
			imageUploadURL: 'comment_image.php',

			// Additional upload params.
			imageUploadParams: {securitytoken: SECURITYTOKEN, do: 'uploadimage', comment_type: 'game', id: $contentId},

			// Set max image size to 30MB.
			imageMaxSize: 30 * 1024 * 1024,

			// Allow to upload PNG and JPG.
			imageAllowedTypes: ['jpeg', 'jpg', 'png']//,

			/*
			// Set the video upload URL.
			videoUploadURL: 'comment_image.php',

			// Additional upload params.
			videoUploadParams: {securitytoken: SECURITYTOKEN, do: 'uploadfile', comment_type: 'game', id: $contentId},

			// Set max video size to 5GB.
			videoMaxSize: 5 * 1024 * 1024 * 1024,

			// Allow to upload WEBM, MP4, OGG, MOV
			videoAllowedTypes: ['webm', 'mp4', 'ogg', 'quicktime']
			*/
		}
	;

	var $atJson = (function()
	{
		var json = null;
		$.ajax({
			'async': false,
			'global': false,
			'url': "/getuserforautocomplete.php",
			'success': function(data) {
				data = $.xml2json(data);

				json = data.user;
			}
		});
		return json;
	})();

	var $atNames = $.map($atJson, function (value, i)
	{
		return {
			'id': value, 'name': value, 'email': value+ "@email.com"
		};
	});

	var $atConfig = {
		at: "@",
		data: $atNames,
		displayTpl: '<li><img src="https://www.1337live.com/images/icons/user.jpg" />  ${name} </li>',
		limit: 2000
	};

	$('textarea[name="discussion_textfield"]')
		.on('froalaEditor.save.after', froalaPostSave)
		.on('froalaEditor.save.error', froalaError)
		.on('froalaEditor.initialized', froalaMentions)
		.froalaEditor(froalaOptions)
	;

	ftd.on('click', '[name="discussion_submit"]', function(e)
	{
		var thisButton = $(this),
			cmd = thisButton.attr('data-command'),
			discussionId = thisButton.attr('data-discussionid'),
			contentId = thisButton.attr('data-contentid'),
			$textField = $('[name="discussion_textfield"][data-contentid="' + contentId + '"][data-command="' + cmd + '"]');

		var ajaxCmd = '';
		switch (cmd)
		{
			case 'comment':
				$textField = $('[name="discussion_textfield"][data-discussionid="' + discussionId + '"][data-contentid="' + contentId + '"]');

				ajaxCmd = 'savecomment';
				$textField.data('froala.editor').opts.saveParams['discussionid'] = discussionId;
				break;

			case 'save':
				$textField = $('[name="discussion_entrywrapper"][data-discussionid="' + discussionId + '"][data-contentid="' + contentId + '"] div.fr-comment.fr-view');

				ajaxCmd = 'saveeditstatus';
				$textField.data('froala.editor').opts.saveParams['discussionid'] = discussionId;

				$(this).remove();
				break;

			case 'status':
			default:
				ajaxCmd = 'savestatus';
				break;
		}

		$textField.data('froala.editor').opts.saveParams['action'] = ajaxCmd;
		$textField.data('froala.editor').opts.saveParams['variationid'] = contentId;

		// Trigger the save method
		$textField.froalaEditor('save.save');

		// Clear the editor
		$textField.froalaEditor('html.set', '');

	}).on('click', '[name="discussion_reply"]', function(e)
	{
		var thisLink = $(this),
			contentId = thisLink.attr('data-contentid'),
			discussionId = thisLink.attr('data-discussionid'),
			$textField = $('[name="discussion_textfield"][data-discussionid="' + discussionId + '"][data-contentid="' + contentId + '"]');

		$textField.parent().show();

		$textField
			.on('froalaEditor.save.after', froalaPostSave)
			.on('froalaEditor.save.error', froalaError)
			.on('froalaEditor.initialized', froalaMentions)
			.froalaEditor(froalaOptions)
		;

	}).on('click', '[name="discussion_editstatus"]', function(e)
	{
		var thisLink = $(this),
			cmd = thisLink.attr('data-command'),
			contentId = thisLink.attr('data-contentid'),
			discussionId = thisLink.attr('data-discussionid');

		var $textField = $('[name="discussion_entrywrapper"][data-discussionid="' + discussionId + '"][data-contentid="' + contentId + '"] div.fr-comment.fr-view');
		$textField.after('<div style="margin-top:6px;"><input type="button" class="button" name="discussion_submit" data-command="save" data-discussionid="' + discussionId + '" data-contentid="' + contentId + '" value="Save"></div>');

		$textField
			.on('froalaEditor.save.after', froalaPostSave)
			.on('froalaEditor.save.error', froalaError)
			.on('froalaEditor.initialized', froalaMentions)
			.froalaEditor(froalaOptions)
		;

	}).on('click', '[name="discussion_deletestatus"]', function(e)
	{
		var thisLink = $(this),
			cmd = thisLink.attr('data-command'),
			contentId = thisLink.attr('data-contentid'),
			discussionId = thisLink.attr('data-discussionid');

		if (!confirm('Are you sure you wish to delete this comment? This cannot be undone.'))
		{
			// We didn't want to delete
			return true;
		}

		var extraParams = {
			discussionid: discussionId
		};

		// Fetch shouts nao
		ajaxCall('deletestatus', extraParams, 'POST', contentId);
	});


	// #########################################################################
	// Shorthand for an ajax call
	function ajaxCall(varname, extraParams, type, contentId)
	{
		if (typeof type == 'undefined')
		{
			// Ensure we're setting this correctly
			type = 'POST';
			extraParams['securitytoken'] = SECURITYTOKEN;
		}

		// Set additional global params
		extraParams['do'] = 'discussion';
		extraParams['action'] = varname;
		extraParams['variationid'] = contentId;

		// Set last fetched IDs
		// extraParams['lastids'] = $lastIds;

		$.ajax({
			type: type,
			url: 'game_discussion.php',
			data: (SESSIONURL ? SESSIONURL + '&' : '') + $.param(extraParams),
			cache: false,
			complete: function(xhr, statusText) {},
			success: function(data, statusText, xhr)
			{
				data = $.xml2json(data);

				if (data.error)
				{
					// Log the error to the console
					console.error(timeStamp() + "AJAX Error: %s", data.error);

					return true;
				}

				if (typeof data.dorefresh != 'undefined')
				{
					// Fetch shouts nao
					ajaxCall('entries', {}, 'GET', contentId);
				}

				if (typeof data.entries != 'undefined')
				{
					$('[name="discussion"]').empty();
					for (var i in data.entries)
					{
						// Display the HTML
						$('[name="discussion"][data-contentid="' + contentId + '"]').prepend(data.entries[i]);
						$('[name="discussion"][data-contentid="' + contentId + '"] > div').first().fadeIn('fast');
					}

					var len = $('[name="discussion"][data-contentid="' + contentId + '"] > div').length;
					while (len > 50)
					{
						// Hide last child
						$('[name="discussion"][data-contentid="' + contentId + '"] > div').last().fadeOut('fast').promise().done(function()
						{
							// Remove this element from the DOM
							$(this).remove();
						});

						len--;
					}
				}
			},
			error:function(data, statusText, error)
			{
				try
				{
					if (data.statusText == 'communication failure' || data.statusText == 'transaction aborted' || data.status == 0)
					{
						// Ignore this error
						return false;
					}

					// Log the error to the console
					console.error(timeStamp() + "AJAX Error: Status = %s: %s", data.status, data.statusText);
				}
				catch (e)
				{
					// Log the error to the console
					console.error(timeStamp() + "AJAX Error: %s", data.responseText);
				}
			}
		});
	};

	// #########################################################################
	function froalaPostSave(e, editor, response)
	{
		data = $.xml2json(response);

		if (data.error)
		{
			// Log the error to the console
			console.error(timeStamp() + "AJAX Error: %s", data.error);

			return true;
		}

		if (data.contentid)
		{
			// Fetch shouts nao
			ajaxCall('entries', {}, 'GET', data.contentid);
		}
	};

	// #########################################################################
	function froalaError(e, editor, error)
	{
		// Log the error to the console
		console.error(timeStamp() + "AJAX Error: %s", error);
	};

	// #########################################################################
	function froalaMentions(e, editor)
	{
		editor.$el.atwho($atConfig);

		editor.events.on('keydown', function (e)
		{
			if (e.which == $.FroalaEditor.KEYCODE.ENTER && editor.$el.atwho('isSelecting'))
			{

				return false;
			}
		}, true);
	};

	// #########################################################################
	// Debugging function, generates a timestamp of when something occurred
	function timeStamp()
	{
		var d = new Date();

		return '[' + d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds() + '] ';
	};
})(jQuery);
