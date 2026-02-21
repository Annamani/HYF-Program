function celsiusToFahrenheit(celsius) {
    const fahrenheit = (celsius * 9 / 5) + 32;
    return fahrenheit;
}
function FahrenheitTocelsius(fahrenheit) {
    const celsius = (fahrenheit - 32) * 5 / 9;
    return celsius;
}
console.log(celsiusToFahrenheit(25));
console.log(Math.round(FahrenheitTocelsius(100)));