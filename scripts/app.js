window.onload = () => {
    //getting elements
    const html = document.querySelector("html");
    const body = document.body;
    const wrap = document.querySelector(".wrap");

    const header = document.querySelector("header");
    const headerContainer = document.querySelector("header .container");
    const navbar = document.querySelector("nav");
    const navList = document.querySelector(".nav-list");
    const navLinks = document.querySelectorAll(".nav-list li")
    const homeBtn = document.querySelector("#homeBtn");
    const aboutBtn = document.querySelector("#aboutBtn");
    const skillBtn = document.querySelector("#skillBtn");
    const experienceBtn = document.querySelector("#experienceBtn");
    const contectBtn = document.querySelector("#contectBtn");

    const about = document.querySelector(".about")
    const headShot = document.querySelector(".head-shot");
    const helloTitle = document.querySelector(".hello-title");
    const autobiograph = document.querySelector(".autobiograph");

    const burger = document.querySelector(".burger");
    const banner = document.querySelector(".banner");

    const skills = document.querySelector(".skills");
    const skillContainer = document.querySelector(".skills .container")
    const skillItem = document.querySelectorAll(".diagram .item");

    const experience = document.querySelector(".experience");
    const experienceContainer = document.querySelector(".experience .container");
    const experienceItem = document.querySelectorAll(".experience .item");

    const contect = document.querySelector(".contect");
    const contectContainer = document.querySelector(".contect .container")



    //getting the child elements
    const hider = headerContainer.getElementsByTagName("div");

    //special use
    const slideRight = document.querySelectorAll(".slider-right");
    const slideUp = document.querySelectorAll(".slider-up");

    //burger toggle

    function navbarSlideIn() {
        navList.style.transition = "transform 0.5s ease";
        navList.style.transform = "translateX(0)";
        navbar.style.transition = "background-color 0.5s ease"
        navbar.style.pointerEvents = "all";
        navbar.style.backgroundColor = "rgba(0,0,0,0.5)";
        navLinks.forEach((link, index) => {
            link.style.animation = `navLinks 0.5s ease forwards ${(index + 1) / 5}s`;
        });
    };

    function navbarSlideOut() {
        navList.style.transform = "translateX(-100%)";
        navbar.style.backgroundColor = "rgba(0,0,0,0)"
        navbar.style.pointerEvents = "none";
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
        if (window.innerWidth >= 767) {
            closeMenu();
            navList.style.transition = "none";
            navList.style.transform = "translateX(0)";
            navbar.style.pointerEvents = "all";
            header.classList.remove("menu-opened")
        } else {
            navbarSlideOut();
        }
    })

    homeBtn.addEventListener("click", (event) => {
        event.preventDefault();
        window.scrollTo({ top: banner.offsetTop, left: 0, behavior: "smooth" });
    });

    aboutBtn.addEventListener("click", (event) => {
        event.preventDefault();
        window.scrollTo({ top: about.offsetTop - header.clientHeight + 1, left: 0, behavior: "smooth" });
    });

    skillBtn.addEventListener("click", (event) => {
        event.preventDefault();
        window.scrollTo({ top: skills.offsetTop - header.clientHeight, left: 0, behavior: "smooth" });
    });

    experienceBtn.addEventListener("click", (event) => {
        event.preventDefault();
        window.scrollTo({ top: experience.offsetTop - header.clientHeight + 1, left: 0, behavior: "smooth" });
    });

    contectBtn.addEventListener("click", (event) => {
        event.preventDefault();
        window.scrollTo({ top: contect.offsetTop - header.clientHeight, left: 0, behavior: "smooth" });
    });


    //slide anmaition

    //Slide right
    const slideRightOptions = {
        rootMargin: "0px 0px -30% 0px",
        threshold: 0.3
    };

    const slideRightScrolled = new IntersectionObserver((entries, slideRightScrolled) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("slide-right");
                slideRightScrolled.unobserve(entry.target);
            }
        })
    }, slideRightOptions);

    slideRight.forEach((slider) => {
        slideRightScrolled.observe(slider);
    })

    //Slide up
    const slideUpOptions = {
        rootMargin: "0px 0px -20% 0px",
    };

    const slideUpScrolled = new IntersectionObserver((entries, slideUpScrolled) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("slide-up");
                slideUpScrolled.unobserve(entry.target);
            }
        })
    }, slideUpOptions);

    slideUp.forEach((slider) => {
        slideUpScrolled.observe(slider);
    })



    //navbar application
    const navOptions = {
        rootMargin: "-30% 0px 0px 0px",
    };
    const navScrolled = new IntersectionObserver((entries, navScrolled) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                header.classList.remove("nav-scrolled");
            } else {
                header.classList.add("nav-scrolled");
            }
        });
    }, navOptions);

    navScrolled.observe(banner);


    //Lazy loading

    //about application
    const aboutOptins = {
        rootMargin: "0px 0px -50% 0px"
    };

    const aboutScrolled = new IntersectionObserver((entries, aboutScrolled) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                headShot.classList.add("slide-right")
                setTimeout(() => {
                    helloTitle.classList.add("slide-up");
                }, 500)
                for (let i = 0; i < autobiograph.children.length; i++) {
                    setTimeout(() => {
                        autobiograph.children[i].classList.add("slide-up");
                    }, (i + 2) * 350);
                }
                aboutScrolled.unobserve(entry.target);
            }
        });
    }, aboutOptins);

    aboutScrolled.observe(about);

    //skill progress application

    const progressOptions = {
        rootMargin: "0px 0px -50% 0px",
    };

    const progressScrolled = new IntersectionObserver((entries, progressScrolled) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    skillItem.forEach((item, index) => {
                        setTimeout(() => {
                            item.classList.add("scrolled");
                        }, index * 300);
                    });
                    progressScrolled.unobserve(entry.target);
                }
            });
        },
        progressOptions);

    progressScrolled.observe(skillContainer);

    //Time line application
    const timeLineOptions = {
        rootMargin: "0px 0px -40% 0px",
    };

    const timeLineScrolled = new IntersectionObserver((entries, timeLineScrolled) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("scrolled");
                experienceItem.forEach((item, index) => {
                    setTimeout(() => {
                        item.classList.add("fade-in");
                    }, index * 800);
                })
                timeLineScrolled.unobserve(entry.target);
            }
        })
    }, timeLineOptions);

    timeLineScrolled.observe(experienceContainer);

    //Contect application
    const contectOptions = {
        rootMargin: "0px 0px -30% 0px"
    };

    const contectScrolled = new IntersectionObserver((entries, contectScrolled) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("scrolled");
                contectScrolled.unobserve(entry.target);
            }
        })
    }, contectOptions);

    contectScrolled.observe(contectContainer);
}