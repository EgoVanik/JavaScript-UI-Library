import './lib/lib';

// $('.active').on('click', sayHello);
// $('.active').off('click', sayHello);
// $('.active').click(sayHello);
// function sayHello() {
//     console.log('hello');
// }

// $('button').on('click', function() {
//     $(this).toggleClass('active');
// });

// $('button').on('click', function() {
//     $('div').eq(2).toggleClass('active');
// });

// $('button').toggleAttr('data-btn');
// $('button').html('hello');

// $('div').click(function() {
//     console.log($(this).index());
// });

// console.log($('div').eq(2).find('.some'));

// console.log($('.some').eq(1).closest('.findme'));
// console.log($('.some').closest('.findme'));
// console.log($('.findme').siblings('.findme'));
// $('.findme').fadeIn(1800);
$('#first').on('click', () => {
    $('div').eq(1).fadeToggle(800);
});

$('[data-count="second"]').on('click', () => {
    $('div').eq(2).fadeToggle(800);
});

$('button').eq(2).on('click', () => {
    $('.w-500').fadeOut(800);
});
$('.dropdown-toggle').dropdown();