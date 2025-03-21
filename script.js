$(document).ready(function () {
  // Smooth scroll for navigation
  $('a[href*="#"]').on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({
      scrollTop: $($(this).attr('href')).offset().top - 70
    }, 500, 'linear');
  });

  // Navbar color change on scroll
  $(window).scroll(function () {
    if (this.scrollY > 20) {
      $(".navbar").addClass("sticky");
    } else {
      $(".navbar").removeClass("sticky");
    }

    // Scroll up button visibility
    if (this.scrollY > 500) {
      $(".scroll-up-btn").addClass("show");
    } else {
      $(".scroll-up-btn").removeClass("show");
    }

    // Fade in elements on scroll
    $(".fadein").each(function (i) {
      const elementTop = $(this).offset().top;
      const viewportBottom = $(window).scrollTop() + $(window).height();
      
      if (viewportBottom > elementTop + 100) {
        $(this).addClass("showme");
      }
    });
  });

  // Smooth scroll to top
  $(".scroll-up-btn").click(function () {
    $("html").animate({ scrollTop: 0 }, 500);
  });

  // Typing animation
  const typed = new Typed(".typing", {
    strings: [
      "Full Stack Developer",
      "Computer Engineering Student",
      "UI/UX Designer",
      "ML & AI Enthusiast"
    ],
    typeSpeed: 80,
    backSpeed: 40,
    loop: true,
    smartBackspace: true,
    backDelay: 1000,
    startDelay: 500
  });

  // Mobile menu toggle
  $(".menu-btn").click(function () {
    $(".navbar .menu").toggleClass("active");
    $(".menu-btn i").toggleClass("active");
  });

  // Close mobile menu when clicking outside
  $(document).click(function(e) {
    if (!$(e.target).closest('.navbar').length) {
      $(".navbar .menu").removeClass("active");
      $(".menu-btn i").removeClass("active");
    }
  });

  // Project cards hover effect
  $(".project-card").hover(
    function() {
      $(this).find("img").css("transform", "scale(1.05)");
    },
    function() {
      $(this).find("img").css("transform", "scale(1)");
    }
  );

  // Modal functionality
  const modal = document.getElementById("resumeModal");
  const btn = document.getElementById("viewResumeBtn");
  const span = document.getElementsByClassName("close")[0];

  // Open modal
  btn.onclick = function() {
      modal.style.display = "block";
      document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
  }

  // Close modal
  span.onclick = function() {
      modal.style.display = "none";
      document.body.style.overflow = 'auto'; // Re-enable scrolling
  }

  // Close modal when clicking outside
  window.onclick = function(event) {
      if (event.target == modal) {
          modal.style.display = "none";
          document.body.style.overflow = 'auto'; // Re-enable scrolling
      }
  }

  // Close modal with Escape key
  document.addEventListener('keydown', function(event) {
      if (event.key === "Escape" && modal.style.display === "block") {
          modal.style.display = "none";
          document.body.style.overflow = 'auto'; // Re-enable scrolling
      }
  });

  // Load More functionality
  $("#loadMoreFrontend").click(function() {
    $("#moreFrontendProjects").slideToggle();
    $(this).text(function(i, text) {
        return text === "Load More Projects" ? "Show Less" : "Load More Projects";
    });
  });

  $("#loadMoreUiUx").click(function() {
    $("#moreUiUxProjects").slideToggle();
    $(this).text(function(i, text) {
        return text === "Load More Projects" ? "Show Less" : "Load More Projects";
    });
  });
});
