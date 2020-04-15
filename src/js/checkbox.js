// function save_checkbox(name){
//     localStorage[name] = document.getElementById(name).checked ? 1 : 0
// };
// function load_checkbox(){
//     var table = document.getElementById('resources');
//     var input = table.getElementsByTagName('input');
 
//     for(var i = 0; i < $('.column-item').length; i++)
//     {
//         var checkbox = input[i];
//         checkbox.checked = parseInt(localStorage[checkbox.id], 10);
//     };
// };

// let checkBox = document.querySelector('.checkbox'),
// 		info = document.querySelector('#info');

// checkBox.addEventListener('click', () => {
//     if (checkBox.checked) { // если checkbox включен\выключен
//     localStorage.setItem('myinfo', checkBox.dataset.info);  // записать в storage ключ myinfo, значение из data-info у checkbox
//     info.innerHTML = 'Записано ' + checkBox.dataset.info; // просто вывод статуса на странице
//     } else {
//     localStorage.removeItem('myinfo'); // удаление ключа myinfo из storage
//     info.innerHTML = 'Удалено ' + checkBox.dataset.info;
//     }
        
//     });


    $('input[name=checkbox]').change(function(){
        if($(this).is(':checked')) {
            $(this).parent().parent().siblings();
        } else {
            // Checkbox is not checked..
        }
    });