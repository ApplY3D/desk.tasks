$(document).ready(function(){

    function validateForms(form){
        $(form).validate({
            rules: {
                title__subject: {
                    required: true,
                    maxlength: 12
                },
                subtitle__descr: {
                    required: true,
                    maxlength: 35
                },
                subtitle__date: {
                    required: true,
                },
            },
            messages: {
                title__subject: {
                    required: "",
                },
                subtitle__descr: {
                    required: "",
                },
                subtitle__date: {
                    required: "",
                },
            },
            // messages: {
            //     title__subject: {
            //         required: "Пожалуйста, введите свое имя",
            //         minlength: jQuery.validator.format("Введите {0} символа!")
            //     },
            //     subtitle__descr: "Пожалуйста, введите свой номер телефона",
            //     subtitle__end-date: {
            //     required: "Пожалуйста, введите свою почту",
            //     subtitle__end-date: "Неправильно введен адрес почты"
            //     }
            // }
        });
    };

    validateForms('#new-item-form');
    $('[name="subtitle__date"]').mask("99/99/9999");

//ФУНКЦИЯ СКРЫТИЯ ГОТОВЫХ ПРЕДМЕТОВ
    $('input[name=checkboxComplete]').change(function(){
        if($(this).is(':checked')) {
            currentItem=$(this).parent().parent();
            itemId=currentItem.attr('id');
            currentItem.children('.column-item__wrapper').children('.column-item__big-descr').hide();
            currentItem.children('.column-item__wrapper').children('.column-item__subtitle').hide();
            currentItem.children('.column-item__wrapper').children('.column-item__title').children('.column-item__title-right').fadeOut();
            currentItem.addClass('column-item_completed');
        } else {
            currentItem=$(this).parent().parent();
            currentItem.removeClass('column-item_completed');        
            currentItem.children('.column-item__wrapper').children('.column-item__subtitle').show();
            currentItem.children('.column-item__wrapper').children('.column-item__title').children('.column-item__title-right').fadeIn();
        }
    });

//ДОБАВЛЕНИЕ СТАТУСА ЧЕКБОКСОВ В ЛОКАЛ
    // function checkboxStorageCheck(){
    //     itemsId=[];
    //     $( ".column-item" ).each(function() {  
    //     itemsId.push($( this ).attr( "id" ));
    //     });
    //     function diff(arr, arr2) {
    //         itemsToRemove = arr.filter(function(i) {return arr2.indexOf(i) < 0;});
    //         newStorage = subjectsDone.filter( ( el ) => !itemsToRemove.includes( el ) );
    //     };    
    //     subjectsDone=localStorage.getItem('subjectsDone');
    //     subjectsDone=subjectsDone.replace(/'/g, '"');
    //     subjectsDone=JSON.parse(subjectsDone);
    //     console.log(diff(subjectsDone, itemsId));
    // }
    // checkboxStorageCheck()

//ФУНКЦИЯ ДЛЯ ПРОВЕРКИ СОДЕРЖИМОГО column-item__big-descr ЧТОБЫ ПРОЯВИТЬ КНОПКУ
    $('.column-item__big-descr').each(function( index ) {
        if ($(this).text()){
            $(this).parent().children('.column-item__title').children('.column-item__title-right').children('.column-item__info').children('.link-info').removeClass('link-disabled');
        }
      });

    $('.link-info').on('click',function(e){
        e.preventDefault();
        $(this).parent().parent().parent().parent().children('.column-item__big-descr').toggleClass('column-item__big-descr_active');
        $(this).toggleClass('link-active');
    });
    
//ДОБАВЛЕНИЕ НА СТРАНИЦУ ПУСТЫШКИ С ИНПУТАМИ
    // $('.add-item').on('click',function(e){
    //     e.preventDefault();
        
    //     if ($('#new-item').length){
    //     }else{
    //         $('.add-item').css( 'pointer-events', 'none' );
    //         $.get("new-item.html", function (data) {
    //             $(".main-column__body").append(data);
    //         });
    //     }
    // });

        $('.add-item').on('click',function(e){
        e.preventDefault();
        $('#new-item').css( 'display', 'flex' );

    });

//МАНИПУЛЯЦИИ С КНОПКАМИ ПУСТЫШКИ
    // function closeButton() {
    //     $('#new-item-dismiss').on('click', function(e){
    //         e.preventDefault();
    //         $('.add-item').css( 'pointer-events', 'pointer' );
    //         $('#new-item').remove();
    //     });
    // }

    $('#new-item-dismiss').on('click', function(e){
        e.preventDefault();
        $('#new-item-form').trigger('reset');
        $('#new-item').css( 'display', 'none' );
        $('[name="title__subject"] ,[name="subtitle__descr"] ,[name="subtitle__date"] ,[name="subtitle__big-descr"]').removeClass('valid');
        $('[name="title__subject"] ,[name="subtitle__descr"] ,[name="subtitle__date"] ,[name="subtitle__big-descr"]').removeClass('error');
    });
});