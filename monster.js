
const searchFoods = () =>{
    const searchText = document.getElementById('search-field').value;
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`
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
        <div onclick="displayFoodDetails(${food.idMeal})">
        <img src="${food.strMealThumb}">
        <h1>${food.strMeal} </h1>
        </div>`;
       foodContainer.appendChild(foodDiv);

    });
}
const displayFoodDetails = name =>{ 
const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${name}`
fetch(url)
.then(res => res.json())
.then(data =>renderFoodInfo(data.meals));
}

const renderFoodInfo = meal =>{
    // console.log(meal);
    const Div = document.getElementById('foodDetail');
    Div.innerHTML =`
    <img src =${meal[0].strMealThumb} <br>
     <h1> ${meal[0].strMeal}</h1>
     <h4> ${meal[0].strIngredient1} </h4>
     <h4> ${meal[0].strIngredient2} </h4>
     <h4> ${meal[0].strIngredient3} </h4>
     <h4> ${meal[0].strIngredient4} </h4>
     <h4> ${meal[0].strIngredient5} </h4>
     <h4> ${meal[0].strIngredient6} </h4>
     <h4> ${meal[0].strIngredient7} </h4>
     <h4> ${meal[0].strIngredient8} </h4>
     <h4> ${meal[0].strIngredient9} </h4>
     <h4> ${meal[0].strIngredient10} </h4>

    `;
}

