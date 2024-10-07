var rollButton = document.getElementById('rollButton');
var dice = document.getElementById('dice');
var result = document.getElementById('result');

rollButton.addEventListener('click',() => {
    var randomNumber = Math.floor(Math.random() * 6) + 1;
    dice.textContent = randomNumber;

    //   Show result message
    result.textContent = `You rolled a ${randomNumber}`;
  
});
 