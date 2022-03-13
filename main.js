// - 10K pageviews / $8 per month
// - 50K pageviews / $12 per month
// - 100K pageviews / $16 per month
// - 500k pageviews / $24 per month
// - 1M pageviews / $36 per month

const range = document.getElementById("myRange");
const discount = document.getElementById("checkbox");

const rangePricing = {
  1: {
    views: "10K",
    price: 8,
  },
  2: {
    views: "50K",
    price: 12,
  },
  3: {
    views: "100K",
    price: 16,
  },
  4: {
    views: "500K",
    price: 24,
  },
  5: {
    views: "1M",
    price: 36,
  },
};
showCurrentPrice(range.value);

function showCurrentPrice(value) {
  // handles display logic
  const currentPrice = rangePricing[value];
  const price = discount.checked
    ? currentPrice.price - currentPrice.price * 0.25
    : currentPrice.price;
  document.querySelector("#demo").innerHTML = currentPrice.views;
  document.querySelector("#demo2").innerHTML = price.toFixed(2);
}

range.addEventListener("change", (event) => {
  showCurrentPrice(+event.target.value);
});

discount.addEventListener("change", () => {
  showCurrentPrice(+range.value);
});
range.oninput = function () {
  // handles slider background gradient
  var x = (range.value / 5) * 100;
  if (x == 20) {
    x = 0;
  }
  if (x == 40) {
    x = 25;
  }
  if (x == 60) {
    x = 50;
  }
  if (x == 80) {
    x = 75;
  }
  var color =
    "linear-gradient(90deg, hsl(174, 77%, 80%)" +
    x +
    "%, hsl(224, 65%, 95%)" +
    x +
    "%)";
  range.style.background = color;
};
