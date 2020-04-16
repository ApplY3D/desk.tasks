'use strict';
// создаем <link rel="stylesheet" href="light|dark.css">

// let head = document.head,
//     link = document.createElement('link');
// link.rel = 'stylesheet';

// проверяем значение из localStorage если dark то темная тема

if (localStorage.getItem('themeStyle') === 'dark') {
  //link.href = 'dark.css'; // ссылка на темный стиль
  $('html').attr( "data-theme-style", "dark" )
  document.getElementById('switch-theme').setAttribute('checked', true); // переключаем чекбокс в положение "темная тема"
}

// по умолчанию светлая тема
else {
  //link.href = 'light.css'; // ссылка на светлый стиль
  $('html').attr( "data-theme-style", "normal" )
}
//head.appendChild(link); // вставляем <link rel="stylesheet" href="light|dark.css"> в шапку страницы между темаги head

// событие при переключении чекбокса
document.getElementById('switch-theme').addEventListener('change', ev => {
  let btn = ev.target;
  // если чекбокс включен
  if (btn.checked) {
    //link.href = 'dark.css'; // сключаем темную тему
    $('html').attr( "data-theme-style", "dark" )
    localStorage.setItem('themeStyle', 'dark'); // записываем значение в localStorage
  }
  else {
    //link.href = 'light.css'; // включаем светлую тему
    $('html').attr( "data-theme-style", "normal" )
    localStorage.setItem('themeStyle', 'light'); // записываем значение в localStorage
  }
});