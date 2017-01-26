class App extends React.component {
	constructor(props) {
		super(props)
		this.state = {
			recipe: null
		}
	}

	renderRecipe() {
		this.props.searchRecipies()
		.then(function(recipe) {
			this.setState ({
				recipe: recipe
			})
		})
	}

	render() {
		return (
		<div>
			<button onClick={this.renderRecipe}>What's For Dinner?</button> <br/>
			<RecipeView recipe={this.state.recipe} /> <br/>
			<button>Let's Try it!</button><button onClick={this.renderRecipe}>Maybe Not...</button>
		</div>
		)
	}
}


window.App = App;