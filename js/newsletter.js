document.getElementById("newsletter").addEventListener("submit", function (event) {
    const email = document.getElementById("email").value

    window.location.href = "mailto:0yqc@duck.com?subject=Newsletter Signup for " + email + "&body=" + email
})