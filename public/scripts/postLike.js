function postLike(resourceId) {
  $.post(`/resources/${resourceId}/likes`)
  .done((response) => {
    updateLikeCountClientSide(resourceId);
  });
}

function getLikesClicks() {
  $("#like").on("click", (event) => {
    let resourceId = $(event.target).attr("data-resource-id");
    postLike(resourceId);
  })
}

function updateLikeCountClientSide(resourceId) {
  $.ajax({method: "GET", url: `/resources/${resourceId}/likes`})
  .then((likes) => {
    $("#numberOfLikes > p").html(likes[0].count);
  })
}