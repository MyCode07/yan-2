
import gsap, { registerEase } from "gsap";
if (document.querySelector('.home-page')) {
    function menuimageOn() {
        if (window.innerWidth >= 425) {
            let navLink = gsap.utils.toArray('.show-svg');
            let imageItem = document.querySelector('.show-svg').querySelector('img');
            // let t1 = gsap.timeline();
            function moveImg(e) {
                let mouseX = e.clientX,
                    mouseY = e.clientY
                let t1 = gsap.timeline();

                t1.to(imageItem, {
                    duration: 1,
                    x: mouseX,
                    y: mouseY,
                })
            }

            function linkHover(e) {
                if (e.type === "mouseenter") {
                    let imgSrc = e.target.getAttribute("data-image");
                    let t1 = gsap.timeline();
                    t1.set(imageItem, {
                        attr: { src: imgSrc }
                    }).to(imageItem, {
                        autoAlpha: 2,
                        scale: 1
                    })

                } else if (e.type === "mouseleave") {
                    let t1 = gsap.timeline();
                    t1.to(imageItem, {
                        autoAlpha: 0,
                        scale: 0.3
                    })

                }
            }
            function initAmimation() {
                navLink.forEach(link => {
                    link.addEventListener("mouseenter", linkHover);
                    link.addEventListener("mouseleave", linkHover);
                    link.addEventListener("mousemove", moveImg);
                })
            }
            function init() {
                initAmimation();
            }
            init();
        }
    }
    menuimageOn()
}


