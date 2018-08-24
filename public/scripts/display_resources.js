$(() => {
  $.ajax({
    method: "GET",
    url: "/resources"
  }).done((resources) => {
    for (item of resources) {
      var result = `<div class="col-lg-3 col-md-4 col-xs-6">
        <a href="/resources/:${item.id}" class="d-block mb-4 h-100">
          <img class="img-fluid img-thumbnail custom-img" src="http://placehold.it/400x300" alt="">
          <div class="carousel-caption">
            <h5>${item.title}</h5>
          </div>
        </a>
      </div>`;
      $("#collections").append(result);
    }
  });
});
