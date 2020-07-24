console.log('Works');

// 1. The size of the game map is 3×3.
// 2. We have 2 players (X & O).
// 3. Each player makes a single move in his turn.
// 4. A move means marking a field in the grid with the player’s mark(x or o).
// 5. A player wins when he has a full row / column / diagonal.


// if toggle switch = true then vs cpu if false vs player 2

  $(document).ready(function(){

    // console.log('DOM ready!');

let turnSelect = 1;

//------------------------------Click Function------------------------------

$('.box').on('click', function() {


//------------------------------Alert for already select space---------------

  if($(this).hasClass('filled')) { // checks whether

    alert('Uh oh! This space has already been filled!');

    return;
  }

//--------------------------Player Move----------------------------------------------

  $(this).css({'background-image': "url('images/symbol2.png')"}) // attaches symbol2 to the square selected

  $(this).addClass('Player-One filled') // gives two classes to the square selected

  turnSelect++; //

  let result = winCheck('Player-One');

  if (result) {

    return;
  }

  // if winCheck = true

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


//---------------------------CPU Player-------------------------------

  function cpuMove() {

     const emptyDivs = $('.box').not('.filled');

     const newDiv = emptyDivs.eq(Math.floor(Math.random() * emptyDivs.length));

     newDiv.css({'background-image': "url('images/symbol1.png')"});

     newDiv.addClass('Player-Two filled')

     turnSelect++;

     winCheck('Player-Two');

 }
 console.log(cpuMove());


}); // end of click handler

//------------------------------Win Conditions------------------------------------------------

  const winCheck = function(selected){

    let winResult = false; // by default not won yet

    // determines whether any of the possible solutions are true

    if ($('#1').hasClass(selected) && $('#2').hasClass(selected) && $('#3').hasClass(selected)) {
      // console.log('winner'); test
      winResult = true;

      $('#1,#2,#3').addClass('winningRow'); // select multiple boxes to add the winningRow class


    } else if ($('#4').hasClass(selected) && $('#5').hasClass(selected) && $('#6').hasClass(selected)) {
      winResult = true;

      $('#4,#5,#6').addClass('winningRow');


    } else if ($('#7').hasClass(selected) && $('#8').hasClass(selected) && $('#9').hasClass(selected)) {
      winResult = true;

      $('#7,#8,#9').addClass('winningRow');


    } else if ($('#1').hasClass(selected) && $('#4').hasClass(selected) && $('#7').hasClass(selected)) {
      winResult = true;

      $('#1,#4,#7').addClass('winningRow');


    } else if ($('#2').hasClass(selected) && $('#5').hasClass(selected) && $('#8').hasClass(selected)) {
      winResult = true;

      $('#2,#5,#8').addClass('winningRow');


    } else if ($('#3').hasClass(selected) && $('#6').hasClass(selected) && $('#9').hasClass(selected)) {
      winResult = true;

      $('#3,#6,#9').addClass('winningRow');


    } else if ($('#1').hasClass(selected) && $('#5').hasClass(selected) && $('#9').hasClass(selected)) {
      winResult = true;

      $('#1,#5,#9').addClass('winningRow');


    } else if ($('#3').hasClass(selected) && $('#5').hasClass(selected) && $('#7').hasClass(selected)) {
      winResult = true;

      $('#3,#5,#7').addClass('winningRow');
    }

    if(winResult) {
      $('.winMessage').text(`${selected} wins!`)


      if (selected === 'Player-One'){ // curly brackets to run the code
        playerOneCount++;

      } else if (selected === 'Player-Two') {
        playerTwoCount++;
      }
       $('.winCount').text(`Player One: ${playerOneCount} CPU: ${playerTwoCount} `)
      return true;



//---------------------------Draw result -------------------------------------

    } else if (winResult === false) { // runs everytime that the game hasnt been won, reverting to win result = false

      let filledBox = 0; // variable that starts at 0 to count how many boxes have been filled

      let boxGrid = $('.box'); // setting the variable box grid to be all the elements with a class of 'box' and changing it to a jquery object

      for (var i = 0; i < 9;  i++) { // loop 1-9 (dimensions of the board)

        if ($(boxGrid[i]).hasClass('filled')) { // checking if the box you're currently on has been filled
          filledBox = filledBox +1; // if it has then add 1 to the filled box counter
        }
      }
      if (filledBox === 9){ // if all the boxes have been filled and = 9 then display the win message
        $('.winMessage').text(`It's a draw!`)
      }
    }
  }; // end of winCheck


//--------------------------------Reset Button------------------------------------

// set win result back to default and remove images
  $('.btn').on('click', function() { // reset the game once a player wins
    // console.log('reset'); test

    $('.box').css({'background-image': 'none'}) // removes all images (x & o's)

    $('.box').removeClass('Player-One Player-Two filled winningRow') // resets selected class for players

    $('.winMessage').text(' ') // resets the win message to empty

    turnSelect = 1; // resets turn number to 1

  }); // end of reset button


//------------------------Win count---------------------------------------

  let playerOneCount = 0;
  let playerTwoCount = 0;

}); // end of document.ready
