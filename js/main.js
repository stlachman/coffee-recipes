const gramRange = Array.prototype.slice.call(document.querySelectorAll(".gram-range"))
gramRange.forEach(range => {
    range.addEventListener("change", function getRange() {
        sliderChange(this);
    });
});

const gramNumber = Array.prototype.slice.call(document.querySelectorAll(".gram-number"))
gramNumber.forEach(gram => {
    gram.addEventListener("change", function getRange() {
        numberChange(this);
    });
}); 

var vGram = document.getElementById("coffee-grams-v60");
var vgrams = document.getElementById("v60-grams");
var water = document.querySelector(".water-ml");


vGram.innerHTML = `${vgrams.value} grams`;
water.innerHTML = `${vgrams.value * 15} ml`;

function numberChange(e) {
  vGram.innerHTML = `${e.value} grams`;
  ratioChange(e.value);
}

function ratioChange(coffeeGrams) {
  console.log(coffeeGrams * 22);
  water.innerHTML = `${coffeeGrams * 22} ml`;
}







