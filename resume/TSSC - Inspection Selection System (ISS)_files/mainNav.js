//CREATE TIMER TO PREVENT THE MENUS FROM CLOSING RIGHT AWAY
var timer;

//INITIALIZE VARIABLES SO THAT ANY OPEN DROP-DOWN MENU CLOSES WHEN SOMEONE CLICKS THE SCREEN OR HITS A KEY LIKE "Esc"
document.onclick    = CloseMenu;
document.onkeypress = CloseMenu;

//BUG FIX - USED TO PREVENT A MENU FROM BEING SHOWED WHEN A VISITOR CLICKS THE BACK BUTTON
window.onunload     = CloseMenu;  //used for Firefox
window.onload       = function() {
	CloseMenu();                  //used for IE
	
	//GET THE CURRENT PAGE'S URL INFO
	var templateDomain = 'https://www.ugpti.org';
	var nonUGPTIDomain = false;
	var pageURL = document.location.href;
	if(pageURL.indexOf('ugpti.org')!=-1 && pageURL.indexOf('program=')==-1) {              //if the website address belongs to UGPTI --and-- the address doesn't contain a variable called 'program' (example: if pageURL is http://www.ugpti.org/rtssc/about/)
		var slashLoc_beforeFolder = pageURL.indexOf('/', 8);                                   //slashLoc_beforeFolder = 20                  <-- note that 20 is the index of the slash "/" after "ugpti.org"; 8 refers to the number of characters to get past the http:// part to avoid  the slashes (8 is used in case we ever use https://)
		var slashLoc_afterFolder  = pageURL.indexOf('/', slashLoc_beforeFolder + 1);           //slashLoc_afterFolder  = 26
		var firstFolderLength     = slashLoc_afterFolder - slashLoc_beforeFolder + 1;          //firstFolderLength     = 26 - 20 + 1 = 7     <-- note that the +1 is there because .indexOf starts at 0
		var firstFolder           = pageURL.substr(slashLoc_beforeFolder, firstFolderLength);  //firstFolder           = /rtssc/             <-- note that /rtssc/ is 7 characters long
	} else {
		nonUGPTIDomain = true;
	}
	
	//IF VIEWING AN ESTABLISHED PROGRAM PAGE, HIDE UGPTI'S NAVIGATION
	var programFolders = ['/aeifc/', '/aspc/', '/dotsc/', '/rtssc/', '/smartse/', '/surcom/', '/tssc/'];
	if(programFolders.indexOf(firstFolder)!=-1 || nonUGPTIDomain) {
		//HIDE THE UGPTI NAVIGATION
		document.getElementById('mainNavAlt').style.display   = 'inline';
		document.getElementById('mainNav').style.display      = 'none';
		document.getElementById('mainNavClose').style.display = 'none';
		
		//CREATE & SHOW BUTTON TO DISPLAY UGPTI'S NAVIGATION
		var showNavAnchor = document.createElement('a');                                      //create an anchor tag
		showNavAnchor.setAttribute('href', 'javascript:UnhideMainNav();');                    //set the href attribute
		var showNavImage  = document.createElement('img');                                    //create the image tag
		showNavImage.setAttribute('src', templateDomain+'/images/mn_showNav.gif');            //set the src attribute
		showNavImage.setAttribute('alt', 'View UGPTI Navigation');                            //set the alt attribute
		showNavAnchor.appendChild(showNavImage);                                              //add the image to the DOM tree under the anchor tag
		var placeholder = document.getElementById('mainNavAlt').getElementsByTagName('div');  //get the placeholder where the new button is to be added
		placeholder[0].appendChild(showNavAnchor);                                            //add the anchor tag to the DOM tree under the placeholder
		
		//CREATE BUTTON TO RE-HIDE UGPTI'S NAVIGATION
		var hideNavAnchor = document.createElement('a');
		hideNavAnchor.setAttribute('href', 'javascript:HideMainNav();');
		var hideNavImage  = document.createElement('img');
		hideNavImage.setAttribute('src', templateDomain+'/images/mn_closeNav.png');
		hideNavImage.setAttribute('alt', 'Hide UGPTI Navigation');
		hideNavImage.setAttribute('title', 'Close Menu');
		hideNavAnchor.appendChild(hideNavImage);
		var placeholder = document.getElementById('mainNavClose');
		placeholder.appendChild(hideNavAnchor);
	}
	
	
	
	
	//IF THE showFormFocus() FUNCTION IS DEFINED, EXECUTE IT
	if(typeof showFormFocus == 'function') {
		showFormFocus();
	}
	
	//IF THE runOnLoad() FUNCTION IS DEFINED, EXECUTE IT
	if(typeof runOnLoad == 'function') {
		runOnLoad();
	}
	
	//===== DEPRECIATED: use showFormFocus option (above) instead =====//
	//IF THE onLoad_codeToExecute VARIABLE IS DEFINED --AND-- IT'S NOT BLANK, EXECUTE CODE
	if(typeof onLoad_codeToExecute != 'undefined' && onLoad_codeToExecute != '') {
		eval(onLoad_codeToExecute);
	}
	//===== END DEPRECIATED CODE =====//
}

