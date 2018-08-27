$(() => {
  function displayResources() {
    $.ajax({
      method: "GET",
      url: "/resources"
    }).done((resources) => {
      $("#collections").html("");
      for (item of resources) {
        var result = `<div class="col-lg-3 col-md-4 col-xs-6 d-block mb-4 h-100 singleSource">
            <img data-tag="${item.id}" class="img-fluid" src="${item.image_url}" alt="">
            <div class="carousel-caption resource-title overlay">
              <p data-tag="${item.id}">${item.title}</p>
            </div>
        </div>`;
        $("#collections").append(result);
      }
      getSingleResource()
      listenForUserPageRequest();
    });
  }
  
  $("#browseButton").on("click", () => {
    displayResources();
  })
  
  displayResources();

});

