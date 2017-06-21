/**
 * Created by remach on 27/04/2017.
 */
var servUrl = 'http://localhost:8090/'
window.scoreJ1 = []
window.scoreJ2 = []
window.scoreJ3 = []
var socket = io(servUrl)
socket.on('connect', function () {
  console.log('%c Connected to back-end! ', 'background: #222; color: #bada55')
  console.log('%c Asking for new show images... ', 'background: #222; color: #ffda55')
  socket.emit('clientNeedSessions')
})

socket.on('showSessions', function (data) {
  for (var i = 0; i < data.length; i++) {
    try {
      $('#face' + i).attr('src', servUrl + data[i].path) // colere, joie, neutre, surprise, tristesse
      var imgName = ''
      switch (data[i].path.split('_')[0].split('\\')[2]) {
        case 'colere':
          imgName = 'Angry.png'
          break
        case 'joie':
          imgName = 'Smiling.png'
          break
        case 'neutre':
          imgName = 'Neutral.png'
          break
        case 'surprise':
          imgName = 'Surprised.png'
          break
        case 'tristesse':
          imgName = 'Crying.png'
          break
        case 'peur':
          imgName = 'Fear.png'
          break
        case 'degout':
          imgName = 'disgust.png'
          break
        default:
          imgName = 'disgust.png'
          break
      }
      $('#emo' + i).attr('src', servUrl + 'board/smile_icon/' + imgName)
    } catch (e) {
      console.log(e)
    }
  }
})


socket.on('disconnect', function () {})
