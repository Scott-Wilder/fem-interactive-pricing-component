var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
var output2 = document.getElementById("demo2");

// Update the current slider value and update slider background color (each time you drag the slider handle)
slider.oninput = function () {
  var y = this.value;
  var x = slider.value;
  var color =
    "linear-gradient(90deg, hsl(174, 77%, 80%)" +
    x +
    "%, hsl(224, 65%, 95%)" +
    x +
    "%)";
  slider.style.background = color;
  if (y < 20) {
    output.innerHTML = "10k";
    output2.innerHTML = 8;
  }
  if (y > 20 && y < 40) {
    output.innerHTML = "50k";
    output2.innerHTML = 12;
  }
  if (y > 40 && y < 60) {
    output.innerHTML = "100k";
    output2.innerHTML = 16;
  }
  if (y > 60 && y < 80) {
    output.innerHTML = "500k";
    output2.innerHTML = 24;
  }
  if (y > 80) {
    output.innerHTML = "1M";
    output2.innerHTML = 36;
  }
};
