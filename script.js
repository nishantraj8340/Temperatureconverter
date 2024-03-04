
document.addEventListener("DOMContentLoaded", function () {
    
    const inputTempSelect = document.getElementById("inputTemp");
    const outputTempSelect = document.getElementById("outputTemp");
    const temperatureInput = document.getElementById("temperatureInput");
    const convertButton = document.querySelector(".convertButton");
    const resetButton = document.querySelector(".resetButton");
    const resultParagraph = document.querySelector(".result");
  
    
    function convertTemperature() {
      const inputTempType = inputTempSelect.value;
      const outputTempType = outputTempSelect.value;
      const inputTempValue = parseFloat(temperatureInput.value);
  
      
      if (isNaN(inputTempValue)) {
        resultParagraph.textContent = "Please enter a valid temperature.";
        return;
      }
  
      
      let result;
  
      if (inputTempType === "celsius") {
        if (outputTempType === "fahrenheit") {
          result = (inputTempValue * 9/5) + 32;
        } else if (outputTempType === "kelvin") {
          result = inputTempValue + 273.15;
        } else {
          result = inputTempValue;
        }
      } else if (inputTempType === "fahrenheit") {
        if (outputTempType === "celsius") {
          result = (inputTempValue - 32) * 5/9;
        } else if (outputTempType === "kelvin") {
          result = (inputTempValue - 32) * 5/9 + 273.15;
        } else {
          result = inputTempValue;
        }
      } else if (inputTempType === "kelvin") {
        if (outputTempType === "celsius") {
          result = inputTempValue - 273.15;
        } else if (outputTempType === "fahrenheit") {
          result = (inputTempValue - 273.15) * 9/5 + 32;
        } else {
          result = inputTempValue;
        }
      } else {
        resultParagraph.textContent = "Please select valid input temperature units.";
        return;
      }
  
      
      resultParagraph.textContent = `Result: ${result.toFixed(2)} ${outputTempType}`;
    }
  
    
    resetButton.addEventListener("click", function () {
      inputTempSelect.value = "";
      outputTempSelect.value = "";
      temperatureInput.value = "";
      resultParagraph.textContent = "";
    });
  
    
    convertButton.addEventListener("click", convertTemperature);
  });