// Navbar

    // add white bg when scroll
    window.addEventListener("scroll", function() {
        var header = document.querySelector("header");
        //
        header.classList.toggle("sticky", window.scrollY > 0);
    })

    // toggle movil menu
    const navSlide = () => {
        const burger = document.querySelector('.burger');
        const navbar_sections = document.querySelector('.navbar-sections');
        const nav_items = document.querySelectorAll('.nav-item');
        const header = document.querySelector("header");

        
        burger.addEventListener('click', () => {
            // antes que nada poner fondo blanco
            // en caso de que no haya dado scroll
            header.classList.toggle('sticky-movil');

            // toggle navbar
            navbar_sections.classList.toggle('burger-active');

            // Animate nav items
            nav_items.forEach((item, index)=> {
                if (item.style.animation) {
                    item.style.animation = '';
                } else {
                    item.style.animation =  `nav-items-fade 0.5s ease forwards ${index / 7 + 0.3}s`;
                }
            });

            // burger animation
            burger.classList.toggle('burger-toggle-animate');

        });
    }

    document.body.addEventListener('click', () => {
        // console.log(event.target);
        // console.log(event.target.tagName);
        // var x = document.querySelector(event.target).attributes('id');
        var e = event.target.nodeName;
        // console.log(window.event.target.id);
    });

    navSlide();

    // puedo llamar varias funciones  de mejor manera asi
    // const app = () => {
    //     navSlide();
    //     navSlide();
    //     navSlide();
    // }
