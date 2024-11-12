// Navigator:
const path = window.location.pathname.split("/").filter(part => part); //Split into Each Link Part, seperated by "/", then filter out all empty parts
var link = ""; //set link starting point to / (https://0yQc.github.io/) to add further elements
var text_navigator = "<a href=" + link + "/>root</a>"; // set text for first element, since it is not fetched in window.location.pathname
for (i = 0; i < path.length; i++) { //Iterate through every path element
    link = link + "/" + path[i]; //set the current link, with the link before, and the new path element
    text_navigator = text_navigator + " > <a href=" + link + ">" + path[i] + "</a>";
    /*
    *   text = text +: Add to the text
    *   " >: Add > as an arrow symbol
    *   <a href=": Start Link
    *   + link: use link as the href
    *   + ">": End <a> tag
    *   + path[i]: Add the current path element
    *   + "</a>": Close the <a> tag
    */
}
//document.getElementById("header").innerHTML = text;

// Last Modified:
const text_last_modified = "Last Modified: " + new Date(document.lastModified).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" });

// Header:
document.getElementById("header").innerHTML = "<table><tr><td>" + text_navigator + "</td><td style=\"text-align: right;\">" + text_last_modified + "</td></tr></table>"