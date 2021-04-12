$(document).ready(function () {
    'use strict';
    let Menubtn1 = $('.menu-login-btn>button:first-child'),
        Menubtn2 = $('.menu-login-btn>button:last-child'),
        Modal = $('.opens'),
        BtnUpd = $('.btn-info'),
        overlay = $('.overlay'),
        MenuModal = $('.open');

    let close = function (CBF) {
        MenuModal.fadeOut(1000, CBF);   
        },
        OpenSign = function () {
            $('.inner-wrapper').animate({
                opacity: "linear",
                height: "swing"
            }, 1000, function(){
                $('.shows').css('display', 'grid');
                $('.NavBar').css('display', 'block');
            });

        };
        $('.NavBarLeft>button:last-child').on('click', function () {
            $('.inner-wrapper').fadeOut(1000, function(){
                $('.shows').css('display', 'none');
                $('.NavBar').css('display', 'none');
                MenuModal.fadeIn(600, function(){
                    MenuModal.css('display', 'grid');
                }); 
            });
        });
    Menubtn1.on('click', function () {
        close(OpenSign());
    });
    Menubtn2.on('click', function () {
        alert("Изините данная функция сейчас не доступна")
    });

    $('.nav-item').on('click', (event) => {
        let target = event.target;
        if (target && target.classList.contains('nav-link')) {
            for (let i = 0; i < $('.nav-link').length; i++) {
                if (target == $('.nav-link')[i]) {
                    for (let j = 0; j < $('.nav-link').length; j++) {
                        $('.nav-link')[j].classList.remove('active');
                        $('.tab-pane')[j].classList.remove('active');
                        $('.tab-pane')[j].classList.remove('show');
                    }
                    $('.nav-link')[i].classList.add('active');
                    $('.tab-pane')[i].classList.add('active');
                    $('.tab-pane')[i].classList.add('show');
                    break;
                }
            }
        }
    });

    $('.CLS>.btn-secondary').on('click', function(){
        $('.SLS>.FormUser>.form-controls').val('');
    });
    $('.CLK>.btn-secondary').on('click', function(){
        $('.SLK>.form-controls').val('');
    });

    BtnUpd.on('click', function(){
        $('modal.opens').css('display', 'grid');
        overlay.fadeToggle('show');
    });
    $('.CLK>.btn-primary').on('click', function(){
        $('modal.opens').css('display', 'none');
        overlay.fadeToggle('show');
    });
});