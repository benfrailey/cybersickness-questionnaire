$( document ).ready(function() {

  $("#submitButton").hide();

  $("#nextButton").hide();

  if(allAnswered()){
    $("#submitButton").show();
  }

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
    $("#nextButton").hide();
    $("#submitButton").hide();
  });

  $('input').on('change', function() {
    if (allAnswered()) {
      $("#nextButton").show();
      $("#submitButton").show();
    }
  });

  $("#nextButton").click(function(){
    let answers = ($(document.getElementsByClassName('debug')).html());
    console.log(answers);
    window.location.href = "ui-questions.html";
    return answers; //storing answers? Probably need PHP
  });

  $("#submitButton").click(function(){
    let answers = ($(document.getElementsByClassName('debug')).html());
    console.log(answers);
    window.location.href = "index2.html";
    return answers; //storing answers? Probably need PHP
  });

});
