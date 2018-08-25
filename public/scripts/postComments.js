function escape(str) {
  var div = document.createElement('div');
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
}

function postComments(resourceId, text) {
  $.post(`/resources/${resourceId}/comments`, text)
  .done((response) => {
    updateCommentClientSide();
  });
}

function getCommentsClicks() {
  $("#commentForm").on("submit", (event) => {
    event.preventDefault();
    let resourceId = $("#commentForm").attr("data-resource-id");
    // let text = escape($("#commentForm").serialize());
    let text = $("#commentForm").serialize();
    console.log("resourceId:", resourceId);
    console.log("text:", text);
    postComments(resourceId, text);
  })
}

function updateCommentClientSide() {
  console.log("Comment Posted...");
}