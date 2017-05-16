
$("#partners-signup-form").submit(function(){
  var fullName = $("#fullName").val();
  var email = $("#email").val();
  $(".form-error").remove();
  $(".field-error").removeClass("field-error");
  $("#partners-signup-form button").addClass("btn--loading");
  $.ajax({
    type: "post",
    dataType: 'json',
    url: appPath+"api/partners/signup",
    data:{
      email: email,
      fullName: fullName
    },
    error: function(data, textStatus, jqXHR) {
      ga('send', 'event', 'error', 'partners-signup', email);
      if(data.responseJSON === undefined){
        jqXHR = "Conexión con servidor no disponible, vuelva a intentarlo";
      }else{
        if(data.responseJSON.errorMessage === undefined){
          jqXHR = "Ha ocurrio un error inesperado, vuelva a intentarlo";
        }else{
          jqXHR = data.responseJSON.errorMessage;
        }
      }
      $("#partners-signup-form input").removeClass("field-error");
      $("#partners-signup-form button").removeClass("btn--loading");
      $("body").prepend("<div class='form-error'>"+jqXHR+"</div>");
      setTimeout(function(){
        $(".form-error").remove();
      }, 5000)
    },
    success: function(data) {
      $("#partners-signup-form button").removeClass("btn--loading");
      ga('send', 'event', 'partners-signup','signup' email);
      fbq('trackCustom', 'partners-signup',{email:email});
      window.location.href = "/partner/signup/success";
    }
  });
});
