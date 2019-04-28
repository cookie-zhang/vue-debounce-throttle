// 防抖
// export function throttle (timer, time) {
//   if (timer) {
//     clearTimeout(timer)
//   }
//   timer = setTimeout(() => {
//     // eslint-disable-next-line no-unused-expressions
//     console.log(2)
//   }, time)
// }
export function _throttle (fn, interval) {
  var last
  var timer
  // eslint-disable-next-line no-redeclare
  var interval = interval || 200
  return function () {
    var th = this
    var args = arguments
    var now = +new Date()
    if (last && now - last < interval) {
      clearTimeout(timer)
      timer = setTimeout(function () {
        last = now
        fn.apply(th, args)
      }, interval)
    } else {
      last = now
      fn.apply(th, args)
    }
  }
}
