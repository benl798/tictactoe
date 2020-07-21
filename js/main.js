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
}
  if(turnSelect % 2 === 0) {
  $(this).css({'background-image': "url('images/symbol2.png')"})
   $(this).addClass('Player-Two filled')
   //console.log('turn 2'); test
   turnSelect++;
   winCheck('Player-Two');

 } else {
   $(this).css({'background-image': "url('images/symbol1.png')"})
   $(this).addClass('Player-One filled') // adding two classes
   //console.log('turn 1'); test
   turnSelect++; // add 1 - next turn is player two's turn
   winCheck('Player-One'); // passing in player one
 }

 });


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
      console.log('You win');
    }


  }; // end of winCheck


  }); // end of document.ready
