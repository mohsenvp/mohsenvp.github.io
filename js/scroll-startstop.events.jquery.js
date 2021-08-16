(function(){
    
    var special = jQuery.event.special,
        uid1 = 'D' + (+new Date()),
        uid2 = 'D' + (+new Date() + 1);
        
    special.scrollstart = {
        setup: function() {
            
            var timer,
                handler =  function(evt) {
                    
                    var _self = this,
                        _args = arguments;
                    
                    if (timer) {
                        clearTimeout(timer);
                    } else {
                        evt.type = 'scrollstart';
                        jQuery.event.handle.apply(_self, _args);
                    }
                    
                    timer = setTimeout( function(){
                        timer = null;
                    }, special.scrollstop.latency);
                    
                };
            
            jQuery(this).bind('scroll', handler).data(uid1, handler);
            
        },
        teardown: function(){
            jQuery(this).unbind( 'scroll', jQuery(this).data(uid1) );
        }
    };
    
    special.scrollstop = {
        latency: 300,
        setup: function() {
            
            var timer,
                    handler = function(evt) {
                    
                    var _self = this,
                        _args = arguments;
                    
                    if (timer) {
                        clearTimeout(timer);
                    }
                    
                    timer = setTimeout( function(){
                        
                        timer = null;
                        evt.type = 'scrollstop';
                        jQuery.event.handle.apply(_self, _args);
                        
                    }, special.scrollstop.latency);
                    
                };
            
            jQuery(this).bind('scroll', handler).data(uid2, handler);
            
        },
        teardown: function() {
            jQuery(this).unbind( 'scroll', jQuery(this).data(uid2) );
        }
    };

})();

$(window).load(function () {
    var $el = $('#about-scroll').jScrollPane({
        verticalGutter: 10
    }),
					extensionPlugin = {

					    extPluginOpts: {
					        mouseLeaveFadeSpeed: 1000,
					        hovertimeout_t: 2000,
					        useTimeout: true,
					        deviceWidth: 980
					    },
					    hovertimeout: null,
					    isScrollbarHover: false, 
					    elementtimeout: null, 
					    isScrolling: false, 
					    addHoverFunc: function () {
					        if ($(window).width() <= this.extPluginOpts.deviceWidth) return false;

					        var instance = this;
					        $.fn.jspmouseenter = $.fn.show;
					        $.fn.jspmouseleave = $.fn.fadeOut;
					        var $vBar = this.getContentPane().siblings('.jspVerticalBar').hide();
					        $el.bind('mouseenter.jsp', function () {
					            $vBar.stop(true, true).jspmouseenter();

					            if (!instance.extPluginOpts.useTimeout) return false;
					            clearTimeout(instance.hovertimeout);
					            instance.hovertimeout = setTimeout(function () {
					                if (!instance.isScrolling)
					                    $vBar.stop(true, true).jspmouseleave(instance.extPluginOpts.mouseLeaveFadeSpeed || 0);
					            }, instance.extPluginOpts.hovertimeout_t);


					        }).bind('mouseleave.jsp', function () {
					            if (!instance.extPluginOpts.useTimeout)
					                $vBar.stop(true, true).jspmouseleave(instance.extPluginOpts.mouseLeaveFadeSpeed || 0);
					            else {
					                clearTimeout(instance.elementtimeout);
					                if (!instance.isScrolling)
					                    $vBar.stop(true, true).jspmouseleave(instance.extPluginOpts.mouseLeaveFadeSpeed || 0);
					            }

					        });

					        if (this.extPluginOpts.useTimeout) {

					            $el.bind('scrollstart.jsp', function () {
					                clearTimeout(instance.hovertimeout);
					                instance.isScrolling = true;
					                $vBar.stop(true, true).jspmouseenter();

					            }).bind('scrollstop.jsp', function () {
					                clearTimeout(instance.hovertimeout);
					                instance.isScrolling = false;
					                instance.hovertimeout = setTimeout(function () {
					                    if (!instance.isScrollbarHover)
					                        $vBar.stop(true, true).jspmouseleave(instance.extPluginOpts.mouseLeaveFadeSpeed || 0);
					                }, instance.extPluginOpts.hovertimeout_t);

					            });
					            var $vBarWrapper = $('<div/>').css({
					                position: 'absolute',
					                left: $vBar.css('left'),
					                top: $vBar.css('top'),
					                right: $vBar.css('right'),
					                bottom: $vBar.css('bottom'),
					                width: $vBar.width(),
					                height: $vBar.height()
					            }).bind('mouseenter.jsp', function () {

					                clearTimeout(instance.hovertimeout);
					                clearTimeout(instance.elementtimeout);

					                instance.isScrollbarHover = true;							
					                instance.elementtimeout = setTimeout(function () {
					                    $vBar.stop(true, true).jspmouseenter();
					                }, 100);

					            }).bind('mouseleave.jsp', function () {
					                clearTimeout(instance.hovertimeout);
					                instance.isScrollbarHover = false;
					                instance.hovertimeout = setTimeout(function () {
					                    if (!instance.isScrolling)
					                        $vBar.stop(true, true).jspmouseleave(instance.extPluginOpts.mouseLeaveFadeSpeed || 0);
					                }, instance.extPluginOpts.hovertimeout_t);

					            });

					            $vBar.wrap($vBarWrapper);

					        }

					    }

					},
					jspapi = $el.data('jsp');
    $.extend(true, jspapi, extensionPlugin);
    jspapi.addHoverFunc();

});

