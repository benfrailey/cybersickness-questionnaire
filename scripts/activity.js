//ToDo
//Autosave answers?
//Finish Button

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

      answers[currentClip-2] = ($(document.getElementsByClassName('debug')).html());

      if(typeof answers[currentClip-1] != "undefined"){
        for(i = 0; i < document.getElementsByClassName("radio-group").length; i++){
          document.getElementById("q" + (i+1).toString() + "-option-" + answers[currentClip-1][i].toString()).click()
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

      for(i = 0; i < document.getElementsByClassName("radio-group").length; i++){
        document.getElementById("q" + (i+1).toString() + "-option-" + answers[currentClip-1][i].toString()).click()
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
