// Материалы из видео: https://www.youtube.com/watch?v=TEeKr2ON66A

//ДОМАШКА
/*
1. Изучить теорию
2. Решить задачи:
*/

//========================================================================================================================================================
//========================================================================================================================================================
//========================================================================================================================================================



// Размеры окна браузера (clientWidth и clientHeight)
// Доступная ширина и высота окна
const mainElement = document.documentElement,
  mainElementWidth = mainElement.clientWidth;
  mainElementHeight = mainElement.clientHeight;

console.log(mainElementWidth);
console.log(mainElementHeight);

//-----------

// Ширина и высота окна вместе с полосами прокрутки
const windowWidth = window.innerWidth;
const windowHeight = window.innerHeight;

console.log(windowWidth);
console.log(windowHeight);

//---------------------------------
/*
Задача №1.
Узнать ширину полосы прокрутки
*/
const scrollbarWidth = window.innerWidth - mainElement.clientWidth;
console.log(scrollbarWidth);

// Ширина и высота документа включая прокрученную часть
// ? Math.max() - используется для нахождения максимального значения из перечня значений.
// ? Для лучшей кроссбраузерности и избежания возможных ошибок используется именно такое сочетание свойств в методе Math.max().
let scrollWidth = Math.max(
  document.body.scrollWidth, document.documentElement.scrollWidth,
  document.body.offsetWidth, document.documentElement.offsetWidth,
  document.body.clientWidth, document.documentElement.clientWidth
);
let scrollHeight = Math.max(
  document.body.scrollHeight, document.documentElement.scrollHeight,
  document.body.offsetHeight, document.documentElement.offsetHeight,
  document.body.clientHeight, document.documentElement.clientHeight
);
console.log(scrollWidth);
console.log(scrollHeight);


//---------------------------------


// Получить кол-во прокрученных пикселей
// Только для чтения
/* 
  pageYOffset - устаревший альяс scrollY
  pageXOffset - устаревший альяс scrollX
*/
const windowScrollTop = window.scrollY;
const windowScrollLeft = window.scrollX;

console.log(windowScrollTop);
console.log(windowScrollLeft);


//---------------------------------
// Управление прокруткой страницы 


// Метод scrollBy(x,y) прокручивает страницу относительно
// её текущего положения.

function setScrollBy() {
  window.scrollBy(0, 50);
  const windowScrollTop = window.scrollY;
  console.log(`Scrolled down by ${windowScrollTop}px.`);
}

/*
Задача №2.
Заставьте браузер прокрутиться на 100px сверху
спустя секунду после открытия страницы
*/
window.scrollBy(0, 1000);

// addEventListener("DOMContentLoaded", (evt) => {
//   console.log("DOM fully loaded and parsed");
//   console.log(`Window scrolled down by ${windowScrollTop}px.`);
// });

//------

// Метод scrollTo(pageX, pageY) прокручивает страницу на абсолютные координаты(pageX, pageY). (Тоже самое что и window.scroll() )

function setScrollTo() {
  window.scrollTo(0, 50);
  const windowScrollTop = window.scrollY;
  console.log(`Scrolled down by ${windowScrollTop}px.`);
}

function setScrollToOptions() {
  window.scrollTo({
    top: 500,
    left: 0,
    // smooth, instant, либо auto; по умолчанию: auto
    behavior: "smooth"
  });
  console.log(`Scrolled down by ${windowScrollTop}px.`);
}
// Опции не работают в Safari


//------

/* 
Вызов elem.scrollIntoView(top) прокручивает страницу, чтобы elem оказался вверху.У него есть один аргумент:

- если top = true(по умолчанию), то страница будет прокручена, чтобы elem появился в верхней части окна.
Верхний край элемента совмещён с верхней частью окна.
- если top = false, то страница будет прокручена, чтобы elem появился внизу.Нижний край элемента будет совмещён с нижним краем окна.
*/

function setScrollIntoView(top) {
  const lessonSelected = document.querySelector('.lesson__selected');
  lessonSelected.scrollIntoView(top);
}

function setScrollIntoViewOptions(top) {
  const lessonSelected = document.querySelector('.lesson__selected');
  lessonSelected.scrollIntoView({
    //Отвечает за вертикальное позиционирование: "start", "center", "end" или "nearest". По умолчанию "center".
    block: "center",
    //Отвечает за горизонтальное позиционирование: "start", "center", "end" или "nearest". По умолчанию "nearest".
    inline: "nearest",
    // "auto" или "smooth". По умолчанию "auto".
    behavior: "smooth"
  });
}
// Опции не работают в Safari



//-------


// Запретить прокрутку
function setEnableDisableScroll() {
  //document.body.style.overflow = "hidden";
  document.body.classList.toggle('scroll-lock');
}

/*
Для прокрутки страницы из JavaScript её DOM должен
быть полностью построен.
Например, если мы попытаемся прокрутить страницу
из скрипта в <head>, это не сработает.
*/

//========================================================================================================================================================

// Метрики элементов на странице

// Получаем объект
const block = document.querySelector('.lesson__block');

// Позиция объекта
// Свойства offsetParent, offsetLeft и offsetTop

// Получаем родительский элемент, относительно которого позиционирован наш объект
const elementOffsetParent = block.offsetParent;


/*
Это будет ближайший предок, который удовлетворяет следующим условиям:

1. Является CSS-позиционированным
  (CSS-свойство position равно absolute, relative, fixed или sticky)
2. или теги <td>, <th>, <table>,
3. или <body>.
*/

