window.onload = () => {
    const header = document.querySelector("header");
    const banner = document.querySelector(".banner");

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

}