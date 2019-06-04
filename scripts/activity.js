$( document ).ready(function() {

  var maxClips = 5;
  var currentClip = 1;

  function clearAnswers() {
    $("input").prop('checked', false);
  }

  function allAnswered() {
    var allAnswered = true;
    $("form").each(function() {
        console.log($(this).serialize());
        if ($(this).serialize() == "") {
          allAnswered = false;
        }
    });
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