console.log(elementOffsetParent);

/*
Ситуации, в которых offsetParent равно null:
1. Для скрытых элементов
  (с CSS - свойством display: none или когда его нет в документе).
2. Для элементов <body> и <html>.
3. Для элементов с position: fixed.
*/



// Получаем позицию объекта относительно предка (offsetParent)
const elementOffsetLeft = block.offsetLeft;
const elementOffsetTop = block.offsetTop;

console.log(elementOffsetLeft);
console.log(elementOffsetTop);



//========================================================================================================================================================

// Общие размеры объекта (offsetWidth и offsetHeight)

// Получаем размеры объекта
const elementOffsetWidth = block.offsetWidth;
const elementOffsetHeight = block.offsetHeight;

console.log(elementOffsetWidth);
console.log(elementOffsetHeight);

// Метрики для не показываемых элементов равны нулю.

//========================================================================================================================================================


// Отступы внутренней части элемента от внешней.
// clientTop и clientLeft
// По сути это значение border + скроллбар.
const elementClientTop = block.clientTop;
const elementClientLeft = block.clientLeft;

console.log(elementClientTop);
console.log(elementClientLeft);


//========================================================================================================================================================


// Размеры объекта без рамок (borders) и полосы прокрутки
// clientWidth и clientHeight

const elementClientWidth = block.clientWidth;
const elementClientHeight = block.clientHeight;

console.log(elementClientWidth);
console.log(elementClientHeight);

// общая ширина (offsetWidth) - рамка слева - рамка справа - скролл
// 500 - 20 - 20 - 17 = 443


//========================================================================================================================================================


// Размеры объекта включающие в себя прокрученную (которую не видно) часть.
// В остальном работают как clientWidth/clientHeight,
// scrollWidth и scrollHeight

const elementScrollWidth = block.scrollWidth;
const elementScrollHeight = block.scrollHeight;

console.log(elementScrollWidth);
console.log(elementScrollHeight);


//========================================================================================================================================================


// Размеры прокрученной области
// scrollLeft и scrollTop
// Можно указать нужное значение, чтобы окошко было уже прокрученным на какое-то значение пикселей (здесь на 150px):
block.scrollTop = 150;

const elementScrollLeft = block.scrollLeft;
const elementScrollTop = block.scrollTop;

console.log(elementScrollLeft);
console.log(elementScrollTop);


//========================================================================================================================================================


// Методы управления прокруткой scrollBy, scrollTo и scrollIntoView
// работают и для элемента на странице с полосой прокрутки

function setElementScrollBy() {
  block.scrollBy({
    top: 20,
    left: 0,
    behavior: "smooth"
  })
}

//========================================================================================================================================================


// Координаты
/*
Большинство соответствующих методов JavaScript работают в
одной из двух указанных ниже систем координат:

1. Относительно окна браузера.
  (как position: fixed, отсчёт идёт от верхнего левого угла окна.)
  Принято обозначать clientX/clientY.
2. Относительно документа.
  (как position: absolute относительно <body>, отсчёт идёт от
  верхнего левого угла документа.)
  Принято обозначать pageX/pageY.

Когда страница полностью прокручена в самое начало,
то верхний левый угол окна совпадает с левым верхним
углом документа, при этом обе этих системы координат тоже совпадают.
Но если происходит прокрутка, то координаты элементов в
контексте окна меняются, так как они двигаются,
но в то же время их координаты относительно
документа остаются такими же.

*/

//========================================================================================================================================================



// Координаты относительно окна браузера
// getBoundingClientRect

// Получаем объект
const item = document.querySelector('.lesson__item');


// Получаем координаты относительно окна браузера
const getItemCoords = item.getBoundingClientRect();

console.log(getItemCoords);

// Получаем конкретную координату относительно окна браузера
const getItemLeftCoord = item.getBoundingClientRect().left;

console.log(getItemLeftCoord);

/*
Задача №3.
Получите координаты любых трех элементов на странице
*/
const getElemWithScrollLeftCoord = block.getBoundingClientRect().left,
  getElemWithScrollTopCoord = block.getBoundingClientRect().top;

  console.log('x: ' + getElemWithScrollLeftCoord, 'y: ' + getElemWithScrollTopCoord);
//========================================================================================================================================================



// Координаты относительно документа
// getBoundingClientRect

// Получаем объект
// const item = document.querySelector('.lesson__item');

// Получаем конкретную координату относительно окна браузера
const getItemTopCoord = item.getBoundingClientRect().top;

// Получаем конкретную координату относительно документа
const getItemTopDocumentCoord = getItemTopCoord + window.scrollY;

console.log(getItemTopCoord);
console.log(getItemTopDocumentCoord);

const getElemWithScrollAbsoluteLeftCoord = getElemWithScrollLeftCoord + window.scrollX,
  getElemWithScrollAbsoluteTopCoord = getElemWithScrollTopCoord + window.scrollY;

  console.log('x: ' + getElemWithScrollAbsoluteLeftCoord, 'y: ' + getElemWithScrollAbsoluteTopCoord);
//========================================================================================================================================================


// Получение объекта по координатам document.elementFromPoint(x, y);

const elem = document.elementFromPoint(100, 100);
console.log(elem);


//========================================================================================================================================================
//========================================================================================================================================================