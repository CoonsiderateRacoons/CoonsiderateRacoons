class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      recipe: {
        image_url: null
      },
    }
  }
  changeRecipeState(recipe) {
    this.setState({
      recipe: recipe
    })
  }
  renderRandomRecipe() {
    this.props.searchRandomRecipes(this.changeRecipeState.bind(this));
  }

  renderSpecificRecipe() {
    this.props.searchSpecificRecipe(this.changeRecipeState.bind(this), this.state.recipe.recipe_id);
  }

  render() {
    return (
      <div>
        <button className="mainButton" onClick={this.renderRandomRecipe.bind(this)}></button> <br/>
        <RecipeView recipe={this.state.recipe}/> <br/>
        <div className="subButtons">
          <button className="subButton" onClick={this.renderSpecificRecipe.bind(this)}>Let's Try It!</button>
          <button className="subButton" onClick={this.renderRandomRecipe.bind(this)}>Maybe not...</button>
        </div>
      </div>
    )
  }
};


window.App = App;
