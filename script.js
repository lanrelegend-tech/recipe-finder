let meals =[];
async function getData(query) {
    try{
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`);
    const data = await response.json();

     meals =data.meals || [];
    displayMeals();  
    return meals;
} catch(error){
    console.error(error);
    return [];
}
}
const formContainer =document.querySelector('form ');
const productContainer=document.getElementsByClassName('food-Container')[0];
const displayMeals=()=> {
productContainer.innerHTML='';
let fragment = document.createDocumentFragment();
if ( Array.isArray(meals)) {
meals.forEach(meal =>{
const element=document.createElement('div');
element.className='trend-card';

element.innerHTML= `<img src ="${meal.strMealThumb}" alt="${meal.strMealThumb}">
<h1 class="productname">${meal.strMeal}</h1>
<button class="fav-btn"><i class="fa-solid fa-heart"></i></button>
`;
element.style.cursor ="pointer";
element.addEventListener('click', () => {
    if(meal.strSource) {
        window.open(meal.strSource, '_blank');
    } else{
        alert(`${meal.strMeal}\n\n${meal.strInstructions}`);
    }
});

fragment.appendChild(element);

});

productContainer.appendChild(fragment);
}    else{
    console.log("meals is not an array:", meals);
}

    };


    

    /* search */
  

formContainer.addEventListener('submit',async(e) =>{
    e.preventDefault();
    let formData =new FormData(formContainer)
    const searchInput = document.querySelector('input[name="searchinput"]');
    if (!searchInput)return;
     const query = searchInput.value.trim();
     if (!query) return;
        await getData(query);
     searchInput.value ='';
});

getData('a');


/* categories*/

const categoryHeader =document.getElementById('category');
categoryHeader.style.cursor = 'pointer';
categoryHeader.addEventListener('click', () => {
    const url ='https://www.themealdb.com/api/json/v1/1/categories.php';
    window.open(url, '_blank');
}
);
/* menu cards */
const menuCards = document.querySelectorAll('.menu-card');
menuCards.forEach(card => {
    card.style.cursor = 'pointer';
    card.addEventListener('click', () => {
        const mealType = card.getAttribute('data-meal');
        const url = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${mealType}`;
        window.open(url, '_blank');
    });
}  );
/* favorites */
meals.forEach(meal => {
const element = document.createElement('div');
element.classList.add('trend-card');
element.innerHTML = `<img src="${meal.strMealThumb}" alt="${meal.strMeal}">
                             <h2>${meal.strMeal}</h2>
                             <button class="fav-btn"><i class="fa-solid fa-heart"></i></button> `;
element.style.cursor = "pointer";
const favBtn = document.querySelector('.fav-btn');
favBtn.addEventListener('click', (e) => {
e.stopPropagation();
    let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    if (!favorites.some(fav => fav.idMeal === meals.idMeal)) {
        favorites.push(meals);
        localStorage.setItem('favorites', JSON.stringify(favorites));
        alert(`${meal.strMeal} added to favorites!`);
    } else {
        alert(`${meal.strMeal} is already in favorites!`);
    }
});
});