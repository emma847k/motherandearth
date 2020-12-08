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


    gsap.from(".lovely-img", {

        duration: 2,
        scale: 0.9,
        opacity: 0,
        ease: "power3",
        scrollTrigger: {
            trigger: "#lovely",
            start: "top 75%",
            end: "center 40%"
            //scrub: true
        }
    });

    gsap.from(".lovely-text", {
        y: 400,
        duration: 1,
        //scale: 0.5,
        opacity: 0.5,
        ease: "power3",
        scrollTrigger: {
            trigger: "#lovely",
            start: "top 90%",
            end: "center 50%"
            //scrub: true
            // markers: true
        }
    });


    gsap.from(".shop-text", {
        y: 400,
        //duration: 1,
        //scale: 0.5,
        opacity: 0.5,
        ease: "power3",
        scrollTrigger: {
            trigger: "#shop",
            start: "top 90%",
            end: "center 50%",
            scrub: true
            // markers: true
        }
    });

    gsap.from(".omos-img", {

        duration: 2,
        scale: 0.9,
        opacity: 0,
        ease: "power3",
        scrollTrigger: {
            trigger: "#omos",
            start: "top 75%",
            end: "center 40%"
            //scrub: true
        }
    });

    gsap.from(".omos-text", {
        y: 400,
        duration: 1,
        //scale: 0.5,
        opacity: 0.5,
        ease: "power3",
        scrollTrigger: {
            trigger: "#omos",
            start: "top 90%",
            end: "center 50%"
            //scrub: true
            // markers: true
        }
    });



}
