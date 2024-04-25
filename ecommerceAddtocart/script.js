// 1) ------ Increment/Decrement  && total amt after quantity selection ------

var product_total_amt = document.getElementById('product_total_amt');
var total_cart_amt = document.getElementById('total_cart_amt');
var shipping_charge = document.getElementById('shipping_charge');
// console.log(shipping_charge.innerHTML);
var discountCode = document.getElementById('discount_code1');
console.log(discountCode.value);

const decreaseNumber = (incdec, itemprice) => {
  var itemval = document.getElementById(incdec);
  var itemprice = document.getElementById(itemprice);

  if (itemval.value <= 0) {
    //yo gare paxi value -ve ma jadaina
    itemval.value = 0;
    alert('Negetive quantity not allowed!');
  } else {
    itemval.value = parseInt(itemval.value) - 1;

    itemval.style.background = '#fff';
    itemval.style.color = '#000';

    // --Price +/- according to quantity
    itemprice.innerHTML = parseInt(itemprice.innerHTML) - 15;

    // -- Total amt after adding quantity
    product_total_amt.innerHTML = parseInt(product_total_amt.innerHTML) - 15;

    // --Total amt after shipping charge
    total_cart_amt.innerHTML =
      parseInt(product_total_amt.innerHTML) +
      parseInt(shipping_charge.innerHTML);
  }
};

const increaseNumber = (incdec, itemprice) => {
  var itemval = document.getElementById(incdec);
  var itemprice = document.getElementById(itemprice);

  if (itemval.value >= 5) {
    itemval.value = 5;

    alert('Max 5 allowed');
    itemval.style.background = 'red';
    itemval.style.color = '#fff';
  } else {
    itemval.value = parseInt(itemval.value) + 1;

    // --Price +/- according to quantity
    itemprice.innerHTML = parseInt(itemprice.innerHTML) + 15;

    // -- Total amt after adding quantity
    product_total_amt.innerHTML = parseInt(product_total_amt.innerHTML) + 15;

    // --Total amt after shipping charge
    total_cart_amt.innerHTML =
      parseInt(product_total_amt.innerHTML) +
      parseInt(shipping_charge.innerHTML);
  }
};

// ------ Discount Code ------
const discount_code = () => {
  // --- aile samma ko total amt fetch gareko
  let totalamtcurrent = parseInt(total_cart_amt.innerHTML);
  let error_trw = document.getElementById('error_trw');

  if (discountCode.value === 'thapa') {
    let newtotalamt = totalamtcurrent - 10;
    total_cart_amt.innerHTML = newtotalamt;
    error_trw.innerHTML = 'Code is applied';
  } else {
    error_trw.innerHTML = 'Try again!!!';
  }

  // if (discountCode.value != 'thapa') {
  //   alert('No such discount code exists!');
  // } else {
  // }
};

// -----------------------PRATICE--------------------------------

// var product_total_amt = document.getElementById('product_total_amt');
// var total_cart_amt = document.getElementById('total_cart_amt');
// var shipping_charge = document.getElementById('shipping_charge');

// const decreaseNumber = (incdec, itemprice) => {
//   var itemval = document.getElementById(incdec);
//   var itemprice = document.getElementById(itemprice);

//   if (itemval.value <= 0) {
//     itemval.value = 0;

//     alert('No negetive quantity');
//   } else {
//     itemval.value = parseInt(itemval.value) - 1;

//     itemval.style.background = '#fff';
//     itemval.style.color = '#000';

//     // --Price +/- according to quantity
//     itemprice.innerHTML = parseInt(itemprice.innerHTML) - 15;

//     // -- Total amt after adding quantity
//     product_total_amt.innerHTML = parseInt(product_total_amt.innerHTML) - 15;

//     // --Total amt after shipping charge
//     total_cart_amt.innerHTML =
//       parseInt(product_total_amt.innerHTML) +
//       parseInt(shipping_charge.innerHTML);
//   }
// };

// const increaseNumber = (incdec, itemprice) => {
//   var itemval = document.getElementById(incdec);
//   var itemprice = document.getElementById(itemprice);

//   if (itemval.value >= 5) {
//     itemval.value = 5;

//     alert('Maximum 5 allowed');
//     itemval.style.background = 'red';
//     itemval.style.color = '#fff';
//   } else {
//     itemval.value = parseInt(itemval.value) + 1;

//     // --Price +/- according to quantity
//     itemprice.innerHTML = parseInt(itemprice.innerHTML) + 15;

//     // -- Total amt after adding quantity
//     product_total_amt.innerHTML = parseInt(product_total_amt.innerHTML) + 15;

//     // --Total amt after shipping charge
//     total_cart_amt.innerHTML =
//       parseInt(product_total_amt.innerHTML) +
//       parseInt(shipping_charge.innerHTML);
//   }
// };
