function postRatings(resourceId, value) {
  $.post(`/resources/${resourceId}/ratings/${value}`)
  .done((response) => {
    updateRatingClientSide();
  });
}

function getRatingsClicks() {
  $("#ratingsContainer").on("click", (event) => {
    let resourceId = $(event.target).attr("data-resource-id");
    let value = $(event.target).attr("id");
    postRatings(resourceId, value);
  })
}

function updateRatingClientSide() {
  console.log("Rating Updated...");
}