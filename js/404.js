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
document.getElementById("site_url").innerHTML = "<a href=\"" + path + "\">" + path + "</a>"

// directory listing

load_file("/templates/sitemap.json", function (data) {
	const sitemap = JSON.parse(data)
	clean_path = path.slice(1) // slices off first / char
	if (sitemap.hasOwnProperty(clean_path)) { // checks if there is object clean_path
		// must be dir w/o index.html, as files open
		// add dir list logic
	}
});