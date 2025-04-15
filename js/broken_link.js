document.getElementById("broken_link").addEventListener("submit", function (event) {
    event.preventDefault();
    const referrer = document.getElementById("referrer").value
    const notes = document.getElementById("notes").value

    window.location.href = "mailto:0yqc@duck.com?subject=Broken Link: " + window.location.pathname + "&body=" + notes
})