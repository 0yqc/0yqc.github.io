document.getElementById("broken_link").addEventListener("submit", function (event) {
    event.preventDefault();
    const notes = document.getElementById("notes").value.replace(/\n/g, '%0D%0A');
    // /.../ is Regex, \n is newline in HTML, g is globally, will be replaced with: %0D%0A in Unicode
    const seen = document.getElementById("seen").value

    window.location.href = "mailto:0yqc@duck.com?subject=Broken Link: " + window.location.pathname + "&body=" + notes + "%0D%0A%0D%0AReferrer: " + navigator.referrer + "%0D%0A(User) Seen: " + seen
})