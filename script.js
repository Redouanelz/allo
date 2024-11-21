   // Wait until the DOM is fully loaded
   document.addEventListener("DOMContentLoaded", () => {
    // Toggle mobile menu
    const menuToggle = document.getElementById("menu-toggle");
    const mobileMenu = document.getElementById("mobile-menu");

    if (menuToggle && mobileMenu) {
      menuToggle.addEventListener("click", () => {
        mobileMenu.classList.toggle("hidden");
      });
    }

    // Initialize carousel
    let currentIndex = 0;
    const slides = document.querySelectorAll("#carousel img");
    const prevButton = document.getElementById("prev");
    const nextButton = document.getElementById("next");
    const indicators = document.querySelectorAll(".flex button");

    if (prevButton && nextButton && slides.length > 0 && indicators.length > 0) {
      function updateCarousel() {
        const offset = -currentIndex * 100;
        document.getElementById("carousel").style.transform = `translateX(${offset}%)`;

        // Update indicators
        indicators.forEach((indicator, index) => {
          indicator.classList.toggle("bg-teal-600", index === currentIndex);
          indicator.classList.toggle("bg-gray-500", index !== currentIndex);
        });
      }

      prevButton.addEventListener("click", () => {
        if (currentIndex > 0) {
          currentIndex--;
        } else {
          currentIndex = slides.length - 1; // Loop to last slide
        }
        updateCarousel();
      });

      nextButton.addEventListener("click", () => {
        if (currentIndex < slides.length - 1) {
          currentIndex++; // Fix this condition to loop to the first slide
        } else {
          currentIndex = 0; // Loop to first slide
        }
        updateCarousel();
      });

      // Initialize carousel on page load
      updateCarousel();
    }

    // Select all cards
    const cards = document.querySelectorAll('.card');

    // Add hover effect dynamically
    cards.forEach((card) => {
      card.addEventListener('mouseenter', () => {
        console.log('Hovered on:', card.querySelector('h1')?.textContent);
        // Example: Change background color dynamically
        card.style.backgroundColor = '#f0f9ff'; // Light cyan
      });

      card.addEventListener('mouseleave', () => {
        // Reset background color
        card.style.backgroundColor = '#ffffff'; // White
      });
    });

    // Intersection Observer for animations
    const elements = document.querySelectorAll(".core .text-left, .core img");
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.animation = "fadeInUp 1s ease-in-out";
          observer.unobserve(entry.target); // Stop observing once animation is triggered
        }
      });
    }, { threshold: 0.5 });

    elements.forEach(el => observer.observe(el));

    // Handle animated elements
    const animatedElements = document.querySelectorAll(".animate");
    const animatedObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
        }
      });
    }, { threshold: 0.2 });

    animatedElements.forEach((el) => animatedObserver.observe(el));

    // Function to animate numbers
    function animateNumbers(element, targetNumber, duration) {
      let start = 0;
      const increment = targetNumber / (duration / 20); // Determines the increment per step

      const updateNumber = () => {
        start += increment;
        if (start >= targetNumber) {
          element.textContent = targetNumber.toLocaleString() + (element.dataset.target === "100" ? "%" : ""); // Add "%" if target is 100
          return;
        }
        element.textContent = Math.floor(start).toLocaleString() + (element.dataset.target === "100" ? "%" : "");
        requestAnimationFrame(updateNumber);
      };

      requestAnimationFrame(updateNumber);
    }

    // Function to check if an element is in the viewport
    function isInViewport(el) {
      const rect = el.getBoundingClientRect();
      return rect.top >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight);
    }

    // Handle scroll event for number animation
    function handleScroll() {
      const parallaxSection = document.querySelector(".parallax");
      const numberElements = document.querySelectorAll(".number");

      if (parallaxSection && isInViewport(parallaxSection)) {
        numberElements.forEach((numberElement) => {
          const targetNumber = parseInt(numberElement.dataset.target);
          if (!numberElement.classList.contains("animated")) {
            numberElement.classList.add("animated"); // Prevent re-triggering
            animateNumbers(numberElement, targetNumber, 2000);
          }
        });
        // Remove event listener after animation to prevent re-triggering
        window.removeEventListener("scroll", handleScroll);
      }
    }

    // Attach scroll event listener
    window.addEventListener("scroll", handleScroll);
  });


  document.addEventListener("DOMContentLoaded", () => {
  const animateSections = document.querySelectorAll(".animate-section");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("opacity-100", "animate-slide-up");
          observer.unobserve(entry.target); // Stop observing after animation
        }
      });
    },
    { threshold: 0.2 } // Trigger when 20% of the section is visible
  );

  animateSections.forEach((section) => observer.observe(section));
});