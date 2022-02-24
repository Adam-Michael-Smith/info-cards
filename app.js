// set previous and next button variables;
const button1 = document.getElementById('previous');
const button2 = document.getElementById('next');

// select tags to manipulate;
let imageContent = document.getElementById('image-file');
let titleContent = document.getElementById('title');
let softwareContent = document.getElementById('software');
let infoContent = document.getElementById('info');

// storage of data;
const design1 = [
    {
    id : 1,
    title : 'Flat Landscape',
    img : '/images/design-one.png',
    software : 'Draw + Adobe Illustrator',
    info : 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. ' +
    'At pariatur explicabo, ratione tenetur a eius, rerum esse mollitia ' +
    'aspernatur voluptatibus recusandae nulla asperiores culpa dolores ' +
    'nobis! Deleniti eaque corporis enim.'

},
{
    id : 2,
    title : 'Superheroes Print',
    img : '/images/design-two.jpg',
    software : 'Adobe Illustrator',
    info : 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. ' +
    'At pariatur explicabo, ratione tenetur a eius, rerum esse mollitia ' +
    'aspernatur voluptatibus recusandae nulla asperiores culpa dolores ' +
    'nobis! Deleniti eaque corporis enim.'
},
{
    id : 3,
    title : 'Typography',
    img : '/images/design-three.jpg',
    software : 'Adobe Illustrator',
    info : 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. ' +
    'At pariatur explicabo, ratione tenetur a eius, rerum esse mollitia ' +
    'aspernatur voluptatibus recusandae nulla asperiores culpa dolores ' +
    'nobis! Deleniti eaque corporis enim.'
},
{
    id : 4,
    title : 'Star Wars Print',
    img : '/images/design-four.jpg',
    software : 'Adobe Illustrator',
    info : 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. ' +
    'At pariatur explicabo, ratione tenetur a eius, rerum esse mollitia ' +
    'aspernatur voluptatibus recusandae nulla asperiores culpa dolores ' +
    'nobis! Deleniti eaque corporis enim.'
},
{
    id : 5,
    title : 'Client Logo',
    img : '/images/design-five.jpg',
    software : 'Adobe Illustrator',
    info : 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. ' +
    'At pariatur explicabo, ratione tenetur a eius, rerum esse mollitia ' +
    'aspernatur voluptatibus recusandae nulla asperiores culpa dolores ' +
    'nobis! Deleniti eaque corporis enim.'
},
{
    id : 6,
    title : 'Soft Drink Design',
    img : '/images/design-six.jpg',
    software : 'Adobe Illustrator',
    info : 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. ' +
    'At pariatur explicabo, ratione tenetur a eius, rerum esse mollitia ' +
    'aspernatur voluptatibus recusandae nulla asperiores culpa dolores ' +
    'nobis! Deleniti eaque corporis enim.'
}
]

let currentItem = 0;

// set content of initial load of browser to array element 0;

window.addEventListener('DOMContentLoaded', function(){
    showPerson(currentItem);
})

function showPerson(person){
    const item = design1[person];
    imageContent.src = item.img;
    titleContent.textContent = item.title;
    softwareContent.textContent = item.software;
    infoContent.textContent = item.info;
}

// setting starting element of design variable;

let start = 0;

function alertBoxPrev(){
    currentItem--;
    if(currentItem < 0){
        currentItem = design1.length - 1;
    }
    showPerson(currentItem);
}

function alertBoxNext(){
    currentItem++;
    if(currentItem > design1.length - 1){
        currentItem = 0;
    }
    showPerson(currentItem);
}