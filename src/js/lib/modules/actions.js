import $ from '../core';

// innerHTML
$.prototype.html = function(content) {
    for (let i = 0; i < this.length; i++) {
        if (content) {
            this[i].innerHTML = content;
        } else {
            return this[i].innerHTML;
        }
    }
    return this;
};

// number elem
$.prototype.eq = function(i) {
    const swap = this[i];
    const objLength = Object.keys(this).length; // трансформируем this  в масссив и получаем кол-во элементов

    for (let i = 0; i < objLength; i++) {
        delete this[i]; // очищаем объект
    }

    // формируем объект заново
    this[0] = swap;
    this.length = 1;

    return this;
};

// index elem
$.prototype.index = function() {
    const parent = this[0].parentNode; //получаем родителя
    const childs = [...parent.children]; //получаем массив потомков

    // callback
    const findMyIndex = (item) => {
        return item == this[0];
    };

    return childs.findIndex(findMyIndex);
};

// find elem by selector
$.prototype.find = function(selector) {
    // создаем копию и записываем в this
    let numberOfItems = 0; //кол-во элементов
    let counter = 0; // счетчик

    const copyObj = Object.assign({}, this);

    for (let i = 0; i < copyObj.length; i++) {
        // находим подходящие элементы по по селектору
        const arr = copyObj[i].querySelectorAll(selector);

        if (arr.length == 0) {
            continue;
        }

        for (let j = 0; j < arr.length; j++) {
            this[counter] = arr[j]; //перезаписываем найденные элеметы в this
            counter++;
        }

        numberOfItems += arr.length;
    }

    this.length = numberOfItems;

    const objLength = Object.keys(this).length;
    for (; numberOfItems < objLength; numberOfItems++) {
        delete this[numberOfItems];
    }
    
    return this;
};


// определение ближайшего блока по селектору
$.prototype.closest = function(selector) {
    let counter = 0;

    for (let i = 0; i < this.length; i++) {
        this[i] = this[i].closest(selector);
        counter++;
    }

    const objLength = Object.keys(this).length;
    for (; counter < objLength; counter++) {
        delete this[counter];
    }
    
    return this;
};

// получить все элементы кроме переданного
$.prototype.siblings = function() {
    let numberOfItems = 0;
    let counter = 0;

    const copyObj = Object.assign({}, this);

    for (let i = 0; i < copyObj.length; i++) {
        const arr = copyObj[i].parentNode.children;

        for (let j = 0; j < arr.length; j++) {
            
            // исключаем переданный
            if (copyObj[i] == arr[j]) {
                continue;
            }

            this[counter] = arr[j];
            counter++;
        }

        numberOfItems += arr.length - 1;
    }

    this.length = numberOfItems;

    const objLength = Object.keys(this).length;
    for (; numberOfItems < objLength; numberOfItems++) {
        delete this[numberOfItems];
    }
    
    return this;
};