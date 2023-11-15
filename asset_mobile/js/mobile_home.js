// progress js

const mobile_academy_progressDone = document.querySelectorAll(
  ".mobile_academy_progress_done"
);

mobile_academy_progressDone.forEach((mobile_academy_progress) => {
  mobile_academy_progress.style.width =
    mobile_academy_progress.getAttribute("data-done") + "%";
});

// progress js ends

// caraousel js on home page

document.addEventListener("DOMContentLoaded", function () {
  var currentIndex = 0;
  var items = document.querySelectorAll(".carousel-item");
  var dots = document.querySelectorAll(".dot");
  var touchStartX = 0;
  var touchEndX = 0;

  function showItem(index) {
    items.forEach(function (item) {
      item.style.display = "none";
    });
    dots.forEach(function (dot) {
      dot.classList.remove("active");
    });
    items[index].style.display = "block";
    dots[index].classList.add("active");
  }

  function nextItem() {
    currentIndex = (currentIndex + 1) % items.length;
    showItem(currentIndex);
  }

  function prevItem() {
    currentIndex = (currentIndex - 1 + items.length) % items.length;
    showItem(currentIndex);
  }

  function handleTouchStart(event) {
    touchStartX = event.touches[0].clientX;
  }

  function handleTouchMove(event) {
    touchEndX = event.touches[0].clientX;
  }

  function handleTouchEnd() {
    var deltaX = touchEndX - touchStartX;
    if (deltaX > 50) {
      prevItem();
    } else if (deltaX < -50) {
      nextItem();
    }
  }

  dots.forEach(function (dot, index) {
    dot.addEventListener("click", function () {
      currentIndex = index;
      showItem(currentIndex);
    });
  });

  document.addEventListener("touchstart", handleTouchStart, false);
  document.addEventListener("touchmove", handleTouchMove, false);
  document.addEventListener("touchend", handleTouchEnd, false);

  setInterval(nextItem, 5000);
});

// caraousel js home page ends

// slider range js

function getVals() {
  // Get slider values
  let parent = this.parentNode;
  let slides = parent.getElementsByTagName("input");
  let slide1 = parseFloat(slides[0].value);
  let slide2 = parseFloat(slides[1].value);
  // Neither slider will clip the other, so make sure we determine which is larger
  if (slide1 > slide2) {
    let tmp = slide2;
    slide2 = slide1;
    slide1 = tmp;
  }

  let displayElement = parent.getElementsByClassName("rangeValues-1")[0];
  let displayElement2 = parent.getElementsByClassName("rangeValues-2")[0];
  displayElement.innerHTML = "₹" + slide1;
  displayElement2.innerHTML = "₹" + slide2;
}

window.onload = function () {
  // Initialize Sliders
  let sliderSections = document.getElementsByClassName(
    "mob_filter_range_slider"
  );
  for (let x = 0; x < sliderSections.length; x++) {
    let sliders = sliderSections[x].getElementsByTagName("input");
    for (let y = 0; y < sliders.length; y++) {
      if (sliders[y].type === "range") {
        sliders[y].oninput = getVals;
        // Manually trigger event first time to display values
        sliders[y].oninput();
      }
    }
  }
};

// slider range js ends

// Custom Modal JS Start

var modal = document.querySelector(".social-modal");
var triggers = document.querySelectorAll(".trigger");
var closeButton = document.querySelector(".close-button");

function toggleModal() {
  modal.classList.toggle("show-modal");
}

function windowOnClick(event) {
  if (event.target === modal) {
    toggleModal();
  }
}

for (var i = 0, len = triggers.length; i < len; i++) {
  triggers[i].addEventListener("click", toggleModal);
}
closeButton.addEventListener("click", toggleModal);
window.addEventListener("click", windowOnClick);

// Custom Modal JS End

//tabs click js

window.onload = function () {
  profileTabClick();
};

