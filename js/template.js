text_navigator = "" // Initialize
const path_items = window.location.pathname.split("/").filter(part => part); //Split into Each Link Part, seperated by "/", then filter out all empty parts
var link = ""; //set link starting point to / to add further elements
for (i = 0; i < path_items.length; i++) { //Iterate through every path element
    link = link + "/" + path_items[i]; //set the current link, with the link before, and the new path element
    text_navigator = text_navigator + " > <a href=" + link + ">" + path_items[i] + "</a>";
}

// Declare function
function loadHTML(path, callback) {
    fetch(path)
        .then(response => response.text())
        .then(data => {
            if (callback) callback(data); // in the callback function the HTML is useable via the var data
        })
        .catch(error => console.error("Error Loading File: " + path + ", Error: " + error));
}

function insertSitemap() {
    loadHTML("/templates/sitemap.html", function (data) {
        const sitemap = document.getElementsByClassName("sitemap")
        // set data for each element
        Array.from(sitemap).forEach(element => {
            element.innerHTML = data;
        });
        Array.from(document.getElementsByClassName("sitemap_admin")).forEach(element => {
            element.classList.add("hidden")
        })
        if (window.localStorage.getItem("admin") == "true") {
            Array.from(document.getElementsByClassName("sitemap_admin")).forEach(element => {
                element.classList.remove("hidden")
            })
        }
    })
}

loadHTML("/templates/header.html", function (data) {
    document.getElementById("header").innerHTML = data
    document.getElementById("breadcrumb").innerHTML = text_navigator;
    document.getElementById("last_modified").innerHTML = new Date(document.lastModified).toLocaleDateString("en-us", {
        year: "numeric", month:
            "short", day: "numeric"
    });
    insertSitemap() // insert the sitemap after the header is fully loaded.
});

loadHTML("/templates/footer.html", function (data) {
    document.getElementById("footer").innerHTML = data
});

if (window.location.href.startsWith("http://0yqc.github.io")) { // this is the old github page, I'd rather use the new Cloudflare page at https://0yqc.pages.dev/
    window.location.href = window.location.href.replace("0yqc.github.io", "0yqc.pages.dev")
}