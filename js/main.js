const gramRange = Array.prototype.slice.call(document.querySelectorAll(".gram-range"))
gramRange.forEach(range => {
    range.addEventListener("change", function getRange() {
        console.log(this);
        sliderChange(this);
    });
});

function sliderChange(e){
   var index = document.getElementsByTagName('input');
   var sliders = document.getElementsByClassName('coffee-gram');
   var waterValue  = document.getElementsByClassName('water-ml');
   for (i = 0; i < index.length; i++){
      if(e == index[i]){
         sliders[i].innerHTML = e.value + ' grams';
         waterValue[i].innerHTML = Math.ceil(e.value * 16.36) + ' ml';
      }
   }
}



