// ###
// From the "05_changing_display_with_dropdown"
// ###

const magnets = [
    {
      name: "Washington DC",
      continent: "North America",
      material: "metal",
      date: "2023/02/19",
    },
    {
      name: "New York City",
      continent: "North America",
      material: "vinyl",
      date: "2023/03/07",
    },
    {
      name: "Montreal",
      continent: "North America",
      material: "ceramic",
      date: "2023/03/15",
    },
    {
      name: "Ohio",
      continent: "North America",
      material: "metal",
      date: "2023/04/14",
    },
    {
      name: "Vancouver",
      continent: "North America",
      material: "wood",
      date: "2023/07/02",
    },
    {
      name: "Qatar",
      continent: "Asia",
      material: "metal",
      date: "2023/07/27",
    },
    {
      name: "Gibraltor",
      continent: "Europe",
      material: "metal",
      date: "2023/10/06",
    },
    {
      name: "Half-house",
      continent: "North America",
      material: "wood",
      date: "2023/15/07",
    },
    {
      name: "Louisiana",
      continent: "North America",
      material: "plastic",
      date: "2024/07/31",
    },
    {
      name: "Iceland",
      continent: "Europe",
      material: "wood",
      date: "2024/08/08",
    },
  ];
  
  let grid = document.querySelector(".grid");
  let filters = document.querySelectorAll(".left-sidebar");
  
  filters.forEach((btn) =>
    btn.addEventListener("click", (e) => e.target.classList.toggle("active"))
  );
  
  const filter_buttons = ["Fiction", "Nonfiction", "Poetry"];
  
  let selectionWrapper = document.querySelector(".btns");
  
  filter_buttons.forEach((date) => {
    let option = document.createElement("div");
    option.textContent = date;
    // Adding two classes here, including active, so they start out as "active"
    option.classList.add("btn");
    option.classList.add("active");
    selectionWrapper.appendChild(option);
  });
  
  let changeData = (e) => {
    let selected = e.target.textContent;
    e.target.classList.toggle("active");
  
    let selectedfilter_buttons = [];
  
    selection.forEach((btn) => {
      if (btn.classList.contains("active")) {
        selectedfilter_buttons.push(btn.textContent);
      }
    });
  
    let magnetDivs = document.querySelectorAll(".wrapper div");
  
    magnetDivs.forEach((magnet) => {
      let magnetdate = magnet.getAttribute("data-date");
  
      if (selectedfilter_buttons.length === 0 || selectedfilter_buttons.includes(magnetdate)) {
        magnet.classList.remove("hide");
      } else {
        magnet.classList.add("hide");
      }
    });
  };
  
  let selection = document.querySelectorAll(".btn");
  selection.forEach((btn) => btn.addEventListener("click", (e) => changeData(e)));
  