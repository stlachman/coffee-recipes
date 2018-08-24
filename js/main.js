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

function CountDownTimer(duration, granularity) {
  this.duration = duration;
  this.granularity = granularity || 1000;
  this.tickFtns = [];
  this.running = false;
}

CountDownTimer.prototype.start = function() {
  if (this.running) {
    return;
  }
  this.running = true;
  var start = Date.now(),
      that = this,
      diff, obj;

  (function timer() {
    diff = that.duration - (((Date.now() - start) / 1000) | 0);

    if (diff > 0) {
      setTimeout(timer, that.granularity);
    } else {
      diff = 0;
      that.running = false;
    }

    obj = CountDownTimer.parse(diff);
    that.tickFtns.forEach(function(ftn) {
      ftn.call(this, obj.minutes, obj.seconds);
    }, that);
  }());
};

CountDownTimer.prototype.onTick = function(ftn) {
  if (typeof ftn === 'function') {
    this.tickFtns.push(ftn);
  }
  return this;
};

CountDownTimer.prototype.expired = function() {
  return !this.running;
};

CountDownTimer.parse = function(seconds) {
  return {
    'minutes': (seconds / 60) | 0,
    'seconds': (seconds % 60) | 0
  };
};

window.onload = function () {
    var display = document.querySelector('#safeTimerDisplay'),
        timer = new CountDownTimer(60 * 3),
        timeObj = CountDownTimer.parse(60 * 3);

    format(timeObj.minutes, timeObj.seconds);
    
    timer.onTick(format);
    
    document.querySelector('.timer').addEventListener('click', function () {
        timer.start();
    });
    
    function format(minutes, seconds) {
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;
        display.textContent = minutes + ':' + seconds;
    }
};






