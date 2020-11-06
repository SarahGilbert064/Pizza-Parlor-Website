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
    console.log(price);
  }

// Describe: priceOfPizza
// Test: Function should add up to a total depending on what size user chooses.
// Expect: priceOfPizza(5).toEqual("small"(7));

  if(this.topping === 1) {
    price += 1;
  } else if ( this.topping >= 2) {
    price += 2;
  } else if (this.topping >= 3) {
    price += 3;
  } else {
    price += 4;
  }
  return price;
  };

//Test: Function should add to price result based off topping input.
//Expect: priceOfPizza(5,2).toEqual("small"(9)); 



// User Interface Logic

$(document).ready(function() {
  $("form#button").click(function(event) {
    event.preventDefault();

    let size =$("#pizza-size").val();
    let toppings = $("input:checkbox:checked").val();
    
    // let newPizza = new Pizza(size, topping);
    
    let userPizzaSize = $("select#pizza-size").val();
    let newPizza = new Pizza(userPizzaSize);
    
    
    $("#price-output").show();
    $("#final-price").text(newPizza.price());
    
    
  });
});
