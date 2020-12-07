window.addEventListener("load", sidenVises);


function sidenVises() {

    gsap.registerPlugin(ScrollTrigger);

    gsap.from(".intro", {
        scale: 0.9,
        opacity: 0,
        scrollTrigger: {
            trigger: "#intro",
            start: "top 80%",
            end: "center 50%",
            scrub: true,
            // markers: true
        }
    });

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

    gsap.from(".produkt", {
        duration: 0.5,
        scale: 0.8,
        opacity: 0,
        //        stagger: -2,
        ease: "sine",
        scrollTrigger: {
            trigger: "#produkter",
            start: "top 75%",
            end: "center 50%"
        }
    });


    gsap.from(".lovely-img", {

        //duration: 2,
        scale: 0.9,
        opacity: 0,
        ease: "power3",
        scrollTrigger: {
            trigger: "#lovely",
            start: "top 75%",
            end: "center 40%",
            scrub: true
        }
    });

    gsap.from(".lovely-text", {
        y: 400,
        //duration: 2,
        //scale: 0.5,
        opacity: 0.5,
        ease: "power3",
        scrollTrigger: {
            trigger: "#lovely",
            start: "top 90%",
            end: "center 50%",
            scrub: true
            // markers: true
        }
    });

    gsap.from(".icon", {
        duration: 0.5,
        scale: 0.8,
        opacity: 0,
        //        stagger: -2,
        ease: "sine",
        scrollTrigger: {
            trigger: "#principper",
            start: "top 65%",
            end: "bottom 80%"
            //markers: true
        }
    });

    gsap.from(".shop-img", {

        //duration: 2,
        scale: 0.9,
        opacity: 0,
        ease: "power3",
        scrollTrigger: {
            trigger: "#shop",
            start: "top 75%",
            end: "center 40%",
            scrub: true
        }
    });

    gsap.from(".shop-text", {
        y: 400,
        //duration: 2,
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
}
