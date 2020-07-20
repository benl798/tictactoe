console.log('Works');

// 1. The size of the game map is 3×3.
// 2. We have 2 players (X & O).
// 3. Each player makes a single move in his turn.
// 4. A move means marking a field in the map with the player’s mark.
// 5. A player wins when he has a full row / column / diagonal.

  $(document).ready(function(){

    // console.log('DOM ready!');

    $('.box').on('click', function(){
      console.log('click working');
    })// end of  click

// ----------------------------- Add tokens to board -----------------------------

let turnSelect = 1;
$('.box').on('click', function() {
  if($(this).hasClass('filled') === true) {
    alert('Already selected!');
    return;
  }
  if(turnSelect % 2 === 0) {
   $(this).css({'background-image': "url('images/token2.png')"});
   $(this).addClass('Player-Two filled')
   turnSelect++;
 } else {
   $(this).css({'background-image': "url('images/token1.png')"});
   $(this).addClass('Player-One filled')
   turnSelect++;
 }

 });


  }); // end of document.ready

  
