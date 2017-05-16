var key="";
if(document.location.hostname != "conver.fit"){
  key='pk_test_41qLECnH0SOzoQ1dlRKcZtTV';
}else{
  key='pk_live_QVB1PEKPsh4uIEb4yyFihXtn';
}

var handlerStarter = StripeCheckout.configure({
  key: key,
  image: '/app/assets/img/icon-starter.jpg',
  name: "Converfit Starter",
  description: "Starter (199 €/mes)",
  allowRememberMe: false,
  locale: 'auto',
  currency: 'eur',
  amount: 19900,
  token: function(token) {
    payment(token,'starter');
  }
});


document.getElementById('starter-button').addEventListener('click', function(e) {
  handlerStarter.open();
  e.preventDefault();
});


var handlerProfessional = StripeCheckout.configure({
  key: key,
  image: '/app/assets/img/icon-professional.jpg',
  name: "Converfit Professional",
  description: "Subscripción (699 €/mes)",
  allowRememberMe: false,
  locale: 'auto',
  currency: 'eur',
  amount: 69900,
  token: function(token) {
    payment(token,'professional');
  }
});

document.getElementById('professional-button').addEventListener('click', function(e) {
  handlerProfessional.open();
  e.preventDefault();
});

var handlerEnterprise = StripeCheckout.configure({
  key: key,
  image: '/app/assets/img/icon-enterprise.jpg',
  name: "Converfit Enterprise",
  description: "Subscripción (1.999 €/mes)",
  allowRememberMe: false,
  locale: 'auto',
  currency: 'eur',
  amount: 199900,
  token: function(token) {
    payment(token,'enterprise');
  }
});

document.getElementById('enterprise-button').addEventListener('click', function(e) {
  handlerEnterprise.open();
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
