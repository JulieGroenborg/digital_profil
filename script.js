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

document.querySelector("body").setAttribute("data-theme", "blue");
document.querySelector("input").setAttribute("checked", "true");

document.querySelector("input").addEventListener("change", skiftFarve);

function skiftFarve() {
  if (document.querySelector("input").checked) {
    console.log("du er checked");
    document.querySelector("body").setAttribute("data-theme", "blue");
    // localStorage.setItem("theme", "hawaii");
  } else if (!document.querySelector("input").checked) {
    console.log("du er ikke checked");
    document.querySelector("body").setAttribute("data-theme", "neutral");
    // localStorage.setItem("theme", "dark");
  }
}
