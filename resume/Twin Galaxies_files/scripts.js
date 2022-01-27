+function($) {
    var isTouchBrowser = (function() {
        var _isTouchBrowserVal;
        try
        {
            _isTouchBrowserVal = !!('ontouchstart' in window);
        }
        catch(e)
        {
            _isTouchBrowserVal = !!(navigator.userAgent.indexOf('webOS') != -1);
        }

        return function()
        {
            return _isTouchBrowserVal;
        };
    })();

    var vBSocial = 
    {
        htmlspecialchars: function(string)
        {
            // first decode and then encode..
            string = $("<div/>").html((string || ''))
            .text()
            .replace(/&amp;/g, '&')
            .replace(/&quot;/g, '"');

            return $('<div/>').text(string).html();
        },

        getAjaxUrl: function(url)
        {
            if (typeof fetch_ajax_url !== 'function')
            {
                return url;
            }

            return fetch_ajax_url(url);
        },

        timeout: (function()
        {
            if (typeof vB_Default_Timeout == 'undefined')
            {
                return 15000;
            }

            return vB_Default_Timeout;
        })(),

        stringToNode: function(html_string)
        {
            if (typeof string_to_node !== 'function')
            {
                var node_container = document.createElement("div");
                node_container.innerHTML = html_string;

                var node = node_container.firstChild;
                while (node && node.nodeType != 1)
                {
                    node = node.nextSibling;
                }

                if (!node)
                {
                    return node_container.firstChild.cloneNode(true);
                }
                else
                {
                    return node.cloneNode(true);
                }
            }
            else
            {
                return string_to_node(html_string);
            }
        },

        fetchTags: function(parentobj, tag)
        {
            if (typeof fetch_tags !== 'function')
            {
                if (parentobj == null)
                {
                    return new Array();
                }
                else if (typeof parentobj.getElementsByTagName != 'undefined')
                {
                    return parentobj.getElementsByTagName(tag);
                }
                else if (parentobj.all && parentobj.all.tags)
                {
                    return parentobj.all.tags(tag);
                }
                else
                {
                    return new Array();
                }
            }

            return fetch_tags(parentobj, tag);
        },

        fetchTagCount: function(parentobj, tag)
        {
            return this.fetchTags(parentobj, tag).length;
        },

        errorHandler: function(ajax)
        {
            console.warn("AJAX Error: Status = %s: %s", ajax.status, ajax.statusText);
        },

        ajaxStart: function()
        {
            $('.vbsocial_progress').closest('li').removeClass('hidden');
        },

        ajaxComplete: function()
        {
            $('.vbsocial_progress').closest('li').addClass('hidden');
        },

        successCallBack: function(ajax)
        {
            if (ajax.responseXML)
            {
                // Check for error;
                if (vBSocial.fetchTagCount(ajax.responseXML, 'error'))
                {
                    alert(ajax.responseXML.getElementsByTagName("error")[0].firstChild.nodeValue);
                    return;
                }

                if (vBSocial.fetchTagCount(ajax.responseXML, 'html'))
                {
                    this.showSuccessMessage(ajax.responseXML.getElementsByTagName("html")[0].firstChild.nodeValue);
                }
                else if(vBSocial.fetchTagCount(ajax.responseXML, 'error_html'))
                {
                    this.showErrorMessage(ajax.responseXML.getElementsByTagName("error_html")[0].firstChild.nodeValue);
                }
            }
        },

        showSuccessMessage: function(message)
        {
            clearTimeout(window.AlertMessageTimer);

            $('#alert-message').html('<div class="alert alert-success fade in">' + 
                '<a href="#" class="close" data-dismiss="alert"><i class="fa fa-times"></i></a>' + 
                    '<strong>Success!</strong> ' + message + '</div>'
            ).css('display', 'block');

            window.AlertMessageTimer = setTimeout(function() {
                $('#alert-message').find('[data-dismiss="alert"]').trigger('click.bs.alert');
            }, 2000);
        },

        showErrorMessage: function(message)
        {
            clearTimeout(window.AlertMessageTimer);

            $('#alert-message').html('<div class="alert alert-danger fade in">' + 
                '<a href="#" class="close" data-dismiss="alert"><i class="fa fa-times"></i></a>' + 
                    '<strong>Failed!</strong> ' + message + '</div>'
            ).css('display', 'block');

            window.AlertMessageTimer = setTimeout(function() {
                $('#alert-message').find('[data-dismiss="alert"]').trigger('click.bs.alert');
            }, 2000);
        },

        toggleOnlineStatus: function(e)
        {
            var callback =
            {
                success: this.successCallBack,
                failure : this.errorHandler,
                timeout : this.timeout,
                scope: this
            };

            var postdata =
                SESSIONURL +
                "do=toggle_online_status" +
                "&securitytoken=" + SECURITYTOKEN;

            YAHOO.util.Connect.asyncRequest("POST", this.getAjaxUrl("/ajax.php"), callback, postdata);
        },

        friendRequestAction: function(element)
        {
            if (typeof element.ajaxreq != 'undefined' && YAHOO.util.Connect.isCallInProgress(element.ajaxreq))
            {
                return;
            }

            element = $(element);
            var callback =
            {
                success: this.successCallBack,
                failure : this.errorHandler,
                timeout : this.timeout,
                scope: this
            };

            var postdata =
                SESSIONURL +
                "do=vbs_friend_request" +
                "&securitytoken=" + SECURITYTOKEN +
                "&notification_id=" + element.parent().data('notification-id') + 
                "&action=" + element.data('action');

            element.get(0).ajaxreq = YAHOO.util.Connect.asyncRequest("POST", this.getAjaxUrl("/ajax.php"), callback, postdata);

            var A = element.closest('.notifications-list');
            element.closest('li').remove();
            
            if (A.length)
            {
                vBSocial.showEmptyMessage(A);
            }
        },

        markAllAsRead: function(element)
        {
            if (typeof element.ajaxreq != 'undefined' && YAHOO.util.Connect.isCallInProgress(element.ajaxreq))
            {
                return;
            }

            var callback =
            {
                success: this.successCallBack,
                failure : this.errorHandler,
                timeout : this.timeout,
                scope: this
            };

            var postdata =
                SESSIONURL +
                "do=vbs_mark_all_as_read" +
                "&securitytoken=" + SECURITYTOKEN;

            element.ajaxreq = YAHOO.util.Connect.asyncRequest("POST", this.getAjaxUrl("/ajax.php"), callback, postdata);

            // clear message list
            $('.pm-list').html('');
            this.showEmptyMessage($('.pm-list'));
        },

        /* used to show notification empty block of vbs-menu*/
        showEmptyMessage: function(A)
        {
            if (A && !A.find('.vbs-notification').length)
            {
                A.closest('.widget-notifications').find('.notfications-empty').css('display', 'block');
            }
        }
    };

    /* for rss feeds */
    vBSocial.Feed_Loader = function(A)
    {
        if (typeof vbsocial_feed_urls == 'undefined')
        {
            return;
        }

        this.urls = vbsocial_feed_urls.split(" ");
        this.init_menu = false;
        this.init_scroll = false;
        this.max_results = 10;
        this.timer = null;

        this.loader = A.closest('.widget-notifications').find('.notifications-loader');
        this.j = A;
    };

    vBSocial.Feed_Loader.prototype = 
    {
        error_handler: function(jqXHR, textStatus, errorThrown)
        {
            console.warn("AJAX Error: Status = %s: %s", textStatus, errorThrown);
        },

        init: function()
        {
            this.init_menu = true;
            var A = this;

            var successCallBack = function(data) 
            {
                A.update_menu(data);
            };

            for(var i=0;i<this.urls.length;i++)
            {
                if (this.urls[i] == '')
                {
                    continue;
                }

                this.loader.css('display', 'block');

                $.ajax({
                    type: 'GET',
                    url: "http://ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=" + this.max_results + "&q=" + this.urls[i],
                    data: {},
                    success: successCallBack,
                    error: this.error_handler,
                    timeout: vBSocial.timeout,
                    dataType: 'jsonp' // for cross-domain request
                });
            }

            var timeoutCallback = function()
            {
                A.loader.css('display', 'none'); 
                vBSocial.showEmptyMessage(A.j);
            };

            this.timer = setTimeout(timeoutCallback, 15000); 
        },

        update: function(refresh)
        {
            if (typeof refresh == 'undefined')
            {
                return;
            }

            /*this.j.html('');
            this.j.closest('.widget-notifications').find('.notfications-empty').css('display', 'none');
            this.loader.css('display', 'block');*/
        },

        add_node_to_list: function(node)
        {
            this.j.append(node);

            if (!this.init_scroll && this.j.height() >= slimScrollHeight) 
            {
                this.init_scroll = true;
                this.j.slimScroll(slimScrollSetting);
            }
        },

        update_menu: function(data)
        {
            if (data.responseData.feed && data.responseData.feed.entries)
            {
                var A = this,
                    maxResults = 10;

                $.each(data.responseData.feed.entries, function (i, e) 
                {
                    if (i >= maxResults || !e.title || !e.link)
                    {
                        return;
                    }

                    var temp = $('<li class="vbs-notification clearfix no-icon" />'),
                        title = '<a target="_blank" href="' + vBSocial.htmlspecialchars(e.link) + '"><strong>' + 
                            vBSocial.htmlspecialchars(e.title.substring(0, 80)) + '</strong></a>',
                        description = '';

                    if (e.description)
                    {
                        description = '<p>' + vBSocial.htmlspecialchars(e.description.substring(0, 140)) + '</p>';
                    }
                    else if(e.contentSnippet)
                    {
                        description = '<p>' + vBSocial.htmlspecialchars(e.contentSnippet.substring(0, 140)) + '</p>';
                    }

                    temp.append('<div class="notification-description">' + title + description + '</div>');

                    try 
                    {
                        temp.append('<div class="notification-ago">' + new Date(e.publishedDate).toDateString() + '</div>');
                    }
                    catch(e) {}

                    A.add_node_to_list(temp);
                });

                this.loader.css('display', 'none');
            }
        }
    };

    /* for alerts & messages */
    vBSocial.Menu = function (A)
    {
        if (!(typeof vb_disable_ajax == 'undefined' || vb_disable_ajax < 2))
        {
            return;
        }

        this.init_menu = false;
        this.ajaxreq = null;
        this.init_scroll = false;
        this.idle = false;
        this.idletimer = null;
        this.newerthan = 0; /* used for messages */
        
        /* jquery objects */
        this.j = A;
        this.label = this.j.closest('.vbs-menu').find('.dropdown-toggle .label');
        this.loader = this.j.closest('.widget-notifications').find('.notifications-loader');

        YAHOO.util.Event.addListener(document, "mousemove", this.reset_idle_timer, this);
        this.start_update_timer();
    };

    vBSocial.Menu.prototype = 
    {
        init: function()
        {
            this.init_menu = true;

            var callback =
            {
                failure : vBSocial.errorHandler,
                timeout : vBSocial.timeout,
                success : this.update_menu,
                scope   : this,
                argument: 
                {
                    "updatetype": "init",
                    "method": "append"
                }
            };

            var postdata =
                SESSIONURL +
                "do=load_vbs_menu" +
                "&securitytoken=" + SECURITYTOKEN +
                "&type=" + this.j.data('type');

            this.ajaxreq = YAHOO.util.Connect.asyncRequest("POST", vBSocial.getAjaxUrl("/ajax.php"), callback, postdata);
        },

        update: function()
        {
            if (YAHOO.util.Connect.isCallInProgress(this.ajaxreq) || isNaN(parseInt(this.label.html())) || parseInt(this.label.html()) < 1)
            {
                return;
            }

            if (this.init_scroll)
            {
                // scroll to top
                this.j.slimScroll({ scrollTo: 1, animate: true });
                this.j.parent().find('.slimScrollBar').css('top', '0px');
            }

            var callback =
            {
                failure : vBSocial.errorHandler,
                timeout : vBSocial.timeout,
                success : this.update_menu,
                scope   : this,
                argument: 
                {
                    "updatetype": "update",
                    "method": "prepend"
                }
            };

            var postdata =
                SESSIONURL +
                "do=load_vbs_menu" +
                "&securitytoken=" + SECURITYTOKEN +
                "&type=" + this.j.data('type') +
                "&onlynew=1";

            if (this.newerthan)
            {
                postdata += "&newerthan=" + this.newerthan;
            }

            this.loader.css('display', 'block');
            this.j.closest('.widget-notifications').find('.notfications-empty').css('display', 'none');

            this.ajaxreq = YAHOO.util.Connect.asyncRequest("POST", vBSocial.getAjaxUrl("/ajax.php"), callback, postdata);
        },

        check_for_new_activity: function()
        {
            if (this.idle || YAHOO.util.Connect.isCallInProgress(this.ajaxreq))
            {
                return;
            }

            var callback =
            {
                failure : vBSocial.errorHandler,
                timeout : vBSocial.timeout,
                success : this.update_count,
                scope   : this
            };

            var postdata =
                SESSIONURL +
                "do=vbs_menu_counter" +
                "&securitytoken=" + SECURITYTOKEN +
                "&type=" + this.j.data('type');

            if (this.newerthan)
            {
                postdata += "&newerthan=" + this.newerthan;
            }

            this.ajaxreq = YAHOO.util.Connect.asyncRequest("POST", vBSocial.getAjaxUrl("/ajax.php"), callback, postdata);
        },

        reset_idle_timer: function(e, A)
        {
            A.idle = false;

            clearTimeout(A.idletimer);
            A.idletimer = setTimeout(function(){A.go_idle();}, 5 * 60000); // 5 minutes
        },

        go_idle: function()
        {
            this.idle = true;
        },

        start_update_timer: function()
        {
            var A = this;
            setInterval(function(){A.check_for_new_activity();}, 60000); // 1 minute
        },

        update_count: function(ajax)
        {
            if (ajax.responseXML && vBSocial.fetchTagCount(ajax.responseXML, 'count'))
            {
                var count = ajax.responseXML.getElementsByTagName("count")[0].firstChild.nodeValue;
                this.label.html(count > 0 ? count : '');

                if (count > 0 && this.j.closest('.dropdown.vbs-menu').hasClass('open'))
                {
                    this.ajaxreq = null;
                    this.update();
                }
            }
        },

        add_node_to_list: function(node, method, ibnode)
        {
            if (method == "append")
            {
                this.j.append(node);
            }
            else
            {
                if (ibnode.length)
                {
                    this.j.get(0).insertBefore(node, ibnode.get(0));
                }
                else
                {
                    this.j.prepend(node);
                }
            }

            if (!this.init_scroll && this.j.height() >= slimScrollHeight) 
            {
                this.init_scroll = true;
                this.j.slimScroll(slimScrollSetting);
            }
        },

        update_menu: function(ajax)
        {
            if (ajax.responseXML)
            {
                // Check for error;
                if (vBSocial.fetchTagCount(ajax.responseXML, 'error'))
                {
                    // do nothing
                    alert(ajax.responseXML.getElementsByTagName("error")[0].firstChild.nodeValue);
                    return;
                }

                this.loader.css('display', 'none');
                
                if (!vBSocial.fetchTagCount(ajax.responseXML, 'nada'))
                {
                    var bits = ajax.responseXML.getElementsByTagName("bit");
                    if (bits.length)
                    {
                        for (var i = 0; i < bits.length; i++)
                        {
                            if (bits[i].firstChild)
                            {
                                var node = vBSocial.stringToNode(bits[i].firstChild.nodeValue);
                                // used for new notifications
                                var ib = this.j.find('.vbs-notification').first();

                                this.add_node_to_list(node, ajax.argument.method, ib);
                            }
                        }

                        this.remove_new();
                    }
                }

                if (vBSocial.fetchTagCount(ajax.responseXML, 'count'))
                {
                    var count = ajax.responseXML.getElementsByTagName("count")[0].firstChild.nodeValue;
                    this.label.html(count > 0 ? count : '');
                }
                else
                {
                    this.label.html('');
                }

                if (vBSocial.fetchTagCount(ajax.responseXML, 'newerthan'))
                {
                    this.newerthan = ajax.responseXML.getElementsByTagName("newerthan")[0].firstChild.nodeValue;
                }

                vBSocial.showEmptyMessage(this.j);
            }
        },

        remove_new: function()
        {
            setTimeout(function(j) { return function() { j.find('.new').removeClass('new'); } }(this.j), 5000);
        }
    };

    // To prevent unexpected menu close
    $(document).on('click', '.bootstrap .navbar .dropdown-menu', function(e) {e.stopPropagation();});

    //Toggle fixing (top, bottom)
    $('.toggle_fixing').on('click', function(e) {
        if ( $('#main_navbar').hasClass('navbar-fixed-top')) {
            $('#main_navbar').removeClass('navbar-fixed-top').addClass('navbar-fixed-bottom');
            $('.above_body').css('margin-top', '0px');
        } else {
            $('#main_navbar').removeClass('navbar-fixed-bottom').addClass('navbar-fixed-top');
            $('.above_body').css('margin-top', navbarHeight + 'px');
            $(window).scroll();
        }

        $(this).children('i').toggleClass('fa-chevron-down fa-chevron-up');
    });

    // Tabs on hover
   /* if (!isTouchBrowser())
    {
        $('.dropdown-hover').mouseenter(function(){
            if ($(this).hasClass('open'))
            {
                return;
            }

            this.hover_timeout = setTimeout(function(A) { 
                return function() 
                { 
                    $(A).find('a.dropdown-toggle').first().trigger('click.bs.dropdown');
                }
            }(this), 300); // 300ms delay onhover..

        }).click(function(e) { 
            e.stopPropagation(); 
        }).mouseleave(function() {
            if (typeof this.hover_timeout != 'undefined' && this.hover_timeout)
            {
                clearTimeout(this.hover_timeout);
            }
        });

        $(document).on('click', function(e) {
            $('.dropdown-hover').removeClass('open');
        });
    }*/



    /*else
    {
        // for touch browsers...
        $('.dropdown-hover a.dropdown-toggle').on('click', function(e) {
            e.stopPropagation();
            e.preventDefault();
               
            $(this).trigger('click.bs.dropdown');
        });
    }
*/
    /* init vbs menu */
    $(".vbs-menu").each(function(i) {
        var list = $(this).find('.notifications-list');
        if (!list.length || typeof list.data('type') == 'undefined') 
        {
            return;
        }

        this.vbs_menu = (list.data('type') == 'feed' ? new vBSocial.Feed_Loader(list) : new vBSocial.Menu(list));
        if (typeof this.vbs_menu !== 'object')
        {
            return;
        }

        $(this).on('shown.bs.dropdown', function() {
            if (!this.vbs_menu.init_menu) {
                this.vbs_menu.init();
            }
            else {
                this.vbs_menu.update();
            }
        });
    });

    // toggle online status
    $('#change_online_status').on('change', function(e) {
        vBSocial.toggleOnlineStatus(e);
    });

    // friend request/accept 
    $(document).on('click', '.friend-request-action a', function(e){
        e.preventDefault();
        vBSocial.friendRequestAction(this);
    });

    // mark all messages as read
    $(document).on('click', '#markAllAsRead', function(e){
        e.preventDefault();
        vBSocial.markAllAsRead(this);
    });

    $(document).on('click', '.vbs-notification', function(e){
        var href = $(this).data('href');
        if (href)
        {
            window.location.href = href.indexOf('http://') == -1 ? BBURL + '/' + href : href;
        }
    });

    $(document).on('click', '.vbs-notification a', function(e){
        e.stopPropagation();
    });

    $('#vBSocialForumsTab').on('shown.bs.dropdown', function() {
        $container = $(this).find('.dropdown-menu > ul');
        if ($container.height() >= slimScrollHeight)
        {
            $container.slimScroll( slimScrollSetting ); 
        }
    });

    // display loader icon on every ajax requests...
    YAHOO.util.Connect.startEvent.subscribe(vBSocial.ajaxStart);
    YAHOO.util.Connect.completeEvent.subscribe(vBSocial.ajaxComplete);
}(jQuery);