function convert() {
  // Retrieve input values
  let inputValue = document.getElementById("inputValue").value;
  let fromUnit = document.getElementById("fromUnit").value;
  let toUnit = document.getElementById("toUnit").value;

  // Convert the length based on the selected units
  let result;

  // Check which units are selected and perform the conversion
  if (fromUnit === "cm" && toUnit === "inch") {
    result = inputValue / 2.54;
  } else if (fromUnit === "inch" && toUnit === "cm") {
    result = inputValue * 2.54;
  } else if (fromUnit === "cm" && toUnit === "feet") {
    result = inputValue / 30.48;
  } else if (fromUnit === "feet" && toUnit === "cm") {
    result = inputValue * 30.48;
  }
  // ... Repeat the above "if-else" block for all conversion possibilities ...

  // If no conversion needed (same units selected), result remains the same
  else {
    result = inputValue;
  }

  // Display the result on the web page
  document.getElementById("result").innerHTML = result.toFixed(4);
}
