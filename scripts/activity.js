//ToDo
//Clean up answer function
//Autosave answers?

$( document ).ready(function() {

  var maxClips = 5;
  var currentClip = 1;
  let answers = new Array();

  function clearAnswers() {
    $("input").prop('checked', false);
  }

  function allAnswered() {
    var allAnswered = true;
    $("form").each(function() {
        if ($(this).serialize() == "") {
          allAnswered = false;
        }
    });
    var arr = [];
    $('input[type="radio"]:checked').each(function(){
       arr.push($(this).val());
    });
    $(".debug").html(arr);
    return allAnswered;
  }

  $(".clear-button").click(function() {
    clearAnswers();
  });

  $(".next-button").click(function() {
    if (currentClip < maxClips) {
      currentClip += 1;
      $(".previous-clip-number").html(currentClip - 1);
      $(".clip-number").html(currentClip);
      $(".next-clip-number").html(currentClip + 1);
      $(".back-button").show();
      clearAnswers();
      $(".next-button").hide();

      let answer = document.getElementsByClassName('debug');
      answers[currentClip-2] = ($(answer).html());

      if(typeof answers[currentClip-1] != "undefined"){
        let questions = document.getElementsByClassName("radio-group");
        for(i = 0; i < questions.length; i++){
          if(answers[currentClip-1][i] == 1){
            document.getElementById("q" + (i+1).toString() + "-option-one").click();
          }
          if(answers[currentClip-1][i] == 2){
            document.getElementById("q" + (i+1).toString() + "-option-two").click();
          }
          if(answers[currentClip-1][i] == 3){
            document.getElementById("q" + (i+1).toString() + "-option-three").click();
          }
        }
      }
  }
  });

  $(".back-button").click(function() {
    if (currentClip > 1) {
      currentClip -= 1;
      $(".previous-clip-number").html(currentClip - 1);
      $(".clip-number").html(currentClip);
      $(".next-clip-number").html(currentClip + 1);
      if (currentClip == 1) {
        $(".back-button").hide();
      }
      //This needs to be all shortened and cleaned up. There's a better way to do this besides hardcoding.
      let answer = document.getElementsByClassName('debug');
      $(answer).html(answers[currentClip-1]);

      let questions = document.getElementsByClassName("radio-group");
      for(i = 0; i < questions.length; i++){
        if(answers[currentClip-1][i] == 1){
          document.getElementById("q" + (i+1).toString() + "-option-one").click();
        }
        if(answers[currentClip-1][i] == 2){
          document.getElementById("q" + (i+1).toString() + "-option-two").click();
        }
        if(answers[currentClip-1][i] == 3){
          document.getElementById("q" + (i+1).toString() + "-option-three").click();
        }
      }
    }
});

  $('input').on('change', function() {
    if (allAnswered()) {
      if (currentClip < maxClips) {
        $(".next-button").show();
      }
      else {
        $(".submit-button").show();
      }
    }
  });


});
