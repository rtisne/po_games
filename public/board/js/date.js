/**
 * Created by rtisne on 09/05/2017.
 */
function getTimeRemaining (endtime) {
  var t = Date.parse(endtime) - Date.parse(new Date())
  var seconds = Math.floor((t / 1000) % 60)
  var minutes = Math.floor((t / 1000 / 60) % 60)
  var hours = Math.floor((t / (1000 * 60 * 60)) % 24)
  var days = Math.floor(t / (1000 * 60 * 60 * 24))
  return {
    'total': t,
    'days': days,
    'hours': minTwoDigits(hours),
    'minutes': minTwoDigits(minutes),
    'seconds': minTwoDigits(seconds)
  }
}

function initializeClock (id, endtime) {
  var clock = document.getElementById(id)
  var timeinterval = setInterval(function () {
    var t = getTimeRemaining(endtime)
    clock.innerHTML = ((t.hours > 0)? t.hours + 'h': '') + t.minutes + 'm' + t.seconds
    if (t.total <= 0) {
      clearInterval(timeinterval)
    }
  }, 1000)
}

function minTwoDigits (n) {
  return (n < 10 ? '0' : '') + n
}

function dateAdd (date, interval, units) {
  var ret = new Date(date)
  var checkRollover = function () { if (ret.getDate() != date.getDate()) ret.setDate(0)}
  switch (interval.toLowerCase()) {
    case 'year'   :
      ret.setFullYear(ret.getFullYear() + units)
      checkRollover()
      break
    case 'quarter':
      ret.setMonth(ret.getMonth() + 3 * units)
      checkRollover()
      break
    case 'month'  :
      ret.setMonth(ret.getMonth() + units)
      checkRollover()
      break
    case 'week'   :
      ret.setDate(ret.getDate() + 7 * units)
      break
    case 'day'    :
      ret.setDate(ret.getDate() + units)
      break
    case 'hour'   :
      ret.setTime(ret.getTime() + units * 3600000)
      break
    case 'minute' :
      ret.setTime(ret.getTime() + units * 60000)
      break
    case 'second' :
      ret.setTime(ret.getTime() + units * 1000)
      break
    default       :
      ret = undefined
      break
  }
  return ret
}
