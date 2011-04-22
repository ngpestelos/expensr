function() {
  var store = $("#store").val();
  var damage = $("#damage").val();
  var date = $("#date").val();
  
  if (store === "") {
    alert("Store is required");
    $("#store").focus();
    return false;
  } else if (damage === "") {
    alert("Damage is required");
    $("#damage").focus();
    return false;    
  } else if (date === "") {
    alert("Date is required");
    $("#date").focus();
    return false;
  }
  
  if (isNaN(damage)) {
    alert("Damage must be a number");
    $("#damage").focus();
    return false;
  } else if (damage < 1) {
    alert("Damage must be greater than zero");
    $("#damage").focus();
    return false;
  }
  
  if (isNaN(date)) {
    alert("Date must be a number");
    $("#date").focus();
    return false;
  } else if (date < 20100000) {
    alert("Date must be older than 2010");
    $("#date").focus();
    return false;
  }
  
  // Save the receipt  
  var receipt = {
    "store" : store,
    "damage" : damage.toString(),
    "date" : date.toString(),
    "created" : new Date(),
    "type" : "receipt"
  };
  // $.log(receipt);
  
  var app = $$(this).app;
  app.db.saveDoc(receipt, {
    success : function() {
      $.log("success");
      $("#store").val("");
      $("#damage").val("");
      $("#date").val("");
      $("#store").focus();
    },
    failure : function() {
      $.log("oh noes");
    }
  });
  
  return false;
}