/**
 * Created by remach on 27/04/2017.
 */

var socket = io('http://localhost:8090/');
socket.on('connect', function(){
    console.log('%c Connected to back-end! ', 'background: #222; color: #bada55');
});
socket.on('event', function(data){});
socket.on('disconnect', function(){});