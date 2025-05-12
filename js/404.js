const path = window.location.pathname

function load_file(path, callback) {
	fetch(path)
		.then(response => response.text())
		.then(data => {
			if (callback) callback(data) // in the callback function the text is useable via the var data
		})
		.catch(error => console.error("Error Loading File: " + path + ", Error: " + error));
}

// no case sensitivity by converting to lowercase
if (path != path.toLowerCase()) {
	window.location.href = path.toLowerCase();
}

// display current url
Array.from(document.getElementsByClassName("site_url")).forEach(element => {
	element.innerHTML = path
});

// directory listing

load_file("/templates/sitemap.json", function (data) {
	
});