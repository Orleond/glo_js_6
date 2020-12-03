'use strict';

const books = document.querySelectorAll('.book'),
    booksAside = document.querySelector('.books'),
    bookTwo = books[0].querySelectorAll('li'),
    booksTwoUl = books[0].querySelector('ul'),
    bookFive = books[5].querySelectorAll('li'),
    booksFive = books[5].querySelector('ul'),
    bookSix = books[2].querySelectorAll('li'),
    booksSix = books[2].querySelector('ul');

booksAside.insertAdjacentElement('afterbegin', books[1]);
booksAside.insertAdjacentElement('beforeend', books[2]);
books[3].before(books[4]);

document.querySelector('body').style.backgroundImage = 'url(./image/123.jpg)';
books[4].querySelector('a').textContent = 'Книга 3. this и Прототипы Объектов';
document.querySelector('.adv').style.display = 'none';


booksTwoUl.insertAdjacentElement('beforeend', bookTwo[2]);
bookTwo[4].before(bookTwo[6]);
bookTwo[4].before(bookTwo[8]);
booksTwoUl.insertAdjacentElement('beforeend', bookTwo[10]);


bookFive[1].after(bookFive[9]);
bookFive[4].after(bookFive[2]);
bookFive[7].after(bookFive[5]);


let six = document.createElement('li');
six.textContent = 'Глава 8: За пределами ES6';
booksSix.append(six);
booksSix.insertAdjacentElement('beforeend', bookSix[9]);
console.log(bookSix);