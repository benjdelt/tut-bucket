function displayUserResources() {
  let url = $(location).attr('href');
  let userID = url[url.length - 1];

  $.ajax({
    method: "GET",
    url: `/resources/users/${userID}`
  }).done((resources) => {
    if(!resources.error) {
      for (item of resources) {
        var result = `<div class="col-lg-3 col-md-4 col-xs-6 d-block mb-4 h-100 singleSource">
            <img data-tag="${item.id}" class="img-fluid img-thumbnail" src="http://placehold.it/400x300" alt="">
            <div class="carousel-caption">
              <p>${item.title}</p>
            </div>
        </div>`;
        $("#collections").append(result);
      }
    }
  });
}

function displayLikedResources() {
  let url = $(location).attr('href');
  let userID = url[url.length - 1];

  $.ajax({
    method: "GET",
    url: `/resources/liked/${userID}`
  }).done((resources) => {
    if(!resources.error) {
      for (item of resources) {
        var result = `<div class="col-lg-3 col-md-4 col-xs-6 d-block mb-4 h-100 singleSource">
            <img data-tag="${item.id}" class="img-fluid img-thumbnail" src="http://placehold.it/400x300" alt="">
            <div class="carousel-caption">
              <p>${item.title}</p>
            </div>
        </div>`;
        $("#collections").append(result);
      }
    }
  });
}

$("#myPosts").on("click", (event) => {
  $("#collections").html('');
  displayUserResources();
});

$("#myLikedPosts").on("click", (event) => {
  $("#collections").html('');
  displayLikedResources();
});

displayLikedResources();
displayUserResources();