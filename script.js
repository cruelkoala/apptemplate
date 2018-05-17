//here logic goes

// сделать  html component который повторяет логику  <select> в простешем случае

//appendChild soulution
const actorsListContainer = document.querySelector('#actors-list');

function showActorsAsync (reverse) {
    actors.forEach(addActorElement);
}


//showActorsAsync();

const result = document.querySelector('#result');
let activeIndex = 0;
let isOpen = false;
function initializeSelect(arr) {
    arr.forEach(function (actor, i) {
        let actorHtmlElement = document.createElement('div');
        actorHtmlElement.textContent = `${actor.firstName} ${actor.lastName}`;
        actorHtmlElement.classList.add('hidden');
        actorHtmlElement.classList.add('option');

        result.appendChild(actorHtmlElement);
        
        if (i === activeIndex) {
            let activeActorElement = document.createElement('div');
            activeActorElement.textContent = `${actor.firstName} ${actor.lastName}`;
            activeActorElement.classList.add('active');
            result.insertBefore(activeActorElement, result.firstElementChild);
            activeActorElement.addEventListener('click', toggleSelect);
        }
    });
}
function toggleSelect (e) {
    isOpen = !isOpen;
    document.querySelectorAll('.option').forEach(function (option) {
        if (isOpen === true) {
           option.classList.remove('hidden'); 
           document.querySelector('.active').classList.add('blurred');
        } else {
            option.classList.add('hidden');  
            document.querySelector('.active').classList.remove('blurred');
        }
    });
    e.stopPropagation();
}

result.addEventListener('click', function (e) {
    if (e.target === e.currentTarget) {
        return;
    }
    let content = e.target.textContent;
    document.querySelector('.active').textContent = content;
    toggleSelect(e);
});



initializeSelect(actors);


// button.onclick = function handler(e) {
//     showActorsAsync(true);
// }

// document.querySelector('#main').onclick = function handler(e) {
//     console.log(this);
//     this.style.color = '#0000FF';
//     showActorsAsync(true);
// }


var main  = document.querySelector('#main')




var actorsEl = document.querySelectorAll('.actor');

// actorsEl.forEach(function (el) {
//     el.addEventListener('click', actorHandler);
// });

// function actorHandler (e) {
    // actorsEl.forEach(function (el) {
    //     el.classList.remove('colored');
    // });
    // e.target.classList.add('colored');
// }

const actorsListEl = document.querySelector('#actors-list');

actorsListEl.addEventListener('click', function (e) {
    actorsEl.forEach(function (el) {
        el.classList.remove('colored');
    });
    e.target.classList.add('colored');
    console.log(e.currentTarget);
});






// innerHTML solution

// //формируем массив html элементов представленных строкой
// //cоединяем массив в одну строку
// let resultedHTML = '<ul>' + actors.map(function (actor) {
//     return `<li>${actor.firstName} ${actor.lastName}</li>`
// }).join('') + '</ul>';

//изменяем содержимое html элемента 
//actorsListContainer.innerHTML = resultedHTML;



//documentFragment solution
// let documentFragment = document.createDocumentFragment();

// actors.forEach(function (actor) {
//     let actorHtmlElement = document.createElement('div');
//     if (actor.year < 1950) {
//         actorHtmlElement.classList.add('colored');
//     } 
   
//     actorHtmlElement.textContent = `${actor.firstName} ${actor.lastName}`;
//     documentFragment.appendChild(actorHtmlElement);
// });

//actorsListContainer.appendChild(documentFragment);



// function main () {
//     var result = []; // 1
//     // ждем когда сервер вернет данные - потом вызываем функцию которая ниже - asyncfunc
//     /* 2 */ getDataFromServer().then(function asyncfunc (res) {
//        /* 4 */ result = res;
//     });
//     /* 3 */result.push(5);
//     console.log('sync')
// }

// function main() {
//     var c = 10;
//     setTimeout(function () {
//         c = 40; console.log('first');
//     }, 4000);
//     setTimeout(function () {
//         c = 40; console.log('second');
//     }, 3000);
    
// }
// // console.log('main');

// function main2() {
//     setTimeout(function () {
//         c = 40; console.log('main2');
//     }, 1000);
// }
//  main();
//  main2();
// console.log('end main - stack clear check queue')

















