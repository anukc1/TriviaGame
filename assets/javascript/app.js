// -------------------   GLOBAL VARIABLES ----------------
var wins = 0;
var losses = 0;
var questions = 0;
var intervalId= '';
var clockRunning = false;
var time = 10;


  $("#button").click(function () {
    startTime()
    for (var i = 0; i < questions.length; i++) {
      var title = $('<h1>');
      title.text(questions[i].q);
      $("#questions").append(title);

      for (var j = 0; j < questions[i].a.length; j++) {
        var button = $('<button>');
        button.text(questions[i].a[j]);
        button.attr('data-ua', questions[i].a[j]);
        button.attr("data-toggle")
      
        button.attr('data-ca', questions[i].r);
        button.addClass('btn btn-success')
        $("#questions").append(button);

       
      }
    }

    $(".btn-success").on('click', function () {
      var userAnswer = $(this).attr('data-ua');
      var correctAnswer = $(this).attr('data-ca');
      if (userAnswer === correctAnswer) {
        wins++;
      } else {
        losses++;
      }
    })

    // $("#questionAnswer").slideDown("slow");
  })
  // $("#button").on("click", start);


// CLOCK

function startTime(){
  intervalId = setInterval(function () {
    time--;
    $('#display').text('00:' + time)
    if (time === 0) {
      stopTime()


      console.log('Wins: ' + wins)
      console.log('Losses: ' + losses)



    

      var scoreDiv = $('<h1>');
      $("h1").addClass("Scoreboard")
      scoreDiv.text(wins);
      $("#questionAnswer").append("<b>Total correct answers: " + wins + ".</b>");

      var scoreDiv2 = $('<h1>');
      scoreDiv2.text(losses);
      $("#questionAnswer").append("<b>Total wrong answers: " + losses + ".</b>");

    }
  }, 1000)
}

function stopTime(){
  clearInterval(intervalId)
}

// //______________________________________Questions now______________________________//



var questions = [
  { 
    q: "Three-toed Sloth is the slowest animal in the world.", 
    a: [true, false], 
    r: true 
  },
  { 
    q: "A snail can sleep for 2 years.", 
    a: [true, false], 
    r: false
  },
  { 
    q: "Four of the six legs of an ant are attached to the thorax.", 
    a: [true, false], 
    r: true
  },
  { 
    q: "Rabbits are born blind.", 
    a: [true, false], 
    r: true
  }
];

// console.log(questions[0].q)




   
