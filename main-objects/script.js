// ###
// From the "05_changing_display_with_dropdown"
// ###

const magnets = [
  {
    title: "Qatar",
    material: "Metal",
    yearCreated: "07 / 27 / 2023",
    continent: "Asia",
    image: "../magnets/01_qatar.png",
    description:
      "Result of a flight delay, received a free room Went on a desert tour while waiting for the flight. Rode camels and ATVs through the desert, drove through the dunes.",
  },
  {
    title: "Montreal",
    material: "Ceramic",
    yearCreated: "03 / 15 / 2023",
    continent: "North America",
    image: "../magnets/02_montreal.png",
    description:
      "Impromptu trip for husband’s Spring break (Cancún was too expensive). Lovely people and food, quaint place. Went to the Biodome constructed from the Olympic grounds.",
  },
  {
    title: "Half-House",
    material: "Wood",
    yearCreated: "07 / 15 / 2024",
    continent: "North America",
    image: "../magnets/03_house.png",
    description:
      "Marks the first time in 14 years that we are living in the same city together. She has the other half of the house symbolizing that our family has been completed.",
  },
  {
    title: "Washington DC",
    material: "Wood",
    yearCreated: "02 / 19 / 2023",
    continent: "North America",
    image: "../magnets/04_dc.png",
    description:
      "First time living abroad Followed husband for his masters’ program there. A life-changing experience, grew a lot as a person while adapting to a new culture.",
  },
  {
    title: "New York City",
    material: "Vinyl",
    yearCreated: "03 / 15 / 2023",
    continent: "North America",
    image: "../magnets/05_nyc.png",
    description:
      "Too many memories! Have family there, first time studying abroad. Bar and arts scene is amazing.",
  },
  {
    title: "Louisiana",
    material: "Plastic",
    yearCreated: "03 / 07 / 2023",
    continent: "North America",
    image: "../magnets/06_louisiana.png",
    description:
      "First road trip! Lots of memories made, seen so many sights. Louisiana is my favorite place in the US because of the food and sights.",
  },
  {
    title: "Iceland",
    material: "Wood",
    yearCreated: "07 / 31 / 2024",
    continent: "Europe",
    image: "../magnets/07_iceland.png",
    description:
      "A last hurrah trip before starting my masters in NYU. A beautiful ethereal place that seems otherworldly.",
  },
  {
    title: "Ohio",
    material: "Plastic",
    yearCreated: "08 / 08 / 2024",
    continent: "North America",
    image: "../magnets/08_ohio.png",
    description:
      "Where my husband did his undergrad. Went there for his college friend’s wedding. Revisited old places and memories.",
  },
  {
    title: "Vancouver",
    material: "Wood",
    yearCreated: "04 / 14 / 2023",
    continent: "North America",
    image: "../magnets/09_vancouver.png",
    description:
      "Visiting my childhood friend that I have not seen in over a decade. Went whale-watching for the first time Drove up to Squamish Mountain, rode the Sea-to-Sky Gondola, and went hiking around the area.",
  },
  {
    title: "Gibraltar",
    material: "Metal",
    yearCreated: "10 / 06 / 2023",
    continent: "Europe",
    image: "../magnets/10_gibraltar.png",
    description:
      "A really unique place that I never thought to visit Went there with husband for a Warhammer competition Learned about the history of Gibraltar Met people from different countries from different backgrounds.",
  },
];

let gallery = document.querySelector(".gallery");

// give each magnet a div and insert into the gallery
let renderMagnets = (data) => {
  data.forEach((magnet) => {
    let newDiv = document.createElement("div");
    newDiv.setAttribute("data-continent", magnet.continent);
    newDiv.setAttribute("data-material", magnet.material);
    newDiv.classList.add("magnet");
    newDiv.innerHTML = `<div class="description">
            <h3>
              ${magnet.title}<br /><small><em>${magnet.yearCreated}</em></small>
            </h3>
            ${magnet.description}
          </div><img src="${magnet.image}" alt="${magnet.title}" />`;
    gallery.append(newDiv);
  });
};

renderMagnets(magnets);

// create continent checkbox filters

const continents = ["Asia", "North America", "Europe"];

let continentCheckboxes = document.querySelector(".continent-checkboxes");

continents.forEach((continent) => {
  let checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.id = continent;

  let label = document.createElement("label");
  label.textContent = continent;

  let continentCheckbox = document.createElement("div");
  continentCheckbox.classList.add("continentCheckbox");
  continentCheckbox.appendChild(checkbox);
  continentCheckbox.appendChild(label);

  continentCheckboxes.appendChild(continentCheckbox);
});

// create material checkbox filters

const materials = ["Ceramic", "Metal", "Plastic", "Vinyl", "Wood"];

