document.getElementById("contact_form").addEventListener("submit", function (event) {
    event.preventDefault();
    const name = document.getElementById("name").value
    const email = document.getElementById("email").value
    const type = document.querySelector("input[name=\"type\"]:checked").value
    const unformatedMessage = document.getElementById("message").value
    var message = unformatedMessage.replace(/\n/g, '%0D%0A');

    window.location.href = "mailto:0yqc@duck.com?subject=Website " + type + " by " + name + " (" + email + ")&body=" + message
})