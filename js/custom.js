                        
/*===============================================
                        Work
================================================*/
$(document).ready(function(){

    $("#work").magnificPopup({
        delegate: 'a',
        type: 'image',
        gallery: {
            enabled: true
        }
    });

});
                        
/*===============================================
                        Team
================================================*/
$(document).ready(function(){

    $("#team-members").owlCarousel({
        items: 3,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true
    });

});

 /*===============================================
                                    Testimonials
            ================================================*/
            $(document).ready(function(){
                
                    $("#customers-testimonials").owlCarousel({
                        items: 1,
                        autoplay: true,
                        smartSpeed: 700,
                        loop: true,
                        autoplayHoverPause: true
                    });
                
            });
                            
                          /*===============================================
                            Stats
    ================================================*/
    $(document).ready(function(){

        $(".counter").counterUp({
            delay: 10,
            time: 3000
        });

    });
                        
                    /*===============================================
                            Stats
    ================================================*/
    $(document).ready(function(){

        $(".counter").counterUp({
            delay: 10,
            time: 3000
        });

    });
                        
                  /*===============================================
                                Clients
        ================================================*/
        $(document).ready(function(){

            $("#clients-list").owlCarousel({
                items: 6,
                autoplay: true,
                smartSpeed: 700,
                loop: true,
                autoplayHoverPause: true
            });

        });
                        



/*===============================================
                        Smooth-Scroll
================================================*/

$("a.smooth-scroll").click( function(evento){

    evento.preventDefault();
    var section = $(this).attr("href");

    $("html, body").animate({
        scrollTop: $(section).offset().top
    });

},);
           


/*===============================================
                        Button Top
================================================*/

$(function(){

    $(window).scroll(function() {

        if($(this).scrollTop() < 50) {
            $("#back-to-top").fadeOut();
        }else{
            $("#back-to-top").fadeIn();
        }

    });

});
                        
                    