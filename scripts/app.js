window.onload = () => {
    const header = document.querySelector("header");
    const banner = document.querySelector(".banner");
    const headShot = document.querySelector(".head-shot");
    const slideRight = document.querySelectorAll(".slider-right");
    const slideUp = document.querySelectorAll(".slider-up");
    const slideLeft = document.querySelector(".slideLeft");

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