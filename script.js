let meals =[];
async function getData() {
    const response = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?=');
    const data = await response.json();

    meals =data.meals;
    
    
}
function displayMeals() {
const productContainer=document.getElementsByClassName('food-Container')[0];
productContainer.innerHTML='';
let fragment = document.createDocumentFragment();
if(meals.length > 0) {
meals.forEach(meals =>{
const element=document.createElement('div');
element.className='trend-card';

element.innerHTML= `<img src="${meals.strMealThumb}" alt"${meals.strMeal}">
                 <h1 class="Product name">${meals.strMeal}</h1>
                 ` ;

fragment.appendChild(element);

});
}
productContainer.appendChild(fragment);
        

    };
    displayMeals();

