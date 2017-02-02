var RecipeView = function (props) {
	return (
		<div>
			{console.log(props.recipe)}
			<img src={props.recipe.image_url} />
		</div>
	)
};


window.RecipeView = RecipeView