window.onload = () => {
    const body = document.body;
    const wrap = document.querySelector(".wrap");
    const header = document.querySelector("header");
    const headerContainer = document.querySelector("header .container");
    const navbar = document.querySelector("nav");
    const navList = document.querySelector(".nav-list");
    const navLinks = document.querySelectorAll(".nav-list li")
    const burger = document.querySelector(".burger");
    const banner = document.querySelector(".banner");
    const headShot = document.querySelector(".head-shot");
    const slideRight = document.querySelectorAll(".slider-right");
    const slideUp = document.querySelectorAll(".slider-up");
    const slideLeft = document.querySelector(".slideLeft");

    const hider = headerContainer.getElementsByTagName("div");

    //burger toggle
    function navbarSlideIn() {
        navList.style.transition = "transform 0.5s ease";
        navList.style.transform = "translateX(0)";
        navbar.style.transition = "background-color 0.5s ease"
        navbar.style.backgroundColor = "rgba(0,0,0,0.5)";
        navLinks.forEach((link, index) => {
            link.style.animation = `navLinks 0.5s ease forwards ${(index + 1) / 5}s`;
        });
    };

    function navbarSlideOut() {
        navList.style.transform = "translateX(-100%)";
        navbar.style.backgroundColor = "rgba(0,0,0,0)"
        navLinks.forEach((link) => {
            link.style.animation = "";
        });
    };

    function hideHeader() {
        header.classList.toggle("menu-opened");
        for (let i = 0; i < hider.length; i++) {
            hider[i].style.transition = "opacity 0.5s ease";
            hider[i].style.opacity = "0";
        }
    }

    function showHeader() {
        header.classList.toggle("menu-opened");
        for (let i = 0; i < hider.length; i++) {
            hider[i].style.opacity = "1";
        }
    }

    function openMenu() {
        navbarSlideIn();
        hideHeader();
        isMenuOpen = true;
    }

    function closeMenu() {
        navbarSlideOut();
        showHeader();
        isMenuOpen = false;
    }


    function isClickingBurger(event) {
        if (event.target === burger) {
            openMenu();
        }
    }

    function isClickingNavList(event) {
        if (event.target !== navList) {
            closeMenu();
        }
    }


    let isMenuOpen = false;

    wrap.addEventListener("click", (event) => {
        if (!isMenuOpen) {
            isClickingBurger(event);
        } else {
            isClickingNavList(event);
        }
    })

    window.addEventListener("resize", () => {
        if (window.innerWidth >= 768) {
            closeMenu();
            navList.style.transition = "none";
            navList.style.transform = "translateX(0)";
            header.classList.remove("menu-opened")
        } else {
            navbarSlideOut();
        }
    })


    //Scrolled animation

    //nav scrolled animation
    const navOptions = {
        rootMargin: "-30% 0px 0px 0px",
    };
    const navScrolled = new IntersectionObserver(entries => {
        entries.forEach((entry, navScrolled) => {
            if (entry.isIntersecting) {
                header.classList.remove("nav-scrolled");
            } else {
                header.classList.add("nav-scrolled");
            }
        });
    }, navOptions);

    navScrolled.observe(banner);



    //Slide right
    const slideRightOptions = {
        rootMargin: "-30% 0px 0px 0px",
        threshold: 0.5
    };

    const slideRightScrolled = new IntersectionObserver(entries => {
        entries.forEach((entry, slideRightScrolled) => {
            if (entry.isIntersecting) {
                slideRight.forEach((slider) => {
                    slider.classList.add("slide-right");
                })
            }
        })
    }, slideRightOptions);

    slideRight.forEach((slider) => {
        slideRightScrolled.observe(slider);
    })



    //Slide up
    const slideUpOptions = {
        rootMargin: "-40% 0px 0px 0px",
        threshold: 1
    };

    const slideUpScrolled = new IntersectionObserver(entries => {
        entries.forEach((entry, slideUpScrolled) => {
            if (entry.isIntersecting) {
                slideUp.forEach((slider) => {
                    slider.classList.add("slide-up");
                })
            } else {
                return;
            }
        })
    }, slideUpOptions);
    slideUp.forEach((slider) => {
        slideUpScrolled.observe(slider);
    })
}