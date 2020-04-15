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
});