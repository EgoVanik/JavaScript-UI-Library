import $ from '../core';

$.prototype.tab = function () {
  for (let i = 0; i < this.length; i++) {
    $(this[i]).on('click', () => {
        $(this[i])
            .addClass('tab-item--active')
            .siblings().removeClass('tab-item--active') //добавляем класс активности и убираем его у соседних элементов
            .closest('.tab').find('.tab-content').removeClass('tab-content--active') //находим родителя
            .eq($(this[i]).index()).addClass('tab-content--active') // узнаем номер таба
        });
  }  
};

$('[data-tabpanel] .tab-item').tab();