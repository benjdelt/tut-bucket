$(() => {
  $("#login").on("click", (event) => {
    $("body").css("overflow", "auto");
    event.preventDefault();
    let userID = $("#username").val();
    $.ajax(`/users/login/${userID}`, {method:"GET"})
    .then(() => {
      $("#loginPage").hide();
      $("#ben").css("visibility","visible");
    });
  })
})