function escape(str) {
  var div = document.createElement('div');
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
}

function postComments(resourceId, text) {
  $.post(`/resources/${resourceId}/comments`, text)
  .done((response) => {
    updateCommentClientSide(response[0]);
  });
}

function getCommentsClicks() {
  $("#commentForm").on("submit", (event) => {
    event.preventDefault();
    let resourceId = $("#commentForm").attr("data-resource-id");
    // let text = escape($("#commentForm").serialize());
    let text = $("#commentForm").serialize();
    postComments(resourceId, text);
  })
}

function updateCommentClientSide(comment) {
  $.ajax({method: "GET", url: `/users/${comment.user_id}/user`})
  .then((user) => {
    let userInfo = user[0];
    let newComment = 
    `<div class="media mb-4" data-user-id="${userInfo.id}">
      <img class="d-flex mr-3 rounded-circle" src="${userInfo.avatar_url}" width:20px; height:20px; style="border-radius:10px;" alt="">
      <div class="media-body" data-comment-id="${comment.id}">
        <h5 class="mt-0">${userInfo.name}</h5>
        ${comment.text}
      </div>
    </div>`;
  $("#commentArea").prepend(newComment);
  })
}