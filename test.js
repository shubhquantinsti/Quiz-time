// function timeConversion(millisec) {
//
//        var seconds = (millisec / 1000).toFixed(1);
//
//        var minutes = (millisec / (1000 * 60)).toFixed(1);
//
//        var hours = (millisec / (1000 * 60 * 60)).toFixed(1);
//
//        var days = (millisec / (1000 * 60 * 60 * 24)).toFixed(1);
//
//        if (seconds < 60) {
//            return seconds + " Sec";
//        } else if (minutes < 60) {
//            return minutes + " Min";
//        } else if (hours < 24) {
//            return hours + " Hrs";
//        } else {
//            return days + " Days"
//        }
//    }


function convertMS(ms) {
  var d, h, m, s;
  s = Math.floor(ms / 1000);
  m = Math.floor(s / 60);
  s = s % 60;
  h = Math.floor(m / 60);
  m = m % 60;
  d = Math.floor(h / 24);
  h = h % 24;
  return { d: d, h: h, m: m, s: s };
};


var v = convertMS(13216548845531321);
console.log(v);
