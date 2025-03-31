// ###
// From the "05_changing_display_with_dropdown"
// ###

const magnets = [
  {
    title: "Qatar",
    material: "metal",
    yearCreated: "07 / 27 / 2023",
    continent: "Asia",
    image: "../magnets/01_qatar.png",
    description: "Result of a flight delay, received a free room Went on a desert tour while waiting for the flight. Rode camels and ATVs through the desert, drove through the dunes."
  },
  {
    title: "Montreal",
    material: "ceramic",
    yearCreated: "03 / 15 / 2023",
    continent: "North America",
    image: "../magnets/02_montreal.png",
    description: "Impromptu trip for husband’s Spring break (Cancún was too expensive). Lovely people and food, quaint place. Went to the Biodome constructed from the Olympic grounds."
  },
  {
    title: "Half-House",
    material: "wood",
    yearCreated: "07 / 15 / 2024",
    continent: "North America",
    image: "../magnets/03_house.png",
    description: "Marks the first time in 14 years that we are living in the same city together. She has the other half of the house symbolizing that our family has been completed."
  },
  {
    title: "Washington DC",
    material: "wood",
    yearCreated: "02 / 19 / 2023",
    continent: "North America",
    image: "../magnets/04_dc.png",
    description: "First time living abroad Followed husband for his masters’ program there. A life-changing experience, grew a lot as a person while adapting to a new culture."
  },
  {
    title: "New York City",
    material: "vinyl",
    yearCreated: "03 / 15 / 2023",
    continent: "North America",
    image: "../magnets/05_nyc.png",
    description: "Too many memories! Have family there, first time studying abroad. Bar and arts scene is amazing."
  },
  {
    title: "Louisiana",
    material: "plastic",
    yearCreated: "03 / 07 / 2023",
    continent: "North America",
    image: "../magnets/06_louisiana.png",
    description: "First road trip! Lots of memories made, seen so many sights. Louisiana is my favorite place in the US because of the food and sights."
  },
  {
    title: "Iceland",
    material: "wood",
    yearCreated: "07 / 31 / 2024",
    continent: "Europe",
    image: "../magnets/07_iceland.png",
    description: "A last hurrah trip before starting my masters in NYU. A beautiful ethereal place that seems otherworldly."
  },
  {
    title: "Ohio",
    material: "plastic",
    yearCreated: "08 / 08 / 2024",
    continent: "North America",
    image: "../magnets/08_ohio.png",
    description: "Where my husband did his undergrad. Went there for his college friend’s wedding. Revisited old places and memories."
  },
  {
    title: "Vancouver",
    material: "wood",
    yearCreated: "04 / 14 / 2023",
    continent: "North America",
    image: "../magnets/09_vancouver.png",
    description: "Visiting my childhood friend that I have not seen in over a decade. Went whale-watching for the first time Drove up to Squamish Mountain, rode the Sea-to-Sky Gondola, and went hiking around the area."
  },
  {
    title: "Gibraltar",
    material: "metal",
    yearCreated: "10 / 06 / 2023",
    continent: "Europe",
    image: "../magnets/10_gibraltar.png",
    description: "A really unique place that I never thought to visit Went there with husband for a Warhammer competition Learned about the history of Gibraltar Met people from different countries from different backgrounds."
  }
];

let wrapper = document.querySelector(".wrapper");

let renderMagnets = (data) => {
  data.forEach((magnet) => {
    let newDiv = document.createElement("div");
    newDiv.setAttribute("data-continent", magnet.continent);
    newDiv.innerHTML = `<div class="description">
            <h3>
              ${magnet.title}<br /><small><em>${magnet.yearCreated}</em></small>
            </h3>
            ${magnet.description}
          </div><img src="${magnet.image}" alt="${magnet.title}" />`;
    wrapper.append(newDiv);
  });
};

renderMagnets(magnets)

// continent filter

const continents = ["Asia", "North America", "Europe"];

let selectionWrapper = document.querySelector(".continent-checkboxes");

continents.forEach((continent) => {
    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.id = continent;
  
    let label = document.createElement("label");
    label.textContent = continent;
  
    let continent_option = document.createElement("div");
    continent_option.classList.add("continent_option");
  continent_option.appendChild(checkbox);
  continent_option.appendChild(label);
  
    selectionWrapper.appendChild(continent_option);
  });

let changeData = () => {

  let tickedcontinents = [];

  let allCheckboxes = document.querySelectorAll("input[type=checkbox]:checked");
  allCheckboxes.forEach((checkbox) => {
    tickedcontinents.push(checkbox.id);
  });

  let allMagnets = document.querySelectorAll(".wrapper div");

  allMagnets.forEach((magnet) => {
    let magnetContinent = magnet.getAttribute("data-continent");

    if (tickedcontinents.length === 0 || tickedcontinents.includes(magnetContinent)) {
      magnet.style.display = "block"; 
    } else {
      magnet.style.display = "none";
    }
  });
};

// Attach the changeData function to all checkbox inputs
let allCheckboxes = document.querySelectorAll("input[type=checkbox]");
allCheckboxes.forEach((checkbox) => checkbox.addEventListener("change", changeData));
