//Sticky menu background
window.addEventListener('scroll', function() {
    if (window.scrollY > 150) {
        document.querySelector('#navbar').style.background = rgba(243, 243, 243, 1);
    } else {
        document.querySelector('#navbar').style.background = rgba(243, 243, 243, 0);
    }
});

//Smooth Srolling
$('#navbar a').on('click', function(event) {
    if (this.hash !== '') {
        event.preventDefault();

        const hash = this.hash;

        $('html, body').animate(
            {
                scrollTop: $(hash).offset().top - 65
            },
            800
        );
    }
});

$('.btn').on('click', function(event) {
    if (this.hash !== '') {
        event.preventDefault();

        const hash = this.hash;

        $('html, body').animate(
            {
                scrollTop: $(hash).offset().top - 65
            },
            800
        );
    }
});