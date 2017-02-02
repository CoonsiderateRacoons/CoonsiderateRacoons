var RecipeView = function (props) {
	return (
		<div>
			<img src={props.recipe.image_url} />
		</div>
	)
};


window.RecipeView = RecipeView