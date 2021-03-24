// Write your JavaScript code here!

window.addEventListener("load", function() {
let form = document.querySelector("form");
      form.addEventListener("submit", function(event) {
         event.preventDefault();
         let pilotInput = document.querySelector("input[name=pilotName]");
         let pilot = pilotInput.value;
         let copilotInput = document.querySelector("input[name=copilotName]");
         let copilot = copilotInput.value;
         let fuelInput = document.querySelector("input[name=fuelLevel]");
         let fuel = Number(fuelInput.value);
         let cargoInput= document.querySelector("input[name=cargoMass]");
         let cargo = Number(cargoInput.value);
         
         if (pilot === "" || copilot === "" || fuel ===  "" || cargo === "") {
            alert("All fields are required!");
            
         } else if (isNaN(pilot) === false || isNaN(copilot) === false || isNaN(fuel) || isNaN(cargo)) {
            alert("Incorrect Data");
            
         }
      });
   });     


/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ol>
<img src="${}">
*/