$(window).load(function () {
    var $el2 = $('#resume-scroll').jScrollPane({
        verticalGutter: 10
    }),
					extensionPlugin = {

					    extPluginOpts: {
					        mouseLeaveFadeSpeed: 1000,
					        hovertimeout_t: 2000,
					        useTimeout: true,
					        deviceWidth: 980
					    },
					    hovertimeout: null,
					    isScrollbarHover: false,
					    elementtimeout: null,
					    isScrolling: false,
					    addHoverFunc: function () {
					        if ($(window).width() <= this.extPluginOpts.deviceWidth) return false;

					        var instance = this;
					        $.fn.jspmouseenter = $.fn.show;
					        $.fn.jspmouseleave = $.fn.fadeOut;
					        var $vBar = this.getContentPane().siblings('.jspVerticalBar').hide();
					        $el2.bind('mouseenter.jsp', function () {
					            $vBar.stop(true, true).jspmouseenter();

					            if (!instance.extPluginOpts.useTimeout) return false;
					            clearTimeout(instance.hovertimeout);
					            instance.hovertimeout = setTimeout(function () {
					                if (!instance.isScrolling)
					                    $vBar.stop(true, true).jspmouseleave(instance.extPluginOpts.mouseLeaveFadeSpeed || 0);
					            }, instance.extPluginOpts.hovertimeout_t);


					        }).bind('mouseleave.jsp', function () {
					            if (!instance.extPluginOpts.useTimeout)
					                $vBar.stop(true, true).jspmouseleave(instance.extPluginOpts.mouseLeaveFadeSpeed || 0);
					            else {
					                clearTimeout(instance.elementtimeout);
					                if (!instance.isScrolling)
					                    $vBar.stop(true, true).jspmouseleave(instance.extPluginOpts.mouseLeaveFadeSpeed || 0);
					            }

					        });

					        if (this.extPluginOpts.useTimeout) {

					            $el2.bind('scrollstart.jsp', function () {
					                clearTimeout(instance.hovertimeout);
					                instance.isScrolling = true;
					                $vBar.stop(true, true).jspmouseenter();

					            }).bind('scrollstop.jsp', function () {
					                clearTimeout(instance.hovertimeout);
					                instance.isScrolling = false;
					                instance.hovertimeout = setTimeout(function () {
					                    if (!instance.isScrollbarHover)
					                        $vBar.stop(true, true).jspmouseleave(instance.extPluginOpts.mouseLeaveFadeSpeed || 0);
					                }, instance.extPluginOpts.hovertimeout_t);

					            });
					            var $vBarWrapper = $('<div/>').css({
					                position: 'absolute',
					                left: $vBar.css('left'),
					                top: $vBar.css('top'),
					                right: $vBar.css('right'),
					                bottom: $vBar.css('bottom'),
					                width: $vBar.width(),
					                height: $vBar.height()
					            }).bind('mouseenter.jsp', function () {

					                clearTimeout(instance.hovertimeout);
					                clearTimeout(instance.elementtimeout);

					                instance.isScrollbarHover = true;							
					                instance.elementtimeout = setTimeout(function () {
					                    $vBar.stop(true, true).jspmouseenter();
					                }, 100);

					            }).bind('mouseleave.jsp', function () {
					                clearTimeout(instance.hovertimeout);
					                instance.isScrollbarHover = false;
					                instance.hovertimeout = setTimeout(function () {
					                    if (!instance.isScrolling)
					                        $vBar.stop(true, true).jspmouseleave(instance.extPluginOpts.mouseLeaveFadeSpeed || 0);
					                }, instance.extPluginOpts.hovertimeout_t);

					            });

					            $vBar.wrap($vBarWrapper);

					        }

					    }

					},
					jspapi = $el2.data('jsp');
    $.extend(true, jspapi, extensionPlugin);
    jspapi.addHoverFunc();

});

