import $ from '../core';

$.prototype.modal = function(created) {
    for (let i = 0; i < this.length; i++) {
        const target = this[i].getAttribute('data-target');
        $(this[i]).click((e) => {
            e.preventDefault();
            $(target).fadeIn(500);
            document.body.style.overflow = 'hidden';
        });

        const closeElements = document.querySelectorAll(`${target} [data-close]`);
        closeElements.forEach(elem => {
            $(elem).click(() => {
                $(target).fadeOut(500);
                document.body.style.overflow = '';
                // если модалка создана динамически, то удаляем модалку из верстки при закрытии
                if (created) {
                    document.querySelector(target).remove();
                }
            });
        });
    
        $(target).click(e => {
            if (e.target.classList.contains('modal')) {
                $(target).fadeOut(500);
                document.body.style.overflow = '';
                // если модалка создана динамически, то удаляем модалку из верстки при закрытии
                if (created) {
                    document.querySelector(target).remove();
                }
            }
        });
    }
};

$('[data-toggle="modal"]').modal();

$.prototype.createModal = function ({text, btns} = {}) {
    for (let i =0; i < this.length; i++) {
        let modal = document.createElement('div');
        modal.classList.add('modal');
        modal.setAttribute('id',this[i].getAttribute('data-target').slice(1));//получаем строку без первого символа #

        //btns
        const buttons = [];
        for (let j = 0; j < btns.count; j++) {
            // const {settings} = btns;
            let btn = document.createElement('button');
            btn.classList.add('btn', ...btns.settings[j][1]); // базовый класс и все классы которые передаем в настройках
            btn.textContent = btns.settings[j][0]; // текст из настроек
            if (btns.settings[j][2]) {
                btn.setAttribute('data-close', true); // кнопка закрытия?
            }
            if (btns.settings[j][3] && typeof(btns.settings[j][3] === 'function')) {
                btn.addEventListener('click', btns.settings[j][3]);
            }

            buttons.push(btn);
        }


        modal.innerHTML = `
        <div class="modal-dialog">
            <div class="modal-content">
                <button class="close" data-close>
                    <span>&times;</span>
                </button>
                <div class="modal-header">
                    <div class="modal-title">
                       ${text.title}
                    </div>
                </div>
                <div class="modal-body">
                    ${text.body}
                </div>
                <div class="modal-footer">

                </div>
            </div>
        </div>
        `;

        modal.querySelector('.modal-footer').append(...buttons); // помещаем кнопки в модалку
        document.body.appendChild(modal); //помещаем модалку в вёрстку
        $(this[i]).modal(true);
        $(this[i].getAttribute('data-target')).fadeIn(500);
    }
};