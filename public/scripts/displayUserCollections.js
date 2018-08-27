function displayUserResources() {
  $("#userCollections").css("display", "flex");  
  $("#nick").hide();  
  let userID = $("#user_info").attr("data-userid");
  $.ajax({
    method: "GET",
    url: `/resources/users/${userID}`
  }).done((resources) => {
    if(!resources.error) {
      for (item of resources) {
        var result = `<div class="col-lg-3 col-md-4 col-xs-6">
          <a href="#" class="d-block mb-4 h-100">
            <img class="img-fluid img-thumbnail custom-img" src="http://placehold.it/400x300" alt="">
            <div class="carousel-caption">
              <h5>${item.title}</h5>
            </div>
          </a>
        </div>`;
        $("#jotham").css("display","block");
        $("#userCollections").append(result);
      }
    }
  });
}

function displayLikedResources() {
  $("#userCollections").css("display", "flex");  
  $("#nick").hide();  
  let userID = $("#user_info").attr("data-userid");

  $.ajax({
    method: "GET",
    url: `/resources/liked/${userID}`
  }).done((resources) => {
    if(!resources.error) {
      for (item of resources) {
        var result = `<div class="col-lg-3 col-md-4 col-xs-6">
          <a href="#" class="d-block mb-4 h-100">
            <img class="img-fluid img-thumbnail custom-img" src="http://placehold.it/400x300" alt="">
            <div class="carousel-caption">
              <h5>${item.title}</h5>
            </div>
          </a>
        </div>`;
        $("#userCollections").append(result);
      }
    }
  });
}

$("#myPosts").on("click", (event) => {
  $("#userCollections").html('');
  displayUserResources();
});

$("#myLikedPosts").on("click", (event) => {
  $("#userCollections").html('');
  displayLikedResources();
});

displayLikedResources();
displayUserResources();