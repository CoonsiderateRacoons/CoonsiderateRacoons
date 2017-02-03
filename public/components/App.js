


class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      recipe: {
        image_url: null
      }
    }
  }
  changeRecipeState(recipe) {
    this.setState({
      recipe: recipe
    })
  }
  renderRandomRecipe() {
    console.log(this);
    this.props.searchRandomRecipes(this.changeRecipeState.bind(this));
    // this.props.searchRandomRecipes(function(recipe) {
    //   this.setState({
    //     recipe: recipe
    //   })
    // });
    // new Promise (function(resolve, reject) {
    //   window.searchRandomRecipes();
    // })
    // .then((recipe) => {
    //   console.log('getting into then');
    //   this.setState({
    //     recipe: recipe
    //   });
    // })
    // window.searchRandomRecipes()
    // .then((recipe) => {
    //   this.setState({
    //     recipe: recipe
    //   });
    // })
  }

  renderSpecificRecipe() {
    this.props.searchSpecificRecipe(this.changeRecipeState.bind(this), this.state.recipe.recipe_id);
    // .then((recipe) => {
    //   this.setState({
    //     recipe: recipe
    //   })
    // })
  }

  render() {
    return (
      <div>
        <button onClick={this.renderRandomRecipe.bind(this)}>What's For Dinner?</button> <br/>
        <RecipeView recipe={this.state.recipe}/> <br/>
        <button onClick={this.renderSpecificRecipe.bind(this)}>Let's Try It!</button>
        <button onClick={this.renderRandomRecipe.bind(this)}>Maybe not...</button>
      </div>
    )
  }

};


window.App = App;
