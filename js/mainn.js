const  typed = new Typed('.typed', {
	strings: [
	          '<i class="mario">Americano</i>', 
	          '<i class="mario">Expreso</i>', 
	          '<i class="mario">Olla</i>', 
	          '<i class="mario">Moka</i>'
	          ],

    stringsElement: '#cadenas-texto', //llamar ID//
    typedSpeed: 70, 
    startDelay:1800, //tiempo antes de iniciar la animación//
    backSpeed:70, //Va de regreso//
    smartBackspace: true,
    shuffle: true,
    backDelay:1800,
    loop: true, //Repite la cadena//
    loopCount: false, //False, sea infinito//
    showCursor: true,
    cursorChar: '/',
    contentType:'html', // texto sin formato//
    

});