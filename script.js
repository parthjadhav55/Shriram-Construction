/* ==========================================
   PAGE LOADING
========================================== */

window.addEventListener("load", () => {

    document.body.classList.add("loaded");

    revealElements();

});


/* ==========================================
   ADD PROJECT BUTTON
========================================== */

function showMessage() {

    alert(
        "🏗️ NEW CONSTRUCTION PROJECT\n\n" +
        "Project creation module is ready!\n\n" +
        "You can connect this button to a database later."
    );

}


/* ==========================================
   ADD WORKER
========================================== */

function addWorker() {

    const name =
        prompt("Enter worker name:");

    if (!name) {
        return;
    }


    const role =
        prompt("Enter worker role:");

    if (!role) {
        return;
    }


    const table =
        document.getElementById(
            "workerTable"
        );


    const row =
        document.createElement("tr");


    row.innerHTML = `

        <td>
            <strong>
                ${name}
            </strong>
        </td>

        <td>
            ${role}
        </td>

        <td>
            Metro Tower
        </td>

        <td>
            <span class="online">
                Active
            </span>
        </td>

        <td>
            New
        </td>

    `;


    row.style.opacity = "0";

    row.style.transform =
        "translateX(-30px)";


    table.appendChild(row);


    setTimeout(() => {

        row.style.transition =
            "all .5s ease";

        row.style.opacity = "1";

        row.style.transform =
            "translateX(0)";

    }, 50);


    alert(
        "👷 Worker added successfully!"
    );

}


/* ==========================================
   NUMBER COUNTER
========================================== */

function animateCounter(
    element,
    target,
    duration = 1600
) {

    let start = 0;

    const startTime =
        performance.now();


    function update(currentTime) {

        const elapsed =
            currentTime - startTime;


        const progress =
            Math.min(
                elapsed / duration,
                1
            );


        const ease =
            1 -
            Math.pow(
                1 - progress,
                3
            );


        const current =
            Math.floor(
                ease * target
            );


        element.textContent =
            current;


        if (progress < 1) {

            requestAnimationFrame(update);

        } else {

            element.textContent =
                target;

        }

    }


    requestAnimationFrame(update);

}


/* ==========================================
   START COUNTERS ONCE
========================================== */

let countersStarted = false;


function startCounters() {

    if (countersStarted) {
        return;
    }

    countersStarted = true;


    const counters =
        document.querySelectorAll(
            ".counter"
        );


    counters.forEach(counter => {

        const target =
            Number(
                counter.dataset.target
            );


        animateCounter(
            counter,
            target
        );

    });

}


/* ==========================================
   SCROLL REVEAL
========================================== */

function revealElements() {

    const elements =
        document.querySelectorAll(
            ".reveal"
        );


    const observer =
        new IntersectionObserver(

            entries => {

                entries.forEach(entry => {

                    if (
                        entry.isIntersecting
                    ) {

                        entry.target.classList.add(
                            "active"
                        );


                        if (
                            entry.target.id ===
                            "dashboard"
                        ) {

                            startCounters();

                        }

                    }

                });

            },

            {
                threshold: 0.15
            }

        );


    elements.forEach(element => {

        observer.observe(element);

    });

}


/* ==========================================
   MOUSE PARALLAX HERO CARD
========================================== */

const heroCard =
    document.querySelector(
        ".hero-card"
    );


document.addEventListener(
    "mousemove",
    event => {

        if (!heroCard) {
            return;
        }


        const x =
            (
                window.innerWidth / 2 -
                event.clientX
            ) / 45;


        const y =
            (
                window.innerHeight / 2 -
                event.clientY
            ) / 45;


        heroCard.style.transform =
            `
            translate(${x}px, ${y}px)
            `;

    }
);


/* ==========================================
   RESET HERO CARD WHEN MOUSE LEAVES
========================================== */

document.addEventListener(
    "mouseleave",
    () => {

        if (!heroCard) {
            return;
        }

        heroCard.style.transform =
            "translate(0,0)";

    }
);


/* ==========================================
   PROGRESS CHART
========================================== */

const progressCanvas =
    document.getElementById(
        "progressChart"
    );


if (progressCanvas) {

    new Chart(
        progressCanvas,
        {

            type: "line",

            data: {

                labels: [
                    "Jan",
                    "Feb",
                    "Mar",
                    "Apr",
                    "May",
                    "Jun",
                    "Jul"
                ],


                datasets: [

                    {

                        label:
                            "Construction Progress",

                        data: [
                            10,
                            18,
                            27,
                            39,
                            48,
                            58,
                            68
                        ],


                        borderColor:
                            "#ff9d00",


                        backgroundColor:
                            "rgba(255,157,0,.12)",


                        borderWidth: 4,


                        pointBackgroundColor:
                            "#ff9d00",


                        pointBorderColor:
                            "#ffffff",


                        pointBorderWidth: 3,


                        pointRadius: 5,


                        pointHoverRadius: 8,


                        tension: .45,


                        fill: true

                    }

                ]

            },


            options: {

                responsive: true,


                animation: {

                    duration: 2200,

                    easing:
                        "easeOutQuart"

                },


                plugins: {

                    legend: {

                        display: false

                    }

                },


                scales: {

                    y: {

                        beginAtZero: true,

                        max: 100,

                        ticks: {

                            callback:
                                value =>
                                    value + "%"

                        },

                        grid: {

                            color:
                                "rgba(0,0,0,.05)"

                        }

                    },


                    x: {

                        grid: {

                            display: false

                        }

                    }

                }

            }

        }
    );

}


