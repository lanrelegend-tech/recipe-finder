const favBtn = document.querySelector('.fav-btn');
favBtn.addEventListener('click', (event) => {
    event.stopPropagation(); 
    let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    favorites.forEach(fav => {
        const element = document.createElement('div');
        element.classList.add('trend-card');
        element.innerHTML = `<img src="${fav.strMealThumb}" alt="${fav.strMeal}">
                             <h2>${fav.strMeal}</h2>`;
                             element.style.cursor = "pointer";
        element.addEventListener('click', () => {
            if (fav.strSource) {
                window.open(fav.strSource, '_blank');
            } else {
                alert(`${fav.strMeal}\n\n${fav.strInstructions}`);
            }
        });
    favBtn.appendChild(element);
    });
    
});