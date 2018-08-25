function postRatings(resourceId, value) {
  console.log('resourceId:', resourceId);
  $.post(`/resources/${resourceId}/ratings/${value}`)
  .done((response) => {
    updateRatingClientSide();
  });
}

function getRatingsClicks() {
  $("#ratingsContainer").on("click", (event) => {
    console.log("rating clicked!");
    let resourceId = $(event.target).attr("data-resource-id");
    let value = $(event.target).attr("id");
    console.log('rating resourceId:', resourceId);
    console.log('rating value:', value);
    postRatings(resourceId, value);
  })
}

function updateRatingClientSide() {
  console.log("Rating Updated...");
}