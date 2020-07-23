console.log('Works');

// 1. The size of the game map is 3×3.
// 2. We have 2 players (X & O).
// 3. Each player makes a single move in his turn.
// 4. A move means marking a field in the grid with the player’s mark(x or o).
// 5. A player wins when he has a full row / column / diagonal.

  $(document).ready(function(){

    // console.log('DOM ready!');

let turnSelect = 1;
$('.box').on('click', function() {
  if($(this).hasClass('filled')) {
    alert('Already selected!');
    return;
  }
  $(this).css({'background-image': "url('images/symbol2.png')"})
  $(this).addClass('Player-Two filled')
  turnSelect++;
  winCheck('Player-Two');

  // if(turnSelect % 2 === 0) {
  //   $(this).css({'background-image': "url('images/symbol2.png')"})
  //   $(this).addClass('Player-Two filled')
  //   //console.log('turn 2'); test
  //   turnSelect++;
  //   winCheck('Player-Two');
  //
  // } else {
  //   $(this).css({'background-image': "url('images/symbol1.png')"})
  //   $(this).addClass('Player-One filled') // adding two classes
  //   //console.log('turn 1'); test
  //   turnSelect++; // add 1 - next turn is player two's turn
  //   winCheck('Player-One'); // passing in player one
  // }


  // play computer move - computer always to click in the same square
  // $('.box').not('.filled').css({'background-image': "url('images/symbol1.png')"})
  // 1. Create an array of divs that have not been filled
  // 2. select one using math.random
  // 3. attach the fucking image to the div

  // const emptyDivs = $('.box').not('.filled');

  // function cpuMove(emptyDivs) { // new function called cpuMove that takes the argument of all empty Divs
  //   const emptyDivs = $('.box').not('.filled'); // new const that determines which classes
  //   console.log(cpuMove(emptyDivs));
  //
  //   return emptyDivs[Math.floor(Math.random() * emptyDivs.length)];
  //
  //
  // }
  //
  // const emptyDivs = $('.box').not('.filled'); // new const that determines which classes have not yet been selected/click on
  // console.log(cpuMove(emptyDivs));


// if ai = true then disable and leave ai, else
// on click event

  function cpuMove() {
     const emptyDivs = $('.box').not('.filled');
     //return emptyDivs[Math.floor(Math.random() * emptyDivs.length)];
     //console.log(emptyDivs.eq(Math.floor(Math.random() * emptyDivs.length)));
     const newDiv = emptyDivs.eq(Math.floor(Math.random() * emptyDivs.length));
     newDiv.css({'background-image': "url('images/symbol1.png')"});

 }
 console.log(cpuMove());


    // newDiv.css({'background-image': "url('images/symbol2.png')"});
    // emptyDivs.isArray();

    // create a for loop that will run 9 times




// randomNumber = Math.floor(Math.random() * 9);
// for (let i = 0; i < 9; i++) {
//     if ($(`#${randomNumber}`).not('.filled')) {
//         // then add ur css here so like $(`#${randomNumber}`).css
//     }
// }














}); // end of click handler


  const winCheck = function(selected){

    let winResult = false; // by default not won yet

    // determines whether any of the possible solutions are true
    if ($('#1').hasClass(selected) && $('#2').hasClass(selected) && $('#3').hasClass(selected)) {
      // console.log('winner'); test
      winResult = true;
    } else if ($('#4').hasClass(selected) && $('#5').hasClass(selected) && $('#6').hasClass(selected)) {
      winResult = true;
    } else if ($('#7').hasClass(selected) && $('#8').hasClass(selected) && $('#9').hasClass(selected)) {
      winResult = true;
    } else if ($('#1').hasClass(selected) && $('#4').hasClass(selected) && $('#7').hasClass(selected)) {
      winResult = true;
    } else if ($('#2').hasClass(selected) && $('#5').hasClass(selected) && $('#8').hasClass(selected)) {
      winResult = true;
    } else if ($('#3').hasClass(selected) && $('#6').hasClass(selected) && $('#9').hasClass(selected)) {
      winResult = true;
    } else if ($('#1').hasClass(selected) && $('#5').hasClass(selected) && $('#9').hasClass(selected)) {
      winResult = true;
    } else if ($('#3').hasClass(selected) && $('#5').hasClass(selected) && $('#7').hasClass(selected)) {
      winResult = true;
    }
    if(winResult) {
      $('.winMessage').text(`${selected} wins!`)
      // console.log('You win');
      // alert('You win'); - need to creat the alert AFTER the third icon has been inputted
    }


  }; // end of winCheck

// set win result back to default and remove images
  $('.btn').on('click', function() { // reset the game once a player wins
    // console.log('reset'); test
    $('.box').css({'background-image': 'none'}) // removes all images (x & o's)
    $('.box').removeClass('Player-One Player-Two filled') // resets selected class for players
    $('.winMessage').text(' ')
    turnSelect = 1;

  // NEED TO CLEAR winMessage

  }); // end of reset button

}); // end of document.ready

// Pop up message that you won and combine with reset button
// Draw message & personal



// AI function
// 1. Pick a random number
// 2. try and put symbol in that square
// 3. if it's already got a symbol in that square, try again



// Get a random position from the length(number of divs) on your board which is 9 and you’ve already done the correct step on line 3 there
// then you just want to take that random position(which will be whatever number your div is) and make the AI place it’s marker/token there
