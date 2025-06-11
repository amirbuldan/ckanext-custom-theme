"use strict"


ckan.module('gsap_split_column', function(jQuery) {
    return {
        initialize: function () {
            gsap.registerPlugin(ScrollTrigger);
            const mm = gsap.matchMedia()

            const split_section = document.getElementsByClassName('split-section');

            console.log('gsap-split-column initalize....')
            console.log(split_section);
            
            
            mm.add("(min-width:768px)", () => {
                gsap.to(".split-section", {
                    scrollTrigger: {
                        trigger: ".split-section",
                        toggleActions: "restart pause reverse pause",
                        // markers: true,
                        pin: ".split-section-pinned",
                        end: "bottom bottom",
                        ease: "power1.inOut",
                        duration: 2.5,
                    },
                });
            })

        }
    };
});