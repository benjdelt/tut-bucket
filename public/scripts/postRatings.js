function postRatings(resourceId, value) {
  $.post(`/resources/${resourceId}/ratings/${value}`)
  .done((response) => {
    updateRatingClientSide(resourceId);
  });
}

function getRatingsClicks() {
  $("#ratingsContainer").on("click", (event) => {
    let resourceId = $(event.target).attr("data-resource-id");
    let value = $(event.target).attr("id");
    postRatings(resourceId, value);
  })
}

function updateRatingClientSide(resourceId) {
  $.ajax({method: "GET", url: `/resources/${resourceId}/ratings`})
  .then((rating) => {
    let letterGrade = changeValuetoLetter(rating);
    $("#currentRating > p > span").html(letterGrade);
  })
}