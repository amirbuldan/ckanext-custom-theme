"use strict"


ckan.module('gsap_scroll_speed', function(jQuery) {
    return {
        initialize: function () {
            gsap.registerPlugin(ScrollTrigger);
            
            gsap.to("[data-speed]", {
                y: (i, el) => (1 - parseFloat(el.getAttribute("data-speed"))) * 
                ScrollTrigger.maxScroll(window),
                ease: "none",
                scrollTrigger: {
                    start: 0,
                    end: "max",
                    invalidateOnRefresh: true,
                    scrub: 0
                },
            });

        }
    };
});