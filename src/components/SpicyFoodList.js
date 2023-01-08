import React, { useState } from "react";
import { spicyFoods, getNewRandomSpicyFood } from "../data";

function SpicyFoodList() {
  const [foods, setFoods] = useState(spicyFoods);
  const [filter, setFilter] = useState("All")

  function handleAddFood() {
    const newFood = getNewRandomSpicyFood();
    const addedFood = [...foods, newFood];
    setFoods(addedFood);
  }

  function handleLiClick(id){
    // const removedFood = (foods.filter(food=> food.id !== id))
    const uptheHeat = foods.map(food => {
      if(food.id === id){
      return {...food, heatLevel : food.heatLevel+1};
      } else { 
       return food
      }
    })
    setFoods(uptheHeat)
  }

  function handleFilter(e){
    setFilter(e.target.value)
  }
    const foodFilter = foods.filter(food =>  {
      if(filter === "All"){
        return true
      }else{
        return food.cuisine === filter
      }
    })
  


  const foodList = foodFilter.map((food) => (
    <li key={food.id} onClick={()=> handleLiClick(food.id)}>
      {food.name} | Heat: {food.heatLevel} | Cuisine: {food.cuisine}
    </li>
  ));

  return (
    <div>
      <button onClick={handleAddFood}>Add New Food</button>
      <select name="filter"  onChange={handleFilter}>
        <option value="All">All</option>
        <option value="American">American</option>
        <option value="Sichuan">Sichuan</option>
        <option value="Thai">Thai</option>
        <option value="Mexican">Mexican</option>
      </select>

      <ul>{foodList}</ul>
    </div>
  );
}

export default SpicyFoodList;
