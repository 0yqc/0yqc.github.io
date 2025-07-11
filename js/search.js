// Declare function
function loadHTML(path, callback) {
	fetch(path)
		.then(response => response.text())
		.then(data => {
			if (callback) {
				callback(data)
				// in the callback function the HTML is useable via the var data
			}
		})
		.catch(error => console.error("Error Loading File: " + path + ", Error: " + error));
}

loadHTML("templates/sitemap.html", function (data) {
	sitemap = document.createElement("div") // a new DOM is created
	sitemap.innerHTML = data // the string will be inserted, this way it is a DOM
})

function search() {
	const search = document.getElementById("search").value.toLowerCase().trim();
	if (search) {
		// only execute if a search term is specified
		// the loaded sitemap is a string

		const items = sitemap.querySelectorAll(".root > li > ul > li") // fetch directly nested li

		const results = Array.from(items).filter(li =>
			// Array.from converts HTML collection to Array
			// filter() filters li elements
			li.innerHTML.toLowerCase().includes(search)
		)

		const result_div = document.getElementById("result")
		result_div.innerHTML = "" // clear previous results

		const result_list = document.createElement("ul") // create ul to erap everything
		for (let i = 0; i < results.length; i++) { // loop through every result
			let result_item = document.createElement("li") // create a tmp var, create a li for the item
			result_item = results[i].cloneNode(true) // add result
			result_list.appendChild(result_item) // append the li into the ul
		}
		result_div.appendChild(result_list) // insert the results into the div
	} else {
		document.getElementById("result").innerHTML = "";
	}
}

document.getElementById("search").addEventListener("input", function () {
	search();
});

document.getElementById("search_form").addEventListener("submit", function () {
	event.preventDefault();
	search();
})