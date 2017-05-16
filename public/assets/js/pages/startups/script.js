var key="";
if(document.location.hostname != "conver.fit"){
  key='pk_test_41qLECnH0SOzoQ1dlRKcZtTV';
}else{
  key='pk_live_QVB1PEKPsh4uIEb4yyFihXtn';
}

var handlerStarter = StripeCheckout.configure({
  key: key,
  name: "Converfit Startup",
  description: "Startup",
  allowRememberMe: false,
  locale: 'auto',
  currency: 'eur',
  amount: 5929,
  token: function(token) {
    payment(token,'startup');
  }
});

document.getElementById('startup-button').addEventListener('click', function(e) {
  handlerStarter.open();
  e.preventDefault();
});

// Close Checkout on page navigation:
window.addEventListener('popstate', function() {
  handlerProfessional.close();
});

function payment(token,type){
  $.ajax({
    type: "post",
    dataType: 'json',
    url: appPath+"api/access/payment",
    data:{
      email: token.email,
      tokenID: token.id,
      cardLast4: token.card.last4,
      cardID: token.card.id,
      type: type
    },
    error: function(data, textStatus, jqXHR) {
      ga('send', 'event', 'error', 'payment', token.email);
    },
    success: function(data) {
      ga('send', 'event', 'payment', type, token.email);
      fbq('trackCustom', 'payment',{email:token.email});

      window.location.href = "/app/access/setup/"+token.id;
    }
  });
}
