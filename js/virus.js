/*Palabras del ahorcado*/
var palabras = [];
var descs = [];
/*Array de botones para usar mas tarde*/
var desac = document.getElementsByClassName("let");
/*Contadores para usar mas tarde*/
var contador = 0;
var contaexiste = 0;
selecter = 0;
palabraJuego = new Array();
var gud = new Audio("media/cartoon015.wav");
var bad = new Audio("media/cartoon048.wav");
/*Funcion de carga*/

function init() {

    $.getJSON("xml/vir.json", function(json) {
        for ( var i=0; i<json.length; i++ ) {
             palabras.push(json[i].names);
             descs.push(json[i].desc);
        }
        selecciona();
    });
}

/*Funciones para desactivar los enlaces*/
function desactiva_enlace(enlace) {
    enlace.disabled = 'disabled';
}
function desactiva_todo() {
    /*Uso un for para desactivar todos los botones*/
    for (b = 0; b < desac.length; b++) {
        desac[b].disabled = 'disabled';
    }
}

function activa_todo() {
    /*Uso un for para desactivar todos los botones*/
    for (b = 0; b < desac.length; b++) {
        desac[b].disabled = false;
    }
}
/*Funciones de manejo del ahorcado*/
function selecciona() {
    // Hide the success message
      //document.getElementById("texta").style.backgroundColor='white';
      $('#successMessage').hide();
      $('#successMessage').css( {
        left: '580px',
        top: '250px',
        width: 0,
        height: 0
      } );

      $('#failMessage').hide();
      $('#failMessage').css( {
        left: '581px',
        top: '250px',
        width: 0,
        height: 0
      } );
      activa_todo();
      contador = 0;
      contaexiste = 0;
      var canvas = document.getElementById('ahorcado');
      var context = canvas.getContext('2d');
      context.clearRect(0, 0, canvas.width, canvas.height);

    var seleccion = parseInt(Math.random() * (10));
    palabraJuego = palabras[seleccion];
    selecter = seleccion;
    /*Solo debug, muestra la palabra seleccionada del array de palabras*/
    //document.getElementById("debug").innerHTML = "<p>" + seleccion + "</p>"+"<p>" + palabraJuego + "</p>";
    pintarCaja(palabraJuego.length);
    $('#nombre center h4').text(descs[seleccion]);
}
function pintarCaja(tam) {
    var divletra = "";
    for (a = 0; a < tam; a++) {
        divletra += "<div class='letra' id='" + a + "'></div>";
        document.getElementById("palabra").innerHTML = divletra;
    }
}
function comprobarLetra(letra) {
    var existeLetra = false;
    for (i = 0; i < palabraJuego.length; i++) {
        if (palabraJuego[i] == letra.toUpperCase()) {
            document.getElementById(i).innerText = letra.toUpperCase();
            contaexiste++;
            existeLetra = true;
            if (contaexiste == palabraJuego.length) {
                gud.currentTime = 0;
                gud.play();
                $('#successMessage').show();
                $('#successMessage').animate( {
                  left: '380px',
                  top: '200px',
                  width: '210px',
                  height: '250px',
                  opacity: 1
                } );
                desactiva_todo();
            }
            /*alert("Existe: " + letra);*/
        }
    }
    if (existeLetra == false) {
        /*alert("ERROR " + letra);*/
        contador++;
        var canvas = document.getElementById('ahorcado');
        var ctx = canvas.getContext('2d');
        switch (contador) {
            /*Aqui va el dibujo*/
            /*Base*/
            case 1:
                ctx.beginPath();
                ctx.strokeStyle = "#00ff21";
                ctx.moveTo(20, 560);
                ctx.lineTo(200, 560);
                ctx.stroke();
                ctx.closePath();
                break;
                /*Mastil*/
            case 2:
                ctx.beginPath();
                ctx.moveTo(100, 560);
                ctx.lineTo(100, 30);
                ctx.stroke();
                ctx.closePath();
                break;
                /*Travesaño*/
            case 3:
                ctx.beginPath();
                ctx.moveTo(350, 30);
                ctx.lineTo(100, 30);
                ctx.stroke();
                ctx.closePath();
                break;
                /*Cuerda*/
            case 4:
                ctx.beginPath();
                ctx.moveTo(350, 70);
                ctx.lineTo(350, 30);
                ctx.stroke();
                ctx.closePath();
                break;
                /*Cuerpo*/
            case 6:
                ctx.beginPath();
                ctx.moveTo(350, 130);
                ctx.lineTo(350, 300);
                ctx.stroke();
                ctx.closePath();
                break;
            case 7:
                /*Izquierda*/
                ctx.beginPath();
                ctx.moveTo(300, 200);
                ctx.lineTo(350, 150);
                ctx.moveTo(300, 350);
                ctx.lineTo(350, 300);
                ctx.stroke();
                ctx.closePath();
                break;
            case 8:
                /*Derecha*/
                ctx.beginPath();
                ctx.moveTo(400, 200);
                ctx.lineTo(350, 150);
                ctx.moveTo(400, 350);
                ctx.lineTo(350, 300);
                ctx.stroke();
                ctx.closePath();
                //alert("Has perdido");
                bad.currentTime=0;
                bad.play();
                $('#failMessage').show();
                $('#failMessage').animate( {
                  left: '380px',
                  top: '200px',
                  width: '210px',
                  height: '250px',
                  opacity: 1
                } );
                desactiva_todo();
                break;
                /*Cabeza*/
            case 5:
                ctx.beginPath();
                ctx.arc(350, 100, 31.4, 0, Math.PI * 2, false);
                ctx.stroke();
                break;
        }
    }
}
/*Funciones Jquery*/
function fondoDegradado() {
    $('.fondoJQuery.oculto').css('background', degradadoAleat());
    $('.fondoJQuery').toggleClass('oculto');
}
function degradadoAleat() {
    var Inicio = {
        r: Math.floor(Math.random() * 255), g: Math.floor(Math.random() * 255), b: Math.floor(Math.random() * 255)
    };
    var Fin = {
        r: Math.floor(Math.random() * 255), g: Math.floor(Math.random() * 255), b: Math.floor(Math.random() * 255)
    };
    Inicio.rgb = 'rgb(' + Inicio.r + ',' + Inicio.g + ',' + Inicio.b + ')';
    Fin.rgb = 'rgb(' + Fin.r + ',' + Fin.g + ',' + Fin.b + ')';
    return 'radial-gradient(at center, ' + Inicio.rgb + ', ' + Fin.rgb + ')';
}

/*Funcion de debug que muestra las palabras del array*/
//function mostrarArray() {

//    var mostrar;
//    for ( a = 0; a < palabras.length; a++) {
//        mostrar += palabras[a] + "<br>";
//    }
//    /*document.getElementById("debug").innerHTML = "<p>" + mostrar + "</p>";*/
//}