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
              <div class="btn-group btn-group-toggle" data-toggle="buttons">
                  <label class="btn btn-success">
                    <input type="radio" name="ratings" id="A" > A
                  </label>
                  <label class="btn btn-success">
                    <input type="radio" name="ratings" id="B" > B
                  </label>
                  <label class="btn btn-warning">
                    <input type="radio" name="ratings" id="C+" > C+
                  </label>
                  <label class="btn btn-warning">
                      <input type="radio" name="ratings" id="C" > C
                  </label>
                  <label class="btn btn-warning">
                      <input type="radio" name="ratings" id="C-" > C-
                    </label>
                  <label class="btn btn-danger">
                    <input type="radio" name="ratings" id="D" > D
                  </label>
                  <label class="btn btn-danger">
                      <input type="radio" name="ratings" id="F" > F
                  </label>
                </div>
              <div id="like">
                  <button type="button" class="btn btn-outline-info ">Like</button>
              </div>
              </div>
              <div class="d-flex justify-content-between">
                <div id=currentRating><p>Current rating: A</p></div>
                <div id="numberOfLikes"><p>123</p></div>
              </div>
              <p class="lead">${select_resource.description}</p>
              <div class="card my-4">
                 <h5 class="card-header">Leave a Comment:</h5>
                 <div class="card-body">
                   <form>
                     <div class="form-group">
                       <textarea class="form-control" rows="3"></textarea>
                     </div>
                     <button type="submit" class="btn btn-primary">Submit</button>
                   </form>
                 </div>
               </div>
               <div class="media mb-4">
                 <img class="d-flex mr-3 rounded-circle" src="http://placehold.it/50x50" alt="">
                 <div class="media-body">
                   <h5 class="mt-0">Commenter Name</h5>
                   Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                 </div>
               </div>
            </div>
            <div class="col-lg-2">
              <a href="#">Edit</a>
            </div>
          </div>
        </main>
      </div>`

      $('body').html(singleResource);
    })

  });
}