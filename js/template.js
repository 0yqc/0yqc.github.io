text_navigator = ""
const path = window.location.pathname.split("/").filter(part => part); //Split into Each Link Part, seperated by "/", then filter out all empty parts
var link = ""; //set link starting point to / to add further elements
for (i = 0; i < path.length; i++) { //Iterate through every path element
    link = link + "/" + path[i]; //set the current link, with the link before, and the new path element
    text_navigator = text_navigator + " > <a href=" + link + ">" + path[i] + "</a>";
    /*
    *   text_navigator = text_navigator +: Add to the text
    *   " >: Add > as an arrow symbol
    *   <a href=": Start Link
    *   + link: use link as the href
    *   + ">": End <a> tag
    *   + path[i]: Add the current path element
    *   + "</a>": Close the <a> tag
    */
}

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
    document.getElementById("navigator_text").innerHTML = text_navigator;
    document.getElementById("last_modified").innerHTML = new Date(document.lastModified).toLocaleDateString("en-us", {
        year: "numeric", month:
            "short", day: "numeric"
    });
});

loadHTML("templates/footer.html", "footer")