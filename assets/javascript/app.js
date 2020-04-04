const navButton = document.querySelector('.nav-button');
const navOpen = document.querySelector('.nav-open');

// const tween = TweenLite.to(object, time , {animate});
// individually animating
/* const tween = TweenLite.to(".cover", 1, {
    width: "40%"
}); */

//multiple animation - Timeline
//Automatically animate if there is no paused : true
const tl = new TimelineLite({
    paused: true,
    reversed: true
});

tl.to('.cover', 1, {
        width: "60%",
        ease: Power2.easeIn
    })
    /* Add Another Animation */
    .to('nav', 1, {
        height: '100%',
        ease: Power2.easeOut
    }, '-=0.5' /* This is the delay */ )
    /* Defining a certain properties that you want to animate from to something*/
    .fromTo('.nav-open', 0.5, {
        opacity: 0,
        x: 50,
        ease: Power2.easeOut
    }, {
        opacity: 1,
        x: 0,
        onComplete: function () {
            navOpen.style.pointerEvents = 'auto';
            console.log('done'); /* Console log print when animation done */
        }
    })

navButton.addEventListener('click', (e /* add paremeter when checking if there is an event */ ) => {
    /* tl.play(); */

    if (tl.isActive()) {
        e.preventDefault();
        e.stopImmediatePropagation();
        return false;
    }
    toggleTween(tl);
});

function toggleTween(tween) {
    tween.reversed() ? tween.play() : tween.reverse();
}