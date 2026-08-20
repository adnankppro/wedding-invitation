/* =========================================================
   OPEN INVITATION
========================================================= */

const openingScreen = document.getElementById("opening-screen");
const mainContent = document.getElementById("main-content");
const enterButton = document.getElementById("enterButton");


enterButton.addEventListener("click", () => {

    openingScreen.classList.add("hidden");

    mainContent.classList.add("visible");

    document.body.style.overflow = "auto";


    /*
     * Show the scroll indicator
     * after the opening animation.
     */

    setTimeout(() => {

        const scrollIndicator =
            document.getElementById("scrollIndicator");

        scrollIndicator.classList.add("visible");

    }, 900);

});


/* =========================================================
   COUNTDOWN
========================================================= */

/*
    Wedding date:
    20 September 2026

    Currently using midnight as the target.

    Once you know the exact Nikah time,
    change this to something like:

    "2026-09-20T11:00:00"
*/

const weddingDate =
    new Date("2026-09-20T10:30:00+05:30").getTime();


function updateCountdown() {

    const now = new Date().getTime();

    const distance = weddingDate - now;


    if (distance <= 0) {

        document.getElementById("days").textContent = "00";
        document.getElementById("hours").textContent = "00";
        document.getElementById("minutes").textContent = "00";
        document.getElementById("seconds").textContent = "00";

        return;
    }


    const days =
        Math.floor(
            distance / (1000 * 60 * 60 * 24)
        );


    const hours =
        Math.floor(
            (distance %
                (1000 * 60 * 60 * 24))
            /
            (1000 * 60 * 60)
        );


    const minutes =
        Math.floor(
            (distance %
                (1000 * 60 * 60))
            /
            (1000 * 60)
        );


    const seconds =
        Math.floor(
            (distance %
                (1000 * 60))
            /
            1000
        );


    document.getElementById("days").textContent =
        String(days).padStart(2, "0");


    document.getElementById("hours").textContent =
        String(hours).padStart(2, "0");


    document.getElementById("minutes").textContent =
        String(minutes).padStart(2, "0");


    document.getElementById("seconds").textContent =
        String(seconds).padStart(2, "0");
}


updateCountdown();

setInterval(updateCountdown, 1000);


/* =========================================================
   SCROLL REVEAL ANIMATIONS
========================================================= */

const revealElements =
    document.querySelectorAll(".reveal");


const observer =
    new IntersectionObserver(
        (entries) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("active");

                    observer.unobserve(entry.target);
                }

            });

        },
        {
            threshold: 0.15
        }
    );


revealElements.forEach((element) => {

    observer.observe(element);

});


/* =========================================================
   PREVENT SCROLL WHILE OPENING SCREEN IS DISPLAYED
========================================================= */

document.body.style.overflow = "hidden";


/* =========================================================
   ACTIVE SECTION
========================================================= */

const sections =
    document.querySelectorAll("section[id]");


const sectionObserver =
    new IntersectionObserver(
        (entries) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {

                    console.log(
                        "Viewing section:",
                        entry.target.id
                    );

                }

            });

        },
        {
            threshold: 0.4
        }
    );


sections.forEach((section) => {

    sectionObserver.observe(section);

});

/* =========================================================
   FALLING FLOWER PETALS
========================================================= */

const petalContainer =
    document.getElementById("floatingParticles");


function createPetals() {

    const petalCount =
        window.innerWidth < 600 ? 14 : 24;


    for (let i = 0; i < petalCount; i++) {

        const petal =
            document.createElement("span");


        petal.classList.add("petal");


        petal.style.left =
            `${Math.random() * 100}%`;


        petal.style.setProperty(
            "--duration",
            `${9 + Math.random() * 9}s`
        );


        petal.style.setProperty(
            "--delay",
            `${Math.random() * 10}s`
        );


        petal.style.setProperty(
            "--rotation",
            `${Math.random() * 360}deg`
        );


        petal.style.setProperty(
            "--drift-1",
            `${-80 + Math.random() * 160}px`
        );


        petal.style.setProperty(
            "--drift-2",
            `${-120 + Math.random() * 240}px`
        );


        petal.style.setProperty(
            "--drift-3",
            `${-100 + Math.random() * 200}px`
        );


        petal.style.setProperty(
            "--drift-4",
            `${-150 + Math.random() * 300}px`
        );


        const size =
            7 + Math.random() * 7;


        petal.style.width =
            `${size}px`;


        petal.style.height =
            `${size * 1.4}px`;


        petalContainer.appendChild(petal);

    }

}


createPetals();