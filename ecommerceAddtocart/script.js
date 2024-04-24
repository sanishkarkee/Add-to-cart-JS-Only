// 1) ------ Increment/Decrement ------

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
  }
};

// -----------------------PRATICE--------------------------------
