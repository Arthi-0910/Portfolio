/* =====================================
   LOADER
===================================== */

window.addEventListener("load", () => {
    const loader = document.querySelector(".loader");

    setTimeout(() => {
        loader.style.opacity = "0";
        loader.style.visibility = "hidden";
    }, 1800);
});


/* =====================================
   TYPING EFFECT
===================================== */

const typingElement = document.getElementById("typing");

const textArray = [
    "UI/UX Designer",
    "Figma Designer",
    "Wireframe Creator",
    "Prototype Designer",
    "User Experience Enthusiast"
];

let textIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {

    const currentText = textArray[textIndex];

    if (!isDeleting) {
        typingElement.textContent =
            currentText.substring(0, charIndex + 1);

        charIndex++;

        if (charIndex === currentText.length) {
            isDeleting = true;
            setTimeout(typeEffect, 1500);
            return;
        }

    } else {

        typingElement.textContent =
            currentText.substring(0, charIndex - 1);

        charIndex--;

        if (charIndex === 0) {
            isDeleting = false;
            textIndex++;

            if (textIndex >= textArray.length) {
                textIndex = 0;
            }
        }
    }

    setTimeout(typeEffect, isDeleting ? 60 : 120);
}

typeEffect();


/* =====================================
   CURSOR GLOW
===================================== */

const cursorGlow =
    document.querySelector(".cursor-glow");

document.addEventListener("mousemove", (e) => {

    cursorGlow.style.left = e.clientX + "px";
    cursorGlow.style.top = e.clientY + "px";

});


/* =====================================
   NAVBAR SCROLL EFFECT
===================================== */

const navbar =
    document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        navbar.style.background =
            "rgba(10,10,25,0.85)";

        navbar.style.backdropFilter =
            "blur(25px)";

        navbar.style.boxShadow =
            "0 10px 30px rgba(0,0,0,.4)";

    } else {

        navbar.style.background =
            "rgba(255,255,255,.05)";

        navbar.style.boxShadow =
            "none";
    }
});


/* =====================================
   SCROLL REVEAL ANIMATION
===================================== */

const revealElements =
    document.querySelectorAll(
        ".section, .project-card, .timeline-item, .stat"
    );

const revealOnScroll = () => {

    revealElements.forEach((el) => {

        const windowHeight =
            window.innerHeight;

        const revealTop =
            el.getBoundingClientRect().top;

        const revealPoint = 120;

        if (revealTop < windowHeight - revealPoint) {

            el.classList.add("active");

        }

    });

};

window.addEventListener(
    "scroll",
    revealOnScroll
);

revealOnScroll();


/* =====================================
   FLOATING PARTICLES
===================================== */

const particleContainer =
    document.createElement("div");

particleContainer.classList.add(
    "particle-container"
);

document.body.appendChild(
    particleContainer
);

for (let i = 0; i < 30; i++) {

    let particle =
        document.createElement("span");

    particle.classList.add("particle");

    particle.style.left =
        Math.random() * 100 + "%";

    particle.style.top =
        Math.random() * 100 + "%";

    particle.style.animationDuration =
        Math.random() * 10 + 5 + "s";

    particle.style.animationDelay =
        Math.random() * 5 + "s";

    particleContainer.appendChild(
        particle
    );
}


/* =====================================
   PROJECT CARD 3D EFFECT
===================================== */

const cards =
    document.querySelectorAll(
        ".project-card"
    );

cards.forEach((card) => {

    card.addEventListener(
        "mousemove",
        (e) => {

            const rect =
                card.getBoundingClientRect();

            const x =
                e.clientX - rect.left;

            const y =
                e.clientY - rect.top;

            const rotateY =
                (x / rect.width - 0.5) * 20;

            const rotateX =
                (0.5 - y / rect.height) * 20;

            card.style.transform =
                `perspective(1000px)
                 rotateX(${rotateX}deg)
                 rotateY(${rotateY}deg)
                 translateY(-10px)`;

        }
    );

    card.addEventListener(
        "mouseleave",
        () => {

            card.style.transform =
                "perspective(1000px) rotateX(0) rotateY(0)";
        }
    );

});


/* =====================================
   FLOATING PROFILE IMAGE
===================================== */

const profile =
    document.querySelector(
        ".profile-ring"
    );

if (profile) {

    let angle = 0;

    function floatingProfile() {

        angle += 0.02;

        profile.style.transform =
            `translateY(${Math.sin(angle) * 10}px)`;

        requestAnimationFrame(
            floatingProfile
        );
    }

    floatingProfile();
}


/* =====================================
   ACTIVE NAV LINK
===================================== */

const sections =
    document.querySelectorAll("section");

const navLinks =
    document.querySelectorAll(
        ".nav-links a"
    );

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach((section) => {

        const sectionTop =
            section.offsetTop - 150;

        const sectionHeight =
            section.clientHeight;

        if (
            pageYOffset >= sectionTop
            &&
            pageYOffset <
            sectionTop + sectionHeight
        ) {
            current =
                section.getAttribute("id");
        }

    });

    navLinks.forEach((link) => {

        link.classList.remove("active");

        if (
            link.getAttribute("href")
            === "#" + current
        ) {

            link.classList.add("active");
        }

    });

});


/* =====================================
   CONTACT FORM
===================================== */

const contactForm =
    document.querySelector(
        ".contact-form"
    );

if (contactForm) {

    contactForm.addEventListener(
        "submit",
        (e) => {

            e.preventDefault();

            alert(
                "Thank you! Your message has been sent."
            );

            contactForm.reset();

        }
    );
}


/* =====================================
   MOBILE MENU
===================================== */

const menuBtn =
    document.querySelector(
        ".menu-btn"
    );

const navMenu =
    document.querySelector(
        ".nav-links"
    );

if (menuBtn) {

    menuBtn.addEventListener(
        "click",
        () => {

            navMenu.classList.toggle(
                "show-menu"
            );

        }
    );
}