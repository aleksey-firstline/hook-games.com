import { Component, OnInit } from '@angular/core';
declare var jQuery: any;

@Component({
  selector: 'app-policy',
  templateUrl: './policy.component.html',
  styleUrls: ['./policy.component.css']
})
export class PolicyComponent implements OnInit {

  constructor() {}

  ngOnInit(){
    (function ($) {
      $(document).ready(function(){
            $('a[href*=\\#]:not([href=\\#]):not(.control-right, .control-left)').on('click', function() {
              if (location.pathname.replace(/^\//,'') === this.pathname.replace(/^\//,'') && location.hostname === this.hostname) {
                  var target = $(this.hash);
                  target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
              if (target.length) {
                  $('html,body').animate({
                    scrollTop: target.offset().top - 100
                  }, 1000);
              return false;
            }
          }
        });

        var $animation_elements = $('.animation-element');
        var $window = $(window);
      
        function check_if_in_view() {
            var window_height = $window.height();
            var window_top_position = $window.scrollTop();
            var window_bottom_position = (window_top_position + window_height);
      
            $.each($animation_elements, function() {
                var $element = $(this);
                var element_height = $element.outerHeight();
                var element_top_position = $element.offset().top + 150;
                var element_bottom_position = (element_top_position + element_height);
      
                //check to see if this current container is within viewport
                if ((element_bottom_position >= window_top_position) &&
                (element_top_position <= window_bottom_position)) {
                    $element.addClass('in-view');
                }
          });
        }

        $window.on('scroll resize', check_if_in_view);
        $window.trigger('scroll');
      });
    })(jQuery);
  }
}