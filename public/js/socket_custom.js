var socket = io();
// Escuchar Procesos
socket.on('connect', function () {
    console.log('Conectado al servidor');
});
socket.on('disconnect', function () {
    console.log('Perdimos conecxion con el servirdor');
});

// Enviar informaciòn
socket.emit('enviarMensaje', {
    usuario: 'Fernand Ticona',
    message: 'Hola mundo'
}, (rs) => {
    console.log('Se disparo el CallBack', rs);
});

//Escuchar Informaciòn
socket.on('enviarMensaje', (rs) => {
    console.log('Servidor: ', rs);
})
