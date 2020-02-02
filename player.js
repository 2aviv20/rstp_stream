//Status constants
var SESSION_STATUS = Flashphoner.constants.SESSION_STATUS;
var STREAM_STATUS = Flashphoner.constants.STREAM_STATUS;
 
//Websocket session 
var session;
 
 
//Init Flashphoner API on page load
function init_api() {
    console.log("init api");
        Flashphoner.init({
        });
}
 
//Connect to WCS server over websockets
function connect() {
    session = Flashphoner.createSession({urlServer: "wss://demo.flashphoner.com"}).on(SESSION_STATUS.ESTABLISHED, function(session){       
        console.log("connection established");
        playStream(session);
    });
}
 
//Playing stream with given name and mount the stream into myVideo div element
function playStream() {
    var options = {name:"rtsp://170.93.143.139/rtplive/470011e600ef003a004ee33696235daa",display:document.getElementById("myVideo")};    
    var stream = session.createStream(options).on(STREAM_STATUS.PLAYING, function(stream) {
        console.log("playing");
    });
    stream.play();
}