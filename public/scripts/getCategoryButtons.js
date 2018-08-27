function randomColor() {
  let colors = [
    '#17a2b8', //red
    '#20a1b5', //green
    '#28a6ba', //blue
    '#30adc1', //purple
    '#42b2c4', //pink
    '#5fbfce', //yellow
    '#79d6e5'  //orange
  ];
  return colors[Math.floor(Math.random() * Math.floor(colors.length))];
}

$.ajax("/resources/categories", {method:"GET"})
  .then((categoriesObject) => {
    for (category in categoriesObject) {
      let color = randomColor();
      $("<button>")
      .attr("id",`${categoriesObject[category].id}`)
      .attr("class","btn mr-3")
      .html(`${categoriesObject[category].name}`)
      .css("background-color", color)
      .appendTo($("#categories-buttons"));
    }

    getResourcesByName();


  });
