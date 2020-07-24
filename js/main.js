$(document).ready(function(){

let turnSelect = 1;
let playerOneScore = 0;
let cpuScore = 0;

//------------------------------Click Function------------------------------

$('.box').on('click', function() {

//------------------------------Alert for already filled space---------------

  if($(this).hasClass('filled')) { // Checks whether the owner on click has already been selected and has the class 'filled'

    alert('Uh oh! This space has already been filled!'); // Returns the alert if already filled

    return;
  }

//--------------------------Player Move----------------------------------------------

  $(this).css({'background-image': "url('images/symbol2.png')"}) // Assigns symbol2 to the background image of the selected available square

  $(this).addClass('Player-One filled') // Adds two classes to the selected square

  turnSelect++; // Incriment operator that adds one (+1) to turnSelect and changes turn

  let result = winCheck('Player-One');  // Runs the winCheck function and stores the return value in the variable (result)

  if (result) {

    return; // If result = true then exit the function if = false let CPU move
  }

//-------------------------VS Player-Two-----------------------------------------

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

//---------------------------CPU Player Move-------------------------------

  function cpuMove() {

     const emptyDivs = $('.box').not('.filled'); // Identifies all squares not selected

     const newDiv = emptyDivs.eq(Math.floor(Math.random() * emptyDivs.length)); // Randomly selects an available square

     newDiv.css({'background-image': "url('images/symbol1.png')"});

     newDiv.addClass('CPU filled')

     turnSelect++;

     winCheck('CPU');
 }

 cpuMove(); // Runs the function


}); // End of click handler

//------------------------------Win Conditions-------------------------------------

  const winCheck = function(selected){

    let winResult = false;

    if ($('#1').hasClass(selected) && $('#2').hasClass(selected) && $('#3').hasClass(selected)) {
      winResult = true; // Returns true if the winning combination has been selected by the player or CPU

      $('#1,#2,#3').addClass('winningRow'); // Highlights the winning play (CSS)


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
      $('.winMessage').text(`${selected} wins!`) // Displays win message

//---------------------------Win Counter---------------------------------------

      if (selected === 'Player-One'){
        playerOneScore++; // (+1) to Player's score count

      } else if (selected === 'CPU') {
        cpuScore++; // (+1) to CPU's score count
      }
       $('.winCount').text(`Player One: ${playerOneScore} CPU: ${cpuScore} `)
      return true; // Displays win counter

//---------------------------Draw result -------------------------------------

    } else if (winResult === false) {

      let filledBox = 0;

      let boxGrid = $('.box'); // Creating a new variable and changing it to a jQuery object

      for (var i = 0; i < 9;  i++) { // Loop through the dimensions of the board (1-9)

        if ($(boxGrid[i]).hasClass('filled')) {
          filledBox = filledBox +1;
        }
      }
      if (filledBox === 9){
        $('.winMessage').text(`It's a draw!`) // If all squares have been selected and are = 9 then display draw message
      }
    }
  }; // End of winCheck

//--------------------------------Reset Button------------------------------------

  $('.btn').on('click', function() {

    $('.box').css({'background-image': 'none'}) // Clears all symbols from the grid

    $('.box').removeClass('Player-One CPU filled winningRow') // Removes all classes previously assigned on the grid

    $('.winMessage').text(' ') // Replaces the win message to empty

    turnSelect = 1; // Resets turnSelect to 1

  }); // End of reset button

}); // End of document.ready
