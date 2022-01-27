function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
	}
    return null;
}
setTimeout(function(){
	if(document.referrer.search('search')>0)
	{
		str = getCookie('search_highlight');
		console.log(str);
		var str_array = str.split(' ');
		for(var i = 0; i < str_array.length; i++) {
			// Trim the excess whitespace.
			str_array[i] = str_array[i].replace(/^\s*/, "").replace(/\s*$/, "");
			// Add additional code here, such as:
			$('.body_wrapper,.article-wrapper').highlight(str_array[i]);
		}
		$('.body_wrapper,.article-wrapper').highlight(str);
	}
}, 2000);
