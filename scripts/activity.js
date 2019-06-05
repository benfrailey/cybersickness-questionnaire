//ToDo
//Autosave answers?
//Finish Button

let correct_answers = ["211111113311", "211111111111", "332332232111", "111111111111", "332232233321", "111111111111"];

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

  let CheckAnswers = function(answers){
    let results = new Array();
    for(i = 0; i < correct_answers.length; i++){
      let results_page = new Array();
      for(b = 0; b < correct_answers[i].length; b++){
        if(correct_answers[i][b] == answers[i][b]){
          results_page.push(1);
        }
        else{
          results_page.push(0);
        }
      }
      results.push(results_page);
    }
    return results;
  };


  let UpdateAnswers = function(results, answers, correct_answers){
    for(i = 0; i < results.length; i++){
      for(b = 0; b < results[i].length; b++){
        if(results[i][b] == 1){
          document.getElementById("q" + (i+1).toString() + "-option-" + answers[currentClip-1][i].toString()).foo();
        }
        else{
          document.getElementById("q" + (i+1).toString() + "-option-" + answers[currentClip-1][i].toString()).foowrong();
          document.getElementById("q" + (i+1).toString() + "-option-" + correct_[currentClip-1][i].toString()).foo()
        }
      }
    }
  }

});
