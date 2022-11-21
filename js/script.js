// get the diapo
var diapo = document.getElementById("diapo");


function isOnScreen(element) {
    var rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// when scroll
document.addEventListener("scroll", (e) => {
  // get the scroll position
  var scroll = window.scrollY;
  // if diapo is visible
  if (isOnScreen(diapo)) {
    // add class to diapo
    diapo.classList.add("visible");
  }
}); 
