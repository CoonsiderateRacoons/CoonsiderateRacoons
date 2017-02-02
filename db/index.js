var Sequelize = require('sequelize');

var sequelize = new Sequelize('w4d', 'root', '');

var User = sequelize.define('user', {
  username: Sequelize.STRING,
  password: Sequelize.STRING
});

var Recipe = sequelize.define('recipe', {
  recipe_id: Sequelize.INTEGER,
});

var UserRecipe = sequelize.define('user_recipe' {
  like: Sequelize.BOOLEAN
})

User.belongsToMany(Recipe, {through: UserRecipe});
Recipe.belongsToMany(User, {through: UserRecipe});

User.sync();
Recipe.sync();
UserRecipe.sync();

module.exports = {
  User: User,
  Recipe: Recipe,
  UserRecipe
};
