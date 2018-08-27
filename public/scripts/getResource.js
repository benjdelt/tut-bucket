function getSingleResource() {
  $("#collections div.singleSource").on("click", function(event) {
    $("#categories-buttons").css("visibility", "hidden")
    event.preventDefault();
    const urlStr = `/resources/${event.target.dataset.tag}`;
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
}
