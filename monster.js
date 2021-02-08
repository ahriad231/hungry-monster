
const searchFoods = () =>{
    const searchText = document.getElementById('search-field').value;
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?f=${searchText}`
    //load data
    fetch(url)
    .then (res => res.json())
    .then (data => displayFoods(data.meals));
}
const displayFoods = foods =>{
    const foodContainer = document.getElementById('food-container');
    foods.forEach(food => {
        const foodDiv = document.createElement('div');
        foodDiv.className = 'single-result'
        foodDiv.innerHTML =`
        <div onclick="displayFoodDetails('${food.strMeal}')">
        <img src="${food.strMealThumb}">
        <h1>${food.strMeal} </h1>
        </div>`;
       foodContainer.appendChild(foodDiv);
      
    });
}
const displayFoodDetails = name =>{ 
const url = `https://www.themealdb.com/api/json/v1/1/list.php?i=${name}`
fetch(url)
.then(res => res.json())
.then(data =>renderFoodInfo(data));
// .then (data => console.log(data.meals))



}

const renderFoodInfo = food =>{
    const Div = document.getElementById('foodDetail');
    Div.innerHTML =`<img src="${food.strMealThumb}">
    <div>
        <h4>${food.strMeal}</h4>
        <h6>Ingredients</h6>
        <p>${food.strIngredient1}</p>
        <p>${food.strIngredient2}</p>
        <p>${food.strIngredient3}</p>
        <p>${food.strIngredient4}</p>
        <p>${food.strIngredient5}</p>
        <p>${food.strIngredient6}</p>
        <p>${food.strIngredient7}</p>
    </div>
    `;
}


