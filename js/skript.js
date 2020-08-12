$(document).ready(function(){
 $('#username').click(function(){
     alert('ты точно хочешь миллион')
 });
    $('input').change(function(){
       $('#username').text('Привет, '+$(this).val()); 
    });
     $('input').change(function(){
       $('#uername').text('Привет, '+$(this).val()); 
    });
    
    $('.header_burger').click(function(event){
     $(this).toggleClass('type');
        $('.header_menu').slideToggle(300)
 });
    $('.slider').slick({
        arrows:true,
        dots:true,
        adaptiveHeight:true,
        slidesToShow:2,
        slidesToScroll:2,
        speed:1600,
        easeng:'ease-in-out',
        infinite:true,
        initialSlide:3,
        autoplay:true,
        autoplaySpeed:5000,
        pauseOnfocus:true,
        pauseOnHover:true,
        pauseOnDotsHover:true,
        draggable:true,
        swipe:true,
        touchTrashhold:20,
        waitForAnimate:true,
        centerMode:false
    });
    
 
    
}); 

