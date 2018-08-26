$(() => { 

  // Getting categories for the new resource form
  function getCategories(cat) {
    $("#newFormCategory").html('');
    $.ajax("/resources/categories", {method:"GET"})
    .then((categoriesObject) => {
    for (category in categoriesObject) {
      if(cat) {
        if(categoriesObject[category].name===cat){
          $("<option>")
          .attr("class","dropdown-item")
          .attr("name", `${categoriesObject[category].name}`)
          .attr("value",`${categoriesObject[category].name}`)
          .attr("selected",true)
          .html(`${categoriesObject[category].name}`)
          .appendTo($("#newFormCategory"));
        } else {
          $("<option>")
          .attr("class","dropdown-item")
          .attr("name", `${categoriesObject[category].name}`)
          .attr("value",`${categoriesObject[category].name}`)
          .html(`${categoriesObject[category].name}`)
          .appendTo($("#newFormCategory"));
        }
        
      }  else {
        $("<option>")
          .attr("class","dropdown-item")
          .attr("name", `${categoriesObject[category].name}`)
          .attr("value",`${categoriesObject[category].name}`)
          .html(`${categoriesObject[category].name}`)
          .appendTo($("#newFormCategory"));
      }
    }
  });
    
  }

  $("#new").on("click", () => {
    
    
    // Empty the file
    $("#newForm").trigger("reset");    
    $("#modalTitle").text("New Resource");
    $("#newFormId").attr("value", "");
    $("#newFormTitle").attr("value", "");
    $("#newFormImageUrl").attr("value", "");
    $("#newFormDescription").html("");
    $("#newFormURL").attr("value", "");



    $("#deleteResource").remove();
    getCategories(null);
  })

  // Handlle

  $("#newForm").on("submit", (event) => {
    event.preventDefault();
    const newResource = $("#newForm").serialize();
    $("#new-resource-form").modal("toggle");

    $.post("/resources", newResource).done((response) => {
      $("#newForm").trigger("reset");
      
      $.ajax({
        method: "GET",
        url: "resources/" + response[0].id
      }).done((resource) => {
        const select_resource = resource[0];
      $.ajax({
        method: "GET",
        url: `resources/categories/${select_resource.category_id}`
      }).done((result) => {
        const category = result[0].name;
      var singleResource = `
      <div>
        <main class="container">
          <div class="row">
            <div class="col-lg-2">
              <a href="/">Back</a>
            </div>
            <div class="col-lg-8">
              <h2 data-resourceId ="${select_resource.id}" class="mt-4">${select_resource.title}</h2>
              <p id="resourceCategory">${category}</p>
              <div class="d-flex justify-content-between">
                <h4> username </h4>
                <a id="resourceURL" href="${select_resource.url}">${select_resource.url}</a>
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
              <p id="resourceDescription" class="lead">${select_resource.description}</p>
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
              <a id="editResource" href="#">Edit</a>
            </div>
          </div>
        </main>
      </div>`
      
      $('#navbar, #nick, #jotham').hide();
      $('#singeResource').html(singleResource);
    })
    });

  
    });
    
  })
  
  $("body").on("click", "#editResource", (event) => {
    event.preventDefault();
    $("#newForm").trigger("reset");
    $("#deleteResource").remove();
    $("#newForm > .modal-footer").prepend($(`<button type="button" id="deleteResource" class="btn btn-danger" data-toggle="confirmation"">Delete</button>`));
    $("#new-resource-form").modal("toggle");
    getCategories($("#resourceCategory").text());
    $("#modalTitle").text("Edit Resource");
    // Prepopulate form with elements from the page
    const resourceId = $('h2').attr('data-resourceId');
    $("#newFormId").attr("value", resourceId);
    $("#newFormTitle").attr("value", $("h2").text());
    $("#newFormImageUrl").attr("value", $("main img").attr("src"));
    $("#newFormDescription").html($("#resourceDescription").text());
    $("#newFormURL").attr("value", $("#resourceURL").text());

    // Confirmation for delete button
    $('[data-toggle=confirmation]').confirmation({
      rootSelector: '[data-toggle=confirmation]'  
    })
    $("body").on("click", "#deleteResource", (event) => {
        $.post(`/resources/${resourceId}`, resourceId).done((response) => {
          $("#newForm").trigger("reset");
          $("#new-resource-form").modal("toggle");

        $('#singeResource').empty();
        
        $.ajax({
          method: "GET",
          url: "/resources"
        }).done((resources) => {
          $("#collections").html("");
          for (item of resources) {
            var result = `<div class="col-lg-3 col-md-4 col-xs-6 d-block mb-4 h-100 singleSource">
                <img data-tag="${item.id}" class="img-fluid img-thumbnail" src="http://placehold.it/400x300" alt="">
                <div class="carousel-caption">
                  <h5 data-tag="${item.id}">${item.title}</h5>
                </div>
            </div>`;
            $("#collections").append(result);
          }
          getSingleResource()
        });
        $('#navbar, #nick, #jotham').show();


      })
    })

  });


})