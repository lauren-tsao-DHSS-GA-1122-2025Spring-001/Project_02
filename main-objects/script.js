// ###
// From the "05_changing_display_with_dropdown"
// ###

const books = [
  {
    title: "Qatar",
    author: "Jacqueline Harpman",
    yearCreated: "07 / 27 / 2023",
    genre: "Fiction",
    image: "../magnets/01_qatar.png",
    description: "Result of a flight delay, received a free room Went on a desert tour while waiting for the flight. Rode camels and ATVs through the desert, drove through the dunes."
  },
  {
    title: "Montreal",
    author: "George Saunders",
    yearCreated: "03 / 15 / 2023",
    genre: "Fiction",
    image: "../magnets/02_montreal.png",
    description: "Impromptu trip for husband’s Spring break (Cancún was too expensive). Lovely people and food, quaint place. Went to the Biodome constructed from the Olympic grounds."
  },
  {
    title: "Half-House",
    author: "Amartya Sen",
    yearCreated: "07 / 15 / 2024",
    genre: "Nonfiction",
    image: "../magnets/03_house.png",
    description: "Marks the first time in 14 years that we are living in the same city together. She has the other half of the house symbolizing that our family has been completed."
  },
  {
    title: "Washington DC",
    author: "Kaveh Akbar",
    yearCreated: "02 / 19 / 2023",
    genre: "Fiction",
    image: "../magnets/04_dc.png",
    description: "First time living abroad Followed husband for his masters’ program there. A life-changing experience, grew a lot as a person while adapting to a new culture."
  },
  {
    title: "New York City",
    author: "Emmanuel Carrère",
    yearCreated: "03 / 15 / 2023",
    genre: "Fiction",
    image: "../magnets/05_nyc.png",
    description: "Too many memories! Have family there, first time studying abroad. Bar and arts scene is amazing."
  },
  {
    title: "Louisiana",
    author: "Yoko Ogawa",
    yearCreated: "03 / 07 / 2023",
    genre: "Fiction",
    image: "../magnets/06_louisiana.png",
    description: "First road trip! Lots of memories made, seen so many sights. Louisiana is my favorite place in the US because of the food and sights."
  },
  {
    title: "Iceland",
    author: "Matthew Desmond",
    yearCreated: "07 / 31 / 2024",
    genre: "Nonfiction",
    image: "../magnets/07_iceland.png",
    description: "A last hurrah trip before starting my masters in NYU. A beautiful ethereal place that seems otherworldly."
  },
  {
    title: "Ohio",
    author: "Patrick Radden Keefe",
    yearCreated: "08 / 08 / 2024",
    genre: "Nonfiction",
    image: "../magnets/08_ohio.png",
    description: "Where my husband did his undergrad. Went there for his college friend’s wedding. Revisited old places and memories."
  },
  {
    title: "Vancouver",
    author: "Sianne Ngai",
    yearCreated: "04 / 14 / 2023",
    genre: "Nonfiction",
    image: "../magnets/09_vancouver.png",
    description: "Visiting my childhood friend that I have not seen in over a decade. Went whale-watching for the first time Drove up to Squamish Mountain, rode the Sea-to-Sky Gondola, and went hiking around the area."
  },
  {
    title: "Gibraltar",
    author: "Vivian Gornick",
    yearCreated: "10 / 06 / 2023",
    genre: "Nonfiction",
    image: "../magnets/10_gibraltar.png",
    description: "A really unique place that I never thought to visit Went there with husband for a Warhammer competition Learned about the history of Gibraltar Met people from different countries from different backgrounds."
  }
];

let wrapper = document.querySelector(".wrapper");
let filters = document.querySelectorAll(".filter");

filters.forEach((btn) =>
  btn.addEventListener("click", (e) => e.target.classList.toggle("active"))
);

let renderBooks = (data) => {
  data.forEach((book) => {
    let newDiv = document.createElement("div");
    newDiv.setAttribute("data-genre", book.genre);
    newDiv.innerHTML = `<div class="description">
            <h3>
              ${book.title}<br /><small><em>${book.yearCreated}</em></small>
            </h3>
            ${book.description}
          </div><img src="${book.image}" alt="${book.title}" />`;
    wrapper.append(newDiv);
  });
};

renderBooks(books);

const genres = ["Fiction", "Nonfiction", "Poetry"];

let selectionWrapper = document.querySelector(".btns");

genres.forEach((genre) => {
  let option = document.createElement("div");
  option.textContent = genre;
  // Adding two classes here, including active, so they start out as "active"
  option.classList.add("btn");
  option.classList.add("active");
  selectionWrapper.appendChild(option);
});

// TODO: Add comments for this section
// TODO: Look @ why it sometimes ends up with opposite nav signalling and content
// Note to class: there are a few loose ends here.
// We're trying to allow multiple selections, which is why we use an array, selectedGenres, to "push" selections into it.
// I will fix it up and add comments.
// It should be simple (and similar to the dropdown example) if you don't need multiple selections.

let changeData = (e) => {
  let selected = e.target.textContent;
  e.target.classList.toggle("active");

  let selectedGenres = [];

  selection.forEach((btn) => {
    if (btn.classList.contains("active")) {
      selectedGenres.push(btn.textContent);
    }
  });

  let bookDivs = document.querySelectorAll(".wrapper div");

  bookDivs.forEach((book) => {
    let bookGenre = book.getAttribute("data-genre");

    if (selectedGenres.length === 0 || selectedGenres.includes(bookGenre)) {
      book.classList.remove("hide");
    } else {
      book.classList.add("hide");
    }
  });
};

let selection = document.querySelectorAll(".btn");
selection.forEach((btn) => btn.addEventListener("click", (e) => changeData(e)));
