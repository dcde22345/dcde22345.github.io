window.onload = () => {
    const body = document.body;
    const wrap = document.querySelector(".wrap");
    const header = document.querySelector("header");
    const navList = document.querySelector(".nav-list");
    const navLinks = document.querySelectorAll(".nav-list li")
    const burger = document.querySelector(".burger");
    const banner = document.querySelector(".banner");
    const headShot = document.querySelector(".head-shot");
    const slideRight = document.querySelectorAll(".slider-right");
    const slideUp = document.querySelectorAll(".slider-up");
    const slideLeft = document.querySelector(".slideLeft");


    //burger toggle
    function openMenu() {
        navList.style.transform = "translateX(0)";
        navLinks.forEach((link, index) => {
            link.style.animation = `navLinks 0.5s ease forwards ${(index + 1) / 5}s`;
        });
        isMenuOpen = true;
    }

    function closeMenu() {
        navList.style.transform = "translateX(-100%)";
        navLinks.forEach((link) => {
            link.style.animation = "";
        })
        isMenuOpen = false;
    }

    function isClickingBurger(event) {
        if (event.target === burger) {
            openMenu();
        }
    }

    function isClickingNavList(event) {
        if (event.target !== navList) {
            closeMenu()
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



    //Scrolled animation

    //nav animation
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
        rootMargin: "0px 0px -50% 0px"
    };

    const slideRightScrolled = new IntersectionObserver(entries => {
        entries.forEach((entry, slideRightScrolled) => {
            if (entry.isIntersecting) {
                slideRight.forEach((slider) => {
                    slider.classList.add("slide-right");
                })
            } else {
                return;
            }
        })
    }, slideRightOptions);

    slideRight.forEach((slider) => {
        slideRightScrolled.observe(slider);
    })



    //Slide up
    const slideUpOptions = {
        rootMargin: "0px 0px -50% 0px"
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