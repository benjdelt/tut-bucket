function getLikes(resourceId) {
  let promise = $.ajax({method: "GET", url: `/resources/${resourceId}/likes`})
  .then((likes) => {
    return likes;
  })
  return promise;
}
