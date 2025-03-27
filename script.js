let asiaBox = document.getElementById("asia");

let europeBox = document.getElementById("europe");

let n_americaBox = document.getElementById("n-america");

let metalBox = document.getElementById("metal");

let ceramicBox = document.getElementById("ceramic");

let mQatar = document.getElementById("mQatar");

let mMontreal = document.getElementById("mMontreal");

function filter() {

// Qatar magnet visibility  
  if (asiaBox.checked == true || metalBox.checked == true) {
    mQatar.style.display = "block";
  } else {
    mQatar.style.display = "none";
  }

  // Montreal magnet visibility
  if (n_americaBox.checked == true || ceramicBox.checked == true) {
    mMontreal.style.display = "block";
  } else {
    mMontreal.style.display = "none";
  }
}