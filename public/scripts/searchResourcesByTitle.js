$(() => {
  $('#search').on('submit', function (e) {
    e.preventDefault();
    $('#singleResource').hide();
    $('#editResource').css("visibility", "hidden");
    $('#nick, #jotham').css("display", "inline");
    const key = $(this).serialize()
    $.post('/resources/search', key)
    .done((resources) => {
        $("#collections").html("");
        if (resources.length === undefined) {
          console.log("ERRORRRR");
        } else {
          for (item of resources) {
            var result = `<div class="col-lg-3 col-md-4 col-xs-6 d-block mb-4 h-100 singleSource">
                <img data-tag="${item.id}" class="img-fluid img-thumbnail" src="${item.image_url}" alt="">
                <div class="carousel-caption resource-title overlay">
                  <p data-tag="${item.id}">${item.title}</p>
                </div>
            </div>`;
            $("#collections").append(result);
          }
        }
        $('#singleResource').html('');
        getSingleResource();
        $('#singleResource').css("display", "inline");
        $('#editResource').css("visibility", "visible");
      });
  });
});