// Write your JavaScript code here!
window.addEventListener("load", function() {
   let form = document.querySelector("form");

   form.addEventListener("submit", function(event) {
      // testing different implementations
      let fuelStatus;
      let cargoStatus;

      let pilot = document.querySelector("input[name=pilotName]");
      let copilot = document.getElementById("copilot");
      let fuelLevel = document.getElementById("fuelLevel");
      let cargoMass = document.getElementById("cargoMass");
      let itemStatus = document.getElementById("itemStatus");

      event.preventDefault();

      if (pilot.value === "" || copilot.value === "" || fuelLevel.value === "" || cargoMass.value === "") {
         alert("All fields are required!");
      }
      else if (!(isNaN(pilot.value)) || !(isNaN(copilot.value)) || isNaN(fuelLevel.value) || isNaN(cargoMass.value)) {
         alert("Make sure to enter valid information for each field!");
      }
      else {
         itemStatus.style.visibility = "visible";
         document.getElementById("pilotStatus").innerHTML = `Pilot ${pilot.value} is ready for launch`;
         document.getElementById("copilotStatus").innerHTML = `Co-pilot ${copilot.value} is ready for launch`;

         if (fuelLevel.value < 10000) {
            fuelStatus = false;
            document.getElementById("fuelStatus").innerHTML = `Fuel level too low for launch`;
         }
         else {
            fuelStatus = true;
            document.getElementById("fuelStatus").innerHTML = `Fuel level check passed`;
         }

         if (cargoMass.value > 10000) {
            cargoStatus = false;
            document.getElementById("cargoStatus").innerHTML = "Cargo mass too heavy for launch";
         }
         else {
            cargoStatus = true;
            document.getElementById("cargoStatus").innerHTML = "Cargo mass low enough for launch";
         }

         if (!fuelStatus || !cargoStatus) {
            launchStatus.style.color = "red";
            document.getElementById("launchStatus").innerHTML = `Shuttle not ready for launch`;
         }
         else {
            launchStatus.style.color = "green";
            document.getElementById("launchStatus").innerHTML = `Shuttle is ready for launch`;           
         }
      }
   })
});

window.addEventListener("load", function() {
   fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
      response.json().then( function(json) {
         let planet = json[Math.floor(Math.random()*json.length)];

         const div = document.getElementById("missionTarget");
         // Add HTML that includes the JSON data
         div.innerHTML = `
            <h2>Mission Destination</h2>
            <ol>
               <li>Name: ${planet.name}</li>
               <li>Diameter: ${planet.diameter}</li>
               <li>Star ${planet.star}</li>
               <li>Distance from Earth: ${planet.distance}</li>
               <li>Number of Moons: ${planet.moons}</li>
            </ol>
            <img src="${planet.image}" alt="planet">
         `;
      });
   });
});