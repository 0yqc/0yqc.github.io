const path = window.location.pathname.split("/").filter(part => part); //Split into Each Link Part, seperated by "/", then filter out all empty parts
var link = ""; //set link starting point to / (https://0yQc.github.io/) to add further elements
var text_navigator = "<a href=" + link + "/>root</a>"; // set text for first element, since it is not fetched in window.location.pathname
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

document.getElementById("header").innerHTML = `
<header>
    <table>
        <tr>
            <td>
                <a href="">
                    <img src="media/logo/white.svg" alt="yQc: yQlormatic" style="width:87px;height:38,5px"></a>
`
    + text_navigator +
    `
            </td>
            <td style="text-align: right;">
                Last Modified: ` + new Date(document.lastModified).toLocaleDateString("en-us", {year: "numeric", month: "short", day: "numeric"}) +
    `</td>
        </tr>
    </table>
</header>
`

document.getElementById("footer").innerHTML = `
<footer>
    <table>
        <tr>
            <td style="vertical-align: center">
                <a href="credits">Credits</a><br><br>
                <a href="contact">Contact<br>Feedback<br>Bug Report</a>
            </td>
            <td style="width: 50%; font-size: 75%;">
                <form id="newsletter">
                    <label>E-Mail Newsletter Signup</label><br>
                    <label for="email">Your E-Mail Adress:</label><br>
                    <input type="email" name="email" id="email" required><br>
                    <input type="checkbox" name="agree" id="agree" required>
                    <label for="agree">I agree to receiving update emails about this website, I can opt out from these emails at any time.</label><br>
                    <input type="submit" name="submit" id="submit" value="Signup (Opens Mail Program)">
                </form>
            </td>
        </tr>
    </table>

<script src="js/newsletter.js"></script>
</footer>
`
