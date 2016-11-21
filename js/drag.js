
var correctCards = 0;
$( init );

function init() {

  // Hide the success message
  $('#successMessage').hide();
  $('#successMessage').css( {
    left: '580px',
    top: '250px',
    width: 0,
    height: 0
  } );

  // Reset the game
  correctCards = 0;
  $('#cardPile').html( '' );
  $('#cardSlots').html( '' );

  // Create the pile of shuffled cards
  var numbers = ['1_resistencia', '2_inductor', '3_capacitor', '4_transistor-NPN', '5_transistor-PNP', '6_diodo', '7_opto-acoplador', '8_MOSFET', '9_trans-formador', '10_fuente' ];
  numbers.sort( function() { return Math.random() - .5 } );
  var vixen = numbers.slice(0,5);

  for ( var i=0; i<5; i++ ) {

    $('<div>' + '<img src="media/'+vixen[i].split("_")[1]+'.png" width="80" height="80"/>' + '</div>').data( 'number', vixen[i].split("_")[0] ).attr( 'id', 'card'+vixen[i].split("_")[0] ).appendTo( '#cardPile' ).draggable( {
      containment: '#content',
      stack: '#cardPile div',
      cursor: 'move',
      revert: true
    } );
  }

  // Create the card slots
  vixen.sort(function() {return Math.random() - .5});
  var words = [ 'resistencia', 'inductor', 'capacitor', 'transistor-NPN', 'transistor-PNP', 'diodo', 'opto-acoplador', 'MOSFET', 'trans-formador', 'fuente' ];
  for ( var i=0; i<5; i++ ) {
    $('<div>' + vixen[i].split("_")[1] + '</div>').data( 'number', vixen[i].split("_")[0] ).appendTo( '#cardSlots' ).droppable( {
      accept: '#cardPile div',
      hoverClass: 'hovered',
      drop: handleCardDrop
    } );
  }

  if(blnJuegoFinalizado){
    iTiempoTranscurrido = 0
    if(iTiempoLimite>5) iTiempoLimite = iTiempoLimite-5;
    else goal=true;
    blnJuegoFinalizado = false;
  }
  
  if(goal) end();
  else $.fntTiempo();

}

function end() {
  location.reload();
}

function handleCardDrop( event, ui ) {
  var slotNumber = $(this).data( 'number' );
  var cardNumber = ui.draggable.data( 'number' );

  // If the card was dropped to the correct slot,
  // change the card colour, position it directly
  // on top of the slot, and prevent it being dragged
  // again

  if ( slotNumber == cardNumber ) {
    ui.draggable.addClass( 'correct' );
    ui.draggable.draggable( 'disable' );
    $(this).droppable( 'disable' );
    ui.draggable.position( { of: $(this), my: 'left top', at: 'left top' } );
    ui.draggable.draggable( 'option', 'revert', false );
    correctCards++;
  } 
  
  // If all the cards have been placed correctly then display a message
  // and reset the cards for another go

  if ( correctCards == 5 ) {
    $('#successMessage').show();
    $('#successMessage').animate( {
      left: '380px',
      top: '200px',
      width: '400px',
      height: '100px',
      opacity: 1
    } );
    blnJuegoFinalizado = true;
  }

}

/*
  Tiempo
*/

var iTiempoLimite = 30, iTiempoTranscurrido = 0;
var blnJuegoFinalizado = false;
var goal = false;

$.fntTiempo=function(){
    if(!blnJuegoFinalizado){
      if(iTiempoTranscurrido>=iTiempoLimite){
        //finalizar el juego por tiempo
        location.reload();
      }else{
        //volvemos a llamar a esta funcion un segundo despues
        setTimeout('$.fntTiempo()',1000);
        //mostrar el estado del juego
        $('#data').find('p').html('<strong>Tiempo restante: </strong>'+(iTiempoLimite-iTiempoTranscurrido)+' segundos');
        //aumentamos el contador de tiempo transcurido
        iTiempoTranscurrido++;
      }
    }
  };