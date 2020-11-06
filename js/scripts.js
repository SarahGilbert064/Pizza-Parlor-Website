//Business Logic

function Pizza (size, toppings) {
  this.size = size;
  this.topping = topping;
}

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

//Test: Function should add to  



// User Interface Logic

$(document).ready(function() {
  $("form#pizza-order").submit(function(event) {
    event.preventDefault();

    let userPizzaSize = $("select#pizza-size").val();
    let newPizza = new Pizza(inputtedPizzaSize);

    $.each($("input[name='toppings']:checked"), function() {
      newPizza.this.topping.push($(this).val());
    });

    
    $("#price-output").show();
    $("#final-price").show(newPizza.price());

  }


  // const toppingStr = $("select#topping").val();
  // const topping = parseInt(toppingStr);