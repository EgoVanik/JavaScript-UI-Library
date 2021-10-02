const $ = function (selector) {
    return new $.prototype.init(selector);
};

$.prototype.init = function(selector) {
    if (!selector) {
        return this; // {} возвращаем пустой объект, контекст нового экземпляра
    }

    if (selector.tagName) {
        this[0] = selector;
        this.length = 1;
        return this;
    }

    Object.assign(this, document.querySelectorAll(selector));
    this.length = document.querySelectorAll(selector).length;
    return this;
};

$.prototype.init.prototype = $.prototype; //в прототип того объекта который будет нам возвращаться(из $.prototype.init) - записывем прототип нашей главной функции

window.$ = $;

export default $;