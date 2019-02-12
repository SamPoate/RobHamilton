//Sticky menu background
$(document).on('scroll', function (e) {

    var alpha = $(document).scrollTop() / 250;

           $('#navbar').css('background-color', 'rgba(243,243,243,' + alpha + ')');
           $('#navbar ul a').css('color', '#333');
 });

//Smooth Srolling
$("#navbar a").on("click", function(event) {
  if (this.hash !== "") {
    event.preventDefault();

    const hash = this.hash;

    $("html, body").animate(
      {
        scrollTop: $(hash).offset().top - 65
      },
      800
    );
  }
});

$(".btn").on("click", function(event) {
  if (this.hash !== "") {
    event.preventDefault();

    const hash = this.hash;

    $("html, body").animate(
      {
        scrollTop: $(hash).offset().top - 65
      },
      800
    );
  }
});
