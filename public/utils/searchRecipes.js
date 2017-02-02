// var axios = require('axios');

var instance = axios.create({
  baseURL: '127.0.0.1:3000',
});


function searchRandomRecipes (callback) {
	axios.get('/random')
		.then(function(response) {
			console.log(response.data);
			callback(response.data);
		})
		.catch(function(error) {
			console.log(error);
		})
}

function searchSpecificRecipe (id) {
	axios.get('/specific', {
		params: {
			recipe_id: id
		}
	})
		.then(function(response) {
			console.log(response.data);
			return response.data;
		})
		.catch(function(error) {
			console.log(error);
		})
}

// module.exports.random = searchRandomRecipes;
// module.exports.specific = searchSpecificRecipe; 
window.searchRandomRecipes = searchRandomRecipes;
window.searchSpecificRecipe = searchSpecificRecipe;


// // Make a request for a user with a given ID 
// axios.get('/user?ID=12345')
//   .then(function (response) {
//     console.log(response);
//   })
//   .catch(function (error) {
//     console.log(error);
//   });
 
// // Optionally the request above could also be done as 
// axios.get('/user', {
//     params: {
//       ID: 12345
//     }
//   })
//   .then(function (response) {
//     console.log(response);
//   })
//   .catch(function (error) {
//     console.log(error);
//   });