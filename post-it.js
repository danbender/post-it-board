Board = {
  initialize: function() {
    $('.icon-plus-circled').click(function() {
      PostIt.initialize();
    });
    var $elem = $("selector");
  }
};

PostIt = {
  initialize: function() {
    PostIt.addNewPost();
    PostIt.dragPost();
    $('.post-it h4').click(function(){
      PostIt.editTitle();
    })
  },

  dragPost: function(){
    $(".post-it").draggable();
  },

  addNewPost: function(){
    var newPostItem = "<div class='post-it'><div class='content'><h4>Click to edit</h4><p>Me too</p></div></div>";
    $('#board').append(newPostItem);
  },

  editTitle: function(){

    console.log("clicked");
  }

};

$(document).ready(function() {
  Board.initialize()
  // Board.new('#board');

 });
