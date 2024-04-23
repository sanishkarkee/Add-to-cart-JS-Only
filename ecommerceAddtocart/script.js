// 1) ------ Increment/Decrement ------

const decreaseNumber = () => {
  var itemval = document.getElementById('textbox');
  // console.log(itemval.value);

  if (itemval.value <= 0) {
    //yo gare paxi value -ve ma jadaina
    itemval.value = 0;
  } else {
    itemval.value = parseInt(itemval.value) - 1;
    itemval.style.background = '#fff';
    itemval.style.color = '#000';
  }
};

const increaseNumber = () => {
  var itemval = document.getElementById('textbox');

  if (itemval.value >= 5) {
    itemval.value = 5;
    alert('Max 5 allowed');
    itemval.style.background = 'red';
    itemval.style.color = '#fff';
  } else {
    itemval.value = parseInt(itemval.value) + 1;
  }
};
