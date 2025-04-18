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
function loadHTML(path, elementId, callback) {
    fetch(path)
        .then(response => response.text())
        .then(data => {
            document.getElementById(elementId).innerHTML = data;
            if (callback) callback();
        })
        .catch(error => console.error("Error Loading File: " + path + ", Error: " + error));
}

loadHTML("templates/header.html", "header", function () {
    document.getElementById("breadcrumb").innerHTML = text_navigator;
    document.getElementById("last_modified").innerHTML = new Date(document.lastModified).toLocaleDateString("en-us", {
        year: "numeric", month:
            "short", day: "numeric"
    });
});

loadHTML("templates/footer.html", "footer", function () {
    document.getElementById("newsletter").addEventListener("submit", function (event) {
        event.preventDefault
        const email = document.getElementById("email").value;
        window.location.href = "mailto:0yqc@duck.com?subject=Newsletter Signup for " + email + "&body=" + email
    })
});