var followPageReady = function() {
	var buttonHtml = '<div class="page-load-status" align="center" style="display: none;"><p class="infinite-scroll-request"><img src="zkil/ajax-loader.gif" /><br />Loading...</p><p class="infinite-scroll-last">End of content</p><p class="infinite-scroll-error">No more pages to load</p></div><div class="tag_user_box"><div class="blockrow"><center><input type="button" class="button load-next-button" value="Show More" style="cursor:pointer" /></center></div></div>';

	if (
		$('#dbtech_follow_friends').length &&
		$('#followbits span.prev_next a[rel="next"]').length &&
		!$('#followbits .page-load-status').length
	)
	{
		$('#dbtech_follow_friends').after(buttonHtml).infiniteScroll({
			hideNav  : "#controls_below",
			history: 'push',
			path : "span.prev_next a[rel='next']",
			append : "#dbtech_follow_friends li.userprof_content",
			scrollThreshold: false,
			button : '.load-next-button',
			status: '.page-load-status'
		});
	}

	if (
		$('#followbits > table > tbody').length &&
		$('#followbits span.prev_next a[rel="next"]').length &&
		!$('#followbits .page-load-status').length
	)
	{
		$('#followbits > table > tbody').after(buttonHtml).infiniteScroll({
			hideNav  : "#controls_below",
			history: 'push',
			path : "span.prev_next a[rel='next']",
			append : "#followbits > table > tbody > tr",
			scrollThreshold: false,
			button : '.load-next-button',
			status: '.page-load-status'
		});
	}

	/*
	$('#dbtech_follow_friends').infinitescroll({
		navSelector: "",
		nextSelector: "span.prev_next a[rel='next']",
		itemSelector: "#dbtech_follow_friends li.userprof_content",
		loading: {
			img: AJAXBASEURL + "zkil/ajax-loader.gif",
			msgText: "Loading new friends...",
			finishedMsg: "No more friends to display."
		}
	});

	$('#followbits > table > tbody').infinitescroll({
		navSelector: "#controls_below",
		nextSelector: "span.prev_next a[rel='next']",
		itemSelector: "#followbits > table > tbody > tr",
		loading: {
			img: AJAXBASEURL + "zkil/ajax-loader.gif",
			msgText: "Loading new data...",
			finishedMsg: "No more data."
		}
	});
	*/
};

$('#followbits').bind('DOMSubtreeModified', function(e) {
	if (e.target.innerHTML.length > 0)
	{
		// Call this
		followPageReady();
	}
});

$(followPageReady);