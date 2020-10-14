'use strict';


//slider
let width = 852;

let position = 0;

let list = document.querySelector('ul');

//прокрутка назад
document.querySelector('.prev').onclick = function() {
    position += width;
    position = Math.min(position, 0);       // исключаем прокрутку, когда position < 0
    list.style.marginLeft = position + 'px';
    
    this.style.color = '#bbb';
    setTimeout( () => this.style.color = '#444', 500);
}

//прокрутка вперед
document.querySelector('.next').onclick = function() {
    position -= width;
    position = Math.max(position, -width);       //последнее передвижение вправо может быть не на 3, а на 2 или 1 элемент
    list.style.marginLeft = position + 'px';

    this.style.color = '#bbb';
    setTimeout( () => this.style.color = '#444', 500);
}


//pricing page
let pricing = document.querySelector('#pricing');

pricing.onclick = function(event) {
    let target = event.target;
    let btn = document.querySelector('#btn-block');
    let parentBtn = target.closest('div');

    if (!btn) return;

    if (pricing.contains(target)) {
        if (target.tagName != 'BUTTON') {
            target.parentNode.classList.toggle('btn-active');
        } else { 
            target.classList.toggle('btn-active');
        }
    }

    //setTimeout( ()=> target.classList.toggle('btn-active'), 400);
};


//корзина

//товары
// let prod1 = document.getElementById('prodId1');
// let prod2 = document.getElementById('prodId2');
// let prod3 = document.getElementById('prodId3');
// let prod4 = document.getElementById('prodId4');
// let prodBtn1 = document.getElementById()


let product = document.getElementById('pricing-inner');
let backet = new Array();

product.onclick = function (event) {
    let target = event.target.closest('button');

    if(!target) return;

    if(!target.contains(event.target)) return;

    //1
    if(target.id == 'prodBtn1') {
        console.log('Продукт №1 в козине');
        backet.push(prodId1);
    }

    //2
    if(target.id == 'prodBtn2') {
        console.log('Продукт №2 в козине');
        backet.push(prodId2);
    }

    //3
    if(target.id == 'prodBtn3') {
        console.log('Продукт №3 в козине');
        backet.push(prodId3);
    }

    //4
    if(target.id == 'prodBtn4') {
        console.log('Продукт №4 в козине');
        backet.push(prodId4);
    }

    console.log(backet);
}

