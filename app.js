//DOM - Document Object Model
//Use it to manipulate content, style and structure
/*
const title = document.querySelector('#main-heading');
title.style.color = 'red';

const listItems = document.querySelector('.list-items');
//create a loop to loop through all the list items
for (i = 0; i < listItems.length; i++) {
    listItems[i].style.fontSize = '5rem';
}


//Creating Elements
const ul = document.querySelector('ul');
const li = document.createElement('li');

//Adding Elements

ul.append(li);

//Modifying the text

li.innerText = 'X-Men';

//Modifying Attributes and classes

li.classList.add('list-items');

//Remove elements

li.remove();

//Parent Node Traversal

let ul = document.querySelector('ul');

console.log(ul.parentNode.parentNode);//this returns the parent node of the parent node of specified element
console.log(ul.parentElement);//outputs the parent element of ul


//Child Node Traversal

let ul = document.querySelector('ul');

console.log(ul.childNodes);
console.log(ul.firstChild);
console.log(ul.lastChild);

ul.childNodes[1].style.backgroundColor = 'blue';


//Sibling Node Traversal

let ul = document.querySelector('ul');

console.log(ul.previousElementSibling);


//Event Listeners

//element.addEventListener("click", function);

const buttonTwo = document.querySelector('.btn-2');

function alertBtn() {
    alert('I also love JavaScript');

}
buttonTwo.addEventListener("click", alertBtn);

//Mouseover

const newBackgroundColor = document.querySelector('.box-3');
function changeBgColor() {
    newBackgroundColor.style.backgroundColor = 'red';
};

newBackgroundColor.addEventListener("mouseover", changeBgColor);


//Reveal Event

const revealBtn = document.querySelector('.reveal-btn');

const hiddenContent = document.querySelector('.hidden-content');

function revealContent() {
    if(hiddenContent.classList.contains('reveal-btn')) {
        hiddenContent.classList.remove('reveal-btn')
    } else {
        hiddenContent.classList.add('reveal-btn')
    }
}

revealBtn.addEventListener('click', revealContent);
*/

//Event Delegation

//It allows users to append a Single event listener to a parent element that adds it to all of its present and future descedants that match a selector. This saves memory and unnecessary code

document.querySelector('#sports').addEventListener('click', function(e) {

    console.log(e.target.getAttribute('id') + ' is clicked');

    const target = e.target;

    if (target.matches('button')) {
        target.style.backgroundColor = 'lightgrey';
    }
})
//lets add a new button to our empty list item
const sports = document.querySelector('#list');
const newSport = document.createElement('button');


newSport.innerText = 'Rugby';
newSport.setAttribute('id', 'rugby');

sports.appendChild(newSport);//adding to unordered list



