
var toppings = 0

function Result(toppings, size) {

  this.toppings = toppings;
  this.size = size;

}

Result.prototype.newPizza = function(toppings, size) {
return this.toppings + this.size
}

$(document).ready(function() {
  $("form#pizza").submit(function(event) {

    debugger;

    var size = parseInt($("input:radio[name=size]:checked").val());

  $("input:checkbox[name=toppings]:checked").each(function(){
         toppings ++;



   var newAnswer =  new Result (toppings, size);
   var sum = newAnswer.newPizza(toppings, size);
   if (sum <= 3) {
     $("#answer").text("15.00");
   } else if (sum <= 7) {
      $("#answer").text("$10.00");
       } else  {
        $("#answer").text("$15.00");
      }



  //$("#answer").text(newAnswer);

    $("#output").show();

    event.preventDefault();
  });
  ($("input:radio[name=day]:checked").val());
  $("input:checkbox[name=toppings]:checked").each(function(){
         toppings ++;
});
});
});