$(window).load(function () {
    var $el3 = $('#portfolio-scroll').jScrollPane({
        verticalGutter: 10
    }),
					extensionPlugin = {

					    extPluginOpts: {
					        mouseLeaveFadeSpeed: 1000,
					        hovertimeout_t: 2000,
					        useTimeout: true,
					        deviceWidth: 980
					    },
					    hovertimeout: null,
					    isScrollbarHover: false,
					    elementtimeout: null, 
					    isScrolling: false, 
					    addHoverFunc: function () {
					        if ($(window).width() <= this.extPluginOpts.deviceWidth) return false;

					        var instance = this;
					        $.fn.jspmouseenter = $.fn.show;
					        $.fn.jspmouseleave = $.fn.fadeOut;
					        var $vBar = this.getContentPane().siblings('.jspVerticalBar').hide();
					        $el3.bind('mouseenter.jsp', function () {
					            $vBar.stop(true, true).jspmouseenter();

					            if (!instance.extPluginOpts.useTimeout) return false;
					            clearTimeout(instance.hovertimeout);
					            instance.hovertimeout = setTimeout(function () {
					                if (!instance.isScrolling)
					                    $vBar.stop(true, true).jspmouseleave(instance.extPluginOpts.mouseLeaveFadeSpeed || 0);
					            }, instance.extPluginOpts.hovertimeout_t);


					        }).bind('mouseleave.jsp', function () {
					            if (!instance.extPluginOpts.useTimeout)
					                $vBar.stop(true, true).jspmouseleave(instance.extPluginOpts.mouseLeaveFadeSpeed || 0);
					            else {
					                clearTimeout(instance.elementtimeout);
					                if (!instance.isScrolling)
					                    $vBar.stop(true, true).jspmouseleave(instance.extPluginOpts.mouseLeaveFadeSpeed || 0);
					            }

					        });

					        if (this.extPluginOpts.useTimeout) {

					            $el3.bind('scrollstart.jsp', function () {
					                clearTimeout(instance.hovertimeout);
					                instance.isScrolling = true;
					                $vBar.stop(true, true).jspmouseenter();

					            }).bind('scrollstop.jsp', function () {
					                clearTimeout(instance.hovertimeout);
					                instance.isScrolling = false;
					                instance.hovertimeout = setTimeout(function () {
					                    if (!instance.isScrollbarHover)
					                        $vBar.stop(true, true).jspmouseleave(instance.extPluginOpts.mouseLeaveFadeSpeed || 0);
					                }, instance.extPluginOpts.hovertimeout_t);

					            });

					            var $vBarWrapper = $('<div/>').css({
					                position: 'absolute',
					                left: $vBar.css('left'),
					                top: $vBar.css('top'),
					                right: $vBar.css('right'),
					                bottom: $vBar.css('bottom'),
					                width: $vBar.width(),
					                height: $vBar.height()
					            }).bind('mouseenter.jsp', function () {

					                clearTimeout(instance.hovertimeout);
					                clearTimeout(instance.elementtimeout);

					                instance.isScrollbarHover = true;							
					                instance.elementtimeout = setTimeout(function () {
					                    $vBar.stop(true, true).jspmouseenter();
					                }, 100);

					            }).bind('mouseleave.jsp', function () {
					                clearTimeout(instance.hovertimeout);
					                instance.isScrollbarHover = false;
					                instance.hovertimeout = setTimeout(function () {
					                    if (!instance.isScrolling)
					                        $vBar.stop(true, true).jspmouseleave(instance.extPluginOpts.mouseLeaveFadeSpeed || 0);
					                }, instance.extPluginOpts.hovertimeout_t);

					            });

					            $vBar.wrap($vBarWrapper);

					        }

					    }

					},
					jspapi = $el3.data('jsp');
    $.extend(true, jspapi, extensionPlugin);
    jspapi.addHoverFunc();

});