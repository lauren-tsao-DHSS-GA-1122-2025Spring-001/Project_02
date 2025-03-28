// FILTERS
// continent
let asiaBox = document.getElementById("asia");

let europeBox = document.getElementById("europe");

let n_americaBox = document.getElementById("n-america");

// material
let ceramicBox = document.getElementById("ceramic");

let metalBox = document.getElementById("metal");

let plasticBox = document.getElementById("plastic");

let vinylBox = document.getElementById("vinyl");

let woodBox = document.getElementById("wood");

// show all
let allBox = document.getElementById("all");

// MAGNETS
let mQatar = document.getElementById("mQatar");

let mMontreal = document.getElementById("mMontreal");

let mHouse = document.getElementById("mHouse");

let mDC = document.getElementById("mDC");

let mNYC = document.getElementById("mNYC");

let mLouisiana = document.getElementById("mLouisiana");

let mIceland = document.getElementById("mIceland");

let mOhio = document.getElementById("mOhio");

let mVancouver = document.getElementById("mVancouver");

let mGibraltar = document.getElementById("mGibraltar");

// FILTER FUNCTION
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

  // House magnet visibility
  if (n_americaBox.checked == true || woodBox.checked == true) {
    mHouse.style.display = "block";
  } else {
    mHouse.style.display = "none";
  }

  // DC magnet visibility
  if (n_americaBox.checked == true || woodBox.checked == true) {
    mDC.style.display = "block";
  } else {
    mDC.style.display = "none";
  }

  // NYC magnet visibility
  if (n_americaBox.checked == true || vinylBox.checked == true) {
    mNYC.style.display = "block";
  } else {
    mNYC.style.display = "none";
  }

    // Louisiana magnet visibility
    if (n_americaBox.checked == true || plasticBox.checked == true) {
        mLouisiana.style.display = "block";
      } else {
        mLouisiana.style.display = "none";
      }

  // Iceland magnet visibility
  if (europeBox.checked == true || woodBox.checked == true) {
    mIceland.style.display = "block";
  } else {
    mIceland.style.display = "none";
  }

  // Ohio magnet visibility
  if (n_americaBox.checked == true || plasticBox.checked == true) {
    mOhio.style.display = "block";
  } else {
    mOhio.style.display = "none";
  }

  // Vancouver magnet visibility
  if (n_americaBox.checked == true || woodBox.checked == true) {
    mVancouver.style.display = "block";
  } else {
    mVancouver.style.display = "none";
  }

  // Gibraltar magnet visibility
  if (europe.checked == true || metalBox.checked == true) {
    mGibraltar.style.display = "block";
  } else {
    mGibraltar.style.display = "none";
  }

    // Show all visibility
    if (all.checked == true) {
      mQatar.style.display = "block"
      mMontreal.style.display = "block";
      mHouse.style.display = "block";
      mDC.style.display = "block";
      mNYC.style.display = "block";
      mLouisiana.style.display = "block";
      mIceland.style.display = "block";
      mOhio.style.display = "block";
      mVancouver.style.display = "block";
      mGibraltar.style.display = "block";
    }

    // if (asiaBox.checked == true || europeBox.checked == true || n_americaBox.checked == true || ceramicBox.checked == true || metalBox.checked == true || plasticBox.checked == true || vinylBox == true || woodBox.checked == true) {
    //   allBox.checked = false;
    // }
}
