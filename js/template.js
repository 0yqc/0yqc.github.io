text_navigator = "" // Initialize
const path_items = window.location.pathname.split("/").filter(part => part); //Split into Each Link Part, seperated by "/", then filter out all empty parts
var link = ""; //set link starting point to / to add further elements
for (i = 0; i < path_items.length; i++) { //Iterate through every path element
    link = link + "/" + path_items[i]; //set the current link, with the link before, and the new path element
    text_navigator = text_navigator + " > <a href=" + link + ">" + path_items[i] + "</a>";
    /*
    *   text_navigator = text_navigator +: Add to the text
    *   >: As arrow symbol
    *   <a href=": Start Link
    *   + link: use link as the href
    *   + ">": End <a> tag
    *   + path[i]: Add the current path element
    *   + "</a>": Close the <a> tag
    */
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

// giscus script is inserted to enable commenting in <div id="comments">
try {
document.getElementById("comments").innerHTML = `
    <script src="https://giscus.app/client.js" data-repo="0yqc/0yqc.github.io" data-repo-id="R_kgDONOV0ow"
            data-category="Giscus Comments" data-category-id="DIC_kwDONOV0o84CpqLZ" data-mapping="pathname"
            data-strict="1" data-reactions-enabled="1" data-emit-metadata="0" data-input-position="top"
            data-theme="dark_high_contrast" data-lang="en" crossorigin="anonymous" async>
            </script>
        <!--Config: /giscus.json-->
`
} catch {
    console.log("Comments not loaded, no comment block available")
}