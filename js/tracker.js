const browser = document.getElementById("browser").innerHTML = navigator.product
const browser_version = document.getElementById("browser_version").innerHTML = navigator.appVersion
const browser_lang = document.getElementById("browser_lang").innerHTML = navigator.language
const os = document.getElementById("os").innerHTML = navigator.platform
const cpu = document.getElementById("cpu").innerHTML = navigator.hardwareConcurrency
var referrer
if (document.referrer) {
	// if it exists
	referrer = document.referrer
} else {
	// if not, it was accessed directly
	referrer = "direct"
}
document.getElementById("referrer").innerHTML = referrer
const timezone = document.getElementById("timezone").innerHTML = Intl.DateTimeFormat().resolvedOptions().timeZone
if (navigator.connection) {
	const connection = document.getElementById("connection").innerHTML = navigator.connection.effectiveType
}

if (navigator.getBattery) {
	navigator.getBattery().then(function (battery) {
		const bat_percentage = document.getElementById("bat_percentage").innerHTML = (Math.round(battery.level * 100)) + "%"
		const bat_charging = document.getElementById("bat_charging").innerHTML = battery.charging
		const bat_timeEmpty = document.getElementById("bat_timeEmpty").innerHTML = (Math.round(battery.dischargingTime / 60)) + " minutes"
		const bat_timeFull = document.getElementById("bat_timeFull").innerHTML = (Math.round(battery.chargingTime / 60)) + " minutes"
		// construct email link in here, to wait until all battery data is present
		document.getElementById("form").addEventListener("submit", function event() {
			document.location.href = "mailto:0yqc@duck.com?subject=Analytics Report&body=" + `Browser: ${browser}%0D%0ABrowser Version: ${browser_version}%0D%0ABrowser Language: ${browser_lang}%0D%0AOperating System: ${os}%0D%0ANumber of CPUs: ${cpu}%0D%0AReferrer: ${referrer}%0D%0ATimezone: ${timezone}%0D%0AConnection Type: ${connection}%0D%0ABattery Percentage: ${bat_percentage}%0D%0ABattery Is Charging? ${bat_charging}%0D%0ABattery Time to Full: ${bat_timeFull}%0D%0ABAttery Time to Empty: ${bat_timeEmpty}`
		})
	})
} else {
	// also construct email link
	document.getElementById("form").addEventListener("submit", function event() {
		document.location.href = "mailto:0yqc@duck.com?subject=Analytics Report&body=" + `Browser: ${browser}%0D%0ABrowser Version: ${browser_version}%0D%0ABrowser Language: ${browser_lang}%0D%0AOperating System: ${os}%0D%0ANumber of CPUs: ${cpu}%0D%0AReferrer: ${referrer}%0D%0ATimezone: ${timezone}%0D%0AConnection Type: ${connection}%0D%0ABattery Percentage: ${bat_percentage}%0D%0ABattery Is Charging? ${bat_charging}%0D%0ABattery Time to Full: ${bat_timeFull}%0D%0ABAttery Time to Empty: ${bat_timeEmpty}`
	})
}