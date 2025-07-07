document.addEventListener("DOMContentLoaded", function () {
  AOS.init({
    duration: 1000,
    once: true,
    offset: 100,
  });
});

// HEADER
document.addEventListener("DOMContentLoaded", function () {
  // AOS Init
  AOS.init({ duration: 1000 });

  const header = document.getElementById("site-header");
  const logo = document.getElementById("header-logo");
  const menuToggle = document.getElementById("mobile-menu-toggle");
  const mobileMenu = document.getElementById("mobile-menu");
  const closeMobileMenuBtn = document.getElementById("close-mobile-menu");

  let lastScrollY = window.scrollY;
  let menuOpen = false;

  const newLogo = "./assets/new-logo.png";
  const oldLogo = "./assets/logo.png";

  // Scroll behavior
  window.addEventListener("scroll", () => {
    const currentScrollY = window.scrollY;

    // Show/hide header based on scroll direction
    if (currentScrollY > lastScrollY && currentScrollY > 50) {
      header.classList.add("-translate-y-full");
    } else {
      header.classList.remove("-translate-y-full");
    }

    // Background and logo switch
    if (currentScrollY > 50) {
      header.classList.add("bg-black", "shadow-md");
      logo.setAttribute("src", newLogo);
    } else {
      header.classList.remove("bg-black", "shadow-md");
      logo.setAttribute("src", oldLogo);
    }

    lastScrollY = currentScrollY;
  });

  // Toggle mobile menu
  menuToggle.addEventListener("click", () => {
    menuOpen = !menuOpen;
    mobileMenu.classList.toggle("hidden", !menuOpen);
    menuToggle.innerHTML = menuOpen ? "&times;" : "&#9776;";
  });

  // Close mobile menu on CTA
  closeMobileMenuBtn.addEventListener("click", () => {
    menuOpen = false;
    mobileMenu.classList.add("hidden");
    menuToggle.innerHTML = "&#9776;";
  });

  // Close menu on nav link click
  mobileMenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      menuOpen = false;
      mobileMenu.classList.add("hidden");
      menuToggle.innerHTML = "&#9776;";
    });
  });
});

// WHY CHOOSE
document.addEventListener("DOMContentLoaded", function () {
  AOS.init({ duration: 1000, offset: 100 });

  const points = [
    {
      title: "Premium Lifestyle, Affordable Price",
      details: [
        "Starting at ₹45 Lakhs, own a luxury home without compromising on quality or comfort.",
      ],
    },
    {
      title: "Prime Location",
      details: [
        "Located at NH-58, Modipuram (Ansal Town), Meerut, Anandam Floors is just minutes from:",
        "Meerut Metro Station (Upcoming)",
        "Top Schools & Universities",
        "Hospitals, Malls & Public Parks",
      ],
    },
    {
      title: "World-Class Amenities",
      details: [
        "Landscaped Gardens & Kids Play Area",
        "Clubhouse with Gym & Indoor Games",
        "Private Parking & 24x7 Security",
        "Gated Community with CCTV Surveillance",
        "Jogging Track & Badminton Court",
        "Designer Entry Gate & Common Lighting",
      ],
    },
    {
      title: "Smart Investment",
      details: [
        "Freehold Property: 100% ownership rights",
        "RERA Approved: Full legal transparency",
        "High Rental Yield: Excellent rental potential due to connectivity & development",
        "Bank Loans Available from top institutions",
      ],
    },
  ];

  const tabsContainer = document.getElementById("whychoose-tabs");
  const detailsContainer = document.getElementById("whychoose-details");
  const titleDisplay = document.getElementById("whychoose-title");

  let selectedIndex = 0;

  function renderTabs() {
    tabsContainer.innerHTML = "";
    points.forEach((point, idx) => {
      const li = document.createElement("li");
      li.className = `flex items-center gap-3 cursor-pointer font-montserrat text-gray-800 ${
        selectedIndex === idx ? "text-[#AA0E27] font-semibold" : ""
      }`;

      li.innerHTML = `
          <svg class="w-6 h-6 flex-shrink-0 ${
            selectedIndex === idx ? "text-[#AA0E27]" : "text-gray-500"
          }" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4" />
          </svg>
          <span class="text-[16px] sm:text-[18px] ${
            selectedIndex === idx ? "text-[#AA0E27]" : ""
          }">${point.title}</span>
        `;

      li.addEventListener("click", () => {
        selectedIndex = idx;
        renderTabs();
        renderDetails();
      });

      tabsContainer.appendChild(li);
    });
  }

  function renderDetails() {
    const point = points[selectedIndex];
    titleDisplay.textContent = point.title;
    detailsContainer.innerHTML = "";
    point.details.forEach((detail) => {
      const li = document.createElement("li");
      li.textContent = detail;
      detailsContainer.appendChild(li);
    });
  }

  // Initial render
  renderTabs();
  renderDetails();
});

// PROJECTS SECTION
document.addEventListener("DOMContentLoaded", () => {
  // Initialize AOS
  AOS.init({ duration: 1000, once: true, offset: 100 });

  // Initialize Swiper
  const swiper = new Swiper(".project-swiper", {
    loop: true,
    spaceBetween: 30,
    slidesPerView: 1,
    breakpoints: { 768: { slidesPerView: 2 } },
    autoplay: { delay: 3000, disableOnInteraction: false },
    navigation: {
      nextEl: ".custom-next",
      prevEl: ".custom-prev",
    },
  });
});

document
  .getElementById("site-visit-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    const form = e.target;

    const formData = {
      name: form.name.value,
      email: form.email.value,
      phone: form.phone.value.trim(),
      message: form.message.value,
    };

    // Phone number validation: Must be exactly 10 digits
    const phonePattern = /^\d{10}$/;
    if (!phonePattern.test(formData.phone)) {
      alert("Please enter a valid 10-digit phone number.");
      return; // Stop form submission
    }

    fetch(
      "https://script.google.com/macros/s/AKfycbwFUrsuEzkLUjc07z9MXmKwKSb1zGNo8gCJrmNLI0mCqkhopIjdHYqzvT2zcTKMpqL7Xg/exec",
      {
        method: "POST",
        body: JSON.stringify(formData),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.result === "success") {
          alert("Form submitted successfully!");
          form.reset();
        } else {
          alert("Error: " + (data.message || "Unknown error"));
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("Submission failed. Check console for details.");
      });
  });
