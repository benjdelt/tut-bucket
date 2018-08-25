function getSingleResource() {
  $("#collections a").on("click", function(event) {
    event.preventDefault();
    const urlStr = `/resources/${event.target.dataset.tag}`;
    $.ajax({
      method: "GET",
      url: urlStr
    }).done((resource) => {
      const select_resource = resource[0];
      var singleResource = `
      <div>
        <main class="container">
          <div class="row">
            <div class="col-lg-2">
              <a href="/">Back</a>
            </div>
            <div class="col-lg-8">
              <h2 class="mt-4">${select_resource.title}</h2>
              <div class="d-flex justify-content-between">
                <h4> username </h4>
                <a href="${select_resource.url}">${select_resource.url}</a>
              </div>
              <img class="img-fluid rounded mx-auto d-block" src="${select_resource.image_url}"/>
              <p>Posted on ${select_resource.timestamp}</p>
              <div class="d-flex justify-content-between">
              <div id="ratingsContainer" class="btn-group btn-group-toggle" data-toggle="buttons">
                  <label  data-resource-id="${select_resource.id}" class="btn btn-success" id="A">
                    <input type="radio" name="ratings"> A
                  </label>
                  <label  data-resource-id="${select_resource.id}" class="btn btn-success" id="B">
                    <input type="radio" name="ratings"> B
                  </label>
                  <label  data-resource-id="${select_resource.id}" class="btn btn-warning" id="C+">
                    <input type="radio" name="ratings"> C+
                  </label>
                  <label  data-resource-id="${select_resource.id}" class="btn btn-warning" id="C">
                      <input type="radio" name="ratings"> C
                  </label>
                  <label  data-resource-id="${select_resource.id}" class="btn btn-warning" id="C-">
                      <input type="radio" name="ratings"> C-
                    </label>
                  <label  data-resource-id="${select_resource.id}" class="btn btn-danger" id="D">
                    <input type="radio" name="ratings"> D
                  </label>
                  <label  data-resource-id="${select_resource.id}" class="btn btn-danger" id="F">
                      <input type="radio" name="ratings"> F
                  </label>
                </div>
              <div id="like">
                  <button type="button" data-resource-id="${select_resource.id}" class="btn btn-outline-info ">Like</button>
              </div>
              </div>
              <div class="d-flex justify-content-between">
                <div id=currentRating><p>Current rating: <span>`;
              getRatings(select_resource.id)
                .then((currentRating) => {   
                  singleResource += currentRating;
                  singleResource += 
                  `</span></p></div>
                  <div id="numberOfLikes"><p>`;
                getLikes(select_resource.id)
                .then((numLikes) => {
                  singleResource += numLikes[0].count;
                  singleResource += `</p></div>
                  </div>
                  <p class="lead">${select_resource.description}</p>
                  <div class="card my-4">
                    <h5 class="card-header">Leave a Comment:</h5>
                    <div class="card-body">
                      <form id="commentForm" data-resource-id="${select_resource.id}">
                        <div class="form-group">
                          <textarea id="commentText" class="form-control" rows="3" name="commentContent"></textarea>
                        </div>
                        <button type="submit" class="btn btn-primary">Submit</button>
                      </form>
                    </div>
                  </div>
                </div>
                <div class="col-lg-2">
                  <a href="#">Edit</a>
                </div>`;
          getComments(select_resource.id)
          .then((comment) => {
            if(comment) {
              singleResource += comment; 
            }
            singleResource += 
                `</div>
              </main>
            </div>`;
            $('body').html(singleResource);
            // start listening for clicks now that the resource is loaded
            getLikesClicks();
            getRatingsClicks();
            getCommentsClicks();
          }) 
        })
      })
    })
  });
}