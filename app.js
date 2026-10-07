let a = true;
function showBox() {
  let box = document.getElementById("box");
  if (a) {
    box.style.visibility = "visible";
    a = false;
  } else {
    box.style.visibility = "hidden";
    a = true;
  }
}


function overIn() {
    document.getElementById("sun").className = "sun-image"
}

function overOut() {
    document.getElementById("sun").className = "sun"
}

