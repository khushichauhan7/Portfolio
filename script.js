 // Navigation Logic
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav-menu");
    const navLinks = document.querySelectorAll("nav a");

    hamburger.addEventListener("click", () => {
      hamburger.classList.toggle("active");
      navMenu.classList.toggle("active");
    });
    navLinks.forEach(n => n.addEventListener("click", () => {
      hamburger.classList.remove("active");
      navMenu.classList.remove("active");
    }));

    //  CUSTOM CURSOR LOGIC 
    const cursorDot = document.querySelector('.cursor-dot');
    const cursorOutline = document.querySelector('.cursor-outline');

    let mouseX = 0, mouseY = 0;
    let outlineX = 0, outlineY = 0;

    // 1. Track Mouse
    window.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      
      // Dot follows immediately
      cursorDot.style.left = `${mouseX}px`;
      cursorDot.style.top = `${mouseY}px`;
    });

    // 2. Animate Outline (Smooth Lag)
    function animateCursor() {
      // Lerp (Linear Interpolation) for lag effect
      let distX = mouseX - outlineX;
      let distY = mouseY - outlineY;
      
      outlineX += distX * 0.15; // Speed factor (lower = slower lag)
      outlineY += distY * 0.15;
      
      cursorOutline.style.left = `${outlineX}px`;
      cursorOutline.style.top = `${outlineY}px`;
      
      requestAnimationFrame(animateCursor);
    }
    animateCursor();

    // 3. Hover Effects
    // Select all interactive elements
    const interactiveElements = document.querySelectorAll('a, button, .pinned-note, .exp-card-body, .tva-event');

    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', () => {
        document.body.classList.add('hover-active');
      });
      el.addEventListener('mouseleave', () => {
        document.body.classList.remove('hover-active');
      });
    });