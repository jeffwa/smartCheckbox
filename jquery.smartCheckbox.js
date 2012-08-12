/**
 * Smart Checkbox v1.0.0
 *
 * Copyright (c) 2011 Jeff McLennan
 * Dual licensed under the MIT or GPL Version 3 licenses.
 */

(function( $ ){
    var _options = {};
    
    var methods = {
        init: function( options ) {
            
            var that = this;
            
            return that.each(function() {
                _options = $.extend( {}, $.fn.smartCheckbox.defaults, options );
                
                var $that = $(this);
                if ( $that.attr("type") === "checkbox" ) {
                    var masterId = $that.attr("id");
                    if ( masterId ) {
                        $that.click(function() {
                            $(":checkbox."+masterId).each(function() {
                                $(this).prop("checked", $that.prop("checked"));
                            }).change();
                        });
                    
                        $(":checkbox."+masterId).each(function(){
                            var $el = $(this);
                            $el.change(function(){
                                var classes = $el.attr("class").split(" ");
                                $.each( classes, function( idx, clazz ){
                                    var _selectAll = $el.prop("checked");
                                    if ( _selectAll ) {
                                        $(":checkbox."+clazz).each(function() {
                                            _selectAll = $(this).prop("checked");
                                            return _selectAll;
                                        });
                                    }
                                    $("#"+clazz).prop("checked", _selectAll);
                                });
                            });
                        });
                    }
                }
            });
        }
    };
    
    $.fn.smartCheckbox = function( method ) {
        // Method calling logic
        if ( methods[method] ) {
            return methods[ method ].apply( this, Array.prototype.slice.call( arguments, 1 ));
        } else if ( typeof method === 'object' || ! method ) {
            return methods.init.apply( this, arguments );
        } else {
            // Log any errors
            if ( window.console ) {
                window.console.log( 'Method ' +  method + ' does not exist!' );
            }
        }
    };
    
    $.fn.smartCheckbox.defaults = { };
})( jQuery );