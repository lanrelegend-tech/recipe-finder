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
     const searchResult = await getData(searchInput.value.trim());
    const meal = searchResult[0] || null;
    if (meal) {
        if (meal.strSource) {
 window.open(meal.strSource, '_blank');
    } else{
        alert(`${meal.strMeal}\n\n${meal.strInstructions}`);
    }
} else {
    alert('meal not found');
}
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