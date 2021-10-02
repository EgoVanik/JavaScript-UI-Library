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

$('button').on('click', function() {
    $('div').eq(2).toggleClass('active');
});

// $('button').toggleAttr('data-btn');
// $('button').html('hello');

$('div').click(function() {
    console.log($(this).index());
});

// console.log($('div').eq(2).find('.some'));

// console.log($('.some').eq(1).closest('.findme'));
// console.log($('.some').closest('.findme'));
// console.log($('.findme').siblings('.findme'));
$('.findme').fadeIn(1800);
