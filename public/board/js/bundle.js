/**
 * Created by remach on 27/04/2017.
 */
var servUrl = 'http://soge.gala/'

var socket = io(servUrl);
socket.on('connect', function(){
    console.log('%c Connected to back-end! ', 'background: #222; color: #bada55');
    console.log('%c Asking for new show images... ', 'background: #222; color: #ffda55');
    socket.emit("clientRequestShow", 3);
    setInterval(function(){
        console.log('%c Asking for new show images... ', 'background: #222; color: #ffda55');
        socket.emit("clientRequestShow", {countPictures: 3});
    },
    5000)
});

socket.on('showClient', function(data){
    for(var i = 0; i < data.length ; i++){
        try{
            $('#face'+i).attr("src", servUrl + data[i].path)
        }catch(e){
            console.log(e)
        }
    }
});

socket.on('disconnect', function(){});