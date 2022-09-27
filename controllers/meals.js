import { Meal } from "../models/meal.js";

function newMeal(req, res) {
  Meal.find({})
  .then(meals => {
    res.render('meals/new', {
      title: 'Add meal',
      meals: meals,
    })
  })
}

export {
  newMeal as new
}