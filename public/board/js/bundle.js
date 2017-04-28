/**
 * Created by remach on 27/04/2017.
 */
var servUrl = 'http://soge.gala/'
window.scoreJ1 = []
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

socket.on('hydrateClient', function(data){
    console.log(data)
    window.scoreJ1 = []
    for(var i=0; i<data.length; i++){
        if(data[i].game == 1){
            window.scoreJ1.push(data[i])
        }
    }
})

socket.on('showClient', function(data){
    for(var i = 0; i < data.length ; i++){
        try{
            $('#face'+i).attr("src", servUrl + data[i].path) //colere, joie, neutre, surprise, tristesse
            var imgName = '';
            switch(data[i].path.split('_')[0].split("\\")[2]){
                case 'colere':
                    imgName = 'Angry.png'
                    break;
                case 'joie':
                    imgName = 'Smiling.png'
                    break;
                case 'neutre':
                    imgName = 'Neutral.png'
                    break;
                case 'surprise':
                    imgName = 'Surprised.png'
                    break;
                case 'tristesse':
                    imgName = 'Sad.png'
                    break;
                default:
                    imgName = 'Angry.png'
                    break;
            }
                $('#emo'+i).attr("src", servUrl + 'board/smile_icon/' + imgName)
        }catch(e){
            console.log(e)
        }
    }
});

socket.on('disconnect', function(){});