// $(function() {
//   var blurFilter = document.getElementById('blur-kernel');
//   var html = $('html');
//   var prevPos = $(window).scrollTop();
//   var prevTime = Date.now();
//   var speed = 0;
//   var cheat = 0;
//   var timer;

//   function blur() {
//     var newPos = $(window).scrollTop();
//     var newTime = Date.now()

//     // distance over time times milliseconds per frame
//     var velocity = (newPos - prevPos) / Math.max(1, newTime - prevTime) * 1000 / 60;

//     if (timer) window.clearTimeout(timer);
    
//     prevPos = newPos;
//     prevTime = newTime;
    
//     var STRENGTH = 2.5;
//     blurSize = Math.max(0, Math.abs(velocity) / 2 * STRENGTH - 0.5);

//     blurFilter.setStdDeviation(0, Math.floor(blurSize));
//     blurFilter.setAttribute('stdDeviation', '0,' + blurSize);

//     timer = window.setTimeout(function() {
//       // Done scrolling
//       console.log('done scrolling');
//       blurFilter.setStdDeviation(0, 0);
//       blurFilter.setAttribute('stdDeviation', '0,' + 0);
//     }, 100);
//   }

//   $(window).scroll(function() {
//     blur();
//   });

//   blur();
// });