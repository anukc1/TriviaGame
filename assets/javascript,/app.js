
window.onload = function() {
   
    $("#button").on("click", start);
  };
  
  
  var intervalId;
  
  var clockRunning = false;
  var time = 300;
  
  
  function start() {
   
    if (!clockRunning) {
      intervalId = setInterval(count, 1000);
      clockRunning = true;
    }
  }
  
  function count() {
  
    time--;
  
   
    var converted = timeConverter(time);
    console.log(converted);
  
    // DONE: Use the variable we just created to show the converted time in the "display" div.
    $("#display").text(converted);
  }
  function timeConverter(t) {
  
    var minutes = Math.floor(t / 60);
    var seconds = t - (minutes * 60);
  
    if (seconds < 10) {
      seconds = "0" + seconds;
    }
  
    if (minutes === 0) {
      minutes = "00";
    }
    else if (minutes < 10) {
      minutes = "0" + minutes;
    }
  
    return minutes + ":" + seconds;
  }
  