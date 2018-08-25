function postLike(resourceId) {
  $.post(`/resources/${resourceId}/likes`)
  .done((response) => {
    updateLikeCountClientSide();
  });
}

function getLikesClicks() {
  $("#like").on("click", (event) => {
    let resourceId = $(event.target).attr("data-resource-id");
    postLike(resourceId);
  })
}

function updateLikeCountClientSide() {
  console.log("Like Counter Updated...");
}