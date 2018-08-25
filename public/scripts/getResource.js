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
            <div class="col-lg-2"></div>
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
              <p class="lead">${select_resource.description}</p>
            </div>
            <div class="col-lg-2"></div>
          </div>
        </main>
      </div>`

      $('body').html(singleResource);

    })

  });
}