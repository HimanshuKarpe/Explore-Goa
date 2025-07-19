// Loader
window.addEventListener("load", () => document.getElementById("loader").style.display = "none");

// Back to top
const topBtn = document.getElementById("backToTop");
    window.onscroll = () => {
    topBtn.style.display = window.scrollY > 200 ? "block" : "none";
};

// Dark Mode Toggle
const toggleThemeBtn = document.getElementById("toggleTheme");
if (toggleThemeBtn) {
  toggleThemeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    localStorage.setItem("theme", document.body.classList.contains("dark") ? "dark" : "light");
  });
}

// Apply saved theme on load
if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark");
}

topBtn.onclick = () => window.scrollTo({ top: 0, behavior: "smooth" });

document.getElementById("tripForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const days = document.getElementById("days").value;
  let itinerary = "";

  if (days === "3") {
    itinerary = `
      <h3>Your 3-Day Trip:</h3>
      <ul>
        <li>Day 1: Baga Beach & Aguada Fort</li>
        <li>Day 2: Old Goa Churches & River Cruise</li>
        <li>Day 3: Shopping & Sunset at Anjuna</li>
      </ul>
    `;
  } else {
    itinerary = `
      <h3>Your 5-Day Trip:</h3>
      <ul>
        <li>Day 1: Relax at Baga & Calangute Beach</li>
        <li>Day 2: Visit Aguada Fort & Chapora</li>
        <li>Day 3: Churches + Spice Plantation</li>
        <li>Day 4: South Goa Beaches</li>
        <li>Day 5: Street Shopping + Cruise</li>
      </ul>
    `;
  }

  document.getElementById("itineraryResult").innerHTML = itinerary;
});

// Itinerary planner code stays as-is

// Contact form logic
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  document.getElementById("formStatus").innerText = "Thank you! We'll get back to you soon.";
  this.reset();
});

// Tourist Statistics (using Chart.js)
const ctx = document.getElementById("visitorChart");
if (ctx) {
  new Chart(ctx, {
    type: "bar",
    data: {
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
      datasets: [{
        label: "Visitors (in thousands)",
        data: [80, 95, 150, 120, 90, 60],
        backgroundColor: "#00796b"
      }]
    },
    options: {
      responsive: true,
      plugins: {
        legend: { display: false }
      },
      scales: {
        y: { beginAtZero: true }
      }
    }
  });
}

const testimonials = document.querySelectorAll(".testimonial");
let currentTestimonial = 0;

function showNextTestimonial() {
  testimonials[currentTestimonial].classList.remove("active");
  currentTestimonial = (currentTestimonial + 1) % testimonials.length;
  testimonials[currentTestimonial].classList.add("active");
}

// Start the slider
if (testimonials.length) {
  testimonials[currentTestimonial].classList.add("active");
  setInterval(showNextTestimonial, 15000); // 15 seconds
}

