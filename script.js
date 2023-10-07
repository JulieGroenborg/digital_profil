//-----------------------------Slide-in-blur-scroll----------------------------------------------

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
});
const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => observer.observe(el));

//-----------------------------Fold ud-funktionen------------------------------------------------

document.addEventListener("DOMContentLoaded", function () {
  const accordionItems = document.querySelectorAll(".accordion-item");

  accordionItems.forEach((item) => {
    const header = item.querySelector(".accordion-header");
    const content = item.querySelector(".accordion-content");
    const plusMinusSymbol = item.querySelector(".symbol");

    header.addEventListener("click", function () {
      content.style.display = content.style.display === "block" ? "none" : "block";
      // Toggle between plus and minus symbols
      plusMinusSymbol.classList.toggle("plus");
      plusMinusSymbol.classList.toggle("minus");
    });
  });
});

//--------------------------------------------add-animation til plus symbol------------------------

window.addEventListener("load", zoomAnimation);

function zoomAnimation() {
  document.querySelector(".symbol").classList.add("pluszoom-animation");
}

document.querySelector(".symbol").addEventListener("click", andenAnimation);

function andenAnimation() {
  document.querySelector(".symbol").classList.remove("pluszoom-animation");
}

//---------------------------------

document.querySelector("body").setAttribute("data-theme", "dark");
// document.querySelector("input").setAttribute("checked", "true");
document.querySelector("input").addEventListener("change", skiftFarve);

function skiftFarve() {
  if (document.querySelector("input").checked) {
    console.log("du er checked");
    document.querySelector("body").setAttribute("data-theme", "blue");
    document.querySelector("#kanin_line").classList.add("hide");
    document.querySelector("#kanin").classList.remove("hide");
    document.querySelectorAll(".vector_blue").forEach((element) => {
      element.classList.remove("hide");
    });

    document.querySelectorAll(".vector_brown").forEach((element) => {
      element.classList.add("hide");
    });
  } else if (!document.querySelector("input").checked) {
    console.log("du er ikke checked");
    document.querySelector("body").setAttribute("data-theme", "dark");
    document.querySelector("#kanin").classList.add("hide");
    document.querySelector("#kanin_line").classList.remove("hide");

    document.querySelectorAll(".vector_blue").forEach((element) => {
      element.classList.add("hide");
    });

    document.querySelectorAll(".vector_brown").forEach((element) => {
      element.classList.remove("hide");
    });
  }
}

/*--------------animationsleg for "Julie Grønborg Eriksen"------------------*/

gsap.matchMedia().add("(prefers-reduced-motion: no-preference)", () => {
  gsap.to("#julie", {
    x: "0%",
    y: 130,
    scale: 2,
    opacity: 0.05,
    // rotation: -90,
    position: "sticky",
    scrollTrigger: {
      trigger: "#julie",
      scrub: true,
      start: "top 5%",
      end: "+=300px",
      // markers: true,
      toggleActions: "play none none reverse",
    },
  });
});

/*---------------animationsleg for close-up foto---------------*/

// Wrap your code in a function to ensure it runs after the DOM is loaded.
document.addEventListener("DOMContentLoaded", function () {
  // Select the image element
  const img = document.querySelector("#whoamI_fig > img");

  // Define the animation using GSAP
  const imgAnimation = gsap.timeline({
    scrollTrigger: {
      trigger: "#whoamI_fig", // Trigger element
      start: "top 20%", // Start animation when the trigger element is at the middle of the viewport
      end: "bottom 30%", // End animation when the trigger element is at the middle of the viewport
      scrub: true, // Smoothly scrub through the animation
    },
  });

  // Add animation properties (in this case, move the image on the Y-axis)
  imgAnimation.to(img, {
    y: 150, // Adjust this value to control the amount of movement
  });
});

/*-----------------animationsleg på mål med praktik-line-X---------------------*/

// var path = document.querySelector(".line");
// var length = path.getTotalLength();

// Initialize GSAP and ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// Create a timeline for drawing the SVG path
const timeline = gsap.timeline({
  defaults: { duration: 1 },
  paused: true,
});

// Define the animation steps
// timeline.to(".line", { strokeDashoffset: 0 }, "one"); // Animate stroke-dashoffset to reveal the path

// Create a ScrollTrigger for the animation
ScrollTrigger.create({
  trigger: ".line", // Trigger on the element with class ".line"
  start: "top center", // Start when the trigger element's center reaches the top of the viewport
  end: "center center", // End when the trigger element's center reaches the bottom of the viewport
  // markers: true,
  onUpdate: ({ trigger, progress }) => {
    trigger.style.setProperty("--p", 1 - progress.toFixed(5));
  },
  scrub: 2, // Scrub the animation with a 0.2 second smoothing
  // animation: timeline, // Use the created timeline for the animation
});

/*-----------------------cursor-----------------*/
// const root = document.querySelector("#Ican");

function updateCursor(e) {
  x = e.clientX / window.innerWidth;
  y = e.clientY / window.innerHeight;
  document.documentElement.style.setProperty("--x", x.toFixed(5));
  document.documentElement.style.setProperty("--y", y.toFixed(5));
}
document.body.addEventListener("pointermove", updateCursor);
