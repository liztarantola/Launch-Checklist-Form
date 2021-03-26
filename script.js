// Write your JavaScript code here!

window.addEventListener("load", function() {
   fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response) {
      return response.json();
   }).then(function(json) {
      console.log(json);
      const destination = document.querySelector("#missionTarget");
      let planet = 
         `
         <h2 id="destination">Mission Destination</h2>
         <ol>
             <li>Name: ${json[0].name} </li>
             <li>Diameter:${json[0].diameter}</li>
             <li>Star: ${json[0].star}</li>
             <li>Distance from Earth: ${json[0].distance}</li>
             <li>Number of Moons: ${json[0].moons}</li>
         </ol>
         <img src="${"https://www.nasa.gov/sites/default/files/images/587837main_Kepler16_transit_art2_full.jpg"}"></img>
         `
         destination.innerHTML = planet;
   });
      
      const form = document.querySelector("form");
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
         let status = document.getElementById('launchStatus');
         let pilotInfo = document.getElementById('pilotStatus');
         let copilotInfo = document.getElementById("copilotStatus");
         let fuelInfo = document.getElementById('fuelStatus');
         let cargoInfo = document.getElementById('cargoStatus');

         if (pilot === "" || copilot === "" || fuel ===  "" || cargo === "") {
            alert("All fields are required!");
            
            } else if (isNaN(pilot) === false || isNaN(copilot) === false || isNaN(fuel)|| isNaN(cargo)) {
            alert("Incorrect Data!");

            } else if (fuel < 10000) {
               document.getElementById("faultyItems").style.visibility = "visible";
               status.innerHTML = "Shuttle not ready for launch.";
               status.style = "color:red";
               pilotInfo.innerHTML = `Pilot ${pilot} is ready for launch.`;
               copilotInfo.innerHTML = `Co-pilot ${pilot} is ready for launch.`; 
               fuelInfo.innerHTML = "Fuel level too low for launch.";
            
            } else if (cargo > 10000) {
               document.getElementById("faultyItems").style.visibility = "visible";
               status.innerHTML = "Shuttle not ready for launch.";
               status.style = "color:red";
               pilotInfo.innerHTML = `Pilot ${pilot} is ready for launch.`;
               copilotInfo.innerHTML = `Co-pilot ${pilot} is ready for launch.`; 
               cargoInfo.innerHTML = "Cargo mass too high for launch.";
            
               } else {
                  document.getElementById("faultyItems").style.visibility = "visible";
                  status.innerHTML = "Shuttle is ready for launch.";
                  status.style = "color:green";
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
