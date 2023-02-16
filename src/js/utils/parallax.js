

let body = document.body;

body.addEventListener("mousemove", function (event) {
    parallaxed(event);
});

function parallaxed(e) {
    let amountMovedX = (e.clientX * -0.3 / 8);
    let amountMovedY = (e.clientY * -0.3 / 8);
    let parallaxImage = document.querySelectorAll(".parallaxed");
    let i;
    for (i = 0; i < parallaxImage.length; i++) {
        parallaxImage[i].style.transform = 'translate(' + amountMovedX + 'px,' + amountMovedY + 'px)'
    }
}
