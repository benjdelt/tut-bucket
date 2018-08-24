$(() => {
  $("#new").on("click", () => {
    $.ajax("/resources/categories", {method:"GET"})
  .then((categoriesObject) => {
    for (category in categoriesObject) {
      $("<option>")
      .attr("class","dropdown-item")
      .attr("value",`${categoriesObject[category].name}`)
      .html(`${categoriesObject[category].name}`)
      .appendTo($("#newFormCategory"));
    }
  });
  })
  
  
})