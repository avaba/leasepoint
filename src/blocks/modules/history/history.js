$(function(){
  $('.history-slider').slick({
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
  });

  $('.history__tabs').on('click', '.history__tabs_item:not(.history__tabs_item--active)', function() {
    $(this).addClass('history__tabs_item--active').siblings().removeClass('history__tabs_item--active')
  });

  $('.history__tabs_item').on('click', function(){
    let target = $(this).data('target');
    $('.history__content[data-id=' + target + ']').addClass('history__content--active').siblings().removeClass('history__content--active');
    $('.history-slider').slick('setPosition');
  }); 
  
});