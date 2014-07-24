jQuery(function(){
	//productlist
	var s='<div id="ca-container" class="ca-container"><div class="ca-wrapper">';
		s+='<div class="ca-item ca-item-0">\
					<a href="Product.html" class="ca-img">\
					<img title="智能控制主机" src="wp-content/uploads/2012/product-1.jpg">\
					</a>\
					<div class="ca-t">智能控制主机</div>\
			</div>';	
		s+='<div class="ca-item ca-item-1">\
					<a href="Product_1.html" class="ca-img">\
					<img title="智能灯光控制面板" src="wp-content/uploads/2012/product-2.jpg">\
					</a>\
					<div class="ca-t">智能灯光控制面板</div>\
			</div>';
		s+='<div class="ca-item ca-item-2">\
					<a href="Product_2.html" class="ca-img">\
					<img title="智能电器控制器" src="wp-content/uploads/2012/product-3.jpg">\
					</a>\
					<div class="ca-t">智能电器控制器</div>\
			</div>';
		s+='<div class="ca-item ca-item-3">\
					<a href="Product_3.html" class="ca-img">\
					<img title="智能电动窗帘" src="wp-content/uploads/2012/product-4.jpg">\
					</a>\
					<div class="ca-t">智能电动窗帘</div>\
			</div>';
		s+='<div class="ca-item ca-item-4">\
					<a href="Product_4.html" class="ca-img">\
					<img title="智能控制软件" src="wp-content/uploads/2012/product-5.jpg">\
					</a>\
					<div class="ca-t">智能控制软件</div>\
			</div>';
		s+='<div class="ca-item ca-item-5">\
					<a href="Product_5.html" class="ca-img">\
					<img title="智能背景音乐主机" src="wp-content/uploads/2012/product-6.jpg">\
					</a>\
					<div class="ca-t">智能背景音乐主机</div>\
			</div>';
		s+='<div class="ca-item ca-item-6">\
					<a href="Product_5.html" class="ca-img">\
					<img title="智能背景音乐主机" src="wp-content/uploads/2012/product-6-2.jpg">\
					</a>\
					<div class="ca-t">智能背景音乐主机</div>\
			</div>';
		s+='<div class="ca-item ca-item-7">\
					<a href="Product_6.html" class="ca-img">\
					<img title="智能影音共享主机" src="wp-content/uploads/2012/product-7.jpg">\
					</a>\
					<div class="ca-t">智能影音共享主机</div>\
			</div>';
		s+='<div class="ca-item ca-item-8">\
					<a href="Product_6.html" class="ca-img">\
					<img title="智能影音共享主机" src="wp-content/uploads/2012/product-7-2.jpg">\
					</a>\
					<div class="ca-t">智能影音共享主机</div>\
			</div>';
		s+='<div class="ca-item ca-item-9">\
					<a href="Product_7.html" class="ca-img">\
					<img title="绿色WOC无线网络覆盖" src="wp-content/uploads/2012/product-8.jpg">\
					</a>\
					<div class="ca-t">绿色WOC无线网络覆盖</div>\
			</div>';
		s+='<div class="ca-item ca-item-10">\
					<a href="Product_7.html" class="ca-img">\
					<img title="绿色WOC无线网络覆盖" src="wp-content/uploads/2012/product-8-2.jpg">\
					</a>\
					<div class="ca-t">绿色WOC无线网络覆盖</div>\
			</div>';
		s+='<div class="ca-item ca-item-11">\
					<a href="Product_8.html" class="ca-img">\
					<img title="趣味互动投影游戏" src="wp-content/uploads/2012/product-9-5.jpg">\
					</a>\
					<div class="ca-t">趣味互动投影游戏</div>\
			</div>';
	s+="</div></div>";
	var which=window.location.href.match(/product_?(\d)?\.html$/i);
	if(which&&which[1]){
		which=which[1]
	}else{
		which=0
	};
	if(jQuery("#productlisthead").html()=="") jQuery("#productlisthead").html('<img src="wp-content/uploads/2012/product-'+(++which)+'.jpg">')
	//productlisthead
	jQuery("#productlist").html(s)
	window.ca=jQuery('#ca-container').contentcarousel();
});
(function($) {
	var	aux		= {
			// navigates left / right
			navigate	: function( dir, $el, $wrapper, opts, cache ) {
				
				var scroll		= opts.scroll,
					factor		= 1,
					idxClicked	= 0;
					
				if( cache.expanded ) {
					scroll		= 1; // scroll is always 1 in full mode
					factor		= 3; // the width of the expanded item will be 3 times bigger than 1 collapsed item	
					idxClicked	= cache.idxClicked; // the index of the clicked item
				}
				
				// clone the elements on the right / left and append / prepend them according to dir and scroll
				if( dir === 1 ) {
					$wrapper.find('div.ca-item:lt(' + scroll + ')').each(function(i) {
						$(this).clone(true).css( 'left', ( cache.totalItems - idxClicked + i ) * cache.itemW * factor + 'px' ).appendTo( $wrapper );
					});
				}
				else {
					var $first	= $wrapper.children().eq(0);
					
					$wrapper.find('div.ca-item:gt(' + ( cache.totalItems  - 1 - scroll ) + ')').each(function(i) {
						// insert before $first so they stay in the right order
						$(this).clone(true).css( 'left', - ( scroll - i + idxClicked ) * cache.itemW * factor + 'px' ).insertBefore( $first );
					});
				}
				
				// animate the left of each item
				// the calculations are dependent on dir and on the cache.expanded value
				$wrapper.find('div.ca-item').each(function(i) {
					var $item	= $(this);
					$item.stop().animate({
						left	:  ( dir === 1 ) ? '-=' + ( cache.itemW * factor * scroll ) + 'px' : '+=' + ( cache.itemW * factor * scroll ) + 'px'
					}, opts.sliderSpeed, opts.sliderEasing, function() {
						if( ( dir === 1 && $item.position().left < - idxClicked * cache.itemW * factor ) || ( dir === -1 && $item.position().left > ( ( cache.totalItems - 1 - idxClicked ) * cache.itemW * factor ) ) ) {
							// remove the item that was cloned
							$item.remove();
						}						
						cache.isAnimating	= false;
					});
				});
				
			},
			// opens an item (animation) -> opens all the others
			openItem	: function( $wrapper, $item, opts, cache ) {
				cache.idxClicked	= $item.index();
				// the item's position (1, 2, or 3) on the viewport (the visible items) 
				cache.winpos		= aux.getWinPos( $item.position().left, cache );
				$wrapper.find('div.ca-item').not( $item ).hide();
				$item.find('div.ca-content-wrapper').css( 'left', cache.itemW + 'px' ).stop().animate({
					width	: cache.itemW * 2 + 'px',
					left	: cache.itemW + 'px'
				}, opts.itemSpeed, opts.itemEasing)
				.end()
				.stop()
				.animate({
					left	: '0px'
				}, opts.itemSpeed, opts.itemEasing, function() {
					cache.isAnimating	= false;
					cache.expanded		= true;
					
					aux.openItems( $wrapper, $item, opts, cache );
				});
						
			},
			// opens all the items
			openItems	: function( $wrapper, $openedItem, opts, cache ) {
				var openedIdx	= $openedItem.index();
				
				$wrapper.find('div.ca-item').each(function(i) {
					var $item	= $(this),
						idx		= $item.index();
					
					if( idx !== openedIdx ) {
						$item.css( 'left', - ( openedIdx - idx ) * ( cache.itemW * 3 ) + 'px' ).show().find('div.ca-content-wrapper').css({
							left	: cache.itemW + 'px',
							width	: cache.itemW * 2 + 'px'
						});
						
						// hide more link
						aux.toggleMore( $item, false );
					}
				});
			},
			// show / hide the item's more button
			toggleMore	: function( $item, show ) {
				( show ) ? $item.find('a.ca-more').show() : $item.find('a.ca-more').hide();	
			},
			// close all the items
			// the current one is animated
			closeItems	: function( $wrapper, $openedItem, opts, cache ) {
				var openedIdx	= $openedItem.index();
				
				$openedItem.find('div.ca-content-wrapper').stop().animate({
					width	: '0px'
				}, opts.itemSpeed, opts.itemEasing)
				.end()
				.stop()
				.animate({
					left	: cache.itemW * ( cache.winpos - 1 ) + 'px'
				}, opts.itemSpeed, opts.itemEasing, function() {
					cache.isAnimating	= false;
					cache.expanded		= false;
				});
				
				// show more link
				aux.toggleMore( $openedItem, true );
				
				$wrapper.find('div.ca-item').each(function(i) {
					var $item	= $(this),
						idx		= $item.index();
					
					if( idx !== openedIdx ) {
						$item.find('div.ca-content-wrapper').css({
							width	: '0px'
						})
						.end()
						.css( 'left', ( ( cache.winpos - 1 ) - ( openedIdx - idx ) ) * cache.itemW + 'px' )
						.show();
						
						// show more link
						aux.toggleMore( $item, true );
					}
				});
			},
			// gets the item's position (1, 2, or 3) on the viewport (the visible items)
			// val is the left of the item
			getWinPos	: function( val, cache ) {
				switch( val ) {
					case 0 					: return 1; break;
					case cache.itemW 		: return 2; break;
					case cache.itemW * 2 	: return 3; break;
				}
			}
		},
		methods = {
			init 		: function( options ) {
				
				if( this.length ) {
					
					var settings = {
						sliderSpeed		: 500,			// speed for the sliding animation
						sliderEasing	: 'easeOutExpo',// easing for the sliding animation
						itemSpeed		: 500,			// speed for the item animation (open / close)
						itemEasing		: 'easeOutExpo',// easing for the item animation (open / close)
						scroll			: 1				// number of items to scroll at a time
					};
					
					return this.each(function() {
						
						// if options exist, lets merge them with our default settings
						if ( options ) {
							$.extend( settings, options );
						}
						
						var $el 			= $(this),
							$wrapper		= $el.find('div.ca-wrapper'),
							$items			= $wrapper.children('div.ca-item'),
							cache			= {};
						
						// save the with of one item	
						cache.itemW			= $items.width();
						// save the number of total items
						cache.totalItems	= $items.length;
						
						// add navigation buttons
						if( cache.totalItems > 3 )	
							$el.prepend('<div class="ca-nav"><span class="ca-nav-prev">Previous</span><span class="ca-nav-next">Next</span></div>')	
						
						// control the scroll value
						if( settings.scroll < 1 )
							settings.scroll = 1;
						else if( settings.scroll > 3 )
							settings.scroll = 3;	
						
						var $navPrev		= $el.find('span.ca-nav-prev'),
							$navNext		= $el.find('span.ca-nav-next');
						
						// hide the items except the first 3
						$wrapper.css( 'overflow', 'hidden' );
						
						// the items will have position absolute 
						// calculate the left of each item
						$items.each(function(i) {
							$(this).css({
								position	: 'absolute',
								left		: i * cache.itemW + 'px'
							});
						});
						
						// click to open the item(s)
						$el.find('a.ca-more').live('click.contentcarousel', function( event ) {
							if( cache.isAnimating ) return false;
							cache.isAnimating	= true;
							$(this).hide();
							var $item	= $(this).closest('div.ca-item');
							aux.openItem( $wrapper, $item, settings, cache );
							return false;
						});
						
						// click to close the item(s)
						$el.find('a.ca-close').live('click.contentcarousel', function( event ) {
							if( cache.isAnimating ) return false;
							cache.isAnimating	= true;
							var $item	= $(this).closest('div.ca-item');
							aux.closeItems( $wrapper, $item, settings, cache );
							return false;
						});
						
						// navigate left
						$navPrev.bind('click.contentcarousel', function( event ) {
							if( cache.isAnimating ) return false;
							cache.isAnimating	= true;
							aux.navigate( -1, $el, $wrapper, settings, cache );
						});
						
						// navigate right
						$navNext.bind('click.contentcarousel', function( event ) {
							if( cache.isAnimating ) return false;
							cache.isAnimating	= true;
							aux.navigate( 1, $el, $wrapper, settings, cache );
						});
						
						// adds events to the mouse
						$el.bind('mousewheel.contentcarousel', function(e, delta) {
							if(delta > 0) {
								if( cache.isAnimating ) return false;
								cache.isAnimating	= true;
								aux.navigate( -1, $el, $wrapper, settings, cache );
							}	
							else {
								if( cache.isAnimating ) return false;
								cache.isAnimating	= true;
								aux.navigate( 1, $el, $wrapper, settings, cache );
							}	
							return false;
						});
						
					});
				}
			}
		};
	
	$.fn.contentcarousel = function(method) {
		if ( methods[method] ) {
			return methods[method].apply( this, Array.prototype.slice.call( arguments, 1 ));
		} else if ( typeof method === 'object' || ! method ) {
			return methods.init.apply( this, arguments );
		} else {
			$.error( 'Method ' +  method + ' does not exist on jQuery.contentcarousel' );
		}
	};
	
})(jQuery);

