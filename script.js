const meals=[]


async function getData() {
    try{
        const response=await fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=a');
        const data=await response.json();
        meals.push(data) 
            console.log(meals); 
    }catch(error){
    console.error();
    
    }
    
    
}
const productContainer=document.getElementsByClassName('food-Container')
const displaymeals=() =>{
productContainer.innerHTML=''
let fragment =document.createDocumentFragment();
if(meals.length>0){
meals.forEach(meal =>{
let element=document.createElement('div')
element.className='trend-card'

elememt.innerHTML=`<img src="i1.jpg" alt="image">
<h1 class="productname">product name</h1>`;

fragment.appendChild(element)

});

productContainer.appendChild(fragment)
        

    }
   }
   
   

displaymeals();
