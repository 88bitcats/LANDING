$(document).ready(function(){
  $("form").submit(function(event){
    /* stop form from submitting normally */
      event.preventDefault();
      $.ajax({
        type : 'POST',
        url : '/contact-submit',
        data: JSON.stringify({ name : $('#InputName').val(), email: $('#InputEmailFirst').val(), message: $('#InputMessage').val() }),
        contentType: 'application/json',
        success : function(){
          $('#InputName').val("");
          $('#InputEmail').val("");
          $('#InputMessage').val("");
        }
      });
  });

  // This gets the correct CSS when the navbar button is clicked
  $('.navbar-toggle').click(function(){
    var navbarOpen = false;
    console.log(this);
    if(navbarOpen) {
      navbarOpen = false;
      $(this).removeClass('navbar-toggle-open');
    } else {
      navbarOpen = true;
      $(this).addClass('navbar-toggle-open');
    }
  });
});
