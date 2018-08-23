const gramRange = Array.prototype.slice.call(document.querySelectorAll(".gram-range"))
gramRange.forEach(range => {
    range.addEventListener("change", function getRange() {
        // console.log(this);
        sliderChange(this);
    });
});

const v60Ratio = 15;
const frenchPressRatio = 18;
const chemexRatio = 17;

function sliderChange(e){
   var index = document.getElementsByTagName('input');
   var sliders = document.getElementsByClassName('coffee-gram');
   var waterValue  = document.getElementsByClassName('water-ml');
   for (i = 0; i < index.length; i++){
      if(e == index[i] && e.id == 'v60-ratio'){
         sliders[i].innerHTML = e.value + ' grams';
         waterValue[i].innerHTML = Math.ceil(e.value * v60Ratio) + ' ml';
      }  else if(e == index[i] && e.id == 'frenchpress-ratio') {
        sliders[i].innerHTML = e.value + ' grams';
        waterValue[i].innerHTML = Math.ceil(e.value * frenchPressRatio) + ' ml';
      } else if(e == index[i] && e.id == 'chemex-ratio') {
        sliders[i].innerHTML = e.value + ' grams';
        waterValue[i].innerHTML = Math.ceil(e.value * chemexRatio) + ' ml';
      }
   }
}

// function startTimer(){
//     var sec = 30;
//     var timer = setInterval(function(){
//         document.getElementById('safeTimerDisplay').innerHTML='00:'+sec;
//         sec--;
//         if (sec < 0) {
//             clearInterval(timer);
//         }
//     }, 1000);
// }

const timerButton = document.querySelector(".timer"); 
timerButton.addEventListener("click",  startTimer());



