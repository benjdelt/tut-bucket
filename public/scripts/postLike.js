function postLike(resourceId) {
  console.log('resourceId:', resourceId);
  $.post(`/resources/${resourceId}/likes`)
  .done((response) => {
    updateLikeCountClientSide();
  });
}

function getLikesClicks() {
  $("#like").on("click", (event) => {
    console.log("clicked!");
    let resourceId = $(event.target).attr("data-resource-id");
    postLike(resourceId);
  })
}

function updateLikeCountClientSide() {
  console.log("Like Counter Updated...");
}