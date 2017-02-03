var RecipeView = function (props) {
	return (
		<div>
			{console.log(props.recipe)}
			<h1>
				{props.recipe.title}
			</h1>
			<img src={props.recipe.image_url} />
			<ul>
				{ props.recipe.ingredients ?
				props.recipe.ingredients.map((ingredient) => {
				return <li>{ingredient}</li>
				}) : ''
			}
		</ul>
		</div>
	)
};


window.RecipeView = RecipeView
