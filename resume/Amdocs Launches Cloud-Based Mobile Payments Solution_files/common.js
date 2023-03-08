require.config({waitSeconds:20,minify:true,baseUrl:'/etc.clientlibs/prncom/clientlibs/clientlibs-common/resources/js',paths:{'jquery':'/etc.clientlibs/prncom/clientlibs/clientlib-library/resources/js/jquery','jquery-ui':'/etc.clientlibs/prncom/clientlibs/clientlibs-common/resources/js/lib/jquery-ui.min','mmenu':'/etc.clientlibs/prncom/clientlibs/clientlibs-common/resources/js/lib/jquery.mmenu.min.all','mmneukeyboard':'/etc.clientlibs/prncom/clientlibs/clientlibs-common/resources/js/lib/jquery-mmenu-keyboardnavigation.min','masonry':'/etc.clientlibs/prncom/clientlibs/clientlibs-common/resources/js/lib/masonry.pkgd','imagesloaded':'/etc.clientlibs/prncom/clientlibs/clientlibs-common/resources/js/lib/imagesloaded.pkgd','viewport':'/etc.clientlibs/prncom/clientlibs/clientlibs-common/resources/js/lib/viewport','waypoints':'/etc.clientlibs/prncom/clientlibs/clientlibs-common/resources/js/lib/jquery.waypoints','inview':'/etc.clientlibs/prncom/clientlibs/clientlibs-common/resources/js/lib/inview','lightbox-legacy':'/etc.clientlibs/prncom/clientlibs/clientlibs-common/resources/js/lib/ekko-lightbox','lightbox':'/etc.clientlibs/prncom/clientlibs/clientlibs-common/resources/js/lib/lightgallery.min','lg-share':'/etc.clientlibs/prncom/clientlibs/clientlibs-common/resources/js/lib/lg-share.min','lg-thumbnail':'/etc.clientlibs/prncom/clientlibs/clientlibs-common/resources/js/lib/lg-thumbnail.min','lg-video':'/etc.clientlibs/prncom/clientlibs/clientlibs-common/resources/js/lib/lg-video.min','lg-zoom':'/etc.clientlibs/prncom/clientlibs/clientlibs-common/resources/js/lib/lg-zoom.min','flickity':'/etc.clientlibs/prncom/clientlibs/clientlibs-common/resources/js/lib/flickity.pkgd','flexslider':'/etc.clientlibs/prncom/clientlibs/clientlibs-common/resources/js/lib/flexslider.min','auto-complete-search':'/etc.clientlibs/prncom/clientlibs/clientlibs-common/resources/js/app/auto-complete-search','bridget':'/etc.clientlibs/prncom/clientlibs/clientlibs-common/resources/js/lib/jquery.bridget','bootstrap':'/etc.clientlibs/prncom/clientlibs/clientlibs-common/resources/js/lib/bootstrap','datepicker':'/etc.clientlibs/prncom/clientlibs/clientlibs-common/resources/js/lib/ab-datepicker','isotope':'/etc.clientlibs/prncom/clientlibs/clientlibs-common/resources/js/lib/isotope.pkgd.min','hammer':'/etc.clientlibs/prncom/clientlibs/clientlibs-common/resources/js/lib/jquery.hammer','typeahead':'/etc.clientlibs/prncom/clientlibs/clientlibs-common/resources/js/lib/typeahead.jquery.min','select':'/etc.clientlibs/prncom/clientlibs/clientlibs-common/resources/js/lib/bootstrap-select','tokenfield':'/etc.clientlibs/prncom/clientlibs/clientlibs-common/resources/js/lib/tokenfield.min','validator':'/etc.clientlibs/prncom/clientlibs/clientlibs-common/resources/js/lib/validator.min','highcharts':'/etc.clientlibs/prncom/clientlibs/clientlibs-common/resources/js/lib/highcharts','highmaps':'/etc.clientlibs/prncom/clientlibs/clientlibs-common/resources/js/lib/highmaps','highmaps-plugin':'/etc.clientlibs/prncom/clientlibs/clientlibs-common/resources/js/lib/map','lazyload':'/etc.clientlibs/prncom/clientlibs/clientlibs-common/resources/js/lib/lazyload-min','highmaps-world-continents':'/etc.clientlibs/prncom/clientlibs/clientlibs-common/resources/js/lib/highmaps-world-continents','highmaps-united-states':'/etc.clientlibs/prncom/clientlibs/clientlibs-common/resources/js/lib/highmaps-united-states','highmaps-canada':'/etc.clientlibs/prncom/clientlibs/clientlibs-common/resources/js/lib/highmaps-canada','highmaps-europe':'/etc.clientlibs/prncom/clientlibs/clientlibs-common/resources/js/lib/highmaps-europe','recaptcha':'https://www.google.com/recaptcha/api.js?onload=onloadCallback&amp;render=explicit','mobilenav':'/etc.clientlibs/prncom/clientlibs/clientlibs-common/resources/js/prncom/mobilenav','footer':'/etc.clientlibs/prncom/clientlibs/clientlibs-common/resources/js/prncom/footer','footerfixed.mkt':'/etc.clientlibs/prncom/clientlibs/clientlibs-common/resources/js/prncom/footerfixed.mkt','bfh-list':'/etc.clientlibs/prncom/clientlibs/clientlibs-common/resources/js/lib/bfh-list','cnw-form-helpers':'/etc.clientlibs/prncom/clientlibs/clientlibs-common/resources/js/lib/cnw-bootstrap-formhelpers','cnw-profile-form':'/etc.clientlibs/prncom/clientlibs/clientlibs-common/resources/js/app/cnw/profile-form','collapse-xs':'/etc.clientlibs/prncom/clientlibs/clientlibs-common/resources/js/prncom/collapse-xs','prn-datepicker':'/etc.clientlibs/prncom/clientlibs/clientlibs-common/resources/js/prncom/prnab-datepicker','cnw.language-toggle':'/etc.clientlibs/prncom/clientlibs/clientlibs-common/resources/js/prncom/cnw.language-toggle','mycnw-login':'/etc.clientlibs/prncom/clientlibs/clientlibs-common/resources/js/prncom/mycnw-login','mycnw-subscriptions':'/etc.clientlibs/prncom/clientlibs/clientlibs-common/resources/js/prncom/mycnw-subscriptions','datepicker-cs':'/etc.clientlibs/prncom/clientlibs/clientlibs-common/resources/js/lib/locales/datepicker.cs','datepicker-da':'/etc.clientlibs/prncom/clientlibs/clientlibs-common/resources/js/lib/locales/datepicker.da','datepicker-de':'/etc.clientlibs/prncom/clientlibs/clientlibs-common/resources/js/lib/locales/datepicker.de','datepicker-es':'/etc.clientlibs/prncom/clientlibs/clientlibs-common/resources/js/lib/locales/datepicker.es','datepicker-fi':'/etc.clientlibs/prncom/clientlibs/clientlibs-common/resources/js/lib/locales/datepicker.fi','datepicker-fr':'/etc.clientlibs/prncom/clientlibs/clientlibs-common/resources/js/lib/locales/datepicker.fr','datepicker-it':'/etc.clientlibs/prncom/clientlibs/clientlibs-common/resources/js/lib/locales/datepicker.it','datepicker-nl':'/etc.clientlibs/prncom/clientlibs/clientlibs-common/resources/js/lib/locales/datepicker.nl','datepicker-no':'/etc.clientlibs/prncom/clientlibs/clientlibs-common/resources/js/lib/locales/datepicker.no','datepicker-pl':'/etc.clientlibs/prncom/clientlibs/clientlibs-common/resources/js/lib/locales/datepicker.pl','datepicker-pt':'/etc.clientlibs/prncom/clientlibs/clientlibs-common/resources/js/lib/locales/datepicker.pt','datepicker-ru':'/etc.clientlibs/prncom/clientlibs/clientlibs-common/resources/js/lib/locales/datepicker.ru','datepicker-sk':'/etc.clientlibs/prncom/clientlibs/clientlibs-common/resources/js/lib/locales/datepicker.sk','datepicker-sv':'/etc.clientlibs/prncom/clientlibs/clientlibs-common/resources/js/lib/locales/datepicker.sv','datepicker-ar':'/etc.clientlibs/prncom/clientlibs/clientlibs-common/resources/js/lib/locales/datepicker.ar','datepicker-he':'/etc.clientlibs/prncom/clientlibs/clientlibs-common/resources/js/lib/locales/datepicker.he','floodlight':'/etc.clientlibs/prncom/clientlibs/clientlibs-common/resources/js/app/floodlight','prn-masonry':'/etc.clientlibs/prncom/clientlibs/clientlibs-common/resources/js/prncom/masonry','prn-lightbox':'/etc.clientlibs/prncom/clientlibs/clientlibs-common/resources/js/prncom/lightbox','prn.lightbox-analytics':'/etc.clientlibs/prncom/clientlibs/clientlibs-common/resources/js/prncom/lightbox-analytics','prn-lightbox.legacy':'/etc.clientlibs/prncom/clientlibs/clientlibs-common/resources/js/prncom/lightbox.legacy','prnj-advanced-search':'/etc.clientlibs/prncom/clientlibs/clientlibs-common/resources/js/app/prnj/advanced-search-form','prnj-advanced-search-action':'/etc.clientlibs/prncom/clientlibs/clientlibs-common/resources/js/app/prnj/advanced-search-form-action','prnj-email-type':'/etc.clientlibs/prncom/clientlibs/clientlibs-common/resources/js/app/prnj/email-type','prnj-email-schedule':'/etc.clientlibs/prncom/clientlibs/clientlibs-common/resources/js/app/prnj/email-schedule','sitepreview':'/etc.clientlibs/prncom/clientlibs/clientlibs-common/resources/js/prncom/sitepreview','marketingpersona':'/etc.clientlibs/prncom/clientlibs/clientlibs-common/resources/js/prncom/marketingpersona','mobile-share':'/etc.clientlibs/prncom/clientlibs/clientlibs-common/resources/js/prncom/mobile-share','gallerycarousel':'/etc.clientlibs/prncom/clientlibs/clientlibs-common/resources/js/prncom/gallerycarousel','gallery-legacy':'/etc.clientlibs/prncom/clientlibs/clientlibs-common/resources/js/prncom/gallery-legacy','gallery-legacy-two':'/etc.clientlibs/prncom/clientlibs/clientlibs-common/resources/js/prncom/gallery-legacy-two','hash-change':'/etc.clientlibs/prncom/clientlibs/clientlibs-common/resources/js/prncom/hash-change','jump-to':'/etc.clientlibs/prncom/clientlibs/clientlibs-common/resources/js/app/jump-to','just-read':'/etc.clientlibs/prncom/clientlibs/clientlibs-common/resources/js/prncom/just-read','lightbox-kaltura':'/etc.clientlibs/prncom/clientlibs/clientlibs-common/resources/js/prncom/lightbox-kaltura','omniture':'/etc.clientlibs/prncom/clientlibs/clientlibs-common/resources/js/prncom/omniture','region-helper':'/etc.clientlibs/prncom/clientlibs/clientlibs-common/resources/js/app/region-helper','sitecatalyst':'/etc.clientlibs/prncom/clientlibs/clientlibs-common/resources/js/prncom/sitecatalyst','search':'/etc.clientlibs/prncom/clientlibs/clientlibs-common/resources/js/prncom/search','subnav':'/etc.clientlibs/prncom/clientlibs/clientlibs-common/resources/js/prncom/subnav','stickynav':'/etc.clientlibs/prncom/clientlibs/clientlibs-common/resources/js/prncom/stickynav','affixnav':'/etc.clientlibs/prncom/clientlibs/clientlibs-common/resources/js/prncom/affixnav','carousel':'/etc.clientlibs/prncom/clientlibs/clientlibs-common/resources/js/prncom/carousel','icon-toggle':'/etc.clientlibs/prncom/clientlibs/clientlibs-common/resources/js/prncom/icon-toggle','privacy-alert':'/etc.clientlibs/prncom/clientlibs/clientlibs-common/resources/js/app/prnuk/privacy-alert','promo-height':'/etc.clientlibs/prncom/clientlibs/clientlibs-common/resources/js/prncom/promo-height','match-height':'/etc.clientlibs/prncom/clientlibs/clientlibs-common/resources/js/prncom/match-height','center-image':'/etc.clientlibs/prncom/clientlibs/clientlibs-common/resources/js/prncom/center-image','prn-select':'/etc.clientlibs/prncom/clientlibs/clientlibs-common/resources/js/prncom/select','smooth-scroll':'/etc.clientlibs/prncom/clientlibs/clientlibs-common/resources/js/prncom/smooth-scroll','to-clipboard':'/etc.clientlibs/prncom/clientlibs/clientlibs-common/resources/js/prncom/to-clipboard','tooltip':'/etc.clientlibs/prncom/clientlibs/clientlibs-common/resources/js/prncom/tooltip','getparam':'/etc.clientlibs/prncom/clientlibs/clientlibs-common/resources/js/prncom/getparam','mycnw-script':'/etc.clientlibs/prncom/clientlibs/clientlibs-common/resources/js/app/cnw/mycnw-script','search-script':'/etc.clientlibs/prncom/clientlibs/clientlibs-common/resources/js/prncom/search-script','eloquamethod':'/etc.clientlibs/prncom/clientlibs/component-clientlibs/resources/js/countryjs','accessibility':'/etc.clientlibs/prncom/clientlibs/clientlibs-common/resources/js/prncom/accessibility','pricing':'/etc.clientlibs/prncom/clientlibs/clientlibs-common/resources/js/prncom/pricing','adobe-launch-script':$('meta[name=adobeLaunchScript]').attr('content')},shim:{'bootstrap':{'deps':['jquery','jquery-ui']},'datepicker':{'deps':['jquery','jquery-ui','bootstrap'],'exports':'$.fn.datepicker'},'datepicker-cs':{'deps':['datepicker']},'datepicker-da':{'deps':['datepicker']},'datepicker-de':{'deps':['datepicker']},'datepicker-es':{'deps':['datepicker']},'datepicker-fi':{'deps':['datepicker']},'datepicker-fr':{'deps':['datepicker']},'datepicker-it':{'deps':['datepicker']},'datepicker-nl':{'deps':['datepicker']},'datepicker-no':{'deps':['datepicker']},'datepicker-pl':{'deps':['datepicker']},'datepicker-pt':{'deps':['datepicker']},'datepicker-ru':{'deps':['datepicker']},'datepicker-sk':{'deps':['datepicker']},'datepicker-sv':{'deps':['datepicker']},'datepicker-ar':{'deps':['datepicker']},'datepicker-he':{'deps':['datepicker']},'mmenu':{'deps':['jquery']},'mmneukeyboard':{'deps':['jquery']},'masonry':{'deps':['jquery','imagesloaded','bridget']},'isotope':{'deps':['imagesloaded','bridget']},'viewport':{'deps':['jquery']},'lightbox':{'deps':['jquery']},'lightbox-legacy':{'deps':['jquery','viewport']},'lg-share':{'deps':['lightbox']},'lg-thumbnail':{'deps':['lightbox']},'lg-video':{'deps':['lightbox']},'lg-zoom':{'deps':['lightbox']},'flickity':{'deps':['jquery','bridget']},'flexslider':{'deps':['jquery']},'bridget':{'deps':['jquery']},'waypoints':{'deps':['jquery']},'inview':{'deps':['jquery','waypoints']},'imagesloaded':{'deps':['jquery']},'hammer':{'deps':['jquery']},'jquery-ui':{'deps':['jquery']},'select':{'deps':['jquery','bootstrap']},'validator':{'deps':['jquery','bootstrap']},'highmaps-plugin':{'deps':['highcharts']},'highmaps-world-continents':{'deps':['highcharts','highmaps-plugin']},'highmaps-united-states':{'deps':['highcharts','highmaps-plugin']},'highmaps-canada':{'deps':['highcharts','highmaps-plugin']},'highmaps-europe':{'deps':['highcharts','highmaps-plugin']}}});require(['jquery','bootstrap'],function($){require(['stickynav']);require(['mobilenav'],function(prnMobileNav){prnMobileNav;});require(['search']);require(['subnav']);require(['lazyload']);require(['jquery','search-script']);require(['jquery','accessibility']);require(['mycnw-login']);require(['adobe-launch-script']);require(['footer']);if($(".pricingjumbotron").length){require(['pricing']);}
if($("form[id^='prneloquaForm']").length!=0){require(['eloquamethod']);}
if($('.knowledge-center-overview, .blog-detail, .blog-landing-listing').length!=0){$(window).scroll(function(event){if($(this).scrollTop()>200){$('.scrollToTop').fadeIn();}else{$('.scrollToTop').fadeOut();}});$('.scrollToTop').click(function(){$('html, body').animate({scrollTop:0},800);return false;});}
if(location.hostname=="uat.newswire.ca"||location.hostname=="int.newswire.ca"||location.hostname=="www.newswire.ca"||location.pathname.indexOf("/newswire-ca/ca/")>-1){require(['jquery','mycnw-script']);}});