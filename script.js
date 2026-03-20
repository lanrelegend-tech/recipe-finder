let meals =[];
async function getData() {
    try{
    const response = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?=a');
    const data = await response.json();

    meals =data.meals || [];
    displayMeals();   
} catch(error){
    console.error(error);
}
}

const productContainer=document.getElementsByClassName('food-Container')[0];
const displayMeals=()=> {
productContainer.innerHTML='';
let fragment = document.createDocumentFragment();
if (! Array.isArray(meals)) {
    console.log("meal is not array:",meals)
meals.forEach(() =>{
const element=document.createElement('div');
element.className='trend-card';

element.innerHTML= '<h1>hello<h1>';

fragment.appendChild(element);

});

productContainer.appendChild(fragment);
}    

    };
    getData();

