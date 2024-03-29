function celsiustofah(celsius) {
	return ((9/5)*celsius + 32);
}
function celsiustokelvin(celsius) {
	return celsius + 273.15;
}
function fahtocelsius(fah) {
	return (5/9)*(fah - 32);
}
function fahtokel(fah) {
	return (5/9)*(fah - 32) + 273.15;
}
function keltocelsius(kelvin) {
	return (kelvin - 273.15);
}
function keltofah(kelvin) {
	return ((9/5)*(kelvin - 273.15) + 32);
}
function convertTemperature() {
	var convertFrom = document.getElementById("fromUnit").value;
	var convertTo = document.getElementById("toUnit").value;
	var inputtemp = parseFloat(document.getElementById("input").value);
	var result;
	if(convertFrom === "Celsius" && convertTo === "Fahrenheit") {
		result = celsiustofah(inputtemp);
	}
	else if(convertFrom === "Celsius" && convertTo === "Kelvin") {
		result = celsiustokelvin(inputtemp);
	}
	else if(convertFrom === "Celsius" && convertTo === "Celsius") {
		result = inputtemp;
	}
	else if(convertFrom === "Fahrenheit" && convertTo === "Fahrenheit") {
		result = inputtemp;
	}
	else if(convertFrom === "Kelvin" && convertTo === "Kelvin") {
		result = inputtemp;
	}
	else if(convertFrom === "Fahrenheit" && convertTo === "Celsius") {
		result = fahtocelsius(inputtemp);
	}
	else if(convertFrom === "Fahrenheit" && convertTo === "Kelvin") {
		result = fahtokel(inputtemp);
	}
	else if(convertFrom === "Kelvin" && convertTo === "Celsius") {
		result = keltocelsius(inputtemp);
	}
	else if(convertFrom === "Kelvin" && convertTo === "Fahrenheit") {
		result = keltofah(inputtemp);
	}
	else {
		result = "Unsupported";
	}
	document.getElementById("output").value = result.toFixed(2);
}
function reset() {
	document.getElementById("input").value = "";
	document.getElementById("output").value = "";
}
document.getElementById("submit").addEventListener("click" , convertTemperature);
document.getElementById("reset").addEventListener("click" , reset)