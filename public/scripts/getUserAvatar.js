$.ajax("/resources/categories", {method:"GET"})
  .then((categoriesObject) => {
    for (category in categoriesObject) {
      let color = randomColor();
      $("<button>")
      .attr("class","btn mr-3")
      .html(`${categoriesObject[category].name}`)
      .css("background-color", color)
      .appendTo($("#categories-buttons"));
    }
  });
  