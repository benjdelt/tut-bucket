function getResourcesByName() {
  $("#categories-buttons").on("click", function(event) {
    event.preventDefault();
    const urlStr = `resources/categories/${event.target.id}`
    $.ajax({
      method: "GET",
      url: urlStr
    }).done((resources) => {
      $("#collections").html("");
      for (item of resources) {
        var result = `<div class="col-lg-3 col-md-4 col-xs-6 d-block mb-4 h-100 singleSource">
          <a href=""  class="d-block mb-4 h-100">
            <img data-tag="${item.id}" class="img-fluid img-thumbnail" src="http://placehold.it/400x300" alt="">
            <div class="carousel-caption">
              <h5 data-tag="${item.id}">${item.title}</h5>
            </div>
          </a>
        </div>`;
        $("#collections").append(result);
      }
      getSingleResource();
    });
  });
}