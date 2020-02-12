const gamesDetailsUrl = "https://api.rawg.io/api/games/4200";

fetch(gamesDetailsUrl)
	.then(function(response) {
		return response.json();
	})
	.then(function(json) {
		createGamesDetails(json);
	})
	.catch(function(error) {
		console.log(error);
	});

function createGamesDetails(json) {
	console.dir(json);

	const name = document.querySelector("h1");
	name.innerHTML = json.name;

	const image = document.querySelector(".image");
	image.style.backgroundImage = "url('https://media.rawg.io/media/games/328/3283617cb7d75d67257fc58339188742.jpg')";
	image.alt = json.name;

	const description = document.querySelector(".description");
	description.innerHTML = json.description;
}