function profileTabClick() {
  var fee = document.querySelector("#fee-tab");
  var profile = document.querySelector(".mob_academy_box_wrapper");
  var training = document.querySelector("#training-tab");
  var photo = document.querySelector("#photo-tab");

  fee.style.opacity = "0";
  profile.style.opacity = "1";
  training.style.opacity = "0";
  photo.style.opacity = "0";

  setTimeout(function () {
    fee.style.display = "none";
    profile.style.display = "block";
    training.style.display = "none";
    photo.style.display = "none";
  }, 500);
}

function feeTabClick() {
  var profile = document.querySelector(".mob_academy_box_wrapper");
  var fee = document.querySelector("#fee-tab");
  var training = document.querySelector("#training-tab");
  var photo = document.querySelector("#photo-tab");

  profile.style.opacity = "0";
  training.style.opacity = "0";
  fee.style.opacity = "1";
  photo.style.opacity = "10";

  setTimeout(function () {
    profile.style.display = "none";
    training.style.display = "none";
    photo.style.display = "none";
    fee.style.display = "block";
  }, 500);
}

function trainingTabClick() {
  var training = document.querySelector("#training-tab");
  var profile = document.querySelector(".mob_academy_box_wrapper");
  var fee = document.querySelector("#fee-tab");
  var photo = document.querySelector("#photo-tab");

  training.style.opacity = "1";
  profile.style.opacity = "0";
  fee.style.opacity = "0";
  photo.style.opacity = "0";

  setTimeout(function () {
    training.style.display = "block";
    profile.style.display = "none";
    fee.style.display = "none";
    photo.style.display = "none";
  }, 500);
}

function photoTabClick() {
  var training = document.querySelector("#training-tab");
  var profile = document.querySelector(".mob_academy_box_wrapper");
  var fee = document.querySelector("#fee-tab");
  var photo = document.querySelector("#photo-tab");

  training.style.opacity = "0";
  profile.style.opacity = "0";
  fee.style.opacity = "0";
  photo.style.opacity = "1";

  setTimeout(function () {
    training.style.display = "none";
    profile.style.display = "none";
    fee.style.display = "none";
    photo.style.display = "block";
  }, 500);
}

//tabs click js ends

//message button click academy page

var modal2 = document.querySelector(".message-modal");
var triggers2 = document.querySelectorAll(".trigger-msg");
var closeButton2 = document.querySelector(".close-button-2");

function toggleModal2() {
  modal2.classList.toggle("show-modal");

  if (!modal2.classList.contains("show-modal")) {
    resetModalPosition();
  }
}

// function windowOnClick2(event) {
//   if (event.target === modal2) {
//     toggleModal2();
//   }
// }

for (var i = 0, len = triggers2.length; i < len; i++) {
  triggers2[i].addEventListener("click", toggleModal2);
}
closeButton2.addEventListener("click", toggleModal2);

// window.addEventListener("click", windowOnClick2);

//message button click academy page ends

//when focus on input js
let isMobile = false;

function detectMobile() {
  isMobile = window.matchMedia("(max-width: 767px)").matches;
}

function adjustModalPosition() {
  const modalContent = document.querySelector("#modal-msg-content");
  if (isMobile) {
    modalContent.style.bottom = "-48%"; // Adjust for mobile view
  } else {
    modalContent.style.bottom = "0"; // Reset for larger screens
  }
}

function resetModalPosition() {
  const modalContent = document.querySelector("#modal-msg-content");
  modalContent.style.bottom = "-31%"; // Reset the modal's position
}

// Call detectMobile initially and listen for resize to detect changes
detectMobile();
window.addEventListener("resize", detectMobile);

// Adjust the modal position on focus/blur of inputs
document
  .querySelectorAll(".mob_phone, .mob_desc")
  .forEach(function (input) {
    input.addEventListener("focus", function () {
      adjustModalPosition();
    });
    input.addEventListener("blur", function () {
      adjustModalPosition();
    });
  });
