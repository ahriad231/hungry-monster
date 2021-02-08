
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
.then(data =>renderFoodInfo(data.meals));
// .then (data => console.log(data.meals))



}

const renderFoodInfo = meal =>{
    // console.log(meal);
    const Div = document.getElementById('foodDetail');
    Div.innerHTML =` <h1> ${meal.strMeal}</h1>
       
    `;
}


