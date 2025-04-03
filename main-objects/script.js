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

// CREATE MAGNET GALLERY
let gallery = document.querySelector(".gallery");

// give each magnet a div and insert into the gallery
function renderMagnets(data) {
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
}

renderMagnets(magnets);

// CREATE CONTINENT CHECKBOX FILTERS

const continents = ["Asia", "North America", "Europe"];

let conCheckboxes = document.querySelector(".continent-checkboxes");

continents.forEach((continent) => {
  let checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.id = continent;

  let label = document.createElement("label");
  label.textContent = continent;

  let conCheckbox = document.createElement("div");
  conCheckbox.classList.add("continent-checkbox");
  conCheckbox.appendChild(checkbox);
  conCheckbox.appendChild(label);

  conCheckboxes.appendChild(conCheckbox);
});

// CREATE MATERIAL CHECKBOX FILTERS

const materials = ["Ceramic", "Metal", "Plastic", "Vinyl", "Wood"];

let matCheckboxes = document.querySelector(".material-checkboxes");

materials.forEach((material) => {
  let checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.id = material;

  let label = document.createElement("label");
  label.textContent = material;

  let matCheckbox = document.createElement("div");
  matCheckbox.classList.add("material-checkbox");
  matCheckbox.appendChild(checkbox);
  matCheckbox.appendChild(label);

  matCheckboxes.appendChild(matCheckbox);
});

// CHECKBOX INTERACTIONS
  // find checked (ckd) checkboxes
  function updateData() {
    let ckdContinents = [];
    let ckdMaterials = [];

    let ckdCheckboxes = document.querySelectorAll(
      "input[type=checkbox]:checked"
    );

    ckdCheckboxes.forEach((checkbox) => {
      if (
        checkbox.id === "Asia" ||
        checkbox.id === "North America" ||
        checkbox.id === "Europe"
      ) {
        ckdContinents.push(checkbox.id);
      }

      if (
        checkbox.id === "Ceramic" ||
        checkbox.id === "Metal" ||
        checkbox.id === "Plastic" ||
        checkbox.id === "Vinyl" ||
        checkbox.id === "Wood"
      ) {
        ckdMaterials.push(checkbox.id);
      }
    });

    // display/hide magnets whose checkboxes are checked/unchecked
    let allMagnets = document.querySelectorAll(".magnet");
    let visibleMagnets = [];

    allMagnets.forEach((magnet) => {
      let conMagnet = magnet.getAttribute("data-continent");
      let matMagnet = magnet.getAttribute("data-material");

      if (
        (ckdContinents.length == 0 && ckdMaterials.length == 0) ||
        ckdContinents.includes(conMagnet) ||
        ckdMaterials.includes(matMagnet)
      ) {
        magnet.style.display = "block";
      } else {
        magnet.style.display = "none";
      }

      if (magnet.style.display === "block") {
        visibleMagnets.push(magnet);
      }

      // update odd magnet y-positions (odd because javascript takes in 0 as 1st)
      for (let i = 0; i < visibleMagnets.length; i++) {
        if (i % 2 === 1) {
          visibleMagnets[i].style.transform = "translateY(50%)";
        } else {
          visibleMagnets[i].style.transform = "none";
        }
      }
    });
  }

  let ckdCheckboxes = document.querySelectorAll("input[type=checkbox]");
  ckdCheckboxes.forEach((checkbox) =>
    checkbox.addEventListener("change", updateData)
  );

  // DROPDOWN WINDOW (credit: https://blog.logrocket.com/creating-custom-select-dropdown-css/)

  const dropdownMenu = document.querySelector(".dropdown-menu");

  const dropdownButton = dropdownMenu.querySelector(".dropdown-button");
  const dropdownContents = dropdownMenu.querySelector(".dropdown-contents");
  const ddOptions = dropdownContents.querySelectorAll("li");
  const ddSelected = dropdownButton.querySelector(".dropdown-selected");

  ///// show dropdown contents on click /////
  // function to toggle visibility of dropdown contents
  function toggleDropdown(expand = null) {
    let isVisible =
      // condition: is expand not null ?
      // yes = exp01 = return value of expand (true/false)
      // no = exp02 = find the class named "hidden", in the dropdownContents
      expand !== null ? expand : dropdownContents.classList.contains("hidden"); // condition ? exp01 : exp02
    // target the class "hidden" in dropdownContents, and toggle it to the opposite of its current value (like a switch)
    dropdownContents.classList.toggle("hidden", !isVisible);
  }

  // listen for click to trigger above function
  dropdownButton.addEventListener("click", function () {
    toggleDropdown();
  });

  ///// update selected option on click /////
  // function to update selected option (ending with closing of dropdown contents)

  function updateSelectedOption(selectedOption) {
    ddOptions.forEach((ddOption) => {
      ddOption.classList.remove("selected");
    });
    selectedOption.classList.add("selected");
    ddSelected.textContent = selectedOption.textContent;
    sortData(selectedOption.getAttribute("value"));
    toggleDropdown(false);
  }

  // listen for click to trigger above function
  ddOptions.forEach((selectedOption) => {
    selectedOption.addEventListener("click", function () {
      updateSelectedOption(selectedOption);
    });
  });


// function to sort magnets by a-z / z-a (to be applied to the updateSelectedOption function)
function sortData(sortOrder) {
  gallery.innerHTML = "";
  const isAscending = sortOrder === "a-z";
  magnets.sort(
    (a, b) =>
      isAscending
        ? a.title.localeCompare(b.title) // ascending if true
        : b.title.localeCompare(a.title) // descending if false (i.e reverse)
  );

  renderMagnets(magnets);
}
