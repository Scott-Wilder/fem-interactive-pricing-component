var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
var output2 = document.getElementById("demo2");
output.innerHTML = slider.value;
output2.innerHTML = slider.value;

// Update the current slider value and update slider background color (each time you drag the slider handle)
slider.oninput = function () {
  output.innerHTML = this.value * 2;
  output2.innerHTML = this.value / 3.125;
  var x = slider.value;
  var color =
    "linear-gradient(90deg, hsl(174, 77%, 80%)" +
    x +
    "%, hsl(224, 65%, 95%)" +
    x +
    "%)";
  slider.style.background = color;
};
