var RecipeView = function (props) {
	return (
		<div className="recipe">
			<h1 className="recipeTitle">	{props.recipe.title} </h1>
			<img className="recipeImg" src={props.recipe.image_url} />
			<h2> {props.recipe.ingredients ? 'Ingredients:' :	''} </h2>
			<p className="ingredients">
				{ props.recipe.ingredients ?
				props.recipe.ingredients.map((ingredient) => {
				return <p>{ingredient}</p>
				}) : '' }
			</p>
			<h2 className="recipeLink"> { props.recipe.ingredients ? <a target="_blank" href={props.recipe.source_url}>See Full Recipe Here!</a> : '' } </h2>
		</div>
	)
};


window.RecipeView = RecipeView