/* ==========================================
   BUDGET CHART
========================================== */

const budgetCanvas =
    document.getElementById(
        "budgetChart"
    );


if (budgetCanvas) {

    new Chart(
        budgetCanvas,
        {

            type: "doughnut",


            data: {

                labels: [

                    "Materials",
                    "Labour",
                    "Equipment",
                    "Other"

                ],


                datasets: [

                    {

                        data: [
                            35,
                            30,
                            20,
                            15
                        ],


                        backgroundColor: [

                            "#ff9d00",
                            "#2670c9",
                            "#22a05a",
                            "#8b5cf6"

                        ],


                        borderWidth: 0,


                        hoverOffset: 18

                    }

                ]

            },


            options: {

                responsive: true,


                cutout: "68%",


                animation: {

                    animateRotate: true,

                    animateScale: true,

                    duration: 2000

                },


                plugins: {

                    legend: {

                        position: "bottom",

                        labels: {

                            padding: 20,

                            usePointStyle: true

                        }

                    }

                }

            }

        }
    );

}


/* ==========================================
   PROJECT CARD TILT EFFECT
========================================== */

const projectCards =
    document.querySelectorAll(
        ".project-card"
    );


projectCards.forEach(card => {

    card.addEventListener(
        "mousemove",
        event => {

            const rect =
                card.getBoundingClientRect();


            const x =
                event.clientX -
                rect.left;


            const y =
                event.clientY -
                rect.top;


            const centerX =
                rect.width / 2;


            const centerY =
                rect.height / 2;


            const rotateX =
                (
                    y - centerY
                ) / 25;


            const rotateY =
                (
                    centerX - x
                ) / 25;


            card.style.transform =
                `
                perspective(800px)
                rotateX(${rotateX}deg)
                rotateY(${rotateY}deg)
                translateY(-8px)
                `;

        }
    );


    card.addEventListener(
        "mouseleave",
        () => {

            card.style.transform =
                "";

        }
    );

});


/* ==========================================
   MATERIAL CARD TILT
========================================== */

const materialCards =
    document.querySelectorAll(
        ".material-card"
    );


materialCards.forEach(card => {

    card.addEventListener(
        "mousemove",
        event => {

            const rect =
                card.getBoundingClientRect();


            const x =
                event.clientX -
                rect.left;


            const y =
                event.clientY -
                rect.top;


            const rotateY =
                (
                    rect.width / 2 -
                    x
                ) / 30;


            const rotateX =
                (
                    y -
                    rect.height / 2
                ) / 30;


            card.style.transform =
                `
                perspective(700px)
                rotateX(${rotateX}deg)
                rotateY(${rotateY}deg)
                translateY(-7px)
                `;

        }
    );


    card.addEventListener(
        "mouseleave",
        () => {

            card.style.transform =
                "";

        }
    );

});


/* ==========================================
   BUTTON RIPPLE EFFECT
========================================== */

document.addEventListener(
    "click",
    event => {

        const button =
            event.target.closest(
                "button"
            );


        if (!button) {
            return;
        }


        const ripple =
            document.createElement(
                "span"
            );


        ripple.style.position =
            "absolute";


        ripple.style.width =
            "10px";


        ripple.style.height =
            "10px";


        ripple.style.background =
            "rgba(255,255,255,.6)";


        ripple.style.borderRadius =
            "50%";


        ripple.style.pointerEvents =
            "none";


        ripple.style.transform =
            "translate(-50%,-50%) scale(1)";


        ripple.style.animation =
            "ripple .6s ease-out";


        const rect =
            button.getBoundingClientRect();


        ripple.style.left =
            `${event.clientX - rect.left}px`;


        ripple.style.top =
            `${event.clientY - rect.top}px`;


        button.style.position =
            "relative";


        button.appendChild(
            ripple
        );


        setTimeout(
            () => ripple.remove(),
            600
        );

    }
);


/* ==========================================
   RIPPLE CSS
========================================== */

const rippleStyle =
    document.createElement("style");


rippleStyle.textContent = `

@keyframes ripple {

    from {

        transform:
            translate(-50%,-50%)
            scale(1);

        opacity: 1;

    }

    to {

        transform:
            translate(-50%,-50%)
            scale(25);

        opacity: 0;

    }

}

`;


document.head.appendChild(
    rippleStyle
);


/* ==========================================
   NAVBAR ACTIVE LINK
========================================== */

const sections =
    document.querySelectorAll(
        "section[id]"
    );


const navLinks =
    document.querySelectorAll(
        ".navbar nav a"
    );


window.addEventListener(
    "scroll",
    () => {

        let current = "";


        sections.forEach(section => {

            const sectionTop =
                section.offsetTop - 150;


            if (
                window.scrollY >=
                sectionTop
            ) {

                current =
                    section.getAttribute(
                        "id"
                    );

            }

        });


        navLinks.forEach(link => {

            link.style.color = "";


            if (
                link.getAttribute(
                    "href"
                ) ===
                "#" + current
            ) {

                link.style.color =
                    "#ff9d00";

            }

        });

    }
);
