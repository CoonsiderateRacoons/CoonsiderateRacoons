class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      recipe: null
    }
  }

  renderRecipe() {
    this.props.searchRecipes()
    .then((recipe) => {
      this.setState({
        recipe: recipe
      });
    })
  }

  render() {
    return (
      <div>
        <button onClick={this.renderRecipe}>What's For Dinner?</button> <br/>
        <RecipeView recipe={this.state.recipe}/> <br/>
        <button>Let's Try It!</button>
        <button onClick={this.renderRecipe}>Maybe not...</button>
      </div>
    )
  }

};


window.App = App;
