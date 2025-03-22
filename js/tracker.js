document.getElementById("browser").innerHTML = navigator.product
document.getElementById("browser_version").innerHTML = navigator.appVersion
document.getElementById("browser_lang").innerHTML = navigator.language
document.getElementById("os").innerHTML = navigator.platform
document.getElementById("referrer").innerHTML = document.referrer
document.getElementById("timezone").innerHTML = Intl.DateTimeFormat().resolvedOptions().timeZone

navigator.getBattery().then(function(battery) {
	document.getElementById("bat_percentage").innerHTML = (battery.level * 100) + "%"
	document.getElementById("bat_charging").innerHTML = battery.charging
	document.getElementById("bat_timeEmpty").innerHTML = (battery.dischargingTime / 60) + " minutes"
	document.getElementById("bat_timeFull").innerHTML = (battery.chargingTimer / 60) + "minutes"
})