
var TwingaScores = { 
    
    loadingHtml     : '<div style="width:100%;text-align:center;"><img src="scores/asset/images/loading.gif" /></div>',
    ajaxUrl     : AJAXBASEURL + 'scores/ajax.php', // ajax url
    gameId      : null, // current game id for display variations
    variationId : null, // current variation id for get scores
    $variation  : null, // current variation block
    $scoreBlock : null, // current score block for display scores
    playerId    : null, // current player
    founderid    : null, // current player
    
    init: function() {
        var me = this,
                
        filter = function() {
            me.gameId = null;
            me.loadGames();
        };
        $('#search-game').keypress(function(e){
            
            if (e.keyCode == 13) {
                filter();
            }
        });
        $('#filter').click(filter);
        $('#filter-player').click(function() {
            if (me.playerId === null) {
                $('#search-player').focus();
                return;
            }
            if ($('#platform-player select').length === 0) {
                me.loadPlayerPlatforms();
                return;
            }
            me.loadPlayerScores();
        });
        $('#games-perpage').change(function() {
            me.loadGames();
        });
        $('#games-alltracksbelow').change(function() {
            me.loadGames();
        });
        me.bindPageClick();

        // player
        me.playerId = $('#search-player').data('playerid');
        me.founderid = $('#founderid').data('founderid');
        $('#platform-player').delegate('select', 'change', $.proxy(me.loadPlayerScores, me));
        $('#player-scores').delegate('select.scores-perpage', 'change', $.proxy(me.loadPlayerScores, me));
        me.gameId = $('#search-games').data('gameid');
        $('#search-gamesp').val($('#search-gamesp').data('value')).autocomplete({
            source: function(request, response, url) {
                if (request.term.length > 1) {
                    me.playerId = null;
                    $('#platform-player').empty();
                    $.ajax({
                        url: me.ajaxUrl,
                        dataType: "json",
                        data: {
                            action: 'search_game',
                            search: request.term,
                            platformid: $('#platformid').length ? $('#platformid').val() : null,
                            alltracks: $('#games-alltracksbelow').is(':checked') ? 1 : 0
                        },
                        success: function(data) {
                            response($.map(data, function(item) {
                                return {
                                    label: item.name ,
                                    id: item.name,
                                    value: item.name
                                };
                            }));
                        }
                    });
                }
                else {
                    me.gameId = '';
                    me.loadGamePlatforms();
                }
            },
            minLength: 0,
            select: function(event, ui) {
                me.gameId = ui.item.id;
                me.loadGamePlatforms();
            }
        });
        $('#search-player').val($('#search-player').data('value')).autocomplete({
            source: function(request, response, url) {
                me.playerId = null;
                $('#platform-player').empty();
                $.ajax({
                    url: me.ajaxUrl,
                    dataType: "json",
                    data: {
                        action: 'search_player',
                        search: request.term,
                        platformid: $('#platformid').length ? $('#platformid').val() : null,
                        alltracks: $('#games-alltracksbelow').is(':checked') ? 1 : 0
                    },
                    success: function(data) {
                        response($.map(data, function(item) {
                            return {
                                label: item.fullname + ' (' + item.city + ' ' + item.country + ')',
                                id: item.peopleid,
                                value: item.fullname
                            };
                        }));
                    }
                });
            },
            minLength: 2,
            select: function(event, ui) {
                me.playerId = ui.item.id;
                me.loadPlayerPlatforms();
            }
        });
        $('#search-player').keydown(function(e) {
            if (e.keyCode != 13) me.playerId = null;
            $('#platform-player').empty();
        }).focus(function(){
            $('.platform-list').hide();
        });
		
		
		
		
		
		
		
		

        // share
        if (me.isShared()) {
            me.variationId = $('#current-variation-id').val();
            me.gameId = $('#current-game-id').val();
            me.$scoreBlock = $('.scoresblock');
            me.$variation = $('.variation');
            me.bindScoreActions();
            me.bindVariationActions();
            me.bindGameActions();
            me.scrollTop('#search-variation');

        }
        this.registerChoosePlatform();
        

        if (/scores\.php\?platformid=/.test(window.location.href)) {
            me.loadGames();
        }
                $('#games-alltracksbelow').unbind().change(function() {
                    me.loadVariations();
                });
    },
    registerChoosePlatform: function() {
        
        var $searchInput = $('#search-platform'),
        $platforms = $('.platform-list .platform-item '),
        filter = function(e){
            var keyword = $(this).val().toLowerCase();
            
            $platforms.each(function(){
                var $platform = $(this),
                name = $platform.attr('title').toLowerCase();
                if (name.indexOf(keyword) != -1) {
                    $platform.fadeIn();
                } else {
                    $platform.fadeOut();
                }
            })
        };
        $('#search-platform')
        .focus(function(){
            
            $('.platform-list').show();
            $('#player-scores').empty();
        })
        .keyup(filter)
        .change(filter);
    },
    isShared: function() {
        return /scores=|reported=/i.test(window.location.href);
    },
    loadingTo: function(selector) {
        $(selector).html(this.loadingHtml);
    },
    scrollTop: function(selector) {
        if ($(selector).offset())
        {
            $("html,body").animate({
                scrollTop: $(selector).offset().top
                }, 'slow');
        }
    },
    bindPageClick: function() {
        var me = this;
        var goToPage = function(el, page) {
            var type = $(el).data('type'),
            method = 'load' + type.substr(0, 1).toUpperCase() + type.substr(1) + 's';
            me[method](page);
        };
        $(document).delegate('a[data-type]', 'click', function() {
            goToPage(this, $(this).data('page'));
            return false;
        });
        $(document).delegate('form[data-type]', 'submit', function() {
            goToPage(this, $('input[name="page"]', this).val());
            return false;
        });
    },
    sanitizePageNumber: function(pageNumber) {
        if (typeof pageNumber != 'undefined') {
            pageNumber = (pageNumber + '').replace(/\??&?page=/i, '');
        }
        pageNumber = parseInt(pageNumber, 10);
        return Math.max(1, pageNumber ? pageNumber : 1);
    },
    loadGamePlatforms: function() {
        var me = this;
        $('#game-items, #player-scores').empty();
        $('#variationblock, #scoresblock').remove();
        $.ajax({
            url: me.ajaxUrl,
            type: 'GET',
            cache: false,
            data: {
                securitytoken: SECURITYTOKEN,
                action: 'get_game_platform',
                search: me.gameId,
                platformid: $('#platformid').length ? $('#platformid').val() : null,
                alltracks: $('#games-alltracksbelow').is(':checked') ? 1 : 0
            },
            success: function(html) {
                $('.platform-list').html(html);
            }
        });
    },
    loadPlayerPlatforms: function() {
        var me = this;
        $('#game-items, #player-scores').empty();
        $('#variationblock, #scoresblock').remove();
        $.ajax({
            url: me.ajaxUrl,
            type: 'GET',
            cache: false,
            data: {
                securitytoken: SECURITYTOKEN,
                action: 'get_player_platform',
                playerid: me.playerId,
                platformid: $('#platformid').length ? $('#platformid').val() : null,
                alltracks: $('#games-alltracksbelow').is(':checked') ? 1 : 0
            },
            success: function(html) {
                $('#platform-player').html(html);
            }
        });
    },
    loadPlayerScores: function(pageNumber) {
        var me = this,
        paging = (typeof pageNumber == 'undefined' ? 0 : 1);

        $('#game-items').empty();
        $('#variationblock, #scoresblock').remove();
        $('.platform-logo, .platform-list').hide(); // hide platform logo
        $.ajax({
            url: me.ajaxUrl,
            type: 'GET',
            cache: false,
            data: {
                securitytoken: SECURITYTOKEN,
                action: 'player',
                playerid: me.playerId,
                platformid: $('#platform-player select').val(),
                page: me.sanitizePageNumber(pageNumber),
                perpage: $('#player-scores .scores-perpage').val() || 50,
                alltracks: $('#games-alltracksbelow').is(':checked') ? 1 : 0
            },
            success: function(html) {
                $('#player-scores').html(html);
                me.scrollTop('#player-scores');
                me.bindScoreActions();
            }
        });
        me.loadingTo($('#player-scores'));
    },
    loadScores: function(pageNumber) {
        alert('loadscore');
        var me = this,
        paging = (typeof pageNumber == 'undefined' ? 0 : 1),
        $table = me.$scoreBlock.find('.blockbody.twinga');
        if (paging) {
            me.loadingTo($table);
        } else {
            me.loadingTo(me.$scoreBlock);
        }

        $.ajax({
            url: me.ajaxUrl,
            type: 'GET',
            cache: false,
            data: {
                securitytoken: SECURITYTOKEN,
                action: 'score',
                paging: paging,
                variationid: me.variationId,
                search: $('.search-scores', me.$scoreBlock).val(),
                page: me.sanitizePageNumber(pageNumber),
                perpage: $('.scores-perpage', me.$scoreBlock).val() || 10,
                alltracks: $('#games-alltracksbelow').is(':checked') ? 1 : 0
            },
            success: function(html) {
                if (paging) {
                    $table.html(html);
                } else {
                    me.$scoreBlock.html(html);
                }
                me.bindScoreActions();
            }
        });
    },
    bindScoreActions: function() {
        var me = this;
        // bind perpage change
        $('.scores-perpage', me.$scoreBlock).change($.proxy(me.loadScores, me));
        $('.filter-scores', me.$scoreBlock).click($.proxy(me.loadScores, me));
        // bind share score click
        $('.btn-share-score').unbind().click(function(e){ 
            e.preventDefault();
            alertify.prompt(
                'Share',
                'Copy link under for sharing',
                $(e.currentTarget).attr('href'),
                null,
                null
            );
        });
        try {
            FB.XFBML.parse(me.$scoreBlock[0]);
        } catch (err) {}
    },
    loadVariations: function(pageNumber) {
        var me = this,
            data = {
                securitytoken: SECURITYTOKEN,
                action: 'variation',
                gameid: me.gameId,
                platformid: $('#platformid').val(),
                search: $('#search-variation').val(),
                page: me.sanitizePageNumber(pageNumber),
                perpage: $('#variation-perpage').val() || 10
            };
        if ($('#games-alltracksbelow').length)
        {
            data['alltracks'] = ($('#games-alltracksbelow').is(':checked') ? 1 : 0);
        }

        $.ajax({
            url: me.ajaxUrl,
            type: 'GET',
            cache: false,
            data: data,
            success: function(html) {
                // remove existing block
                $('#variationblock').remove();
                $('#gameblock').after(html);
                $('#filter-variation').click($.proxy(me.loadVariations, me));
                $('#search-variation').keypress(function(e){
                    if (e.keyCode == 13) { 
                       me.loadVariations();
                    }
                });
                $('#variation-perpage').unbind().change($.proxy(me.loadVariations, me));
                $('#games-alltracksbelow').unbind().change(function() {
                    me.loadVariations();
                });
                me.scrollTop('#variationblock');
                me.bindVariationActions();
            }
        });
    },
    bindVariationActions: function() {
        var me = this;
        $('#filter-variation').click($.proxy(me.loadVariations, me));
        $('#variation-perpage').unbind().change($.proxy(me.loadVariations, me));
        if (me.isShared()) { 
            me.$variation.addClass('active');
        } else { 
            // init popup menus
            init_popupmenus();
            me.bindScoreActions();
        }
        $('#variation-items .variation .rating-wrapper').each(function(){
            new TrackRating(this);
        });
	
		
		
        $('.btn-locked').unbind().click(function(e){
            e.preventDefault();

            alertify.alert(
                'LOCKED',
                LOCKED_PHRASE
            );
            $(".ajs-modal").animate({ scrollTop: 0 }, "slow");;
        });
		
		var viewdisputemsg = "Minimum Credibility Required to submit a dispute is 4000.";
		$('.popupdispute').click(function(e){
            e.preventDefault();

            alertify.alert(
                'LOCKED',
                viewdisputemsg
            );
            $(".ajs-modal").animate({ scrollTop: 0 }, "slow");;
        });
		var addfounder = '<form action="test.php"><lebel>Enter User IDs (comma separated values)</lebel></br><input size="30" id="founderid" type="text" name="addfounder" value=""></input><link href ="https://code.jquery.com/ui/1.10.4/themes/ui-lightness/jquery-ui.css"         rel = "stylesheet">      <script src = "https://code.jquery.com/jquery-1.10.2.js"></script>      <script src = "https://code.jquery.com/ui/1.10.4/jquery-ui.js"></script></form><script> $( "#founderid" ).autocomplete({	  source: function( request, response ) {				$.ajax({				  url: http://gd.geobytes.com/AutoCompleteCity",				  dataType: "jsonp",				  data: {					q: request.term				  },				  success: function( data ) {					response( data );				  }				});			  },			  minLength: 3,			  select: function( event, ui ) {				log( ui.item ?				  "Selected: " + ui.item.label :				  "Nothing selected, input was " + this.value);			  },			  open: function() {				$( this ).removeClass( "ui-corner-all" ).addClass( "ui-corner-top" );			  },			  close: function() {				$( this ).removeClass( "ui-corner-top" ).addClass( "ui-corner-all" );			  }			}); $(function() {            var availableTutorials  =  [  "ActionScript", "Boostrap",  "C",  "C++",           ];            $( "#founderid" ).autocomplete({               source: availableTutorials            });         });</script>'
			$('.btn-addfounder').unbind().click(function(e){
            e.preventDefault();
			/*  alertify.set({ labels: {
					ok     : "Add Founders",
					cancel : "Cancel"
				} }); */
		
			alertify.alert(
                'Add Founders',
                addfounder
            ).set('onok' , function(closeEvent){ 
					if($('#allfounder').val() != ''){
							$.ajax({
									url: me.ajaxUrl,
									type: 'GET',
									cache: false,
									data: {
										securitytoken: SECURITYTOKEN,
										action: 'addfounder',
										founderids: $('#allfounder').val(), 
										variationid: $('#foundervariationid').val(),
										//search: $('#search-game').val(),
										//page: me.sanitizePageNumber(pageNumber),
										//perpage: $('#games-perpage').val()
									},
									success: function(html) {
										// remove eixsting block
										//if (!me.gameId) {
										//	$('#variationblock, #scoresblock').remove();
										//}
										//$('#game-items').html(html);
										//me.scrollTop('#pagetitle');
										//me.bindGameActions();
										//me.bindScoreActions();
										alertify.success('Ok');
									}
								});
								
					}else{
						
						alertify.error('Required Field');
					}
			
			
			}
			
			
			);   
			
			//alertify.confirm().set({'label' :'Submit1', 'closable':false});
  
			alertify.alert().set('label', 'Submit');
			alertify.alert().set('closable', false);
			//alertify.alert().set({'onok'  function(closeEvent){ alert('submitted');alertify.success('Ok');}});
			// alertify.alert('a callback will be invoked on ok.').set('onok', function(closeEvent){ alertify.success('Ok');} );
            $(".ajs-modal").animate({ scrollTop: 0 }, "slow");;
        });
		
		 $('input[type="text"]').autocomplete({
			 			 
			  source: function( request, response ) {
		 console.log(this.bindings[0].attributes[3].value);
		 console.log(this.bindings[0].attributes);
		 var fid = this.bindings[0].attributes[3].value;
		 var newid = "#allfounder_"+fid;
		 //alert(newid);
		 //alert(fid);
				// console.log(this.bindings.['0'].attributes.data-value);
				// alert(this.bindings[0].class);
				$.ajax({ 
				  url: "scores/ajax.php",
				  dataType: "json",
				  data: { 
					 action: 'search_user',
					 fid: fid,
					 search: request.term
				  },
				  success: function( data ) {
					//response( data );
					 response($.map(data, function(item) {
						
                            return {
                                label: item.fullname + ' (' + item.city + ' ' + item.country + ')',
                                //label: item.username,
                                id: item.userid,
                                value: item.fullname,
                                fid: item.fid
                            };
                        }));
				  }
				});
			  },
			  minLength: 2,
			  select: function( event, ui ) {
				//log( ui.item ?
				 // "Selected: " + ui.item.label :
				 // "Nothing selected, input was " + this.value);
				 //me.founderid = ui.item.id;  
				 //console.log(newid);
				 var newid = "#allfounder_"+ui.item.fid;
				 $(newid).val(ui.item.id);
				
			  },
			  open: function() {
				$( this ).removeClass( "ui-corner-all" ).addClass( "ui-corner-top" );
			  },
			  close: function() {
				$( this ).removeClass( "ui-corner-top" ).addClass( "ui-corner-all" );
			  }
			});
			
			
		 $('.addingfounder').click(function() {
			  //alert('fsdfsdf');
			  //console.log(this.getAttribute('class'));
			  var classid = this.getAttribute('class');
			  
			  var fields = classid.split(' ');
			  console.log(this);
			  
			  var id = fields[2];
			  var eid = "#allfounder_" +id;
			  var vid = "#foundervariationid_" +id;
			  var cid = "." +id;
			  var fname = $(cid).val();
			  
			// alert(fname);
			 // alert($(eid).val());
			  if($(cid).val() != ''){
				$.ajax({
						url: me.ajaxUrl,
						type: 'GET',
						cache: false,
						dataType: "json",
						data: {
							securitytoken: SECURITYTOKEN,
							action: 'addfounder',
							founderids: $(eid).val(),
							foundername: fname,
							variationid: $(vid).val()
						},
						success: function(data) {
							// remove eixsting block
							alert(data.message);
							//console.log(data);
							$(cid).val('');
						}
					}); 
			  }else{
				  alert('Please Enter Username');
				  
			  }
		  }); 
        // bind show scores click
        $('.show-scores').click(function() {
            me.variationId = $(this).data('variation-id');
            me.$variation = $(this).parents('.variation');
            me.$scoreBlock = $('.scoresblock', me.$variation);
            if (!me.$variation.hasClass('active')) {
                me.loadScores();
            }
            $('.variation').not(me.$variation).removeClass('active');
            $('.scoresblock').not(me.$scoreBlock).slideUp();
            me.$scoreBlock.slideToggle();
            me.$variation.toggleClass('active');
            me.scrollTop('.scoresblock');
        });
        $('form.image-upload-form').each(function() {
            me.handleImages(this);
        });
        $('#games-alltracksf').click(function() {console.log('gg');console.log(me);
            me.loadGames();
        });
    },
    loadGames: function(pageNumber) {
        var me = this;
        me.loadingTo($('#game-items'));
        $('#variationblock, #scoresblock').remove();
        $('#player-scores').empty();
        $('.platform-logo').show();
        $.ajax({
            url: me.ajaxUrl,
            type: 'GET',
            cache: false,
            data: {
                securitytoken: SECURITYTOKEN,
                action: 'game',
                platformid: $('#platformid').val(),
                search: $('#search-game').val(),
                page: me.sanitizePageNumber(pageNumber),
                perpage: $('#games-perpage').val()
            },
            success: function(html) {
               // remove eixsting block
                if (!me.gameId) {
                    $('#variationblock, #scoresblock').remove();
                }
                $('#game-items').html(html);
                me.scrollTop('#pagetitle');
                me.bindGameActions();
                me.bindScoreActions();
            }
        });
    },
    bindGameActions: function() {
        var me = this;
        // bind view variation action
        $('.view-variation').unbind().click(function() {      
            me.gameId = $(this).data('game-id');
            me.loadVariations();        
            $('#scoresblock, #variationblock').remove();

        });
    },
    handleImages: function(form) {
        var me = this,
        $form = $(form),
        platformId = $form.data('platform-id'),
        gameId = $form.data('game-id'),
        $files = $('.fileinput input[type="file"]', $form);

        // handle delete images
        $('a.delete', $form).click(function(e){
            var $imageItem = $(this).closest('.image-item');
            $.ajax({
                url: me.ajaxDeleteImageUrl || me.ajaxUrl, // for extensible
                type: 'POST',
                dataType: 'json',
                data: {
                    action     : 'delete_image',
                    gameid     : gameId,
                    platformid : platformId,
                    image      : $imageItem.data('image')
                },
                success: function(data) {
                    if (data.error) {
                        alert(data.message);
                    } else {
                        for (var i in data) {
                            $('.image.'+i, $form).attr('src', data[i].file + '?' + Math.random());
                        }
                    }
                    $imageItem.removeClass('reported');
                }
            });
        });
        // handle report image
        $('a.report', $form).click(function(e) {
            var $imageItem = $(this).closest('.image-item');
            $.ajax({
                url: me.ajaxReportImageUrl || me.ajaxUrl, // for extensible
                type: 'POST',
                dataType: 'json',
                data: {
                    action     : 'report_image',
                    gameid     : gameId,
                    platformid : $('#platformid').val(),
                    image      : $imageItem.data('image')
                },
                success: function(data) {
                    if (data.message) {
                        alert(data.message);
                    }
                }
            });
        });
        // files changes
        $files.change(function() {
            var val = $(this).val(),
            ext = '.jpg,.gif,.jpeg,.png';

            if (val === '' || ext.indexOf(val.substr(-4).toLowerCase()) < 0) {
                alert('Please select an image file to upload. (' + ext + ')');
                $(this).val('');
                return false;
            }
            return true;
        });

        $form.find('.upload-image').click(function(e){
            e.preventDefault();
            var $f = $form;console.log($f);
            if ($f.prop('tagName') != 'FORM') {
                $f = $f.closest('form');
            }
            $f.ajaxSubmit({
                url: me.ajaxUploadImageUrl || me.ajaxUrl, // for extensible
                data: {
                    action     : 'upload_image',
                    platformid : $f.data('platform-id'),
                    gameid     : gameId
                },
                beforeSubmit: function() {
                    $files.each(function() {
                        if (this.value) {
                            var $fileInput = $(this).closest('.fileinput');
                            if ($fileInput.find('div.loading').length === 0) {
                                $fileInput.append('<div class="loading"></div>');
                                me.loadingTo($fileInput.find('div.loading'));
                            }
                        }
                    });
                },
                beforeUpload: function() {},
                uploadProgress: function(event, position, total, percentComplete) {},
                success: function() {},
                complete: function(xhr) {
                    var data = $.parseJSON(xhr.responseText);
                    if (data.error) {
                        alert(data.message);
                    } else {
                        for (var i in data) {
                            if (!data[i].error) {
                                $('.image.'+i, $form).attr('src', data[i].file + '?' + Math.random());
                            }
                        }
                    }
                    $files.each(function() {
                        $(this).val('');
                        var $fileInput = $(this).parents('.fileinput');
                        $fileInput.find('div.loading').empty();
                    });
                }
            });
        });
    }
};

	
 