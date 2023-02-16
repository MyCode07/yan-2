

    export function aboutPageOpen() {
        // custom cursor

        var $ = document.querySelector.bind(document);
        var $on = document.addEventListener.bind(document);

        var xmouse, ymouse;
        $on('mousemove', function (e) {
            xmouse = e.clientX || e.pageX;
            ymouse = e.clientY || e.pageY;
        });

        var ball = $('#ball');
        var x = void 0,
            y = void 0,
            dx = void 0,
            dy = void 0,
            tx = 0,
            ty = 0,
            key = -1;

        var followMouse = function followMouse() {
            key = requestAnimationFrame(followMouse);

            if (!x || !y) {
                x = xmouse;
                y = ymouse;
            } else {
                dx = (xmouse - x) * 0.095;
                dy = (ymouse - y) * 0.095;
                if (Math.abs(dx) + Math.abs(dy) < 0.1) {
                    x = xmouse;
                    y = ymouse;
                } else {
                    x += dx;
                    y += dy;
                }
            }
            ball.style.left = x + 'px';
            ball.style.top = y + 'px';
        };

        followMouse();

        // document.addEventListener("DOMContentLoaded", followMouse());

        // loading__screen-title animation  
        var textWrapper = document.querySelector('.loading__screen-title');
        textWrapper.innerHTML = textWrapper.textContent.replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>");

        anime.timeline({ loop: false }).add({
            targets: '.loading__screen-title  .letter',
            translateY: [40, 0],
            translateZ: 0,
            opacity: [0, 1],
            easing: "easeOutExpo",
            duration: 1400,
            delay: function (el, i) {
                return 300 + 30 * i;
            }
        }).add({
            targets: '.loading__screen-title .letter ',
            translateY: [0, -40],
            opacity: [1, 0],
            easing: "easeInExpo",
            duration: 1200,
            delay: function (el, i) {
                return 100 + 30 * i;
            }
        });


        // hero-title animation
        var textWrapper = document.querySelectorAll('.person__block-name');
        for (let i = 0; i < textWrapper.length; i++) {
            const element = textWrapper[i];
            element.innerHTML = element.textContent.replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>");

            anime.timeline({ loop: false }).add({
                targets: '.person__block-name  .letter',
                translateX: [40, 0],
                translateZ: 0,
                opacity: [0, 1],
                easing: "easeOutExpo",
                duration: 1200,
                delay: function (el, i) {
                    return 6000 + 30 * i;
                }
            });


        }



        // reveling other elements
        TweenMax.to(".loading__screen", 2.2, {
            delay: 3.8,
            top: "-100%",
            ease: Expo.easeInOut
        });

        TweenMax.from(".content__top-logo", 2, {
            delay: 5.2,
            y: 10,
            opacity: 0,
            ease: Expo.easeInOut
        });

        TweenMax.from(".content__top-year", 2, {
            delay: 5.3,
            y: 20,
            opacity: 0,
            ease: Expo.easeInOut
        });


        TweenMax.from(".bar", 2, {
            delay: 7.2,
            width: "0%",
            ease: Expo.easeInOut
        });

        const subName = document.querySelectorAll('.sub-name');
        for (let i = 0; i < subName.length; i++) {
            const element = subName[i];

            TweenMax.from(element, 2, {
                delay: 6,
                y: 20,
                opacity: 0,
                ease: Expo.easeInOut
            });
        }


        // TweenMax.from(".project", 2, {
        //     delay: 5.9,
        //     y: 10,
        //     opacity: 0,
        //     ease: Expo.easeInOut
        // });

        TweenMax.staggerFrom(".person__block-media ol li", 2, {
            delay: 6.2,
            opacity: 0,
            y: 20,
            ease: Power3.easeInOut
        }, 0.1);



}
    
// import hoverEffect from "hover-effect";

// const name = new hoverEffect({
//     parent: document.querySelector('.main__page-image'),
//     intensity: 0.2,
//     image1: 'img/ice.jpg',
//     image2: 'img/ice2.jpg',
//     angle: Math.PI / 4,
//     speedIn: 2,
//     speedOut: 5,
//     displacementImage: 'img/fluid.jpg'
// })


