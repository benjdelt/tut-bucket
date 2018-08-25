function getComments(resourceId) {
  let allComments = "";
  let promise = $.ajax({method: "GET", url: `/resources/${resourceId}/comments`})
  .then((comments) => {
    if(comments.length) {
      comments.forEach(comment => {
        allComments += 
        `<div class="media mb-4">
          <img class="d-flex mr-3 rounded-circle" src="http://placehold.it/50x50" alt="">
          <div class="media-body">
            <h5 class="mt-0">${comment.name}</h5>
            ${comment.text}
          </div>
        </div>`
      });
      return allComments;
    }
  })

  return promise;
  // return allComments;
}
