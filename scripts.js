function get_bot_response() {
  var txt = $("#text_input").val();
  var user = '<p class = "user">' + txt + '</p>';
  $("#text_input").val("");
  $("#chatbot").append(user);
  document.getElementById('user').scrollIntoView({block: 'start', behavior: 'smooth'});
  $.get("/get", { msg: txt }).done(function(data) {
    var bot = '<p class = "bot">' + data + '</p>';
    $("#chatbot").append(bot);
    document.getElementById('chatbox').scrollIntoView({block: 'start', behavior: 'smooth'});
  });
}
$("#text_input").keypress(function(e) {
  if(e.which == 13) {
    get_bot_response();
  }
});
$("#buttons").click(function() {
  get_bot_response()
})
