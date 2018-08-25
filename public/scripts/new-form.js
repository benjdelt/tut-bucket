$(() => {

  // Getting categories for the new resource form
  
  $("#new").on("click", () => {
    $.ajax("/resources/categories", {method:"GET"})
  .then((categoriesObject) => {
    for (category in categoriesObject) {
      $("<option>")
      .attr("class","dropdown-item")
      // .attr("name", `${categoriesObject[category].name}`)
      .attr("value",`${categoriesObject[category].name}`)
      .html(`${categoriesObject[category].name}`)
      .appendTo($("#newFormCategory"));
    }
  });
  })

  // Handlle

  $("#newForm").on("submit", (event) => {
    event.preventDefault();
    const newResource = $("#newForm").serialize();
    $("#new-resource-form").modal("toggle");

    $.post("/resources", newResource).done((response) => {
      $("#newForm").trigger("reset");

    });

  })
  
})