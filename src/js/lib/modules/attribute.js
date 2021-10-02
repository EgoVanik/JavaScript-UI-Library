import $ from '../core';

$.prototype.addAttr = function(...attrNames) {
    for (let i = 0; i < this.length; i++) {
        this[i].setAttribute(...attrNames);
    }

    return this;
};

$.prototype.removeAttr = function(...attrNames) {
    for (let i = 0; i < this.length; i++) {
        this[i].removeAttribute(...attrNames);
    }

    return this;
};

$.prototype.toggleAttr = function(attrNames) {
    for (let i = 0; i < this.length; i++) {
        this[i].toggleAttribute(attrNames);
    }

    return this;
};