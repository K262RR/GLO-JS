const booksContainer = document.querySelector('.books');
const books = booksContainer.querySelectorAll('.book');
const adv = document.querySelector('.adv');
const secondBookChapters = books[0].querySelectorAll('li');
const fifthBookChapters = books[5].querySelectorAll('li');
const sixthBookChapters = books[2].querySelectorAll('li');
const sixthBookNewChapter = document.createElement('li');


booksContainer.prepend(books[1]);
booksContainer.append(books[3]);
booksContainer.append(books[5]);
booksContainer.append(books[2]);

document.body.style.backgroundImage = 'url(./image/you-dont-know-js.jpg)';

books[4].querySelector('h2 > a').textContent = 'Книга 3. this и Прототипы Объектов';

adv.remove();

secondBookChapters[9].after(secondBookChapters[2]);
secondBookChapters[9].before(secondBookChapters[7]);
secondBookChapters[8].after(secondBookChapters[4]);
secondBookChapters[4].after(secondBookChapters[5]);

fifthBookChapters[1].after(fifthBookChapters[9]);
fifthBookChapters[4].after(fifthBookChapters[2]);
fifthBookChapters[7].after(fifthBookChapters[5]);

sixthBookNewChapter.textContent = 'Глава 8: За пределами ES6';
sixthBookChapters[9].after(sixthBookNewChapter);


console.log(booksContainer);
console.log(books);
console.log(sixthBookNewChapter);




