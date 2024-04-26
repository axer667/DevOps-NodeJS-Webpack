/* grass и main импортируем, чтобы webpack их обработал */
import example from './../img/grass.png';
import styles from './../styles/main.scss';
import $ from 'jquery'

// создаем элемент заголовка
const heading = document.createElement('p')
heading.textContent = 'Как интересно!'

// добавляем заголовок в DOM
const root = document.querySelector('#root')
root.append(heading)

$(document).ready(function() {
    $('h2').html("Заголовок");
});
