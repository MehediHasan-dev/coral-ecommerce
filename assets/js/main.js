/**
 * PRELOADER
 */

const /** {NodeElement} */ body = document.querySelector("body");
const /** {NodeElement} */ preloader = document.querySelector("[data-preloader]");


window.addEventListener("load", () => {
    preloader.classList.add("loaded");
    body.classList.add("body-loaded")
})



/**
 * Add event listener for multiple elements
 */

const addEventOnElement = function (elements, eventType, callback) {
    for (let i = 0; i < elements.length; i++) {
        const element = elements[i];
        element.addEventListener(eventType, callback);
    }
}

/**
 * add ovarlay for multiple elements
 */

/** {NodeElement} */ overlay = document.querySelector("[data-overlay]");
/** Add event listener to the overlay */
overlay.addEventListener("click", function () {
    if (mobileMenu.classList.contains("menu-open")) {
        mobileMenu.classList.remove("menu-open");
        body.classList.remove("menu-is-open");
        overlay.classList.remove("active");
    }
});



/**
 * Get Elements
 */
const /** {NodeList} */ menuToggleBtn = document.querySelectorAll("[data-menu-toggler]");
const /** {NodeElement} */ mobileMenu = document.querySelector("[data-mobile-menu]");




const toggleMenu = function () {
    mobileMenu.classList.toggle("menu-open");
    body.classList.toggle("menu-is-open");
    if (mobileMenu.classList.contains("menu-open")) {
        overlay.classList.add('active');
    } else {
        overlay.classList.remove('active');
    }
}

addEventOnElement(menuToggleBtn, "click", toggleMenu);


/**
 * SWIPER ITEM
 */
document.addEventListener('DOMContentLoaded', function () {
    let swiper; // Declare swiper variable to access later

    function initializeSwiper() {
        swiper = new Swiper('.swiper', {
            slidesPerView: 1,
            spaceBetween: 10,
            loop: true,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            breakpoints: {
                575: {
                    slidesPerView: 2,
                    spaceBetween: 30,
                }
            }
        });
    }

    function checkWindowSize() {
        const screenWidth = window.innerWidth;

        if (screenWidth >= 1200) {
            if (swiper) {
                swiper.destroy(true, true); // Destroy swiper when screen is >= 1200px
            }
            document.querySelector('.swiper-wrapper').style.display = 'flex'; // Set flex layout
            document.querySelectorAll('.swiper-slide').forEach(slide => {
                slide.style.width = 'max-content'; // Ensure slides use natural width
            });
        } else {
            if (!swiper) {
                initializeSwiper(); // Re-initialize swiper when screen is < 1200px
            }
        }
    }

    // Initialize swiper when the page loads for smaller screens
    if (window.innerWidth < 1200) {
        initializeSwiper();
    }

    // Listen for window resize to toggle swiper
    window.addEventListener('resize', checkWindowSize);
});




