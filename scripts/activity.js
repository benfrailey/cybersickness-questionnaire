$( document ).ready(function() {

  if(allAnswered()){
    $(".submit-button").show();
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
  });

  $('input').on('change', function() {
    if (allAnswered()) {
      $(".submit-button").show();
    }
  });

  $(".submit-button").click(function(){
    let answers = ($(document.getElementsByClassName('debug')).html());
    console.log(answers);
    window.location.href = "index2.html";
    return answers; //storing answers
  });

});
