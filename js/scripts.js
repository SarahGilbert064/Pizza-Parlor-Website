//Business Logic

function Pizza (size, topping) {
  this.size = size;
  this.topping = topping;
}

// let newPizzaOrder = new Pizza ("large", "mushrooms");

Pizza.prototype.priceOfPizza = function () {
  let price = 5;

  if(this.size === "small") {
    price += 2;
  } else if (this.size === "medium") {
    price +=4;
  } else {
    price += 6;
  }

// Describe: priceOfPizza
// Test: Function should add up to a total depending on what size user chooses.
// Expect: priceOfPizza(5).toEqual("small"(7));

  // if(this.topping === "1") {
  //   price += 1;
  // } else if ( this.topping ) {
  //   price += 2;
  // } else if (this.topping >= "1") {
  //   price += 3;
  // } else {
  //   price += 4;
  // }
  return price;
  };

//Test: Function should add to price result based off topping input.
//Expect: priceOfPizza(5,2).toEqual("small"(9)); 



// User Interface Logic

$(document).ready(function() {
  $("form#button").click(function(event) {
    event.preventDefault();

    $(".pizza-order").each(function() {
      let size =$(this).find("#pizza-size").val();
      let toppings = $(this).find("input:checkbox:checked").val();
      
      let newPizza = new Pizza(size, toppings);
      console.log(newPizza);

      $("#price-output").show();
      $("#final-price").text(newPizza.priceOfPizza());
    
    });
  });
});
