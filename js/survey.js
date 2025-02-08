document.getElementById("survey").addEventListener("submit", function(event) {
    event.preventDefault
    const fname = document.getElementById("fname").value
    const lname = document.getElementById("lname").value
    const age = document.getElementById("age").value
    const birth = document.getElementById("birth").value
    const gender = document.getElementById("gender").value
    const gender_other = document.getElementById("gender_other").value
    const continent = document.getElementById("continent").value
    const country = document.getElementById("country").value
    const city = document.getElementById("city").value
    const color = document.getElementById("color").value
    const message = document.getElementById("message").value

    window.location.href = "mailto:0yqc@duck.com?subject=Website Survey by " + fname + " " + lname + " (" + age + "yo)&body=Birthday: " + birth + "%0D%0AGender: " + gender + " (" + gender_other + ")%0D%0ALocation: " + continent + ", " + country + ", " + city + "%0D%0AFavorite Color: " + color + "%0D%0AMy Random Message:%0D%0A%0D%0A" + message
})
document.getElementById("gender").addEventListener("change", function() {
    const gender_other = document.getElementById("gender_other")
    if (this.value === "other") {
        gender_other.style.display = "block"
    } else {
        gender_other.style.display = "none"
    }
})