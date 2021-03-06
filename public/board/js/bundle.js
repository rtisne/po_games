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
  //socket.emit('clientRequestRefresh')
})

socket.on('hydrateClient', function (data) {
  window.scoreJ1 = []
  window.scoreJ2 = []
  window.scoreJ3 = []
  for (var i = 0; i < data.length; i++) {
    if (data[i].game == 1) {
      window.scoreJ1.push(data[i])
    } else if (data[i].game == 2) {
      window.scoreJ2.push(data[i])
    } else if (data[i].game == 3) {
      window.scoreJ3.push(data[i])
    }
  }
})

socket.on('newScore', function (data) {
  data = data[0]
  switch (data.id) {
    case 1:
      window.scoreJ1.push(data)
      var category = getCategory(window.scoreJ1, data)
      break
    case 2:
      window.scoreJ2.push(data)
      var category = getCategory(window.scoreJ2, data)
      break
    case 3:
      window.scoreJ3.push(data)
      var category = getCategory(window.scoreJ3, data)
      break
    default:
      var category = 3
      break
  }

  $modal = $('.modal-frame')
  switch (category) {
    case 0:
      $modal.find('h3').text('Nouveau Record au jeu ' + data.game)
      $modal.find('p').text(capitalize(data.firstname) + ' ' + data.lastname + ', avec un score de ' + data.score)
      break
    case 1:
      $modal.find('h3').text('Top 3 au jeu ' + data.game)
      $modal.find('p').text(capitalize(data.firstname) + ' ' + data.lastname + ', avec un score de ' + data.score)
      break
    default:
      return
  }
  $modal.removeClass('state-leave').addClass('state-appear')
  window.setTimeout(function () {
    $modal.removeClass('state-appear').addClass('state-leave')
  }, 3000)
})

socket.on('showClient', function (data) {
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

socket.on('dateLimit', function (data) {
  initializeClock('time', data[0].date)
})

socket.on('disconnect', function () {})

socket.on('getImage', function(data){
  $(".photograph>.box>img").attr("src", '/images/' + data)
})

function getCategory (array, element) {
  var score = array.sort(function (a, b) {
    return b.score - a.score
  })
  var index = score.indexOf(element)
  if (index == 0) {
    return 0
  } else if (index < 3) {
    return 1
  } else if ((index / score.length) * 100 < 15) {
    return 2
  } else if ((index / score.length) * 100 > 80) {
    return 4
  } else {
    return 3
  }
}

function capitalize (str) {
  return str.replace(/\w\S*/g, function (txt) { return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase() })
}