/*! Copyright (c) 2010 Brandon Aaron (http://brandonaaron.net)
 * Licensed under the MIT License (LICENSE.txt).
 *
 * Thanks to: http://adomas.org/javascript-mouse-wheel/ for some pointers.
 * Thanks to: Mathias Bank(http://www.mathias-bank.de) for a scope bug fix.
 * Thanks to: Seamus Leahy for adding deltaX and deltaY
 *
 * Version: 3.0.4
 * 
 * Requires: 1.2.2+
 */

(function($) {

var types = ['DOMMouseScroll', 'mousewheel'];

$.event.special.mousewheel = {
    setup: function() {
        if ( this.addEventListener ) {
            for ( var i=types.length; i; ) {
                this.addEventListener( types[--i], handler, false );
            }
        } else {
            this.onmousewheel = handler;
        }
    },
    
    teardown: function() {
        if ( this.removeEventListener ) {
            for ( var i=types.length; i; ) {
                this.removeEventListener( types[--i], handler, false );
            }
        } else {
            this.onmousewheel = null;
        }
    }
};

$.fn.extend({
    mousewheel: function(fn) {
        return fn ? this.bind("mousewheel", fn) : this.trigger("mousewheel");
    },
    
    unmousewheel: function(fn) {
        return this.unbind("mousewheel", fn);
    }
});


function handler(event) {
    var orgEvent = event || window.event, args = [].slice.call( arguments, 1 ), delta = 0, returnValue = true, deltaX = 0, deltaY = 0;
    event = $.event.fix(orgEvent);
    event.type = "mousewheel";
    
    // Old school scrollwheel delta
    if ( event.wheelDelta ) { delta = event.wheelDelta/120; }
    if ( event.detail     ) { delta = -event.detail/3; }
    
    // New school multidimensional scroll (touchpads) deltas
    deltaY = delta;
    
    // Gecko
    if ( orgEvent.axis !== undefined && orgEvent.axis === orgEvent.HORIZONTAL_AXIS ) {
        deltaY = 0;
        deltaX = -1*delta;
    }
    
    // Webkit
    if ( orgEvent.wheelDeltaY !== undefined ) { deltaY = orgEvent.wheelDeltaY/120; }
    if ( orgEvent.wheelDeltaX !== undefined ) { deltaX = -1*orgEvent.wheelDeltaX/120; }
    
    // Add event and delta to the front of the arguments
    args.unshift(event, delta, deltaX, deltaY);
    
    return $.event.handle.apply(this, args);
}

})(jQuery);