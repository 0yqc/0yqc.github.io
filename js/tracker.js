document.getElementById("browser").innerHTML = navigator.product
document.getElementById("browser_version").innerHTML = navigator.appVersion
document.getElementById("browser_lang").innerHTML = navigator.language
document.getElementById("os").innerHTML = navigator.platform
document.getElementById("cpu").innerHTML = navigator.hardwareConcurrency
if (document.referrer) {
	// if it exists
	document.getElementById("referrer").innerHTML = document.referrer
} else {
	// of not, it was accessed directly
	document.getElementById("referrer").innerHTML = "direct"
}
document.getElementById("timezone").innerHTML = Intl.DateTimeFormat().resolvedOptions().timeZone
document.getElementById("connection").innerHTML = navigator.connection.effectiveType


navigator.getBattery().then(function (battery) {
	document.getElementById("bat_percentage").innerHTML = (Math.round(battery.level * 100)) + "%"
	document.getElementById("bat_charging").innerHTML = battery.charging
	document.getElementById("bat_timeEmpty").innerHTML = (Math.round(battery.dischargingTime / 60)) + " minutes"
	document.getElementById("bat_timeFull").innerHTML = (Math.round(battery.chargingTime / 60)) + " minutes"
})