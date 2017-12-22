                        
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