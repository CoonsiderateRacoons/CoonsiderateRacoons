var RecipeView = function (props) {
	return (
		<div>
			{console.log(props.recipe)}
			<h1>
				{props.recipe.title}
			</h1>
			<img src={props.recipe.image_url} />
			<h2>
				{props.recipe.ingredients ?
				'Ingredients:' :
				''
				}
			</h2>
			<ul>
				{ props.recipe.ingredients ?
				props.recipe.ingredients.map((ingredient) => {
				return <li>{ingredient}</li>
				}) : ''
			}
		</ul>
		<h2>
			{ props.recipe.ingredients ?
				<a href={props.recipe.source_url}>Get Directions Here</a>
				: ''
			}
		</h2>
		</div>
	)
};


window.RecipeView = RecipeView
