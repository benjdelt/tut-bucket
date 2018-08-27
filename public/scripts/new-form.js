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

      } else {
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
      $.ajax({method: "GET", url: "resources/" + response[0].id})
      .done((resource) => {
        const select_resource = resource[0];
        $.ajax({method: "GET", url: `resources/categories/${select_resource.category_id}`})
        .done((result) => {
        const category = result[0].name;
        getSingleResourceTemplate(category, select_resource);
        })
      });
    });
  });

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

        $('#singleResource').empty();
        $('#editResource').css("visibility", "hidden");

        $.ajax({
          method: "GET",
          url: "/resources"
        }).done((resources) => {
          $("#collections").html("");
          for (item of resources) {
            var result = `<div class="col-lg-3 col-md-4 col-xs-6 d-block mb-4 h-100 singleSource">
                <img data-tag="${item.id}" class="img-fluid img-thumbnail" src="${item.image_url}" alt="">
                <div class="carousel-caption overlay">
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