let materialCheckboxes = document.querySelector(".material-checkboxes");

materials.forEach((material) => {
  let checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.id = material;

  let label = document.createElement("label");
  label.textContent = material;

  let materialCheckbox = document.createElement("div");
  materialCheckbox.classList.add("materialCheckbox");
  materialCheckbox.appendChild(checkbox);
  materialCheckbox.appendChild(label);

  materialCheckboxes.appendChild(materialCheckbox);
});

// CHECKBOX INTERACTIONS
// find ticked checkboxes
let updateData = () => {
  let tickedContinents = [];
  let tickedMaterials = [];

  let tickedCheckboxes = document.querySelectorAll(
    "input[type=checkbox]:checked"
  );
  tickedCheckboxes.forEach((tickedCheckbox) => {
    if (
      tickedCheckbox.id === "Asia" ||
      tickedCheckbox.id === "North America" ||
      tickedCheckbox.id === "Europe"
    ) {
      tickedContinents.push(tickedCheckbox.id);
    }

    if (
      tickedCheckbox.id === "Ceramic" ||
      tickedCheckbox.id === "Metal" ||
      tickedCheckbox.id === "Plastic" ||
      tickedCheckbox.id === "Vinyl" ||
      tickedCheckbox.id === "Wood"
    ) {
      tickedMaterials.push(tickedCheckbox.id);
    }
  });

  // display magnets whose checkboxes are checked (or not if they are not checked)
  let allMagnets = document.querySelectorAll(".magnet");

  allMagnets.forEach((magnet) => {
    let magnetContinent = magnet.getAttribute("data-continent");
    let magnetMaterial = magnet.getAttribute("data-material");

    if (
      (tickedContinents.length == 0 && tickedMaterials.length == 0) ||
      tickedContinents.includes(magnetContinent) ||
      tickedMaterials.includes(magnetMaterial)
    ) {
      magnet.style.display = "block";
    } else {
      magnet.style.display = "none";
    }
  });

  // with every checkbox interaction..
  // find and push visible magnets into array
  let visibleMagnets = [];

  allMagnets.forEach((magnet) => {
    if (magnet.style.display === "block") {
      visibleMagnets.push(magnet);
    }
  });

  console.log(visibleMagnets.length);

  // update positionings
  for (let i = 0; i < visibleMagnets.length; i++) {
    if (i % 2 === 1) {
      visibleMagnets[i].style.transform = "translateY(50%)";
    } else {
      visibleMagnets[i].style.transform = "none";
    }
  }
};

let tickedCheckboxes = document.querySelectorAll("input[type=checkbox]");
tickedCheckboxes.forEach((checkbox) =>
  checkbox.addEventListener("change", updateData)
);

// DROPDOWN WINDOW credit: https://blog.logrocket.com/creating-custom-select-dropdown-css/
document.addEventListener("DOMContentLoaded", () => {
  const dropdownMenu = document.querySelector(".dropdown-menu");

  const dropdownButton = dropdownMenu.querySelector(".dropdown-button");
  const dropdownContents = dropdownMenu.querySelector(".dropdown-contents");
  const dropdownOptions = dropdownContents.querySelectorAll("li");
  const dropdownSelected = dropdownButton.querySelector(".dropdown-selected");

  ///// show dropdown contents on click /////
  // function to toggle visibility of dropdown contents
  const toggleDropdown = (expand = null) => {
    const isOpen =
      expand !== null ? expand : dropdownContents.classList.contains("hidden");
    dropdownContents.classList.toggle("hidden", !isOpen);
    dropdownButton.setAttribute("aria-expanded", isOpen);
  };

  // listen for click to trigger above function
  dropdownButton.addEventListener("click", () => {
    toggleDropdown();
  });


  ///// update selected option on click /////
  // function to update selected option (ending with closing of dropdown contents)
  const updateSelectedOption = (selectedOption) => {
    dropdownOptions.forEach((dropdownOption) => dropdownOption.classList.remove("selected"));
    selectedOption.classList.add("selected");
    dropdownSelected.textContent = selectedOption.textContent;
    sortData(selectedOption.getAttribute("value"));
    toggleDropdown(false);
  };

  // listen for click to trigger above function
  dropdownOptions.forEach((selectedOption) => {
    selectedOption.addEventListener("click", () => updateSelectedOption(selectedOption));
  });
});

// Function to handle sorting logic
let sortData = (sortOrder) => {
  gallery.innerHTML = ""; // Clear out the HTML
  const isAscending = sortOrder === "a-z"; // Check if it's A-Z or Z-A
  magnets.sort((a, b) =>
    isAscending
      ? a.title.localeCompare(b.title)
      : b.title.localeCompare(a.title)
  ); // Sorting logic
  renderMagnets(magnets); // Re-render the books after sorting
};
