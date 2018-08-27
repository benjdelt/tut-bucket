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
          <a href="${item.id}" class="d-block mb-4 h-100 idForResource">
            <img href="${item.id}" class="img-fluid img-thumbnail custom-img" src="${item.image_url}" alt="">
            <div href="${item.id}" class="carousel-caption">
              <h5>${item.title}</h5>
            </div>
          </a>
        </div>`;
        $("#jotham").css("display","block");
        $("#userCollections").append(result);
      }
    }
  })
  .then(() => {
    $(".idForResource").on("click", (event) => {
      console.log("event.target",event.target);
      event.preventDefault();
      const urlStr = `/resources/${$(event.target).attr("href")}`;
      console.log(urlStr);
      $.ajax({
        method: "GET",
        url: urlStr
      }).done((resource) => {
        const select_resource = resource[0];
        $.ajax({
          method: "GET",
          url: `resources/categories/${select_resource.category_id}`
        }).done((result) => {
          const category = result[0].name;
          getSingleResourceTemplate(category, select_resource);
        });
      });
    });
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
          <a href="${item.resources_id}" class="d-block mb-4 h-100 idForResource">
            <img href="${item.resources_id}" class="img-fluid img-thumbnail custom-img" src="${item.image_url}" alt="">
            <div href="${item.resources_id}" class="carousel-caption">
              <h5>${item.title}</h5>
            </div>
          </a>
        </div>`;
        $("#userCollections").append(result);
      }
    }
  })
  .then(() => {
    $(".idForResource").on("click", (event) => {
      console.log("event.target",event.target);
      event.preventDefault();
      const urlStr = `/resources/${$(event.target).attr("href")}`;
      console.log(urlStr);
      $.ajax({
        method: "GET",
        url: urlStr
      }).done((resource) => {
        const select_resource = resource[0];
        $.ajax({
          method: "GET",
          url: `resources/categories/${select_resource.category_id}`
        }).done((result) => {
          const category = result[0].name;
          getSingleResourceTemplate(category, select_resource);
        });
      });
    });
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

// displayLikedResources();
// displayUserResources();