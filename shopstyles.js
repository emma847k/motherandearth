window.addEventListener("load", sidenVises);


function sidenVises() {

    gsap.registerPlugin(ScrollTrigger);

    gsap.from(".navbar-brand", {
        duration: 3,
        opacity: 0,
        scale: 1,
        //        stagger: -2,
        //ease: "sine",
        scrollTrigger: {
            trigger: ".navbar",
            start: "top 75%",
            end: "center 50%"
        }
    });

    gsap.from(".navbar-nav", {
        duration: 3,
        opacity: 0,
        //        stagger: -2,
        ease: "sine",
        scrollTrigger: {
            trigger: ".navbar",
            start: "top 75%",
            end: "center 50%"
        }
    });


    gsap.from(".style-img", {

        duration: 2,
        scale: 0.9,
        opacity: 0,
        ease: "sine",
        scrollTrigger: {
            trigger: "#styles",
            start: "top 75%",
            end: "center 40%"
            //scrub: true
        }
    });

}
