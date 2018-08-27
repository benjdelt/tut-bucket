function listenForUserPageRequest() {
  $("#userPage").on("click", function(event) {
    event.preventDefault();
    let url = $(event.target).attr('href');
    $.ajax({method: "GET", url: `/users/${url}/user`})
    .done((user) => {
      var singleUser = 
      `<div id="jotham">
        <div id="user_info" data-userID="${user[0].id}" class="container" style="margin-top:100px;max-width:70%;">
          <div class="container">
            <div class="d-flex justify-content-between">
              <div class="d-flex p-2">
                <img src="https://s3.amazonaws.com/uifaces/faces/twitter/kushsolitary/128.jpg" class="mr-3 rounded" width="200px" height="200px">
                <h2>${user[0].name}</h2>
              </div>
              <div class="d-flex flex-column justify-content-between">
                <div class="d-flex justify-content-end" style="margin:10px 10px 0 0;">
                </div>
                <h4>${user[0].email}</h4>
              </div>
            </div>
          </div>
          <div class="d-flex justify-content-between mt-5">
            <div class="leftButtons">
              <button id="myPosts" class="btn btn-secondary">My Posts</button>
              <button id="myLikedPosts" class="btn btn-secondary">My Liked Posts</button>
            </div>
            <div class="rightButton">
            Sort By:
              <select class="btn btn-secondary">
                <option>Most Recent</option>
                <option>Most Popular</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <script type="text/javascript" src="/scripts/displayUserCollections.js"></script>`;        
      $('#nick, #singleResource').hide();
      $('#singleUser').html(singleUser);
      getLikesClicks();
      getRatingsClicks();
      getCommentsClicks();
    }) 
  })
}
