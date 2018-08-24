function randomColor() {
  let colors = [
    '#ff3232', //red
    '#49ff53', //green
    '#75aaff', //blue
    '#b949ff', //purple
    '#ff4979', //pink
    '#fff249', //yellow
    '#ff8e49'  //orange
  ];
  return colors[Math.floor(Math.random() * Math.floor(colors.length))];
}

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