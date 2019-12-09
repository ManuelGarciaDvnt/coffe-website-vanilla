window.onload = function(){

    $('#btnArrow').click(function(e){
        e.preventDefault();
        $('body,html').animate({
            scrollTop: $(this.hash).offset().top
        }, 300);
    });

    

}