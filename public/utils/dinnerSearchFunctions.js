var mostPopularDinnerMeals = [
  "pizza", "chicken", "chicken", "chicken", "chicken",
  "enchiladas", "salmon", "pasta", "spaghetti", "lasagna",
  "meatloaf", "tilapia", "tacos", "marsala", "curry",
  "stroganoff", "sandwich", "kabob", "soup", "casserole",
  "meatball", "mac", "pork", "steak", "shepherd",
  "stir", "tikka", "tuna", "cajun", "hamburger"
];

var getDinnerMeal = () => {
  var randomNumber = Math.floor(Math.random() * (mostPopularDinnerMeals.length + 1));
  console.log('anything');
  console.log('random number', randomNumber);
  console.log(mostPopularDinnerMeals[randomNumber]);
  return mostPopularDinnerMeals[randomNumber];
};

module.exports = getDinnerMeal;
