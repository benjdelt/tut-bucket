function getComments(resourceId) {
  let allComments = "";
  let promise = $.ajax({method: "GET", url: `/resources/${resourceId}/comments`})
  .then((comments) => {
    if(comments.length) {
      comments.forEach(comment => {
        allComments += 
        `<div class="media mb-4">
          <img class="d-flex mr-3 rounded-circle" src="${comment.avatar_url}" width:20px; height:20px; style="border-radius:10px;" alt="">
          <div class="media-body" data-comment-id="${comment.id}">
            <h5 class="mt-0">${comment.name}</h5>
            ${comment.text}
          </div>
        </div>`
      });
      return allComments;
    }
  })

  return promise;
}
