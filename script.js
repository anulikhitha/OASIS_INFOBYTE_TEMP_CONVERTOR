document.getElementById("convertBtn").addEventListener("click", function () {
    const temperature = parseFloat(document.getElementById("temperature").value);
    const unit = document.getElementById("unit").value;
    let result;
  
    if (unit === "celsius") {
      result = (temperature * 9 / 5) + 32;
    } else if (unit === "fahrenheit") {
      result = (temperature - 32) * 5 / 9;
    }
  
    document.getElementById("result").innerText = "Result: " + result.toFixed(2) + " " + (unit === "celsius" ? "Fahrenheit" : "Celsius");
  });
  