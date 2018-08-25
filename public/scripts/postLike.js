function postLike(resourceId) {
  console.log('resourceId:', resourceId);
  $.post(`/resources/${resourceId}/likes`)
  .done((response) => {
    updateLikeCount();
  });
}

function getClicks() {
  $("#like").on("click", (event) => {
    console.log("clicked!");
    let resourceId = $(event.target).attr("data-resource-id");
    postLike(resourceId);
  })
}

function updateLikeCount() {
  console.log("Like Counter Updated...");
}