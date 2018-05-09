(function () {
    var menuBtn = document.getElementById("menu");
    var navModal = document.querySelector(".nav-modal");
    var navBarHeight = document.querySelector(".navigation");
  
    function clicked() {
      var btn = this,
          svg,
          svgTitles,
          svgTitle;
  
      requestAnimationFrame(function() {
        btn.setAttribute("aria-pressed", "false" === btn.getAttribute("aria-pressed"));
        svg = btn.getElementsByTagName("svg");
        if (svg) {
          svgTitles = svg[0].getElementsByTagName("title");
          if (svgTitles) {
            svgTitle = svgTitles[0];
            if ("false" === btn.getAttribute("aria-pressed")) {
              svgTitle.textContent = "Open";
              navModal.style.display = 'none';
              document.body.style.overflow = 'auto';
            } else {
              // menu is pressed and open
              svgTitle.textContent = "Close";
              navModal.style.display = 'block';
              document.body.style.overflow = 'hidden';
              navModal.style.top = navBarHeight.clientHeight + 'px';
            }
          }
        }
      });
    }
    if (menuBtn) {
      menuBtn.addEventListener("click", clicked, false);
    }
  }());