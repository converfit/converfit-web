$("form").submit(function(e){
  e.preventDefault();
});

$(".lead-form").submit(function(e){
  var that = this;
  var email = $('input.email', this).val();

  ga('send', 'event', 'signup', 'lead', email);
  fbq('track', 'Lead');
  //cf('conversion', '[landing]-request-demo');

  $(".form-error").remove();
  $(".field-error").removeClass("field-error");
  $('button', this).addClass("btn--loading");
  $.ajax({
    type: "post",
    dataType: 'json',
    url: appPath+"api/access/lead",
    data:{
      email: $('input.email', this).val()
    },
    error: function(data, textStatus, jqXHR) {
            console.log("error");
      ga('send', 'event', 'error', 'signup-lead', email);
      if(data.responseJSON === undefined){
        jqXHR = "Conexión con servidor no disponible, vuelva a intentarlo";
      }else{
        if(data.responseJSON.msg === undefined){
          jqXHR = "Ha ocurrio un error inesperado, vuelva a intentarlo";
        }else{
          jqXHR = data.responseJSON.msg;
        }
      }
      $('input', that).removeClass("field-error");
      $('button', that).removeClass("btn--loading");
      $("body").prepend("<div class='form-error'>"+jqXHR+"</div>");
      setTimeout(function(){
        $(".form-error").remove();
      }, 5000)
    },
    success: function(data) {
      console.log("success");
      $('button', that).removeClass("btn--loading");
      window.location.href = "/calendly";
    }
  });


});
