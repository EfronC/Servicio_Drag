$( init );

var obj;
var ima;
var desc;
var nomb;

var im_a = 0;
var desc_a = 0;
var name_a = 0;

function init() {

  // Hide the success message
  //document.getElementById("texta").style.backgroundColor='white';
  $('#successMessage').hide();
  $('#successMessage').css( {
    left: '580px',
    top: '250px',
    width: 0,
    height: 0
  } );

  // Create images
  //Si se cambia el nombre al dispositivo aqu[i, hay que cambiarlo tambien en el json
  var numbers = [];

  for (var i = 0; i < 44; i++) {
    numbers[i] = i+1;
  };

  numbers.sort( function() { return Math.random() - .5 } );
  var vixen = numbers.slice(0,5);
  ima = vixen.slice(0);

  $.getJSON("xml/mant.json", function(json) {
   for ( var i=0; i<json.length; i++ ) {
    if(ima[0] == json[i].iden){$('#imagen').attr("src","media/mantenimiento/" + json[i].im).data( 'number', ima[0] );} 
  }
});
  

  // Create descs
  vixen.sort(function() {return Math.random() - .5});
  desc = vixen.slice(0);
  //var words = [ 'resistencia', 'inductor', 'capacitor', 'transistor-NPN', 'transistor-PNP', 'diodo', 'opto-acoplador', 'MOSFET', 'trans-formador', 'fuente' ];
  $.getJSON("xml/mant.json", function(json) {
   for ( var i=0; i<json.length; i++ ) {
    if(desc[0] == json[i].iden){$('#descripcion center h4').text(json[i].desc).data( 'number', desc[0] );} 
  }
});

  // Create names
  vixen.sort(function() {return Math.random() - .5});
  nomb = vixen.slice(0);

  $.getJSON("xml/mant.json", function(json) {
   for ( var i=0; i<json.length; i++ ) {
    if(nomb[0] == json[i].iden){$('#nombre center h4').text(json[i].names).data( 'number', nomb[0] );} 
  }
});

}

function regresa_desc() //this will apply to all anchor tags
{ 
  var vixen = desc;
  $.getJSON("xml/mant.json", function(json) {
    if(desc_a==0) {desc_a = 4;}
    else {desc_a = desc_a-1;}
    for ( var i=0; i<json.length; i++ ) {
      if(vixen[desc_a] == json[i].iden) $('#descripcion center h4').text(json[i].desc).data( 'number', desc[desc_a] );
    }
    /*if($('#card'+$('#texta').data('number')).hasClass('correct')) document.getElementById("texta").style.backgroundColor='#66ff66'; 
    else document.getElementById("texta").style.backgroundColor='#ffcc99';*/
  });
}

  function avanza_desc() //this will apply to all anchor tags
  { 
    var vixen = desc;
    $.getJSON("xml/mant.json", function(json) {
      if(desc_a==4) {desc_a = 0;}
      else {desc_a = desc_a+1;}
      for ( var i=0; i<json.length; i++ ) {
        if(vixen[desc_a] == json[i].iden) $('#descripcion center h4').text(json[i].desc).data( 'number', desc[desc_a] );
      }
      /*if($('#card'+$('#texta').data('number')).hasClass('correct')) document.getElementById("texta").style.backgroundColor='#66ff66'; 
      else document.getElementById("texta").style.backgroundColor='#ffcc99';*/
    });
  }

  function regresa_name() //this will apply to all anchor tags
  { 
    var vixen = nomb;
    $.getJSON("xml/mant.json", function(json) {
      if(name_a==0) {name_a = 4;}
      else {name_a = name_a-1;}
      for ( var i=0; i<json.length; i++ ) {
        if(vixen[name_a] == json[i].iden) $('#nombre center h4').text(json[i].names).data( 'number', nomb[name_a] );
      }
      /*if($('#card'+$('#texta').data('number')).hasClass('correct')) document.getElementById("texta").style.backgroundColor='#66ff66'; 
      else document.getElementById("texta").style.backgroundColor='white';*/
    });
  }

  function avanza_name() //this will apply to all anchor tags
  { 
    var vixen = nomb;
    $.getJSON("xml/mant.json", function(json) {
      if(name_a==4) {name_a = 0;}
      else {name_a = name_a+1;}
      for ( var i=0; i<json.length; i++ ) {
        if(vixen[name_a] == json[i].iden) $('#nombre center h4').text(json[i].names).data( 'number', nomb[name_a] );
      }
      /*if($('#card'+$('#texta').data('number')).hasClass('correct')) document.getElementById("texta").style.backgroundColor='#66ff66'; 
      else document.getElementById("texta").style.backgroundColor='white';*/
    });
  }

  function regresa_im() //this will apply to all anchor tags
  { 
    var vixen = ima;
    $.getJSON("xml/mant.json", function(json) {
      if(im_a==0) {im_a = 4;}
      else {im_a = im_a-1;}
      for ( var i=0; i<json.length; i++ ) {
        if(vixen[im_a] == json[i].iden) $('#imagen').attr("src","media/mantenimiento/" + json[i].im).data( 'number', ima[im_a] );
      }
      /*if($('#card'+$('#texta').data('number')).hasClass('correct')) document.getElementById("texta").style.backgroundColor='#66ff66'; 
      else document.getElementById("texta").style.backgroundColor='white';*/
    });
  }

  function avanza_im() //this will apply to all anchor tags
  { 
    var vixen = ima;
    $.getJSON("xml/mant.json", function(json) {
      if(im_a==4) {im_a = 0;}
      else {im_a = im_a+1;}
      for ( var i=0; i<json.length; i++ ) {
        if(vixen[im_a] == json[i].iden) $('#imagen').attr("src","media/mantenimiento/" + json[i].im).data( 'number', ima[im_a] );
      }
      /*if($('#card'+$('#texta').data('number')).hasClass('correct')) document.getElementById("texta").style.backgroundColor='#66ff66'; 
      else document.getElementById("texta").style.backgroundColor='white';*/
    });
  }
