window.addEventListener("load", sidenVises);


function sidenVises() {

    gsap.registerPlugin(ScrollTrigger);

    gsap.from(".intro", {
        y: 200,
        duration: 1,
        //scale: 0.5,
        opacity: 0,
        ease: "power3",
        scrollTrigger: {
            trigger: "#lovely",
            start: "top 90%",
            end: "center 50%",
            //scrub: true
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

    //Mouseover produkt1
    document.querySelector(".produkt-1").addEventListener("mouseover", produkt1);

    //Mouseover produkt2
    document.querySelector(".produkt-2").addEventListener("mouseover", produkt2);

    //Mouseover produkt3
    document.querySelector(".produkt-3").addEventListener("mouseover", produkt3);

    //Mouseover produkt4
    document.querySelector(".produkt-4").addEventListener("mouseover", produkt4);

    //Mouseover produkt5
    document.querySelector(".produkt-5").addEventListener("mouseover", produkt5);
}


// PRODUKT 1 FUNCTIONS

function produkt1() {
    console.log("produkt1");

    document.querySelector(".img1").classList.add("hide");
    document.querySelector(".produkt-1").addEventListener("mouseleave", produkt1stop);
}

function produkt1stop() {
    console.log("produkt1stop");

    document.querySelector(".img1").classList.remove("hide");

}

// PRODUKT 2 FUNCTIONS

function produkt2() {
    console.log("produkt2");

    document.querySelector(".img2").classList.add("hide");
    document.querySelector(".produkt-2").addEventListener("mouseleave", produkt2stop);
}

function produkt2stop() {
    console.log("produkt2stop");

    document.querySelector(".img2").classList.remove("hide");

}

// PRODUKT 3 FUNCTIONS

function produkt3() {
    console.log("produkt3");

    document.querySelector(".img3").classList.add("hide");
    document.querySelector(".produkt-3").addEventListener("mouseleave", produkt3stop);
}

function produkt3stop() {
    console.log("produkt3stop");

    document.querySelector(".img3").classList.remove("hide");

}

// PRODUKT 4 FUNCTIONS

function produkt4() {
    console.log("produkt4");

    document.querySelector(".img4").classList.add("hide");
    document.querySelector(".produkt-4").addEventListener("mouseleave", produkt4stop);
}

function produkt4stop() {
    console.log("produkt4stop");

    document.querySelector(".img4").classList.remove("hide");

}


// PRODUKT 5 FUNCTIONS

function produkt5() {
    console.log("produkt5");

    document.querySelector(".img5").classList.add("hide");
    document.querySelector(".produkt-5").addEventListener("mouseleave", produkt5stop);
}

function produkt5stop() {
    console.log("produkt5stop");

    document.querySelector(".img5").classList.remove("hide");

}