//FUNCTION TO UN-HIDE THE UGPTI NAVIGATION MENU
function UnhideMainNav() {
	document.getElementById('mainNavAlt').style.display   = 'none';
	document.getElementById('mainNav').style.display      = 'inline';
	document.getElementById('mainNavClose').style.display = 'inline';
}

//FUNCTION TO RE-HIDE THE UGPTI NAVIGATION MENU
function HideMainNav() {
	document.getElementById('mainNavAlt').style.display   = 'inline';
	document.getElementById('mainNav').style.display      = 'none';
	document.getElementById('mainNavClose').style.display = 'none';
}

//FUNCTION USED TO CLOSE THE OPEN FLY-OUT MENUS (main- & sub-navigation menus)
function CloseMenu(menu) {
	//IF getElementById AND getElementsByTagName ARE SUPPORTED
	if(document.getElementById && document.getElementsByTagName) {
		//IF THE mainNav ELEMENT WAS FOUND (code block used to close any open menus for the main UGPTI navigation)
		if(document.getElementById('mainNav')) {
			//LOOP THROUGH THE CHILDREN OF mainNav WHICH ARE UNORDERED LISTS
			var array_menus = document.getElementById('mainNav').getElementsByTagName('ul');
			for(var i=0; i<array_menus.length; i++) {
				//IF CURRENT LIST IS A FLY-OUT MENU (HAS AN ID ATTRIBUTE) --AND-- IT'S NOT THE MENU NEEDING TO BE OPENED, HIDE THE LIST
				if(array_menus[i].getAttribute('id')   &&   menu != array_menus[i].getAttribute('id')) {
					array_menus[i].style.top = "-999em";
				}
			}
		}
		
		//IF THE browseByProgram ELEMENT WAS FOUND (code block used to close any open menus for the main established program navigation)
		if(document.getElementById('browseByProgram')) {
			//LOOP THROUGH THE CHILDREN OF browseByProgram WHICH ARE UNORDERED LISTS
			var array_menus = document.getElementById('browseByProgram').getElementsByTagName('ul');
			for(var i=0; i<array_menus.length; i++) {
				//IF CURRENT LIST IS A FLY-OUT MENU (HAS AN ID ATTRIBUTE) --AND-- IT'S NOT THE MENU NEEDING TO BE OPENED, HIDE THE LIST
				if(array_menus[i].getAttribute('id')   &&   menu != array_menus[i].getAttribute('id')) {
					array_menus[i].style.left = "-999em";
				}
			}
		}
	}
}

//FUNCTION TO SHOW A MENU (or hide all if "menu" is blank)
function ShowMenu(menu) {
	//STOP THE TIMER, SO THE MENU DOESN'T CLOSE
	clearTimeout(timer);
	
	//SET TIMER TO PREVENT THE MENU FROM OPENING INSTANTLY (HELPS PREVENT THE MENUS FROM GETTING IN THE WAY)
	timer = window.setTimeout(function() {
		//CLOSE ANY OPEN MENUS
		CloseMenu(menu);
		
		//IF THE MENU ID WAS PASSED, CONTINUE PROCESSING
		var openMenu = document.getElementById(menu);
		if(openMenu) {
			//IF VISITORS WANTS TO SEE A FLY-OUT FROM A BROWSE BY PROGRAM MENU
			if(menu.substr(0,8) == 'progMenu') {
				openMenu.style.left = '220px';
				
			//ELSE...VISITOR IS LOOKING FOR A FLY-OUT MENU FROM THE MAIN NAVIGATION
			} else {
				//INTIALIZE VARIABLES
				var topValue       = "53px";                //default for the top padding
				var browserName    = navigator.appName;     //get browser name
				var browserVersion = navigator.appVersion;  //get browser version...which conatins a lot of garbage
				
				//IF BROWSER IS INTERNET EXPLORER, CONTINUE
				if(browserName == "Microsoft Internet Explorer") {
					var tempLoc = 0;
					tempLoc        = browserVersion.search("MSIE");          //figure out where MSIE is located...this is where the actual version number is
					browserVersion = browserVersion.substring(tempLoc + 5);  //remove all the stuff before MSIE...the +5 also removes "MSIE " since we just want the number
					tempLoc        = browserVersion.search(";");             //locate the first semicolon which should be right after the actual version number
					browserVersion = browserVersion.substring(0,tempLoc);    //remove everything from the semicolon on
					
					//IF USING IE8 OR ABOVE, CHANGE TOP PADDING
					if(browserVersion >= 8) {
						topValue = "0";
					}
					
				//IF BROWSER IS FIREFOX, CHROME, ETC., CHANGE TOP PADDING
				} else if(browserName == 'Netscape') {
					topValue = "15px";
				}
				
				//UPDATE THE TOP PADDING FOR THE SELECTED FLY-OUT MENU (note that we're actually changing the "top" CSS declaration and not "padding-top")
				openMenu.style.top  = topValue;
			}
		}
	},300);
}

//FUNCTION TO HIDE ANY OPEN MENUS AFTER A GIVEN AMOUNT OF TIME
function HideMenu() {
	//STOP TIMER USED TO DELAY THE OPENING OF A MENU
	clearTimeout(timer);
	
	//SET TIMER TO PREVENT MENU FROM CLOSING INSTANTLY
	timer = window.setTimeout('ShowMenu()',600);
}